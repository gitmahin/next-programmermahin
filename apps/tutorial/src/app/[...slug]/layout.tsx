"use client";
import { getTutorialsByKey, TutorialEnums } from "@/constants";
import { notFound, useParams } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTutorialChapters } from "@/redux/tutorials/tutoChaptersSlice";
import { setLockMouseEnter } from "@/redux/tutorials/tutoTabSlice";

interface ContentLayoutPropsType {
  children: React.ReactNode;
}

export default function ContentLayout({ children }: ContentLayoutPropsType) {
  const params = useParams();
  const dispatch = useDispatch();
  const tutorialType = params.slug?.[0];

  useEffect(() => {
    // set tutorial chapter values in redux
    if (!setTutorialChapters) return;
    const tutorialData = getTutorialsByKey[tutorialType as TutorialEnums];
    if (!tutorialData) return notFound();

    dispatch(
      setTutorialChapters({
        data: tutorialData,
        type: tutorialType,
      })
    );
  }, [dispatch, tutorialType]);

  useEffect(() => {
    if (!setLockMouseEnter) return;
    dispatch(setLockMouseEnter(false));
  }, []);

  return <div>{children}</div>;
}
