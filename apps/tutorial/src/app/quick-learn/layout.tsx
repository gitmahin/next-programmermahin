import MainNavs from "@/components/main-navs";
import { Sidebar } from "@/components/sidebar";
import React from "react";
import { QuickLearnNavList } from "./components/quicklearn-nav-list";
import { QuickLearnHeader } from "./components/quickLearnHeader";

interface QuickLearnLayoutProps {
  children: React.ReactNode;
}

const layout = ({ children }: QuickLearnLayoutProps) => {
  return (
    <>
      <Sidebar>
        <div>
          <QuickLearnNavList />
          <MainNavs />
        </div>
      </Sidebar>
      <div>
        {/* header quick learn */}
        {/* <QuickLearnHeader/> */}
        {children}
      </div>
    </>
  );
};

export default layout;
