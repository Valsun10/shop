import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import clothesService from "./clothesService";

const initialState = {
  products: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const getAllClothes = createAsyncThunk(
  "clothes/getAll",
  async (_, thunkAPI) => {
    try {
      return await clothesService.getAllClothes();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const clothesSlice = createSlice({
  name: "clothes",
  initialState,
  reducers: {
    reset: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllClothes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllClothes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload.products;
      })
      .addCase(getAllClothes.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      });
  },
});

export const { reset } = clothesSlice.actions;
export default clothesSlice.reducer;
