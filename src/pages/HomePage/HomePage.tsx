import { Filter, Search, VacancyList } from "components";
import { HomePageContainer, HomePageContent } from "./styles";

export const HomePage = () => {
  return (
    <HomePageContainer>
      <Filter />
      <HomePageContent>
        <Search />
        <VacancyList />
        <div>Pagination</div>
      </HomePageContent>
    </HomePageContainer>
  );
};
