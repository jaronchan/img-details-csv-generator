import "../styles/tailwind.css";
import "../styles/globals.css";
import { AppProps } from "next/app";

import { ImagesStateProvider } from "../contexts/images/ImagesState";
import { DataFieldsStateProvider } from "../contexts/table/DataFieldsState";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ImagesStateProvider>
      <DataFieldsStateProvider>
        <Component {...pageProps} />
      </DataFieldsStateProvider>
    </ImagesStateProvider>
  );
}
