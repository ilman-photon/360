import AccountLayout from "../../../../components/templates/accountLayout";
import InsuranceInformationNew from "../../../../components/organisms/InsuranceInformation/insuranceInformationNew";
import InsuranceView from "../../../../components/organisms/InsuranceInformation/insuranceView";
import { useEffect, useRef, useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import {
  addUserInsuranceData,
  deleteInsurance,
  fetchInsurance,
  postInsurance,
  removeUserInsuranceData,
  setUserInsuranceDataById,
  updateInsurance,
} from "../../../../store/user";
import FormMessage from "../../../../components/molecules/FormMessage/formMessage";
import { closePageMessage, setPageMessage } from "../../../../store";
import store from "../../../../store/store";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  CircularProgress,
  Collapse,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fade,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import AccountCard from "../../../../components/molecules/AccountCard/accountCard";
import AddIcon from "@mui/icons-material/Add";
import { StyledButton } from "../../../../components/atoms/Button/button";
import styles from "./styles.module.scss";
import InsuranceForm from "../../../../components/organisms/InsuranceInformation/insuranceForm";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccountCircleOutlined from "@mui/icons-material/AccountCircleOutlined";
import constants from "../../../../utils/constants";
import { fetchAllPayers, fetchPlans } from "../../../../store/provider";
import Cookies from "universal-cookie";
import { useRouter } from "next/router";

export default function InsuranceInfoPage() {
  const [openNewInsuranceForm, setOpenNewInsuranceForm] = useState(false);
  const [focusToNewInsurance, setFocusToNewInsurance] = useState(false);
  const [confirmationDeleteDialog, setConfirmationDeleteDialog] =
    useState(false);
  const { INSURANCE_TEST_ID } = constants.TEST_ID;
  const [formDeleteInsurance, setFormDeleteInsurance] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState(null);
  const [patientId, setPatientId] = useState(null);

  const pageMessage = useSelector((state) => state.index.pageMessage);
  const loadingInsurance = useSelector((state) => state.user.status);
  const providerList = useSelector((state) => state.provider.list);
  const planList = useSelector((state) => state.provider.planList);
  const isAutocompleteLoading = useSelector(
    (state) => state.provider.status === "loading"
  );

  const userInsuranceData = useSelector(
    (state) => state.user.userInsuranceData
  );

  const [isShowError, setIsShowError] = useState(false);
  const [isShowErrorNew, setIsShowErrorNew] = useState(false);
  const dispatch = useDispatch();

  const isDesktop = useMediaQuery("(min-width: 769px)");
  const cookies = new Cookies();
  const router = useRouter();

  const newInsuranceComp = useRef(null);

  const showSuccessMessage = (message) => {
    dispatch(
      setPageMessage({
        isShow: true,
        content: message || "Your changes were saved",
      })
    );
    setTimeout(() => {
      dispatch(closePageMessage());
    }, 5000);
  };

  const OnCreateInsurance = async (postBody) => {
    const { backCard, frontCard } = postBody;
    if (
      (backCard !== "" && frontCard === "") ||
      (backCard === "" && frontCard !== "")
    ) {
      setIsShowErrorNew(true);
      setIsShowError(true);
    } else {
      const { payload } = await dispatch(
        postInsurance({ patientId, payload: postBody })
      );

      if (payload.success) {
        // after effect to add state of rawuserinsuranceData manually and rebuild
        dispatch(addUserInsuranceData(payload.response));
        dispatch(
          setPageMessage({
            isShow: true,
            content: "Insurance successfully added",
          })
        );
        setOpenNewInsuranceForm(false);
        setIsShowErrorNew(false);
        setIsShowError(false);
      }
    }
  };

  const OnRemoveInsurance = (payload) => {
    setFormDeleteInsurance(payload);
    setConfirmationDeleteDialog(true);
  };

  const OnConfirmRemoveInsurance = async () => {
    const { payload } = await dispatch(
      deleteInsurance({ patientId, coverageId: formDeleteInsurance.id })
    );

    if (payload.success) {
      // after effect to add state of rawuserinsuranceData manually and rebuild
      dispatch(removeUserInsuranceData(formDeleteInsurance));
      setConfirmationDeleteDialog(false);
      dispatch(
        setPageMessage({
          isShow: true,
          content: "Insurance successfully removed",
        })
      );
      setTimeout(() => {
        dispatch(closePageMessage());
      }, 5000);
    }
  };

  const OnOpenEditInsuranceForm = (payload) => {
    setEditForm(payload);
    setIsEditing(true);
  };

  const OnEditInsurance = async (postBody) => {
    if (!postBody) {
      return;
    }
    const { payload } = await dispatch(
      updateInsurance({
        patientId: patientId,
        coverageId: postBody.id,
        payload: postBody,
      })
    );
    if (payload.success) {
      // after effect to edit state of rawuserinsuranceData manually and rebuild
      dispatch(setUserInsuranceDataById(payload.response));

      // show messages or anything
      showSuccessMessage("Your changes were saved");
      setEditForm(null);
      setIsEditing(false);
    }
  };

  const OnAddNewInsurance = () => {
    if (userInsuranceData.length < 5) {
      setOpenNewInsuranceForm(true);
      setFocusToNewInsurance(true);
    } else {
      dispatch(
        setPageMessage({
          isShow: true,
          content:
            "Cannot add any more insurances. Maximum limit has been reached",
          error: true,
        })
      );
    }
  };
  useEffect(() => {
    if (newInsuranceComp.current && focusToNewInsurance) {
      setTimeout(() => {
        newInsuranceComp.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 300);
    }
  }, [openNewInsuranceForm, focusToNewInsurance]);

  useEffect(() => {
    const userStorageData = JSON.parse(localStorage.getItem("userData"));
    if (userStorageData) {
      dispatch(fetchInsurance({ patientId: userStorageData.patientId }));
      setPatientId(userStorageData.patientId);
    } else {
      router.replace("/patient/login");
    }

    dispatch(fetchAllPayers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFetchPlans = (payerId) => {
    if (payerId) {
      dispatch(fetchPlans({ token: cookies.get("accessToken"), payerId }));
    }
  };

  const uploadBothError = (style, onClose) => {
    return (
      <FormMessage success={false} sx={style} onClick={onClose}>
        Please upload both sides of your insurance card.
      </FormMessage>
    );
  };
  return (
    <section>
      <FormMessage
        onClick={() => {
          dispatch(closePageMessage());
        }}
        role="button"
        success={pageMessage.error ? false : true}
        fontTitle={16}
        sx={{
          borderRadius: "0px",
          justifyContent: "center",
          position: "absolute",
          top: "-48px",
          zIndex: "1",
          left: 0,
          width: "100%",
          transition: "0.3 s ease-in-out",
          cursor: "pointer",
        }}
      >
        {pageMessage.content}
      </FormMessage>
      {loadingInsurance === "loading" ? (
        <CircularProgress />
      ) : (
        <>
          <Fade in={userInsuranceData.length > 0} unmountOnExit>
            <Stack>
              <AccountCard
                titleIcon={<AccountCircleOutlined />}
                title="Insurance Document"
                sx={{
                  border: "2px solid #F3F3F3",
                }}
                actionContent={
                  isDesktop ? (
                    <StyledButton
                      mode="primary"
                      size="small"
                      className={styles.addButton}
                      disabled={openNewInsuranceForm}
                      data-testid={INSURANCE_TEST_ID.addButton}
                      onClick={OnAddNewInsurance}
                      aria-label={"Add Insurance button"}
                    >
                      <Stack
                        direction="row"
                        alignItems="center"
                        sx={{ color: "white" }}
                        component="span"
                      >
                        <AddIcon />
                        Add Insurance
                      </Stack>
                    </StyledButton>
                  ) : (
                    <></>
                  )
                }
              >
                {isShowError &&
                  uploadBothError({ marginBottom: "16px" }, () =>
                    setIsShowError(false)
                  )}
                <Collapse in={isEditing}>
                  <Box>
                    <InsuranceForm
                      testIds={INSURANCE_TEST_ID}
                      memberId={patientId}
                      providerList={providerList}
                      planList={planList}
                      formData={editForm}
                      isAutocompleteLoading={isAutocompleteLoading}
                      OnProviderChanged={handleFetchPlans}
                      OnSaveClicked={OnEditInsurance}
                      OnCancelClicked={() => {
                        setIsEditing(false);
                      }}
                      isError={isShowError}
                    />
                  </Box>
                </Collapse>
                <Collapse in={!isEditing}>
                  <Stack spacing={3}>
                    {!isDesktop ? (
                      <StyledButton
                        className={styles.addButton}
                        disabled={openNewInsuranceForm}
                        onClick={OnAddNewInsurance}
                        data-testid={INSURANCE_TEST_ID.addButton}
                        aria-label={"Add Insurance button"}
                      >
                        <Stack
                          direction="row"
                          alignItems="center"
                          sx={{ color: "white" }}
                          component="span"
                        >
                          <AddIcon />
                          Add Insurance
                        </Stack>
                      </StyledButton>
                    ) : (
                      <></>
                    )}

                    {/* {view user insurance data} */}
                    <InsuranceView
                      insuranceData={userInsuranceData}
                      OnRemoveClicked={OnRemoveInsurance}
                      OnEditClicked={OnOpenEditInsuranceForm}
                    />

                    {/* add more insurance data */}
                    <Collapse in={openNewInsuranceForm}>
                      <Accordion
                        defaultExpanded
                        sx={{
                          ".MuiAccordionSummary-root": {
                            pointerEvents: "none",
                          },
                        }}
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          sx={{ background: "#FAFAFA" }}
                          ref={newInsuranceComp}
                        >
                          <Stack
                            spacing={1}
                            direction="row"
                            alignItems="center"
                          >
                            <Typography variant="h4">New Insurance</Typography>
                          </Stack>
                        </AccordionSummary>
                        <AccordionDetails>
                          <InsuranceForm
                            testIds={INSURANCE_TEST_ID}
                            memberId={patientId}
                            providerList={providerList}
                            planList={planList}
                            isAutocompleteLoading={isAutocompleteLoading}
                            OnProviderChanged={handleFetchPlans}
                            OnSaveClicked={OnCreateInsurance}
                            OnCancelClicked={() => {
                              setOpenNewInsuranceForm(false);
                              setFocusToNewInsurance(false);
                            }}
                            isError={isShowError}
                          />
                        </AccordionDetails>
                      </Accordion>
                    </Collapse>
                  </Stack>
                </Collapse>
              </AccountCard>
            </Stack>
          </Fade>

          {/* create new insurance data */}
          <Fade in={userInsuranceData.length === 0} unmountOnExit>
            <Box>
              <InsuranceInformationNew
                providerList={providerList}
                planList={planList}
                isAutocompleteLoading={isAutocompleteLoading}
                OnProviderChanged={handleFetchPlans}
                OnCreateInsurance={OnCreateInsurance}
                FormMessageEl={uploadBothError(null, () =>
                  setIsShowErrorNew(false)
                )}
                isShowError={isShowErrorNew}
              />
            </Box>
          </Fade>
        </>
      )}
      {/* delete dialog */}
      <Dialog
        onClose={() => setConfirmationDeleteDialog(false)}
        open={confirmationDeleteDialog}
        sx={{
          ".MuiPaper-root": {
            minWidth: "500px",
          },
          ".MuiDialogActions-root": {
            padding: 2,
          },
        }}
      >
        <DialogTitle
          tabIndex={0}
          aria-label={"Remove Insurance"}
          sx={{ color: "#003B4A", fontSize: "22px" }}
        >
          Remove Insurance
        </DialogTitle>
        <DialogContent
          tabIndex={0}
          aria-label={"Are you sure you want to remove insurance?"}
          sx={{ color: "#6C757D" }}
        >
          Are you sure you want to remove insurance?
        </DialogContent>
        <DialogActions>
          <Stack direction="row" alignItems="center" spacing={2}>
            <StyledButton
              size="small"
              mode="secondary"
              onClick={() => setConfirmationDeleteDialog(false)}
              sx={{ fontSize: "14px" }}
            >
              No, keep Insurance
            </StyledButton>
            <StyledButton
              size="small"
              mode="error"
              onClick={OnConfirmRemoveInsurance}
              sx={{ fontSize: "14px" }}
            >
              Yes, remove Insurance
            </StyledButton>
          </Stack>
        </DialogActions>
      </Dialog>
    </section>
  );
}

InsuranceInfoPage.getLayout = function getLayout(page) {
  return (
    <Provider store={store}>
      <AccountLayout currentActivePage={"insurance-info"}>{page}</AccountLayout>
    </Provider>
  );
};
