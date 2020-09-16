import { useState, MouseEvent, FormEvent, KeyboardEvent } from "react";
import { useDispatchDataFields } from "../../contexts/table/DataFieldsState";
import { useDispatchDataTable } from "../../contexts/table/DataTableState";

export const AddFieldButton = () => {
  const dataFieldsDispatch = useDispatchDataFields();
  const dataTableDispatch = useDispatchDataTable();

  const [isInput, setInputMode] = useState(false);
  const [fieldValue, setFieldValue] = useState<string>("");

  const handleButtonClick = () => {
    setInputMode(true);
  };

  const handleInputChange = (event: FormEvent<HTMLInputElement>): void => {
    setFieldValue(event.currentTarget.value);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      dataFieldsDispatch({ type: "ADD", payload: fieldValue });
      dataTableDispatch({ type: "NEW_FIELD", payload: fieldValue });
      resetState();
    }
  };

  const resetState = () => {
    setInputMode(false);
    setFieldValue("");
  };
  {
    return isInput ? (
      <div className="flex flex-row">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          name="fieldName"
          type="text"
          placeholder="new field"
          value={fieldValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          style={{ minWidth: "8rem" }}
        />
        <button
          type="button"
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded w-full"
          onClick={resetState}
        >
          Cancel
        </button>
      </div>
    ) : (
      <button
        type="button"
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white text-xl py-1 px-2 border border-blue-500 hover:border-transparent rounded w-full"
        onClick={handleButtonClick}
      >
        +
      </button>
    );
  }
};
