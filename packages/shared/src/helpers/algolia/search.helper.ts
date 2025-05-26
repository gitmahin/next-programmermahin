import { liteClient as algoliasearch, LiteClient } from "algoliasearch/lite";
import { ALGOLIA_APPLICATION_ID, ALGOLIA_SEARCH_API } from "../common.helper";

export const searchAlgolia: LiteClient = algoliasearch(
  ALGOLIA_APPLICATION_ID || "",
  ALGOLIA_SEARCH_API || ""
);
