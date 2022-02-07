import React from "react";
import { ButtonProps } from "./Button.types";
import { StyledButton, StyledButtonContent } from "./Button.styled";

export const Button = ({ ...props }: ButtonProps) => (
  <StyledButton {...props}>
    <StyledButtonContent
      justify={props.justify}
      textTransform={props.textTransform}
    >
      {props.children}
    </StyledButtonContent>
  </StyledButton>
);
