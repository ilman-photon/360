import * as React from "react";
import AccountTitleHeading from "../../atoms/AccountTitleHeading/accountTitleHeading";
import BaseHeader from "../../organisms/BaseHeader/baseHeader";
import Navbar from "../../molecules/Navbar/Navbar";
import { patientTypography, providerTypography } from "../../../styles/theme";
import { ThemeProvider } from "@mui/material/styles";
import { useTranslation } from "next-i18next";
import { Grid, Box, useMediaQuery } from "@mui/material";
import MessagingSearchHeader from "../../molecules/Messaging/MessagingSearchHeaderComponent";
import MessagingTabContent from "../../molecules/Messaging/MessagingTabContentHeader";
import MessagingFilterComponent from "../../molecules/Messaging/MessagingFilterComponent";
import MessagingListContent from "../../molecules/Messaging/MessagingListContent";
import MessagingDetailContentView from "../../molecules/Messaging/MessagingDetailContentView";
import NoMessageContent from "../../molecules/Messaging/NoMessageContent";
import NoMessageSelectedContent from "../../molecules/Messaging/NoMessageSelectedContent";
import MessagingNoResult from "../../molecules/Messaging/MessagingNoResult";
import styles from "./style.module.scss";

const MessagingContainer = ({
  theme = "patient",
  isNoResult = false,
  isMessageSelected = false,
  isNoMessage = false,
  noMessageText,
  inboxData,
  selectedMessage,
  activeTabs,
  OnFilterClicked,
  refAttachments,
  handleAssetDownload,
  attachmentsSource,
  openDeletedDialog,
  openNewMessageDialog,
  inboxValue,
  onSelectedMessage = () => {
    // This is intended
  },
  onChangeSearch = () => {
    // This is intended
  },
  onChangeTabEvent = () => {
    // This is intended
  },
  onAddAttachments = () => {
    // This is intended
  },
  onOpenFilter = () => {
    // This is intended
  },
  onDownloadAllAttachmentClicked = () => {
    // This is intended
  },
}) => {
  const isPatient = theme === "patient";
  const isDesktop = useMediaQuery("(min-width: 835px)");

  const { t } = useTranslation("translation", {
    keyPrefix: "messaging",
  });

  const getMessagesText = () => {
    let text = "";
    switch (noMessageText) {
      case "inbox":
        text = t("noReceivedMessages");
        break;
      case "sent":
        text = t("noSentMessages");
        break;
      case "draft":
        text = t("noDraftMessages");
        break;
      case "deleted":
        text = t("noDeletedMessages");
        break;
      default:
        break;
    }
    return text;
  };

  /**
   * Get Content view UI to display at the left and right content on message body container
   * @returns {
   * NoMessageContent, MessagingListContent,
   * MessagingDetailContentView, NoMessageSelectedContent
   * }
   */
  const getContentView = () => {
    let content;
    if (isNoResult) {
      content = <MessagingNoResult />;
    } else if (isNoMessage) {
      content = (
        <Box className={styles.noMessagesContainer}>
          <NoMessageContent message={getMessagesText()} />
        </Box>
      );
    } else {
      content = (
        <Grid container columns={6}>
          <Grid item sm={6} lg={3} sx={{ width: "-webkit-fill-available" }}>
            <MessagingListContent
              data={inboxData}
              onSelected={onSelectedMessage}
              isSelectedMsg={isMessageSelected}
            />
          </Grid>
          {isDesktop && (
            <Grid item sm={6} lg={3}>
              {isMessageSelected?.active ? (
                <MessagingDetailContentView
                  data={selectedMessage}
                  handleAttachments={onAddAttachments}
                  addAttachments={refAttachments}
                  handleAssetDownload={handleAssetDownload}
                  attachmentsSource={attachmentsSource}
                  openDeletedDialog={openDeletedDialog}
                  isSelectedMsg={isMessageSelected}
                  onDownloadAllAttachmentClicked={
                    onDownloadAllAttachmentClicked
                  }
                />
              ) : (
                <NoMessageSelectedContent />
              )}
            </Grid>
          )}
        </Grid>
      );
    }
    return content;
  };

  return (
    <div className={styles.container}>
      <BaseHeader />
      <Navbar />
      <AccountTitleHeading
        title={t("messagingText")}
        sx={{
          fontWeight: "400",
          lineHeight: "44px",
          p: { marginLeft: "8px !important" },
        }}
      />
      <div className={styles.messageContainer}>
        <ThemeProvider
          theme={isPatient ? patientTypography : providerTypography}
        >
          <MessagingSearchHeader
            onSearch={onChangeSearch}
            onNewMessageClick={openNewMessageDialog}
            onOpenFilter={onOpenFilter}
          />
          <Box
            className={styles.messageContent}
            data-testId="message-content-view"
          >
            <MessagingTabContent
              activeTabs={activeTabs}
              onChangeTabs={onChangeTabEvent}
              inboxValue={inboxValue}
            />
            {activeTabs === 0 && isDesktop && (
              <MessagingFilterComponent OnFilterClicked={OnFilterClicked} />
            )}
            <Box
              className={styles.messagingListContainer}
              data-testId="message-list-container"
            >
              {getContentView()}
            </Box>
          </Box>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default MessagingContainer;
