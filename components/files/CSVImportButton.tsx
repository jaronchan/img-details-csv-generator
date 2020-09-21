import { useImages } from "../../contexts/images/ImagesState";
import {
  useDataFields,
  useDispatchDataFields,
} from "../../contexts/table/DataFieldsState";
import {
  useDataTable,
  useDispatchDataTable,
} from "../../contexts/table/DataTableState";
import { OutlineButton } from "../common/OutlineButton";
import CSVReader from "react-csv-reader";

export const CSVImportButton = () => {
  const imagesState = useImages();
  const dataTableState = useDataTable();
  const dataFieldsState = useDataFields();
  const dataFieldsDispatch = useDispatchDataFields();
  const dataTableDispatch = useDispatchDataTable();

  // const [isImportReady, setImportMode] = useState(false);

  // const handleButtonClick = () => {
  //   dataTableDispatch({
  //     type: "GENERATE",
  //     payload: imagesState.imageFiles.map((image) => {
  //       return new Map<string, string>().set("fileName", image.fileName);
  //     }),
  //   });
  //   setGenerateMode(false);
  // };

  const handleButtonClick = () => {
    document.getElementById("csv-input").click();
  };

  return dataTableState.dataTable.length != 0 ? (
    <div className="container">
      <CSVReader
        inputId="csv-input"
        parserOptions={{ header: true }}
        onFileLoaded={(data, fileInfo) => {
          if (data.length != 0 && Object.keys(data[0]).includes("fileName")) {
            Object.keys(data[0]).forEach((key) => {
              if (
                key != "fileName" &&
                !dataFieldsState.dataFields.includes(key)
              ) {
                dataFieldsDispatch({ type: "ADD", payload: key });
                // dataTableDispatch({ type: "NEW_FIELD", payload: key });
              }
            });
            dataTableDispatch({ type: "BULK_UPDATE", payload: data });
          }
        }}
        inputStyle={{ display: "none" }}
      />
      <OutlineButton handleOnClick={handleButtonClick}>
        Import CSV
      </OutlineButton>
    </div>
  ) : (
    <div className="container">
      <OutlineButton disabled={true} handleOnClick={() => {}}>
        Import CSV
      </OutlineButton>
    </div>
  );
};
