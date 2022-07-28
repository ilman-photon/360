import { createSlice } from "@reduxjs/toolkit";

const DEFAULT_FORM_MESSAGE = { title: null, content: null}

const INITIAL_STATE = {
  loading: true,
  counter: 0,
  formMessage: DEFAULT_FORM_MESSAGE
};

export const indexStore = createSlice({
  name: "index",
  initialState: INITIAL_STATE,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    increment: (state, action) => {
      state.counter++;
    },
    setFormMessage: (state, action) => {
      state.formMessage = action.payload
    },
    resetFormMessage: (state, action) => {
      state.formMessage = DEFAULT_FORM_MESSAGE
    }
  },
});

// Action creators are generated for each case reducer function
export const { setLoading, increment, setFormMessage, resetFormMessage } = indexStore.actions;

export default indexStore.reducer;
