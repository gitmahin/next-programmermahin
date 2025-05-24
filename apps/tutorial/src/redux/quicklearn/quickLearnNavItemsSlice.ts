import { GeneralNavItemType } from '@programmer/types'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction, Slice } from '@reduxjs/toolkit'
import { RootState } from '../store'

export interface QuickLearnNavItemDataType {
    data: GeneralNavItemType[] | []
}

// Define the initial state using that type
const initialState: QuickLearnNavItemDataType = {
    data: []
}

export const quickLearnNavItemsSliceName = "quickLearnNavItems"

export const quickLearnNavItemsSlice: Slice<QuickLearnNavItemDataType> = createSlice({
  name: quickLearnNavItemsSliceName,
  initialState,
  reducers: {
    setQuickLearnNavitems: (state, action: PayloadAction<GeneralNavItemType[]>) => {
        state.data = action.payload
    }
  },
})

export const quickLearnNavItems = (state: RootState) => state.quickLearnNavItems.data
export const {setQuickLearnNavitems} = quickLearnNavItemsSlice.actions
export default quickLearnNavItemsSlice.reducer
