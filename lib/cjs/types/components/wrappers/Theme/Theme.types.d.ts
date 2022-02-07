import { ReactNode } from "react";
export declare type ThemeProps = {
    theme?: ThemeType;
    children: ReactNode;
};
export declare type ThemeType = {
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
