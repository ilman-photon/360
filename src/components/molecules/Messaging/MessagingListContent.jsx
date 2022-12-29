import * as React from "react";
import styles from "./styles.module.scss";
import MessagingCardView from "./MessagingCardView";

export const MessagingListContent = ({ data, onSelected, isSelectedMsg }) => {
  const checkStatusNewMessage = (messages) => {
    let isUnRead = false;
    if (messages?.length > 0) {
      messages.map((item) => {
        if (item.isNew) {
          isUnRead = item.isNew;
        }
      });
    }
    return isUnRead;
  };

  const getNewMessage = (messages) => {
    let newMessage = messages?.length > 0 && messages[0];
    if (messages?.length > 0) {
      messages.map((item) => {
        if (item.isNew) {
          newMessage = item;
        }
      });
    }
    return newMessage;
  };

  const checkMessagesHasAttachment = (digitalAssets) => {
    let lastHasAttachments = false;
    digitalAssets?.map((item, index) => {
      if (index === 0) {
        lastHasAttachments = digitalAssets?.length > 0;
      } else {
        if (lastHasAttachments === true && digitalAssets?.length > 0) {
          lastHasAttachments = true;
        } else if (
          lastHasAttachments === false &&
          item?.attachments?.length === 0
        ) {
          lastHasAttachments = false;
        } else {
          lastHasAttachments = true;
        }
      }
    });
    return lastHasAttachments;
  };

  const checkIsDraftMessages = (status) => {
    let isDraftMsg = false;
    isDraftMsg = status !== "SENT";
    return isDraftMsg;
  };

  return (
    <div className={styles.listContainer}>
      {data?.map((item) => {
        return (
          <MessagingCardView
            key={item._id}
            id={item._id}
            subject={item.subject}
            name={getNewMessage(item.messageReceipients)?.name}
            lastName={getNewMessage(item.messageReceipients)?.lastName}
            time={item.deliveryDate}
            message={item.bodyNote}
            isHasAttach={checkMessagesHasAttachment(item.digitalAssets)}
            isUnread={checkStatusNewMessage(item.messageReceipients)}
            onSelect={() => onSelected(item)}
            isSelectedMsg={isSelectedMsg}
            isDraftMsg={checkIsDraftMessages(item.messageStatus)}
            designation={getNewMessage(item.messageReceipients)?.designation}
          />
        );
      })}
    </div>
  );
};

export default MessagingListContent;
