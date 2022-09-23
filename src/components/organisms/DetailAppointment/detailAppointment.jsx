import { Box, Stack, Typography, Link } from "@mui/material";
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

  const [openAllergies, setOpenAllergies] = React.useState(true);
  const [openResults, setOpenResults] = React.useState(true);
  const [openVital, setOpenVitals] = React.useState(true);
  const [isDownload, setIsDownload] = React.useState(false);

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
    setOpenAllergies(true);
    setOpenResults(true);
    setOpenVitals(true);
  };
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
  return (
    <Box className={styles.upcomingAppointments} ref={container}>
      <Stack spacing={{ xs: 2, lg: 3.5 }}>
        <Typography variant="h2" className={styles.title}>
          Appointment Detail
        </Typography>
        <Box className={styles.dateContainer}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Typography variant="h4">{fullDate}</Typography>
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
            <Typography variant="h4" className={styles.mb36}>
              {`Visit Purpose: ${appointmentInfo.appointmentType}`}
            </Typography>
            <Grid container spacing={2} sx={{ p: 1 }}>
              <Grid item xs={4}>
                <Typography variant="h4">{providerInfo.name}</Typography>
              </Grid>
              <Grid item xs={8}>
                <Box
                  display={"flex"}
                  justifyContent="flex-start"
                  alignItems={"center"}
                  flexDirection={"row"}
                >
                  <Typography variant="h4">Patient :</Typography>
                  <Typography variant="regularDarkGreen" sx={{ pl: 0.5 }}>
                    {patientInfo.name}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Divider />
            <Grid container spacing={2} sx={{ p: 1 }}>
              <Grid item xs={4} sx={{ p: 1 }}>
                <Typography variant="h4" className={styles.mb14}>
                  Location
                </Typography>
                <Typography variant="mediumDarkGreen" className={styles.mb36}>
                  {providerInfo.position}
                </Typography>
                <Typography
                  variant="regularDarkGreen"
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
                  <Typography variant="h4" className={styles.mb14}>
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
                    <Typography variant="regularDarkGreen">
                      {insurance}
                    </Typography>
                  </Box>
                ))}
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ p: 2, pb: 0, backgroundColor: grey[50] }}>
            <Typography variant="h3" className={styles.mb14}>
              Documentation of
            </Typography>
            <Typography variant="body1" className={styles.mb14}>
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
              <Box key={index.toString()}>
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
                <Typography variant="h4">Allergies</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                  mr: 3,
                }}
              >
                {openAllergies ? <ExpandMoreIcon /> : <ExpandLessIcon />}
              </Box>
            </Box>
            <Collapse in={openAllergies} timeout="auto" unmountOnExit>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        lorem Ipsum
                      </TableCell>
                      <TableCell component="th" scope="row">
                        lorem Ipsum
                      </TableCell>
                      <TableCell component="th" scope="row">
                        lorem Ipsum
                      </TableCell>
                      <TableCell component="th" scope="row">
                        lorem Ipsum
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell>lorem</TableCell>
                      <TableCell>lorem</TableCell>
                      <TableCell>lorem</TableCell>
                      <TableCell>lorem</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Collapse>
          </Box>

          {/**Results*/}
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
                <Typography variant="h4">Results</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                  mr: 3,
                }}
              >
                {openResults ? <ExpandMoreIcon /> : <ExpandLessIcon />}
              </Box>
            </Box>
            <Collapse in={openResults} timeout="auto" unmountOnExit>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        lorem Ipsum
                      </TableCell>
                      <TableCell component="th" scope="row">
                        lorem Ipsum
                      </TableCell>
                      <TableCell component="th" scope="row">
                        lorem Ipsum
                      </TableCell>
                      <TableCell component="th" scope="row">
                        lorem Ipsum
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell>lorem</TableCell>
                      <TableCell>lorem</TableCell>
                      <TableCell>lorem</TableCell>
                      <TableCell>lorem</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Collapse>
          </Box>

          {/**Vital Sign*/}
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
                <Typography variant="h4">Vital Signs</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                  mr: 3,
                }}
              >
                {openVital ? <ExpandMoreIcon /> : <ExpandLessIcon />}
              </Box>
            </Box>
            <Collapse in={openVital} timeout="auto" unmountOnExit>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        lorem Ipsum
                      </TableCell>
                      <TableCell component="th" scope="row">
                        lorem Ipsum
                      </TableCell>
                      <TableCell component="th" scope="row">
                        lorem Ipsum
                      </TableCell>
                      <TableCell component="th" scope="row">
                        lorem Ipsum
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell>lorem</TableCell>
                      <TableCell>lorem</TableCell>
                      <TableCell>lorem</TableCell>
                      <TableCell>lorem</TableCell>
                    </TableRow>
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
