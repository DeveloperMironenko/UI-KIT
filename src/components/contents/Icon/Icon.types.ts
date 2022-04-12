import { CursorType, IconName } from "../../../shared";

export type IconProps = {
  className?: string;
  icon?: IconName;
  cursor?: CursorType;
  title?: string;
  spin?: boolean;
  rotate?: number;
  onClick?: () => void;
};
