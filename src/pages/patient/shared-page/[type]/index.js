import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import { Api } from "../../../api/api";
import { useMediaQuery } from "@mui/material";
import {
  parseGlasses,
  parseContacts,
  parseMedications,
} from "../../../../utils/prescription";
import { parseMedicalRecordData } from "../../../../store/document";
import ShareMyPageContent from "../../../../components/organisms/ShareMyPage/shareMyPageContent";
import { fetchSource } from "../../../../utils/fetchDigitalAssetSource";
import { savePDF } from "@progress/kendo-react-pdf";
import Head from "next/head";
import { useSelector } from "react-redux";
import { setUsernameFromQuery } from "../../update-password";

export default function ShareTypePage() {
  const router = useRouter();
  const [shareTypePage, setShareTypePage] = useState({
    content: "",
    detail: "",
  });
  const [data, setData] = useState({});
  const [refType, setRefType] = useState(null);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isDesktop = useMediaQuery("(min-width: 769px)");
  const containerGlasses = useRef(null);
  const containerContact = useRef(null);
  const containerMedication = useRef(null);

  const callGetSharedData = (category, documentId, username) => {
    const api = new Api();
    const postBody = {
      patientUserName: username,
      documentId: documentId,
      documentType: category,
    };
    let newData = [];
    api
      .getShareDocumentDetails(postBody)
      .then((responses) => {
        if (category == "glasses") {
          newData.push(responses?.glassesData);
          const glassesData = parseGlasses(newData);
          setRefType(containerGlasses);
          setData(glassesData[0]);
        } else if (category == "contact") {
          newData.push(responses.contactData);
          const contactData = parseContacts(newData);
          setRefType(containerContact);
          setData(contactData[0]);
        } else if (category == "medication") {
          newData.push(responses.medicationData);
          const medicationData = parseMedications(newData);
          setRefType(containerMedication);
          setData(medicationData[0]);
        } else if (category == "healthRecord") {
          newData.push(responses.healthRecordData);
          setData(parseMedicalRecordData(newData));
        } else {
          newData.push(responses.carePlansData);
          setData(newData);
        }
      })
      .catch(() => {
        // Handle Error message
      });
  };

  useEffect(() => {
    const category = router?.query?.category;
    const type = router?.query?.type;
    const documentId = router?.query?.documentId;
    const username = router?.query?.username;
    callGetSharedData(category, documentId, username);
    const typePage = {
      content: type,
      detail: category,
    };
    setShareTypePage(typePage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  const getHeadingTitle = (key) => {
    let title = "";
    switch (key) {
      case "glasses":
      case "contact":
      case "medication":
        title = "Shared Prescription";
        break;
      case "carePlans":
        title = "Shared Care Plan";
        break;
      case "healthRecord":
        title = "Shared Health Record";
        break;
    }
    return title;
  };

  const handleAssetDownload = (id, print) => {
    fetchSource(id, print);
  };

  const downloadPDF = (type, index = -1) => {
    let containerSelector = null;
    containerSelector = refType;
    let element =
      containerSelector.current.querySelector(
        `[data-testid=${type}-container-${index}]`
      ) || document.body;
    savePDF(element, {
      paperSize: "auto",
      margin: 40,
      fileName: `Prescription ${type} Don John`,
    });
  };

  const printHTML = (type, index = -1) => {
    let containerSelector = null;
    containerSelector = refType;
    let element =
      containerSelector.current.querySelector(
        `[data-testid=${type}-container-${index}]`
      ) || document.body;
    const headStyles = Array.from(document.head.querySelectorAll("style"));
    const WinPrint = window.open(
      "",
      "",
      "left=0,top=0,width=1000,height=900,toolbar=0,scrollbars=0,status=0"
    );
    WinPrint.document.write(element.innerHTML);
    headStyles.forEach((st) => {
      WinPrint.document.head.appendChild(st.cloneNode(true));
    });
    WinPrint.document.close();
    WinPrint.focus();
    WinPrint.print();
    setTimeout(() => {
      WinPrint.close();
    }, 500);
  };

  return (
    <>
      <Head>
        <title>{getHeadingTitle(shareTypePage?.detail)}</title>
      </Head>
      <ShareMyPageContent
        data={data}
        idx={data.length + 1}
        type={shareTypePage}
        titleHeading={getHeadingTitle(shareTypePage?.detail)}
        isMobile={isMobile}
        isDesktop={isDesktop}
        handleAssetDownload={handleAssetDownload}
        printHTML={printHTML}
        downloadPDF={downloadPDF}
        refType={refType}
      />
    </>
  );
}
