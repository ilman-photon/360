import { Box, Stack, Typography, Link, Button } from "@mui/material";
import styles from "./styles.module.scss";
import AppointmentButton from "../../atoms/AppointmentButton/appointmentButton";
import moment from "moment";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import DownloadIcon from "@mui/icons-material/DownloadOutlined";
import { blueGrey, grey } from "@mui/material/colors";
import Divider from "@mui/material/Divider";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Collapse from "@mui/material/Collapse";
import { savePDF } from "@progress/kendo-react-pdf";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React from "react";
import { formatPhoneNumber } from "../../../utils/phoneFormatter";

export default function DetailAppointment({ data }) {
  const container = React.useRef(null);
  const { providerInfo, patientInfo, appointmentInfo } = data;
  const date = appointmentInfo.date;
  const timezone = date.substring(date.length - 3);
  const momentDate = new moment(date);
  const formatedDate = momentDate.format("dddd, MMM DD, YYYY");
  const time = momentDate.format("h:mm A");
  const fullDate = `${formatedDate}, AT ${time} ${timezone}`;
  const listbilnagnan = [1, 2, 3, 4, 5];

  const [openAllergies, setOpenAllergies] = React.useState(true);
  const [openMedication, setMedication] = React.useState(true);
  const [openProblem, setProblem] = React.useState(true);
  const [openResultApproach, setResultApproach] = React.useState(true);
  const [openSocialHistory, setSocialHistory] = React.useState(true);
  const [openImplants, setImplants] = React.useState(true);
  const [openFunctionalStatus, setFunctionalStatus] = React.useState(true);
  const [openMentalStatus, setMentalStatus] = React.useState(true);
  const [openImmunization, setImmunization] = React.useState(true);
  const [openProcedures, setProcedures] = React.useState(true);
  const [openAssesmenets, setAssesmenets] = React.useState(true);
  const [openHealthConcerns, setHealthConcerns] = React.useState(true);
  const [openGoalSection, setGoalSection] = React.useState(true);
  const [openPlanOfTreatment, setPlanOfTreatment] = React.useState(true);
  const [openReasonReferal, setReasonReferal] = React.useState(true);
  const [openIntervention, setIntervention] = React.useState(true);
  const [openEncounter, setEncounter] = React.useState(true);
  const [openResults, setOpenResults] = React.useState(true);
  const [openVital, setOpenVitals] = React.useState(true);
  const [isDownload, setIsDownload] = React.useState(false);
  const [alergyHead, setAlergyHead] = React.useState();
  const handleMedication = () => {
    setMedication(!openMedication);
  };
  const handleProblem = () => {
    setProblem(!openProblem);
  };
  const handleResultApproach = () => {
    setResultApproach(!openResultApproach);
  };
  const handleSocialHistory = () => {
    setSocialHistory(!openSocialHistory);
  };
  const handleImplants = () => {
    setImplants(!openImplants);
  };
  const handleFunction = () => {
    setFunctionalStatus(!openFunctionalStatus);
  };
  const handleProcedur = () => {
    setProcedures(!openProcedures);
  };
  const handleAssesment = () => {
    setAssesmenets(!openAssesmenets);
  };
  const handleHealthConcerns = () => {
    setHealthConcerns(!openHealthConcerns);
  };
  const handlGoalSection = () => {
    setGoalSection(!openGoalSection);
  };
  const handlePlantofTreatment = () => {
    setPlanOfTreatment(!openPlanOfTreatment);
  };
  const handleReasonReveral = () => {
    setReasonReferal(!openReasonReferal);
  };
  const handleIntervention = () => {
    setIntervention(!openIntervention);
  };
  const handleMental = () => {
    setMentalStatus(!openMentalStatus);
  };
  const handleEncounter = () => {
    setEncounter(!openEncounter);
  };
  const handleImmunization = () => {
    setImmunization(!openImmunization);
  };
  const handleClickResult = () => {
    setOpenResults(!openResults);
  };
  const handleVital = () => {
    setOpenVitals(!openVital);
  };
  const handleClickAllergies = () => {
    setOpenAllergies(!openAllergies);
  };
  const handleClick = () => {
    setOpenAllergies((prevState) => !prevState);
    setOpenResults((prevState) => !prevState);
    setOpenVitals((prevState) => !prevState);
    setMedication((prevState) => !prevState);
    setProblem((prevState) => !prevState);
    setSocialHistory((prevState) => !prevState);
    setImplants((prevState) => !prevState);
    setFunctionalStatus((prevState) => !prevState);
    setMentalStatus((prevState) => !prevState);
    setImmunization((prevState) => !prevState);
    setProcedures((prevState) => !prevState);
    setAssesmenets((prevState) => !prevState);
    setHealthConcerns((prevState) => !prevState);
    setGoalSection((prevState) => !prevState);
    setPlanOfTreatment((prevState) => !prevState);
    setReasonReferal((prevState) => !prevState);
    setIntervention((prevState) => !prevState);
    setEncounter((prevState) => !prevState);
  };
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const downloadPDF = () => {
    let element = container.current || document.body;
    savePDF(
      element,
      {
        paperSize: "auto",
        margin: 40,
        fileName: `Appointment Detail Don John`,
      },
      () => {
        setIsDownload(false);
      }
    );
  };
  const [
    alergies,
    medications,
    problems,
    resulstApproach,
    vital,
    socialHistory,
    implants,
    functionStatus,
    mentalStatus,
    immunizations,
    procedures,
    assessments,
    healtConcerns,
    goalSection,
    planOfTreatment,
    reasonForReferal,
    interventions,
    encounters,
  ] = appointmentInfo.contents;
  let temp = [];
  alergies.list.map((item) => {
    temp = Object.keys(item);
  });
  let tempMedication = [];
  medications.list.map((item) => {
    tempMedication = Object.keys(item);
  });
  let tempProblem = [];
  problems.list.map((item) => {
    tempProblem = Object.keys(item);
  });
  let tempVital = [];

  vital.list.map((item) => {
    tempVital = Object.keys(item);
  });
  let tempresult = [];
  resulstApproach.list.map((item) => {
    tempresult = Object.keys(item);
  });
  let tempSocialHistory = [];
  socialHistory.list.map((item) => {
    tempSocialHistory = Object.keys(item);
  });
  let tempImplants = [];
  implants.list.map((item) => {
    tempImplants = Object.keys(item);
  });
  let tempFunctionStatus = [];
  functionStatus.list.map((item) => {
    tempFunctionStatus = Object.keys(item);
  });
  let tempMentalStatus = [];
  mentalStatus.list.map((item) => {
    tempMentalStatus = Object.keys(item);
  });
  let tempimmunizations = [];
  immunizations.list.map((item) => {
    tempimmunizations = Object.keys(item);
  });
  let tempProcedures = [];
  procedures.list.map((item) => {
    tempProcedures = Object.keys(item);
  });
  let tempAssessments = [];
  assessments.list.map((item) => {
    tempAssessments = Object.keys(item);
  });
  let temphealtConcerns = [];
  healtConcerns.list.map((item) => {
    temphealtConcerns = Object.keys(item);
  });

  let tempgoalSection = [];
  goalSection.list.map((item) => {
    tempgoalSection = Object.keys(item);
  });

  let tempplanOfTreatment = [];
  planOfTreatment.list.map((item) => {
    tempplanOfTreatment = Object.keys(item);
  });

  let tempreasonForReferal = [];
  reasonForReferal.list.map((item) => {
    tempreasonForReferal = Object.keys(item);
  });
  let tempinterventions = [];
  interventions.list.map((item) => {
    tempinterventions = Object.keys(item);
  });
  let tempencouter = [];
  encounters.list.map((item) => {
    tempencouter = Object.keys(item);
  });
  return (
    <Box className={styles.upcomingAppointments} ref={container}>
      <Stack spacing={{ xs: 2, lg: 3.5 }}>
        <Typography
          tabIndex={0}
          aria-label={"Appointment Details heading"}
          variant="h2"
          className={styles.title}
        >
          Appointment Detail
        </Typography>
        <Box className={styles.dateContainer}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Typography variant="h4" tabIndex={0} aria-label={fullDate}>
                {fullDate}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Box
                display={"flex"}
                justifyContent="flex-end"
                alignItems={"center"}
                flexDirection={"row"}
              >
                <Link
                  className={styles.link}
                  tabIndex={0}
                  aria-label={"Download Option"}
                  sx={{
                    display: isDownload ? "none" : "flex",
                    alignContent: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    handleClick();
                    setIsDownload(true);
                    setTimeout(() => {
                      downloadPDF();
                    }, 200);
                  }}
                >
                  <DownloadIcon sx={{ color: blueGrey[200] }} />
                  <Typography variant="body2">Download</Typography>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ p: 2, backgroundColor: grey[50] }}>
          <Box
            className={styles.dateContainer}
            sx={{ p: 2, backgroundColor: "white" }}
          >
            <Typography
              tabIndex={0}
              aria-label={`Visit Purpose: ${appointmentInfo.appointmentType}`}
              variant="h4"
              className={styles.mb36}
            >
              {`Visit Purpose: ${appointmentInfo.appointmentType}`}
            </Typography>
            <Grid container spacing={2} sx={{ p: 1 }}>
              <Grid item xs={4}>
                <Typography
                  tabIndex={0}
                  aria-label={providerInfo.name}
                  variant="h4"
                >
                  {providerInfo.name}
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Box
                  display={"flex"}
                  justifyContent="flex-start"
                  alignItems={"center"}
                  flexDirection={"row"}
                >
                  <Typography tabIndex={0} aria-label={"Patient"} variant="h4">
                    Patient :
                  </Typography>
                  <Typography
                    tabIndex={0}
                    aria-label={patientInfo.name}
                    aria-live={patientInfo.name}
                    variant="regularDarkGreen"
                    sx={{ pl: 0.5 }}
                  >
                    {patientInfo.name}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Divider />
            <Grid container spacing={2} sx={{ p: 1 }}>
              <Grid item xs={4} sx={{ p: 1 }}>
                <Typography tabIndex={0} variant="h4" className={styles.mb14}>
                  Location
                </Typography>
                <Typography
                  tabIndex={0}
                  aria-label={providerInfo.position}
                  variant="mediumDarkGreen"
                  className={styles.mb36}
                >
                  {providerInfo.position}
                </Typography>
                <Typography
                  variant="regularDarkGreen"
                  tabIndex={0}
                  component={"div"}
                  sx={{ pt: 1 }}
                >
                  {providerInfo.address.addressLine1}
                  <br />
                  {providerInfo.address.addressLine2}
                  {providerInfo.address.addressLine2 && <br />}
                  {providerInfo.address.city}, {providerInfo.address.state},{" "}
                  {providerInfo.address.zipcode}
                </Typography>
                <Link
                  tabIndex={0}
                  ariaLabel={formatPhoneNumber(providerInfo.phoneNumber)}
                  sx={{
                    color: "teal",
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "flex-start",
                    pt: 1,
                  }}
                >
                  <Typography
                    variant="body2"
                    className={styles.getDirectionLinkText}
                  >
                    {formatPhoneNumber(providerInfo.phoneNumber)}
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs={8}>
                <Box
                  display={"flex"}
                  justifyContent="flex-start"
                  alignItems={"center"}
                  flexDirection={"row"}
                >
                  <Typography
                    tabIndex={0}
                    ariaLabel={"Insurance"}
                    ariaLive={"Insurance"}
                    variant="h4"
                    className={styles.mb14}
                  >
                    Insurance
                  </Typography>
                </Box>
                {appointmentInfo.insuranceCarrier.map((insurance, index) => (
                  <Box
                    key={index.toString()}
                    display={"flex"}
                    justifyContent="flex-start"
                    alignItems={"center"}
                    flexDirection={"row"}
                    sx={{ pb: 1 }}
                  >
                    <Typography
                      tabIndex={0}
                      ariaLabel={insurance}
                      variant="regularDarkGreen"
                    >
                      {insurance}
                    </Typography>
                  </Box>
                ))}
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ p: 2, pb: 0, backgroundColor: grey[50] }}>
            <Typography
              tabIndex={0}
              aria-Label={"Documentation of"}
              variant="h3"
              className={styles.mb14}
            >
              Documentation of
            </Typography>
            <Typography
              tabIndex={0}
              aria-label={appointmentInfo.documentation.name}
              variant="body1"
              className={styles.mb14}
            >
              {appointmentInfo.documentation.name}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(4, .5fr)",
              gap: 1,
              gridTemplateRows: "auto",
              p: 2,
            }}
          >
            {appointmentInfo.documentation.list.map((documentation, index) => (
              <Box
                tabIndex={0}
                ariaLabel={documentation.name}
                key={index.toString()}
              >
                <strong>{documentation.name}</strong> {documentation.value}
              </Box>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            p: 2,
            backgroundColor: "white",
          }}
        >
          <Box
            className={styles.buttonContainer}
            sx={{
              display: isDownload ? "none !important" : "flex",
              justifyContent: "center",
              p: 2,
            }}
            onClick={handleClick}
          >
            <AppointmentButton>
              Collapse All <ExpandMoreIcon />
            </AppointmentButton>
          </Box>

          {/**Allergies*/}
          <Box>
            <Box
              className={styles.accordionContainer}
              onClick={() => handleClickAllergies()}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  paddingLeft: "16px",
                }}
              >
                <Typography
                  tabIndex={0}
                  aria-label={"Allergies heading"}
                  variant="h4"
                >
                  {alergies.type}
                </Typography>
              </Box>
              <Box
                tabIndex={0}
                aria-label={"Collapse option"}
                ariaExpanded={openAllergies ? "true" : "false"}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                  mr: 3,
                }}
              >
                {openAllergies ? (
                  <ExpandMoreIcon aria-expanded="true" />
                ) : (
                  <ExpandLessIcon tabIndex={0} aria-expanded="false" />
                )}
              </Box>
            </Box>
            <Collapse in={openAllergies} timeout="auto" unmountOnExit>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow key={alergies.type}>
                      {temp.map((item) => (
                        <TableCell
                          tabindex={0}
                          key={alergies.type}
                          aria-label={item}
                          component="th"
                          scope="row"
                          sx={{ textTransform: "capitalize" }}
                        >
                          {item}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {alergies.list.map((item) => (
                      <TableRow
                        key={alergies.type}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell tabindex={0} key={item.subtance}>
                          {item.subtance}
                        </TableCell>
                        <TableCell tabindex={0} key={item.code}>
                          {item.code}
                        </TableCell>
                        <TableCell tabindex={0} key={item.status}>
                          {item.status}
                        </TableCell>
                        <TableCell tabindex={0} key={item.severity}>
                          {item.severity}
                        </TableCell>
                        <TableCell tabindex={0} key={item.reaction}>
                          {item.reaction}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Collapse>
          </Box>

          {/**medication*/}
          <Box sx={{ pt: 2 }}>
            <Box
              className={styles.accordionContainer}
              onClick={() => handleMedication()}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  paddingLeft: "16px",
                }}
              >
                <Typography
                  tabIndex={0}
                  aria-label={"Medications heading"}
                  variant="h4"
                >
                  {medications.type}
                </Typography>
              </Box>
              <Box
                tabIndex={0}
                aria-label={"Collapse option"}
                ariaExpanded={openMedication ? "true" : "false"}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                  mr: 3,
                }}
              >
                {openMedication ? (
                  <ExpandMoreIcon aria-expanded="true" />
                ) : (
                  <ExpandLessIcon tabIndex={0} aria-expanded="false" />
                )}
              </Box>
            </Box>
            <Collapse in={openMedication} timeout="auto" unmountOnExit>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      {tempMedication.map((item) => (
                        <TableCell
                          key={alergies.type}
                          tabindex={0}
                          aria-label={item}
                          component="th"
                          scope="row"
                          sx={{ textTransform: "capitalize" }}
                        >
                          {item}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {medications.list.map((item) => (
                      <TableRow
                        key={alergies.type}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell tabindex={0} key={item.medication}>
                          {item.medication}
                        </TableCell>
                        <TableCell tabindex={0} key={item.code}>
                          {item.code}
                        </TableCell>
                        <TableCell tabindex={0} key={item.status}>
                          {item.route}
                        </TableCell>
                        <TableCell tabindex={0} key={item.frequency}>
                          {item.frequency}
                        </TableCell>
                        <TableCell tabindex={0} key={item.dose}>
                          {item.dose}
                        </TableCell>
                        <TableCell tabindex={0} key={item.start_date}>
                          {item.start_date}
                        </TableCell>
                        <TableCell tabindex={0} key={item.stop_date}>
                          {item.stop_date}
                        </TableCell>
                        <TableCell tabindex={0} key={item.status}>
                          {item.status}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Collapse>
          </Box>

          {/**Problem*/}
          <Box sx={{ pt: 2 }}>
            <Box
              className={styles.accordionContainer}
              onClick={() => handleProblem()}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  paddingLeft: "16px",
                }}
              >
                <Typography
                  tabIndex={0}
                  aria-label={"Problems heading"}
                  variant="h4"
                >
                  {problems.type}
                </Typography>
              </Box>
              <Box
                tabIndex={0}
                aria-label={"Collapse option"}
                ariaExpanded={openProblem ? "true" : "false"}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                  mr: 3,
                }}
              >
                {openProblem ? (
                  <ExpandMoreIcon aria-expanded="true" />
                ) : (
                  <ExpandLessIcon aria-expanded="false" />
                )}
              </Box>
            </Box>
            <Collapse in={openProblem} timeout="auto" unmountOnExit>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      {tempProblem.map((item) => (
                        <TableCell
                          key={problems.type}
                          tabindex={0}
                          aria-label={item}
                          component="th"
                          scope="row"
                          sx={{ textTransform: "capitalize" }}
                        >
                          {item}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {problems.list.map((item) => (
                      <TableRow
                        key={problems.type}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell tabindex={0} key={item.problem}>
                          {item.problem}
                        </TableCell>
                        <TableCell tabindex={0} key={item.code}>
                          {item.code}
                        </TableCell>
                        <TableCell tabindex={0} key={item.status}>
                          {item.status}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Collapse>
          </Box>

          {/**Resulst*/}
          <Box sx={{ pt: 2 }}>
            <Box className={styles.accordionContainer} onClick={handleVital}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  paddingLeft: "16px",
                }}
              >
                <Typography
                  tabIndex={0}
                  aria-label={"Result heading"}
                  variant="h4"
                >
                  {resulstApproach.type}
                </Typography>
              </Box>
              <Box
                tabIndex={0}
                aria-label={"Collapse option"}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                  mr: 3,
                }}
              >
                {openVital ? (
                  <ExpandMoreIcon aria-expanded="true" />
                ) : (
                  <ExpandLessIcon aria-expanded="false" />
                )}
              </Box>
            </Box>
            <Collapse in={openVital} timeout="auto" unmountOnExit>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      {tempresult.map((item) => (
                        <TableCell
                          key={resulstApproach.type}
                          tabindex={0}
                          aria-label={item}
                          component="th"
                          scope="row"
                          sx={{ textTransform: "capitalize" }}
                        >
                          {item}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {resulstApproach.list.map((item) => (
                      <TableRow
                        key={resulstApproach.type}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell tabindex={0} key={item.Battery}>
                          {item.battery}
                        </TableCell>
                        <TableCell tabindex={0} key={item.date}>
                          {item.date}
                        </TableCell>
                        <TableCell tabindex={0} key={item.test}>
                          {item.test}
                        </TableCell>
                        <TableCell tabindex={0} key={item.result}>
                          {item.result}
                        </TableCell>
                        <TableCell tabindex={0} key={item.result_date}>
                          {item.result_date}
                        </TableCell>
                        <TableCell tabindex={0} key={item.lab}>
                          {item.lab}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Collapse>
          </Box>

          {/**Vital Signs*/}
          <Box sx={{ pt: 2 }}>
            <Box
              className={styles.accordionContainer}
              onClick={() => handleClickResult()}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  paddingLeft: "16px",
                }}
              >
                <Typography
                  tabIndex={0}
                  aria-label={"Results heading"}
                  variant="h4"
                >
                  {vital.type}
                </Typography>
              </Box>
              <Box
                tabIndex={0}
                aria-label={"Collapse option"}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                  mr: 3,
                }}
              >
                {openResults ? (
                  <ExpandMoreIcon
                    tabindex={0}
                    aria-label={"Collapse option"}
                    aria-expanded="true"
                  />
                ) : (
                  <ExpandLessIcon
                    tabindex={0}
                    aria-label={"Collapse option"}
                    aria-expanded="false"
                  />
                )}
              </Box>
            </Box>
            <Collapse in={openResults} timeout="auto" unmountOnExit>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      {tempVital.map((item) => (
                        <TableCell
                          key={vital.type}
                          tabindex={0}
                          aria-label={item}
                          component="th"
                          scope="row"
                          sx={{ textTransform: "capitalize" }}
                        >
                          {item}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {vital.list.map((item) => (
                      <TableRow
                        key={vital.type}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell tabindex={0} key={item.date}>
                          {item.date}
                        </TableCell>
                        <TableCell tabindex={0} key={item.height}>
                          {item.height}
                        </TableCell>
                        <TableCell tabindex={0} key={item.weight}>
                          {item.weight}
                        </TableCell>
                        <TableCell tabindex={0} key={item.bmi}>
                          {item.bmi}
                        </TableCell>
                        <TableCell tabindex={0} key={item.blood_pressure}>
                          {item.blood_pressure}
                        </TableCell>
                        <TableCell tabindex={0} key={item.body_temp}>
                          {item.body_temp}
                        </TableCell>
                        <TableCell tabindex={0} key={item.pulse}>
                          {item.pulse}
                        </TableCell>
                        <TableCell tabindex={0} key={item.O2_concentration}>
                          {item.O2_concentration}
                        </TableCell>
                        <TableCell tabindex={0} key={item.Inhaled_o2}>
                          {item.Inhaled_o2}
                        </TableCell>
                        <TableCell tabindex={0} key={item.Resp_rate}>
                          {item.Resp_rate}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Collapse>
          </Box>

          {/**Social History*/}
          <Box sx={{ pt: 2 }}>
            <Box
              className={styles.accordionContainer}
              onClick={() => handleSocialHistory()}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  paddingLeft: "16px",
                }}
              >
                <Typography
                  tabIndex={0}
                  aria-label={"Social History heading"}
                  variant="h4"
                >
                  {socialHistory.type}
                </Typography>
              </Box>
              <Box
                tabIndex={0}
                aria-label={"Collapse option"}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                  mr: 3,
                }}
              >
                {openSocialHistory ? (
                  <ExpandMoreIcon aria-expanded="true" />
                ) : (
                  <ExpandLessIcon aria-expanded="false" />
                )}
              </Box>
            </Box>
            <Collapse in={openSocialHistory} timeout="auto" unmountOnExit>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      {tempSocialHistory.map((item) => (
                        <TableCell
                          key={socialHistory.type}
                          tabindex={0}
                          aria-label={item}
                          component="th"
                          scope="row"
                          sx={{ textTransform: "capitalize" }}
                        >
                          {item}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {socialHistory.list.map((item) => (
                      <TableRow
                        key={socialHistory.type}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell tabindex={0} key={item.element}>
                          {item.element}
                        </TableCell>
                        <TableCell tabindex={0} key={item.observation}>
                          {item.observation}
                        </TableCell>
                        <TableCell tabindex={0} key={item.date}>
                          {item.dates}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Collapse>
          </Box>

          {/**Implants*/}
          <Box sx={{ pt: 2 }}>
            <Box
              className={styles.accordionContainer}
              onClick={() => handleImplants()}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  paddingLeft: "16px",
                }}
              >
                <Typography
                  tabIndex={0}
                  aria-label={"Implants heading"}
                  variant="h4"
                >
                  {implants.type}
                </Typography>
              </Box>
              <Box
                tabIndex={0}
                aria-label={"Collapse option"}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                  mr: 3,
                }}
              >
                {openImplants ? (
                  <ExpandMoreIcon aria-expanded="true" />
                ) : (
                  <ExpandLessIcon aria-expanded="false" />
                )}
              </Box>
            </Box>
            <Collapse in={openImplants} timeout="auto" unmountOnExit>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      {tempImplants.map((item) => (
                        <TableCell
                          key={implants.type}
                          tabindex={0}
                          aria-label={item}
                          component="th"
                          scope="row"
                          sx={{ textTransform: "capitalize" }}
                        >
                          {item}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {implants.list.map((item) => (
                      <TableRow
                        key={implants.type}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell tabindex={0} key={item.element}>
                          {item.element}
                        </TableCell>
                        <TableCell tabindex={0} key={item.observation}>
                          {item.observation}
                        </TableCell>
                        <TableCell tabindex={0} key={item.date}>
                          {item.dates}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Collapse>
          </Box>

          {/**Function*/}
          <Box sx={{ pt: 2 }}>
            <Box
              className={styles.accordionContainer}
              onClick={() => handleFunction()}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  paddingLeft: "16px",
                }}
              >
                <Typography
                  tabIndex={0}
                  aria-label={"Functional Status heading"}
                  variant="h4"
                >
                  {functionStatus.type}
                </Typography>
              </Box>
              <Box
                tabIndex={0}
                aria-label={"Collapse option"}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                  mr: 3,
                }}
              >
                {openFunctionalStatus ? (
                  <ExpandMoreIcon aria-expanded="true" />
                ) : (
                  <ExpandLessIcon aria-expanded="false" />
                )}
              </Box>
            </Box>
            <Collapse in={openFunctionalStatus} timeout="auto" unmountOnExit>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      {tempFunctionStatus.map((item) => (
                        <TableCell
                          key={functionStatus.type}
                          tabindex={0}
                          aria-label={item}
                          component="th"
                          scope="row"
                          sx={{ textTransform: "capitalize" }}
                        >
                          {item}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {functionStatus.list.map((item) => (
                      <TableRow
                        key={functionStatus.type}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell tabindex={0} key={item.functional_finding}>
                          {item.functional_finding}
                        </TableCell>
                        <TableCell tabindex={0} key={item.observation}>
                          {item.observation}
                        </TableCell>
                        <TableCell tabindex={0} key={item.date}>
                          {item.date}
                        </TableCell>
                        <TableCell tabindex={0} key={item.status}>
                          {item.status}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Collapse>
          </Box>

          {/**Mental Status*/}
          <Box sx={{ pt: 2 }}>
            <Box
              className={styles.accordionContainer}
              onClick={() => handleMental()}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  paddingLeft: "16px",
                }}
              >
                <Typography
                  tabIndex={0}
                  aria-label={"Mental Status heading"}
                  variant="h4"
                >
                  {mentalStatus.type}
                </Typography>
              </Box>
              <Box
                tabIndex={0}
                aria-label={"Collapse option"}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                  mr: 3,
                }}
              >
                {openMentalStatus ? (
                  <ExpandMoreIcon aria-expanded="true" />
                ) : (
                  <ExpandLessIcon aria-expanded="false" />
                )}
              </Box>
            </Box>
            <Collapse in={openMentalStatus} timeout="auto" unmountOnExit>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      {tempMentalStatus.map((item) => (
                        <TableCell
                          key={mentalStatus.key}
                          tabindex={0}
                          aria-label={item}
                          component="th"
                          scope="row"
                          sx={{ textTransform: "capitalize" }}
                        >
                          {item}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {functionStatus.list.map((item) => (
                      <TableRow
                        key={mentalStatus.key}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell tabindex={0} key={item.cognitive_finding}>
                          {item.cognitive_finding}
                        </TableCell>
                        <TableCell tabindex={0} key={item.observation}>
                          {item.observation}
                        </TableCell>
                        <TableCell tabindex={0} key={item.date}>
                          {item.date}
                        </TableCell>
                        <TableCell tabindex={0} key={item.status}>
                          {item.status}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Collapse>
          </Box>

          {/**Immunizations*/}
          <Box sx={{ pt: 2 }}>
            <Box
              className={styles.accordionContainer}
              onClick={() => handleImmunization()}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  paddingLeft: "16px",
                }}
              >
                <Typography
                  tabIndex={0}
                  aria-label={"Immunizations heading"}
                  variant="h4"
                >
                  {immunizations.type}
                </Typography>
              </Box>
              <Box
                tabIndex={0}
                aria-label={"Collapse option"}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                  mr: 3,
                }}
              >
                {openImmunization ? (
                  <ExpandMoreIcon aria-expanded="true" />
                ) : (
                  <ExpandLessIcon aria-expanded="false" />
                )}
              </Box>
            </Box>
            <Collapse in={openImmunization} timeout="auto" unmountOnExit>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      {tempimmunizations.map((item) => (
                        <TableCell
                          key={immunizations.type}
                          tabindex={0}
                          aria-label={item}
                          component="th"
                          scope="row"
                          sx={{ textTransform: "capitalize" }}
                        >
                          {item}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {immunizations.list.map((item) => (
                      <TableRow
                        key={immunizations.type}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell tabindex={0} key={item.vaccine}>
                          {item.vaccine}
                        </TableCell>
                        <TableCell tabindex={0} key={item.date}>
                          {item.date}
                        </TableCell>
                        <TableCell tabindex={0} key={item.status}>
                          {item.status}
                        </TableCell>
                        <TableCell tabindex={0} key={item.notes}>
                          {item.notes}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Collapse>
          </Box>

          {/**Procedures*/}
          <Box sx={{ pt: 2 }}>
            <Box
              className={styles.accordionContainer}
              onClick={() => handleProcedur()}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  paddingLeft: "16px",
                }}
              >
                <Typography
                  tabIndex={0}
                  aria-label={"Procedures heading"}
                  variant="h4"
                >
                  {procedures.type}
                </Typography>
              </Box>
              <Box
                tabIndex={0}
                aria-label={"Collapse option"}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                  mr: 3,
                }}
              >
                {openProcedures ? (
                  <ExpandMoreIcon aria-expanded="true" />
                ) : (
                  <ExpandLessIcon aria-expanded="false" />
                )}
              </Box>
            </Box>
            <Collapse in={openProcedures} timeout="auto" unmountOnExit>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      {tempProcedures.map((item) => (
                        <TableCell
                          key={procedures.type}
                          tabindex={0}
                          aria-label={item}
                          component="th"
                          scope="row"
                          sx={{ textTransform: "capitalize" }}
                        >
                          {item}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {procedures.list.map((item) => (
                      <TableRow
                        key={procedures.type}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell tabindex={0} key={item.vaccine}>
                          {item.procedure}
                        </TableCell>
                        <TableCell tabindex={0} key={item.date}>
                          {item.date}
                        </TableCell>
                        <TableCell tabindex={0} key={item.status}>
                          {item.status}
                        </TableCell>
                        <TableCell tabindex={0} key={item.interpretation}>
                          {item.interpretation}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Collapse>
          </Box>

          {/**Assesments*/}
          <Box sx={{ pt: 2 }}>
            <Box
              className={styles.accordionContainer}
              onClick={() => handleAssesment()}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  paddingLeft: "16px",
                }}
              >
                <Typography
                  tabIndex={0}
                  aria-label={"Assessments heading"}
                  variant="h4"
                >
                  {assessments.type}
                </Typography>
              </Box>
              <Box
                tabIndex={0}
                aria-label={"Collapse option"}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                  mr: 3,
                }}
              >
                {openAssesmenets ? (
                  <ExpandMoreIcon aria-expanded="true" />
                ) : (
                  <ExpandLessIcon aria-expanded="false" />
                )}
              </Box>
            </Box>
            <Collapse in={openAssesmenets} timeout="auto" unmountOnExit>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      {tempAssessments.map((item) => (
                        <TableCell
                          key={assessments.type}
                          tabindex={0}
                          aria-label={item}
                          component="th"
                          scope="row"
                          sx={{ textTransform: "capitalize" }}
                        >
                          {item}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {assessments.list.map((item) => (
                      <TableRow
                        key={assessments.type}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell tabindex={0} key={item.assessments}>
                          {item.assessments}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Collapse>
          </Box>

          {/**Health Concerns*/}
          <Box sx={{ pt: 2 }}>
            <Box
              className={styles.accordionContainer}
              onClick={() => handleHealthConcerns()}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  paddingLeft: "16px",
                }}
              >
                <Typography
                  tabIndex={0}
                  aria-label={"Health Concerns Heading"}
                  variant="h4"
                >
                  {healtConcerns.type}
                </Typography>
              </Box>
              <Box
                tabIndex={0}
                aria-label={"Collapse option"}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                  mr: 3,
                }}
              >
                {openHealthConcerns ? (
                  <ExpandMoreIcon aria-expanded="true" />
                ) : (
                  <ExpandLessIcon aria-expanded="false" />
                )}
              </Box>
            </Box>
            <Collapse in={openHealthConcerns} timeout="auto" unmountOnExit>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      {temphealtConcerns.map((item) => (
                        <TableCell
                          tabindex={0}
                          key={healtConcerns.type}
                          aria-label={item}
                          component="th"
                          scope="row"
                          sx={{ textTransform: "capitalize" }}
                        >
                          {item}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {healtConcerns.list.map((item) => (
                      <TableRow
                        key={healtConcerns.type}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell tabindex={0} key={item.assessments}>
                          {item.assessments}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Collapse>
          </Box>

          {/**Goal Section*/}
          <Box sx={{ pt: 2 }}>
            <Box
              className={styles.accordionContainer}
              onClick={() => handlGoalSection()}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  paddingLeft: "16px",
                }}
              >
                <Typography
                  tabIndex={0}
                  aria-label={"Goals heading"}
                  variant="h4"
                >
                  {goalSection.type}
                </Typography>
              </Box>
              <Box
                tabIndex={0}
                aria-label={"Collapse option"}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                  mr: 3,
                }}
              >
                {openGoalSection ? (
                  <ExpandMoreIcon aria-expanded="true" />
                ) : (
                  <ExpandLessIcon aria-expanded="false" />
                )}
              </Box>
            </Box>
            <Collapse in={openGoalSection} timeout="auto" unmountOnExit>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      {tempgoalSection.map((item) => (
                        <TableCell
                          tabindex={0}
                          key={goalSection.type}
                          aria-label={item}
                          component="th"
                          scope="row"
                          sx={{ textTransform: "capitalize" }}
                        >
                          {item}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {goalSection.list.map((item) => (
                      <TableRow
                        key={goalSection.type}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell tabindex={0} key={item.assessments}>
                          {item.goal}
                        </TableCell>
                        <TableCell tabindex={0} key={item.assessments}>
                          {item.value}
                        </TableCell>
                        <TableCell tabindex={0} key={item.assessments}>
                          {item.date}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Collapse>
          </Box>

          {/**Plan Treatment*/}
          <Box sx={{ pt: 2 }}>
            <Box
              className={styles.accordionContainer}
              onClick={() => handlePlantofTreatment()}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  paddingLeft: "16px",
                }}
              >
                <Typography
                  tabIndex={0}
                  aria-label={"Plan of Treatment heading"}
                  variant="h4"
                >
                  {planOfTreatment.type}
                </Typography>
              </Box>
              <Box
                tabIndex={0}
                aria-label={"Collapse option"}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                  mr: 3,
                }}
              >
                {openPlanOfTreatment ? (
                  <ExpandMoreIcon aria-expanded="true" />
                ) : (
                  <ExpandLessIcon aria-expanded="false" />
                )}
              </Box>
            </Box>
            <Collapse in={openPlanOfTreatment} timeout="auto" unmountOnExit>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      {tempplanOfTreatment.map((item) => (
                        <TableCell
                          tabindex={0}
                          key={planOfTreatment.type}
                          aria-label={item}
                          component="th"
                          scope="row"
                          sx={{ textTransform: "capitalize" }}
                        >
                          {item}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {planOfTreatment.list.map((item) => (
                      <TableRow
                        key={planOfTreatment.type}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell tabindex={0} key={item.activity}>
                          {item.activity}
                        </TableCell>
                        <TableCell tabindex={0} key={item.date}>
                          {item.date}
                        </TableCell>
                        <TableCell tabindex={0} key={item.status}>
                          {item.status}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Collapse>
          </Box>

          {/**Encounter*/}
          <Box sx={{ pt: 2 }}>
            <Box
              className={styles.accordionContainer}
              onClick={() => handleEncounter()}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  paddingLeft: "16px",
                }}
              >
                <Typography
                  tabIndex={0}
                  aria-label={"Reason for Referral heading"}
                  variant="h4"
                >
                  {reasonForReferal.type}
                </Typography>
              </Box>
              <Box
                tabIndex={0}
                aria-label={"Collapse option"}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                  mr: 3,
                }}
              >
                {openEncounter ? (
                  <ExpandMoreIcon aria-expanded="true" />
                ) : (
                  <ExpandLessIcon aria-expanded="false" />
                )}
              </Box>
            </Box>
            <Collapse in={openEncounter} timeout="auto" unmountOnExit>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      {tempreasonForReferal.map((item) => (
                        <TableCell
                          key={encounters.type}
                          tabindex={0}
                          aria-label={item}
                          component="th"
                          scope="row"
                          sx={{ textTransform: "capitalize" }}
                        >
                          {item}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {reasonForReferal.list.map((item) => (
                      <TableRow
                        key={encounters.type}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      ></TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Collapse>
          </Box>

          {/**Interventions*/}
          <Box sx={{ pt: 2 }}>
            <Box
              className={styles.accordionContainer}
              onClick={() => handleIntervention()}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  paddingLeft: "16px",
                }}
              >
                <Typography
                  tabIndex={0}
                  aria-label={"Interventions heading"}
                  variant="h4"
                >
                  {interventions.type}
                </Typography>
              </Box>
              <Box
                tabIndex={0}
                aria-label={"Collapse option"}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                  mr: 3,
                }}
              >
                {openIntervention ? (
                  <ExpandMoreIcon aria-expanded="true" />
                ) : (
                  <ExpandLessIcon aria-expanded="false" />
                )}
              </Box>
            </Box>
            <Collapse in={openIntervention} timeout="auto" unmountOnExit>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      {tempinterventions.map((item) => (
                        <TableCell
                          tabindex={0}
                          key={interventions.type}
                          aria-label={item}
                          component="th"
                          scope="row"
                          sx={{ textTransform: "capitalize" }}
                        >
                          {item}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {interventions.list.map((item) => (
                      <TableRow
                        key={interventions.type}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell tabindex={0} key={item.resource}>
                          {item.resource}
                        </TableCell>
                        <TableCell tabindex={0} key={item.date}>
                          {item.date}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Collapse>
          </Box>

          {/**Encounter*/}
          <Box sx={{ pt: 2 }}>
            <Box
              className={styles.accordionContainer}
              onClick={() => handleEncounter()}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  paddingLeft: "16px",
                }}
              >
                <Typography
                  tabIndex={0}
                  aria-label={"Encounters heading"}
                  variant="h4"
                >
                  {encounters.type}
                </Typography>
              </Box>
              <Box
                tabIndex={0}
                aria-label={"Collapse option"}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                  mr: 3,
                }}
              >
                {openEncounter ? (
                  <ExpandMoreIcon aria-expanded="true" />
                ) : (
                  <ExpandLessIcon aria-expanded="false" />
                )}
              </Box>
            </Box>
            <Collapse in={openEncounter} timeout="auto" unmountOnExit>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      {tempencouter.map((item) => (
                        <TableCell
                          tabindex={0}
                          key={encounters.type}
                          aria-label={item}
                          component="th"
                          scope="row"
                          sx={{ textTransform: "capitalize" }}
                        >
                          {item}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {encounters.list.map((item) => (
                      <TableRow
                        key={encounters.type}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell tabindex={0} key={item.encounter}>
                          {item.encounter}
                        </TableCell>
                        <TableCell tabindex={0} key={item.performer}>
                          {item.performer}
                        </TableCell>
                        <TableCell tabindex={0} key={item.diagnosis}>
                          {item.diagnosis}
                        </TableCell>
                        <TableCell tabindex={0} key={item.location}>
                          {item.location}
                        </TableCell>
                        <TableCell tabindex={0} key={item.date}>
                          {item.date}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Collapse>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}
