import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./product.service";

const initialState = {
  loading: false,
  error: null,
  laptops: [],
  mobiles: [],
  latestProducts: [],
};

const productReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state[payload.key] = payload.data;
      })
      .addCase(getProducts.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;  
      }),
});

export default productReducer.reducer;
