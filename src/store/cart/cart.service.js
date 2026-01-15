import api from "@/api/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const addToCart = createAsyncThunk(
  "addToCart",
  async (reqBody, { rejectWithValue }) => {
    const { productId, variantId, quantity = 1, productName } = reqBody;

    try {
      const response = await api.post("/cart/addToCart", {
        productId,
        variantId,
        quantity,
      });

      if (response?.data?.success) {
        toast.success(`Added to Cart: ${productName}`);
      }
      return response?.data;
    } catch (error) {
      return rejectWithValue(error?.message);
    }
  }
);

export const getCartItems = createAsyncThunk(
  "cartItems",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/cart/cart-items");

      return response?.data?.data;
    } catch (error) {
      return rejectWithValue(error?.message);
    }
  }
);

export const cartCount = createAsyncThunk(
  "cartcount",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/cart/cart-count");
      return response?.data?.data;
    } catch (error) {
      return rejectWithValue(error?.message);
    }
  }
);
