import { useImages } from "../../contexts/images/ImagesState";

import { Card } from "../common/Card";
import { DetailsTableHeader } from "../table/DetailsTableHeader";
import { DetailsTableRow } from "../table/DetailsTableRow";

export const DetailsTable = () => {
  const imagesState = useImages();
  console.log(imagesState);
  if (imagesState.imageFiles.length == 0) {
    return null;
  } else {
    return (
      <Card className="max-w-4xl">
        <div className="overflow-y-auto scrollbar-w-2 scrollbar-track-gray-lighter scrollbar-thumb-rounded scrollbar-thumb-gray scrolling-touch">
          <table className="w-full text-left table-collapse">
            <DetailsTableHeader fields={["image", "fileName"]} />
            <tbody className="align-baseline">
              {imagesState.imageFiles.map((imageFile) => {
                return (
                  <DetailsTableRow
                    imgUrl={imageFile.dataUrl}
                    fileName={imageFile.fileName}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
    );
  }
};
