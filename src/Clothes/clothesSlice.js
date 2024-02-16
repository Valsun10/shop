import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  a: "123",
};

export const clothesSlice = createSlice({
  name: "clothes",
  initialState,
  reducers: {
    reset: () => {
      return initialState;
    },
  },
});

export const { reset } = clothesSlice.actions;
export default clothesSlice.reducer;
