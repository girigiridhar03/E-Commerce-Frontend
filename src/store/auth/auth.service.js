import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const authSignin = createAsyncThunk(
  "authsignin",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseUrl}/login`, formData);
    } catch (error) {
      return rejectWithValue(error?.message);
    }
  }
);

export const authSignup = createAsyncThunk(
  "authsignup",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseUrl}/signup`, formData);
    } catch (error) {
      return rejectWithValue(error?.message);
    }
  }
);
