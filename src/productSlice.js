import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { isCancel, AxiosError } from "axios";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProduct.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(getProduct.rejected, (state, action) => {});
  },
});

export const getProduct = createAsyncThunk("product/getProduct", async ({}) => {
  try {
    const response = await axios.post("https://fakestoreapi.com/auth/login", {
      username: "mor_2314",
      password: "83r5^_",
    });
    console.log("REsponse", response);
  } catch (error) {
    return error;
  }
});

export default productSlice.reducer;
