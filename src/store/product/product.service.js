import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
  "getProducts",
  async (reqBody, { rejectWithValue }) => {
    const { page, limit, search, key } = reqBody;
    let url = `http://localhost:8080/api/product/all-products?page=${page}&limit=${limit}`;

    if (search) {
      url += `&search=${search}`;
    }

    try {
      const response = await axios.get(url);
      return { key, data: response?.data?.data };
    } catch (error) {
      return rejectWithValue(error?.message);
    }
  }
);
