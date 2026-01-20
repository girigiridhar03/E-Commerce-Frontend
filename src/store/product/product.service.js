import api from "@/api/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk(
  "getProducts",
  async (reqBody, { rejectWithValue }) => {
    const { page, limit, search, key, sort } = reqBody;
    let url = `/product/all-products?page=${page}&limit=${limit}`;

    if (search) {
      url += `&search=${search}`;
    }

    if (sort && sort !== "featured") {
      url += `&sort=${sort}`;
    }
    try {
      const response = await api.get(url);
      return { key, data: response?.data?.data };
    } catch (error) {
      return rejectWithValue(error?.message);
    }
  },
);

export const singleProduct = createAsyncThunk(
  "singleProduct",
  async (reqBody, { rejectWithValue }) => {
    try {
      const { pId, vId } = reqBody;

      const response = await api.get(`/product/single-product/${pId}/${vId}`);
      return response?.data?.data;
    } catch (error) {
      return rejectWithValue(error?.message);
    }
  },
);

export const relatedProducts = createAsyncThunk(
  "relatedProduct",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.get(`/product/related-products/${id}`);

      return response?.data?.data;
    } catch (error) {
      return rejectWithValue(error?.message);
    }
  },
);

export const createProduct = createAsyncThunk(
  "createProduct",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await api.post("/product/create-product", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response?.data;
    } catch (error) {
      return rejectWithValue(error?.message);
    }
  },
);
