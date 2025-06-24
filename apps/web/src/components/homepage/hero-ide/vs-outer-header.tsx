const IDE_HEADER_NAV_MENUS = [
  "File",
  "Edit",
  "Selection",
  "View",
  "Go",
  "Run",
  "Terminal",
  "Help",
];
export const VsOuterHeader = () => {
  return (
    <div className="w-full flex justify-start items-center gap-2 mb-1 pl-5">
      <span className="text-[10px] font-weight_530">Code</span>
      <ul className="flex justify-start items-center gap-0.5">
        {IDE_HEADER_NAV_MENUS.map((item, i) => {
          return (
            <li
              key={i}
              className="text-[10px] px-1 hover:bg-background-color_800C cursor-pointer rounded-[3px] transition-colors text-text-color_4 font-weight_450"
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
