import React from "react";
import { ThemeProvider } from "styled-components";
import { defaultTheme, GlobalStyle } from "../..";
import { ThemeProps } from "./Theme.types";

export const Theme = ({ children, theme }: ThemeProps) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme || defaultTheme}>{children}</ThemeProvider>
    </>
  );
};
