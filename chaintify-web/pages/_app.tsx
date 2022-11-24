import "../styles/globals.css";
import type { AppProps } from "next/app";
import ThemeContextProvider from "../contexts/useTheme";
import MusicPlayerContextProvider from "../contexts/useMusicPlayer";
import MusicPlayer from "../components/MusicPlayer";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <MusicPlayerContextProvider>
        <>
          <Component {...pageProps} />
          <MusicPlayer />
        </>
      </MusicPlayerContextProvider>
    </ThemeContextProvider>
  );
}
