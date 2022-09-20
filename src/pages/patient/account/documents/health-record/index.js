import AccountLayout from "../../../../../components/templates/accountLayout";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "../../../../../store/store";
import TableWithSort from "../../../../../components/molecules/TableWithSort/tableWithSort";
import { IconButton, Stack, Typography } from "@mui/material";
import { colors } from "../../../../../styles/theme";
import styles from "../styles.module.scss";
import FileDownloadIcon from "../../../../../assets/icons/FileDownload";
import PDFFileIcon from "../../../../../assets/icons/PDFFileIcon";
import { useEffect } from "react";
import { fetchHealthRecord } from "../../../../../store/document";

export default function HealthRecordPage() {
  const dispatch = useDispatch();
  const tableConfiguration = {
    header: [
      { type: "empty" },
      {
        type: "text",
        id: "name",
        numeric: false,
        disablePadding: true,
        label: "Name",
      },
      {
        type: "text",
        id: "modifiedAt",
        numeric: false,
        disablePadding: true,
        label: "Modified",
        width: 136,
      },
      { type: "empty" },
    ],
    cells: [
      {
        type: "icon",
        icon: <PDFFileIcon />,
      },
      {
        type: "text",
        primary: true,
        valueKey: "name",
        cellProps: { padding: "none" },
      },
      {
        type: "text",
        valueKey: "modifiedAt",
        cellProps: { align: "left", component: "th", padding: "none" },
        contentStyle: { padding: "12px 0" },
      },
      {
        type: "download-icon",
        valueKey: "source",
        cellProps: { padding: "none" },
        icon: (
          <IconButton>
            <FileDownloadIcon></FileDownloadIcon>
          </IconButton>
        ),
      },
    ],
  };

  const rows = useSelector((state) => state.document.healthRecordData);

  useEffect(() => {
    dispatch(fetchHealthRecord());
  }, []);

  return (
    <>
      <div className={styles.documentPageWrapper}>
        <Stack spacing={3}>
          <Typography variant="h3" color={colors.darkGreen}>
            Health Record
          </Typography>
          <TableWithSort config={tableConfiguration} rows={rows} />
        </Stack>
      </div>
    </>
  );
}

HealthRecordPage.getLayout = function getLayout(page) {
  return (
    <Provider store={store}>
      <AccountLayout currentActivePage={"health-record"}>{page}</AccountLayout>
    </Provider>
  );
};
