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
import { formatPhoneNumber } from "../../../utils/phoneFormatter";

function AppointmentDetailTable(alergies, isExpandAll) {
  const [openAllergies, setOpenAllergies] = useState(isExpandAll);
  const handleClickAllergies = () => {
    setOpenAllergies(!openAllergies);
  };
  useEffect(() => {
    setOpenAllergies(isExpandAll);
  }, [isExpandAll]);
  const temp = Object.keys(alergies?.list?.[0] || {});
  const isEmptyData = (alergies?.list?.length || 0) === 0;
  return (
    <Box sx={{ pt: 2 }}>
      <Box
        className={styles.accordionContainer}
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
                {temp.map((item) => (
                  <TableCell
                    tabIndex={0}
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
  const { providerInfo, patientInfo, appointmentInfo } = data;
  const date = appointmentInfo.date;
  const timezone = date.substring(date.length - 3);
  const momentDate = new moment(date);
  const formatedDate = momentDate.format("dddd, MMM DD, YYYY");
  const time = momentDate.format("h:mm A");
  const fullDate = `${formatedDate}, AT ${time} ${timezone}`;
  const [isDownload, setIsDownload] = React.useState(false);
  const [isExpandAll, setIsExpandAll] = React.useState(true);

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
  const addressLabel = `address : ${providerInfo.address.addressLine1}.
                  ${providerInfo.address.city}, ${providerInfo.address.state}, 
                  ${providerInfo.address.zipcode}`;
  const addressDetailId =
    appointmentInfo.documentDetails.address.typePlace +
    "\n" +
    appointmentInfo.documentDetails.address.typePlace +
    "\n";
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
                <div></div>
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
                  aria-label={addressLabel}
                  sx={{ pt: 1 }}
                >
                  {providerInfo.address.addressLine1 +
                    "\n" +
                    providerInfo.address.addressLine2 +
                    "\n" +
                    providerInfo.address.addressLine2 &&
                    "\n" +
                      "\n" +
                      providerInfo.address.city +
                      ", " +
                      providerInfo.address.state +
                      ", " +
                      providerInfo.address.zipcode}
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
              aria-label={"Documentation of"}
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
            onClick={() => setIsExpandAll(!isExpandAll)}
          >
            <AppointmentButton>
              {`${isExpandAll ? "Collapse" : "Expand"} All`} <ExpandMoreIcon />
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
                      {"Custodian "}
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
                    <Link
                      tabIndex={0}
                      ariaLabel={formatPhoneNumber(
                        appointmentInfo.documentDetails.address.mobileNumber
                      )}
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
                        {formatPhoneNumber(
                          appointmentInfo.documentDetails.address.mobileNumber
                        )}
                      </Typography>
                    </Link>
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
                {"Patient-IDs"}
              </Typography>
              <Typography
                tabIndex={0}
                aria-label={patientInfo.name}
                variant="regularDarkGreen"
                sx={{ pl: 0.5 }}
              >
                {"JONES_ECC INDIANA"}
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
                aria-label={appointmentInfo.documentDetails.address.typePlace}
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
                aria-label={appointmentInfo.documentDetails.address.country}
                sx={{ pt: 1 }}
              >
                {appointmentInfo.documentDetails.address.country}
              </Typography>

              <Link
                tabIndex={0}
                ariaLabel={formatPhoneNumber(
                  appointmentInfo.documentDetails.address.mobileNumber
                )}
                sx={{
                  color: "teal",
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "flex-start",
                  pt: 1,
                  mb: 1,
                }}
              >
                <Typography
                  variant="body2"
                  className={styles.getDirectionLinkText}
                >
                  {formatPhoneNumber(
                    appointmentInfo.documentDetails.address.mobileNumber
                  )}
                </Typography>
              </Link>
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
                      aria-label={appointmentInfo.patientDetail.dateBirth}
                      variant="regularDarkGreen"
                      sx={{ pl: 0.5 }}
                    >
                      {appointmentInfo.patientDetail.dateBirth}
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
                      aria-label={appointmentInfo.patientDetail.gender}
                      variant="regularDarkGreen"
                      sx={{ pl: 0.5 }}
                    >
                      {appointmentInfo.patientDetail.gender}
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
                      {appointmentInfo.patientDetail.race}
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
                      aria-label={appointmentInfo.patientDetail.ethnicity}
                    >
                      {appointmentInfo.patientDetail.ethnicity}
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableBody>
                <TableRow>
                  <TableCell
                    tabindex={0}
                    component="th"
                    scope="row"
                    sx={{ textTransform: "capitalize" }}
                  >
                    <Typography
                      tabIndex={0}
                      aria-label={"Patient"}
                      variant="h4"
                      className={styles.mb14}
                    >
                      {"Patient-IDs"}
                    </Typography>
                    <Typography
                      tabIndex={0}
                      aria-label={appointmentInfo.patientDetail.patientId}
                      variant="regularDarkGreen"
                      sx={{ pl: 0.5 }}
                    >
                      {appointmentInfo.patientDetail.patientId}
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
                      aria-label={
                        appointmentInfo.patientDetail.languageCommunication
                      }
                      sx={{ pt: 1 }}
                    >
                      {appointmentInfo.patientDetail.languageCommunication}
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
        <Box
          className={styles.dateContainer}
          sx={{ p: 2, backgroundColor: "white" }}
        >
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

                  <Link
                    tabIndex={0}
                    ariaLabel={formatPhoneNumber(
                      appointmentInfo.documentDetails.address.mobileNumber
                    )}
                    sx={{
                      color: "teal",
                      display: "flex",
                      alignContent: "center",
                      justifyContent: "flex-start",
                      pt: 1,
                      mb: 1,
                    }}
                  >
                    <Typography
                      variant="body2"
                      className={styles.getDirectionLinkText}
                    >
                      {formatPhoneNumber(
                        appointmentInfo.documentDetails.address.mobileNumber
                      )}
                    </Typography>
                  </Link>
                </Grid>
              </>
            ))}
          </Grid>

          <Divider />
        </Box>
      </Box>

      {/* Autho Eyecare 360 */}
      <Box sx={{ p: 2, backgroundColor: grey[50] }}>
        <Box
          className={styles.dateContainer}
          sx={{ p: 2, backgroundColor: "white" }}
        >
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
                          aria-label={patientInfo.name}
                          aria-live={patientInfo.name}
                          variant="regularDarkGreen"
                          sx={{ pl: 0.5 }}
                        >
                          {
                            "EyeCare 360 - Code : Optomerrist, Organization : EYECARE CENTERS"
                          }
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
                      aria-label={"Home Primary"}
                      sx={{ pt: 1 }}
                    >
                      {"Home Primary"}
                    </Typography>
                    <Typography
                      variant="regularDarkGreen"
                      tabIndex={0}
                      component={"div"}
                      aria-label={
                        "15933 CLAYTON RD, SUITE 201 BALLWIN, MO 63011"
                      }
                      sx={{ pt: 1 }}
                    >
                      {"15933 CLAYTON RD, SUITE 201 BALLWIN, MO 63011"}
                    </Typography>
                    <Typography
                      variant="regularDarkGreen"
                      tabIndex={0}
                      component={"div"}
                      aria-label={addressLabel}
                      sx={{ pt: 1 }}
                    >
                      {providerInfo.address.addressLine1 +
                        "\n" +
                        providerInfo.address.addressLine2 +
                        "\n" +
                        providerInfo.address.addressLine2 &&
                        "\n" +
                          "\n" +
                          providerInfo.address.city +
                          ", " +
                          providerInfo.address.state +
                          ", " +
                          providerInfo.address.zipcode}
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
                      aria-label={"Home Primary"}
                      sx={{ pt: 1 }}
                    >
                      {"Home Primary"}
                    </Typography>
                    <Typography
                      variant="regularDarkGreen"
                      tabIndex={0}
                      component={"div"}
                      aria-label={
                        "15933 CLAYTON RD, SUITE 201 BALLWIN, MO 63011"
                      }
                      sx={{ pt: 1 }}
                    >
                      {"15933 CLAYTON RD, SUITE 201 BALLWIN, MO 63011"}
                    </Typography>
                    <Typography
                      variant="regularDarkGreen"
                      tabIndex={0}
                      component={"div"}
                      aria-label={addressLabel}
                      sx={{ pt: 1 }}
                    >
                      {providerInfo.address.addressLine1 +
                        "\n" +
                        providerInfo.address.addressLine2 +
                        "\n" +
                        providerInfo.address.addressLine2 &&
                        "\n" +
                          "\n" +
                          providerInfo.address.city +
                          ", " +
                          providerInfo.address.state +
                          ", " +
                          providerInfo.address.zipcode}
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
