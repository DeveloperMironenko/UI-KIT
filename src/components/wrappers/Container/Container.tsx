import React from "react";
import { StyledContainer } from "./Container.styled";
import { ContainerProps } from "./Container.types";

export const Container = ({ ...props }: ContainerProps) => {
  return <StyledContainer {...props}>{props.children}</StyledContainer>;
};
