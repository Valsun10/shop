import { configureStore } from "@reduxjs/toolkit";
import clothesSlice from "./Clothes/clothesSlice";
import authSlice from "./Auth/authSlice";

const store = configureStore({
  reducer: {
    clothes: clothesSlice,
    auth: authSlice,
  },
});

export default store;
