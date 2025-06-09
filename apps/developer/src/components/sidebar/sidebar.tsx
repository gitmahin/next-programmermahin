import { DEVELOPER_DOCS_DATA } from "@/constants/developer-docs-data";
import Link from "next/link";
import React from "react";

export const Sidebar = () => {
  return (
    <aside className="w-[300px] border-r border-border-color_800C h-[calc(100vh-50px)] fixed bottom-0 left-0 z-30 pt-5 px-5 overflow-y-auto">
      {Object.entries(DEVELOPER_DOCS_DATA).map(([Key, value], i) => {
        return (
          <div key={i} className="mb-8 text-read_1">
          
              <h4>{Key}</h4>
              <div className="pl-5 leading-7">
                {value.items.map((item, j) => {
                  return (
                    <div key={j}>
                      <Link href={""} className="classic_link">
                        {item.label}
                      </Link>
                      <div className="pl-5">
                        {item.siblingOneItems?.map((siblingOneItem, k) => {
                          return (
                            <div key={k}>
                              <Link href={""} className="classic_link">
                                {siblingOneItem.siblingOneLabel}
                              </Link>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
      
          </div>
        );
      })}
    </aside>
  );
};
