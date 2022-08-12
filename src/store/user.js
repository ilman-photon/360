import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (payload, { dispatch, getState }) => {
    // const { todos } = getState()
    // console.log({ todos })
    // you can dispatch any action from here!
    // dispatch(del(2))
    return fetch(
      "/api/dummy/user"
      // `https://jsonplaceholder.typicode.com/posts?_limit=${payload.limit}`
    ).then((res) => res.json());
  }
);

const DEFAULT_USER_DATA = {
  firstName: "",
  lastName: "",
  name: "Eyecare User",
  preferredName: "---",
  profilePhoto: "",
  issuedCardFront: "",
  issuedCardBack: "",
  dob: new Date(),
  title: "Mr",
  ssn: 1234567,
  email: "",
  mobile: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  preferredCommunication: "both",
  age: "49",
  gender: "Male",
  preferredCommunication: "both",
  relationship: "",
  insurancePriority: "",
  planName: "",
  subscriberMember: "",
  groupId: "",
  isSubscriber: "",
  relationship: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: DEFAULT_USER_DATA,
    status: null,
  },
  reducers: {
    resetUserData: (state, action) => {
      state.loading = action.payload;
    },
    setUserData: (state, { payload }) => {
      state.userData = payload;
    },
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

// Action creators are generated for each case reducer function
export const { setUserData } = userSlice.actions;

export default userSlice.reducer;
