import {
  FilterButton,
  FilterContainer,
  FilterContentWrapper,
  FilterDropDown,
  FilterHeader,
  FilterInput,
  FilterResetButton,
  FilterSection,
  FilterSectionName,
  Label,
  StyledFilter,
} from "./styles";

export const Filter = () => {
  return (
    <FilterContainer>
      <StyledFilter>
        <FilterContentWrapper>
          <FilterHeader>
            <Label>Фильтры</Label>
            <FilterResetButton>Сбросить все X</FilterResetButton>
          </FilterHeader>
          <FilterSection>
            <FilterSectionName>Отрасль</FilterSectionName>
            <FilterDropDown> Dropdown</FilterDropDown>
          </FilterSection>
          <FilterSection>
            <FilterSectionName>Оклад</FilterSectionName>
            <FilterInput></FilterInput>
            <FilterInput></FilterInput>
          </FilterSection>
          <FilterButton>Применить</FilterButton>
        </FilterContentWrapper>
      </StyledFilter>
    </FilterContainer>
  );
};
