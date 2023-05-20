import styled from "styled-components";

export const StyledHeader = styled.div`
  display: grid;

  grid-template-areas: "logo  menu";
  grid-template-columns: 141px 1fr 141px;
  gap: 10px;

  align-self: center;
  justify-self: center;
  grid-area: header;
  max-width: 1116px;
  width: 100%;

  background-color: gold;
`;
