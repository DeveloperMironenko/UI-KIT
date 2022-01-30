import { MouseEventHandler, ReactNode } from "react";
import { Size, View } from "../../../shared";
import { Width } from "../../../shared/types/width";

export type ButtonProps = {
  width?: Width;
  size?: Size;
  view?: View;
  outlined?: boolean;
  loading?: boolean;
  disabled?: boolean;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};
