import styled from "styled-components";

export const PageTemplateContainer = styled.div`
  display: grid;
  grid-template-areas:
    "header"
    "content";
  grid-template-rows: 84px 1fr;
  grid-template-columns: 1fr;
  grid-row-gap: 40px;
  width: 100vw;
  height: 100vh;
  margin: 0;
  background-color: violet;
`;

export const OutletContainer = styled.div`
  display: grid;
  grid-area: content;
  justify-self: center;

  background-color: greenyellow;
`;
