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
                text: string;
            };
            secondary: {
                background: string;
                text: string;
            };
            success: {
                background: string;
                text: string;
            };
            danger: {
                background: string;
                text: string;
            };
            warning: {
                background: string;
                text: string;
            };
            info: {
                background: string;
                text: string;
            };
            light: {
                background: string;
                text: string;
            };
            dark: {
                background: string;
                text: string;
            };
        };
        input: {
            primary: {
                border: string;
                background: string;
                text: string;
                placeholder: string;
            };
            secondary: {
                border: string;
                background: string;
                text: string;
                placeholder: string;
            };
            success: {
                border: string;
                background: string;
                text: string;
                placeholder: string;
            };
            danger: {
                border: string;
                background: string;
                text: string;
                placeholder: string;
            };
            warning: {
                border: string;
                background: string;
                text: string;
                placeholder: string;
            };
            info: {
                border: string;
                background: string;
                text: string;
                placeholder: string;
            };
            light: {
                border: string;
                background: string;
                text: string;
                placeholder: string;
            };
            dark: {
                border: string;
                background: string;
                text: string;
                placeholder: string;
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
                text: string;
            };
            secondary: {
                background: string;
                text: string;
            };
            success: {
                background: string;
                text: string;
            };
            danger: {
                background: string;
                text: string;
            };
            warning: {
                background: string;
                text: string;
            };
            info: {
                background: string;
                text: string;
            };
            light: {
                background: string;
                text: string;
            };
            dark: {
                background: string;
                text: string;
            };
        };
        input: {
            primary: {
                border: string;
                background: string;
                text: string;
                placeholder: string;
            };
            secondary: {
                border: string;
                background: string;
                text: string;
                placeholder: string;
            };
            success: {
                border: string;
                background: string;
                text: string;
                placeholder: string;
            };
            danger: {
                border: string;
                background: string;
                text: string;
                placeholder: string;
            };
            warning: {
                border: string;
                background: string;
                text: string;
                placeholder: string;
            };
            info: {
                border: string;
                background: string;
                text: string;
                placeholder: string;
            };
            light: {
                border: string;
                background: string;
                text: string;
                placeholder: string;
            };
            dark: {
                border: string;
                background: string;
                text: string;
                placeholder: string;
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
                    text: string;
                };
                secondary: {
                    background: string;
                    text: string;
                };
                success: {
                    background: string;
                    text: string;
                };
                danger: {
                    background: string;
                    text: string;
                };
                warning: {
                    background: string;
                    text: string;
                };
                info: {
                    background: string;
                    text: string;
                };
                light: {
                    background: string;
                    text: string;
                };
                dark: {
                    background: string;
                    text: string;
                };
            };
            input: {
                primary: {
                    border: string;
                    background: string;
                    text: string;
                    placeholder: string;
                };
                secondary: {
                    border: string;
                    background: string;
                    text: string;
                    placeholder: string;
                };
                success: {
                    border: string;
                    background: string;
                    text: string;
                    placeholder: string;
                };
                danger: {
                    border: string;
                    background: string;
                    text: string;
                    placeholder: string;
                };
                warning: {
                    border: string;
                    background: string;
                    text: string;
                    placeholder: string;
                };
                info: {
                    border: string;
                    background: string;
                    text: string;
                    placeholder: string;
                };
                light: {
                    border: string;
                    background: string;
                    text: string;
                    placeholder: string;
                };
                dark: {
                    border: string;
                    background: string;
                    text: string;
                    placeholder: string;
                };
            };
        };
    };
    setTheme: (theme: any) => void;
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
    theme?: any;
    children: ReactNode;
};
declare type ThemeContextProviderProps = {
    theme?: any;
    setTheme?: (theme: any) => void;
};

declare const Theme: ({ children, theme }: ThemeProps) => JSX.Element;

export { Button, GlobalStyle, SizeType, TextTransformType, Theme, ThemeContextProviderProps, ThemeProps, ViewType, defaultTheme, themes, useTheme };
