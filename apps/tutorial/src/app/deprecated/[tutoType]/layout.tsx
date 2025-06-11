import React from "react";
import { getTutorialsByKey, TutorialEnums } from "@programmer/constants";
import { Sidebar, TutoSidebar } from "@/components/tutorials";

interface ContentLayoutPropsType {
  children: React.ReactNode;
  params: Promise<{ tutoType: string }>;
}

export async function generateStaticParams() {
  try {
    const tutorialTypes = [
      "cpp",
      "react",
      "nextjs",
      "devops",
      "git",
      "monorepo",
    ];

    return tutorialTypes.map((item, _) => {
      return {
        tutoType: item,
      };
    });
  } catch (error) {
    throw new Error("Failed to generate static params");
  }
}

export default async function ContentLayout({
  children,
  params,
}: ContentLayoutPropsType) {
  const { tutoType } = await params;

  if (process.env.NODE_ENV === "development") {
    generateStaticParams().then((params) => {
      console.log(params);
    });
  }

  const tutorialType = tutoType as TutorialEnums;
  const tutorialData = getTutorialsByKey[tutorialType as TutorialEnums];

  return (
    <>
      <Sidebar>
        <TutoSidebar tutorialType={tutorialType} tutoData={tutorialData} />
      </Sidebar>
      {children}
    </>
  );
}
