import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./product/product.reducer";
import authReducer from "./auth/auth.reducer";
import cartReducer from "./cart/cart.reducer";

const store = configureStore({
  reducer: {
    product: productReducer,
    auth: authReducer,
    cart: cartReducer,
  },
});

export default store;
