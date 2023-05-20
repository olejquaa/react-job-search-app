import styled from "styled-components";
import { Color } from "ui";

export const StyledNavMenu = styled.nav`
  display: grid;
  grid-area: menu;

  @media only all and (max-width: 600px) {
    display: none;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-self: center;
  gap: 60px;
  padding: 10px;
`;

export const StyledLink = styled.li`
  width: 100%;
  color: ${Color.BLACK};

  :hover {
    text-shadow: 1px solid ${Color.BLUE};
    color: ${Color.BLUE};
  }
`;
