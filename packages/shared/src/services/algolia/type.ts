export type AlgoliaIndexType = {
  objectID?: string;
  label: string;
  slug: string;
};

export type IndexTutorialsType = AlgoliaIndexType & {
  type: string;
  desc: string;
  onthispage: AlgoliaIndexType[];
};
