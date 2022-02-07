import React, { useState } from "react";
import { defaultTheme } from "../styles";
import { ThemeType } from "../../components/wrappers/Theme/Theme.types";

export const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>(defaultTheme);

  const setTheme = (theme: ThemeType) => {
    setCurrentTheme(theme);
  };

  return { theme: currentTheme, setTheme };
};
