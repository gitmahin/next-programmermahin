import { getTutorialsAbsolutePaths } from "@/lib/tutorials/getTutorialsAbsolutePaths";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const tutorialPaths = getTutorialsAbsolutePaths()

    const tutorials = tutorialPaths.map((path) => {
        return {
            url: `${path.tutoType}/${path.slug.join("/")}`
        }
    })

    return [...tutorials]
}