import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './slices/categorySlice';
import favouritesReducer from './slices/favouritesSlice';

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    favourites: favouritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
