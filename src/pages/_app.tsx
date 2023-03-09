import "@/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { config as fontAwesomeConfig } from "@fortawesome/fontawesome-svg-core";

// * Configuring Font Awesome
fontAwesomeConfig.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
