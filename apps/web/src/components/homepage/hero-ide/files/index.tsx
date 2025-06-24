import { GitIgnore } from "./gitignore";
import { SharedPackageJson, WebPackage } from "./package";
import { PrettierIgnore, PrettierRc } from "./prettier";
import { RootReadme } from "./root-readme";
import {
  ReduxStore,
  SearchBoxOpenSliceCode,
  SearchMetaInfoSliceCode,
  SearchMobInfoOpenSliceCode,
} from "./searchReduxCode";
import { TsConfig } from "./tsConfig";
import { Turbojson } from "./turbojson";

export const getFileContentCompById: Record<FileId, React.ReactNode> = {
  "root-readme": <RootReadme />,
  gitignore: <GitIgnore />,
  prettierignore: <PrettierIgnore />,
  prettierrc: <PrettierRc />,
  packagejson: <WebPackage />,
  turbojson: <Turbojson />,
  tsconfigjson: <TsConfig />,
  "web-redux-store": <ReduxStore />,
  searchBoxOpenSlice: <SearchBoxOpenSliceCode />,
  searchMetaInfoSlice: <SearchMetaInfoSliceCode />,
  searchMobInfoOpenSlice: <SearchMobInfoOpenSliceCode />,
  "packagejson-shared": <SharedPackageJson />,
};
