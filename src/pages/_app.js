import "@/styles/globals.css";
import { SharedLayout } from "@/exports";

export default function App({ Component, pageProps }) {
  return (
    <SharedLayout>
      <Component {...pageProps} />
    </SharedLayout>
  );
}
