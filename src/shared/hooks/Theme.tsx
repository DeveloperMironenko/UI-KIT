import React, { useState } from "react";
import { defaultTheme } from "../styles";

export const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState(defaultTheme);

  const setTheme = (theme: any) => {
    setCurrentTheme(theme);
  };

  return { theme: currentTheme, setTheme };
};
