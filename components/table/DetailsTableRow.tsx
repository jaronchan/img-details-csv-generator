import { FormEvent } from "react";
import {
  useDataTable,
  useDispatchDataTable,
} from "../../contexts/table/DataTableState";

export const DetailsTableRow = ({
  index,
  imgUrl,
  fileName,
  fields,
}: {
  index: number;
  imgUrl: string;
  fileName: string;
  fields: string[];
}) => {
  const dataTableState = useDataTable();
  const dataTableDispatch = useDispatchDataTable();

  const handleInputChange = (event: FormEvent<HTMLInputElement>): void => {
    dataTableDispatch({
      type: "UPDATE_VALUE",
      payload: {
        index: index,
        key: event.currentTarget.name,
        value: event.currentTarget.value,
      },
    });
  };

  return (
    <tr>
      <td className="p-2 font-mono text-xs text-purple-700">
        <img
          className="rounded-lg"
          style={{ maxWidth: "10rem" }}
          src={imgUrl}
          alt={fileName}
        />
      </td>
      <td className="p-2 font-mono text-xs text-blue-700 whitespace-no-wrap">
        {fileName}
      </td>
      {fields.map((field) => {
        return (
          <td key={field + index} style={{ minWidth: "12rem" }}>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder={field}
              value={dataTableState.dataTable[index].get(field)}
              name={field}
              onChange={handleInputChange}
              // onKeyDown={handleKeyPress}
            />
          </td>
        );
      })}
      <td />
    </tr>
  );
};
