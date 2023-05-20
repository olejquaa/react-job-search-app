import { CustomHeader } from "components";
import { Outlet } from "react-router";
import { HeaderContainer, MainTemplateContainer, OutletContainer } from "./styles";

export const MainTemplate = () => {
  return (
    <MainTemplateContainer>
      <HeaderContainer>
        <CustomHeader />
      </HeaderContainer>
      <OutletContainer>
        <Outlet />
      </OutletContainer>
    </MainTemplateContainer>
  );
};
