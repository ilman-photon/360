import {
  Box,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Provider, useDispatch, useSelector } from "react-redux";
import { StyledButton } from "../../../components/atoms/Button/button";
import DocumentLayout from "../../../components/templates/documentLayout";
import store from "../../../store/store";
import styles from "./styles.module.scss";
import EditIcon from "@mui/icons-material/Edit";
import ConstentToTreat from "../../../components/organisms/Document/constentToTreat";
import MedicationVisionExam from "../../../components/organisms/Document/medicationVisionExam";
import { renderPostMessage } from "../intake-form";
import {
  resetIntakeFormData,
  setDefaultDataValue,
  setShowPostmessage,
} from "../../../store/document";
import InsuranceCommunication from "../../../components/organisms/Document/insuranceCommunication";
import ContactLens from "../../../components/organisms/Document/contactLens";
import AuthorizationToDisclose from "../../../components/organisms/Document/authorizationToDisclose";
import ConsentToUse from "../../../components/organisms/Document/constentToUse";
import ConsentToTreatment from "../../../components/organisms/Document/consentToTreatment";
import { isAdminUser } from "../../../utils/authetication";
import NoticeOfPrivacy from "../../../components/organisms/Document/noticeOfPrivacy";
import { Api } from "../../api/api";
import Image from "next/image";
import { fetchSource } from "../../../utils/fetchDigitalAssetSource";
import { drawDOM, exportPDF } from "@progress/kendo-drawing";
import DigitalAssetsHandler from "../../../utils/digitalAssetsHandler";
import moment from "moment";
import PrintDocumentForm from "../../../components/organisms/Document/printDocumentForm";

export async function getServerSideProps({ query }) {
  return {
    props: {
      title: query ? query.title : "",
    },
  };
}

