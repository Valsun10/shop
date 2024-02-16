import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: () => {
      return initialState;
    },
    setLoggedIn: (state, action) => {
      state.username = action.payload;
      state.isLoggedIn = true;
    },
  },
});

export const { reset, setLoggedIn } = authSlice.actions;
export default authSlice.reducer;
