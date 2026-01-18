import api from "@/api/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCategoryNames = createAsyncThunk(
  "categoryNames",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/category");
      return response?.data?.data;
    } catch (error) {
      return rejectWithValue(error?.message);
    }
  },
);
