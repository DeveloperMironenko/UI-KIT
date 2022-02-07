import { MouseEventHandler, ReactNode } from "react";
import {
  JustifyType,
  SizeType,
  TextTransformType,
  ViewType,
  WidthType,
} from "../../../shared";

export type ButtonProps = {
  className?: string;
  type?: "button" | "submit";
  width?: WidthType;
  size?: SizeType;
  textTransform?: TextTransformType;
  view?: ViewType;
  justify?: JustifyType;
  outlined?: boolean;
  disabled?: boolean;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};
