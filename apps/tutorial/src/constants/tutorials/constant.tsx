import { GeneralNavItemType } from "@programmer/types";
import { ICON_DEFAULT_COLOR, LUCIDE_DEFAULT_ICON_SIZE } from "@programmer/ui";
import { GraduationCap, HomeIcon } from "lucide-react";

export const MAIN_NAV_LINKS: GeneralNavItemType[] = [
  {
    label: "Home",
    slug: "Home",
    icon: (
      <HomeIcon size={LUCIDE_DEFAULT_ICON_SIZE} color={ICON_DEFAULT_COLOR} />
    ),
  },
  {
    label: "Courses",
    slug: "Courses",
    icon: (
      <GraduationCap
        size={LUCIDE_DEFAULT_ICON_SIZE}
        color={ICON_DEFAULT_COLOR}
      />
    ),
  },
];
