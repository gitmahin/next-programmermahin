import { liteClient as algoliasearch, LiteClient } from "algoliasearch/lite";
import {
  createNullCache,
  createBrowserLocalStorageCache,
  createMemoryCache,
  createFallbackableCache,
} from "@algolia/client-common";
import { ALGOLIA_APPLICATION_ID, ALGOLIA_SEARCH_API } from "../common.helper";

export const searchAlgolia: LiteClient = algoliasearch(
    // temporary
  ALGOLIA_APPLICATION_ID || "5Y8FAC7ILR",
  ALGOLIA_SEARCH_API || "10c49dc3e38fe043ceeaede41894a9ee",
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
