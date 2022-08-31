import AppointmentLayout from "../../../components/templates/appointmentLayout";
import { Provider } from "react-redux";
import store from "../../../store/store";
import FilterHeading from "../../../components/molecules/FilterHeading/filterHeading";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  CircularProgress,
  Grid,
  useMediaQuery,
} from "@mui/material";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import FilterResult from "../../../components/molecules/FilterResult/filterResult";
import GMaps from "../../../components/organisms/Google/Maps/gMaps";
import { useLoadScript } from "@react-google-maps/api";
import CloseIcon from "@mui/icons-material/Close";
import { DayAvailability } from "../../../components/molecules/DayAvailability/DayAvailability";
import ProviderProfile from "../../../components/molecules/ProviderProfile/providerProfile";
export async function getStaticProps() {
  return {
    props: {
      googleApiKey: process.env.GOOGLE_API_KEY,
    },
  };
}
export default function Appointment({ googleApiKey }) {
  const isDesktop = useMediaQuery("(min-width: 992px)");
  const [isFilterApplied, setFilterApplied] = useState(false);
  const [open, setOpen] = React.useState(false);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: googleApiKey,
  });

  function onSearchProvider() {
    setFilterApplied(true);
  }

  const handleClose = () => {
    setOpen(false);
  };

  function onViewAllAvailability() {
    //TO DO: set data for view days schedule
    setOpen(true);
  }

  function onRenderDialogView() {
    return (
      <div>
        <Dialog
          open={open}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title" sx={{ height: "51px" }}>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <Box sx={{ width: "265px" }}>
              <ProviderProfile
                variant={"viewschedule"}
                isDayAvailableView={true}
              />
            </Box>
            <DayAvailability />
          </DialogContent>
        </Dialog>
      </div>
    );
  }

  return (
    <Box display="flex" flex={1}>
      <FilterHeading
        isDesktop={isDesktop}
        onSearchProvider={onSearchProvider}
      />
      {isDesktop && isFilterApplied ? (
        <Grid
          container
          sx={{
            display: "flex",
            flex: 1,
            pt: 17,
            maxHeight: "calc(100vh - 80px)",
            overflow: "hidden",
          }}
        >
          {/* <Box
            sx={{
              m: 3,
              overflow: "auto",
              height: "100%",
            }}
          >
            <FilterResult onClickViewAllAvailability={onViewAllAvailability} />
          </Box> */}
          <Box
            sx={{
              background: "#F4F4F4",
              display: "flex",
              flex: 1,
            }}
          >
            {/* Map */}
            {isLoaded ? <GMaps apiKey={googleApiKey} /> : <CircularProgress />}
          </Box>
        </Grid>
      ) : (
        <></>
      )}
      {onRenderDialogView()}
    </Box>
  );
}

Appointment.getLayout = function getLayout(page) {
  return (
    <Provider store={store}>
      <AppointmentLayout currentActivePage={"appointment"}>
        {page}
      </AppointmentLayout>
    </Provider>
  );
};
