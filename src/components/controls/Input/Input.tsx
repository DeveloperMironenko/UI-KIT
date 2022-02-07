import React from "react";
import { InputProps } from "./Input.types";
import { StyledInput, StyledInputContent } from "./Input.styled";

export const Input = ({ ...props }: InputProps) => (
  <StyledInput
    className={props.className}
    width={props.width}
    size={props.size}
    view={props.view}
    disabled={props.disabled}
  >
    <StyledInputContent
      id={props.id}
      value={props.value}
      placeholder={props.placeholder}
      type={props.type}
      fontSize={props.size}
      disabled={props.disabled}
      onChange={props.onChange}
    />
  </StyledInput>
);
