import { Filter } from "components";
import { HomePageContainer, HomePageContent } from "./styles";

export const HomePage = () => {
  return (
    <HomePageContainer>
      <Filter />
      <HomePageContent>
        <div>Search</div>
        <div>Card</div>
        <div>Pagination</div>
      </HomePageContent>
    </HomePageContainer>
  );
};
