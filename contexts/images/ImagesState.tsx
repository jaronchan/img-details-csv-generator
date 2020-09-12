import { useReducer, useContext, createContext, Dispatch } from "react";
import { ImageFile } from "./ImageFile";

export type ImagesState = {
  imageFiles: Array<ImageFile>;
};

const initialState = {
  imageFiles: [],
};

export type ImagesAction =
  | { type: "UPLOAD"; payload: Array<ImageFile> }
  | { type: "RESET" };
const ImagesStateContext = createContext<ImagesState>(initialState);
const ImagesDispatchContext = createContext(
  (() => null) as Dispatch<ImagesAction>
);

const reducer = (state: ImagesState, action: ImagesAction) => {
  switch (action.type) {
    case "UPLOAD":
      return { imageFiles: action.payload };
    case "RESET":
      return { imageFiles: [] };
    default:
      throw new Error(`Unknown action: ${action["type"]}`);
  }
};

export const ImagesStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ImagesDispatchContext.Provider value={dispatch}>
      <ImagesStateContext.Provider value={state}>
        {children}
      </ImagesStateContext.Provider>
    </ImagesDispatchContext.Provider>
  );
};

export const useImages = () => useContext(ImagesStateContext);
export const useDispatchImages = () => useContext(ImagesDispatchContext);
