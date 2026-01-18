import { createSlice } from "@reduxjs/toolkit";
import {
  addToCart,
  cartCount,
  decreaseCartItemCount,
  deleteProductFromCart,
  getCartItems,
} from "./cart.service";

const initialState = {
  cartLoadingByVariant: {},
  error: null,
  cartLoading: false,
  cartCountNum: 0,
  cartCountLoading: false,
  deleteVarLoading: {},
  cartItems: [],
  summary: {},
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
        state.summary = action.payload?.data?.cartSummary;
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
        state.cartItems = payload.cartItems;
        state.summary = payload.summary;
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
      })
      .addCase(decreaseCartItemCount.pending, (state) => {
        state.cartCountLoading = true;
      })
      .addCase(decreaseCartItemCount.fulfilled, (state, { payload }) => {
        state.cartCountLoading = false;
        state.summary = payload?.summary;
      })
      .addCase(decreaseCartItemCount.rejected, (state, { payload }) => {
        state.cartCountLoading = false;
        state.error = payload;
      })
      .addCase(deleteProductFromCart.pending, (state, action) => {
        const { vId } = action.meta.arg;
        state.deleteVarLoading[vId] = true;
      })
      .addCase(deleteProductFromCart.fulfilled, (state, action) => {
        const { vId } = action.meta.arg;
        delete state.deleteVarLoading[vId];
      })
      .addCase(deleteProductFromCart.rejected, (state, action) => {
        const { vId } = action.meta.arg;
        delete state.deleteVarLoading[vId];
        state.error = action.payload;
      }),
});

export default cartReducer.reducer;
