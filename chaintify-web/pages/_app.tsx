import "../styles/globals.css";
import type { AppProps } from "next/app";
import ThemeContextProvider from "../contexts/useTheme";
import MusicPlayerContextProvider from "../contexts/useMusicPlayer";
import MusicPlayer from "../components/MusicPlayer";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeContextProvider>
          <MusicPlayerContextProvider>
            <>
              <Component {...pageProps} />
              <MusicPlayer />
            </>
          </MusicPlayerContextProvider>
        </ThemeContextProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}
