import { liteClient as algoliasearch, LiteClient } from "algoliasearch/lite";
import {
  createNullCache,
  createBrowserLocalStorageCache,
  createMemoryCache,
  createFallbackableCache,
} from "@algolia/client-common";
import { ALGOLIA_APPLICATION_ID, ALGOLIA_SEARCH_API } from "../common.helper";
import { createQuerySuggestionsPlugin } from '@algolia/autocomplete-plugin-query-suggestions';
import { TUTORIAL_INDEX_NAME } from "../../services";
import { createLocalStorageRecentSearchesPlugin } from '@algolia/autocomplete-plugin-recent-searches';

export const searchAlgolia: LiteClient = algoliasearch(
  ALGOLIA_APPLICATION_ID || "",
  ALGOLIA_SEARCH_API || ""
);
