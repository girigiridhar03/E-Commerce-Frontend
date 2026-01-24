import api from "@/api/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const getCategoryNames = createAsyncThunk(
  "categoryNames",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/category");
      return response?.data?.data;
    } catch (error) {
      return rejectWithValue(
        error?.response?.data?.message ||
          error?.message ||
          "Something went wrong",
      );
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
      return rejectWithValue(
        error?.response?.data?.message ||
          error?.message ||
          "Something went wrong",
      );
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
      if (error?.status === 400) {
        toast.error(error?.response?.data?.message);
      }
      return rejectWithValue(
        error?.response?.data?.message ||
          error?.message ||
          "Something went wrong",
      );
    }
  },
);
