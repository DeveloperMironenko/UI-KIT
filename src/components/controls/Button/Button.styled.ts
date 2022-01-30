import styled from "styled-components";
import { ButtonProps } from "./Button.types";
import { defaultTheme } from "../../../shared";

const handlerView = (view: ButtonProps["view"], theme: any) => {
  const main =
    theme.components.button.background ||
    defaultTheme.components.button.primary.background;
  const second = "";
};

export const StyledButton = styled.button<ButtonProps>`
  padding: 0;
  margin: 0;
  border: none;
  ${({ view, theme }) => handlerView(view, theme)}
`;
