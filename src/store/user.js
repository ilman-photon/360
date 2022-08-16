import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  return fetch("api/user").then((res) => res.json());
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: {},
    status: null,
  },
  extraReducers: {
    [fetchUser.pending]: (state) => {
      state.status = "loading";
    },
    [fetchUser.fulfilled]: (state, { payload }) => {
      state.userData = payload;
      state.status = "success";
    },
    [fetchUser.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export default userSlice.reducer;
