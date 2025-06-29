import { getQuickLearnSlugs } from "@/lib/quicklearn/getQuickLearnSlugs";
import { getTutorialsAbsolutePaths } from "@/lib/tutorials/getTutorialsAbsolutePaths";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const tutorialPaths = getTutorialsAbsolutePaths();

  const tutorials = tutorialPaths.map(({ tutoType, slug }) => {
    return {
      url: `${process.env.NEXT_PUBLIC_TUTORIAL_BASE_PATH}/${tutoType}/${slug.join("/")}`,
    };
  });

  const quickLearnSlugs = getQuickLearnSlugs();

  const quickLearns = (await quickLearnSlugs).map(({ slug }) => ({
    url: `${process.env.NEXT_PUBLIC_TUTORIAL_BASE_PATH}/quick-learn/${slug}`,
  }));

  return [
    {
      url: `${process.env.NEXT_PUBLIC_TUTORIAL_BASE_PATH}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    ...tutorials,
    ...quickLearns,
  ];
}
