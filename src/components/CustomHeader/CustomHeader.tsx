import { Logo, NavMenu } from "components";
import { StyledHeader } from "./styles";

export const CustomHeader = () => {
  return (
    <StyledHeader>
      <Logo />
      <NavMenu />
    </StyledHeader>
  );
};
