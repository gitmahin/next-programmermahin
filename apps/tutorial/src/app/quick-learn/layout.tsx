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
        <QuickLearnNavList />
        <MainNavs />
      </Sidebar>
      <div>{children}</div>
    </>
  );
};

export default layout;
