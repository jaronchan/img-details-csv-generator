import { MouseEvent } from "react";
import { useDispatchDataFields } from "../../contexts/table/DataFieldsState";

export const AddFieldButton = () => {
  const dispatch = useDispatchDataFields();
  const handleButtonClick = () => {
    dispatch({ type: "ADD", payload: "new field" });
  };

  return (
    <button
      type="button"
      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white text-xl py-1 px-2 border border-blue-500 hover:border-transparent rounded w-full"
      onClick={handleButtonClick}
    >
      +
    </button>
  );
};
