import {
  Separator,
  StyledVacancyCard,
  VacancyConditions,
  VacancyGraphic,
  VacancyHeader,
  VacancyLocation,
  VacancySalary,
} from "./styles";

export const VacancyCard = () => {
  return (
    <StyledVacancyCard>
      <VacancyHeader>
        Должность <div>*</div>
      </VacancyHeader>
      <VacancyConditions>
        <VacancySalary>от 40 000 руб.</VacancySalary>
        <Separator>•</Separator>
        <VacancyGraphic>Полный рабочий день</VacancyGraphic>
      </VacancyConditions>
      <VacancyLocation>Москва</VacancyLocation>
    </StyledVacancyCard>
  );
};
