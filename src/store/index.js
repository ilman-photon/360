import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Api } from "../pages/api/api";

export const fetchToken = createAsyncThunk("index/fetchToken", async () => {
  const api = new Api();
  const response = await api.getToken();

  return response.data;
});

const DEFAULT_FORM_MESSAGE = { success: null, title: null, content: null };
const DEFAULT_PAGE_MESSAGE = {
  isShow: false,
  success: null,
  title: null,
  content: null,
};

const INITIAL_STATE = {
  loading: true,
  counter: 0,
  formMessage: DEFAULT_FORM_MESSAGE,
  pageMessage: DEFAULT_PAGE_MESSAGE,
  isBackToLogin: false,
  accessToken: null,
};

export const indexStore = createSlice({
  name: "index",
  initialState: INITIAL_STATE,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    increment: (state) => {
      state.counter++;
    },
    setFormMessage: (state, action) => {
      state.formMessage = action.payload;
    },
    resetFormMessage: (state) => {
      state.formMessage = DEFAULT_FORM_MESSAGE;
    },
    setPageMessage: (state, action) => {
      state.pageMessage = action.payload;
    },
    closePageMessage: (state) => {
      state.pageMessage = { ...state.pageMessage, isShow: false };
    },
    resetPageMessage: (state) => {
      state.pageMessage = DEFAULT_PAGE_MESSAGE;
    },
  },
  extraReducers: {
    [fetchToken.pending]: (state) => {
      state.status = "loading";
    },
    [fetchToken.fulfilled]: (state, { payload }) => {
      state.accessToken = payload.access_token;
      state.status = "success";
    },
    [fetchToken.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setLoading,
  increment,
  setFormMessage,
  resetFormMessage,
  setPageMessage,
  closePageMessage,
  resetPageMessage,
} = indexStore.actions;

export default indexStore.reducer;
