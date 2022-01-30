import React from "react";
import { ButtonProps } from "./Button.types";
import { StyledButton } from "./Button.styled";

export const Button = ({ children }: ButtonProps) => {
  return <StyledButton>{children}</StyledButton>;
};
