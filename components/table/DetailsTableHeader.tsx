export const DetailsTableHeader = ({ fields }: { fields: string[] }) => {
  return (
    <thead>
      <tr>
        {fields.map((field) => {
          return (
            <th
              className="z-20 sticky top-0 text-sm font-semibold text-gray-700 bg-gray-100 p-0"
              key={field}
            >
              <div className="p-2 border-b border-gray-300">{field}</div>
            </th>
          );
        })}
      </tr>
    </thead>
  );
};
