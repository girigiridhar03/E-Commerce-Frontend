import { createSlice } from "@reduxjs/toolkit";
import {
  addNewCategoryAndFields,
  getCategoryNames,
  getSelectedFields,
} from "./category.service";

const initialState = {
  loading: false,
  error: null,
  categoryNames: [],
  selectedFields: [],
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
      })
      .addCase(getSelectedFields.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSelectedFields.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.selectedFields = payload;
      })
      .addCase(getSelectedFields.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(addNewCategoryAndFields.pending, (state) => {
        state.loading = true;
      })
      .addCase(addNewCategoryAndFields.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(addNewCategoryAndFields.rejected, (state, { payload }) => {
        state.error = payload;
      }),
});

export default categoryReducer.reducer;
