import { algoliasearch as algoliaWrite } from "algoliasearch";

export const writeAlgolia = algoliaWrite(
  process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID || "",
  process.env.NEXT_ALGOLIA_WRITE_API || ""
);
