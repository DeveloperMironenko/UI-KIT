import React from "react";
import { StyledText } from "./Text.styled";
import { TextProps } from "./Text.types";

export const Text = ({ ...props }: TextProps) => {
  return (
    <StyledText {...props} htmlFor={props.forId}>
      {props.children}
    </StyledText>
  );
};
