import styled from "styled-components";
import { Color, typography } from "ui";

export const StyledVacancyCard = styled.li`
  display: flex;
  flex-direction: column;
  padding: 24px;
  row-gap: 12px;
  margin-bottom: 24px;

  background-color: ${Color.WHITE};

  border: 1px solid ${Color.GRAY};
  border-radius: 12px;
`;

export const VacancyHeader = styled.header`
  display: flex;
  flex-direction: row;

  justify-content: space-between;

  ${typography.vacancyLabel}
  color: ${Color.BLUE};
`;

export const VacancyConditions = styled.div`
  display: flex;
  flex-direction: row;

  column-gap: 12px;
`;

export const Separator = styled.span`
  color: ${Color.DARK_GRAY};
`;

export const VacancySalary = styled.span`
  ${typography.salary}
`;

export const VacancyGraphic = styled.span`
  ${typography.vacancyGraphic}
`;

export const VacancyLocation = styled.div`
  display: flex;
  flex-direction: row;
  ${typography.cityLabel}
`;
