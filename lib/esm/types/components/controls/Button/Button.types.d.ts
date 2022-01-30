import { MouseEventHandler, ReactNode } from "react";
export declare type ButtonProps = {
    children: ReactNode;
    size?: "s" | "m" | "l";
    onClick?: MouseEventHandler<HTMLButtonElement>;
};
