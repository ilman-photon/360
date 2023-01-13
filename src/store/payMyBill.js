import { createSlice } from "@reduxjs/toolkit";

const calculateBalanceObject = (summaryData) => {
  return (
    summaryData.totalRetail -
    summaryData.totalInsurance -
    summaryData.totalDiscount +
    summaryData.totalTax -
    summaryData.totalAdjustment -
    summaryData.totalPayment
  );
};

const getObjectData = (item) => ({
  invoiceNumber: item?._invoiceNumber,
  dos: item?.serviceDate,
  creditBalance: item?.summary ? calculateBalanceObject(item.summary) : 0,
  patientDue: item?.summary ? calculateBalanceObject(item.summary) : 0,
  provider: `${item?.provider?.firstName} ${item?.provider?.lastName}`,
  invoiceType: item?._invoiceType,
  status: item?._invoiceStatus,
  id: item?._id,
  patient: item?.patient,
});

const getDescription = (item) => {
  let desc = "";
  item.map((itemDesc) => {
    if (item.length > 1) {
      desc = `${desc}, ${itemDesc.category}`;
    } else {
      desc = itemDesc.category;
    }
  });
  return desc;
};

export function getBalanceData(data) {
  const summary = data?.summary;
  let totalBalance = 0;
  if (summary) {
    totalBalance =
      summary.totalRetail -
      summary.totalInsurance -
      summary.totalDiscount +
      summary.totalTax -
      summary.totalAdjustment -
      summary.totalPayment;
  }
  return formatter.format(totalBalance);
}

const getSummaryObjectData = (item) => ({
  id: item?._id,
  invoiceNumber: item?._invoiceNumber,
  dos: item?.serviceDate,
  balanceDue: getBalanceData(item),
  totalCharges: item?.summary?.totalRetail,
  totalAllowed: 0,
  insurancePaid: item?.summary?.totalInsurance,
  patientPaid: item?.summary?.totalPayment,
  description: getDescription(item.lineItems),
  providerName: `${item?.provider?.firstName} ${item?.provider?.lastName}`,
});

const pushNewDataByCondition = (newData, item, isOpen) => {
  if (isOpen) {
    if (
      item?._invoiceStatus == "OPEN" ||
      item?._invoiceStatus == "IN_PROGRESS"
    ) {
      newData.push(getObjectData(item));
    }
  } else if (item?._invoiceStatus == "FINALIZED") {
    newData.push(getObjectData(item));
  }
};

export const mappingListData = (data, isOpen) => {
  let newData = [];
  data?.entities.map((item) => {
    pushNewDataByCondition(newData, item, isOpen);
  });
  return newData;
};

const billSlice = createSlice({
  name: "bill",
  initialState: {
    billingOpenList: [],
    billingHistoryList: [],
    summaryData: {},
    searchDataList: [],
    status: "loading",
  },
  reducers: {
    setStatus: (state, { payload }) => {
      state.status = payload;
    },
    setBillingOpenList: (state, { payload }) => {
      state.billingOpenList = mappingListData(payload.response, payload.isOpen);
    },
    setBillingHistoryList: (state, { payload }) => {
      state.billingHistoryList = mappingListData(
        payload.response,
        payload.isOpen
      );
    },
    setSearchDataList: (state, { payload }) => {
      state.searchDataList = mappingListData(payload.response, payload.isOpen);
    },
    setSummaryData: (state, { payload }) => {
      state.summaryData = getSummaryObjectData(payload.response);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setStatus,
  setBillingOpenList,
  setBillingHistoryList,
  setSearchDataList,
  setSummaryData,
} = billSlice.actions;

export default billSlice.reducer;
