import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const getProducts = createAsyncThunk(
  "getProducts",
  async (reqBody, { rejectWithValue }) => {
    const { page, limit, search, key, sort } = reqBody;
    let url = `${baseUrl}/product/all-products?page=${page}&limit=${limit}`;

    if (search) {
      url += `&search=${search}`;
    }

    if (sort && sort !== "featured") {
      url += `&sort=${sort}`;
    }
    try {
      const response = await axios.get(url);
      return { key, data: response?.data?.data };
    } catch (error) {
      return rejectWithValue(error?.message);
    }
  }
);

export const singleProduct = createAsyncThunk(
  "singleProduct",
  async (reqBody, { rejectWithValue }) => {
    try {
      const { pId, vId } = reqBody;

      const response = await axios.get(
        `${baseUrl}/product/single-product/${pId}/${vId}`
      );
      return response?.data?.data;
    } catch (error) {
      return rejectWithValue(error?.message);
    }
  }
);

export const relatedProducts = createAsyncThunk(
  "relatedProduct",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${baseUrl}/product/related-products/${id}`
      );

      return response?.data?.data;
    } catch (error) {
      return rejectWithValue(error?.message);
    }
  }
);
