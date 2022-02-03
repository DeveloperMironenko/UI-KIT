import styled from "styled-components";
import { ButtonProps } from "./Button.types";
import { defaultTheme } from "../../../shared";

const handlerWidth = (width: ButtonProps["width"]) => {
  switch (width) {
    case "full":
      return "width: 100%; max-width: 100%; min-width: 100%;";
    case "auto":
    default:
      return "width: auto; max-width: none; min-width: none;";
  }
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
  view: ButtonProps["view"],
  outlined: ButtonProps["outlined"],
  theme: any
) => {
  const main =
    view && theme
      ? theme.components.button[view].background
      : defaultTheme.components.button.primary.background;
  const second =
    view && theme
      ? theme.components.button[view].color
      : defaultTheme.components.button.primary.color;

  if (outlined) {
    return `border: 1px solid ${main}; color: ${main};`;
  }

  return `background: ${main}; color: ${second};`;
};

const handlerActions = (disabled: ButtonProps["disabled"]) => {
  if (disabled) {
    return "filter: opacity(45%);";
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
}>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  ${({ justify }) => `justify-content: ${justify || "center"};`};
`;
