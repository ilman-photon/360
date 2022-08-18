import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  return fetch("/api/dummy/user").then((res) => res.json());
});

const DEFAULT_USER_DATA = {
  firstName: "",
  lastName: "laste",
  name: "Eyecare User",
  preferredName: "---",
  profilePhoto: "",
  issuedCardFront: "/transparent.png",
  issuedCardBack: "/transparent.png",
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
  relationship: "",
  insurancePriority: "",
  planName: "",
  subscriberMember: "",
  groupId: "",
  isSubscriber: "",
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
    [fetchUser.pending]: (state, _action) => {
      state.status = "loading";
    },
    [fetchUser.fulfilled]: (state, { payload }) => {
      state.userData = payload;
      state.status = "success";
    },
    [fetchUser.rejected]: (state, _action) => {
      state.status = "failed";
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserData } = userSlice.actions;

export default userSlice.reducer;
