import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Divider,
  Fade,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import style from "./InsuranceInformationNew.module.scss";
import LabelWithInfo from "../../atoms/LabelWithInfo/labelWithInfo";
import { StyledButton } from "../../atoms/Button/button";
import { colors } from "../../../styles/theme";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./insuranceView.module.scss";
import ImageFallback from "../../atoms/Image/image";

export default function InsuranceView({
  insuranceData = [],
  isEditing = false,
  OnEditClicked = () => {
    // This is intentional
  },
  OnRemoveClicked = () => {
    // This is intentional
  },
}) {
  const transformedData = {
    PRIMARY: [],
    SECONDARY: [],
    TERTIARY: [],
  };

  const isDesktop = useMediaQuery("(min-width: 769px)");

  insuranceData?.forEach((element) => {
    if (element.priority) {
      if (transformedData[element.priority].push)
        transformedData[element.priority].push(element);
    }
  });

  return (
    <Fade in={!isEditing} unmountOnExit>
      <Stack spacing={3}>
        {Object.keys(transformedData).map((category, idx) => {
          const items = transformedData[category];
          const categoryName = category.toLowerCase();
          if (items.length > 0) {
            return (
              <Accordion key={idx}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  sx={{ background: "#FAFAFA" }}
                >
                  <Stack spacing={1} direction="row" alignItems="center">
                    <Typography
                      variant="h3"
                      sx={{ fontSize: "24px", textTransform: "capitalize" }}
                    >
                      {categoryName}
                    </Typography>
                    <div className={styles.totalCategoryItemsWrapper}>
                      {items.length}
                    </div>
                  </Stack>
                </AccordionSummary>
                <AccordionDetails>
                  <Stack
                    spacing={4}
                    divider={<Divider sx={{ borderBottomWidth: 8 }} />}
                  >
                    {items.map((item, itemIdx) => {
                      return (
                        <Stack key={itemIdx} spacing={3} divider={<Divider />}>
                          <Grid container spacing={{ xs: 4 }}>
                            <Grid item xs={12} md={4}>
                              <LabelWithInfo label="Insurance Provider">
                                {item.provider
                                  ? item.provider.label.replace(
                                      /(Add \")|(")/g,
                                      ""
                                    )
                                  : "-"}
                              </LabelWithInfo>
                            </Grid>

                            <Grid item xs={12} md={4}>
                              <LabelWithInfo label="Plan Name">
                                {item.plan
                                  ? item.plan.label.replace(/(Add \")|(")/g, "")
                                  : "-"}
                              </LabelWithInfo>
                            </Grid>

                            <Grid item xs={12} md={4}>
                              <LabelWithInfo label="Subscriber ID/Member ID">
                                {item.memberID}
                              </LabelWithInfo>
                            </Grid>
                          </Grid>

                          <LabelWithInfo label="Group #">
                            {item.groupID}
                          </LabelWithInfo>

                          <div>
                            <Typography
                              variant="h3"
                              sx={{ pb: 2, color: colors.black }}
                            >
                              Policy Holder
                            </Typography>

                            <LabelWithInfo label="Are you the  Subscriber?">
                              {item.isSubscriber}
                            </LabelWithInfo>
                          </div>

                          {item.isSubscriber === "No" && item.subscriberData ? (
                            <>
                              <Typography variant="h4">
                                Subscriber&apos;s details
                              </Typography>
                              <Grid container rowSpacing={2}>
                                <Grid item xs={6} md={4}>
                                  <LabelWithInfo label="First Name">
                                    {item.subscriberData.firstName || "-"}
                                  </LabelWithInfo>
                                </Grid>

                                <Grid item xs={6} md={4}>
                                  <LabelWithInfo label="Last Name">
                                    {item.subscriberData.lastName || "-"}
                                  </LabelWithInfo>
                                </Grid>

                                <Grid
                                  item
                                  xs={6}
                                  sx={{ display: isDesktop ? "none" : "" }}
                                >
                                  <LabelWithInfo label="Relationship">
                                    {item.subscriberData.relationship}
                                  </LabelWithInfo>
                                </Grid>

                                <Grid item xs={6} md={4}>
                                  <LabelWithInfo label="Date of Birth">
                                    {new Date(
                                      item.subscriberData.dob
                                    ).toLocaleDateString() || "-"}
                                  </LabelWithInfo>
                                </Grid>
                              </Grid>

                              <Divider />

                              <LabelWithInfo
                                xs={6}
                                label="Relationship"
                                sx={{ display: isDesktop ? "" : "none" }}
                              >
                                {item.subscriberData.relationship}
                              </LabelWithInfo>
                            </>
                          ) : (
                            ""
                          )}

                          <div>
                            <Typography
                              variant={isDesktop ? "bodyRegular" : "h3"}
                              sx={{ pb: 3 }}
                              component="div"
                            >
                              Upload images of your insurance.
                            </Typography>

                            <Grid container spacing={2}>
                              <Grid item xs={12} md={4} p={0}>
                                <Typography
                                  variant="h4"
                                  sx={{
                                    display: isDesktop ? "none" : "",
                                    mb: 1,
                                  }}
                                >
                                  Insurance Card - Front
                                </Typography>
                                <div className={styles.insuranceImageContainer}>
                                  <ImageFallback
                                    width={263}
                                    height={139}
                                    source={item.frontCard}
                                    alt="front"
                                    aria-label="Image"
                                  />
                                </div>
                              </Grid>

                              <Grid item xs={12} md={4}>
                                <Typography
                                  variant="h4"
                                  sx={{
                                    display: isDesktop ? "none" : "",
                                    mb: 1,
                                  }}
                                >
                                  Insurance Card - Back
                                </Typography>
                                <div className={styles.insuranceImageContainer}>
                                  <ImageFallback
                                    width={263}
                                    height={139}
                                    source={item.backCard}
                                    alt="back"
                                    aria-label="Image"
                                    className={styles.insuranceImage}
                                  />
                                </div>
                              </Grid>
                            </Grid>
                          </div>

                          <LabelWithInfo label="Insurance Priority">
                            {item.priority}
                          </LabelWithInfo>

                          <Stack
                            direction="row"
                            justifyContent="flex-end"
                            spacing={2}
                            sx={{
                              alignSelf: { xs: "center", md: "flex-end" },
                              width: { xs: "100%", md: "fit-content" },
                              p: { xs: 0, md: 2 },
                              mt: 2,
                            }}
                          >
                            <StyledButton
                              mode="secondary"
                              size="small"
                              onClick={() => {
                                OnRemoveClicked(item);
                              }}
                              sx={{
                                width: { xs: "100%", md: "fit-content" },
                                padding: { xs: 1 },
                                border: `solid 1px ${colors.darkGreen}`,
                                borderColor: colors.darkGreen,
                                height: "40px !important",
                              }}
                            >
                              <Stack direction="row" alignItems="center">
                                <DeleteOutlineIcon
                                  sx={{
                                    width: 24,
                                    height: 24,
                                    mr: "4px",
                                    color: "#003B4A",
                                  }}
                                />
                                <span
                                  style={{ fontSize: 14, color: "#007E8F" }}
                                >
                                  Remove Insurance
                                </span>
                              </Stack>
                            </StyledButton>
                            <Button
                              type="submit"
                              variant="contained"
                              onClick={() => {
                                OnEditClicked(item);
                              }}
                              className={[style.formButton, style.primary].join(
                                " "
                              )}
                              sx={{
                                width: {
                                  xs: "100%",
                                  md: "fit-content",
                                  borderRadius: 30,
                                },
                                textTransform: "none",
                                fontWeight: 600,
                                lineHeight: "18px",
                                fontSize: "14px",
                              }}
                            >
                              Edit
                            </Button>
                          </Stack>
                        </Stack>
                      );
                    })}
                  </Stack>
                </AccordionDetails>
              </Accordion>
            );
          }
        })}
      </Stack>
    </Fade>
  );
}
