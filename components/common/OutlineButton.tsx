import { MouseEvent, ReactNode } from "react";

export const OutlineButton = ({
  children,
  disabled = false,
  handleOnClick,
}: {
  children: ReactNode;
  disabled?: boolean;
  handleOnClick: (event: MouseEvent<HTMLButtonElement>) => void;
}) => {
  return disabled ? (
    <button
      type="button"
      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-full opacity-25 cursor-not-allowed"
    >
      {children}
    </button>
  ) : (
    <button
      type="button"
      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-full"
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
};
