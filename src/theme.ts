import { mode } from "@chakra-ui/theme-tools";
import { extendTheme, ThemeConfig, SystemStyleObject } from "@chakra-ui/react";

const config: ThemeConfig = {
    cssVarPrefix: "ba",
    initialColorMode: "dark",
    useSystemColorMode: true,
};

const theme = extendTheme({
    config,
    styles: {
        global: (props: SystemStyleObject) => ({
            body: {
                color: mode("brand.900", "white")(props),
                bg: mode("white", "brand.900")(props),
            },
        }),
    },
    colors: {
        mode: {
            light: {
                primary: "#ffffff",
                background: "#000000",
            },
            dark: {
                primary: "#000000",
                background: "#ffffff",
            },
        },

        blue: {
            50: "#dff8ff",
            100: "#b3e7ff",
            200: "#85d6fd",
            300: "#58c5fb",
            400: "#37b5fa",
            500: "#299be1",
            600: "#1c7aaf",
            700: "#0f577e",
            800: "#00344d",
            900: "#00121d",
        },
        yellow: {
            50: "#fff9da",
            100: "#ffedad",
            200: "#ffe17d",
            300: "#ffd54b",
            400: "#ffc91a",
            500: "#e6b000",
            600: "#b38800",
            700: "#806200",
            800: "#4e3a00",
            900: "#1d1400",
        },
        gray: {
            50: "#e9f3fd",
            100: "#d1d7e2",
            200: "#b5bcc9",
            300: "#99a1b3",
            400: "#7d869c",
            500: "#636c82",
            600: "#4d5466",
            700: "#363c4a",
            800: "#20242f",
            900: "#070c17",
        },
        brand: {
            100: "#FFC300",
            // ...
            900: "#003C58",
        },
    },
});

export default theme;
