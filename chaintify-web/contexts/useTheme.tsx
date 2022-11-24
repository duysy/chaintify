import { createContext, ReactChild, useContext, useState } from "react";
import { ThemeProvider, createTheme, ThemeOptions } from "@mui/material/styles";
import { deepOrange, grey } from "@mui/material/colors";
export type ThemeContextValue = {
  mode: string;
  setMode: any;
  autoSetMode: () => void;
};
export const ThemeContext = createContext<ThemeContextValue>({} as ThemeContextValue);

type Props = {
  children: ReactChild;
};

const ThemeContextProvider = ({ children }: Props) => {
  const [mode, setMode] = useState<"dark" | "light">("dark");
  const dartMode = createTheme({
    palette: {
      mode: mode,
      ...{
        primary: grey,
        divider: deepOrange[700],
        background: {
          default: "#1A1E1F",
          paper: "#1A1E1F",
        },
        text: {
          primary: "#FFFFFF",
          secondary: grey[500],
        },
      },
    },
  });

  const lightMode = createTheme({
    palette: {
      mode: mode,
      ...{
        primary: deepOrange,
        divider: deepOrange[700],
        background: {
          default: "#FFFFFF",
          paper: deepOrange[900],
        },
        text: {
          primary: "#1A1E1F",
          secondary: grey[500],
        },
      },
    },
  });
  const autoSetMode = () => {
    if (mode === "dark") {
      setMode("light");
    }
    if (mode === "light") {
      setMode("dark");
    }
  };
  const getMode = (mode: string) => {
    if (mode === "dark") {
      return dartMode;
    }
    if (mode === "light") {
      return lightMode;
    }
  };
  return (
    <ThemeContext.Provider
      value={{
        mode,
        setMode,
        autoSetMode,
      }}
    >
      <ThemeProvider theme={getMode(mode) as ThemeOptions}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
export const useThemeContext = () => useContext(ThemeContext);
