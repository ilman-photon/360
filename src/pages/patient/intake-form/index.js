import {
  Box,
  Stack,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import FormMessage from "../../../components/molecules/FormMessage/formMessage";
import PrescriptionLayout from "../../../components/templates/prescriptionLayout";
import {
  DEFAULT_AUTHORIZATION_TO_DISCLOSE,
  DEFAULT_CONSENT_TO_TREATMENT,
  DEFAULT_CONSTENT_TO_TREAT,
  DEFAULT_CONSTENT_TO_USE,
  DEFAULT_CONTACT_LENS,
  DEFAULT_INSURANCE_COMMUNICATION,
  DEFAULT_MEDICATION_VISION_EXAM,
  setDefaultDataKey,
  setDefaultDataValue,
  setIntakeFormData,
  setShowPostmessage,
} from "../../../store/document";
import store from "../../../store/store";
import styles from "./styles.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import moment from "moment";
import { isAdminUser } from "../../../utils/authetication";
import { Api } from "../../api/api";
import Image from "next/image";
import { a11yProps } from "../../../components/molecules/FilterResultContainer/filterResultContainer";
import { colors } from "../../../styles/theme";
import { fetchSource } from "../../../utils/fetchDigitalAssetSource";

export function renderPostMessage(showMessage, messageTitle, callback) {
  return showMessage ? (
    <Stack
      position={"absolute"}
      width={"100%"}
      left={0}
      zIndex={10}
      sx={{
        top: "180px",
        "@media (max-width: 767px)": {
          top: "120px",
        },
      }}
    >
      <FormMessage
        success={true}
        sx={{
          margin: "20px 10px 10px 10px",
          paddingRight: "30px",
          alignSelf: "center",
          position: "relative",
          minWidth: "628px",
          "@media (max-width: 767px)": {
            minWidth: "0",
          },
        }}
      >
        <Stack direction={"row"}>
          <Typography className={styles.formMessageText}>
            {messageTitle}
          </Typography>
          <CloseIcon
            className={styles.closeImage}
            tabIndex={"0"}
            onClick={callback}
          ></CloseIcon>
        </Stack>
      </FormMessage>
    </Stack>
  ) : (
    <></>
  );
}
export default function IntakeFormPage() {
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const showPostmessage = useSelector(
    (state) => state.document.showPostmessage
  );
  const dispatch = useDispatch();

  const [isAdmin, setIsAdmin] = useState(false);
  const [document, setDocument] = useState([]);
  const [submitedDocument, setSubmitedDocument] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  function handleChange(_event, newValue) {
    setActiveTab(newValue);
  }

  function parseJsonData(data) {
    try {
      return JSON.parse(data);
    } catch (e) {
      return data;
    }
  }

  function onCallGetFormContent() {
    const api = new Api();
    api
      .getformContent()
      .then(function (response) {
        if (response && response.length > 0) {
          const documentData = response.map((v) => ({
            ...v,
            formDocument: v.formDocument ? parseJsonData(v.formDocument) : "",
          }));
          setDocument(documentData);
        }
      })
      .catch(function () {
        //Handle error getAllAppointment
      });
  }

  function mappingSubmitedFormData(tempData) {
    const submitedForm = [];
    tempData.forEach((element) => {
      const name = element.name?.split(".pdf") || [""];
      const detailData = document.find(
        (item) => item.title.indexOf(name[0]) >= 0
      );
      if (detailData) {
        submitedForm.push({
          ...detailData,
          digitalAssetId: element.digital_assets?._id || "",
          submitDate: new moment(element._created).format("MM/DD/YYYY"),
        });
      }
    });
    return submitedForm;
  }

  function onCallGetSubmitedForm() {
    const api = new Api();
    api
      .getSubmittedFormData()
      .then(function (response) {
        if (response && response?.entities.length > 0) {
          let tempData = [];
          response?.entities.forEach((element) => {
            const duplicateIndex = tempData.findIndex(
              (item) => item.name === element.name
            );
            if (duplicateIndex != -1) {
              const date = new Date(tempData[duplicateIndex]._created);
              const differentDate = new Date(element._created);
              if (differentDate.getTime() >= date.getTime()) {
                tempData[duplicateIndex] = element;
              }
            } else {
              tempData.push(element);
            }
          });
          setSubmitedDocument(mappingSubmitedFormData(tempData));
        }
      })
      .catch(function () {
        //Handle error getAllAppointment
      });
  }

  useEffect(() => {
    setIsAdmin(isAdminUser());
    onCallGetFormContent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (document.length > 0 && !isAdmin) {
      onCallGetSubmitedForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [document]);

  useEffect(() => {
    if (showPostmessage && showPostmessage.isShow) {
      setTimeout(() => {
        dispatch(setShowPostmessage({ isShow: false, message: "" }));
      }, 5000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showPostmessage]);

  useEffect(() => {
    if (isAdmin && isMobile) {
      router.replace("/patient");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAdmin]);

  function validateValue(condition, expect) {
    return condition ? expect : "";
  }

  function navigateToDocument(data) {
    let defaultData = {};
    let defaultDataKey = [];
    const title = data.title;
    const formDocument = data.formDocument;
    const userProfile = JSON.parse(localStorage.getItem("userProfile"));
    const currentDate = new moment().format("MM/DD/YYYY");
    const patientName = userProfile
      ? `${userProfile.firstName} ${userProfile.lastName}`
      : "";
    const patientDOB = userProfile ? `${userProfile.dob}` : null;
    const validateFormDocument = formDocument && formDocument.length > 0;
    if (title.indexOf("Assignment of Benefits") > -1) {
      defaultData = {
        ...DEFAULT_CONSTENT_TO_TREAT,
        textInfo: validateValue(
          validateFormDocument,
          formDocument[0]?.textValue
        ),
        dob: patientDOB,
        patientName: patientName,
        signDate: currentDate,
      };
    } else if (title.indexOf("Medical vs Vision") > -1) {
      defaultData = {
        ...DEFAULT_MEDICATION_VISION_EXAM,
        textInfo: validateValue(
          validateFormDocument,
          formDocument[0]?.textValue
        ),
        signDate: currentDate,
      };
    } else if (title.indexOf("Insurance Communication") > -1) {
      defaultData = {
        ...DEFAULT_INSURANCE_COMMUNICATION,
        textInfo: validateValue(
          validateFormDocument,
          formDocument[0]?.textValue
        ),
        textInfo2: validateValue(
          validateFormDocument,
          formDocument[1]?.textValue
        ),
      };
    } else if (title.indexOf("Contact Lens Prescription") > -1) {
      defaultData = {
        ...DEFAULT_CONTACT_LENS,
        textInfo: validateValue(
          validateFormDocument,
          formDocument[0]?.textValue
        ),
        signDate: currentDate,
      };
    } else if (title.indexOf("Authorization to Disclose") > -1) {
      defaultData = {
        ...DEFAULT_AUTHORIZATION_TO_DISCLOSE,
        textInfo: validateValue(
          validateFormDocument,
          formDocument[0]?.textValue
        ),
        signDate: currentDate,
      };
    } else if (title.indexOf("Consent to Use") > -1) {
      defaultData = {
        ...DEFAULT_CONSTENT_TO_USE,
        textInfo: validateValue(
          validateFormDocument,
          formDocument[0]?.textValue
        ),
        textInfo2: validateValue(
          validateFormDocument,
          formDocument[1]?.textValue
        ),
        textInfo3: validateValue(
          validateFormDocument,
          formDocument[2]?.textValue
        ),
        textInfo4: validateValue(
          validateFormDocument,
          formDocument[3]?.textValue
        ),
        textInfo5: validateValue(
          validateFormDocument,
          formDocument[4]?.textValue
        ),
        textInfo6: validateValue(
          validateFormDocument,
          formDocument[5]?.textValue
        ),
        patientName: patientName,
        patientDOB: patientDOB,
        signDate: currentDate,
        signOptionalDate: currentDate,
      };
      if (title.indexOf("V3") == -1) {
        defaultData = {
          ...defaultData,
          signCommunicationDate: currentDate,
        };
      }
    } else if (title.indexOf("Consent to Treat") > -1) {
      defaultData = {
        ...DEFAULT_CONSENT_TO_TREATMENT,
        patientName: patientName,
        patientName2: patientName,
        signDate: currentDate,
      };
    } else if (title.indexOf("Notice of Privacy") > -1) {
      defaultData = {
        digitalAssetId: data.digitalAssetId,
      };
    }

    defaultDataKey = Object.keys(defaultData);
    dispatch(setDefaultDataKey(defaultDataKey));
    dispatch(setDefaultDataValue(defaultData));
    dispatch(setIntakeFormData(data));
    router.push(`/patient/document?title=${title}`);
  }

  function onDownloadDigitalAsset(id) {
    //TO DO: will call service to download the digital asset
    fetchSource(id);
  }

  const handleNavigateToDocument = ({ item, isSubmit }) => {
    if (!isSubmit) {
      navigateToDocument({ ...item, isSubmit });
    }
  };

  function renderFormBox(idx, item, isSubmit) {
    if (isAdmin && item.title.indexOf("Treat Minor") > -1) {
      return <></>;
    }
    return (
      <>
        <Box
          key={idx}
          data-testid={`intakeFormDoc${idx}`}
          sx={{
            background: "#E7EFF0",
            border: "1px solid #003B4A",
            borderRadius: "4px",
            margin: "16px 0 0 0",
            padding: "16px",
            cursor: !isSubmit ? "pointer" : "inher",
            position: "relative",
          }}
        >
          <Stack
            direction={"row"}
            sx={{
              justifyContent: "space-between",
            }}
          >
            {isSubmit ? (
              <CheckCircleIcon
                sx={{
                  color: "#168845",
                  width: "20px",
                  height: "20px",
                  marginRight: "10px",
                  alignSelf: "center",
                }}
              />
            ) : (
              <></>
            )}
            <Typography
              sx={{
                fontFamily: "Museo Sans, sans-serif",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "22px",
                lineHeight: "32px",
                color: "#003B4A",
                width: isSubmit ? "55%" : "90%",
              }}
              onClick={() => handleNavigateToDocument({ item, isSubmit })}
              role={"link"}
              tabIndex={0}
            >
              {item.title}
            </Typography>
            {!isAdmin && (
              <Stack direction={"row"}>
                {item.submitDate && (
                  <Typography
                    sx={{
                      fontFamily: "Arial, sans-serif",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "14px",
                      lineHeight: "22px",
                      color: "#003B4A",
                      marginRight: "10px",
                      alignSelf: "center",
                    }}
                    onClick={() => handleNavigateToDocument({ item, isSubmit })}
                    tabIndex={0}
                  >
                    {`Submitted ${item.submitDate}`}
                  </Typography>
                )}
                <Box
                  sx={{
                    width: "30px",
                    height: "30px",
                    padding: "5px",
                    cursor: "pointer",
                    margin: "auto 0",
                  }}
                  tabIndex={0}
                  aria-label="download"
                  role="button"
                  onClick={() => {
                    onDownloadDigitalAsset(item.digitalAssetId);
                  }}
                  data-testid={`download-button-${idx}`}
                >
                  <Image
                    alt=""
                    src={"/icon-download.png"}
                    width={30}
                    height={30}
                  />
                </Box>
              </Stack>
            )}
          </Stack>

          {item?.description && (
            <Typography
              sx={{
                fontFamily: '"Museo Sans", sans-serif',
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: "0.0016em",
                color: "#292929",
              }}
              onClick={() => handleNavigateToDocument({ item, isSubmit })}
              tabIndex={0}
            >
              {item.description}
            </Typography>
          )}
        </Box>
      </>
    );
  }

  function renderFormList(documentList, isSubmit = false) {
    let firstHalf = [];
    let secondHalf = [];
    const tempDocumentList = [...documentList];
    if (documentList && documentList.length > 0) {
      const middleIndex = Math.ceil(tempDocumentList.length / 2);
      firstHalf = tempDocumentList.splice(0, middleIndex);
      secondHalf = tempDocumentList.splice(-middleIndex);
    }

    return (
      <Grid
        container
        spacing={2}
        sx={{
          margin: "0px",
        }}
        data-testid={
          isSubmit ? "submit-form-container" : "intake-form-container"
        }
        className={styles.containerItem}
      >
        <Grid
          item
          xs={12}
          lg={5}
          data-testid={`left-form-customization`}
          className={styles.containerLeft}
        >
          {firstHalf.map((item, idx) => {
            return renderFormBox(`left-${idx}`, item, isSubmit);
          })}
        </Grid>
        <Grid
          item
          xs={12}
          lg={5}
          data-testid={`right-form-customization`}
          className={styles.containerLeft}
        >
          {secondHalf.map((item, idx) => {
            return renderFormBox(`right-${idx}`, item, isSubmit);
          })}
        </Grid>
      </Grid>
    );
  }

  function onRenderAdminUI() {
    return renderFormList(document);
  }

  const contentPrescription = (index) => {
    switch (index) {
      case 0:
        return renderFormList(document);
      case 1:
        return renderFormList(submitedDocument, true);
      default:
        return <></>;
    }
  };

  function onRenderUserUI() {
    return (
      <>
        <Box sx={{ width: "100%" }} className={styles.containerForm}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              sx={{
                color: "#9E9E9E",
                ".MuiButtonBase-root.Mui-selected": {
                  color: "#003B4A",
                  fontWeight: "500",
                },
                ".MuiButtonBase-root": {
                  textTransform: "capitalize",
                  color: "#424747",
                  fontFamily: "'Museo Sans', sans-serif",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "22px",
                  width: "200px",
                },
              }}
              value={activeTab}
              onChange={handleChange}
              className={styles.tabsStyle}
              TabIndicatorProps={{
                style: {
                  backgroundColor: colors.teal,
                  height: "5px",
                },
              }}
            >
              <Tab
                value={0}
                label="All Forms"
                {...a11yProps(0)}
                tabIndex={0}
                data-testid={"all-forms-intake"}
              />
              <Tab
                value={1}
                label="Submitted forms"
                {...a11yProps(1)}
                tabIndex={0}
                data-testid={"submitted-forms-intake"}
              />
            </Tabs>
          </Box>
          {contentPrescription(activeTab)}
        </Box>
      </>
    );
  }

  return (
    <Stack sx={{ width: "100%", backgroundColor: "#F4F4F4" }}>
      {renderPostMessage(
        showPostmessage?.isShow,
        `${showPostmessage?.message} was successfully saved`,
        () => {
          dispatch(setShowPostmessage({ isShow: false, message: "" }));
        }
      )}
      <Stack
        sx={{
          padding: isMobile ? "16px" : "24px 24px 24px 24px",
          marginBottom: "32px",
          maxWidth: "1440px",
          backgroundColor: isMobile ? "#F4F4F4" : "#fff",
          alignSelf: "center",
          width: "100%",
        }}
      >
        {isAdmin ? onRenderAdminUI() : onRenderUserUI()}
      </Stack>
      {/* )} */}
    </Stack>
  );
}

IntakeFormPage.getLayout = function getLayout(page) {
  return (
    <Provider store={store}>
      <PrescriptionLayout
        currentActivePage={"intake-form"}
        pageTitle={"EyeCare Patient Portal - Intake Form"}
        title={isAdminUser() ? "Forms Customization" : "Intake Forms"}
        isAdmin={isAdminUser()}
      >
        {page}
      </PrescriptionLayout>
    </Provider>
  );
};
