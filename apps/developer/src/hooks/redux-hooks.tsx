import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '@/redux/store'
import { initializePaginationSlicePackage } from '@programmer/shared'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

initializePaginationSlicePackage(useAppDispatch, useAppSelector)