export default function DocumentPage({ title }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [showDialog, setShowDialog] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isUploadPDf, setIsUploadPDf] = useState(false);
  const [submitValue, setSubmitValue] = useState({});
  const [hideButtonMenu, setHideButtonMenu] = useState(false);
  const [tempSubmitData, setTempSubmitData] = useState({});
  const defaultDataValue = useSelector(
    (state) => state.document.defaultDataValue
  );
  const defaultDataKey = useSelector((state) => state.document.defaultDataKey);
  const { handleSubmit, control, reset, watch } = useForm({
    defaultValues: defaultDataValue,
  });
  const intakeFormData = useSelector((state) => state.document.intakeFormData);
  const containerRef = React.useRef(null);
  const digitalAsset = new DigitalAssetsHandler();

  useEffect(() => {
    setIsAdmin(isAdminUser());
    if (title?.indexOf("Notice of Privacy") > -1) {
      setHideButtonMenu(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    reset(defaultDataValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isUploadPDf) {
      exportPDFWithMethod();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUploadPDf]);

  const uploadPDF = async (file) => {
    try {
      digitalAsset.setFile(file);
      await digitalAsset.upload();
      if (digitalAsset.status === "success") {
        if (isAdmin) {
          const postbody = {
            title: intakeFormData.title,
            description: intakeFormData.description || "",
            formDocument: constarctFormDocument(tempSubmitData),
            digitalAssetId: digitalAsset.source?._id || "",
          };
          onCallEditFormContent(postbody, tempSubmitData);
        } else {
          onCallCreatePatientDocument(digitalAsset);
        }
      }
    } catch (error) {
      setIsUploadPDf(false);
    }
  };

  function onCallCreatePatientDocument(digitalAsset) {
    const userData = JSON.parse(localStorage.getItem("userData"));
    const postBody = {
      name: digitalAsset.source.name,
      documentType: "application/pdf",
      category: "FORM CUSTOMIZATION",
      portalStatus: "Published",
      eSigned: true,
      eSignedBy: userData?.patientId,
      eSignedDate: new moment().format("MMM DD, YYYY hh:mm:ss A"),
      digital_assets: {
        _id: digitalAsset.source._id,
      },
    };
    const api = new Api();
    return api
      .createPatientDocument([postBody])
      .then(function () {
        dispatch(setShowPostmessage(true));
        router.push(`/patient/intake-form`);
      })
      .catch(() => {
        setIsUploadPDf(false);
      });
  }

  function exportPDFWithMethod() {
    const element = containerRef.current;
    drawDOM(element, {
      paperSize: "A4",
    })
      .then((group) => {
        return exportPDF(group, {
          paperSize: "A4",
          margin: 40,
          fileName: title.substring(0, 45),
        });
      })
      .then(async (dataUri) => {
        const pdfstr = await fetch(dataUri);
        const blobFromFetch = await pdfstr.blob();
        const blob = new Blob([blobFromFetch], { type: "application/pdf" });
        const file = new File([blob], `${title.substring(0, 45)}.pdf`, {
          type: "application/pdf",
        });
        uploadPDF(file);
      });
  }

  function onSubmit(data) {
    if (isAdmin) {
      setTempSubmitData(data);
    }
    setIsUploadPDf(true);
    setSubmitValue(data);
  }

  function onCallEditFormContent(postdata, data) {
    const api = new Api();
    api
      .editformContent(postdata)
      .then(function (response) {
        setIsEdit(false);
        setShowMessage(true);
        setTimeout(() => {
          setShowMessage(false);
        }, 2000);
        dispatch(setDefaultDataValue(data));
        dispatch(resetIntakeFormData());
      })
      .catch(function () {
        //Handle error
      })
      .finally(function () {
        setIsUploadPDf(false);
        setTempSubmitData({});
      });
  }

  function constarctFormDocument(data) {
    const formData = [];
    for (const [key, value] of Object.entries(data)) {
      if (key.indexOf("textInfo") > -1) {
        formData.push({ textValue: value });
      }
    }
    return JSON.stringify(formData);
  }

  const watchData = watch([...defaultDataKey]);

  function validateChangeForm(callback) {
    let isChanges = false;
    for (const [index, [key, value]] of Object.entries(
      Object.entries(defaultDataValue)
    )) {
      if (value !== watchData[index]) {
        isChanges = true;
        break;
      }
    }

    if (isChanges) {
      setShowDialog(true);
    } else {
      callback();
    }
  }

  function renderDocumentComponent() {
    //Add condition to show component for each document
    if (title?.indexOf("Assignment of Benefits") > -1) {
      return (
        <ConstentToTreat
          defaultDataValue={defaultDataValue}
          useFormProps={{ handleSubmit, control }}
          disableInput={isAdmin}
          isEdit={isEdit}
          isSubmitForm={intakeFormData.isSubmit}
        />
      );
    } else if (title?.indexOf("Medical vs Vision") > -1) {
      return (
        <MedicationVisionExam
          defaultDataValue={defaultDataValue}
          useFormProps={{ handleSubmit, control }}
          disableInput={isAdmin}
          isEdit={isEdit}
          isSubmitForm={intakeFormData.isSubmit}
        />
      );
    } else if (title?.indexOf("Insurance Communication") > -1) {
      return (
        <InsuranceCommunication
          defaultDataValue={defaultDataValue}
          useFormProps={{ handleSubmit, control }}
          disableInput={isAdmin}
          isEdit={isEdit}
          isSubmitForm={intakeFormData.isSubmit}
        />
      );
    } else if (title?.indexOf("Contact Lens Prescription") > -1) {
      return (
        <ContactLens
          defaultDataValue={defaultDataValue}
          useFormProps={{ handleSubmit, control }}
          disableInput={isAdmin}
          isEdit={isEdit}
          isSubmitForm={intakeFormData.isSubmit}
        />
      );
    } else if (title?.indexOf("Authorization to Disclose") > -1) {
      return (
        <AuthorizationToDisclose
          defaultDataValue={defaultDataValue}
          useFormProps={{ handleSubmit, control }}
          disableInput={isAdmin}
          isEdit={isEdit}
          isSubmitForm={intakeFormData.isSubmit}
        />
      );
    } else if (title?.indexOf("Consent to Use") > -1) {
      return (
        <ConsentToUse
          defaultDataValue={defaultDataValue}
          useFormProps={{ handleSubmit, control }}
          disableInput={isAdmin}
          isEdit={isEdit}
          isSubmitForm={intakeFormData.isSubmit}
          isNewForm={title?.indexOf("V3") > -1}
        />
      );
    } else if (title?.indexOf("Consent to Treat") > -1) {
      return (
        <ConsentToTreatment
          defaultDataValue={defaultDataValue}
          disableInput={isAdmin}
          useFormProps={{ handleSubmit, control }}
          isEdit={isEdit}
          isSubmitForm={intakeFormData.isSubmit}
        />
      );
    } else if (title?.indexOf("Notice of Privacy") > -1) {
      return <NoticeOfPrivacy defaultDataValue={defaultDataValue} />;
    }
    return <></>;
  }

  function onClickBackBtn() {
    validateChangeForm(() => {
      router.push(`/patient/intake-form`);
    });
  }

  function onClickCancelBtn() {
    setShowDialog(false);
  }

  function onClickEditButton() {
    setIsEdit(true);
  }

  function onClickCancelEdit() {
    validateChangeForm(() => {
      reset(defaultDataValue);
      setIsEdit(false);
    });
  }

  function onClickConfirmBtn() {
    //Handle confirm dialog
    if (isEdit) {
      setShowDialog(false);
      reset(defaultDataValue);
      setIsEdit(false);
    } else {
      router.push(`/patient/intake-form`);
    }
  }

  const handleAssetDownload = (id) => {
    fetchSource(id);
  };

  function renderDialogConfirmation() {
    return (
      <Dialog
        className={styles.dialogConfirmation}
        aria-labelledby="confirmaton-dialog-title"
        aria-describedby="confirmaton-dialog-description"
        open={showDialog}
        sx={{
          ".MuiDialog-container .MuiPaper-root": {
            marginTop: "70px",
            marginBottom: "auto",
          },
        }}
      >
        <DialogTitle
          sx={{
            padding: "16px 16px 5px 16px",
            height: "51px",
          }}
        >
          <Typography className={styles.dialogTitle}>
            Unsaved Changes
          </Typography>
        </DialogTitle>
        <DialogContent
          className={styles.dialogContent}
          style={{ padding: "16px" }}
          aria-live={"assertive"}
          sx={{
            width: "500px",
            "@media (max-width: 992px)": {
              width: "auto",
            },
          }}
        >
          <Typography className={styles.dialogTypo}>
            You have unsaved changes if you continue your changes will be lost.
          </Typography>
        </DialogContent>
        <DialogActions
          className={styles.dialogActionContainer}
          style={{ padding: "16px" }}
        >
          <Box>
            <StyledButton
              theme="patient"
              mode="secondary"
              size="small"
              gradient={false}
              data-testid="confirm-cancel-btn"
              label={"Cancel"}
              onClick={onClickCancelBtn}
              className={styles.cancelButton}
            >
              Cancel
            </StyledButton>
            <StyledButton
              theme="patient"
              size="small"
              gradient={false}
              data-testid="confirm-continue-btn"
              aria-label={"Continue and Discard"}
              className={styles.continueButton}
              onClick={onClickConfirmBtn}
            >
              Continue and Discard
            </StyledButton>
          </Box>
        </DialogActions>
      </Dialog>
    );
  }

  function renderTitleCTAButton() {
    if (hideButtonMenu) {
      return <></>;
    }

    if (!isAdmin && intakeFormData && intakeFormData.isSubmit) {
      return (
        <>
          <Stack
            direction={"row"}
            sx={{
              marginLeft: "auto",
              marginRight: "16px",
            }}
          >
            <Typography
              className={styles.submitTxt}
              tabindex={0}
              data-testid={"submited-date-form"}
            >
              Submitted 8/22/22
            </Typography>
            <IconButton
              sx={{
                width: "30px",
                padding: "5px",
                marginLeft: "16px",
                height: "46px",
              }}
              onClick={() => {
                handleAssetDownload(intakeFormData.digital_assets?._id);
              }}
            >
              <Image alt="" src={"/icon-download.png"} width={30} height={30} />
            </IconButton>
          </Stack>
        </>
      );
    }

    if (isAdmin) {
      if (isEdit) {
        return (
          <Stack direction={"row"} className={styles.editBtnMenuContainer}>
            <StyledButton
              theme="patient"
              mode="secondary"
              size="small"
              data-testid="edit-cancel-btn"
              label={"Cancel"}
              onClick={onClickCancelEdit}
              className={styles.editBtnMenu}
            >
              Cancel
            </StyledButton>
            <StyledButton
              type="submit"
              theme="patient"
              size="small"
              data-testid="edit-save-btn"
              aria-label={"Save"}
              className={styles.editBtnMenu}
            >
              Save
            </StyledButton>
          </Stack>
        );
      } else {
        return (
          <StyledButton
            theme="patient"
            mode="primary"
            size="small"
            gradient={false}
            data-testid="edit-document-btn"
            label={"Edit Document"}
            onClick={onClickEditButton}
            className={styles.editDocumentBtn}
          >
            <EditIcon
              sx={{
                color: "#fff",
                width: "20px",
                height: "20px",
                marginRight: "10px",
                alignSelf: "center",
              }}
            />
            Edit Document
          </StyledButton>
        );
      }
    }
  }

  function renderButtomMenu() {
    if (isAdmin || hideButtonMenu) {
      return <></>;
    }

    return (
      <Stack
        width={"100%"}
        position={"fixed"}
        bottom={0}
        left={0}
        backgroundColor={"#fff"}
        zIndex={10}
      >
        <Stack
          direction={"row"}
          sx={{
            maxWidth: "1440px",
            alignSelf: "center",
            width: "100%",
            padding: "16px 0",
          }}
        >
          <StyledButton
            theme="patient"
            mode="secondary"
            size="small"
            gradient={false}
            data-testid="document-back-btn"
            tabindex="0"
            sx={{
              width: "30%",
              marginLeft: "10px",
              fontSize: "14px",
              boxShadow: "none",
              transform: "none",
              "@media (max-width: 767px)": {
                width: "50%",
              },
            }}
            onClick={onClickBackBtn}
            aria-live={"polite"}
            aria-label={"Back"}
          >
            Back
          </StyledButton>
          <StyledButton
            type="submit"
            theme="patient"
            mode="primary"
            size="small"
            gradient={false}
            sx={{
              width: "70%",
              marginLeft: "10px",
              fontSize: "14px",
              boxShadow: "none",
              transform: "none",
              marginRight: "10px",
              "@media (max-width: 767px)": {
                width: "50%",
              },
            }}
            data-testid="document-save-btn"
            // onClick={onStayLoggedIn}
            tabindex="0"
            aria-live={"polite"}
            aria-label={"Save & Continue"}
          >
            {`Save & Continue`}
          </StyledButton>
        </Stack>
      </Stack>
    );
  }

  function renderSubtitle() {
    if (isAdmin && isEdit) {
      return <Typography className={styles.subtitleTxt}>Edit Mode</Typography>;
    }
    return <></>;
  }

  return (
    <>
      {!isUploadPDf ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ marginBottom: isAdmin ? "30px" : "80px" }}
          noValidate
        >
          <Stack sx={{ width: "100%", backgroundColor: "#F4F4F4" }}>
            {/* {isLoaded && ( */}
            {renderPostMessage(
              showMessage,
              "Changes saved successfully",
              () => {
                setShowMessage(false);
              }
            )}
            {renderDialogConfirmation()}
            <Stack
              sx={{
                padding: isMobile ? "16px" : "44px 24px 24px 24px",
                maxWidth: "1440px",
                backgroundColor: "#fff",
                alignSelf: "center",
                width: "100%",
              }}
              className={styles.documentContainer}
            >
              <Box sx={{ marginBottom: isAdmin ? "30px" : "80px" }}>
                <Box className={styles.documentTitleContainer}>
                  <Typography className={styles.titleDocument} tabindex={0}>
                    {title}
                  </Typography>
                  {renderTitleCTAButton()}
                </Box>
                {renderSubtitle()}
                {renderDocumentComponent()}
              </Box>
            </Stack>
          </Stack>
          {renderButtomMenu()}
        </form>
      ) : (
        <>
          <Box
            sx={{
              backgroundColor: "#fff",
              position: "absolute",
              width: "100%",
              height: "110vh",
              zIndex: "20",
              alignSelf: "center",
              display: "flex",
            }}
          >
            <CircularProgress
              sx={{
                alignSelf: "center",
                width: "40px",
                height: "40px",
                display: "flex",
                flex: "1",
                justifyContent: "center",
              }}
            />
          </Box>
          {/* Put Document UI */}
          <Box ref={containerRef}>
            <PrintDocumentForm title={title} defaultDataValue={submitValue} />
          </Box>
        </>
      )}
    </>
  );
}

DocumentPage.getLayout = function getLayout(page) {
  return (
    <Provider store={store}>
      <DocumentLayout
        currentActivePage={"Insurance Communication"}
        backTitle="Back to Intake Forms"
        isHideHeader={true}
      >
        {page}
      </DocumentLayout>
    </Provider>
  );
};
