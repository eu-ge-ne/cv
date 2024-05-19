import type { Config } from "tailwindcss";
import type { PluginUtils } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      typography: ({ theme }: PluginUtils) => ({
        DEFAULT: {
          css: {
            h1: {
              fontWeight: "normal",
            },
            h2: {
              fontWeight: "normal",
            },
            h3: {
              fontWeight: "normal",
            },
            a: {
              fontSize: "smaller",
              fontWeight: "normal",
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            },
            code: {
              fontFamily: "inherit",
              fontSize: "smaller",
              fontWeight: "normal",
              "&::before": {
                content: "none !important",
              },
              "&::after": {
                content: "none !important",
              },
            },
            "--tw-prose-links": theme("colors.violet.300"),
            "--tw-prose-code": theme("colors.violet.300"),
            "--tw-prose-body": theme("colors.violet.400"),
            "--tw-prose-quotes": theme("colors.violet.400"),
            "--tw-prose-bold": theme("colors.violet.400"),
            "--tw-prose-headings": theme("colors.violet.500"),
            "--tw-prose-bullets": theme("colors.violet.900"),
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
