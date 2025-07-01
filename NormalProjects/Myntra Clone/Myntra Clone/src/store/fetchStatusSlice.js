import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetched: false,
    fetching: false,
  },
  reducers: {
    setFetched: (state, action) => {
      state.fetched = action.payload;
    },
    setFetching: (state, action) => {
      
      state.fetching = action.payload;
    },
  },
});

export default fetchStatusSlice.reducer;
export const { setFetched, setFetching } = fetchStatusSlice.actions;
