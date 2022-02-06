import React from "react";
import { InputProps } from "./Input.types";
import { StyledInput, StyledInputContent } from "./Input.styled";

export const Input = ({
  id,
  className,
  value = "",
  placeholder = "",
  type = "text",
  width = "auto",
  size = "m",
  view = "primary",
  disabled,
  onChange,
}: InputProps) => (
  <StyledInput
    className={className}
    width={width}
    size={size}
    view={view}
    disabled={disabled}
  >
    <StyledInputContent
      id={id}
      value={value}
      placeholder={placeholder}
      type={type}
      fontSize={size}
      disabled={disabled}
      onChange={onChange}
    />
  </StyledInput>
);
