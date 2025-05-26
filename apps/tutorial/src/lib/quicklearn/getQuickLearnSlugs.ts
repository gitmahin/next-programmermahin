import { QUICKLEARN_TUTORIALS } from "@programmer/constants";

export async function getQuickLearnSlugs() {
  return QUICKLEARN_TUTORIALS.map((item, _) => ({
    slug: item.slug,
  }));
}
