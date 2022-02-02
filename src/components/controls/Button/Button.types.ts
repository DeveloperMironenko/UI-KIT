import { MouseEventHandler, ReactNode } from "react";
import { Size, View } from "../../../shared";
import { Width } from "../../../shared/types/width";
import { JustifyContent } from "../../../shared/types/justify";

export type ButtonProps = {
  className?: string;
  type?: "button" | "submit";
  width?: Width;
  size?: Size;
  view?: View;
  justify?: JustifyContent;
  outlined?: boolean;
  // loading?: boolean;
  disabled?: boolean;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};
