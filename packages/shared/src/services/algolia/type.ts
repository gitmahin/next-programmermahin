export type AlgoliaIndexType = {
  label: string;
  slug: string;
};

export type IndexTutorialsType = AlgoliaIndexType & {
  type: string;
  desc: string;
  onthispage: AlgoliaIndexType[];
};
