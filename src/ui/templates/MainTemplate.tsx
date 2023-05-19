import { MainTemplateContainer, OutletContainer } from "./styles";
import { CustomHeader } from "components";
import { Outlet } from "react-router";

export const MainTemplate = () => {
  return (
    <MainTemplateContainer>
      <CustomHeader />
      <OutletContainer>
        <Outlet />
      </OutletContainer>
    </MainTemplateContainer>
  );
};
