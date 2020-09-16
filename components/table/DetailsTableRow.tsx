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
      {fields.map((field) => {
        return <td />;
      })}
      <td />
    </tr>
  );
};
