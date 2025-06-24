import { RootReadme } from "./root-readme";

const getFileContentCompById: Record<FileId, React.ReactNode> = {
  "root-readme": <RootReadme />,
};

export const VsIdeFileContent = ({
  activeFileId,
}: {
  activeFileId: FileId;
}) => {
  return (
    <div className="h-[calc(100%-22px)] vs_codeide_scrollbar overflow-y-auto ">
      <div className="w-full">{getFileContentCompById[activeFileId]}</div>
    </div>
  );
};
