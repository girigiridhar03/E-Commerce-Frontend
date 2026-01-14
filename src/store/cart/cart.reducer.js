import { createSlice } from "@reduxjs/toolkit";
import { addToCart, getCartItems } from "./cart.service";

const initialState = {
  cartLoadingByVariant: {},
  error: null,
  cartLoading: false,
  cartDetails: {},
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
      }),
});

export default cartReducer.reducer;
