import React from "react";
import { ThemeProvider } from "styled-components";
import { useTheme, GlobalStyle } from "../..";
import { ThemeProps } from "./Theme.types";

export const Theme = ({ children }: ThemeProps) => {
  const { theme } = useTheme();

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};
