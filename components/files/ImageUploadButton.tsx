import { useRef } from "react";
import { UploadButton } from "../common/UploadButton";
import {
  useDispatchImages,
  useImages,
} from "../../contexts/images/ImagesState";

import { ImageFile } from "../../contexts/images/ImageFile";
import {
  useDataTable,
  useDispatchDataTable,
} from "../../contexts/table/DataTableState";

export const ImageUploadButton = () => {
  const imagesState = useImages();
  const dataTableState = useDataTable();
  const imageDispatch = useDispatchImages();
  const dataTableDispatch = useDispatchDataTable();

  const hiddenFileInput = useRef(null);
  const handleButtonClick = (event) => {
    hiddenFileInput.current.click();
  };
  const uploadImageFiles = (event) => {
    handleImageFilesUpload(event.target.files);
  };

  const handleImageFilesUpload = (uploadedImageFiles: FileList) => {
    const parsedImages: Array<ImageFile> = [];
    // Parse the zip file
    Array.from(uploadedImageFiles).forEach((imageFile) => {
      parsedImages.push({
        dataUrl: URL.createObjectURL(imageFile),
        fileName: imageFile.name,
      });
    });

    // Dispatch ImageFile
    imageDispatch({
      type: "UPLOAD",
      payload: parsedImages,
    });

    dataTableDispatch({
      type: "GENERATE",
      payload: parsedImages.map((image) => {
        return new Map<string, string>().set("fileName", image.fileName);
      }),
    });
  };

  return (
    <div className="container">
      <input
        type="file"
        ref={hiddenFileInput}
        multiple
        // accept="image/*"
        onChange={uploadImageFiles}
        style={{ display: "none" }}
      />
      <UploadButton handleOnClick={handleButtonClick}>
        Image
        {imagesState.imageFiles.length == 0 ? null : (
          <span
            className="inline-flex rounded-full bg-blue-700 w-6 h-6 text-white text-xs items-center justify-center"
            style={{ marginLeft: "0.5rem" }}
          >
            {imagesState.imageFiles.length}
          </span>
        )}
      </UploadButton>
    </div>
  );
};
