import { createSlice } from "@reduxjs/toolkit";
import { addToCart, cartCount, getCartItems } from "./cart.service";

const initialState = {
  cartLoadingByVariant: {},
  error: null,
  cartLoading: false,
  cartDetails: {},
  cartCountNum: 0,
};

const cartReducer = createSlice({
  name: "cartReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(addToCart.pending, (state, action) => {
        const { variantId } = action.meta.arg;
        state.cartLoadingByVariant[variantId] = true;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        const { variantId } = action.meta.arg;
        delete state.cartLoadingByVariant[variantId];
      })
      .addCase(addToCart.rejected, (state, action) => {
        const { variantId } = action.meta.arg;
        delete state.cartLoadingByVariant[variantId];
      })
      .addCase(getCartItems.pending, (state) => {
        state.cartLoading = true;
      })
      .addCase(getCartItems.fulfilled, (state, { payload }) => {
        state.cartLoading = false;
        state.cartDetails = payload;
      })
      .addCase(getCartItems.rejected, (state, { payload }) => {
        state.cartLoading = false;
        state.error = payload;
      })
      .addCase(cartCount.pending, (state) => {
        state.cartCountNum = 0;
      })
      .addCase(cartCount.fulfilled, (state, { payload }) => {
        state.cartCountNum = payload;
      })
      .addCase(cartCount.rejected, (state, { payload }) => {
        state.cartCountNum = 0;
        state.error = payload;
      }),
});

export default cartReducer.reducer;
