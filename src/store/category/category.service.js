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

export const getSelectedFields = createAsyncThunk(
  "namesAndFields",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.get(`/category/${id}`);
      return response?.data?.data?.fields;
    } catch (error) {
      return rejectWithValue(error?.message);
    }
  },
);

export const addNewCategoryAndFields = createAsyncThunk(
  "categoryAndFields",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await api.post(`/category/new`, formData);
      return response?.data?.data;
    } catch (error) {
      return rejectWithValue(error?.message);
    }
  },
);
