import { useState, useEffect, useRef } from "react";
import Messaging from "../../../components/organisms/Messaging/messaging";
import { Api } from "../../api/api";
import DigitalAssetsHandler from "../../../utils/digitalAssetsHandler";
import {
  downloadMultipleAsset,
  fetchSource,
} from "../../../utils/fetchDigitalAssetSource";
import Head from "next/head";
import DeletedDialog from "../../../components/molecules/Messaging/DeletedDialog";
import NewMessageDialog from "../../../components/molecules/Messaging/NewMessageDialog";
import FloatingMessage from "../../../components/molecules/FloatingMessage/floatingMessage";
import MessageDetailsMobileView from "../../../components/molecules/Messaging/MessageDetailsMobileView";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import MessagingFilterComponent from "../../../components/molecules/Messaging/MessagingFilterComponent";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { useTranslation } from "next-i18next";
import { messageParser } from "../../../utils/messaging";
import moment from "moment";

export default function MessagingPage() {
  const [selectedMessageData, setSelectedMessage] = useState({});
  const [isMessageSelected, setIsSelectedMessage] = useState({
    active: false,
    id: null,
  });
  const [activeTabs, setActiveTabs] = useState(0);
  const [dataMessages, setDataMessages] = useState([]);
  const [shownMessages, setShownMessages] = useState([]);
  const [notHasMessages, setNotHasMessages] = useState(true);
  const [notMessagesText, setNotMessageText] = useState("inbox");
  const [query, setQuery] = useState("");
  const [filterRead, setFilterRead] = useState("unread");
  const [addAttachmentsSource, setAddAttachmentsSource] = useState([]);
  const digitalAsset = new DigitalAssetsHandler();
  const addAttachments = useRef(null);
  const [showDeletedDialog, setShowDeletedDialog] = useState(false);
  const [showNewMessageDialog, setShowNewMessageDialog] = useState(false);
  const [isNoResultFound, setIsNoResultFound] = useState(false);
  const [openFloatingMsg, setOpenFloatingMsg] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [floatingMsgText, setFloatingMsgText] = useState("");
  const isDesktop = useMediaQuery("(min-width: 835px)");
  const [saveId, setSaveId] = useState({
    id: "",
    key: "",
    data: {},
  });
  const [providerList, setProviderList] = useState([]);
  const [isRequested, setIsRequested] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [unReadMsg, setUnReadMsg] = useState(0);

  let isRequest = false;

  const { t } = useTranslation("translation", {
    keyPrefix: "messaging",
  });

  const mapper = (responses) => {
    const data = responses.map((response) => {
      const providerData = response.provider;

      const designation = providerData.designation
        ? `, ${providerData.designation}`
        : "";
      const name = `${providerData.firstName || ""} ${
        providerData.lastName || ""
      }${designation}`;
      const providerItem = {
        providerId: providerData._id,
        name,
      };

      return providerItem;
    });

    isRequest = false;
    setProviderList(data);
    setIsRequested(true);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getProviderList = (
    providerQuery = {
      name: "",
      location: "",
      specialty: "",
    }
  ) => {
    const api = new Api();
    isRequest = true;
    api
      .getProviderList()
      .then((responses) => {
        mapper(responses);
      })
      .catch(() => {
        setIsRequested(true);
      });
  };

  const moveToDraftPatient = (postBody) => {
    const api = new Api();
    api
      .createPatientToDraft(postBody)
      .then(() => {
        setAddAttachmentsSource([]);
        setShowNewMessageDialog(false);
      })
      .catch(() => {
        //This is intentional
      });
  };

  useEffect(() => {
    !isRequest && !isRequested && getProviderList();
  }, [getProviderList, isRequest, isRequested]);

  const embedHighlight = (data, highlightQuery) => {
    const textToSearch = highlightQuery.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    let pattern = new RegExp(`${textToSearch}`, "gi");
    if (data?.name || data?.message) {
      data.name = data?.name.replace(
        pattern,
        (match) => `<span>${match}</span>`
      );
      data.message = data?.message.replace(
        pattern,
        (match) => `<span>${match}</span>`
      );
    } else {
      data = data.replace(pattern, (match) => `<span>${match}</span>`);
    }
    return data;
  };

  /**
   * Catch the new data change based onChange to set data for searching
   */
  useEffect(() => {
    let mail = [];
    if (query.length === 0) {
      setShownMessages(dataMessages);
      setIsNoResultFound(false);
    } else {
      const cloneData = JSON.parse(JSON.stringify(dataMessages));
      cloneData.filter((post) => {
        let nameFilter = false;
        let messageFilter = false;
        post?.messages?.filter((item) => {
          nameFilter = item.name.toLowerCase().includes(query.toLowerCase());
          messageFilter = item.message
            .toLowerCase()
            .includes(query.toLowerCase());
        });
        if (
          post.subject.toLowerCase().includes(query.toLowerCase()) ||
          nameFilter ||
          messageFilter
        ) {
          setIsNoResultFound(false);

          /**
           * Highlight search text
           * handle to highlight text in message list base on search
           */
          function highlightSearchText(highlightSearchQuery, highlightPost) {
            const lastIndex = highlightPost.messages?.length - 1;
            highlightPost.messages[lastIndex] = embedHighlight(
              highlightPost.messages[lastIndex],
              highlightSearchQuery
            );
            highlightPost.subject = embedHighlight(
              highlightPost?.subject,
              highlightSearchQuery
            );

            return highlightPost;
          }

          post = highlightSearchText(query, post);
          return mail.push(post);
        } else {
          setIsNoResultFound(true);
        }
      });
      setShownMessages(mail);
    }
  }, [dataMessages, query]);
  /**
   * Catch the new data based on filter to set the data into state.
   */
  useEffect(() => {
    if (filterRead === "unread") {
      setShownMessages(dataMessages);
    } else {
      const readData = dataMessages.filter((post) => post.unRead);
      setShownMessages(readData);
    }
  }, [dataMessages, filterRead]);

  const getInboxValue = (data) => {
    const cloneData = JSON.parse(JSON.stringify(data));
    let unReadData = 0;
    cloneData?.filter((item) => {
      item.messageReceipients.map((message) => {
        if (message.isNew) {
          unReadData += 1;
        }
      });
    });
    setUnReadMsg(unReadData);
  };

  /**
   * Get data based on active tab,
   * Call API to get the data.
   */
  useEffect(() => {
    switch (activeTabs) {
      case 0:
        //Call API for getInboxMessages
        function onCalledGetInboxMessages() {
          const api = new Api();
          api
            .getInboxMessages()
            .then(function (response) {
              let newResponse = messageParser(response.entities);
              setHandleShowDataUI(newResponse, "inbox");
              getInboxValue(newResponse);
            })
            .catch(function () {
              //Handle error getAllAppointment
              setHandleShowDataUI([], "inbox");
            });
        }
        onCalledGetInboxMessages();
        break;
      case 1:
        //Call API for getSentMessages
        function onCalledGetSentMessages() {
          const api = new Api();
          api
            .getSentMessages()
            .then(function (response) {
              let newResponse = messageParser(response.entities);
              setDataMessages(newResponse);
              setHandleShowDataUI(newResponse, "sent");
            })
            .catch(function () {
              //Handle error getAllAppointment
              setHandleShowDataUI([], "sent");
            });
        }
        onCalledGetSentMessages();
        break;
      case 2:
        //Call API for getDraftMessages
        function onCalledGetDraftMessages() {
          const api = new Api();
          api
            .getDraftMessages()
            .then(function (response) {
              let newResponse = messageParser(response.entities);
              setDataMessages(newResponse);
              setHandleShowDataUI(newResponse, "draft");
            })
            .catch(function () {
              //Handle error getAllAppointment
              setHandleShowDataUI([], "draft");
            });
        }
        onCalledGetDraftMessages();
        break;
      case 3:
        // handle call ap for get delete message
        //Call API for getDraftMessages
        function onCalledGetDeleteMessages() {
          const api = new Api();
          api
            .getDeletedMessages()
            .then(function (response) {
              let newResponse = messageParser(response.entities);
              setHandleShowDataUI(newResponse, "deleted");
            })
            .catch(function () {
              //Handle error getAllAppointment
              setHandleShowDataUI([], "deleted");
            });
        }
        onCalledGetDeleteMessages();
        break;
      default:
        onCalledGetInboxMessages();
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTabs]);

  /**
   * Trigger for upload file into messages
   */
  const triggerInputFile = () => {
    addAttachments.current.click();
  };

  /**
   * Handle for download attachment from messages
   * @param {string} id
   */
  const handleAssetDownload = (id) => {
    fetchSource(id);
  };

  /**
   * Handle for download multiple attachments from message as one zip file
   * @param {array} attachments
   */
  const handleDownloadAllAttachment = async (attachments) => {
    downloadMultipleAsset(attachments);
  };

  /**
   * Handle attachment file
   */
  const handleUploadAttachments = async (event) => {
    console.log("uploading...");
    const max = 4;
    const maxSize = max * 1024 * 1024; // 4MB
    if (event.target.files) {
      const files = event.target.files;
      for (const file of files) {
        if (file.size > maxSize) {
          event.target.value = null;
        } else {
          try {
            digitalAsset.setFile(file);
            await digitalAsset.upload();
            if (digitalAsset.status === "success") {
              console.log("upload success");
              setAddAttachmentsSource((oldArray) => [
                ...oldArray,
                digitalAsset.source,
              ]);
            }
          } catch (error) {
            console.error("Error when uploading", error);
          }
        }
      }
    }
  };

  const onCallViewSelectedMessageByID = (id, senderId) => {
    const api = new Api();
    api
      .viewMessagesById(id, senderId)
      .then(function () {})
      .catch(function () {
        //Handle error getAllAppointment
      });
  };

  const onCallDeleteMessage = (messageId, senderId) => {
    const api = new Api();
    api
      .deleteMessages(messageId, senderId)
      .then(function () {
        setShowDeletedDialog(false);
        setFloatingMsgText("Message successfully deleted");
        setOpenFloatingMsg(true);
      })
      .catch(function () {
        //Handle error getAllAppointment
      });
  };

  const onCallSendMessage = (postBody) => {
    const api = new Api();
    api
      .createPatientToDraft(postBody)
      .then(function () {
        setAddAttachmentsSource([]);
        setShowNewMessageDialog(false);
        setFloatingMsgText("Your message has been sent");
        setOpenFloatingMsg(true);
      })
      .catch(function () {
        // This is intentional
      });
  };

  /**
   * Handle for selected message
   * @param {object} currentData
   */
  const onSelectedMessage = (currentData) => {
    const cloneDataMessage = JSON.parse(JSON.stringify(dataMessages));
    onCallViewSelectedMessageByID(
      currentData._id,
      currentData.senderProviderId || currentData.senderPatientId
    );
    setSelectedMessage(currentData);
    cloneDataMessage.map((item) => {
      if (item.id === currentData.id) {
        item.messageReceipients.map((message) => {
          message.isNew = false;
          if (unReadMsg > 0) {
            setUnReadMsg(unReadMsg - 1);
          }
        });
      }
    });
    setDataMessages(cloneDataMessage);
    setIsSelectedMessage({
      active: true,
      id: currentData?.id || currentData._id,
    });
  };

  /**
   *  Set for handle the data and UI for tab in messaging.
   * @param {array} data
   * @param {string} tabPosition
   */
  const setHandleShowDataUI = (data, tabPosition) => {
    if (data?.length > 0) {
      setDataMessages(data);
      setNotHasMessages(false);
    } else {
      setDataMessages(data);
      setNotMessageText(tabPosition);
      setNotHasMessages(true);
    }
  };

  /**
   * Handle to change tab and rendering the Data
   * @param {int} index
   */
  const onChangeTabsSelected = (index) => {
    setQuery("");
    setActiveTabs(index);
    setIsSelectedMessage({ active: false, id: null });
  };

  /**
   * Handle for searching, this function trigger from search input field
   * @param {object} data
   */
  const handleSearch = (data) => {
    setQuery(data);
  };

  /**
   * Handle for filter message as filtered by (All or UnRead)
   * Function trigger from radio button group
   * @param {object} data
   */
  const handleFilterRadio = (data) => {
    setFilterRead(data);
  };

  /**
   * Show Delete Dialog
   * @param {string} id
   */
  const openDeletedDialog = (id, data) => {
    setSaveId({ id, key: "delete", data });
    setShowDeletedDialog(true);
  };

  /**
   * Close Delete Dialog
   */
  const closeDeletedDialog = () => {
    setShowDeletedDialog(false);
  };

  /**
   * Deleted message as selected to deleted
   */
  const deletedMessage = () => {
    // Integrasi API service for this to deleted the message base on ID
    if (saveId.key == "delete") {
      onCallDeleteMessage(
        saveId.id,
        saveId.data?.senderProviderId || saveId.data?.senderPatientId
      );
    }
  };

  /**
   * open New Message Dialog
   */
  const openNewMessageDialog = () => {
    setShowNewMessageDialog(true);
  };

  /**
   * Close New Message Dialog
   */
  const closeNewMessageDialog = () => {
    setShowNewMessageDialog(false);
  };

  const getDigitalAssetData = () => {
    let assets = [];
    if (addAttachmentsSource.length > 0) {
      addAttachmentsSource.forEach((item) => {
        const newData = {
          _id: item._id,
          name: item.name,
        };
        assets.push(newData);
      });
    }
    return assets;
  };

  /**
   * Send New Message
   */
  const sendNewMessage = (data) => {
    // Integrasi API service for this to send the message.
    const userData = JSON.parse(localStorage.getItem("userData"));
    const currentData = new moment().format("L");
    const assets = getDigitalAssetData();
    const postBody = {
      subject: data.subject,
      bodyNote: data.message,
      senderIsPatient: true,
      receiverIsPatient: false,
      senderPatientId: userData?.patientId,
      messageReceipients: [
        {
          recipientUid: data.name[0].providerId,
        },
      ],
      digitalAssets: assets,
      messageStatus: "SENT",
      priority: "HIGH",
      deliveryDate: currentData,
    };
    onCallSendMessage(postBody);
  };

  /**
   * Save Message to Draft
   */
  const saveToDraft = (data) => {
    // Integrasi API service for this to save message to draft
    const userData = JSON.parse(localStorage.getItem("userData"));
    const currentData = new moment().format("L");
    const assets = getDigitalAssetData();
    const postBody = {
      subject: data?.subject,
      bodyNote: data?.message,
      senderIsPatient: true,
      receiverIsPatient: false,
      senderPatientId: userData?.patientId,
      messageReceipients: [
        {
          recipientUid: data?.name[0]?.providerId,
        },
      ],
      digitalAssets: assets,
      messageStatus: "DRAFT",
      priority: "HIGH",
      deliveryDate: currentData,
    };
    moveToDraftPatient(postBody);
  };

  const closeDetailMessageMobileView = () => {
    setIsSelectedMessage({ active: false, id: null });
  };

  const openFilterView = () => {
    setIsFilterOpen(true);
  };

  const isDataEmpty = shownMessages.length === 0;

  const providerFieldFocus = () => {
    const dummyEl = document.getElementById("name");
    // check for focus
    const isFocused = document.activeElement === dummyEl;
    setIsFocus(isFocused);
  };

  const btnNewMessageUI = () => {
    return (
      <Box
        sx={{
          position: "fixed",
          bottom: "63px",
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#007e8f",
          borderRadius: "30px",
          height: "46px",
          padding: "0 15px",
          textAlign: "center",
          gap: "13px",
          width: "auto",
          justifyContent: "center",
          right: "16px",
        }}
      >
        <Button
          sx={{
            textTransform: "capitalize",
          }}
          onClick={openNewMessageDialog}
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
    );
  };

  return (
    <>
      <Head>
        <title>Messaging page</title>
      </Head>
      <Messaging
        inboxData={shownMessages}
        selectedMessage={selectedMessageData}
        onSelectedMessage={onSelectedMessage}
        isMessageSelected={isMessageSelected}
        activeTabs={activeTabs}
        onChangeTabEvent={onChangeTabsSelected}
        isNoMessage={notHasMessages}
        noMessageText={notMessagesText}
        onAddAttachments={triggerInputFile}
        refAttachments={addAttachments}
        handleAssetDownload={handleAssetDownload}
        attachmentsSource={addAttachmentsSource}
        openDeletedDialog={openDeletedDialog}
        openNewMessageDialog={openNewMessageDialog}
        onChangeSearch={handleSearch}
        OnFilterClicked={handleFilterRadio}
        isNoResult={isNoResultFound}
        onOpenFilter={openFilterView}
        onDownloadAllAttachmentClicked={handleDownloadAllAttachment}
        inboxValue={unReadMsg}
        filterDisabled={isDataEmpty}
      />
      <DeletedDialog
        opened={showDeletedDialog}
        handleClosed={closeDeletedDialog}
        onDeleted={deletedMessage}
      />
      <NewMessageDialog
        providerData={providerList}
        opened={showNewMessageDialog}
        handleClosed={closeNewMessageDialog}
        onAddAttachFile={triggerInputFile}
        refAttachments={addAttachments}
        attachmentsSource={addAttachmentsSource}
        onSaveToDraft={saveToDraft}
        onSendMessage={sendNewMessage}
        isDesktop={isDesktop}
        onFocused={providerFieldFocus}
        isFocused={isFocus}
      />
      <FloatingMessage
        text={floatingMsgText}
        autoHideDuration={2000}
        onOpen={openFloatingMsg}
        onClose={() => {
          setOpenFloatingMsg(!openFloatingMsg);
        }}
      />
      {!isDesktop && isMessageSelected?.active && (
        <MessageDetailsMobileView
          data={selectedMessageData}
          handleAttachments={triggerInputFile}
          addAttachments={addAttachments}
          handleAssetDownload={handleAssetDownload}
          attachmentsSource={addAttachmentsSource}
          openDeletedDialog={openDeletedDialog}
          showDetail={isMessageSelected?.active}
          onCloseDetailMsg={closeDetailMessageMobileView}
          isSelectedMsg={isMessageSelected}
          isDesktop={isDesktop}
        />
      )}
      {isFilterOpen && (
        <MessagingFilterComponent
          OnFilterClicked={handleFilterRadio}
          onCloseFilter={() => setIsFilterOpen(false)}
        />
      )}
      {!isDesktop && btnNewMessageUI()}
      <input
        ref={addAttachments}
        multiple
        type="file"
        data-testid={"loc_uploadImage"}
        hidden
        onChange={handleUploadAttachments}
      />
    </>
  );
}
