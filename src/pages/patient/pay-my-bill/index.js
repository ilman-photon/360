/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { Api } from "../../api/api";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useMediaQuery } from "@mui/material";
import PayMyBillContainer from "../../../components/organisms/PayMyBill/payMyBill";
import moment from "moment";
import {
  setBillingOpenList,
  setBillingHistoryList,
  setSearchDataList,
} from "../../../store/payMyBill";
import { useDispatch, useSelector } from "react-redux";
import { fetchSource } from "../../../utils/fetchDigitalAssetSource";
import { LoadingModal } from "../../../components/molecules/LoadingModal/LoadingModal";
import { forEach } from "jszip";

export function downloadReceipts(receipts, print, isOpen = false) {
  receipts.forEach((item) => {
    fetchSource(item.digitalAssetId, print, true, isOpen);
  });
}

export default function PayMyBillPage() {
  const [payBillData, setPayBillData] = useState();
  const [activeTabs, setActiveTabs] = useState({
    index: 0,
    title: "Open Invoice",
  });
  const [noInvoiceText, setNoInvoiceText] = useState({
    content: "notInvoice",
    key: "open",
    text: "",
  });
  const [isHaveInvoice, setIsHaveInvoice] = useState(false);
  const [filterOption, setFilterOption] = useState("");
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [accountCredit, setAccountCredit] = useState({});
  const isDesktop = useMediaQuery("(min-width: 834px)");
  const router = useRouter();
  const dispatch = useDispatch();
  const openListData = useSelector((state) => state.payMyBill.billingOpenList);
  const historyListData = useSelector(
    (state) => state.payMyBill.billingHistoryList
  );
  const searchDataList = useSelector((state) => state.payMyBill.searchDataList);
  const [loading, setLoading] = useState(false);
  const [isLoad, setIsLoad] = useState(false);

  const { t } = useTranslation("translation", {
    keyPrefix: "payMyBill",
  });

  const getDisplayText = (tabPosition, isInvoice) => {
    if (isInvoice) {
      setNoInvoiceText({
        content: "notInvoice",
        key: tabPosition,
        text:
          tabPosition == "open"
            ? t("notOpenInvoices")
            : t("notInvoicesHistory"),
      });
    } else {
      setNoInvoiceText({
        content: "notResult",
        key: tabPosition,
        text:
          filterOption == "invoiceNumber"
            ? t("noResultInvoiceNumber")
            : t("noResultDateRange"),
      });
    }
  };

  /**
   *  Set for handle the data and UI for tab in payBill.
   * @param {array} data
   * @param {string} tabPosition
   * @param {boolean} isInvoice - flag for the data by searching or get open invoice and history invoice api service
   */
  const setHandleShowDataUI = (data, tabPosition, isInvoice) => {
    if (data?.length > 0) {
      setPayBillData(data);
      setNoInvoiceText({
        content: "",
        key: "",
        text: "",
      });
      setIsHaveInvoice(true);
    } else {
      setPayBillData(data);
      getDisplayText(tabPosition, isInvoice);
      setIsHaveInvoice(false);
    }
  };

  const getDateOfService = (date) => {
    return new moment(date).format("MM/DD/YYYY");
  };

  const mappingData = (data) => {
    return data?.map((item) => {
      const itemCopy = { ...item };
      Object.keys(item).forEach(function (key) {
        if (key == "creditBalance" || key == "patientDue") {
          itemCopy[key] = item[key].toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          });
        } else if (key == "dos") {
          itemCopy[key] = getDateOfService(item[key]);
        }
      });
      return itemCopy;
    });
  };

  useEffect(() => {
    if (activeTabs?.index == 0) {
      setHandleShowDataUI(mappingData(openListData), "open", true);
    } else {
      setHandleShowDataUI(mappingData(historyListData), "history", true);
    }
  }, [openListData, activeTabs, historyListData]);

  useEffect(() => {
    if (activeTabs?.index == 0) {
      setHandleShowDataUI(mappingData(searchDataList), "open", false);
    } else {
      setHandleShowDataUI(mappingData(searchDataList), "history", false);
    }
  }, [searchDataList]);

  //Call API for Invoice Recipient
  async function getDigitalAssetId(data, callback) {
    const api = new Api();
    const arrayPromise = [];
    data?.entities.forEach((item) => {
      arrayPromise.push(
        new Promise((resolve, reject) => {
          api
            .getInvoiceReceipts(item?._id)
            .then(function (response) {
              item["digitalAsset"] = response.entities;
              resolve();
            })
            .catch(function () {
              reject();
            });
        })
      );
    });
    await Promise.all(arrayPromise);
    callback(data);
  }

  //Call API for Billing Invoice
  function onCalledBillingInvoice() {
    setLoading(true);
    const api = new Api();
    api
      .getInvoiceWithPatientDetails()
      .then(function (response) {
        const callback = (data) => {
          setLoading(false);
          dispatch(setBillingOpenList({ response: data, isOpen: true }));
          dispatch(setBillingHistoryList({ response: data, isOpen: false }));
        };
        getDigitalAssetId(response, callback);
      })
      .catch(function () {
        //Handle error getInvoiceList
      });
  }

  //Call API for Search Invoice By Date
  function onCalledSearchInvoiceByDate(postBody) {
    setLoading(true);
    const api = new Api();
    api
      .searchInvoiceByDate(postBody)
      .then(function (response) {
        const callback = (data) => {
          setLoading(false);
          if (activeTabs?.index == 0) {
            dispatch(setSearchDataList({ response: data, isOpen: true }));
          } else {
            dispatch(setSearchDataList({ response: data, isOpen: false }));
          }
        };
        getDigitalAssetId(response, callback);
      })
      .catch(function () {
        //Handle error searchInvoice by date
      });
  }

  //Call API for Search Invoice By Date
  function onCalledSearchByInvoiceNumber(id) {
    setLoading(true);
    const api = new Api();
    api
      .searchInvoiceByInvoiceNumber(id)
      .then(function (response) {
        const callback = (data) => {
          setLoading(false);
          if (activeTabs?.index == 0) {
            dispatch(setSearchDataList({ response: data, isOpen: true }));
          } else {
            dispatch(setSearchDataList({ response: data, isOpen: false }));
          }
        };
        getDigitalAssetId(response, callback);
      })
      .catch(function () {
        //Handle error searchInvoice by date
      });
  }
  //Call API for get Account Credit Balance
  function getAccountCredit() {
    const api = new Api();
    api
      .getPatientAccountBalance()
      .then(function (response) {
        setAccountCredit(response);
      })
      .catch(function () {
        //Handle error searchInvoice by date
      });
  }

  /**
   * Handle from navigation tab
   */
  useEffect(() => {
    const query = router?.query;
    setActiveTabs({
      index: query?.activeTab ? parseInt(query?.activeTab) : 0,
      title: query?.activeTab == "0" ? t("openInvoices") : t("invoiceHistory"),
    });
    if (!isLoad) {
      setIsLoad(true);
      onCalledBillingInvoice();
      getAccountCredit();
    }
  }, [router]);

  //Handle to call api service search by date range
  useEffect(() => {
    if (fromDate && toDate) {
      onCalledSearchInvoiceByDate({ fromDate, toDate });
    }
  }, [fromDate, toDate]);

  const callHandleDataUI = (index, data, isInvoices) => {
    switch (index) {
      case 0:
        setHandleShowDataUI(data, "open", isInvoices);
        break;
      case 1:
        setHandleShowDataUI(data, "history", isInvoices);
        break;
      default:
        break;
    }
  };

  /**
   * Handle to change tab and rendering the Data
   * @param {int} index
   */
  const onChangeTabsSelected = (index) => {
    setActiveTabs({
      index,
      title: index == 0 ? t("openInvoices") : t("invoiceHistory"),
    });
    callHandleDataUI(index, payBillData, true);
  };

  const onChangeOption = (val) => {
    if (val == "" || val == "invoiceNumber") {
      setFromDate(null);
      setToDate(null);
    }
    // Reset Data to first initialized when option filter change
    const data = activeTabs?.index == 0 ? openListData : historyListData;
    callHandleDataUI(activeTabs?.index, data, true);
    setFilterOption(val);
  };

  const onFilterByDate = (type, date) => {
    const convertData = new moment(date).format("L");
    if (type == "fromDate") {
      setFromDate(convertData);
    } else {
      setToDate(convertData);
    }
  };

  const onFilterByInvoiceNumber = (id) => {
    onCalledSearchByInvoiceNumber(id);
  };

  const onGoToViewDetail = (data, isSummary = true) => {
    const invoiceNumber = data?.id;
    if (isSummary) {
      router.push(`/patient/pay-my-bill/summary-detail/${invoiceNumber}`);
    } else {
      handleAssetDownload(invoiceNumber, false, true);
    }
  };

  const handleAssetDownload = (digitalAsset, print, isOpen = false) => {
    downloadReceipts(digitalAsset, print, isOpen);
  };

  return (
    <>
      <PayMyBillContainer
        data={payBillData}
        isDesktop={isDesktop}
        activeTabs={activeTabs}
        onChangeTabs={onChangeTabsSelected}
        onChangeOption={onChangeOption}
        onGoToViewDetail={onGoToViewDetail}
        isHaveInvoice={isHaveInvoice}
        noInvoiceText={noInvoiceText}
        onFilterByDate={onFilterByDate}
        onFilterByInvoiceNumber={onFilterByInvoiceNumber}
        accountCreditData={accountCredit}
        handleAssetDownload={handleAssetDownload}
      />
      <LoadingModal open={loading} />
    </>
  );
}
