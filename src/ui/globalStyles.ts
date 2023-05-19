import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body, h1, h2, h3, h4, h5, h6, p, ol, ul {
  margin: 0;
  padding: 0;
  
}

ol, ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0; 
}

button {
  cursor: pointer;
}


a {
  text-decoration: none;
}

#root {
  display: flex;
  justify-content: center;
  align-self: center;
}
`;
