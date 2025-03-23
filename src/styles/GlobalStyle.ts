import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* Typography */
  @font-face {
  font-family: "Pretendard";
  font-weight: 100; /* Thin */
  src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Thin.woff")
    format("woff");
  }

  @font-face {
  font-family: "Pretendard";
  font-weight: 200; /* Extra Light */
  src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-ExtraLight.woff")
    format("woff");
  }

  @font-face {
  font-family: "Pretendard";
  font-weight: 300; /* Light */
  src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Light.woff")
    format("woff");
  }

  @font-face {
  font-family: "Pretendard";
  font-weight: 400; /* Regular */
  src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
    format("woff");
  }

  @font-face {
  font-family: "Pretendard";
  font-weight: 500; /* Medium */
  src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Medium.woff")
    format("woff");
  }

  @font-face {
  font-family: "Pretendard";
  font-weight: 600; /* Semi Bold */
  src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-SemiBold.woff")
    format("woff");
  }

  @font-face {
  font-family: "Pretendard";
  font-weight: 700; /* Bold */
  src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff")
    format("woff");
  }

  @font-face {
  font-family: "Pretendard";
  font-weight: 800; /* Extra Bold */
  src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-ExtraBold.woff")
    format("woff");
  }

  @font-face {
  font-family: "Pretendard";
  font-weight: 900; /* Black */
  src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Black.woff")
    format("woff");
  }

  html, body, #root {
    font-family: "Pretendard";
    font-weight: 400;
    letter-spacing: -0.02px;
  }

  /* Resets */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5 {
    font-size: unset;
    font-weight: unset;
  }

  ul {
    list-style: none;
  }

  button {
    background: none;
    border: 0;
    font-size: inherit;
    cursor: pointer;
    }
`;

export default GlobalStyle;
