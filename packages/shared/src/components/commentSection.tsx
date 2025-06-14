"use client"
import { PMButton } from "@programmer/ui";
import React, { useState } from "react";

type CommentSectionPropsType = {
  context: string;
};

type CommentOptionIdType = "write" | "preview"

type CommentOptionsType = {
  label: string;
  id: CommentOptionIdType;
};

const commentOptions: CommentOptionsType[] = [
  {
    label: "Write",
    id: "write",
  },
  {
    label: "Preview",
    id: "preview",
  },
];
export const CommentSection = ({}) => {

    const [activeCommentOption, setActiveCommentOption] = useState<CommentOptionIdType>("write")

  return (
    <div className="w-full mt-16">
        <div>

       
      <div className="w-full border border-border-color_800C overflow-hidden rounded-[10px]">
        <div className="flex justify-start items-center bg-background-color_925C pt-1 pl-1">
          {commentOptions.map((item, i) => {
            return (
              <button onClick={() => setActiveCommentOption(item.id)} key={i} className={`px-3 py-1 text-text-color_2 text-read_1 font-medium rounded-t-[7px] ${item.id  === activeCommentOption && "bg-background-color_950C"}`}>
                {item.label}
              </button>
            );
          })}
        </div>
        <div >
          <textarea
            name="comment"
            id="comment"
            className="min-h-[200px] border-none outline-none w-full bg-background-color_950C p-3"
            placeholder="Write a comment..."
          ></textarea>
        </div>

      </div>
      <div className="w-full flex justify-end items-center mt-3 ">
        <PMButton className="px-5 py-1.5 rounded text-read_1" >
            Comment
        </PMButton>
      </div>
       </div>
    </div>
  );
};
