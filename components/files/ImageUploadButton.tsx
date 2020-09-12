import { useRef } from "react";
import { UploadButton } from "../common/UploadButton";
import { useDispatchImages } from "../../contexts/images/ImagesState";

import { ImageFile } from "../../contexts/images/ImageFile";

export const ImageUploadButton = () => {
  const dispatch = useDispatchImages();

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
    dispatch({
      type: "UPLOAD",
      payload: parsedImages,
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
      <UploadButton type="image" handleOnClick={handleButtonClick} />
    </div>
  );
};
