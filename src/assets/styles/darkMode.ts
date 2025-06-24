/* 3. Mode - Dark */
const { themecolors } = require("./theme");

const darkMode = {
  colors: {
    "alpha-10": "rgba(9, 9, 11, 0.8999999761581421)",
    "alpha-20": "rgba(9, 9, 11, 0.800000011920929)",
    "alpha-30": "rgba(9, 9, 11, 0.699999988079071)",
    "alpha-40": "rgba(9, 9, 11, 0.6000000238418579)",
    "alpha-50": "rgba(9, 9, 11, 0.5)",
    "alpha-60": "rgba(9, 9, 11, 0.4000000059604645)",
    "alpha-70": "rgba(9, 9, 11, 0.30000001192092896)",
    "alpha-80": "rgba(9, 9, 11, 0.20000000298023224)",
    "alpha-90": "rgba(9, 9, 11, 0.10000000149011612)",
    "base-accent": themecolors["colors-accent-dark"],
    "base-accent-foreground": themecolors["colors-accent-foreground-dark"],
    "base-background": themecolors["colors-background-dark"],
    "base-border-light": themecolors["colors-border-dark"],
    "base-border-dark": themecolors["colors-border-light"],
    "base-card": themecolors["colors-card-dark"],
    "base-card-foreground": themecolors["colors-card-foreground-dark"],
    "base-destructive": themecolors["colors-destructive-dark"],
    "base-destructive-foreground":
      themecolors["colors-destructive-foreground-dark"],
    "base-foreground": themecolors["colors-foreground-dark"],
    "base-input": themecolors["colors-input-dark"],
    "base-muted": themecolors["colors-muted-dark"],
    "base-muted-foreground": themecolors["colors-muted-foreground-dark"],
    "base-popover": themecolors["colors-popover-dark"],
    "base-popover-foreground": themecolors["colors-popover-foreground-dark"],
    "base-primary": themecolors["colors-primary-dark"],
    "base-primary-foreground": themecolors["colors-primary-foreground-dark"],
    "base-ring": themecolors["colors-ring-dark"],
    "base-ring-offset": themecolors["tailwind-colors-base-white"],
    "base-secondary": themecolors["colors-secondary-dark"],
    "base-brand": themecolors["colors-brand-dark"],
    "base-brand-disabled": themecolors["colors-brand-light"],
    "base-secondary-foreground":
      themecolors["colors-secondary-foreground-dark"],
    "base-chart-4-dark": themecolors["tailwind-colors-purple-700"],
    "base-chart-5-light": themecolors["tailwind-colors-lime-300"],
    "base-chart-4-light": themecolors["tailwind-colors-purple-300"],
    "base-chart-5-dark": themecolors["tailwind-colors-lime-700"],
  },
};

module.exports.darkModeColors = darkMode.colors;
