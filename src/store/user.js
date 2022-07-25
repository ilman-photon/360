import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (payload, { dispatch, getState }) => {
    // const { todos } = getState()
    // console.log({ todos })
    // you can dispatch any action from here!
    // dispatch(del(2))
    return fetch(
      "api/user"
      // `https://jsonplaceholder.typicode.com/posts?_limit=${payload.limit}`
    ).then((res) => res.json());
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: {},
    status: null,
  },
  extraReducers: {
    [fetchUser.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchUser.fulfilled]: (state, { payload }) => {
      state.userData = payload;
      state.status = "success";
    },
    [fetchUser.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default userSlice.reducer;
