import React from "react";
import { ButtonProps } from "./Button.types";
import { StyledButton, StyledButtonContent } from "./Button.styled";

export const Button = ({
  className,
  type = "button",
  width = "auto",
  size = "m",
  textTransform = "capitalize",
  view = "primary",
  justify = "center",
  outlined,
  // loading,
  disabled,
  children,
  onClick,
}: ButtonProps) => (
  <StyledButton
    className={className}
    type={type}
    width={width}
    size={size}
    view={view}
    outlined={outlined}
    // loading={loading}
    disabled={disabled}
    onClick={onClick}
  >
    <StyledButtonContent justify={justify} textTransform={textTransform}>
      {children}
    </StyledButtonContent>
  </StyledButton>
);
