import styled from "styled-components";
import { InputProps } from "./Input.types";
import { defaultTheme } from "../../../shared";

const handlerWidth = (width: InputProps["width"]) => {
  if (width) {
    return `width: ${width}; max-width: ${width};`;
  }
  return "width: auto; max-width: auto;";
};

const handlerSize = (size: InputProps["size"]) => {
  switch (size) {
    case "s":
      return "height: 30px; max-height: 30px; min-height: 30px; padding: 0 12px;";
    case "l":
      return "height: 50px; max-height: 50px; min-height: 50px; padding: 0 12px;";
    case "m":
    default:
      return "height: 38px; max-height: 38px; min-height: 38px; padding: 0 12px;";
  }
};

const handlerFontSize = (size: InputProps["size"]) => {
  switch (size) {
    case "s":
      return "font-size: 12px;";
    case "l":
      return "font-size: 16px;";
    case "m":
    default:
      return "font-size: 14px;";
  }
};

const handlerView = (view: InputProps["view"] = "primary", theme: any) => {
  if (theme?.components?.input) {
    return `background: ${theme.components.input[view].background}; border: 1px solid ${theme.components.input[view].border};`;
  }
  return `background: ${defaultTheme.components.input[view].background}; border: 1px solid ${theme.components.input[view].border};`;
};

const handlerColor = (view: InputProps["view"] = "primary", theme: any) => {
  if (theme?.components?.input) {
    return `color: ${theme.components.input[view].text};`;
  }
  return `color: ${defaultTheme.components.input[view].text};`;
};

export const StyledInput = styled.div<InputProps>`
  display: flex;
  border-radius: 6px;
  box-sizing: border-box;
  ${({ width }) => handlerWidth(width)};
  ${({ size }) => handlerSize(size)};
  ${({ view, theme }) => handlerView(view, theme)};
  ${({ disabled }) => disabled && "filter: opacity(45%); user-select: none;"};
`;

export const StyledInputContent = styled.input<
  {
    fontSize?: InputProps["size"];
  } & InputProps
>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  font-weight: 400;
  padding: 0;
  margin: 0;
  border: none;
  background: none;
  ${({ fontSize }) => handlerFontSize(fontSize)};
  ${({ view, theme }) => handlerColor(view, theme)};
`;
