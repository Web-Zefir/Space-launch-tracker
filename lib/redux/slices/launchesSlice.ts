import { createSlice } from '@reduxjs/toolkit';
import type { Launch } from '@lib/types/launch';

interface LaunchesState {
  favorites: Launch[]
};

const initialState: LaunchesState = {
  favorites: []
};

const launchesSlice = createSlice({
  name: 'launches',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favorites.push(action.payload)
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(launch => launch.id !== action.payload)
    },
  },
});

export const { addFavorite, removeFavorite } = launchesSlice.actions;
export default launchesSlice.reducer;