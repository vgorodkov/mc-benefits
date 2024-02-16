import { benefits } from '@data/benefits';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Benefit } from '@types';

export interface FavouritesState {
  favouritesIds: number[];
}

const initialState: FavouritesState = {
  favouritesIds: [],
};

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addToFavourites: (state, action) => {
      state.favouritesIds.push(action.payload);
    },
    removeFromFavourites: (state, action) => {
      state.favouritesIds = state.favouritesIds.filter((id) => id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToFavourites, removeFromFavourites } = favouritesSlice.actions;

export default favouritesSlice.reducer;
