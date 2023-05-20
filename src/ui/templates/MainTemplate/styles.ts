import styled from "styled-components";

export const MainTemplateContainer = styled.div`
  display: grid;
  grid-template-areas:
    "header header header"
    "filter content content";

  grid-template-rows: 84px 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 40px;
  grid-column-gap: 28px;
  width: 100vw;
  height: 100vh;
  margin: 0;
  background-color: violet;

  @media all and (max-width: 768px) {
    grid-template-areas:
      "header"
      "filter"
      "content";
    grid-template-rows: 84px 1fr 1fr;
    grid-template-columns: 1fr;
  }
`;

export const OutletContainer = styled.div`
  display: grid;
  grid-area: content;
  justify-self: start;

  background-color: greenyellow;
`;
