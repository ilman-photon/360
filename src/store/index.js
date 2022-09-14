import { createSlice } from "@reduxjs/toolkit";

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
  genericErrorMessage: null,
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
    setGenericErrorMessage: (state, { payload }) => {
      state.genericErrorMessage = payload;
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
  setGenericErrorMessage,
} = indexStore.actions;

export default indexStore.reducer;
