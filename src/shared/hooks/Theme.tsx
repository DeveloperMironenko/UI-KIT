import { useState } from "react";
import { defaultTheme, themes } from "../styles";

export const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState(defaultTheme);

  const setTheme = (name: string) => {
    const theme = themes.find((item) => item.name === name);
    if (theme?.name === name) {
      setCurrentTheme(theme);
    } else {
      setCurrentTheme(defaultTheme);
    }
  };

  return { theme: currentTheme, setTheme };
};
