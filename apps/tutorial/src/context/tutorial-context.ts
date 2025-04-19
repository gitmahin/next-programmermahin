"use client";

// currently not using this file
import { TutorialNavItemType } from "@/constants/tutorials/type";
import { createContext, useContext } from "react";

interface TutorialContexttype {
  data: TutorialNavItemType | null;
  type: string;
}

export const tutorialContext = createContext<TutorialContexttype | null>(null);

export const useTutorialContext = () => {
  const context = useContext(tutorialContext);
  if (!context) {
    throw new Error(
      "useTutorialContext must be used within a WorkspaceProvider"
    );
  }
  return context;
};
