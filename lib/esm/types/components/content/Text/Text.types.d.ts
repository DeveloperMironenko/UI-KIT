import { ReactNode } from "react";
import { AlignText, CursorType, DisplayType, SizeType, TextDecorationType, TextTransformType, TextWeightType, ViewType, WidthType } from "../../../shared";
export declare type TextProps = {
    className?: string;
    as?: "p" | "span" | "label" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    forId?: string;
    alignText?: AlignText;
    textDecoration?: TextDecorationType;
    textTransform?: TextTransformType;
    weight?: TextWeightType;
    display?: DisplayType;
    cursor?: CursorType;
    width?: WidthType;
    outlined?: boolean;
    disabled?: boolean;
    children: ReactNode;
    view?: ViewType;
    size?: SizeType;
};
