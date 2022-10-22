import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import CareTeamCard from "../../../components/molecules/CareTeamCard/careTeamCard";
import CustomModal from "../../../components/molecules/CustomModal/customModal";
import FloatingMessage from "../../../components/molecules/FloatingMessage/floatingMessage";
import MyCareTeamLayout from "../../../components/templates/myCareTeam";
import store from "../../../store/store";
import { getArrayValue } from "../../../utils/bioUtils";
import { Api } from "../../api/api";

export default function MyCareTeamPage() {
  const [isRemoved, setIsRemoved] = useState(false);
  const [isRequested, setIsRequested] = useState(false);
  const [providerData, setProviderData] = useState();

  const mapper = (responses) => {
    const data = [];
    responses.map((response) => {
      const name = `${response.firstName || ""} ${response.lastName || ""}${
        response.designation ? `, ${response.designation}` : ""
      }`;

      const providerItem = {
        providerId: response.id || "",
        image: response.providerDetails?.profilePhoto?.digitalAsset || "",
        name,
        email: response.email || "",
        phone: response.workPhone || "",
        specialties: getArrayValue(response.providerDetails?.specialization),
        address: response.offices[0],
      };

      data.push(providerItem);
    });

    setProviderData(data);
    setIsRequested(true);
  };

  useEffect(() => {
    const api = new Api();
    !isRequested &&
      api.getProviderList().then((responses) => {
        mapper(responses);
      });
  }, [isRequested]);

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
          {providerData.length !== 0 ? (
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

      <FloatingMessage
        text="Doctor successfully removed"
        autoHideDuration={2000}
        onOpen={isRemoved}
        onClose={(removed) => {
          setIsRemoved(!removed);
        }}
      />

      <CustomModal
        buttonText={"Remove"}
        onClickButton={() => {
          setModalErrorRequest(false);
        }}
        secondaryButtonText={"Cancel"}
        onClickSecondaryButton={() => {}}
        onClickCloseButton={() => {}}
        open={false}
        sx={{
          "& .MuiPaper-root": {
            top: { xs: "0", md: "100px" },
            position: { xs: "relative", md: "absolute" },
          },
        }}
      >
        <Box marginBottom={"16px"}>
          <Typography
            sx={{
              fontSize: "22px",
              marginBottom: "19px",
            }}
          >
            Are you sure you want to remove doctor?
          </Typography>
        </Box>
      </CustomModal>
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
