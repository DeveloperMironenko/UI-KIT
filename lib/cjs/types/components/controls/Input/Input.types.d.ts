import { ChangeEventHandler } from "react";
import { SizeType, ViewType } from "../../../shared";
import { WidthType } from "../../../shared/types/WidthType";
export declare type InputProps = {
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
