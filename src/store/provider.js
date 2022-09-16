import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Api } from "../pages/api/api";

let url;

const buildProviderList = (payload) => {
  const list = payload.entities;
  return list.map((item) => {
    return {
      id: item._id,
      label: item.name,
      value: item.name,
    };
  });
};

export const fetchAllPayers = createAsyncThunk(
  "user/fetchAllPayers",
  async ({ token }) => {
    const api = new Api();
    url = `/ecp/appointment/insurance/allpayers`;
    return api.getResponse(url, null, "get", token);
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
    [fetchAllPayers.pending]: (state) => {
      state.status = "loading";
    },
    [fetchAllPayers.fulfilled]: (state, { payload }) => {
      state.list = buildProviderList(payload);
      state.status = "success";
    },
    [fetchAllPayers.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

// Action creators are generated for each case reducer function
// export const {
// } = providerStore.actions;

export default providerStore.reducer;
