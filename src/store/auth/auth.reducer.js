import { createSlice } from "@reduxjs/toolkit";
import { authSignin, userDetails } from "./auth.service";

const initialState = {
  authLoading: false,
  error: null,
  userDetailsObj: {},
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
      })
      .addCase(userDetails.pending, (state) => {
        state.authLoading = true;
      })
      .addCase(userDetails.fulfilled, (state, { payload }) => {
        state.authLoading = false;
        state.userDetailsObj = payload;
      })
      .addCase(userDetails.rejected, (state, { payload }) => {
        state.authLoading = false;
        state.userDetailsObj = payload;
      }),
});

export default authReducer.reducer;
