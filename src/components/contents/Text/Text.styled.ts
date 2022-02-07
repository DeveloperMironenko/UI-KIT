import styled from "styled-components";
import { TextProps } from "./Text.types";
import { defaultTheme } from "../../../shared";

const handlerWidth = (width: TextProps["width"]) => {
  if (width) {
    return `width: ${width}; max-width: ${width}; min-width: ${width};`;
  }
  return "width: auto; max-width: auto; min-width: none;";
};

const handlerView = (view: TextProps["view"] = "primary", theme: any) => {
  if (theme?.components?.text) {
    return `color: ${theme.components.text[view].text}`;
  }
  return `color: ${defaultTheme.components.text[view].text}`;
};

const handlerSize = (size: TextProps["size"]) => {
  switch (size) {
    case "s":
      return "font-size: 14px; line-height: 22px;";
    case "l":
      return "font-size: 18px; line-height: 28px;";
    case "m":
    default:
      return "font-size: 16px; line-height: 24px;";
  }
};

export const StyledText = styled.p<TextProps>`
  text-align: ${({ alignText }) => alignText || "left"};
  text-decoration: ${({ textDecoration }) => textDecoration || "initial"};
  text-transform: ${({ textTransform }) => textTransform || "none"};
  font-weight: ${({ weight }) => weight || 400};
  display: ${({ display }) => display || "block"};
  cursor: ${({ cursor }) => cursor || "default"};
  ${({ width }) => handlerWidth(width)};
  ${({ view, theme }) => handlerView(view, theme)};
  ${({ size }) => handlerSize(size)};
`;
