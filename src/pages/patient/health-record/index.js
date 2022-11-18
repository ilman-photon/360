import * as React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";

import { Stack, useMediaQuery } from "@mui/material";
import styles from "./styles.module.scss";
import { useEffect } from "react";
import PrescriptionLayout from "../../../components/templates/prescriptionLayout";
import TableWithSort from "../../../components/molecules/TableWithSort/tableWithSort";
import TableEmpty from "../../../components/atoms/TableEmpty/tableEmpty";
import { colors } from "../../../styles/theme";
import {
  fetchMedicalRecordDocuments,
  resetDocuments,
} from "../../../store/document";
import PDFFileIcon from "../../../assets/icons/PDFFileIcon";
import { fetchSource } from "../../../utils/fetchDigitalAssetSource";
import StackList from "../../../components/organisms/StackList/StackList";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export default function HealthRecord() {
  const isDesktop = useMediaQuery("(min-width: 820px)");
  const dispatch = useDispatch();

  const sortFilter = [
    {
      id: 0,
      label: "Medical Record",
      labelIcon: (
        <ArrowUpwardIcon fontSize={"10px"} sx={{ marginLeft: "10px" }} />
      ),
      value: "name-asc",
    },
    {
      id: 1,
      label: "Medical Record",
      labelIcon: (
        <ArrowDownwardIcon fontSize={"10px"} sx={{ marginLeft: "10px" }} />
      ),
      value: "name-desc",
    },
    {
      id: 2,
      label: "Appointment Date",
      labelIcon: (
        <ArrowUpwardIcon fontSize={"10px"} sx={{ marginLeft: "10px" }} />
      ),
      value: "date-asc",
    },
    {
      id: 3,
      label: "Appointment Date",
      labelIcon: (
        <ArrowDownwardIcon fontSize={"10px"} sx={{ marginLeft: "10px" }} />
      ),
      value: "date-desc",
    },
  ];

  const defaultHeader = {
    numeric: false,
    disablePadding: true,
    sx: {
      color: colors.darkGreen,
      fontSize: {
        xs: 14,
      },
      ".MuiTableSortLabel-root": {
        "&.Mui-active": {
          color: colors.darkGreen,
        },
      },
    },
  };

  const defaultCell = {
    cellProps: { align: "left", component: "th", padding: "none" },
    contentStyle: {
      padding: isDesktop ? "12px 0" : "8px 0",
      fontSize: isDesktop ? "unset" : "12px",
    },
    contentClass: isDesktop ? "" : "clipped clip-2",
  };

  const tableConfiguration = {
    header: [
      { type: "empty", width: 22 },
      {
        type: "text",
        id: "medical_record",
        label: "Medical Record",
        width: 600,
        ...defaultHeader,
      },
      {
        type: "text",
        id: "date",
        label: "Appointment Date",
        width: 190,
        ...defaultHeader,
      },
      {
        type: "textNoSort",
        id: "provider",
        label: "Provider",
        width: 156,
        ...defaultHeader,
      },
      {
        type: "textNoSort",
        id: "appointment-type",
        label: "Visit Purpose",
        width: 190,
        ...defaultHeader,
      },
      { type: "empty", width: 22 },
    ],
    cells: [
      {
        type: "icon",
        icon: <PDFFileIcon />,
      },
      {
        type: "text",
        primary: true,
        hasAction: true,
        valueKey: "name",
        additionalValueKey: "digitalSignature._id",
        cellProps: { padding: "none" },
        contentClass: isDesktop ? "" : "clipped clip-2",
        onClick: (id) => {
          handleAssetDownload(id);
        },
      },
      {
        type: "date-time",
        valueKey: "_created",
        ...defaultCell,
      },
      {
        type: "text",
        valueKey: "digitalSignature.firstName,digitalSignature.lastName",
        isMultipleKey: true,
        ...defaultCell,
      },
      {
        type: "text",
        valueKey: "examSheetTemplate.appointmentType",
        ...defaultCell,
      },
      {
        type: "menu-cta",
        valueKey: "digitalSignature._id",
        contentStyle: { padding: "16px" },
      },
    ],
  };

  const rows = useSelector((state) => {
    return state.document.documentList;
  });

  const noResultText = () => {
    return "There are no health records available.";
  };

  const handleAssetDownload = (id, print, newTab = true) => {
    fetchSource(id, print, newTab);
  };

  useEffect(() => {
    dispatch(resetDocuments());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const userStorageData = JSON.parse(localStorage.getItem("userData"));
    if (userStorageData) {
      dispatch(
        fetchMedicalRecordDocuments({
          patientId: userStorageData.patientId,
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const testLabConfig = tableConfiguration;
  function renderDekstopView() {
    return (
      <>
        {rows?.length > 0 ? (
          <TableWithSort
            config={testLabConfig}
            rows={rows}
            onAssetDownload={handleAssetDownload}
            additionalProps={{
              tableProps: { "aria-label": `health-record` },
            }}
          />
        ) : (
          <TableEmpty text={noResultText()} />
        )}
      </>
    );
  }

  function renderMobileView() {
    return (
      <>
        {rows?.length > 0 ? (
          <StackList
            sortFilterData={sortFilter}
            dataList={rows}
            onAssetDownload={handleAssetDownload}
          />
        ) : (
          <Stack
            sx={{ width: "100%", backgroundColor: "#fff", padding: "16px" }}
          >
            <TableEmpty text={noResultText()} />
          </Stack>
        )}
      </>
    );
  }
  return isDesktop ? (
    <div className={styles.documentPageWrapper}>
      <Stack spacing={3} sx={{ mt: 1 }}>
        {renderDekstopView()}
      </Stack>
    </div>
  ) : (
    <Stack className={styles.documentPageWrapper}>{renderMobileView()}</Stack>
  );
}

HealthRecord.getLayout = function getLayout(page, store, router) {
  return (
    <Provider store={store}>
      <PrescriptionLayout
        title={"Health Records"}
        customClassName={styles.defaultContainer}
      >
        {page}
      </PrescriptionLayout>
    </Provider>
  );
};