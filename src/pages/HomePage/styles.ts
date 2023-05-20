import styled from "styled-components";

export const HomePageContainer = styled.div`
  display: grid;
  grid-template-areas: "filter content";
  grid-template-columns: 315px 1fr;
  gap: 28px;

  width: 100%;
`;

export const HomePageContent = styled.div`
  display: grid;
  grid-template-areas:
    "search"
    "cards"
    "pagination";
  grid-template-rows: auto 1fr auto;
  grid-row-gap: 28px;

  grid-area: content;
`;
