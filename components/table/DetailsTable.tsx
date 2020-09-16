import { useImages } from "../../contexts/images/ImagesState";

import { Card } from "../common/Card";
import { DetailsTableHeader } from "../table/DetailsTableHeader";
import { DetailsTableRow } from "../table/DetailsTableRow";

import { useDataFields } from "../../contexts/table/DataFieldsState";

export const DetailsTable = () => {
  const imagesState = useImages();
  const dataFieldsState = useDataFields();
  console.log(imagesState);
  if (imagesState.imageFiles.length == 0) {
    return null;
  } else {
    return (
      <Card className="max-w-4xl">
        <div className="overflow-y-auto scrollbar-w-2 scrollbar-track-gray-lighter scrollbar-thumb-rounded scrollbar-thumb-gray scrolling-touch">
          <table className="w-full text-left border-collapse">
            <DetailsTableHeader fields={dataFieldsState.dataFields} />
            <tbody className="align-baseline">
              {imagesState.imageFiles.map((imageFile) => {
                return (
                  <DetailsTableRow
                    imgUrl={imageFile.dataUrl}
                    fileName={imageFile.fileName}
                    fields={dataFieldsState.dataFields}
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
