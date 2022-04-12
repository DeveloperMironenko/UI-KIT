/// <reference types="react" />
import React, { ReactNode, MouseEventHandler, ChangeEventHandler } from 'react';
import * as styled_components from 'styled-components';

declare type AlignType = "flex-start" | "center" | "flex-end" | "space-between" | "space-around" | "space-evenly" | "initial" | "inherit";
declare type AlignTextType = "left" | "right" | "center" | "justify" | "initial" | "inherit";

declare type CursorType = "auto" | "default" | "pointer" | "text" | "none";

declare type DisplayType = "inline" | "block" | "inline-block" | "flex" | "inline-flex";

declare type FlexDirectionType = "row" | "row-reverse" | "column" | "column-reverse" | "initial" | "inherit";
declare type FlexWrapType = "nowrap" | "wrap" | "wrap-reverse" | "initial" | "inherit";

declare type JustifyType = "flex-start" | "center" | "flex-end" | "space-between" | "space-around" | "space-evenly" | "initial" | "inherit";

declare type SizeType = "s" | "m" | "l";
declare type WidthType = `${number}px` | `${number}%` | `${number}vw`;
declare type HeightType = `${number}px` | `${number}%` | `${number}vh`;
declare type SpaceType = `${number}px` | `${number}%`;

declare type TextDecorationType = "overline" | "line-through" | "underline" | "initial" | "inherit";
declare type TextTransformType = "capitalize" | "uppercase" | "lowercase" | "none" | "initial" | "inherit";
declare type TextWeightType = 400 | 500 | 700 | 900;

declare type ViewType = "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";

declare const Themes: {
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
        text: {
            primary: {
                text: string;
            };
            secondary: {
                text: string;
            };
            success: {
                text: string;
            };
            danger: {
                text: string;
            };
            warning: {
                text: string;
            };
            info: {
                text: string;
            };
            light: {
                text: string;
            };
            dark: {
                text: string;
            };
        };
        card: {
            background: string;
            boxShadow: string;
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
        text: {
            primary: {
                text: string;
            };
            secondary: {
                text: string;
            };
            success: {
                text: string;
            };
            danger: {
                text: string;
            };
            warning: {
                text: string;
            };
            info: {
                text: string;
            };
            light: {
                text: string;
            };
            dark: {
                text: string;
            };
        };
        card: {
            background: string;
            boxShadow: string;
        };
    };
};

declare const GlobalStyle: styled_components.GlobalStyleComponent<{}, styled_components.DefaultTheme>;

declare type ThemeProps = {
    theme?: ThemeType;
    children: ReactNode;
};
declare type ThemeType = {
    name: string;
    components: {
        button: {
            [key: string]: {
                background: string;
                text: string;
            };
        };
        input: {
            [key: string]: {
                background: string;
                text: string;
                placeholder: string;
                border: string;
            };
        };
        text: {
            [key: string]: {
                text: string;
            };
        };
    };
};

declare const useTheme: () => {
    theme: ThemeType;
    setTheme: (theme: ThemeType) => void;
};

declare enum IconName {
    Plus = "plus",
    Minus = "minus",
    Refresh = "refresh",
    Magnify = "magnify"
}

declare type TextProps = {
    forId?: string;
    className?: string;
    as?: "p" | "span" | "label" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    width?: WidthType;
    alignText?: AlignTextType;
    textDecoration?: TextDecorationType;
    textTransform?: TextTransformType;
    weight?: TextWeightType;
    view?: ViewType;
    size?: SizeType;
    display?: DisplayType;
    cursor?: CursorType;
    children: ReactNode;
};

declare const Text: ({ ...props }: TextProps) => JSX.Element;

declare type CardProps = {
    className?: string;
    children: ReactNode;
};

declare const Card: ({ ...props }: CardProps) => JSX.Element;

declare type IconProps = {
    className?: string;
    icon?: IconName;
    cursor?: CursorType;
    title?: string;
    spin?: boolean;
    rotate?: number;
    onClick?: () => void;
};

declare const Icon: ({ className, icon, cursor, title, spin, rotate, onClick, }: IconProps) => JSX.Element;

declare type ButtonProps = {
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

declare const Button: ({ ...props }: ButtonProps) => JSX.Element;

declare type InputProps = {
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

declare const Input: ({ ...props }: InputProps) => JSX.Element;

declare type ContainerProps = {
    className?: string;
    display?: DisplayType;
    flexDirection?: FlexDirectionType;
    flexWrap?: FlexWrapType;
    flex?: string;
    justifyContent?: JustifyType;
    alignItems?: AlignType;
    width?: WidthType;
    minWidth?: WidthType;
    maxWidth?: WidthType;
    height?: HeightType;
    minHeight?: HeightType;
    maxHeight?: HeightType;
    padding?: SpaceType;
    paddingTop?: SpaceType;
    paddingRight?: SpaceType;
    paddingBottom?: SpaceType;
    paddingLeft?: SpaceType;
    margin?: SpaceType;
    marginTop?: SpaceType;
    marginRight?: SpaceType;
    marginBottom?: SpaceType;
    marginLeft?: SpaceType;
    children: ReactNode;
};

declare const Container: ({ ...props }: ContainerProps) => JSX.Element;

declare const Theme: React.MemoExoticComponent<({ children, theme }: ThemeProps) => JSX.Element>;

export { AlignTextType, AlignType, Button, Card, Container, CursorType, DisplayType, FlexDirectionType, FlexWrapType, GlobalStyle, HeightType, Icon, IconName, Input, JustifyType, SizeType, SpaceType, Text, TextDecorationType, TextTransformType, TextWeightType, Theme, Themes, ViewType, WidthType, defaultTheme, useTheme };
