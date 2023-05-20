import { ROUTE } from "router";
import { MenuList, StyledLink, StyledNavMenu } from "./styles";
import { CustomNavLink } from "components";

export const NavMenu = () => {
  return (
    <StyledNavMenu>
      <MenuList>
        <CustomNavLink to={ROUTE.HOME}>
          <StyledLink>Поиск вакансий</StyledLink>
        </CustomNavLink>
        <CustomNavLink to={ROUTE.FAVORITES}>
          <StyledLink>Избранное</StyledLink>
        </CustomNavLink>
      </MenuList>
    </StyledNavMenu>
  );
};
