/// <reference types="react" />
import { ReactNode, MouseEventHandler } from 'react';
import * as styled_components from 'styled-components';

declare type SizeType = "s" | "m" | "l";

declare type ViewType = "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";

declare type TextTransformType = "capitalize" | "uppercase" | "lowercase" | "none" | "initial" | "inherit";

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

declare const GlobalStyle: styled_components.GlobalStyleComponent<{}, styled_components.DefaultTheme>;

declare const useTheme: () => {
    theme: {
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
    setTheme: (name: string) => void;
};

declare type WidthType = "auto" | "full";

declare type JustifyContent = "flex-start" | "center" | "flex-end" | "space-between" | "space-around" | "space-evenly" | "initial" | "inherit";

declare type ButtonProps = {
    className?: string;
    type?: "button" | "submit";
    width?: WidthType;
    size?: SizeType;
    textTransform?: TextTransformType;
    view?: ViewType;
    justify?: JustifyContent;
    outlined?: boolean;
    disabled?: boolean;
    children: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
};

declare const Button: ({ className, type, width, size, textTransform, view, justify, outlined, disabled, children, onClick, }: ButtonProps) => JSX.Element;

declare type ThemeProps = {
    children: ReactNode;
};

declare const Theme: ({ children }: ThemeProps) => JSX.Element;

export { Button, GlobalStyle, SizeType, TextTransformType, Theme, ViewType, defaultTheme, themes, useTheme };
