import { ReactNode } from "react";
import {
  AlignType,
  DisplayType,
  FlexDirectionType,
  FlexWrapType,
  HeightType,
  JustifyType,
  SpaceType,
  WidthType,
} from "../../../shared";

export type ContainerProps = {
  className?: string;
  display?: DisplayType;
  flexDirection?: FlexDirectionType;
  flexWrap?: FlexWrapType;
  flex?: string;
  justifyContent?: JustifyType;
  alignItems?: AlignType;
  width?: WidthType;
  minWidth?: WidthType;
  maxWidth?: WidthType;
  height?: HeightType;
  minHeight?: HeightType;
  maxHeight?: HeightType;
  padding?: SpaceType;
  paddingTop?: SpaceType;
  paddingRight?: SpaceType;
  paddingBottom?: SpaceType;
  paddingLeft?: SpaceType;
  margin?: SpaceType;
  marginTop?: SpaceType;
  marginRight?: SpaceType;
  marginBottom?: SpaceType;
  marginLeft?: SpaceType;
  children: ReactNode;
};
