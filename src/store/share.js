import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Api } from "../pages/api/api";

export const submitShareModal = createAsyncThunk(
  "share/submitShareModal",
  async ({ payload }) => {
    const api = new Api();
    try {
      const response = await api.getResponse(
        `/ecp/patient/share/shareMyDocument`,
        payload,
        "post"
      );
      return {
        success: true,
        response,
      };
    } catch (error) {
      return {
        success: false,
        response: error,
      };
    }
  }
);

const shareSlice = createSlice({
  name: "share",
  initialState: {
    shareModalData: {
      id: "",
      title: "",
      successPostmessage: "",
      type: "",
    },
    showToastMessage: false,
    openModal: false,
    modalContent: <></>,
    successCallback: () => {
      // This is intentional
    },
    failureCallback: () => {
      // This is intentional
    },
  },
  reducers: {
    setShareModalData: (state, { payload }) => {
      state.shareModalData = payload;
    },
    setShowToastMessage: (state, { payload }) => {
      state.showToastMessage = payload;
    },
    setModalContent: (state, { payload }) => {
      state.modalContent = payload;
    },
    setOpenModal: (state, { payload }) => {
      state.openModal = payload;
    },
    setSuccessCallback: (state, { payload }) => {
      state.successCallback = payload;
    },
    setFailureCallback: (state, { payload }) => {
      state.failureCallback = payload;
    },
    resetShareData: (state) => {
      state.shareModalData = {
        id: "",
        title: "",
        successPostmessage: "",
      };
      state.openModal = false;
      state.modalContent = <></>;
      state.successCallback = () => {
        // This is intentional
      };
      state.failureCallback = () => {
        // This is intentional
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setShareModalData,
  setShowToastMessage,
  setModalContent,
  setOpenModal,
  setSuccessCallback,
  setFailureCallback,
  resetShareData,
} = shareSlice.actions;

export default shareSlice.reducer;
