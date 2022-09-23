import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Api } from "../pages/api/api";

let url;

const buildList = (payload) => {
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
    url = `/ecp/insurance/allpayers`;
    return api.getResponse(url, null, "get", token);
  }
);

export const fetchPlans = createAsyncThunk(
  "user/fetchplans",
  async ({ token, payerId }) => {
    const api = new Api();
    url = `/ecp/insurance/v1/payers/${payerId}/plans?pageNo=1&pageSize=500`;
    return api.getResponse(url, null, "get", token);
  }
);

const INITIAL_STATE = {
  list: [],
  planList: [],
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
      state.list = buildList(payload);
      state.status = "success";
    },
    [fetchAllPayers.rejected]: (state) => {
      state.status = "failed";
    },
    [fetchPlans.pending]: (state) => {
      state.status = "loading";
    },
    [fetchPlans.fulfilled]: (state, { payload }) => {
      state.planList = buildList(payload);
      state.status = "success";
    },
    [fetchPlans.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

// Action creators are generated for each case reducer function
// export const {
// } = providerStore.actions;

export default providerStore.reducer;
