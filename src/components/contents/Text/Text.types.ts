import { ReactNode } from "react";
import {
  AlignTextType,
  CursorType,
  DisplayType,
  SizeType,
  TextDecorationType,
  TextTransformType,
  TextWeightType,
  ViewType,
  WidthType,
} from "../../../shared";

export type TextProps = {
  forId?: string;
  className?: string;
  as?: "p" | "span" | "label" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  width?: WidthType;
  alignText?: AlignTextType;
  textDecoration?: TextDecorationType;
  textTransform?: TextTransformType;
  weight?: TextWeightType;
  view?: ViewType;
  size?: SizeType;
  display?: DisplayType;
  cursor?: CursorType;
  children: ReactNode;
};
