import { PageTemplateContainer } from "./styles";
import { CustomHeader } from "components";
import { Outlet } from "react-router";
import { OutletContainer } from "../PageTemplate/styles";

export const PageTemplate = () => {
  return (
    <PageTemplateContainer>
      <CustomHeader />
      <OutletContainer>
        <Outlet />
      </OutletContainer>
    </PageTemplateContainer>
  );
};
