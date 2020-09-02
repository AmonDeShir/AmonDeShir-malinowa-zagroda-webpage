import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    color: white;

    margin: 0;
    padding: 0;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;