import * as React from "react";
import { Typography, Box, Stack, Divider } from "@mui/material";
import styles from "./styles.module.scss";
import MenuList from "./menuList";
import Image from "next/image";
import { StyledButton } from "../../atoms/Button/button";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { colors } from "../../../styles/theme";
import constants from "../../../utils/constants";
import { getDynamicShareContent } from "../../organisms/ShareModal/shareModal";

export const MedicationContent = ({
  row,
  idx,
  medicationType,
  isMobile,
  isSharePage = false,
  renderCTAIcon = () => {
    // intentional
  },
  printHTML = () => {
    // intentional
  },
  shareDocument = () => {
    // intentional
  },
  renderStatusMedication = () => {
    // intentional
  },
  onRequestCancelRefill = () => {
    // intentional
  },
}) => {
  const iconMedication = "/icon-medication.png";

  function renderMedicationViewAllUI(data, index, medType) {
    const shareContent = getDynamicShareContent({
      type: "medication-prescription",
      date: data?.date,
      prescribedBy: data?.prescribedBy,
      expirationDate: data?.expirationDate,
      dose: data?.dose,
      prescription: data?.prescription,
    });
    const shareData = {
      id: data.id || "",
      title: `Share my medications prescription`,
      successPostmessage: `Your medications prescription was succesfully shared.`,
      type: `medication`,
    };
    return (
      <Stack
        direction={"row"}
        className={styles.medicationViewAllContainer}
        key={`${index}-madication-prescription`}
        data-testid={`medication-${medType}-container-${index}`}
      >
        {!isMobile && (
          <Box>
            <Box
              className={styles.medicationIconContainer}
              sx={{ justifyContent: "center" }}
            >
              <Image alt="" src={iconMedication} width={32.88} height={44.63} />
            </Box>
          </Box>
        )}
        <Stack display={"flex"} marginLeft={"8px"} width={"100%"}>
          <Stack
            direction={"row"}
            className={styles.medicationViewAllTitleContainer}
            sx={{ marginBottom: "8px" }}
          >
            <Typography
              className={styles.medicationViewAllTitle}
              tabIndex={"0"}
            >
              {data?.prescription}
            </Typography>
            {!isSharePage && (
              <>
                {!isMobile ? (
                  renderCTAIcon(
                    () => {
                      //This is intentional
                    },
                    () => {
                      printHTML(medType, index);
                    },
                    () => {
                      shareDocument(shareContent, shareData);
                    },
                    ["share", "print"]
                  )
                ) : (
                  <MenuList
                    onClickPrintButton={() => {
                      printHTML(medType, index);
                    }}
                    onClickShareButton={() => {
                      shareDocument(shareContent, shareData);
                    }}
                    buttonList={["share", "print"]}
                  />
                )}
              </>
            )}
          </Stack>
          <Stack sx={{ width: "100%" }}>
            {!isSharePage && (
              <>
                {(data.status === "refill request" ||
                  data.status === "completed") && (
                  <Stack direction={"row"} className={styles.stackContainerMed}>
                    {renderStatusMedication(data.status, data.statusDetails)}
                    <Stack
                      direction={"row"}
                      alignSelf={"center"}
                      className={styles.gridHeight}
                    >
                      <Typography
                        variant="customBodyRegular"
                        className={styles.gridText}
                        tabIndex={"0"}
                      >
                        Fill request date: &nbsp;
                      </Typography>
                      <Typography
                        variant="bodyMedium"
                        className={styles.gridText}
                        tabIndex={"0"}
                      >
                        {data.fillRequestDate}
                      </Typography>
                    </Stack>
                  </Stack>
                )}
              </>
            )}
            <Stack direction={"row"} className={styles.stackContainerMed}>
              <Stack
                direction={"row"}
                alignSelf={"center"}
                className={styles.gridHeight}
              >
                <Typography
                  variant="customBodyRegular"
                  className={styles.gridText}
                  tabIndex={"0"}
                >
                  Prescribed on: &nbsp;
                </Typography>
                <Typography
                  variant="bodyMedium"
                  className={styles.gridText}
                  tabIndex={"0"}
                >
                  {data?.date}
                </Typography>
              </Stack>
              <Stack
                direction={"row"}
                alignSelf={"center"}
                className={styles.gridHeight}
              >
                <Typography
                  variant="customBodyRegular"
                  className={styles.gridText}
                  tabIndex={"0"}
                >
                  Prescribed by: &nbsp;
                </Typography>
                <Typography
                  variant="bodyMedium"
                  className={styles.gridText}
                  tabIndex={"0"}
                >
                  {data?.prescribedBy}
                </Typography>
              </Stack>
              <Stack
                direction={"row"}
                alignSelf={"center"}
                className={styles.gridHeight}
              >
                <Typography
                  variant="customBodyRegular"
                  className={styles.gridText}
                  tabIndex={"0"}
                >
                  Dose: &nbsp;
                </Typography>
                <Typography
                  variant="bodyMedium"
                  className={styles.gridText}
                  tabIndex={"0"}
                >
                  {data?.dose}
                </Typography>
              </Stack>
            </Stack>
            <Stack direction={"row"} className={styles.stackContainerMed}>
              <Stack
                direction={"row"}
                alignSelf={"center"}
                className={styles.gridHeight}
              >
                <Typography
                  variant="customBodyRegular"
                  className={styles.gridText}
                  tabIndex={"0"}
                >
                  Expires on: &nbsp;
                </Typography>
                <Typography
                  variant="bodyMedium"
                  className={styles.gridText}
                  tabIndex={"0"}
                >
                  {data?.expirationDate}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Divider className={styles.dividerStyle} />
          <Stack direction={"row"} sx={{ marginTop: "24px", flexWrap: "wrap" }}>
            <Stack direction={"row"} className={styles.remainingTimeContainer}>
              <AccessTimeIcon sx={{ color: colors.darkGreen }} />
              <Typography className={styles.remainingTimeText} tabIndex={"0"}>
                {data?.timeRemaining}
              </Typography>
            </Stack>
            {!isSharePage && (
              <>
                {data?.status !== "refill request" ? (
                  <StyledButton
                    mode={constants.PRIMARY}
                    gradient={false}
                    onClick={() => onRequestCancelRefill(data, false)}
                    className={styles.requestButton}
                    data-testid={"request-refill-button"}
                  >
                    Request Refill
                  </StyledButton>
                ) : (
                  <StyledButton
                    mode={constants.SECONDARY}
                    onClick={() => onRequestCancelRefill(data, true)}
                    className={styles.requestButton}
                    data-testid={"cancel-refill-button"}
                  >
                    Cancel Refill Request
                  </StyledButton>
                )}
              </>
            )}
          </Stack>
        </Stack>
      </Stack>
    );
  }

  return renderMedicationViewAllUI(row, idx, medicationType);
};

export default MedicationContent;
