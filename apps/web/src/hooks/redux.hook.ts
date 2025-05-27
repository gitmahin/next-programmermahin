import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/redux/store";
import { initializeSearchBoxOpenSlicePackage } from "@programmer/shared";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
// better type safety
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

initializeSearchBoxOpenSlicePackage(useAppDispatch, useAppSelector);
