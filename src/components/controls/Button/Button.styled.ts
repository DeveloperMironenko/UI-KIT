import styled from "styled-components";
import { ButtonProps } from "./Button.types";
import { defaultTheme } from "../../../shared";

const handlerWidth = (width: ButtonProps["width"]) => {
  if (width) {
    return `width: ${width}; max-width: ${width}; min-width: ${width};`;
  }
  return "width: auto; max-width: auto; min-width: none;";
};

const handlerSize = (size: ButtonProps["size"]) => {
  switch (size) {
    case "s":
      return "height: 30px; max-height: 30px; min-height: 30px; padding: 0 12px;";
    case "l":
      return "height: 50px; max-height: 50px; min-height: 50px; padding: 0 32px;";
    case "m":
    default:
      return "height: 38px; max-height: 38px; min-height: 38px; padding: 0 22px;";
  }
};

const handlerView = (
  view: ButtonProps["view"] = "primary",
  outlined: ButtonProps["outlined"],
  theme: any
) => {
  let background;
  let text;

  if (theme?.components?.button) {
    background = theme.components.button[view].background;
    text = theme.components.button[view].text;
  } else {
    background = defaultTheme.components.button[view].background;
    text = defaultTheme.components.button[view].text;
  }

  if (outlined) {
    return `border: 1px solid ${background}; color: ${background};`;
  }

  return `background: ${background}; color: ${text};`;
};

const handlerActions = (disabled: ButtonProps["disabled"]) => {
  if (disabled) {
    return "filter: opacity(45%); user-select: none;";
  }
  return "&:hover {filter: brightness(90%);} &:active { filter: brightness(80%);}";
};

export const StyledButton = styled.button<ButtonProps>`
  display: flex;
  padding: 0;
  margin: 0;
  border: none;
  border-radius: 6px;
  box-sizing: border-box;
  background: none;
  cursor: ${({ disabled }) => (disabled ? "not-allowed;" : "pointer;")};
  ${({ width }) => handlerWidth(width)};
  ${({ size }) => handlerSize(size)};
  ${({ view, outlined, theme }) => handlerView(view, outlined, theme)};
  ${({ disabled }) => handlerActions(disabled)};
`;

export const StyledButtonContent = styled.div<{
  justify: ButtonProps["justify"];
  textTransform?: ButtonProps["textTransform"];
}>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  font-weight: 700;
  ${({ justify }) => `justify-content: ${justify || "center"};`};
  ${({ textTransform }) => `text-transform: ${textTransform || "none"};`};
`;
