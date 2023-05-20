import styled from "styled-components";

export const FilterContainer = styled.div`
  grid-area: filter;
  justify-self: end;
  background-color: aqua;
  @media all and (max-width: 768px) {
    justify-self: center;
  }
`;
export const StyledFilter = styled.div`
  width: 350px;
  border: 1px solid black;
`;
