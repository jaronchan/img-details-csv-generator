import "../styles/tailwind.css";
import "../styles/globals.css";
import { AppProps } from "next/app";

import { ImagesStateProvider } from "../contexts/images/ImagesState";
import { DataFieldsStateProvider } from "../contexts/table/DataFieldsState";
import { DataTableStateProvider } from "../contexts/table/DataTableState";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ImagesStateProvider>
      <DataFieldsStateProvider>
        <DataTableStateProvider>
          <Component {...pageProps} />
        </DataTableStateProvider>
      </DataFieldsStateProvider>
    </ImagesStateProvider>
  );
}
