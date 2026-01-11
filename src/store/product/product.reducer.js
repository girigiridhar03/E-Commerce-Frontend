import { createSlice } from "@reduxjs/toolkit";
import { getProducts, relatedProducts, singleProduct } from "./product.service";

const initialState = {
  loading: false,
  error: null,
  laptops: [],
  mobiles: [],
  latestProducts: [],
  allProducts: [],
  singleProductDetails: {},
  sLoading: false,
  relatedProductsArr: [],
  rLoading: false,
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
      })
      .addCase(singleProduct.pending, (state) => {
        state.sLoading = true;
      })
      .addCase(singleProduct.fulfilled, (state, { payload }) => {
        state.sLoading = false;
        state.singleProductDetails = payload;
      })
      .addCase(singleProduct.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(relatedProducts.pending, (state) => {
        state.rLoading = true;
      })
      .addCase(relatedProducts.fulfilled, (state, { payload }) => {
        state.rLoading = false;
        state.relatedProductsArr = payload;
      })
      .addCase(relatedProducts.rejected, (state, { payload }) => {
        state.rLoading = false;
        state.error = payload;
      }),
});

export default productReducer.reducer;
