export const Card = (props) => {
  return (
    <div className="flex z-10 align-center justify-center">
      <div
        className={`${props.className} rounded-lg overflow-hidden shadow-lg bg-white`}
      >
        <div className="px-6 py-4">{props.children}</div>
      </div>
    </div>
  );
};
