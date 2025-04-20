import { algoliasearch as algoliaWrite } from "algoliasearch";
import { ALGOLIA_APPLICATION_ID } from "../common.helper";

export const writeAlgolia = algoliaWrite(
  ALGOLIA_APPLICATION_ID || "",
  // temporary
  "397658f3ee5476ffe91f63bb5447f688"
);
