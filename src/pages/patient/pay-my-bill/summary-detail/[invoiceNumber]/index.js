/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { Api } from "../../../../api/api";
import { useRouter } from "next/router";
import { useMediaQuery } from "@mui/material";
import SummaryBillDetail from "../../../../../components/organisms/PayMyBill/billSummaryDetail";
import { getSummaryObjectData } from "../../../../../store/payMyBill";
import { downloadReceipts } from "../..";

export default function SummaryBillPage() {
  const router = useRouter();
  const [detailSummary, setDetailSummary] = useState(null);
  const isDesktop = useMediaQuery("(min-width: 834px)");
  const [accountCredit, setAccountCredit] = useState({});

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

  function getInvoiceReceipts(data, callback) {
    const api = new Api();
    api
      .getInvoiceReceipts(data?._id)
      .then(function (response) {
        data["digitalAsset"] = response.entities;
      })
      .catch(function () {
        //Handle error searchInvoice by date
      })
      .finally(function () {
        callback(data);
      });
  }

  useEffect(() => {
    const query = router?.query;
    function onCalledGetSummaryDetail() {
      const api = new Api();
      if (query?.invoiceNumber) {
        api
          .getSummaryBill(query?.invoiceNumber)
          .then(function (response) {
            const callback = (data) => {
              const detailData = getSummaryObjectData(data);
              setDetailSummary(detailData);
            };
            getInvoiceReceipts(response, callback);
          })
          .catch(function (error) {
            //Handle error getSummaryBill
          });
      }
    }
    onCalledGetSummaryDetail();
    getAccountCredit();
  }, [router.query]);

  const goBackPage = () => {
    router.back();
  };

  const handleAssetDownload = (digitalAsset, print, isOpen) => {
    downloadReceipts(digitalAsset, print, isOpen);
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
