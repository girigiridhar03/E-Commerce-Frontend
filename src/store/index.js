import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./product/product.reducer";

const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

export default store;
