/** @type {import('tailwindcss').Config} */
/**
 * 1. 1st step to set variables OR get primitive from TailwindCSS. (get default tailwind variables and add our own)
 * 2. 2nd to use it under theme.ts file. (for proper formatting and readability)
 * 3. 3rd step to include theme.ts under tailwind.config.js (so it will applicable throughout the application)
 *  */
import {
  themecolors,
  themeletterSpacing,
  themelineHeight,
  themefontWeight,
  themefontFamily,
  themefontSize,
  themeborderRadius,
  thememinHeight,
  thememaxWidth,
} from "./src/assets/styles/theme";
export default {
  darkMode: ["media", "class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/ui-library/dist/**/*.{js,ts,jsx,tsx}", // 👈 this is essential for our library to work.
  ],
  theme: {
    container: {
      center: true,
      padding: "var(--container-sm-padding)",
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
        "3xl": "1600px",
      },
    },
    extend: {
      height: {
        "screen-offset": "calc(100dvh - 80px)",
      },
      minHeight: { ...thememinHeight },
      maxWidth: { ...thememaxWidth },
      fontSize: { ...themefontSize },
      fontWeight: { ...themefontWeight },
      fontFamily: { ...themefontFamily },
      borderRadius: { ...themeborderRadius },
      lineHeight: {
        ...themelineHeight,
      },
      letterSpacing: {
        ...themeletterSpacing,
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",
        destructive: "hsl(var(--destructive))",
        "destructive-foreground": "hsl(var(--destructive-foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        popover: "hsl(var(--popover))",
        "popover-foreground": "hsl(var(--popover-foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: {
            DEFAULT: "hsl(var(--base-chart-4-dark))",
            light: "hsl(var(--base-chart-4-light))",
            dark: "hsl(var(--base-chart-4-dark))",
          },
          5: {
            DEFAULT: "hsl(var(--base-chart-5-dark))",
            light: "hsl(var(--base-chart-5-light))",
            dark: "hsl(var(--base-chart-5-dark))",
          },
        },
        ...themecolors,
      },
      keyframes: {
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "smooth-bounce": {
          "0%, 60%, 100%": {
            transform: "translateX(0)",
          },
          "10%": {
            transform: "translateX(4px)",
          },
          "20%": {
            transform: "translateX(0)",
          },
          "30%": {
            transform: "translateX(4px)",
          },
          "40%": {
            transform: "translateX(0)",
          },
          "50%": {
            transform: "translateX(4px)",
          },
          "60%": {
            transform: "translateX(0)",
          },
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "bounce-delay": "bounce-delay 4s ease-in-out 3",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
