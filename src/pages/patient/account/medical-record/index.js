import * as React from "react";
import PrescriptionLayout from "../../../../components/templates/prescriptionLayout";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "../../../../store/store";
import TableWithSort from "../../../../components/molecules/TableWithSort/tableWithSort";
import { IconButton, Stack, useMediaQuery, Button } from "@mui/material";
import styles from "./styles.module.scss";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect } from "react";
import {
  fetchTestLabResult,
  fetchCarePlan,
} from "../../../../store/medicalReport";
import { StyledSelect } from "../../../../components/atoms/Select/select";
import { useRouter } from "next/router";
import { Controller, useForm } from "react-hook-form";
import TableEmpty from "../../../../components/atoms/TableEmpty/tableEmpty";
import { fetchSource } from "../../../../utils/fetchDigitalAssetSource";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import ReplyIcon from "@mui/icons-material/Reply";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import { TEST_ID } from "../../../../utils/constants";

export default function MedicalRecordPage() {
  const isDesktop = useMediaQuery("(min-width: 769px)");
  const router = useRouter();
  const dispatch = useDispatch();
  const [isHideDisclaimer, setIsHideDisclaimer] = React.useState(false);

  const categories = [
    { id: 0, label: "Care Plan", value: "care-plan-overview" },
    { id: 1, label: "Prescriptions", value: "test-lab-result" },
    { id: 2, label: "Test & Lab Results", value: "test-lab-result" },
  ];

  //menu MoreVertIcon
  const [anchorEl, setAnchorEl] = React.useState(null);
  const MyOptions = [
    {
      id: "download",
      icon: <FileDownloadOutlinedIcon />,
      label: "Download",
      dataTestId: "download-menu",
      ariaLabel: "download option",
    },
    {
      id: "share",
      icon: <ReplyIcon />,
      label: "Share",
      dataTestId: "share-menu",
      ariaLabel: "share option",
    },
    {
      id: "print",
      icon: <PrintOutlinedIcon />,
      label: "Print",
      dataTestId: "print-menu",
      ariaLabel: "print option",
    },
  ];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);

  const handleMoreMenu = (id) => {
    setAnchorEl(null);
    if (typeof id === "string") {
      switch (id) {
        case "download":
          fetchSource("digitalId");
          break;
        case "print":
          setTimeout(() => {
            window.print();
          }, 300);
          break;
        default:
          break;
      }
    }
  };

  const { control, setValue, watch } = useForm({
    defaultValues: { category: "test-lab-result" },
  });

  const watchedCategory = watch("category");

  const tableDesktopTestLab = {
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
        disablePadding: false,
        label: "Test Status",
        width: 136,
      },
    ],
    cells: [
      {
        type: "text",
        primary: true,
        valueKey: "name",
        cellProps: {
          padding: "12px 24px",
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
        cellProps: { align: "left", padding: "none", borderRight: "none" },
        contentStyle: {
          padding: "12px 0",
          fontWeight: "500",
          fontSize: "14px",
        },
      },
      {
        type: "text",
        valueKey: "status",
        cellProps: { align: "left" },
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
        id: "name",
        numeric: false,
        disablePadding: false,
        label: "Procedure",
      },
      {
        type: "text",
        id: "orderBy",
        numeric: false,
        disablePadding: false,
        label: "Ordered By",
      },
      {
        type: "text",
        id: "date",
        numeric: false,
        disablePadding: false,
        label: "Test Date",
      },
    ],
  };

  const tableCarePlan = {
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
        // cellProps: { padding: "none" },
        contentClass: isDesktop ? "" : "clipped clip-2",
      },
      {
        type: "text",
        valueKey: "date",
        cellProps: { align: "left", component: "th", padding: "none" },
        contentStyle: {
          padding: isDesktop ? "12px 0" : "8px 0",
          fontSize: isDesktop ? "unset" : "12px",
        },
        contentClass: isDesktop ? "" : "clipped clip-2",
      },
      {
        type: "download-asset",
        valueKey: "digitalId",
        cellProps: { padding: "none" },
        icon: (
          <>
            <IconButton
              sx={{ width: 24, height: 24, p: 0 }}
              aria-label="more option"
              onClick={handleClick}
              aria-haspopup="true"
              aria-controls="menu-appbar"
              data-testid="more-vert-button"
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              sx={{ mt: "40px" }}
              anchorEl={anchorEl}
              keepMounted
              onClose={handleMoreMenu}
              data-testid={TEST_ID.MEDICAL_RECORD.moreMenu}
              open={open}
            >
              {MyOptions.map((more, moreIdx) => (
                <MenuItem
                  key={moreIdx}
                  onClick={() => handleMoreMenu(more.id)}
                  aria-label={`${more.ariaLabel}`}
                  inputProps={{
                    "aria-label": `${more.ariaLabel}`,
                    "aria-live": "polite",
                  }}
                >
                  {more.icon}
                  <Typography
                    textAlign="center"
                    tabIndex={0}
                    sx={{
                      margin: "0 8px",
                      fontFamily: "Libre Franklin",
                      fontWeight: "500",
                      fontSize: "14px",
                    }}
                    data-testid={more.dataTestId}
                  >
                    {more.label}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </>
        ),
      },
    ],
  };

  const rows = useSelector((state) => {
    switch (watchedCategory) {
      case "test-lab-result":
        return state.medicalResult.testLabData;
      case "care-plan-overview":
        return state.medicalResult.carePlanData;
      default:
        return [];
    }
  });

  const status = useSelector((state) => {
    return state.medicalResult.status;
  });

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

  useEffect(() => {
    const category = router.query.type;
    if (category) setValue("category", category);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query]);

  useEffect(() => {
    if (watchedCategory) {
      switch (watchedCategory) {
        case "test-lab-result":
          dispatch(fetchTestLabResult());
          break;
        case "care-plan-overview":
          dispatch(fetchCarePlan());
          break;
      }
    } else
      router.replace({
        pathname: router.pathname,
        query: { type: "test-lab-result" },
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchedCategory]);

  return (
    <>
      {status === "success" && (
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
                  sx={{ m: 0, display: isDesktop ? "none" : "" }}
                />
              );
            }}
          />

          {!isHideDisclaimer && watchedCategory === "test-lab-result" ? (
            <div className={styles.disclaimerWrapper}>
              <div className={styles.disclaimerText}>
                <span className={styles.infoLabel} tabIndex="0">
                  <InfoOutlinedIcon
                    sx={{
                      width: "18px",
                      height: "18px",
                      color: "#080707",
                      marginRight: "12px",
                    }}
                    role={"alert"}
                  />{" "}
                  Your lab results are available. Please reach out to your
                  provider.
                </span>
                {/* <IconButton>
                  <CloseIcon sx={styles.closeIcon} />
                </IconButton> */}
                <IconButton
                  data-testid={"close-disclaimer-icon"}
                  onClick={() => setIsHideDisclaimer(true)}
                  sx={{ color: "#003B4A" }}
                  tabIndex={0}
                  role={"button"}
                  aria-label="close"
                >
                  <CloseIcon sx={styles.closeIcon} />
                </IconButton>
              </div>
            </div>
          ) : null}

          <Stack spacing={3} sx={{ mt: 1 }}>
            {rows?.length > 0 ? (
              <TableWithSort
                config={
                  watchedCategory === "care-plan-overview"
                    ? tableCarePlan
                    : isDesktop
                    ? tableDesktopTestLab
                    : tableMobileTestLab
                }
                rows={rows}
                mobileTestLab={
                  watchedCategory === "test-lab-result" && !isDesktop
                }
                additionalProps={{
                  tableProps: { "aria-label": `${watchedCategory}` },
                }}
              />
            ) : (
              <TableEmpty text={noResultText()} />
            )}
          </Stack>
        </div>
      )}
    </>
  );
}

MedicalRecordPage.getLayout = function getLayout(page) {
  return (
    <Provider store={store}>
      <PrescriptionLayout
        currentActivePage={"medical-record"}
        pageTitle={"EyeCare Patient Portal - Test & Lab Result"}
        title={"Test & Lab Result"}
      >
        {page}
      </PrescriptionLayout>
    </Provider>
  );
};
