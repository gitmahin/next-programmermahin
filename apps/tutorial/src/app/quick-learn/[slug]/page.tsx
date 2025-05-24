"use client"
import { useAppDispatch } from "@/hooks/redux.hook";
import { setQuickLearnNavitems } from "@/redux/quicklearn/quickLearnNavItemsSlice";
import { QUICKLEARN_TUTORIALS } from "@programmer/constants";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

export default function QuickLearnChildrenPage() {
  const dispatch = useAppDispatch()
  const path_name = usePathname()

  useEffect(() => {
    if(!setQuickLearnNavitems) return
    dispatch(
      setQuickLearnNavitems(QUICKLEARN_TUTORIALS)
    )
  }, [path_name])

  return <div>Quick learn children page</div>;
}
