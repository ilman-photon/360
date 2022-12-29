import { Box, Stack, Typography, Link } from "@mui/material";
import styles from "./styles.module.scss";
import AppointmentButton from "../../atoms/AppointmentButton/appointmentButton";
import moment from "moment";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
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
import React, { useEffect, useState } from "react";
import { TEST_ID } from "../../../utils/constants";
import PhoneNumber from "../../atoms/PhoneNumber/phoneNumber";

function AppointmentDetailTable(alergies, isExpandAll) {
  const [openAllergies, setOpenAllergies] = useState(isExpandAll);
  const handleClickAllergies = () => {
    setOpenAllergies(!openAllergies);
  };
  useEffect(() => {
    setOpenAllergies(isExpandAll);
  }, [isExpandAll]);

  let temp = null;
  let isEmptyData = true;
  if (alergies && alergies.list && alergies.list.length > 0) {
    temp = Object.keys(alergies.list[0]);
    isEmptyData = false;
  }

  return (
    <Box sx={{ pt: 2 }}>
      <Box
        className={styles.accordionContainer}
        data-testid={TEST_ID.APPOINTMENTS_DETAIL_TEST_ID.expandCollapseSection}
        onClick={() => !isEmptyData && handleClickAllergies()}
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
            aria-label={`${alergies.type} heading`}
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
                {temp?.map((item) => (
                  <TableCell
                    tabIndex={0}
                    key={alergies.type}
                    aria-label={item}
                    component="th"
                    scope="row"
                    sx={{ textTransform: "capitalize", minWidth: 130 }}
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
                  {Object.keys(item).map((key) => (
                    <TableCell
                      tabIndex={0}
                      key={item[key]}
                      aria-label={
                        item[key] ? `${key}: ${item[key]}` : `${key}: empty`
                      }
                    >
                      {item[key]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Collapse>
    </Box>
  );
}

export default function DetailAppointment({ data }) {
  const container = React.useRef(null);
  const { providerInfo, patientInfo, appointmentInfo, purposeOfVisit } = data;
  const date = appointmentInfo.date;
  const timezone = date.substring(date.length - 3);
  const momentDate = new moment(date);
  const formatedDate = momentDate.format("dddd, MMM DD, YYYY");
  const time = momentDate.format("h:mm A");
  const fullDate = `${formatedDate}, AT ${time} ${timezone}`;
  const [isDownload, setIsDownload] = React.useState(false);
  const [isExpandAll, setIsExpandAll] = React.useState(true);
  const chevronColor = "rgba(0, 0, 0, 0.54)";

  const downloadPDF = () => {
    let element = container.current || document.body;

    /**
     * Create and clone dummy DOM for print
     */
    const cloneElement = element.cloneNode(true);
    cloneElement.getElementsByClassName("buttonDownload")[0].remove();
    const createDummyDOM = document.createElement("div");
    createDummyDOM.id = "dummy-dom";
    createDummyDOM.className = "dummy-dom";
    createDummyDOM.appendChild(cloneElement);
    element.appendChild(createDummyDOM);
    /** -------------------------- */
    savePDF(
      createDummyDOM,
      {
        paperSize: "auto",
        margin: 40,
        fileName: `Appointment Detail Don John`,
      },
      () => {
        element.getElementsByClassName("dummy-dom")[0].remove();
        setIsDownload(false);
      }
    );
  };

  const addressLabel = `address : ${providerInfo.address?.addressLine1}.
                  ${providerInfo.address?.city}, ${providerInfo.address?.state}, 
                  ${providerInfo.address?.zipcode}`;

  useEffect(() => {
    if (isDownload && isExpandAll) {
      setTimeout(() => {
        downloadPDF();
      }, [2000]);
    } else if (isDownload && !isExpandAll) {
      setIsExpandAll(true);
    }
  }, [isExpandAll, isDownload]);

  return (
    <Box className={styles.upcomingAppointments} ref={container}>
      <Stack spacing={{ xs: 2, lg: 3.5 }}>
        <Typography
          tabIndex={0}
          aria-label={"Appointment Details heading"}
          variant="h2"
          className={styles.titleDetails}
        >
          Appointment Details
        </Typography>
        <Box className={styles.dateContainer}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Typography
                className={styles.textDate}
                variant="h4"
                tabIndex={0}
                aria-label={fullDate}
              >
                {fullDate}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Box
                className="buttonDownload"
                display={"flex"}
                justifyContent="flex-end"
                alignItems={"center"}
                flexDirection={"row"}
              >
                <Link
                  className={styles.downloadContainer}
                  tabIndex={0}
                  aria-label={"Download Option"}
                  data-testid={TEST_ID.APPOINTMENTS_DETAIL_TEST_ID.download}
                  sx={{
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    textDecoration: "none",
                  }}
                  onClick={() => {
                    setIsDownload(true);
                    setIsExpandAll(!isExpandAll);
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
              aria-label={`Visit Purpose: ${purposeOfVisit.title}`}
              variant="h4"
              className={styles.mb36}
            >
              {`Visit Purpose: ${purposeOfVisit.title}`}
            </Typography>
            <Grid container spacing={2} sx={{ p: 1 }}>
              <Grid item xs={4}>
                <Typography
                  tabIndex={0}
                  aria-label={purposeOfVisit.drName}
                  variant="h4"
                >
                  {purposeOfVisit.drName}
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
                    aria-label={purposeOfVisit.patientName}
                    aria-live={purposeOfVisit.patientName}
                    variant="regularDarkGreen"
                    sx={{ pl: 0.5 }}
                  >
                    {purposeOfVisit.patientName}
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
                <div></div>
                <Typography
                  tabIndex={0}
                  aria-label={purposeOfVisit.location.typePlace}
                  variant="mediumDarkGreen"
                  className={styles.mb36}
                >
                  {purposeOfVisit.location.typePlace}
                </Typography>
                <Typography
                  variant="regularDarkGreen"
                  tabIndex={0}
                  component={"div"}
                  aria-label={addressLabel}
                  sx={{ pt: 1 }}
                >
                  {purposeOfVisit.location.address}
                </Typography>
                <Typography
                  variant="regularDarkGreen"
                  tabIndex={0}
                  component={"div"}
                  aria-label={purposeOfVisit.location.country}
                  sx={{ pt: 1 }}
                >
                  {purposeOfVisit.location.country}
                </Typography>
                <PhoneNumber
                  phone={providerInfo?.phoneNumber}
                  sx={{
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "flex-start",
                    pt: 1,
                  }}
                />
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
                {appointmentInfo.insuranceCarrier?.map((insurance, index) => (
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
                      {insurance.name}
                    </Typography>
                  </Box>
                ))}
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ p: 2, pb: 0, backgroundColor: grey[50] }}>
            <Typography
              tabIndex={0}
              aria-label={"Documentation of"}
              variant="h3"
              className={[styles.mb14, styles.textDate]}
            >
              Documentation of
            </Typography>
            <Typography
              tabIndex={0}
              aria-label={appointmentInfo.documentOfCareDetail.name}
              variant="body1"
              className={styles.mb14}
            >
              {appointmentInfo.documentOfCareDetail.name}
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
            marginTop: "0px !important",
          }}
        >
          <Box
            className={styles.buttonContainer}
            sx={{
              display: isDownload ? "none !important" : "flex",
              justifyContent: "center",
              p: 2,
            }}
            data-testid={TEST_ID.APPOINTMENTS_DETAIL_TEST_ID.expandCollapseAll}
            onClick={() => setIsExpandAll(!isExpandAll)}
          >
            <AppointmentButton className={styles.collapseContainer}>
              {`${isExpandAll ? "Collapse" : "Expand"} All`}
              {isExpandAll ? (
                <ExpandMoreIcon sx={{ color: chevronColor }} />
              ) : (
                <ExpandLessIcon sx={{ color: chevronColor }} />
              )}
            </AppointmentButton>
          </Box>

          {/**Allergies*/}
          {appointmentInfo.contents.map((item) =>
            AppointmentDetailTable(item, isExpandAll)
          )}
        </Box>
      </Stack>

      {/* {Detail Docuemnt} */}
      <Box sx={{ p: 2, backgroundColor: grey[50] }}>
        <Box
          className={styles.dateContainer}
          sx={{ p: 2, backgroundColor: "white" }}
        >
          <Grid container spacing={2} sx={{ p: 1 }}>
            <Table tabaindex={-1} sx={{ minWidth: 650, ariaHidden: true }}>
              <TableHead tabaindex={-1}>
                <TableRow tabaindex={-1}>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ textTransform: "capitalize" }}
                    className={styles.mb14}
                  >
                    <Typography tabIndex={-1} variant="h4">
                      <span
                        tabIndex={0}
                        ariaLive={"Document"}
                        ariaLabel={"Document"}
                      >
                        {"Document ID"}
                      </span>
                    </Typography>
                    <Typography
                      tabIndex={0}
                      aria-label={appointmentInfo.documentDetails.documentID}
                      variant="regularDarkGreen"
                      sx={{ pl: 0.5 }}
                    >
                      {appointmentInfo.documentDetails.documentID}
                    </Typography>
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ textTransform: "capitalize" }}
                  >
                    <Box
                      display={"flex"}
                      justifyContent="flex-start"
                      alignItems={"center"}
                      flexDirection={"row"}
                    >
                      <Typography
                        tabIndex={0}
                        aria-label={"Created On"}
                        variant="h4"
                      >
                        {"Created On"}
                      </Typography>
                      <Typography
                        tabIndex={0}
                        aria-label={appointmentInfo.documentDetails.createdOn}
                        variant="regularDarkGreen"
                        sx={{ pl: 0.5 }}
                      >
                        {appointmentInfo.documentDetails.createdOn}
                      </Typography>
                    </Box>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell tabindex={0}>
                    <Typography
                      tabIndex={0}
                      aria-label={"Custodian"}
                      variant="h4"
                      className={styles.mb14}
                    >
                      {"Custodian"}
                    </Typography>
                    <Typography
                      tabIndex={0}
                      aria-label={appointmentInfo.documentDetails.custodian}
                      aria-live={appointmentInfo.documentDetails.custodian}
                      variant="regularDarkGreen"
                      sx={{ pl: 0.5 }}
                    >
                      {appointmentInfo.documentDetails.custodian}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      tabIndex={0}
                      aria-label={"Contact Details"}
                      variant="h4"
                      className={styles.mb14}
                    >
                      {"Contact Details"}
                    </Typography>
                    <Typography
                      variant="regularDarkGreen"
                      tabIndex={0}
                      component={"div"}
                      aria-label={
                        appointmentInfo.documentDetails.address.typePlace
                      }
                      sx={{ pt: 1, fontWeight: "bold" }}
                    >
                      {appointmentInfo.documentDetails.address.typePlace}
                    </Typography>
                    <Typography
                      variant="regularDarkGreen"
                      tabIndex={0}
                      component={"div"}
                      aria-label={
                        appointmentInfo.documentDetails.address.addressLine1
                      }
                      sx={{ pt: 1 }}
                    >
                      {appointmentInfo.documentDetails.address.addressLine1}
                    </Typography>
                    <Typography
                      variant="regularDarkGreen"
                      tabIndex={0}
                      component={"div"}
                      aria-label={
                        appointmentInfo.documentDetails.address.country
                      }
                      sx={{ pt: 1 }}
                    >
                      {appointmentInfo.documentDetails.address.country}
                    </Typography>
                    <PhoneNumber
                      phone={
                        appointmentInfo.documentDetails.address.mobileNumber
                      }
                      sx={{
                        alignContent: "center",
                        display: "flex",
                        justifyContent: "flex-start",
                        pt: 1,
                      }}
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Grid>
        </Box>
      </Box>

      {/* {Detail Docuemnt} */}
      <Box sx={{ p: 2, backgroundColor: grey[50] }}>
        <Box
          className={styles.dateContainer}
          sx={{ p: 2, backgroundColor: "white" }}
        >
          <Grid container spacing={2}>
            <Grid item xs={7}>
              <Typography
                tabIndex={0}
                aria-label={"Patient"}
                variant="h4"
                className={styles.mb14}
              >
                {"Patient"}
              </Typography>
              <Typography
                tabIndex={0}
                aria-label={patientInfo.name}
                variant="regularDarkGreen"
                sx={{ pl: 0.5 }}
              >
                {patientInfo.name}
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <Typography tabIndex={0} variant="h4" className={styles.mb14}>
                {"Contact Details"}
              </Typography>
              <Typography
                variant="regularDarkGreen"
                tabIndex={0}
                component={"div"}
                aria-label={patientInfo.typePlace}
                sx={{ pt: 1, fontWeight: "bold" }}
              >
                {patientInfo.typePlace}
              </Typography>

              <Typography
                variant="regularDarkGreen"
                tabIndex={0}
                component={"div"}
                aria-label={patientInfo.address}
                sx={{ pt: 1 }}
              >
                {patientInfo.address}
              </Typography>

              <Typography
                variant="regularDarkGreen"
                tabIndex={0}
                component={"div"}
                aria-label={patientInfo.country}
                sx={{ pt: 1 }}
              >
                {patientInfo.country}
              </Typography>
              <PhoneNumber
                phone={patientInfo.mobileNumber}
                sx={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "flex-start",
                  pt: 1,
                  mb: 1,
                }}
              />
            </Grid>
          </Grid>

          <Divider />
          <Grid container spacing={2} sx={{ p: 1 }}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Typography
                      tabIndex={0}
                      aria-label={"Date of Birth"}
                      variant="h4"
                      className={styles.mb14}
                    >
                      {"Date of Birth"}
                    </Typography>
                    <Typography
                      tabIndex={0}
                      aria-label={patientInfo.dateBirth}
                      variant="regularDarkGreen"
                      sx={{ pl: 0.5 }}
                    >
                      {patientInfo.dateBirth}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      tabIndex={0}
                      aria-label={"Gender"}
                      variant="h4"
                      className={styles.mb14}
                    >
                      {"Gender"}
                    </Typography>
                    <Typography
                      tabIndex={0}
                      aria-label={patientInfo.gender}
                      variant="regularDarkGreen"
                      sx={{ pl: 0.5 }}
                    >
                      {patientInfo.gender}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      tabIndex={0}
                      aria-label={"Race"}
                      variant="h4"
                      className={styles.mb14}
                    >
                      {"Race"}
                    </Typography>
                    <Typography
                      tabIndex={0}
                      aria-label={appointmentInfo.patientDetail.race}
                      aria-live={appointmentInfo.patientDetail.race}
                      variant="regularDarkGreen"
                      sx={{ pl: 0.5 }}
                    >
                      {patientInfo.race}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      tabIndex={0}
                      ariaLabel="Ethnicity"
                      variant="h4"
                      className={styles.mb14}
                    >
                      {"Ethnicity"}
                    </Typography>
                    <Typography
                      variant="regularDarkGreen"
                      tabIndex={0}
                      component={"div"}
                      aria-label={patientInfo.ethnicity}
                    >
                      {patientInfo.ethnicity}
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableBody>
                <TableRow>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ textTransform: "capitalize" }}
                  >
                    <Typography
                      tabIndex={0}
                      aria-label={"Patient IDs"}
                      variant="h4"
                      className={styles.mb14}
                    >
                      {"Patient-IDs"}
                    </Typography>
                    <Typography
                      tabIndex={0}
                      aria-label={patientInfo.patientId}
                      variant="regularDarkGreen"
                      sx={{ pl: 0.5 }}
                    >
                      {patientInfo.patientId}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      tabIndex={0}
                      variant="h4"
                      aria-label={"Language Communication"}
                      className={styles.mb14}
                    >
                      {"Language Communication"}
                    </Typography>
                    <Typography
                      variant="regularDarkGreen"
                      tabIndex={0}
                      component={"div"}
                      aria-label={patientInfo.languageCommunication}
                      sx={{ pt: 1 }}
                    >
                      {patientInfo.languageCommunication}
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Grid>
        </Box>
      </Box>

      {/* Document Of Care problem */}
      <Box sx={{ p: 2, backgroundColor: grey[50] }}>
        <Box className={styles.dateContainer} sx={{ backgroundColor: "white" }}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Grid container spacing={2} sx={{ p: 1 }}>
                    <Grid item xs={12}>
                      <Typography
                        tabIndex={0}
                        aria-label={"Documentation of care provision"}
                        variant="h4"
                        className={styles.mb14}
                      >
                        {"Documentation Of - care provision: "}
                      </Typography>
                      <Typography
                        tabIndex={0}
                        aria-label={
                          appointmentInfo.documentOfCareDetail
                            .DocumentationCareProcisionDate
                        }
                        variant="regularDarkGreen"
                        sx={{ pl: 0.5 }}
                      >
                        {
                          appointmentInfo.documentOfCareDetail
                            .DocumentationCareProcisionDate
                        }
                      </Typography>
                    </Grid>
                  </Grid>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Grid container sx={{ p: 2 }}>
            {appointmentInfo.documentOfCareDetail.performers.map((item) => (
              <>
                <Grid item xs={6} sx={{ p: 1 }}>
                  <Typography
                    tabIndex={0}
                    aria-label={"Performer"}
                    variant="h4"
                    className={styles.mb14}
                  >
                    {"Performer-"}
                  </Typography>
                  <Typography
                    tabIndex={0}
                    aria-label={patientInfo.name}
                    variant="regularDarkGreen"
                    sx={{ pl: 0.5 }}
                  >
                    {item.performerName}
                  </Typography>
                </Grid>
                <Grid item xs={6} sx={{ p: 1 }}>
                  <Typography tabIndex={0} variant="h4" className={styles.mb14}>
                    {"Contact Details"}
                  </Typography>
                  <Typography
                    variant="regularDarkGreen"
                    tabIndex={0}
                    component={"div"}
                    aria-label={
                      appointmentInfo.documentDetails.address.typePlace
                    }
                    sx={{ pt: 1, fontWeight: "bold" }}
                  >
                    {item.contactPerformance.typePlace}
                  </Typography>

                  <Typography
                    variant="regularDarkGreen"
                    tabIndex={0}
                    component={"div"}
                    aria-label={
                      appointmentInfo.documentDetails.address.addressLine1
                    }
                    sx={{ pt: 1 }}
                  >
                    {item.contactPerformance.addressLine1}
                  </Typography>

                  <Typography
                    variant="regularDarkGreen"
                    tabIndex={0}
                    component={"div"}
                    aria-label={appointmentInfo.documentDetails.address.country}
                    sx={{ pt: 1 }}
                  >
                    {item.contactPerformance.country}
                  </Typography>
                  <PhoneNumber
                    tabindex={0}
                    phone={appointmentInfo.documentDetails.address.mobileNumber}
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignContent: "center",
                      pt: 1,
                      mb: 1,
                    }}
                  />
                </Grid>
              </>
            ))}
          </Grid>

          <Divider />
        </Box>
      </Box>

      {/* Autho Eyecare 360 */}
      <Box sx={{ p: 2, backgroundColor: grey[50] }}>
        <Box className={styles.dateContainer} sx={{ backgroundColor: "white" }}>
          <Grid container spacing={2} sx={{ p: 1 }}>
            <Grid item xs={12}>
              <Box
                display={"flex"}
                justifyContent="flex-start"
                alignItems={"center"}
                flexDirection={"row"}
              >
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <Typography
                          tabIndex={0}
                          aria-label={"Author"}
                          variant="h4"
                        >
                          Author
                        </Typography>
                        <Typography
                          tabIndex={0}
                          aria-label={appointmentInfo?.author?.title}
                          aria-live={appointmentInfo.author.title}
                          variant="regularDarkGreen"
                          sx={{ pl: 0.5 }}
                        >
                          {appointmentInfo?.author?.title}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Box>
            </Grid>
          </Grid>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableBody>
              <TableRow>
                <TableCell>
                  <TableCell>
                    <Typography
                      tabIndex={0}
                      variant="h4"
                      className={styles.mb14}
                    >
                      {"Contact Details"}
                    </Typography>
                    <Typography
                      tabIndex={0}
                      component={"div"}
                      variant="subtitle1"
                      aria-label={
                        appointmentInfo?.author?.contactDetails?.typePlace
                      }
                      sx={{ pt: 1 }}
                    >
                      {appointmentInfo?.author?.contactDetails?.typePlace}
                    </Typography>
                    <Typography
                      variant="regularDarkGreen"
                      tabIndex={0}
                      component={"div"}
                      aria-label={addressLabel}
                      sx={{ pt: 1 }}
                    >
                      {appointmentInfo?.author?.contactDetails?.address ?? "-"}
                    </Typography>
                    <Typography
                      variant="regularDarkGreen"
                      tabIndex={0}
                      component={"div"}
                      aria-label={
                        appointmentInfo?.author?.contactDetails?.country
                      }
                      sx={{ pt: 1 }}
                    >
                      {appointmentInfo?.author?.contactDetails?.country ?? "-"}
                    </Typography>
                    <PhoneNumber
                      phone={
                        appointmentInfo?.author?.contactDetails?.phoneNumber
                      }
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        pt: 1,
                        alignContent: "center",
                      }}
                    />
                  </TableCell>
                </TableCell>
                <TableCell>
                  <TableCell>
                    <Typography
                      tabIndex={0}
                      variant="h4"
                      className={styles.mb14}
                    >
                      {"Contact Details (Organization)"}
                    </Typography>
                    <Typography
                      tabIndex={0}
                      component={"div"}
                      variant="subtitle1"
                      aria-label={
                        appointmentInfo?.author?.contactDetailsOrganization
                          ?.typePlace
                      }
                      sx={{ pt: 1 }}
                    >
                      {
                        appointmentInfo?.author?.contactDetailsOrganization
                          ?.typePlace
                      }
                    </Typography>
                    <Typography
                      variant="regularDarkGreen"
                      tabIndex={0}
                      component={"div"}
                      aria-label={addressLabel}
                      sx={{ pt: 1 }}
                    >
                      {appointmentInfo?.author?.contactDetailsOrganization
                        ?.address ?? "-"}
                    </Typography>
                    <Typography
                      variant="regularDarkGreen"
                      tabIndex={0}
                      component={"div"}
                      aria-label={
                        appointmentInfo?.author?.contactDetailsOrganization
                          ?.country
                      }
                      sx={{ pt: 1 }}
                    >
                      {appointmentInfo?.author?.contactDetailsOrganization
                        ?.country ?? "-"}
                    </Typography>
                    <PhoneNumber
                      phone={
                        appointmentInfo?.author?.contactDetailsOrganization
                          ?.phoneNumber
                      }
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        pt: 1,
                        alignContent: "center",
                      }}
                    />
                  </TableCell>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      </Box>
    </Box>
  );
}
