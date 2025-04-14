import { GeneralNavItemType } from "@programmer/types";
import { ICON_DEFAULT_COLOR, LUCIDE_DEFAULT_ICON_SIZE } from "@programmer/ui";
import { GraduationCap, HomeIcon } from "lucide-react";

export const MAIN_NAV_LINKS: GeneralNavItemType[] = [
  {
    label: "Home",
    slug: "/",
    icon: (
      <HomeIcon size={LUCIDE_DEFAULT_ICON_SIZE} />
    ),
  },
  {
    label: "Courses",
    slug: "courses",
    icon: (
      <GraduationCap
        size={LUCIDE_DEFAULT_ICON_SIZE}
      />
    ),
  },
];
