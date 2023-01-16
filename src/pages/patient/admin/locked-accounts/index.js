import { Close, AccountCircleOutlined } from "@mui/icons-material";
import {
  Box,
  CircularProgress,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Provider } from "react-redux";
import FormMessage from "../../../../components/molecules/FormMessage/formMessage";
import SearchBar from "../../../../components/molecules/ManagePatientAccount/SearchBar";
import TableWithSort from "../../../../components/molecules/TableWithSort/tableWithSort";
import AdminLayout from "../../../../components/templates/adminLayout";
import store from "../../../../store/store";
import PatientAcccountCard from "../../../../components/molecules/ManagePatientAccount/PatientAcccountCard";
import CustomModal from "../../../../components/molecules/CustomModal/customModal";
import { colors } from "../../../../styles/theme";
import { useEffect, useState } from "react";
import { Api } from "../../../api/api";

function mapper(data) {
  const parsedAccountList = [];
  const nullChecker = (text) => {
    if (text === "" || text === "null") {
      return "-";
    }
    return text;
  };
  data.map((item, id) => {
    const account = {
      id,
      name: nullChecker(item.patientName),
      patientId: item.patientId,
      email: nullChecker(item.emailId),
      phone: nullChecker(item.phoneNumber),
      lockedDate: item.lockedDate,
      status: item.status === "L" ? "Locked" : item.status,
      lockValue: {
        patientId: item.patientId,
        name: item.patientName,
      },
    };
    parsedAccountList.push(account);
  });
  return parsedAccountList;
}
export default function LockedAccount() {
  const isMobile = useMediaQuery("(max-width: 600px)");

  const [rows, setRows] = useState([]);
  const [searchStatus, setSearchStatus] = useState(null);
  const [showMessage, setShowMessage] = useState(null);
  const [showModal, setShowModal] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [searchKeyTemp, setSearchKeyTemp] = useState("");
  let firstLoad = false;

  const tableConfiguration = {
    header: [
      {
        type: "text",
        id: "name",
        numeric: false,
        label: "Patient Name",
        sx: {
          fontWeight: 600,
        },
      },
      {
        type: "text",
        id: "patientId",
        numeric: false,
        label: "Patient ID",
      },
      {
        type: "text",
        id: "email",
        numeric: false,
        label: "Email ID",
      },
      {
        type: "text",
        id: "phone",
        numeric: false,
        label: "Phone Number",
      },
      {
        type: "text",
        id: "lockedDate",
        numeric: false,
        label: "Locked Date & Time",
      },
      {
        type: "textNoSort",
        id: "status",
        numeric: false,
        label: "Status",
      },
      { type: "empty", width: 22 },
    ],
    cells: [
      {
        type: "text",
        valueKey: "name",
        contentStyle: {
          fontWeight: 500,
          fontSize: 14,
        },
      },
      {
        type: "text",
        valueKey: "patientId",
        contentStyle: {
          fontWeight: 500,
          fontSize: 14,
        },
      },
      {
        type: "text",
        valueKey: "email",
        contentStyle: {
          fontWeight: 500,
          fontSize: 14,
        },
      },
      {
        type: "text",
        valueKey: "phone",
        contentStyle: {
          fontWeight: 500,
          fontSize: 14,
        },
      },
      {
        type: "date-locked-account",
        valueKey: "lockedDate",
        contentStyle: {
          fontWeight: 500,
          fontSize: 14,
        },
      },
      {
        type: "user-status",
        valueKey: "status",
      },
      {
        type: "unlock-button",
        valueKey: "lockValue",
      },
    ],
  };

  useEffect(() => {
    if (showMessage) {
      setTimeout(() => {
        setShowMessage(null);
      }, 3000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showMessage]);

  const onUnlockAccount = async (data) => {
    const api = new Api();
    api
      .unlockAccount(data.patientId)
      .then((responses) => {
        if (responses.responseCode === 3000) {
          setShowMessage(`Account of ${data.name} unlocked successfully`);
          handleSearchPatient(searchKeyTemp);
        }
      })
      .catch(() => {
        setShowMessage(`Error`);
      })
      .finally(() => {
        setShowModal(null);
      });
  };

  const handleSearchPatient = (data) => {
    const api = new Api();
    firstLoad = true;
    setSearchStatus("loading");
    setSearchKeyTemp(data);
    api
      .getLockedAccounts(data)
      .then((responses) => {
        const mappedData = mapper(responses.entities);
        setRows(mappedData);
      })
      .catch(() => {
        setRows([]);
      })
      .finally(() => {
        setSearchStatus("success");
      });

    setShowResult(data.keyword !== "");
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    !firstLoad && searchStatus === null && handleSearchPatient({ keyword: "" });
  });

  const renderMessage = () =>
    showMessage !== null && (
      <FormMessage isWidthFilled success aria-live={"assertive"}>
        <Stack
          sx={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <span style={{ flex: 1 }}>{showMessage}</span>
          <Close
            sx={{ cursor: "pointer" }}
            onClick={() => setShowMessage(null)}
            data-testid="table-form-message-close-btn"
          />
        </Stack>
      </FormMessage>
    );

  const renderResult = () => (
    <>
      {showResult && (
        <Typography
          variant="headlineH4"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          {`${rows.length} Results found using your search criteria`}
        </Typography>
      )}

      {isMobile ? (
        <PatientAcccountCard
          config={tableConfiguration}
          rows={rows}
          onActionClicked={(val) => {
            setShowModal(val);
          }}
        />
      ) : (
        <TableWithSort
          config={tableConfiguration}
          rows={rows}
          withNavigation={true}
          onActionClicked={(val) => {
            setShowModal(val);
          }}
        />
      )}
    </>
  );

  const renderNoResult = () =>
    showResult ? (
      <Stack
        sx={{
          height: 244,
          spacing: "10px",
          alignItems: "center",
          justifyContent: "center",
          background: "white",
        }}
        tabIndex={0}
      >
        <AccountCircleOutlined sx={{ width: 62, height: 62 }} />
        <Typography variant="headlineH4" aria-live="polite">
          No results found.
        </Typography>
      </Stack>
    ) : (
      <Stack
        sx={{
          background: "white",
        }}
      >
        <Typography
          variant="headlineH4"
          sx={{
            background: "#F2F7F7",
            p: "10px",
            m: {
              xs: 2,
              sm: 0,
            },
          }}
        >
          There are no locked accounts
        </Typography>
      </Stack>
    );

  const renderSelection = () =>
    rows.length > 0 ? renderResult() : renderNoResult();

  return (
    <Box
      sx={{
        maxWidth: 1536,
        margin: "0 auto",
        px: {
          xs: 0,
          sm: 3,
        },
        pt: {
          xs: 0,
          sm: 4,
        },
        pb: {
          xs: 0,
          sm: 16,
        },
      }}
    >
      <SearchBar
        onSearch={(data) => {
          handleSearchPatient(data);
        }}
      />

      <Stack
        spacing={isMobile ? 0 : 2}
        sx={{
          p: {
            xs: 0,
            sm: 3,
          },
          flex: {
            xs: 1,
            sm: 0,
          },
          background: {
            //xs: "white",
            sm: "white",
          },
        }}
      >
        {renderMessage()}
        {searchStatus === "success" ? (
          renderSelection()
        ) : (
          <CircularProgress
            data-testid="loading-state"
            sx={{ margin: "0 auto" }}
          />
        )}
      </Stack>

      {showModal !== null && (
        <CustomModal
          open={showModal !== null}
          onClickCloseButton={() => {
            setShowModal(null);
          }}
          buttonText={"Yes"}
          secondaryButtonText={"No"}
          onClickSecondaryButton={() => {
            setShowModal(null);
          }}
          onClickButton={() => {
            onUnlockAccount(showModal);
          }}
          sx={{
            "& .MuiPaper-root": {
              top: { xs: "0", md: "87px" },
              position: { xs: "relative", md: "absolute" },
              m: 2,
            },
          }}
          buttonSx={{
            flexDirection: {
              xs: "column",
              sm: "row",
            },
          }}
        >
          <Typography
            sx={{
              color: colors.darkGreen,
              fontSize: "22px",
              fontWeight: 500,
            }}
          >{`Are you sure you want to unlock ${showModal.name}?`}</Typography>
        </CustomModal>
      )}
    </Box>
  );
}

LockedAccount.getLayout = function getLayout(page) {
  return (
    <Provider store={store}>
      <AdminLayout
        currentActivePage={"locked-accounts"}
        pageTitle={"Admin - Locked Accounts"}
      >
        {page}
      </AdminLayout>
    </Provider>
  );
};
