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

export const notificationStore = createSlice({
  name: "index",
  initialState: INITIAL_STATE,
  reducers: {
    markAllAsRead: (state) => {
      state.list = state.list.map((v) => {
        return {
          ...v,
          isRead: true,
        };
      });
    },
    markAsReadById: (state, { payload }) => {
      state.list = state.list.map((v) => {
        return {
          ...v,
          isRead: payload === v.id ? true : v.isRead,
        };
      });
    },
  },
  extraReducers: {
    [fetchNotifications.pending]: (state) => {
      state.status = "loading";
    },
    [fetchNotifications.fulfilled]: (state, { payload }) => {
      state.list = payload;
      state.status = "success";
    },
    [fetchNotifications.rejected]: (state, action) => {
      state.error = action;
      state.status = "failed";
    },
  },
});

// Action creators are generated for each case reducer function
export const { markAllAsRead, markAsReadById } = notificationStore.actions;

export default notificationStore.reducer;
