/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { Api } from "../../../../api/api";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useMediaQuery } from "@mui/material";
import SummaryBillDetail from "../../../../../components/organisms/PayMyBill/billSummaryDetail";
import { useDispatch, useSelector } from "react-redux";
import { setSummaryData } from "../../../../../store/payMyBill";
import { getInvoiceReceipts } from "../..";

export default function SummaryBillPage() {
  const router = useRouter();
  const [detailSummary, setDetailSummary] = useState({});
  const isDesktop = useMediaQuery("(min-width: 834px)");
  const [accountCredit, setAccountCredit] = useState({});
  const dispatch = useDispatch();
  const summaryData = useSelector((state) => state.payMyBill.summaryData);

  const { t } = useTranslation("translation", {
    keyPrefix: "payMyBill",
  });

  useEffect(() => {
    setDetailSummary(summaryData);
  }, [summaryData]);

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

  useEffect(() => {
    const query = router?.query;
    function onCalledGetSummaryDetail() {
      const api = new Api();
      api
        .getSummaryBill(query?.invoiceNumber)
        .then(function (response) {
          dispatch(setSummaryData({ response }));
        })
        .catch(function () {
          //Handle error getSummaryBill
        });
    }
    onCalledGetSummaryDetail();
    getAccountCredit();
  }, [router.query]);

  const goBackPage = () => {
    router.back();
  };

  const handleAssetDownload = (id, print) => {
    getInvoiceReceipts(id, print);
  };

  return (
    <>
      <SummaryBillDetail
        data={detailSummary}
        isDesktop={isDesktop}
        goBack={goBackPage}
        handleAssetDownload={handleAssetDownload}
      />
    </>
  );
}
