import { VacancyCard } from "components/VacancyCard/VacancyCard";
import { StyledVacancyList } from "./styles";

export const VacancyList = () => {
  return (
    <StyledVacancyList>
      <VacancyCard />
      <VacancyCard />
      <VacancyCard />
      <VacancyCard />
    </StyledVacancyList>
  );
};
