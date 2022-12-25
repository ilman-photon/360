import * as React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import PrescriptionLayout from "../../../../components/templates/prescriptionLayout";
import TableWithSort from "../../../../components/molecules/TableWithSort/tableWithSort";
import { IconButton, Stack, useMediaQuery } from "@mui/material";
import styles from "./styles.module.scss";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect } from "react";
import { StyledSelect } from "../../../../components/atoms/Select/select";
import { useRouter } from "next/router";
import { Controller, useForm } from "react-hook-form";
import TableEmpty from "../../../../components/atoms/TableEmpty/tableEmpty";
import { fetchSource } from "../../../../utils/fetchDigitalAssetSource";
import { fetchDocuments, resetDocuments } from "../../../../store/document";
import { DOCUMENT_STATUS } from "../../../../utils/constants";
import { useTranslation } from "next-i18next";
import {
  setModalContent,
  setOpenModal,
  setShareModalData,
} from "../../../../store/share";
import { getDynamicShareContent } from "../../../../components/organisms/ShareModal/shareModal";
import PatientAcccountCard from "../../../../components/molecules/ManagePatientAccount/PatientAcccountCard";

export function tableCarePlan(isDesktop) {
  return {
    header: [
      {
        type: "text",
        id: "name",
        numeric: false,
        disablePadding: false,
        label: "Procedure",
        // width: 250,
      },
      {
        type: "text",
        id: "date",
        numeric: false,
        disablePadding: true,
        label: "Date",
        width: isDesktop ? 136 : 120,
      },
      { type: "empty", width: 50 },
    ],
    cells: [
      {
        type: "text",
        primary: true,
        valueKey: "name",
        cellProps: { tabIndex: 0 },
        contentClass: isDesktop ? "" : "clipped clip-2",
      },
      {
        type: "date-time",
        valueKey: "_created",
        cellProps: { align: "left", padding: "none", tabIndex: 0 },
        contentStyle: {
          padding: isDesktop ? "12px 0" : "8px 0",
          fontSize: isDesktop ? "unset" : "12px",
          fontWeight: "500",
        },
        contentClass: isDesktop ? "" : "clipped clip-2",
      },
      {
        type: "menus",
        valueKey: "digital_assets._id",
        cellProps: {
          padding: "none",
          sx: {
            textAlign: "center",
          },
        },
      },
    ],
  };
}
export default function MedicalRecordPage() {
  const isDesktop = useMediaQuery("(min-width: 769px)");
  const router = useRouter();
  const dispatch = useDispatch();
  const [isHideDisclaimer, setIsHideDisclaimer] = React.useState(false);
  const { t } = useTranslation("translation", {
    keyPrefix: "medicalRecord",
  });
  const categories = [
    { id: 0, label: "Care Plan", value: "care-plan-overview" },
    // { id: 1, label: "Prescriptions", value: "test-lab-result" },
    { id: 1, label: "Test & Lab Results", value: "test-lab-result" },
  ];

  const { control, setValue, watch } = useForm({
    defaultValues: { category: "care-plan-overview" },
  });

  const watchedCategory = watch("category");

  const tableDesktopTestLab = {
    header: [
      {
        type: "text",
        id: "data.testingOrder.orderDetails.testType.name",
        numeric: false,
        disablePadding: false,
        label: "Test Name",
      },
      {
        type: "text",
        id: "data.testingOrder.orderDetails.orderingProvider.firstName",
        numeric: false,
        disablePadding: true,
        label: "Ordered by",
        width: 136,
      },
      {
        type: "text",
        id: "date",
        numeric: false,
        disablePadding: true,
        label: "Test Date",
        width: 136,
      },
      {
        type: "text",
        id: "status",
        numeric: false,
        disablePadding: false,
        label: "Test Status",
        width: 136,
      },
    ],
    cells: [
      {
        type: "text",
        primary: true,
        valueKey: "data.testingOrder.orderDetails.testType.name",
        cellProps: { tabIndex: 0 },
        contentStyle: {
          padding: "12px 24px",
          fontWeight: "400",
          fontSize: "16px",
        },
      },
      {
        type: "text",
        valueKey: "data.testingOrder.orderDetails.orderingProvider.firstName",
        cellProps: { align: "left", padding: "none", tabIndex: 0 },
        contentStyle: {
          padding: "12px 0",
          fontWeight: "500",
          fontSize: "14px",
        },
      },
      {
        type: "date",
        valueKey: "data.testingOrder.orderDetails.dateTime.startDate",
        cellProps: { align: "left", padding: "none", tabIndex: 0 },
        contentStyle: {
          padding: "12px 0",
          fontWeight: "500",
          fontSize: "14px",
          borderRight: "none",
        },
      },
      {
        type: "text",
        valueKey: "status",
        cellProps: { align: "left", tabIndex: 0 },
        contentStyle: {
          padding: "12px 0",
          fontWeight: "700",
          fontSize: "16px",
        },
      },
    ],
  };

  const tableMobileTestLab = {
    header: [
      {
        type: "text",
        id: "data.testingOrder.orderDetails.testType.name",
        numeric: false,
        label: "Procedure",
      },
      {
        type: "text",
        id: "data.testingOrder.orderDetails.orderingProvider.firstName",
        numeric: false,
        label: "Ordered by",
      },
      {
        type: "text",
        id: "data.testingOrder.orderDetails.dateTime.startDate",
        numeric: false,
        label: "Test Date",
      },
      {
        type: "text",
        id: "status",
        numeric: false,
        label: "Test Status",
      },
    ],
    cells: [
      {
        type: "text",
        valueKey: "data.testingOrder.orderDetails.testType.name",
        sx: {
          fontWeight: "400",
        },
      },
      {
        type: "text",
        valueKey: "data.testingOrder.orderDetails.orderingProvider.firstName",
        sx: {
          fontWeight: "400",
        },
      },
      {
        type: "date",
        valueKey: "data.testingOrder.orderDetails.dateTime.startDate",
        sx: {
          fontWeight: "400",
        },
      },
      {
        type: "text",
        valueKey: "status",
        sx: {
          fontWeight: "400",
        },
      },
    ],
  };

  const rows = useSelector((state) => {
    return state.document.documentList;
  });

  const status = useSelector((state) => {
    return state.document.status;
  });

  useEffect(() => {
    let count = 0;
    if (rows && rows.length > 0) {
      for (const labResult of rows) {
        if (
          labResult?.data?.testingOrder?.orderDetails?.status == DOCUMENT_STATUS
        ) {
          count++;
        }
      }
    }
    if (count == 0) {
      setIsHideDisclaimer(true);
    } else {
      setIsHideDisclaimer(false);
    }
  }, [rows]);

  const noResultText = () => {
    switch (watchedCategory) {
      case "test-lab-result":
        return "There are no tests or lab results for you now.";
      case "care-plan-overview":
        return "There is no care plan overview document";
      default:
        return "There are no tests or lab results for you now.";
    }
  };

  const handleAssetDownload = (id, print) => {
    fetchSource(id, print);
  };

  const shareDocument = (selectedData) => {
    //Handle for Care plan only
    const shareContent = getDynamicShareContent({
      type: "care-plan",
      date: selectedData?._created,
      name: selectedData?.name,
    });
    const shareData = {
      id: selectedData?._id || "",
      title: "Share my care plan",
      successPostmessage: "Your care plan was succesfully shared.",
      type: `carePlans`,
    };

    dispatch(setShareModalData(shareData));
    dispatch(setOpenModal(true));
    dispatch(setModalContent(shareContent));
  };

  useEffect(() => {
    dispatch(resetDocuments());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const category = router.query.type;

    if (category && categories.some((v) => v.value === category)) {
      const userStorageData = JSON.parse(localStorage.getItem("userData"));
      setValue("category", category);
      if (userStorageData) {
        dispatch(
          fetchDocuments({
            patientId: userStorageData.patientId,
            category: category,
          })
        );
      } else {
        router.back();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query]);

  const isMobile = useMediaQuery("(max-width: 600px)");

  const notifDocument = () => {
    if (!isHideDisclaimer && watchedCategory === "test-lab-result") {
      return (
        <div className={styles.disclaimerWrapper}>
          <div className={styles.disclaimerText}>
            <span
              tabIndex={0}
              aria-label={t("labelAvaible")}
              className={styles.infoLabel}
            >
              <InfoOutlinedIcon
                sx={{
                  width: "18px",
                  height: "18px",
                  color: "#080707",
                  marginRight: "12px",
                }}
                role={"alert"}
              />{" "}
              {t("labelAvaible")}
            </span>
            <IconButton
              data-testid={"close-disclaimer-icon"}
              onClick={() => setIsHideDisclaimer(true)}
              sx={{ color: "#003B4A" }}
            >
              <CloseIcon sx={styles.closeIcon} />
            </IconButton>
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  const renderResults = () => {
    if (isMobile && watchedCategory !== "care-plan-overview") {
      return (
        <PatientAcccountCard
          config={tableMobileTestLab}
          rows={rows}
          showResultNum={false}
          additionalContent={notifDocument}
          cardSx={{
            borderColor: "#ECECEC",
            borderStyle: "solid",
            mb: 1,
          }}
          sortSx={{
            width: "100vw",
            ml: -2,
            mt: -2,
            background: "#EFF6F7",
          }}
        />
      );
    } else {
      return (
        <>
          {notifDocument()}
          <TableWithSort
            config={
              watchedCategory === "care-plan-overview"
                ? tableCarePlan()
                : tableDesktopTestLab
            }
            rows={rows}
            onAssetDownload={handleAssetDownload}
            onShareDocument={shareDocument}
            mobileTestLab={watchedCategory === "test-lab-result" && isMobile}
            additionalProps={{
              tableProps: { "aria-label": `${watchedCategory}` },
            }}
          />
        </>
      );
    }
  };

  return (
    <div className={styles.documentPageWrapper}>
      <Controller
        name="category"
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => {
          return (
            <StyledSelect
              options={categories}
              onChange={(v) =>
                router.push(
                  `/patient/account/medical-record?type=${v.target.value}`
                )
              }
              value={value}
              label="Choose a category"
              sx={{
                m: 0,
                display:
                  isDesktop || watchedCategory !== "care-plan-overview"
                    ? "none"
                    : "",
              }}
            />
          );
        }}
      />

      <Stack spacing={1}>
        {rows?.length > 0 && status === "success"
          ? renderResults()
          : status !== "loading" && <TableEmpty text={noResultText()} />}
      </Stack>
    </div>
  );
}

MedicalRecordPage.getLayout = function getLayout(page, store, router) {
  return (
    <Provider store={store}>
      <PrescriptionLayout>{page}</PrescriptionLayout>
    </Provider>
  );
};
