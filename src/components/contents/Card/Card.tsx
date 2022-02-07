import React from "react";
import { StyledCard } from "./Card.styled";
import { CardProps } from "./Card.types";

export const Card = ({ ...props }: CardProps) => {
  return <StyledCard {...props}>{props.children}</StyledCard>;
};
