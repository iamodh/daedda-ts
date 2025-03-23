export interface ColorTypes {
  primary: {
    300: string;
    400: string;
    500: string;
  };
  background: {
    light: string;
    dark: string;
  };
  text: {
    primary: string;
    secondary: string;
    inverted: string;
  };
  status: {
    success: string;
    warning: string;
    error: string;
  };
  gray: {
    300: string;
    400: string;
    500: string;
  };
  white: string;
  black: string;
}

export interface FontSizeTypes {
  xs: string;
  sm: string;
  base: string;
  lg: string;
  xl: string;
  "2xl": string;
  "3xl": string;
  "4xl": string;
  "5xl": string;
  "6xl": string;
}

export interface BorderRadiusTypes {
  sm: string; // 8px
  md: string; // 12px
  lg: string; // 16px
  xl: string; // 20px;
}

export interface ShadowTypes {
  postCard: string;
}
