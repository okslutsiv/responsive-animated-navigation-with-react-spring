import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap');

*, *::before, *::after {
    box-sizing:inherit;
    margin:0;
    padding:0;
}

html {
    font-size:62.5%;
}
body {
    box-sizing:border-box;
    font-family:'Montserrat', sans-serif;
}
`;
export default GlobalStyle;
