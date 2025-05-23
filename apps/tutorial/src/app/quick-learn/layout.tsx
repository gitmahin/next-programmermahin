import MainNavs from "@/components/main-navs";
import { Sidebar } from "@/components/sidebar";
import React from "react";

interface QuickLearnLayoutProps {
  children: React.ReactNode;
}

const layout = ({ children }: QuickLearnLayoutProps) => {
  return (
    <>
      <Sidebar>
        <MainNavs />
      </Sidebar>
      <div>{children}</div>
    </>
  );
};

export default layout;
