import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Api } from "../pages/api/api";

let url;

const buildList = (payload) => {
  const list = payload.entities;
  return list.map((item) => {
    return {
      ...item,
      // mandatory for select component
      id: item._id,
      label: item.name,
      value: item.name,
    };
  });
};

export const fetchAllPayers = createAsyncThunk(
  "user/fetchAllPayers",
  async () => {
    const api = new Api();
    url = `/ecp/appointments/insurance/allpayers`;
    return api.getResponse(url, null, "get");
  }
);

export const fetchPlans = createAsyncThunk(
  "user/fetchplans",
  async ({ token, payerId }) => {
    const api = new Api();
    url = `/ecp/appointments/insurancepayers/${payerId}/plans?pageNo=0&pageSize=500`;
    return api.getResponse(url, null, "get", token);
  }
);

export const fetchProviderById = createAsyncThunk(
  "provider/fetchProviderById",
  async ({ providerId }) => {
    const api = new Api();
    url = `/ecp/appointments/getprovider/${providerId}`;
    return api.getResponse(url, null, "get");
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
  reducers: {
    resetPlans: (state) => {
      state.planList = [];
    },
  },
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
export const { resetPlans } = providerStore.actions;

export default providerStore.reducer;
