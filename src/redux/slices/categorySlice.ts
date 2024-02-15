import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CategoryState {
  activeCategoryId: number;
}

const initialState: CategoryState = {
  activeCategoryId: 0,
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    selectActiveCategory: (state, action: PayloadAction<number>) => {
      state.activeCategoryId = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { selectActiveCategory } = categorySlice.actions;

export default categorySlice.reducer;
