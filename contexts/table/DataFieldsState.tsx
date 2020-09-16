import {
  useReducer,
  useContext,
  createContext,
  Dispatch,
  ReactNode,
} from "react";

export type DataFieldsState = { dataFields: string[] };

const initialState = {
  dataFields: [] as string[],
};

export type DataFieldsAction =
  | { type: "ADD"; payload: string }
  | { type: "RESET" };

const DataFieldsStateContext = createContext<DataFieldsState>(initialState);
const DataFieldsDispatchContext = createContext(
  (() => null) as Dispatch<DataFieldsAction>
);

const reducer = (state: DataFieldsState, action: DataFieldsAction) => {
  switch (action.type) {
    case "ADD":
      return { dataFields: [...state.dataFields, action.payload] };
    case "RESET":
      return { dataFields: [] as string[] };
    default:
      throw new Error(`Unknown action: ${action["type"]}`);
  }
};

export const DataFieldsStateProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <DataFieldsDispatchContext.Provider value={dispatch}>
      <DataFieldsStateContext.Provider value={state}>
        {children}
      </DataFieldsStateContext.Provider>
    </DataFieldsDispatchContext.Provider>
  );
};

export const useDataFields = () => useContext(DataFieldsStateContext);
export const useDispatchDataFields = () =>
  useContext(DataFieldsDispatchContext);
