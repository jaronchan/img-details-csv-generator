import {
  useReducer,
  useContext,
  createContext,
  Dispatch,
  ReactNode,
} from "react";

export type DataTableState = { dataTable: Map<string, string>[] };

const initialState = { dataTable: [] as Map<string, string>[] };

export type DataTableAction =
  | { type: "GENERATE"; payload: Map<string, string>[] }
  | { type: "NEW_FIELD"; payload: string }
  | {
      type: "UPDATE_VALUE";
      payload: { index: number; key: string; value: string };
    }
  | { type: "BULK_UPDATE"; payload: Object[] }
  | { type: "RESET" };

const DataTableStateContext = createContext<DataTableState>(initialState);
const DataTableDispatchContext = createContext(
  (() => null) as Dispatch<DataTableAction>
);

const reducer = (state: DataTableState, action: DataTableAction) => {
  switch (action.type) {
    case "GENERATE":
      return { dataTable: action.payload };
    case "NEW_FIELD":
      return {
        dataTable: state.dataTable.map((row) => {
          return row.set(action.payload, "");
        }),
      };
    case "BULK_UPDATE":
      let tempTable = [...state.dataTable];
      let newFields: string[] = [];
      Object.keys(action.payload[0]).forEach((key) => {
        if (key != "fileName" && !tempTable[0].has(key)) {
          newFields.push(key);
        }
      });
      tempTable = tempTable.map((row) => {
        newFields.forEach((field) => {
          return row.set(field, "");
        });
        return row;
      });

      // data matching

      action.payload.forEach((importRow) => {
        let matchingRow = tempTable.find((tempRow) => {
          return tempRow.get("fileName") == importRow["fileName"];
        });
        if (typeof matchingRow !== "undefined") {
          Object.keys(importRow).forEach((key) => {
            if (key != "fileName") {
              matchingRow.set(key, importRow[key]);
            }
          });
        }
        console.dir(matchingRow);
      });

      console.dir(tempTable);
      console.log("BULK UPDATE DONE");
      return { dataTable: [...tempTable] };
    case "UPDATE_VALUE":
      let newTable = [...state.dataTable];
      newTable[action.payload.index].set(
        action.payload.key,
        action.payload.value
      );
      return {
        dataTable: newTable,
      };
    case "RESET":
      return initialState;
    default:
      throw new Error(`Unknown action: ${action["type"]}`);
  }
};

export const DataTableStateProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <DataTableDispatchContext.Provider value={dispatch}>
      <DataTableStateContext.Provider value={state}>
        {children}
      </DataTableStateContext.Provider>
    </DataTableDispatchContext.Provider>
  );
};

export const useDataTable = () => useContext(DataTableStateContext);
export const useDispatchDataTable = () => useContext(DataTableDispatchContext);
