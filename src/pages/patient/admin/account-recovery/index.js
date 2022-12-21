import { AccountCircleOutlined, Close } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Collapse,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Provider, useDispatch, useSelector } from "react-redux";
import AdminLayout from "../../../../components/templates/adminLayout";
import FormMessage from "../../../../components/molecules/FormMessage/formMessage";
import store from "../../../../store/store";
import { colors } from "../../../../styles/theme";
import styles from "./styles.module.scss";
import TableWithSort from "../../../../components/molecules/TableWithSort/tableWithSort";
import { useEffect, useRef, useState } from "react";
import SearchBar from "../../../../components/molecules/ManagePatientAccount/SearchBar";
import PatientAcccountCard from "../../../../components/molecules/ManagePatientAccount/PatientAcccountCard";
import CustomModal from "../../../../components/molecules/CustomModal/customModal";
import RowRadioButtonsGroup from "../../../../components/atoms/RowRadioButtonsGroup/rowRadioButtonsGroup";
import { Controller, useForm } from "react-hook-form";
import {
  fetchPatientAccount,
  onActivate,
  onSendPasswordReset,
  onShareUsername,
  onUnlock,
  onViewSecurityQuestions,
  setAccountDataById,
} from "../../../../store/accountRecovery";
import { setPageMessage } from "../../../../store";

