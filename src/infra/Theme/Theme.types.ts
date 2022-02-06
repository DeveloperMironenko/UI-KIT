import { ReactNode } from "react";

export type ThemeProps = {
  theme?: any;
  children: ReactNode;
};

export type ThemeContextProviderProps = {
  theme?: any;
  setTheme?: (theme: any) => void;
};
