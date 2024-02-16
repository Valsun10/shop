import { configureStore } from "@reduxjs/toolkit";
import clothesSlice from "./Clothes/clothesSlice";

const store = configureStore({
  reducer: {
    clothes: clothesSlice,
  },
});

export default store;
