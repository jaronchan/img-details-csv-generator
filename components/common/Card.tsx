export const Card = (props) => {
  return (
    <div className="flex z-10 align-center justify-center">
      <div className={`${props.className} rounded overflow-hidden shadow-lg`}>
        <div className="px-6 py-4">{props.children}</div>
      </div>
    </div>
  );
};
