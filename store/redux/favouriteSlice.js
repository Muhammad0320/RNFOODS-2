import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
  initialState: {
    ids: [],
  },

  name: "favourite",

  reducers: {
    addFavourite: (state, action) => {
      state.ids.push(action.payload.id);
    },

    removeFavourite: (state, action) => {
      state.ids.filter((id) => id !== action.payload.id);
    },
  },
});

export default favouriteSlice.reducer;

export const { addFavourite, removeFavourite } = favouriteSlice.actions;
