import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap');
  body {
    margin: 0;
    padding: 0;
  }
  * {
    font-family: 'Roboto', sans-serif;
    outline: none;
  }
  a {
    text-decoration: none;
  }
  p, h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
`;
