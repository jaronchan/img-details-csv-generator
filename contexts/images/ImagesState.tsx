import { useReducer, useContext, createContext } from "react";
import ImageFile from "./ImageFile";

export type ImagesState = {
  imageFiles: ImageFile[];
};

const initialState = {
  imageFiles: [],
};

const ImagesStateContext = createContext<ImagesState>(initialState);
const ImagesDispatchContext = createContext({});

const reducer = (state, action) => {
  switch (action.type) {
    case "UPLOAD":
      return action.payload;
    case "RESET":
      return [];
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export const ImagesStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
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
