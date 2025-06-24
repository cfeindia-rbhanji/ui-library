/* 3. Mode - Light */
const { themecolors } = require("./theme");

const lightMode = {
  colors: {
    "alpha-10": "rgba(255, 255, 255, 0.8999999761581421)",
    "alpha-20": "rgba(255, 255, 255, 0.800000011920929)",
    "alpha-30": "rgba(255, 255, 255, 0.699999988079071)",
    "alpha-40": "rgba(255, 255, 255, 0.6000000238418579)",
    "alpha-50": "rgba(255, 255, 255, 0.5)",
    "alpha-60": "rgba(255, 255, 255, 0.4000000059604645)",
    "alpha-70": "rgba(255, 255, 255, 0.30000001192092896)",
    "alpha-80": "rgba(255, 255, 255, 0.20000000298023224)",
    "alpha-90": "rgba(255, 255, 255, 0.10000000149011612)",
    "base-accent": themecolors["colors-accent-light"],
    "base-accent-foreground": themecolors["colors-accent-foreground-light"],
    "base-background": themecolors["colors-background-light"],
    "base-border-light": themecolors["colors-border-light"],
    "base-border-dark": themecolors["colors-background-dark"],
    "base-card": themecolors["colors-card-light"],
    "base-card-foreground": themecolors["colors-card-foreground-light"],
    "base-destructive": themecolors["colors-destructive-light"],
    "base-destructive-foreground":
      themecolors["colors-destructive-foreground-light"],
    "base-foreground": themecolors["colors-foreground-light"],
    "base-input": themecolors["colors-input-light"],
    "base-muted": themecolors["colors-muted-light"],
    "base-muted-foreground": themecolors["colors-muted-foreground-light"],
    "base-popover": themecolors["colors-popover-light"],
    "base-popover-foreground": themecolors["colors-popover-foreground-light"],
    "base-primary": themecolors["colors-primary-light"],
    "base-primary-foreground": themecolors["colors-primary-foreground-light"],
    "base-ring": themecolors["colors-ring-light"],
    "base-ring-offset": themecolors["tailwind-colors-base-white"],
    "base-secondary": themecolors["colors-secondary-light"],
    "base-brand": themecolors["colors-brand-dark"],
    "base-brand-disabled": themecolors["colors-brand-light"],
    "base-brand-hover": themecolors["colors-brand-hover"],
    "base-brand-focus": themecolors["colors-brand-focus"],
    "base-secondary-foreground":
      themecolors["colors-secondary-foreground-light"],
    "base-chart-4-dark": themecolors["tailwind-colors-purple-700"],
    "base-chart-5-light": themecolors["tailwind-colors-lime-300"],
    "base-chart-4-light": themecolors["tailwind-colors-purple-300"],
    "base-chart-5-dark": themecolors["tailwind-colors-lime-800"],
  },
};

module.exports.lightModeColors = lightMode.colors;
