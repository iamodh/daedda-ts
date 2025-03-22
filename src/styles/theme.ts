import { DefaultTheme } from "styled-components";

const colors = {
  // 브랜드 컬러
  primary: {
    300: "#C3B5FF", // 밝은 보라
    400: "#8C6FEE", // 메인 보라
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

  // 기본 색상
  white: "#FFFFFF",
  black: "#1E1E2F",
};

const theme: DefaultTheme = {
  colors,
};

export default theme;
