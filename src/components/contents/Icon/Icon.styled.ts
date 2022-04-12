import styled from "styled-components";
import Icon from "@mdi/react";
import { IconProps } from "./Icon.types";

export const StyledIcon = styled.div<{ cursor: IconProps["cursor"] }>`
  width: 40px;
  height: 40px;
  cursor: ${({ cursor }) => cursor || "default"};
`;

export const StyledIconContent = styled(Icon)`
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  max-height: 100%;
`;
