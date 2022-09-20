import AccountLayout from "../../../../../components/templates/accountLayout";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "../../../../../store/store";
import TableWithSort from "../../../../../components/molecules/TableWithSort/tableWithSort";
import { IconButton, Stack, useMediaQuery } from "@mui/material";
import styles from "../styles.module.scss";
import FileDownloadIcon from "../../../../../assets/icons/FileDownload";
import PDFFileIcon from "../../../../../assets/icons/PDFFileIcon";
import { useEffect } from "react";
import { fetchIntakeForms } from "../../../../../store/document";
import { StyledSelect } from "../../../../../components/atoms/Select/select";
import { useRouter } from "next/router";
import { Controller, useForm } from "react-hook-form";
import TableEmpty from "../../../../../components/atoms/TableEmpty/tableEmpty";

export default function IntakeFormsPage() {
  const isDesktop = useMediaQuery("(min-width: 769px)");
  const router = useRouter();
  const dispatch = useDispatch();

  const categories = [
    { id: 0, label: "Intake forms", value: "intake-forms" },
    { id: 1, label: "Insurance documents", value: "insurance-documents" },
    { id: 2, label: "Health record", value: "health-record" },
  ];

  const { control, setValue } = useForm({
    defaultValues: { category: "" },
  });

  const tableConfiguration = {
    header: [
      { type: "empty" },
      {
        type: "text",
        id: "name",
        numeric: false,
        disablePadding: true,
        label: "Name",
        width: isDesktop ? null : 161,
        sx: {
          fontSize: {
            xs: 14,
            md: 16,
          },
        },
      },
      {
        type: "text",
        id: "modifiedAt",
        numeric: false,
        disablePadding: true,
        label: "Modified",
        width: isDesktop ? 136 : 71,
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
        contentClass: isDesktop ? "" : "clipped clip-2",
      },
      {
        type: "text",
        valueKey: "modifiedAt",
        cellProps: { align: "left", component: "th", padding: "none" },
        contentStyle: {
          padding: isDesktop ? "12px 0" : "8px 0",
          fontSize: isDesktop ? "unset" : "12px",
        },
        contentClass: isDesktop ? "" : "clipped clip-2",
      },
      {
        type: "download-icon",
        valueKey: "source",
        cellProps: { padding: "none" },
        icon: (
          <IconButton sx={{ width: 24, height: 24, p: 0 }}>
            <FileDownloadIcon />
          </IconButton>
        ),
      },
    ],
  };

  const rows = useSelector((state) => state.document.intakeFormsData);

  useEffect(() => {
    dispatch(fetchIntakeForms());

    const splitted = router.pathname.split("/");
    const category = splitted[splitted.length - 1];
    setValue("category", category);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className={styles.documentPageWrapper}>
        <Controller
          name="category"
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => {
            return (
              <StyledSelect
                options={categories}
                onChange={(v) =>
                  router.push(`/patient/account/documents/${v.target.value}`)
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
            <TableWithSort config={tableConfiguration} rows={rows} />
          ) : (
            <TableEmpty text="There are no intake forms." />
          )}
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
