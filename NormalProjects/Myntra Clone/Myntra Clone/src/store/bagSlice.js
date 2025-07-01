import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addToBag: (state, action) => {
      state.push(action.payload);
    },
    removeFromBag: (state, action) => {
      state.splice(state.indexOf(action.payload), 1);
    },
  },
});

export default bagSlice;
export const { addToBag, removeFromBag } = bagSlice.actions;
