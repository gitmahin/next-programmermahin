import React from "react";

interface LayoutPropsTypes {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutPropsTypes) {
  return <div className="px-5">{children}</div>;
}