export default function AccountRecovery() {
  const dispatch = useDispatch();
  const communicationRef = useRef(null);

  const rows = useSelector((state) => state.accountRecovery.patientList);
  const searchStatus = useSelector((state) => state.accountRecovery.status);
  const securityQuestions = useSelector(
    (state) => state.accountRecovery.securityQuestions
  );

  const [tableFormMessage, setTableFormMessage] = useState(false);
  const [activeModalData, setActiveModalData] = useState(false);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [firstSearch, setFirstSearch] = useState(false);
  const [priorityOptions, setPriorityOptions] = useState([]);

  const tableConfiguration = {
    header: [
      {
        type: "text",
        id: "name",
        numeric: false,
        label: "Patient Name",
      },
      {
        type: "text",
        id: "patientId",
        numeric: false,
        label: "Patient ID",
      },
      {
        type: "text",
        id: "phone",
        numeric: false,
        label: "Phone Number",
      },
      {
        type: "text",
        id: "dob",
        numeric: false,
        label: "Date of Birth",
      },
      {
        type: "text",
        id: "email",
        numeric: false,
        label: "Email ID",
      },
      {
        type: "text",
        id: "username",
        numeric: false,
        label: "Username",
      },
      {
        type: "text",
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
      },
      {
        type: "text",
        valueKey: "patientId",
      },
      {
        type: "text",
        valueKey: "phone",
      },
      {
        type: "date",
        valueKey: "dob",
        dateOnly: true,
      },
      {
        type: "text",
        valueKey: "email",
      },
      {
        type: "text",
        valueKey: "username",
      },
      {
        type: "user-status",
        valueKey: "status",
      },
      {
        type: "account-recovery-menu",
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

  const handleActionClicked = async (action, rowData) => {
    setActiveModalData({ action, rowData });
    if (action === "view-security-questions") {
      await dispatch(onViewSecurityQuestions({ patientId: rowData.patientId }));
    }
    if (typeof action === "string") setIsModalOpened(true);
  };

  const buildPriorityOptions = (data) => {
    if (!data.rowData) return [];
    const rowData = data.rowData;
    const options = [];
    if (rowData.phoneNumber) {
      options.push({
        label: `Phone - ${rowData.phoneNumber}`,
        value: "phone",
        preferred: rowData.preferredCommunication === "phone",
      });
      setValue("communication", "phone");
    }
    if (rowData.emailId) {
      options.push({
        label: `Email - ${rowData.emailId}`,
        value: "email",
        preferred: rowData.preferredCommunication === "email",
      });
      setValue("communication", "email");
    }
    if (rowData.emailId && rowData.phoneNumber) {
      options.push({
        label: "Both",
        value: "both",
        preferred: rowData.preferredCommunication === "both",
      });
    }

    return options;
  };

  useEffect(() => {
    setPriorityOptions(buildPriorityOptions(activeModalData));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeModalData]);

  useEffect(() => {
    if (activeModalData.rowData) {
      const rowData = activeModalData.rowData;
      if (rowData.preferredCommunication === "phone")
        setValue("communication", "phone");
      else if (rowData.preferredCommunication === "email")
        setValue("communication", "email");
      else if (rowData.preferredCommunication === "both")
        setValue("communication", "both");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [priorityOptions]);

  const { handleSubmit, control, setValue } = useForm({
    defaultValues: { communication: "phone" },
  });

  const onActivateAccount = async (data) => {
    const { payload } = await dispatch(
      onActivate({ patientId: data.patientId })
    );
    dispatch(setPageMessage(payload));
    if (payload.success) {
      await dispatch(setAccountDataById(payload.data));
      setTableFormMessage(
        `Account of ${payload.data.name} activated successfully`
      );
    }
    setIsModalOpened(false);
  };

  const onUnlockAccount = async (data) => {
    const { payload } = await dispatch(onUnlock({ patientId: data.patientId }));
    if (payload.success) {
      await dispatch(setAccountDataById({ ...data, status: "Y" }));
      setTableFormMessage(
        `Account of ${data.name || "patient"} unlocked successfully`
      );
    }
    setIsModalOpened(false);
  };

  const onSentPasswordSubmit = async (data) => {
    const { payload } = await dispatch(
      onSendPasswordReset({
        patientId: data.patientId,
        patientData: data,
        selectedCommunication: data.communication,
      })
    );
    if (payload.success) {
      setTableFormMessage(
        `Password reset link sent to ${data.name || "patient"} successfully`
      );
    }
    setIsModalOpened(false);
  };

  const onShareUsernameSubmit = async (data) => {
    const { payload } = await dispatch(
      onShareUsername({
        patientId: data.patientId,
        selectedCommunication: data.communication,
      })
    );
    if (payload.success) {
      setTableFormMessage(
        `Username shared to ${data.name || "patient"} successfully`
      );
    }
    setIsModalOpened(false);
  };

  const getModalProps = ({ action, rowData }) => {
    switch (action) {
      case "activate-account":
        return {
          buttonText: "Yes",
          secondaryButtonText: "No",
          onClickButton: handleSubmit((d) =>
            onActivateAccount({ ...d, ...rowData })
          ),
          onClickSecondaryButton: () => setIsModalOpened(false),
        };
      case "unlock-account":
        return {
          buttonText: "Yes",
          secondaryButtonText: "No",
          onClickButton: handleSubmit((d) =>
            onUnlockAccount({ ...d, ...rowData })
          ),
          onClickSecondaryButton: () => setIsModalOpened(false),
        };
      case "send-password-reset":
        return {
          buttonText: "Send Password",
          secondaryButtonText: "Cancel",
          onClickButton: handleSubmit((d) =>
            onSentPasswordSubmit({ ...d, ...rowData })
          ),
          onClickSecondaryButton: () => setIsModalOpened(false),
        };
      case "share-username":
        return {
          buttonText: "Share Username",
          secondaryButtonText: "Cancel",
          onClickButton: handleSubmit((d) =>
            onShareUsernameSubmit({ ...d, ...rowData })
          ),
          onClickSecondaryButton: () => setIsModalOpened(false),
        };
      case "view-security-questions":
        return {
          buttonText: "Close",
          onClickButton: () => setIsModalOpened(false),
        };
    }
  };

  const getModalContent = ({ action, rowData }) => {
    switch (action) {
      case "activate-account":
        return (
          <Typography
            aria-label={`Are you sure you want to activate ${
              rowData.name || "patient"
            }?`}
            sx={{ color: "#003B4A", fontSize: "22px" }}
          >
            {`Are you sure you want to activate ${rowData.name || "patient"}?`}
          </Typography>
        );
      case "unlock-account":
        return (
          <Typography
            aria-label={`Are you sure you want to unlock ${
              rowData.name || "patient"
            }?`}
            sx={{ color: "#003B4A", fontSize: "22px" }}
          >
            {`Are you sure you want to unlock ${rowData.name || "patient"}?`}
          </Typography>
        );
      case "send-password-reset":
        return (
          <>
            <Typography
              aria-label={"Are you sure you want to send password reset?"}
              sx={{ color: "#003B4A", fontSize: "22px" }}
            >
              Are you sure you want to send password reset?
            </Typography>
            <Box sx={{ px: 1, py: 3 }}>
              <Controller
                name="communication"
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => {
                  return (
                    <RowRadioButtonsGroup
                      row={false}
                      error={!!error}
                      value={value}
                      data-testid={"account-recovery-communication-mode-form"}
                      onChange={onChange}
                      label="Select mode of communication where to send password reset link."
                      customRadioLabel={(option) => {
                        if (option.preferred) {
                          return (
                            <>
                              {option.label} <b>(Prefered)</b>
                            </>
                          );
                        } else return option.label;
                      }}
                      options={priorityOptions}
                    />
                  );
                }}
              />
            </Box>
          </>
        );
      case "share-username":
        return (
          <>
            <Typography
              aria-label={"Are you sure you want to share username?"}
              sx={{ color: "#003B4A", fontSize: "22px" }}
            >
              Are you sure you want to share username?
            </Typography>
            <Box sx={{ px: 1, py: 3 }}>
              <Controller
                name="communication"
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => {
                  return (
                    <RowRadioButtonsGroup
                      row={false}
                      error={!!error}
                      value={value}
                      onChange={onChange}
                      label="Select mode of communication where to share username"
                      customRadioLabel={(option) => {
                        if (option.preferred) {
                          return (
                            <>
                              {option.label} <b>(Prefered)</b>
                            </>
                          );
                        } else return option.label;
                      }}
                      options={priorityOptions}
                    />
                  );
                }}
              />
            </Box>
          </>
        );
      case "view-security-questions":
        return (
          <Stack spacing={2}>
            <Typography
              aria-label={"Security Questions"}
              sx={{ color: "#003B4A", fontSize: "22px" }}
              data-testid={"modal-view-security-questions-title"}
            >
              Security Questions
            </Typography>
            {securityQuestions.length === 0 ? (
              <Typography variant="bodyRegularSemiBold">
                User has not set-up security questions.
              </Typography>
            ) : (
              <Stack spacing={2} sx={{ p: 1 }}>
                {securityQuestions.map((item, index) => {
                  return (
                    <Grid key={index} container columns={24}>
                      <Grid item xs={1}>
                        <Typography variant="bodyRegularSemiBold">
                          {index + 1}.
                        </Typography>
                      </Grid>
                      <Grid item xs={23}>
                        <Stack sx={{ spacing: 10 }}>
                          <Typography variant="bodyRegularSemiBold">
                            {item.question}
                          </Typography>
                          <Typography
                            variant="bodyRegular"
                            sx={{
                              color: colors.inputPlaceholder,
                              fontWeight: 400,
                            }}
                          >
                            {item.answer}
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  );
                })}
              </Stack>
            )}
          </Stack>
        );
    }
  };

  const handleSearchPatient = (data) => {
    if (data.keyword && data.keyword.trim()) {
      setFirstSearch(true);
      dispatch(fetchPatientAccount(data));
    }
  };

  return (
    <>
      {/* desktop */}
      <Box
        sx={{
          maxWidth: 1536,
          margin: "0 auto",
          px: 3,
          pt: 4,
          pb: 16,
          display: {
            xs: "none",
            sm: "block",
          },
        }}
      >
        <Card sx={{ borderRadius: 0 }}>
          <CardContent sx={{ p: 0 }}>
            <SearchBar
              title={"Search for a patient"}
              onSearch={handleSearchPatient}
            />
            <div className={styles.cardContent}>
              <Stack spacing={2}>
                <Collapse in={!!tableFormMessage}>
                  <FormMessage isWidthFilled success>
                    <Stack
                      sx={{
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <span style={{ flex: 1 }}>{tableFormMessage}</span>
                      <Close
                        sx={{ cursor: "pointer" }}
                        onClick={() => setTableFormMessage(false)}
                        data-testid="table-form-message-close-btn"
                      />
                    </Stack>
                  </FormMessage>
                </Collapse>

                {/* search result in table */}
                {firstSearch ? (
                  searchStatus === "loading" ? (
                    <CircularProgress
                      data-testid="loading-state"
                      sx={{ margin: "0 auto" }}
                    />
                  ) : rows.length > 0 ? (
                    <>
                      <Typography
                        variant="headlineH4"
                        sx={{ display: { xs: "none", sm: "block" } }}
                      >
                        {rows.length} Results found using your search criteria
                      </Typography>
                      <TableWithSort
                        config={tableConfiguration}
                        rows={rows}
                        onActionClicked={handleActionClicked}
                        withNavigation={true}
                      />
                    </>
                  ) : (
                    <Stack
                      sx={{
                        height: 244,
                        spacing: "10px",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <AccountCircleOutlined sx={{ width: 62, height: 62 }} />
                      <Typography variant="headlineH4">
                        No records found.
                      </Typography>
                    </Stack>
                  )
                ) : (
                  <></>
                )}
              </Stack>
            </div>
          </CardContent>
        </Card>
      </Box>

      {/* mobile */}
      <Stack
        sx={{
          display: {
            sm: "none",
          },
        }}
      >
        <SearchBar onSearch={handleSearchPatient} />

        {searchStatus === "success"
          ? rows.length > 0 && (
              <PatientAcccountCard
                config={tableConfiguration}
                rows={rows}
                onActionClicked={handleActionClicked}
              />
            )
          : searchStatus !== null && (
              <CircularProgress
                data-testid="loading-state"
                sx={{ margin: "0 auto" }}
              />
            )}
      </Stack>

      <CustomModal
        open={isModalOpened}
        onClickCloseButton={() => setIsModalOpened(false)}
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
        {...getModalProps(activeModalData)}
      >
        <form ref={communicationRef} noValidate>
          {getModalContent(activeModalData)}
        </form>
      </CustomModal>
    </>
  );
}

AccountRecovery.getLayout = function getLayout(page) {
  return (
    <Provider store={store}>
      <AdminLayout
        currentActivePage={"account-recovery"}
        pageTitle={"Admin - Account Recovery"}
      >
        {page}
      </AdminLayout>
    </Provider>
  );
};
