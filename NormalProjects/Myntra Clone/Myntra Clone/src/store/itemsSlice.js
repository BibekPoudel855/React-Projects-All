import { createSlice } from "@reduxjs/toolkit";

const DEFAULT_ITEMS = [];

const initialState = DEFAULT_ITEMS;

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addInitialItems: (state, action) => {
      return action.payload;
    },
  },
});

export default itemsSlice;
export const { addInitialItems } = itemsSlice.actions;