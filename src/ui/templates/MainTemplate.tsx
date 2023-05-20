import { CustomHeader } from "components";
import { Outlet } from "react-router";
import { MainTemplateContainer, OutletContainer } from "./styles";

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
