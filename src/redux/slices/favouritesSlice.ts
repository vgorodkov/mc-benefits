import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

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
    addToFavourites: (state, action: PayloadAction<number>) => {
      state.favouritesIds.push(action.payload);
    },
    removeFromFavourites: (state, action) => {
      state.favouritesIds = state.favouritesIds.filter((id) => id !== action.payload);
    },
  },
});

export const { addToFavourites, removeFromFavourites } = favouritesSlice.actions;

export default favouritesSlice.reducer;
