"use client";
import { TutorialEnums } from "@/constants";
import { DEVOPS_TUTORIALS } from "@/constants/tutorials/devops";
import { notFound, useParams } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTutorialChapters } from "@/redux/tutorials/tutoChaptersSlice";
import { TutorialNavItemType } from "@/constants/tutorials/type";

interface ContentLayoutPropsType {
  children: React.ReactNode;
}

export default function ContentLayout({ children }: ContentLayoutPropsType) {
  const params = useParams();
  const dispatch = useDispatch();
  const tutorialType = params.slug?.[0];

  const tutorials: Record<TutorialEnums, TutorialNavItemType> = {
    [TutorialEnums.DEVOPS]: DEVOPS_TUTORIALS,
    [TutorialEnums.REACT]: DEVOPS_TUTORIALS,
    [TutorialEnums.GIT]: DEVOPS_TUTORIALS,
    [TutorialEnums.CPP]: DEVOPS_TUTORIALS,
    [TutorialEnums.NEXTJS]: DEVOPS_TUTORIALS,
  };

  useEffect(() => {
    // set tutorial chapter values in redux
    if (!setTutorialChapters) return;

    const tutorialData = tutorials[tutorialType as TutorialEnums];
    
    if (!tutorialData) return notFound();

    dispatch(
      setTutorialChapters({
        data: tutorialData,
        type: tutorialType,
      })
    );

  }, [dispatch, tutorialType]);

  return (
    <div>
      {children}
    </div>
  );
}
