import { createSlice } from "@reduxjs/toolkit";
import { authSignin } from "./auth.service";

const initialState = {
  authLoading: false,
  error: null,
};

const authReducer = createSlice({
  name: "authReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(authSignin.pending, (state) => {
        state.authLoading = true;
      })
      .addCase(authSignin.fulfilled, (state) => {
        state.authLoading = false;
      })
      .addCase(authSignin.rejected, (state, { payload }) => {
        state.authLoading = false;
        state.error = payload;
      }),
});

export default authReducer.reducer;
