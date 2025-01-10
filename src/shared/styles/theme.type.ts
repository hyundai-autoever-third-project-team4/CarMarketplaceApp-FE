import theme from "./theme";

export type ThemeColor = keyof (typeof theme)["colors"];
export type ThemeFontSize = keyof (typeof theme)["fontSizes"];
export type ThemeFontWeight = keyof (typeof theme)["fontWeight"];
export type ThemeBorderRadius = keyof (typeof theme)["borderRadius"];
