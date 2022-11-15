import PrescriptionLayout from "../../../../components/templates/prescriptionLayout";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "../../../../store/store";
import TableWithSort from "../../../../components/molecules/TableWithSort/tableWithSort";
import { IconButton, Stack, useMediaQuery } from "@mui/material";
import styles from "./styles.module.scss";
import FileDownloadIcon from "../../../../assets/icons/FileDownload";
import PDFFileIcon from "../../../../assets/icons/PDFFileIcon";
import { useEffect } from "react";
import { fetchDocuments, resetDocuments } from "../../../../store/document";
import { StyledSelect } from "../../../../components/atoms/Select/select";
import { useRouter } from "next/router";
import { Controller, useForm } from "react-hook-form";
import TableEmpty from "../../../../components/atoms/TableEmpty/tableEmpty";
import { fetchSource } from "../../../../utils/fetchDigitalAssetSource";
import { colors } from "../../../../styles/theme";

export default function AccountDocumentsPage() {
  const isDesktop = useMediaQuery("(min-width: 769px)");
  const router = useRouter();
  const dispatch = useDispatch();

  const categories = [
    { id: 0, label: "Intake forms", value: "intake-forms" },
    // { id: 1, label: "Insurance documents", value: "insurance-documents" },
    // { id: 2, label: "Health record", value: "health-record" },
  ];

  const { control, setValue, watch } = useForm({
    defaultValues: { category: "intake-forms" },
  });

  const watchedCategory = watch("category");

  const tableConfiguration = {
    header: [
      { type: "empty", width: 22 },
      {
        type: "text",
        id: "name",
        numeric: false,
        disablePadding: true,
        label: "Name",
        width: isDesktop ? null : 161,
        sx: {
          color: colors.darkGreen,
          fontSize: {
            xs: 14,
            md: 16,
          },
          ".MuiTableSortLabel-root": {
            "&.Mui-active": {
              color: colors.darkGreen,
            },
          },
        },
      },
      {
        type: "text",
        id: "_updated",
        numeric: false,
        disablePadding: true,
        label: "Modified",
        width: isDesktop ? 136 : 71,
        sx: {
          color: colors.darkGreen,
          fontSize: {
            xs: 14,
            md: 16,
          },
        },
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
        valueKey: "name",
        cellProps: { padding: "none", tabIndex: 0 },
        contentClass: isDesktop ? "" : "clipped clip-2",
      },
      {
        type: "date",
        valueKey: "_updated",
        cellProps: { align: "left", padding: "none", tabIndex: 0 },
        contentStyle: {
          padding: isDesktop ? "12px 0" : "8px 0",
          fontSize: isDesktop ? "unset" : "12px",
        },
        contentClass: isDesktop ? "" : "clipped clip-2",
      },
      {
        type: "download-asset",
        valueKey: "digital_assets._id",
        contentStyle: { padding: "16px" },
        icon: (
          <IconButton
            sx={{ width: 24, height: 24, p: 0 }}
            data-testid="downloadPDFButton"
            aria-label={`download button`}
          >
            <FileDownloadIcon sx={{ fill: colors.darkGreen }} />
          </IconButton>
        ),
      },
    ],
  };

  const rows = useSelector((state) => {
    return state.document.documentList;
  });

  const handleAssetDownload = (id) => {
    fetchSource(id);
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

  return (
    <div className={styles.documentPageWrapper}>
      <Controller
        name="category"
        control={control}
        render={({ field: { onChange, value } }) => {
          return (
            <StyledSelect
              options={categories}
              onChange={(v) =>
                router.push(`/patient/account/documents?type=${v.target.value}`)
              }
              value={value}
              label="Choose a category"
              sx={{ m: 0, display: isDesktop ? "none" : "" }}
            />
          );
        }}
      />

      <Stack spacing={3} sx={{ mt: 1 }}>
        {rows.length > 0 ? (
          <TableWithSort
            config={tableConfiguration}
            rows={rows}
            onAssetDownload={handleAssetDownload}
            additionalProps={{
              tableProps: { "aria-label": `${watchedCategory}` },
            }}
          />
        ) : (
          <TableEmpty text={`There are no ${watchedCategory}.`} />
        )}
      </Stack>
    </div>
  );
}

AccountDocumentsPage.getLayout = function getLayout(page) {
  return (
    <Provider store={store}>
      <PrescriptionLayout title={"Intake Forms"}>{page}</PrescriptionLayout>
    </Provider>
  );
};
