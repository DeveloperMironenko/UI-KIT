/// <reference types="react" />
import { ReactNode, MouseEventHandler } from 'react';

declare type SizeType = "s" | "m" | "l";

declare type ViewType = "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";

declare const themes: {
    name: string;
    components: {
        button: {
            primary: {
                background: string;
                color: string;
            };
            secondary: {
                background: string;
                color: string;
            };
            success: {
                background: string;
                color: string;
            };
            danger: {
                background: string;
                color: string;
            };
            warning: {
                background: string;
                color: string;
            };
            info: {
                background: string;
                color: string;
            };
            light: {
                background: string;
                color: string;
            };
            dark: {
                background: string;
                color: string;
            };
        };
    };
}[];
declare const defaultTheme: {
    name: string;
    components: {
        button: {
            primary: {
                background: string;
                color: string;
            };
            secondary: {
                background: string;
                color: string;
            };
            success: {
                background: string;
                color: string;
            };
            danger: {
                background: string;
                color: string;
            };
            warning: {
                background: string;
                color: string;
            };
            info: {
                background: string;
                color: string;
            };
            light: {
                background: string;
                color: string;
            };
            dark: {
                background: string;
                color: string;
            };
        };
    };
};

declare type WidthType = "auto" | "full";

declare type JustifyContent = "flex-start" | "center" | "flex-end" | "space-between" | "space-around" | "space-evenly" | "initial" | "inherit";

declare type ButtonProps = {
    className?: string;
    type?: "button" | "submit";
    width?: WidthType;
    size?: SizeType;
    view?: ViewType;
    justify?: JustifyContent;
    outlined?: boolean;
    disabled?: boolean;
    children: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
};

declare const Button: ({ className, type, width, size, view, justify, outlined, disabled, children, onClick, }: ButtonProps) => JSX.Element;

export { Button, SizeType, ViewType, defaultTheme, themes };
