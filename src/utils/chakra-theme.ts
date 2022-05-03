import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: "Mulish, sans-serif",
    body: "Mulish, sans-serif",
    branding: "'ZCOOL XiaoWei', serif",
  },
  shadows: {
    outline: "0 0 0 3px rgba(56, 161, 105, 0.5)",
  },
  breakpoints: {
    "3xl": "114em",
  },
});
