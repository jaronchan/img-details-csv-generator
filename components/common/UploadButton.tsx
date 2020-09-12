import { MouseEvent, ReactNode } from "react";

export type UploadButtonType = "image" | "csv";

export const UploadButton = ({
  children,
  handleOnClick,
}: {
  children: ReactNode;
  handleOnClick: (event: MouseEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <button
      type="button"
      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-full"
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
};
