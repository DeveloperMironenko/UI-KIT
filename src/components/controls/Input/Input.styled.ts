import styled from "styled-components";
import { InputProps } from "./Input.types";

const handlerWidth = (width: InputProps["width"]) => {
  switch (width) {
    case "full":
      return "width: 100%; max-width: 100%; min-width: 100%;";
    case "auto":
    default:
      return "width: auto; max-width: none; min-width: none;";
  }
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

const handlerView = (view: InputProps["view"], theme: any) => {
  let background;
  let border;

  if (view) {
    background = theme.components.input[view].background;
    border = theme.components.input[view].border;
  } else {
    background = theme.components.input.primary.background;
    border = theme.components.input.primary.border;
  }

  return `background: ${background}; border: 1px solid ${border};`;
};

const handlerColor = (view: InputProps["view"], theme: any) => {
  let text;

  if (view) {
    text = theme.components.input[view].text;
  } else {
    text = theme.components.input.primary.text;
  }

  return `color: ${text};`;
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
