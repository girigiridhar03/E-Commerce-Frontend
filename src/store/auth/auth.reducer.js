import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authLoading: false,
  error: null,
};

const authReducer = createSlice({
  name: "authReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => builder.addCase,
});

export default authReducer.reducer;
