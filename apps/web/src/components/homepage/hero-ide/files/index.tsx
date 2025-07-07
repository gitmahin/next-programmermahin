import dynamic from "next/dynamic";

const DynamicRootReadme = dynamic(() => import("./root-readme").then((mod) => mod.RootReadme))
const DynamicGitignore = dynamic(() => import("./gitignore").then((mod) => mod.GitIgnore))
const DynamicPrettierIgnore = dynamic(() => import("./prettier").then((mod) => mod.PrettierIgnore))
const DynamicPrettierRc = dynamic(() => import("./prettier").then((mod) => mod.PrettierRc))
const DynamicWebPackage = dynamic(() => import("./package").then((mod) => mod.WebPackage))
const DynamicTurbojson = dynamic(() => import("./turbojson").then((mod) => mod.Turbojson))
const DynamicTsConfig = dynamic(() => import("./tsConfig").then((mod) => mod.TsConfig))
const DynamicReduxStore = dynamic(() => import("./searchReduxCode").then((mod) => mod.ReduxStore))
const DynamicSearchBoxOpenSliceCode = dynamic(() => import("./searchReduxCode").then((mod) => mod.SearchBoxOpenSliceCode))
const DynamicSearchMetaInfoSliceCode = dynamic(() => import("./searchReduxCode").then((mod) => mod.SearchMetaInfoSliceCode))
const DynamicSearchMobInfoOpenSliceCode = dynamic(() => import("./searchReduxCode").then((mod) => mod.SearchMobInfoOpenSliceCode))
const DynamicSharedPackageJson = dynamic(() => import("./package").then((mod) => mod.SharedPackageJson))


export const getFileContentCompById: Record<FileId, React.ReactNode> = {
  "root-readme": <DynamicRootReadme />,
  gitignore: <DynamicGitignore />,
  prettierignore: <DynamicPrettierIgnore />,
  prettierrc: <DynamicPrettierRc />,
  packagejson: <DynamicWebPackage />,
  turbojson: <DynamicTurbojson />,
  tsconfigjson: <DynamicTsConfig />,
  "web-redux-store": <DynamicReduxStore />,
  searchBoxOpenSlice: <DynamicSearchBoxOpenSliceCode />,
  searchMetaInfoSlice: <DynamicSearchMetaInfoSliceCode />,
  searchMobInfoOpenSlice: <DynamicSearchMobInfoOpenSliceCode />,
  "packagejson-shared": <DynamicSharedPackageJson />,
};
