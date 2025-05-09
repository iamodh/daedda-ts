import { DefaultTheme } from "styled-components";

const colors = {
  // 브랜드 컬러
  primary: {
    300: "#8C6FEE", // 밝은 보라
    400: "#6123FF", // 메인 보라
    500: "#5A32C6", // 어두운 보라
  },

  // 배경색
  background: {
    light: "#F8F8FF",
    dark: "#2C2C3A",
  },

  // 텍스트 컬러
  text: {
    primary: "#1E1E2F",
    secondary: "#6E6E80",
    inverted: "#FFFFFF", // 다크모드용 텍스트
  },

  // 상태 컬러
  status: {
    success: "#4ADE80",
    warning: "#FACC15",
    error: "#F87171",
  },

  gray: {
    300: "#D4D4D4",
    400: "#A3A3A3",
    500: "#737373",
  },

  // 기본 색상
  white: "#FFFFFF",
  black: "#1E1E2F",
};

const fontSizes = {
  xs: "0.75rem", // 12px
  sm: "0.875rem", // 14px
  base: "1rem", // 16px
  lg: "1.125rem", // 18px
  xl: "1.25rem", // 20px
  "2xl": "1.5rem", // 24px
  "3xl": "1.875rem", // 30px
  "4xl": "2.25rem", // 36px
  "5xl": "3rem", // 48px
  "6xl": "3.75rem", // 60px
};

const borderRadius = {
  sm: "8px",
  md: "12px",
  lg: "16px",
  xl: "20px",
};

const shadows = {
  postCard:
    "-1px -1px 16px 0px #EEE, 3px 3px 18px 0px rgba(170, 170, 170, 0.50)",
};

const theme: DefaultTheme = {
  colors,
  fontSizes,
  borderRadius,
  shadows,
};

export default theme;
