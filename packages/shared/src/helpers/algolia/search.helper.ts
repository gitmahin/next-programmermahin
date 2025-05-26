import { liteClient as algoliasearch, LiteClient } from "algoliasearch/lite";
import { ALGOLIA_APPLICATION_ID, ALGOLIA_SEARCH_API } from "../common.helper";

export const searchAlgolia: LiteClient = algoliasearch(
  ALGOLIA_APPLICATION_ID || "",
  ALGOLIA_SEARCH_API || ""

  // KEEP IT COMMENTED. Causing Error: algoliasearch.helper.js:1846 Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'slice')
  // {
  //   requestsCache: createBrowserLocalStorageCache({
  //     key: "algolia-search-cache",
  //   }),
  //   responsesCache: createFallbackableCache({
  //     caches: [createMemoryCache(), createNullCache()],
  //   }),
  //   hostsCache: createMemoryCache(),
  // }
);
