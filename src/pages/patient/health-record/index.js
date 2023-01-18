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
  fetchDocuments,
  fetchMedicalRecordDocuments,
  resetDocuments,
} from "../../../store/document";
import PDFFileIcon from "../../../assets/icons/PDFFileIcon";
import { fetchSource } from "../../../utils/fetchDigitalAssetSource";
import StackList from "../../../components/organisms/StackList/StackList";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import {
  parseHealthRecordData,
  shareDocument,
} from "../../../components/molecules/Dashboard/healthRecordCard";
import { setGenericErrorMessage } from "../../../store";
import { LoadingModal } from "../../../components/molecules/LoadingModal/LoadingModal";

export function defaultHeader() {
  return {
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
}

export function defaultCell(isDesktop) {
  return {
    cellProps: { align: "left", component: "th", padding: "none" },
    contentStyle: {
      padding: isDesktop ? "12px 0" : "8px 0",
      fontSize: isDesktop ? "14px" : "12px",
    },
  };
}

export function tableConfiguration(
  isDesktop = true,
  handleAssetDownload = null
) {
  return {
    header: [
      { type: "empty", width: 22 },
      {
        type: "text",
        id: "medical_record",
        label: "Medical Record",
        width: 600,
        ...defaultHeader(),
      },
      {
        type: "text",
        id: "date",
        label: "Appointment Date",
        width: 190,
        ...defaultHeader(),
      },
      {
        type: "textNoSort",
        id: "provider",
        label: "Provider",
        width: 156,
        ...defaultHeader(),
      },
      {
        type: "textNoSort",
        id: "appointment-type",
        label: "Visit Purpose",
        width: 190,
        ...defaultHeader(),
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
        additionalValueKey: "digital_assets._id",
        cellProps: { padding: "none" },
        contentClass: isDesktop ? "" : "clipped clip-2",
        onClick: (id) => {
          if (handleAssetDownload) {
            handleAssetDownload(id, false, true, true);
          }
        },
      },
      {
        type: "date-time",
        valueKey: "_created",
        ...defaultCell(isDesktop),
        ontentClass: "",
      },
      {
        type: "text",
        valueKey: "provider.firstName,provider.lastName",
        isMultipleKey: true,
        ...defaultCell(isDesktop),
      },
      {
        type: "text",
        valueKey: "examSheetTemplate.appointmentType",
        ...defaultCell(isDesktop),
      },
      {
        type: "menu-cta",
        valueKey: "digital_assets._id",
        contentStyle: { padding: "16px" },
      },
    ],
  };
}
export default function HealthRecord() {
  const isDesktop = useMediaQuery("(min-width: 820px)");
  const dispatch = useDispatch();
  const [healthRecordDocument, setHealthRecordDocument] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const sortFilter = [
    {
      id: 0,
      label: "Medical Record",
      ariaLabel: "Medical Record sorted ascending",
      labelIcon: (
        <ArrowUpwardIcon fontSize={"10px"} sx={{ marginLeft: "10px" }} />
      ),
      value: "name-asc",
    },
    {
      id: 1,
      label: "Medical Record",
      ariaLabel: "Medical Record sorted descending",
      labelIcon: (
        <ArrowDownwardIcon fontSize={"10px"} sx={{ marginLeft: "10px" }} />
      ),
      value: "name-desc",
    },
    {
      id: 2,
      label: "Appointment Date",
      ariaLabel: "Appointment Date sorted ascending",
      labelIcon: (
        <ArrowUpwardIcon fontSize={"10px"} sx={{ marginLeft: "10px" }} />
      ),
      value: "date-asc",
    },
    {
      id: 3,
      label: "Appointment Date",
      ariaLabel: "Appointment Date sorted descending",
      labelIcon: (
        <ArrowDownwardIcon fontSize={"10px"} sx={{ marginLeft: "10px" }} />
      ),
      value: "date-desc",
    },
  ];

  const rows = useSelector((state) => {
    return state.document.healthRecordList;
  });

  const documentList = useSelector((state) => {
    return state.document.documentList;
  });

  useEffect(() => {
    setHealthRecordDocument(parseHealthRecordData(documentList, rows));
  }, [documentList, rows]);

  const noResultText = () => {
    return "We do not have any health records associated with your account.";
  };

  const handleAssetDownload = async (
    id,
    print,
    newTab = true,
    isOpen = false
  ) => {
    if (id) {
      setLoading(true);
      await fetchSource(id, print, newTab, isOpen);
      setLoading(false);
    } else {
      dispatch(setGenericErrorMessage("Please try again after sometime."));
    }
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
          patientId: userStorageData?.patientId,
        })
      );
      dispatch(
        fetchDocuments({
          patientId: userStorageData?.patientId,
          category: "health-record",
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onShareDocument(selectedData) {
    shareDocument(selectedData, dispatch);
  }

  const testLabConfig = tableConfiguration(isDesktop, handleAssetDownload);

  function renderDekstopView() {
    return (
      <>
        {healthRecordDocument?.length > 0 ? (
          <TableWithSort
            config={testLabConfig}
            rows={healthRecordDocument}
            onAssetDownload={handleAssetDownload}
            onShareDocument={onShareDocument}
            additionalProps={{
              tableProps: { "aria-label": `health-record` },
            }}
          />
        ) : (
          <TableEmpty text={noResultText()} />
        )}
        <LoadingModal open={loading} />
      </>
    );
  }

  function renderMobileView() {
    return (
      <>
        {healthRecordDocument?.length > 0 ? (
          <StackList
            sortFilterData={sortFilter}
            dataList={healthRecordDocument}
            onAssetDownload={handleAssetDownload}
            onShareDocument={onShareDocument}
          />
        ) : (
          <Stack
            sx={{ width: "100%", backgroundColor: "#fff", padding: "16px" }}
          >
            <TableEmpty text={noResultText()} />
          </Stack>
        )}
        <LoadingModal open={loading} />
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

HealthRecord.getLayout = function getLayout(page, store) {
  return (
    <Provider store={store}>
      <PrescriptionLayout
        title={"Health Records"}
        pageTitle={"Health Records"}
        customClassName={styles.defaultContainer}
      >
        {page}
      </PrescriptionLayout>
    </Provider>
  );
};
