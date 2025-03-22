import { BorderRadiusTypes, ColorTypes, FontSizeTypes } from "@types/theme";
import "styled-components";

// DefaultTheme 인터페이스 확장
declare module "styled-components" {
  export interface DefaultTheme {
    colors: ColorTypes;
    fontSizes: FontSizeTypes;
    borderRadius: BorderRadiusTypes;
  }
}
