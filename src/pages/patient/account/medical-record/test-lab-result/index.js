import * as React from "react";
import PrescriptionLayout from "../../../../../components/templates/prescriptionLayout";
import store from "../../../../../store/store";
import TableWithSort from "../../../../../components/molecules/TableWithSort/tableWithSort";
import { IconButton, Stack, Button, useMediaQuery } from "@mui/material";
import styles from "../styles.module.scss";
import FileDownloadIcon from "../../../../../assets/icons/FileDownload";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CloseIcon from "@mui/icons-material/Close";
import TableEmpty from "../../../../../components/atoms/TableEmpty/tableEmpty";
import { useEffect } from "react";
import { fetchTestLabResult } from "../../../../../store/medicalReport";

import { Provider, useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import { Controller, useForm } from "react-hook-form";
import { StyledSelect } from "../../../../../components/atoms/Select/select";

export default function TestLabPage() {
  const [isHideDisclaimer, setIsHideDisclaimer] = React.useState(true);

  const isDesktop = useMediaQuery("(min-width: 769px)");
  const router = useRouter();
  const dispatch = useDispatch();

  const categories = [
    { id: 0, label: "Care Plan", value: "care-plan-overview" },
    { id: 1, label: "Prescriptions", value: "test-lab-result" },
    { id: 2, label: "Test & Lab Results", value: "test-lab-result" },
  ];

  const { control, setValue } = useForm({
    defaultValues: { category: "" },
  });

  const tableConfiguration = {
    header: [
      {
        type: "text",
        id: "name",
        numeric: false,
        disablePadding: false,
        label: "Test Name",
      },
      {
        type: "text",
        id: "orderBy",
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
        disablePadding: true,
        label: "Test Status",
        width: 136,
      },
    ],
    cells: [
      {
        type: "text",
        valueKey: "name",
        cellProps: {
          fontWeight: "400",
          fontSize: "16px",
        },
      },
      {
        type: "text",
        valueKey: "orderBy",
        cellProps: { align: "left", padding: "none" },
        contentStyle: {
          padding: "12px 0",
          fontWeight: "500",
          fontSize: "14px",
        },
      },
      {
        type: "text",
        valueKey: "date",
        cellProps: { align: "left", padding: "none" },
        contentStyle: {
          padding: "12px 0",
          fontWeight: "500",
          fontSize: "14px",
        },
      },
      {
        type: "text",
        valueKey: "status",
        cellProps: { align: "left", padding: "none" },
        contentStyle: {
          padding: "12px 0",
          fontWeight: "700",
          fontSize: "16px",
        },
      },
    ],
  };

  const tableConfigurationMobile = {
    header: [
      {
        type: "text",
        id: "name",
        numeric: false,
        disablePadding: false,
        label: "Procedure",
        width: 250,
      },
      {
        type: "text",
        id: "orderBy",
        numeric: false,
        disablePadding: false,
        label: "Test Date",
        width: 250,
      },
      { type: "empty", width: 22 },
    ],
    cells: [
      {
        type: "test-lab-mobile",
        valueKey1: "name",
        valueKey2: "orderBy",
        cellHeadLabel: "Ordered by",
        cellProps: { align: "left", padding: "none" },
        contentStyle: {
          padding: "12px",
          fontWeight: "500",
          fontSize: "14px",
          display: "flex",
          flexFlow: "column",
          borderLeft: "2px solid #F3F3F3",
        },
      },
      {
        type: "test-lab-mobile",
        valueKey1: "date",
        valueKey2: "status",
        cellHeadLabel: "Test Status",
        cellProps: { align: "left", padding: "none" },
        contentStyle: {
          padding: "12px",
          fontWeight: "500",
          fontSize: "14px",
          display: "flex",
          flexFlow: "column",
        },
      },
      {
        type: "download-icon",
        valueKey: "source",
        cellProps: { padding: "16px" },
        icon: (
          <IconButton sx={{ width: 24, height: 24, p: 0 }}>
            <FileDownloadIcon />
          </IconButton>
        ),
      },
    ],
  };

  const rows = useSelector((state) => state.medicalResult.testLabData);

  useEffect(() => {
    if (rows.length > 0) setIsHideDisclaimer(false);
  }, [rows]);

  useEffect(() => {
    dispatch(fetchTestLabResult());

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
        {!isHideDisclaimer ? (
          <div className={styles.disclaimerWrapper}>
            <div className={styles.disclaimerText}>
              <span className={styles.infoLabel}>
                <InfoOutlinedIcon
                  sx={{
                    width: "18px",
                    height: "18px",
                    color: "#080707",
                    marginRight: "18px",
                  }}
                />{" "}
                Your lab results are available. Please reach out to your
                provider.
              </span>
              <Button
                p={0}
                data-testid={"close-disclaimer-icon"}
                onClick={() => setIsHideDisclaimer(true)}
                sx={{ color: "#003B4A", display: "contents" }}
              >
                <CloseIcon sx={styles.closeIcon} />
              </Button>
            </div>
          </div>
        ) : null}

        <Stack spacing={3} sx={{ mt: 1 }}>
          {rows?.length > 0 ? (
            <TableWithSort
              config={isDesktop ? tableConfiguration : tableConfigurationMobile}
              rows={rows}
              isDesktop={isDesktop}
            />
          ) : (
            <TableEmpty text="There are no tests or lab results." />
          )}
        </Stack>
      </div>
    </>
  );
}

TestLabPage.getLayout = function getLayout(page) {
  return (
    <Provider store={store}>
      <PrescriptionLayout
        currentActivePage={"test-lab-result"}
        title={"Test & Lab Results"}
      >
        {page}
      </PrescriptionLayout>
    </Provider>
  );
};
