/// <reference types="react" />
import { ReactNode, MouseEventHandler } from 'react';

declare type ButtonProps = {
    children: ReactNode;
    size?: "s" | "m" | "l";
    onClick?: MouseEventHandler<HTMLButtonElement>;
};

declare const Button: ({ children }: ButtonProps) => JSX.Element;

export { Button };
