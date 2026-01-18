import { createSlice } from "@reduxjs/toolkit";
import { getCategoryNames } from "./category.service";

const initialState = {
  loading: true,
  error: null,
  categoryNames: [],
};

const categoryReducer = createSlice({
  name: "categoryReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getCategoryNames.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCategoryNames.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.categoryNames = payload;
      })
      .addCase(getCategoryNames.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      }),
});

export default categoryReducer.reducer;
