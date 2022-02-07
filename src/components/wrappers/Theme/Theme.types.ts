import { ReactNode } from "react";

export type ThemeProps = {
  theme?: ThemeType;
  children: ReactNode;
};

export type ThemeType = {
  name: string;
  components: {
    button: {
      [key: string]: {
        background: string;
        text: string;
      };
    };
    input: {
      [key: string]: {
        background: string;
        text: string;
        placeholder: string;
        border: string;
      };
    };
    text: {
      [key: string]: {
        text: string;
      };
    };
  };
};
