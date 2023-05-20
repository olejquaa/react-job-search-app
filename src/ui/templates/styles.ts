import styled from "styled-components";

export const MainTemplateContainer = styled.div`
  display: grid;
  grid-template-areas:
    "header"
    "content";
  grid-template-rows: 84px 1fr;
  grid-template-columns: 1fr;
  grid-row-gap: 40px;
  grid-column-gap: 28px;
  width: 100vw;
  height: 100vh;

  min-width: 320px;
  margin: 0;
  background-color: violet;

  @media all and (max-width: 768px) {
    grid-template-areas:
      "header"
      "content";
    grid-template-rows: 84px 1fr;
    grid-template-columns: 1fr;
  }
`;

export const OutletContainer = styled.div`
  display: grid;
  grid-area: content;
  justify-self: center;
  min-width: 320px;

  background-color: greenyellow;
`;
