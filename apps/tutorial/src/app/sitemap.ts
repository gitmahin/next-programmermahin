import { getQuickLearnSlugs } from "@/lib/quicklearn/getQuickLearnSlugs";
import { getTutorialsAbsolutePaths } from "@/lib/tutorials/getTutorialsAbsolutePaths";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const tutorialPaths = getTutorialsAbsolutePaths();

  const tutorials = tutorialPaths.map((path) => {
    return {
      url: `${process.env.NEXT_PUBLIC_BASE_PATH}/${path.tutoType}/${path.slug.join("/")}`,
    };
  });

  const quickLearnSlugs = getQuickLearnSlugs();

  const quickLearns = (await quickLearnSlugs).map((slug) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_PATH}/quick-learn/${slug}`,
  }));

  return [...tutorials, ...quickLearns];
}
