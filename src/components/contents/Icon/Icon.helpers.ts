import { mdiPlus, mdiMinus, mdiRefresh, mdiMagnify } from "@mdi/js";
import { IconName } from "../../../shared";

export const getIcon = (icon: IconName | undefined) => {
  switch (icon) {
    case IconName.Plus:
      return mdiPlus;
    case IconName.Minus:
      return mdiMinus;
    case IconName.Refresh:
      return mdiRefresh;
    case IconName.Magnify:
      return mdiMagnify;
    default:
      return mdiPlus;
  }
};
