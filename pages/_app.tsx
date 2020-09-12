import "../styles/tailwind.css";
import "../styles/globals.css";
import { AppProps } from "next/app";

import { ImagesStateProvider } from "../contexts/images/ImagesState";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ImagesStateProvider>
      <Component {...pageProps} />
    </ImagesStateProvider>
  );
}
