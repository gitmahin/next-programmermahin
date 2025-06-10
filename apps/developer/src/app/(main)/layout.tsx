import { Header } from "@/components/core/header";
import { Sidebar } from "@/components/sidebar";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <Sidebar />
      <div className="w-full pl-[300px] pt-[50px] max-[1290px]:pl-0">
        {children}
      </div>
    </div>
  );
}
