import { liteClient as algoliasearch, LiteClient } from "algoliasearch/lite";
import {
  createNullCache,
  createBrowserLocalStorageCache,
  createMemoryCache,
  createFallbackableCache,
} from "@algolia/client-common";
import { ALGOLIA_APPLICATION_ID, ALGOLIA_SEARCH_API } from "../common.helper";

export const searchAlgolia: LiteClient = algoliasearch(
  ALGOLIA_APPLICATION_ID || "",
  ALGOLIA_SEARCH_API || "",
  {
    requestsCache: createBrowserLocalStorageCache({
      key: "algolia-search-cache",
    }),
    responsesCache: createFallbackableCache({
      caches: [createMemoryCache(), createNullCache()],
    }),
    hostsCache: createMemoryCache(),
  }
);
