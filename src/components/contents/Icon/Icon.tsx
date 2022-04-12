import React from "react";
import { IconProps } from "./Icon.types";
import { StyledIcon, StyledIconContent } from "./Icon.styled";
import { getIcon } from "./Icon.helpers";

export const Icon = ({
  className,
  icon,
  cursor,
  title,
  spin,
  rotate,
  onClick,
}: IconProps) => {
  return (
    <StyledIcon className={className} cursor={cursor} onClick={onClick}>
      <StyledIconContent
        path={getIcon(icon)}
        title={title}
        spin={spin}
        rotate={rotate}
      />
    </StyledIcon>
  );
};
