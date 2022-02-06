import { ChangeEventHandler, KeyboardEvent } from "react";
import { SizeType, TextTransformType, ViewType } from "../../../shared";
import { WidthType } from "../../../shared/types/WidthType";
import { JustifyContent } from "../../../shared/types/JustifyType";

export type InputProps = {
  id?: string;
  className?: string;
  value?: string;
  placeholder?: string;
  type?: "text" | "password";
  width?: WidthType;
  size?: SizeType;
  view?: ViewType;
  disabled?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};
