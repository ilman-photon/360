import AccountLayout from "../../../../components/templates/accountLayout";
import InsuranceInformationNew from "../../../../components/organisms/InsuranceInformation/insuranceInformationNew";
import InsuranceView from "../../../../components/organisms/InsuranceInformation/insuranceView";
import { useEffect, useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import {
  addUserInsuranceData,
  fetchInsurance,
  removeUserInsuranceData,
  setUserInsuranceDataByIndex,
} from "../../../../store/user";
import FormMessage from "../../../../components/molecules/FormMessage/formMessage";
import { closePageMessage, setPageMessage } from "../../../../store";
import store from "../../../../store/store";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
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

export default function InsuranceInfoPage() {
  const [openNewInsuranceForm, setOpenNewInsuranceForm] = useState(false);
  const [confirmationDeleteDialog, setConfirmationDeleteDialog] =
    useState(false);
  const { INSURANCE_TEST_ID } = constants.TEST_ID;
  const [formDeleteInsurance, setFormDeleteInsurance] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState(null);

  const pageMessage = useSelector((state) => state.index.pageMessage);

  const userInsuranceData = useSelector(
    (state) => state.user.userInsuranceData
  );

  const dispatch = useDispatch();

  const isDesktop = useMediaQuery("(min-width: 769px)");

  const OnCreateInsurance = (payload) => {
    dispatch(addUserInsuranceData(payload));
    dispatch(
      setPageMessage({ isShow: true, content: "Insurance successfully added" })
    );

    setOpenNewInsuranceForm(false);
  };

  const OnRemoveInsurance = (payload) => {
    setFormDeleteInsurance(payload);
    setConfirmationDeleteDialog(true);
  };

  const OnConfirmRemoveInsurance = () => {
    dispatch(removeUserInsuranceData(formDeleteInsurance));
    setConfirmationDeleteDialog(false);
    dispatch(
      setPageMessage({
        isShow: true,
        content: "Insurance successfully removed",
      })
    );
  };

  const OnOpenEditInsuranceForm = (payload) => {
    setEditForm(payload);
    setIsEditing(true);
  };

  const OnEditInsurance = (payload) => {
    if (!payload) {
      return;
    }
    dispatch(setUserInsuranceDataByIndex(payload));
    setEditForm(null);
    setIsEditing(false);
  };

  const OnAddNewInsurance = () => {
    if (userInsuranceData.length < 5) {
      setOpenNewInsuranceForm(true);
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
    dispatch(fetchInsurance());
  }, [dispatch]);

  return (
    <section>
      <FormMessage
        onClick={() => {
          dispatch(closePageMessage());
        }}
        role="button"
        success={pageMessage.error ? false : true}
        sx={{
          borderRadius: "0px",
          justifyContent: "center",
          position: "absolute",
          top: "-40px",
          left: 0,
          width: "100%",
          transition: "0.3 s ease-in-out",
          cursor: "pointer",
          fontSize: "14px",
        }}
      >
        {pageMessage.content}
      </FormMessage>
      <Fade in={userInsuranceData.length > 0} unmountOnExit>
        <Stack>
          <AccountCard
            titleIcon={<AccountCircleOutlined />}
            title="Insurance Document"
            // OnEditClicked={OnEditClicked}
            sx={{ px: 3, py: 5 }}
            actionContent={
              isDesktop ? (
                <StyledButton
                  mode="primary"
                  size="small"
                  className={styles.addButton}
                  disabled={openNewInsuranceForm}
                  data-testid={INSURANCE_TEST_ID.addButton}
                  onClick={OnAddNewInsurance}
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
            <Collapse in={isEditing}>
              <Box>
                <InsuranceForm
                  testIds={INSURANCE_TEST_ID}
                  formData={editForm}
                  OnSaveClicked={OnEditInsurance}
                  OnCancelClicked={() => {
                    setIsEditing(false);
                  }}
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
                    >
                      <Stack spacing={1} direction="row" alignItems="center">
                        <Typography variant="h4">New Insurance</Typography>
                      </Stack>
                    </AccordionSummary>
                    <AccordionDetails>
                      <InsuranceForm
                        testIds={INSURANCE_TEST_ID}
                        OnSaveClicked={OnCreateInsurance}
                        OnCancelClicked={() => {
                          setOpenNewInsuranceForm(false);
                        }}
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
            insuranceData={userInsuranceData}
            OnCreateInsurance={OnCreateInsurance}
          />
        </Box>
      </Fade>

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
        <DialogTitle sx={{ color: "#003B4A", fontSize: "22px" }}>
          Remove Insurance
        </DialogTitle>
        <DialogContent sx={{ color: "#6C757D" }}>
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
