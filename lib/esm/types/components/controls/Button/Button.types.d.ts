import { MouseEventHandler, ReactNode } from "react";
import { JustifyType, SizeType, TextTransformType, ViewType, WidthType } from "../../../shared";
export declare type ButtonProps = {
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
