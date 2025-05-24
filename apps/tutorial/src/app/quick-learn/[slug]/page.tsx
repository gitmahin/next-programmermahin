"use client"
import { useAppDispatch } from "@/hooks/redux.hook";
import { setQuickLearnNavitems } from "@/redux/quicklearn/quickLearnNavItemsSlice";
import { QUICKLEARN_TUTORIALS } from "@programmer/constants";
import React, { useEffect } from "react";

export default function QuickLearnChildrenPage() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    if(!setQuickLearnNavitems) return
    dispatch(
      setQuickLearnNavitems(QUICKLEARN_TUTORIALS)
    )
  }, [])

  return <div>Quick learn children page</div>;
}
