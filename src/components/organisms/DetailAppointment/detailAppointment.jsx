import { Box, Stack, Typography, Link, Button } from "@mui/material";
import ProviderProfile from "../../molecules/ProviderProfile/providerProfile";
import DirectionsOutlinedIcon from "@mui/icons-material/DirectionsOutlined";
import styles from "./styles.module.scss";
import AppointmentButton from "../../atoms/AppointmentButton/appointmentButton";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import moment from "moment";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import DownloadIcon from "@mui/icons-material/DownloadOutlined";
import { blueGrey, grey, red } from "@mui/material/colors";
import PastAppointment from "../PastAppointment/pastAppointment";
import Divider from "@mui/material/Divider";
import StyledInput from "../../atoms/Input/input";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from '@mui/material/Collapse';

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React from 'react'
export default function DetailAppointment({ data }) {
  const date = data.appointmentInfo.date;
  const timezone = date.substring(date.length - 3);
  const momentDate = new moment(date);
  const formatedDate = momentDate.format("dddd, MMM DD, YYYY");
  const time = momentDate.format("h:mm A");
  const fullDate = `${formatedDate}, AT ${time} ${timezone}`;
  const [open, setOpen] = React.useState(true);
  const [openAllergies, setOpenAllergies] = React.useState(true);
  const [openResults, setOpenResults] = React.useState(true);
  const [openVital, setOpenVitals] = React.useState(true);
  const handleClickResult = () => {
    setOpenResults(!openResults);
  };
  const handleVital = () =>{
    setOpenVitals(!openVital)
  }
  const handleClickAllergies = () => {
    setOpenAllergies(!openAllergies);
  };
  const handleClick = () => {
    setOpen(!open);
  };
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <Box className={styles.upcomingAppointments}>
      <Stack spacing={{ xs: 2, lg: 3.5 }}>
        <Typography variant="h2" className={styles.title}>
          Appointment Detail
        </Typography>
        <Box className={styles.dateContainer}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Typography variant="h4" className={styles.date}>
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
                  sx={{
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "center",
                  }}
                >
                  <DownloadIcon sx={{ color: blueGrey[200] }} />
                  <Typography variant="body2" className={styles.date}>
                    Download
                  </Typography>
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
            <Typography variant="h4" className={styles.date}>
              Visit Purpose: Routine
            </Typography>
            <Grid container spacing={2} sx={{ p: 1 }}>
              <Grid item xs={4}>
                <Typography variant="h4" className={styles.date}>
                  Dr Sonha Nguyen
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Box
                  display={"flex"}
                  justifyContent="flex-start"
                  alignItems={"center"}
                  flexDirection={"row"}
                >
                  <Link
                    className={styles.link}
                    sx={{
                      display: "flex",
                      alignContent: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography variant="h4" className={styles.date}>
                      Patient : Don John
                    </Typography>
                  </Link>
                </Box>
              </Grid>
            </Grid>
            <Divider />
            <Grid container spacing={2} sx={{ p: 1 }}>
              <Grid item xs={4} sx={{ p: 1 }}>
                <Typography variant="h4" className={styles.date}>
                  Location
                </Typography>
                <Typography variant="body2" className={styles.date}>
                  Scripps Eyesore 5755 Burke Centre Parkway Burke, VA 22015-226
                </Typography>
                <Link
                  sx={{
                    color: "teal",
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "flex-start",
                  }}
                >
                  <Typography variant="body2" className={styles.date}>
                    (703) 250 -9000
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
                  <Typography variant="h4" className={styles.date}>
                    Insurance
                  </Typography>
                </Box>
                <Box
                  display={"flex"}
                  justifyContent="flex-start"
                  alignItems={"center"}
                  flexDirection={"row"}
                >
                  <Typography variant="body2" className={styles.date}>
                    ECP Vision
                  </Typography>
                </Box>
                <Box
                  display={"flex"}
                  justifyContent="flex-start"
                  alignItems={"center"}
                  flexDirection={"row"}
                >
                  <Typography variant="body2" className={styles.date}>
                    BlueCare Vision
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box
            sx={{ p: 2, backgroundColor: grey[50] }}
            className={styles.dateContainer}
          >
            <Typography variant="h4" className={styles.date}>
              Documentation of
            </Typography>
            <Typography variant="body1" className={styles.date}>
              Lorem Ipsum
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
            <Box>
              <strong>Performer</strong> Lorem Ipsum
            </Box>
            <Box>
              <strong>Performer</strong> Lorem Ipsum
            </Box>
            <Box>
              <strong>Performer</strong> Lorem Ipsum
            </Box>
            <Box>
              <strong>Performer</strong> Lorem Ipsum
            </Box>
            <Box>
              <strong>Performer</strong> Lorem Ipsum
            </Box>
            <Box>
              <strong>Performer</strong> Lorem Ipsum
            </Box>
            <Box>
              <strong>Performer</strong> Lorem Ipsum
            </Box>
          </Box>
        </Box>
        <Box
          className={styles.dateContainer}
          sx={{ p: 2, backgroundColor: "white" }}
        >
          <Box
            className={styles.buttonContainer}
            sx={{ display: "flex", justifyContent: "center", p: 2 }}
          >
            <AppointmentButton>
              Collapse All <ExpandMoreIcon  onClick={handleClick}/>
            </AppointmentButton>
           
          </Box>
          <Collapse in={open} timeout="auto" unmountOnExit>
              
          <Box
            className={styles.pastAppointmentsContainer}
            sx={{
              display: "flex",
              backgroundColor: "#f4f4f4",
              height: "55px",
              border: "2px solid #f3f3f3 ",
              justifyContent: "space-between",
            }}
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
              }}
            >
              <Button onClick={()=>handleClickAllergies()} >
                <ExpandMoreIcon />
              </Button>
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
          <Box
          className={styles.dateContainer}
          sx={{ p: 2, backgroundColor: "white" }}
        >
          <Box
            className={styles.pastAppointmentsContainer}
            sx={{
              display: "flex",
              backgroundColor: "#f4f4f4",
              height: "55px",
              border: "2px solid #f3f3f3 ",
              justifyContent: "space-between",
            }}
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
              <Typography variant="h4">Vital Signs</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <ExpandMoreIcon onClick={handleVital}/>

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
          </Collapse>

        <Box
          className={styles.dateContainer}
          sx={{ p: 2, backgroundColor: "white" }}
        >
          <Box
            className={styles.pastAppointmentsContainer}
            sx={{
              display: "flex",
              backgroundColor: "#f4f4f4",
              height: "55px",
              border: "2px solid #f3f3f3 ",
              justifyContent: "space-between",
            }}
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
              }}
            >
              <ExpandMoreIcon onClick={handleClickResult}/>
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
        </Collapse>
          
        </Box>
        
      </Stack>
    </Box>
  );
}
