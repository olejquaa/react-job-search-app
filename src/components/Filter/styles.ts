import styled from "styled-components";
import { Color } from "ui";

export const FilterContainer = styled.div`
  grid-area: filter;
  justify-self: start;

  width: 100%;

  background-color: aqua;

  @media all and (max-width: 768px) {
    justify-self: center;
  }
`;
export const StyledFilter = styled.div`
  height: auto;
  padding: 10px;
  border: 1px solid black;
  border-radius: 12px;

  background-color: ${Color.WHITE};
`;

export const FilterContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 20px;
`;

export const FilterHeader = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;

  padding-bottom: 32px;
`;

export const Label = styled.h1``;

export const FilterResetButton = styled.button``;

export const FilterSection = styled.div`
  display: flex;
  flex-direction: column;

  padding-bottom: 20px;
`;

export const FilterSectionName = styled.h2``;

export const FilterDropDown = styled.div``;

export const FilterInput = styled.input``;

export const FilterButton = styled.button`
  justify-content: center;
  align-items: center;
  padding: 4px 20px;
  gap: 10px;

  width: 100%;
  height: 40px;

  background: ${Color.BLUE};
  border-radius: 8px;
`;
