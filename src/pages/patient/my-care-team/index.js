import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import CareTeamCard from "../../../components/molecules/CareTeamCard/careTeamCard";
import MyCareTeamLayout from "../../../components/templates/myCareTeam";
import store from "../../../store/store";
import { getArrayValue } from "../../../utils/bioUtils";
import { Api } from "../../api/api";

export default function MyCareTeamPage() {
  const [isRequested, setIsRequested] = useState(false);
  const [providerData, setProviderData] = useState();

  let isRequest = false;

  const mapper = (responses) => {
    const data = [];
    responses.map((response) => {
      const name = `${response.firstName || ""} ${response.lastName || ""}${
        response.designation ? `, ${response.designation}` : ""
      }`;

      const providerItem = {
        providerId: response._id || "",
        image: response.providerDetails?.profilePhoto?.digitalAsset || "",
        name,
        email: response.email || "",
        phone: response.workPhone || "",
        specialties: getArrayValue(response.providerDetails?.specialization),
        address: response.offices[0],
      };

      data.push(providerItem);
    });

    isRequest = false;
    setProviderData(data);
    setIsRequested(true);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getProviderList = () => {
    const api = new Api();
    isRequest = true;
    api
      .getProviderList()
      .then((responses) => {
        mapper(responses.results);
      })
      .catch(() => {
        //This is intentional
      });
  };

  useEffect(() => {
    !isRequest && !isRequested && getProviderList();
  }, [getProviderList, isRequest, isRequested]);

  return (
    <>
      {isRequested && (
        <Box
          sx={{
            flexGrow: 1,
            maxWidth: {
              sm: "770px",
              md: "1434px",
            },
            backgroundColor: {
              xs: "transparent",
              sm: "#FFFFFF",
            },
            margin: "0 auto 0 auto",
          }}
        >
          {providerData && providerData.length !== 0 ? (
            <Grid
              container
              spacing={{ xs: 2, md: 2 }}
              sx={{
                "&.MuiGrid-container": {
                  padding: {
                    xs: "16px",
                    sm: "32px 24px 24px 24px",
                  },
                },
              }}
            >
              {providerData.map((provider, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <CareTeamCard provider={provider} />
                </Grid>
              ))}
            </Grid>
          ) : (
            <Box
              sx={{
                background: "white",
                padding: "32px 24px 24px 24px",
                margin: "0 auto 0 auto",
              }}
            >
              <Typography
                className="styles.noDoctor"
                variant="h3"
                component="p"
                sx={{
                  background: "#F2F7F7",
                  padding: "16px 10px",
                  fontWeight: {
                    xs: 400,
                    sm: 500,
                  },
                  fontSize: "18px",
                  lineHeight: "28px",
                  textAlign: {
                    xs: "center",
                    sm: "left",
                  },
                }}
              >
                There are no doctor/optometrist details available for you
              </Typography>
            </Box>
          )}
        </Box>
      )}
    </>
  );
}

MyCareTeamPage.getLayout = function getLayout(page) {
  return (
    <Provider store={store}>
      <MyCareTeamLayout>{page}</MyCareTeamLayout>
    </Provider>
  );
};
