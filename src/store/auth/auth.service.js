import api from "@/api/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const authSignin = createAsyncThunk(
  "authsignin",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await api.post(`/login`, formData);
      return response?.data;
    } catch (error) {
      return rejectWithValue(
        error?.response?.data?.message ||
          error?.message ||
          "Something went wrong",
      );
    }
  }
);

export const authSignup = createAsyncThunk(
  "authsignup",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await api.post(`/signup`, formData);
    } catch (error) {
      return rejectWithValue(
        error?.response?.data?.message ||
          error?.message ||
          "Something went wrong",
      );
    }
  }
);
