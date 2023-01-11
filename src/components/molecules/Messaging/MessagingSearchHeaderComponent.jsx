import * as React from "react";
import { Box, Typography, Button, useMediaQuery, Stack } from "@mui/material";
import styles from "./styles.module.scss";
import StyledInput from "../../atoms/Input/input";
import SearchIcon from "@mui/icons-material/Search";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useTranslation } from "next-i18next";

export const MessagingSearchHeaderComponent = ({
  onSearch,
  onNewMessageClick,
  onOpenFilter,
}) => {
  const { t } = useTranslation("translation", {
    keyPrefix: "messaging",
  });
  const isDesktop = useMediaQuery("(min-width: 834px)");

  return (
    <Box className={styles.searchContainer}>
      <Stack
        flexDirection="row"
        width={"100%"}
        alignItems="center"
        gap={{ xs: 1, md: 3 }}
      >
        <Box className={styles.searchContent} sx={{ flex: 1 }}>
          <Box className={styles.searchIcon}>
            <SearchIcon
              data-testId="message-search-icon"
              sx={{ width: "24px" }}
            />
          </Box>
          <StyledInput
            id="searchField"
            type="default"
            data-testId="message-search-input"
            placeholder={t("searchText")}
            maxLength={100}
            sx={{
              height: "52px",
              width: isDesktop ? "90%" : "85%",
              ".MuiOutlinedInput-notchedOutline": {
                borderStyle: "unset",
                borderWidth: "0px",
              },
            }}
            onChange={(data) => onSearch(data.target.value)}
          />
        </Box>
        {isDesktop ? (
          <Box className={styles.buttonContent}>
            <Button
              sx={{
                textTransform: "capitalize",
              }}
              data-testId="new-message-button"
              onClick={onNewMessageClick}
            >
              <AddOutlinedIcon sx={{ color: "#fff", marginRight: "13px" }} />
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: "600",
                  fontSize: "16px",
                  fontStyle: "normal",
                }}
              >
                {t("newMessage")}
              </Typography>
            </Button>
          </Box>
        ) : (
          <Button
            sx={{
              width: "26px",
              height: "26px",
              minWidth: "26px",
              color: "#000000",
              alignItems: "center",
              backgroundColor: "#ECECEC",
              border: "1px solid #D4D4D4",
              borderRadius: "24px",
            }}
            onClick={() => {
              onOpenFilter();
            }}
          >
            <FilterListIcon sx={{ width: "25px", height: "18px" }} />
          </Button>
        )}
      </Stack>
    </Box>
  );
};

export default MessagingSearchHeaderComponent;
