import { useRef, MouseEvent } from "react";
import { OutlineButton } from "../common/OutlineButton";
import { useDataTable } from "../../contexts/table/DataTableState";
import { CSVLink } from "react-csv";

export const CSVExportButton = () => {
  const dataTableState = useDataTable();

  const hiddenCSVLink = useRef(null);
  const handleButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    hiddenCSVLink.current.link.click();
  };

  const handleImageFilesUpload = (uploadedImageFiles: FileList) => {};

  let data = dataTableState.dataTable.map((row) => {
    return Object.fromEntries(row);
  });

  return (
    <div className="container">
      <CSVLink
        ref={hiddenCSVLink}
        data={data}
        filename="image_details.csv"
        style={{ display: "none" }}
      >
        Download Me
      </CSVLink>
      <OutlineButton handleOnClick={handleButtonClick}>Export</OutlineButton>
    </div>
  );
};
