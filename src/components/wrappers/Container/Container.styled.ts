import styled from "styled-components";
import { ContainerProps } from "./Container.types";

const handlerWidth = (
  width: ContainerProps["width"],
  minWidth: ContainerProps["minWidth"],
  maxWidth: ContainerProps["maxWidth"]
) => {
  return `width: ${width || "auto"}; max-width: ${
    minWidth || "auto"
  }; min-width: ${maxWidth || "none"};`;
};

const handlerHeight = (
  height: ContainerProps["height"],
  minHeight: ContainerProps["minHeight"],
  maxHeight: ContainerProps["maxHeight"]
) => {
  return `height: ${height || "auto"}; max-height: ${
    minHeight || "auto"
  }; min-height: ${maxHeight || "none"};`;
};

const handlerPadding = (
  padding: ContainerProps["padding"],
  paddingTop: ContainerProps["paddingTop"],
  paddingRight: ContainerProps["paddingRight"],
  paddingBottom: ContainerProps["paddingBottom"],
  paddingLeft: ContainerProps["paddingLeft"]
) => {
  return `padding: ${paddingTop || padding || 0} ${
    paddingRight || padding || 0
  } ${paddingBottom || padding || 0} ${paddingLeft || padding || 0};`;
};

const handlerMargin = (
  margin: ContainerProps["margin"],
  marginTop: ContainerProps["marginTop"],
  marginRight: ContainerProps["marginRight"],
  marginBottom: ContainerProps["marginBottom"],
  marginLeft: ContainerProps["marginLeft"]
) => {
  return `margin: ${marginTop || margin || 0} ${marginRight || margin || 0} ${
    marginBottom || margin || 0
  } ${marginLeft || margin || 0};`;
};

export const StyledContainer = styled.div<ContainerProps>`
  display: ${({ display }) => display || "flex"};
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  flex-wrap: ${({ flexWrap }) => flexWrap || "wrap"};
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  align-items: ${({ alignItems }) => alignItems || "flex-start"};
  flex: ${({ flex }) => flex || "none"};
  ${({ width, minWidth, maxWidth }) => handlerWidth(width, minWidth, maxWidth)};
  ${({ height, minHeight, maxHeight }) =>
    handlerHeight(height, minHeight, maxHeight)};
  ${({ padding, paddingTop, paddingRight, paddingBottom, paddingLeft }) =>
    handlerPadding(
      padding,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft
    )};
  ${({ margin, marginTop, marginRight, marginBottom, marginLeft }) =>
    handlerMargin(margin, marginTop, marginRight, marginBottom, marginLeft)};
`;
