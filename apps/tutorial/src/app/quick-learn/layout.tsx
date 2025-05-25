import MainNavs from "@/components/main-navs";
import { Sidebar } from "@/components/sidebar";
import React from "react";
import { QuickLearnNavList } from "./components/quicklearn-nav-list";

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
      <div>{children}</div>
  
    </>
  );
};

export default layout;
