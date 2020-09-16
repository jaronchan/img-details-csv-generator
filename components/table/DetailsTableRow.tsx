export const DetailsTableRow = ({
  imgUrl,
  fileName,
  fields,
}: //   fields,
//   data,
{
  imgUrl: string;
  fileName: string;
  fields: string[];
  //   data: string[],
}) => {
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
      {fields.map((field, index) => {
        return (
          <td key={field + index} style={{ minWidth: "12rem" }}>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder={field}
              // value={fieldValue}
              // onChange={handleInputChange}
              // onKeyDown={handleKeyPress}
            />
          </td>
        );
      })}
      <td />
    </tr>
  );
};
