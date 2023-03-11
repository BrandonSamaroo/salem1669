import "@/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { AppProps } from "next/app";

import { config as fontAwesomeConfig } from "@fortawesome/fontawesome-svg-core";

// * Configuring Font Awesome
fontAwesomeConfig.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
    return (
        // TODO change default dark mode to use media query of user-prefers-theme
        <div className='app dark bg-bg1 text-onBg/80'>
            <header className='flex flex-wrap items-center justify-center gap-8 border-b-2 border-bg3 py-4'>Salem 1669</header>
            <main className='relative flex flex-col items-center justify-start scroll-smooth'>
                <Component {...pageProps} />
            </main>
        </div>
    );
}
