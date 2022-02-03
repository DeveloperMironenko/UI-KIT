export declare const useTheme: () => {
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
