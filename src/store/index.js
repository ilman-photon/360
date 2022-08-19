import { createSlice } from "@reduxjs/toolkit";

const DEFAULT_FORM_MESSAGE = { success: null, title: null, content: null };

const INITIAL_STATE = {
  loading: true,
  counter: 0,
  formMessage: DEFAULT_FORM_MESSAGE,
  isBackToLogin: false,
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
  },
});

// Action creators are generated for each case reducer function
export const { setLoading, increment, setFormMessage, resetFormMessage } =
  indexStore.actions;

export default indexStore.reducer;
