import { liteClient as algoliasearch, LiteClient } from "algoliasearch/lite";
import {
  createNullCache,
  createBrowserLocalStorageCache,
  createMemoryCache,
  createFallbackableCache,
} from "@algolia/client-common";
import dotenv from "dotenv"
dotenv.config()

export const searchAlgolia: LiteClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID || "",
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API || "",
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
