import "styled-components";

// DefaultTheme 인터페이스 확장
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      main: string;
      darkGray: string;
      lightGray: string;
    };
  }
}
