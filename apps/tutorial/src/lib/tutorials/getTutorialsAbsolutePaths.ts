import {
  getTutorialsByKey,
  TUTORIAL_TYPES,
  TutorialEnums,
} from "@programmer/constants";
import { TutorialDirChildNavItemType } from "@programmer/types";

export const getTutorialsAbsolutePaths = () => {
  const params: { tutoType: string; slug: string[] }[] = [];
  TUTORIAL_TYPES.forEach((type) => {
    const tutorials = getTutorialsByKey[type as TutorialEnums];
    if (!tutorials) return;

    Object.values(tutorials).forEach((section) => {
      if (!section?.slug) return;

      section.items.forEach((item) => {
        // Push direct item
        if (item.slug) {
          params.push({
            tutoType: type,
            slug: [section.slug, item.slug],
          });
        }

        // If item has dirItems, handle them
        if (item.dirItems) {
          Object.entries(item.dirItems).forEach(([_, dir]) => {
            const typedDir = dir as TutorialDirChildNavItemType;
            // push the dir nodes
            if (typedDir.slug) {
              params.push({
                tutoType: type,
                slug: [section.slug, typedDir.slug],
              });
            }

            // Push all subitems
            typedDir.items.forEach((subItem) => {
              if (subItem.slug) {
                params.push({
                  tutoType: type,
                  slug: [section.slug, typedDir.slug, subItem.slug],
                });
              }
            });
          });
        }
      });
    });
  });

  return params;
};
