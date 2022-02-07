import React from "react";
import { ThemeProvider } from "styled-components";
import { defaultTheme, GlobalStyle } from "../../../index";
import { ThemeProps } from "./Theme.types";

export const Theme = React.memo(
  ({ children, theme = defaultTheme }: ThemeProps) => {
    return (
      <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </>
    );
  }
);
