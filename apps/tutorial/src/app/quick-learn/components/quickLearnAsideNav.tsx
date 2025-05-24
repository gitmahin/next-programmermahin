import React from "react";

export const QuickLearnAsideNav = () => {
  return (
    <aside
      className={`w-[270px] h-screen flex-shrink-0 sticky pt-[70px] overflow-hidden top-0 tuto_cont_aside transition-all}`}
    >
      <div className="w-full h-full overflow-y-auto custom_scrollbar tuto_toc_main"></div>
    </aside>
  );
};
