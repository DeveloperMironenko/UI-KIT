import { ChangeEventHandler } from "react";
import { SizeType, ViewType, WidthType } from "../../../shared";
export declare type InputProps = {
    id?: string;
    className?: string;
    value?: string;
    placeholder?: string;
    type?: "text" | "password" | "email";
    width?: WidthType;
    size?: SizeType;
    view?: ViewType;
    disabled?: boolean;
    onChange?: ChangeEventHandler<HTMLInputElement>;
};
