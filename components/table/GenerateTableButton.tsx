import { useState } from "react";
import { useImages } from "../../contexts/images/ImagesState";
import { useDispatchDataTable } from "../../contexts/table/DataTableState";
import { OutlineButton } from "../common/OutlineButton";

export const GenerateTableButton = () => {
  const imagesState = useImages();
  const dataTableDispatch = useDispatchDataTable();

  const [isGenerate, setGenerateMode] = useState(true);

  const handleButtonClick = () => {
    dataTableDispatch({
      type: "GENERATE",
      payload: imagesState.imageFiles.map((image) => {
        return new Map<string, string>().set("fileName", image.fileName);
      }),
    });
    setGenerateMode(false);
  };
  return isGenerate && imagesState.imageFiles.length != 0 ? (
    <OutlineButton handleOnClick={handleButtonClick}>Generate</OutlineButton>
  ) : (
    <OutlineButton disabled={true} handleOnClick={handleButtonClick}>
      Generate Table
    </OutlineButton>
  );
};
