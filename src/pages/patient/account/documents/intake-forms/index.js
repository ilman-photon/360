import AccountLayout from "../../../../../components/templates/accountLayout";
import { Provider } from "react-redux";
import store from "../../../../../store/store";
import DocumentTableWithSort from "../../../../../components/molecules/TableWithSort/tableWithSort";
import { IconButton, Stack, Typography } from "@mui/material";
import { colors } from "../../../../../styles/theme";
import styles from "./styles.module.scss";
import FileDownloadIcon from "../../../../../assets/icons/FileDownload";
import PDFFileIcon from "../../../../../assets/icons/PDFFileIcon";

export default function IntakeFormsPage() {
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

  const createData = (name, modifiedAt, source) => {
    return {
      name,
      modifiedAt,
      source,
    };
  };

  const rows = [
    createData(
      "Consent to Treat - Patient Financial Responsibility - Assigment of Benefits",
      "09/09/2022 12:00PM",
      "/doctor.png"
    ),
    createData(
      "Notice of Privacy Practices.pdf",
      "09/09/2022 12:00PM",
      "/doctor.png"
    ),
    createData(
      "Medical/Vision Exams - Refractions - Prescription Release",
      "09/09/2022 12:00PM",
      "/doctor.png"
    ),
    createData(
      "Authorization to Disclose Information to Those Involved in My Care",
      "08/08/2022 12:00PM",
      "/doctor.png"
    ),
  ];

  return (
    <>
      <div className={styles.intakePageWrapper}>
        <Stack spacing={3}>
          <Typography variant="h3" color={colors.darkGreen}>
            Intake Forms
          </Typography>
          <DocumentTableWithSort config={tableConfiguration} rows={rows} />
        </Stack>
      </div>
    </>
  );
}

IntakeFormsPage.getLayout = function getLayout(page) {
  return (
    <Provider store={store}>
      <AccountLayout currentActivePage={"intake-forms"}>{page}</AccountLayout>
    </Provider>
  );
};
