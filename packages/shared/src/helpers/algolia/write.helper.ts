import { algoliasearch as algoliaWrite } from "algoliasearch";
import { ALGOLIA_APPLICATION_ID } from "../common.helper";

export const writeAlgolia = algoliaWrite(
  ALGOLIA_APPLICATION_ID || "",
  process.env.ALGOLIA_WRITE_API || ""
);
