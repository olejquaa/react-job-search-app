import { MainTemplateContainer, OutletContainer } from "./styles";
import { CustomHeader, Filter } from "components";
import { Outlet } from "react-router";

export const MainTemplate = () => {
  return (
    <MainTemplateContainer>
      <CustomHeader />
      <Filter />
      <OutletContainer>
        <Outlet />
      </OutletContainer>
    </MainTemplateContainer>
  );
};
