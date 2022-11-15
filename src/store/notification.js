import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Api } from "../pages/api/api";

let url;

export const fetchNotifications = createAsyncThunk(
  "notification/fetchNotifications",
  async ({ patientId }) => {
    const api = new Api();
    return api.getResponse(
      `/ecp/messagealert/getalerts/${patientId}`, // "7dba6139-e2aa-4994-bb72-af6f1b11b94a"
      null,
      "get"
    );
  }
);

export const readNotificationItem = createAsyncThunk(
  "notification/readNotificationItem",
  async ({ patientId, notificationIds }) => {
    console.log(patientId, notificationIds);
    const api = new Api();
    url = `/ecp/messagealert/getMessageDetails/${patientId}`; // "7dba6139-e2aa-4994-bb72-af6f1b11b94a"
    let postBodyValue = [];
    notificationIds.forEach((element) => {
      postBodyValue.push({
        id: element,
        isRead: true,
      });
    });

    try {
      const response = await api.getResponse(
        url,
        {
          op: "replace",
          path: "/isRead",
          value: postBodyValue,
        },
        "patch"
      );

      return {
        success: true,
        response,
      };
    } catch (error) {
      console.error({ error });
      return {
        success: false,
        response: error,
      };
    }
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
        const id = v.id || v._id;
        return {
          ...v,
          isRead: payload === id ? true : v.isRead,
        };
      });
    },
  },
  extraReducers: {
    [fetchNotifications.pending]: (state) => {
      state.status = "loading";
    },
    [fetchNotifications.fulfilled]: (state, { payload }) => {
      state.list = payload.alerts;
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
