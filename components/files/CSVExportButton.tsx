import { useRef, MouseEvent } from "react";
import { OutlineButton } from "../common/OutlineButton";
import { useDataTable } from "../../contexts/table/DataTableState";
import { CSVLink } from "react-csv";

export const CSVExportButton = () => {
  const dataTableState = useDataTable();

  const hiddenCSVLink = useRef(null);
  const handleButtonClick = () => {
    hiddenCSVLink.current.link.click();
  };

  let data = dataTableState.dataTable.map((row) => {
    return Object.fromEntries(row);
  });

  return dataTableState.dataTable.length != 0 ? (
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
  ) : (
    <OutlineButton disabled handleOnClick={() => {}}>
      Export
    </OutlineButton>
  );
};
