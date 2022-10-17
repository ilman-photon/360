import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchNotifications = createAsyncThunk(
  "user/fetchNotifications",
  async () => {
    return fetch("/api/dummy/notification").then((res) => res.json());
  }
);

const INITIAL_STATE = {
  list: [],
  status: "loading",
};

export const providerStore = createSlice({
  name: "index",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: {
    [fetchNotifications.pending]: (state) => {
      state.status = "loading";
    },
    [fetchNotifications.fulfilled]: (state, { payload }) => {
      state.list = payload;
      state.status = "success";
    },
    [fetchNotifications.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export default providerStore.reducer;
