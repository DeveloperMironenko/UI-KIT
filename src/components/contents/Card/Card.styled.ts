import styled from "styled-components";
import { CardProps } from "./Card.types";
import { defaultTheme } from "../../../shared";

const handlerBackground = (theme: any) => {
  if (theme?.components?.card) {
    return theme.components.card.background;
  }
  return defaultTheme.components.card.background;
};

const handlerBoxShadow = (theme: any) => {
  if (theme?.components?.card) {
    return theme.components.card.boxShadow;
  }
  return defaultTheme.components.card.boxShadow;
};

export const StyledCard = styled.div<CardProps>`
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  background: ${({ theme }) => handlerBackground(theme)};
  box-shadow: ${({ theme }) => handlerBoxShadow(theme)};
`;
