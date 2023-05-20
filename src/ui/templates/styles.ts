import styled from "styled-components";
import { Color } from "ui/colors";

export const MainTemplateContainer = styled.div`
  display: grid;
  grid-template-areas:
    ". header . "
    ". content .";
  grid-template-rows: 84px 1fr;
  grid-template-columns: auto 1fr auto;
  grid-row-gap: 40px;

  width: 100vw;
  height: 100vh;
  min-width: 320px;
  background-color: ${Color.GRAY};
`;

export const HeaderContainer = styled.div`
  display: flex;
  grid-area: header;
  justify-self: center;
  justify-content: center;

  min-width: 320px;
  width: 100%;

  background-color: ${Color.WHITE};
`;

export const OutletContainer = styled.div`
  display: grid;
  grid-area: content;
  justify-self: center;

  min-width: 320px;
  max-width: 1116px;
  width: 100%;
`;
