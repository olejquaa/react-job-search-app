import { css } from "styled-components";
import { Color } from "./colors";

export const typography = {
  h1: css`
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 20px;
  `,

  h2: css`
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
  `,

  h3: css`
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
  `,

  text: css`
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
  `,

  inputLabel: css`
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;

    color: ${Color.GRAY};
  `,

  cityLabel: css`
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
  `,

  menuLink: css`
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
  `,
};
