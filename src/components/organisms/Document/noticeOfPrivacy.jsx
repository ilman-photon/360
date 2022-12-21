import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { StyledButton } from "../../atoms/Button/button";
import styles from "./styles.module.scss";

export default function NoticeOfPrivacy({
  defaultDataValue = {},
  disableInput = false,
}) {
  return (
    <Stack className={styles.textContainer}>
      <Typography
        className={styles.textInfo}
        sx={{ margin: "24px 0" }}
        tabindex={0}
      >
        The form is not available in online view. Please download the pdf file
        to see the document.
      </Typography>
      <Stack sx={{ padding: "16px", backgroundColor: "#F4F4F4" }}>
        <Stack
          sx={{
            padding: "16px",
            alignSelf: "center",
            width: "100%",
            backgroundColor: "#E8E8E8",
            borderRadius: "20px",
          }}
        >
          <Typography
            className={styles.textNormal}
            sx={{ alignSelf: "center" }}
            tabindex={0}
          >
            Notice of Privacy Policies
          </Typography>
          <StyledButton
            disabled={disableInput}
            theme="patient"
            mode="primary"
            size="small"
            gradient={false}
            sx={{
              width: "234px",
              borderRadius: "30px",
              height: "40px",
              alignSelf: "center",
              "@media (max-width: 767px)": {
                width: "100%",
              },
            }}
            data-testid="document-save-btn"
            // onClick={onStayLoggedIn}
            tabindex="0"
            aria-live={"polite"}
            aria-label={"Download"}
          >
            {`Download`}
            <Box sx={{ marginLeft: "9px", lineHeight: "15px" }}>
              <Image
                alt=""
                src={"/icon-download-white.png"}
                width={22}
                height={22}
                style={{ paddingLeft: "10px" }}
              />
            </Box>
          </StyledButton>
        </Stack>
      </Stack>
    </Stack>
  );
}
