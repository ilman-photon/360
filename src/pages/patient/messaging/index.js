import { useState, useEffect, useRef } from "react";
import Messaging from "../../../components/organisms/Messaging/messaging";
import { Api } from "../../api/api";
import DigitalAssetsHandler from "../../../utils/digitalAssetsHandler";
import {
  downloadMultipleAsset,
  fetchSource,
} from "../../../utils/fetchDigitalAssetSource";
import DeletedDialog from "../../../components/molecules/Messaging/DeletedDialog";
import NewMessageDialog from "../../../components/molecules/Messaging/NewMessageDialog";
import FloatingMessage from "../../../components/molecules/FloatingMessage/floatingMessage";
import MessageDetailsMobileView from "../../../components/molecules/Messaging/MessageDetailsMobileView";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import MessagingFilterComponent from "../../../components/molecules/Messaging/MessagingFilterComponent";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { useTranslation } from "next-i18next";
import { getArrayValue } from "../../../utils/bioUtils";

export default function MessagingPage() {
  const [selectedMessageData, setSelectedMessage] = useState({});
  const [isMessageSelected, setIsSelectedMessage] = useState({
    active: false,
    id: null,
  });
  const [activeTabs, setActiveTabs] = useState(0);
  const [dataMessages, setDataMessages] = useState([]);
  const [shownMessages, setShownMessages] = useState([]);
  const [notHasMessages, setNotHasMessages] = useState(false);
  const [notMessagesText, setNotMessageText] = useState("");
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
  });
  const [providerList, setProviderList] = useState([]);
  const [isRequested, setIsRequested] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  let isRequest = false;

  //Remove this when service available
  const [storageData, setStorageData] = useState({
    delete: [],
    reply: [],
    sent: [],
    draft: [],
  });

  const { t } = useTranslation("translation", {
    keyPrefix: "messaging",
  });

  const mapper = (responses) => {
    const data = [];
    responses.map((response) => {
      const designation = response.designation
        ? `, ${response.designation}`
        : "";
      const name = `${response.firstName || ""} ${
        response.lastName || ""
      }${designation}`;

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
    setProviderList(data);
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

  const embedHighlight = (data, query) => {
    const textToSearch = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
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
          function highlightSearchText(query, post) {
            const lastIndex = post.messages?.length - 1;
            post.messages[lastIndex] = embedHighlight(
              post.messages[lastIndex],
              query
            );
            post.subject = embedHighlight(post?.subject, query);

            return post;
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

  /**
   * Please delete this after service available
   */
  function modifyData(data, key) {
    let modifyDataResponse = data;
    switch (key) {
      case "inbox":
        const filterInboxData = [];
        const inboxData = JSON.parse(JSON.stringify(data));
        for (const item in inboxData) {
          const id = inboxData[item].id;
          const hasDataInLocalStorage = storageData?.delete?.find(
            (strData) => strData?.id === id
          );
          !hasDataInLocalStorage && filterInboxData.push(inboxData[item]);
        }

        setIsSelectedMessage({
          active: false,
          id: null,
        });
        modifyDataResponse = filterInboxData;
        break;
      case "deleted":
        const deletedData = data.concat(storageData?.delete);
        modifyDataResponse = deletedData;
        break;
    }
    return modifyDataResponse;
  }

  /**
   * Get data based on active tab,
   * Call API to get the data.
   */
  useEffect(() => {
    switch (activeTabs) {
      case 0:
        //Call API for getAllMessages
        function onCalledGetAllMessages() {
          const api = new Api();
          api
            .getAllMessages()
            .then(function (response) {
              let newResponse = response;
              if (Object.keys(storageData).length !== 0) {
                newResponse = modifyData(newResponse, "inbox");
              }
              setHandleShowDataUI(newResponse, "inbox");
            })
            .catch(function () {
              //Handle error getAllAppointment
            });
        }
        onCalledGetAllMessages();
        break;
      case 1:
        //Call API for getSentMessages
        function onCalledGetSentMessages() {
          const api = new Api();
          api
            .getSentMessages()
            .then(function (response) {
              setDataMessages(response);
              setHandleShowDataUI(response, "sent");
            })
            .catch(function () {
              //Handle error getAllAppointment
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
              setDataMessages(response);
              setHandleShowDataUI(response, "draft");
            })
            .catch(function () {
              //Handle error getAllAppointment
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
            .getDeleteMessages()
            .then(function (response) {
              let newResponse = response;
              if (Object.keys(storageData).length !== 0) {
                newResponse = modifyData(response, "deleted");
              }
              setHandleShowDataUI(newResponse, "deleted");
            })
            .catch(function () {
              //Handle error getAllAppointment
            });
        }
        onCalledGetDeleteMessages();
        break;
      default:
        onCalledGetAllMessages();
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTabs, storageData]);

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
    const max = 4;
    const maxSize = max * 1024 * 1024; // 4MB
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      if (file.size > maxSize) {
        event.target.value = null;
      } else {
        try {
          digitalAsset.setFile(file);
          await digitalAsset.upload();
          if (digitalAsset.status === "success") {
            addAttachmentsSource.push(digitalAsset.source);
            setAddAttachmentsSource(assetUploaded);
          }
        } catch (error) {
          console.error("Error when uploading", error);
        }
      }
    }
  };

  /**
   * Handle for selected message
   * @param {object} currentData
   */
  const onSelectedMessage = (currentData) => {
    const cloneDataMessage = JSON.parse(JSON.stringify(dataMessages));
    setSelectedMessage(currentData);
    cloneDataMessage.map((item) => {
      if (item.id === currentData.id) {
        item.unRead = false;
      }
    });
    setDataMessages(cloneDataMessage);
    setIsSelectedMessage({ active: true, id: currentData?.id });
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
    switch (index) {
      case 0:
        setHandleShowDataUI(dataMessages, "inbox");
        break;
      case 1:
        setHandleShowDataUI(dataMessages, "sent");
        break;
      case 2:
        setHandleShowDataUI(dataMessages, "draft");
        break;
      case 3:
        setHandleShowDataUI(dataMessages, "deleted");
        break;
      default:
        break;
    }
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
  const openDeletedDialog = (id) => {
    setSaveId({ id, key: "delete" });
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
    const cloneData = JSON.parse(JSON.stringify(dataMessages));
    const deletedData = storageData.delete;
    cloneData.map((item) => {
      if (item.id === saveId.id) {
        deletedData.push(item);
        setStorageData({ delete: deletedData });
      }
    });
    setShowDeletedDialog(false);
    setFloatingMsgText("Message successfully deleted");
    setOpenFloatingMsg(true);
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

  /**
   * Send New Message
   */
  const sendNewMessage = () => {
    // Integrasi API service for this to send the message.
    setAddAttachmentsSource([]);
    setShowNewMessageDialog(false);
    setFloatingMsgText("Your message has been sent");
    setOpenFloatingMsg(true);
  };

  /**
   * Save Message to Draft
   */
  const saveToDraft = () => {
    // Integrasi API service for this to save message to draft
  };

  const closeDetailMessageMobileView = () => {
    setIsSelectedMessage({ active: false, id: null });
  };

  const openFilterView = () => {
    setIsFilterOpen(true);
  };

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
        onClose={(openFloatingMsg) => {
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
        type="file"
        data-testid={"loc_uploadImage"}
        hidden
        onChange={handleUploadAttachments}
      />
    </>
  );
}
