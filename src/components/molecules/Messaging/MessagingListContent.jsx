import * as React from "react";
import styles from "./styles.module.scss";
import MessagingCardView from "./MessagingCardView";

export const MessagingListContent = ({ data, onSelected, isSelectedMsg }) => {
  const getLastMessage = (messages) => {
    return messages?.length > 0 && messages[messages.length - 1];
  };

  const checkMessagesHasAttachment = (messages) => {
    let lastHasAttachments = false;
    messages?.map((item, index) => {
      if (index === 0) {
        lastHasAttachments = item?.attachments?.length > 0;
      } else {
        if (lastHasAttachments === true && item?.attachments?.length > 0) {
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

  const checkIsDraftMessages = (messages) => {
    let isDraftMsg = false;
    messages?.map((item) => {
      isDraftMsg = item?.isDraft !== undefined;
    });
    return isDraftMsg;
  };

  return (
    <div className={styles.listContainer}>
      {data.map((item) => {
        return (
          <MessagingCardView
            key={item.id}
            id={item.id}
            subject={item.subject}
            name={getLastMessage(item.messages)?.name}
            time={getLastMessage(item.messages)?.modifiedAt}
            message={getLastMessage(item.messages)?.message}
            isHasAttach={checkMessagesHasAttachment(item.messages)}
            isUnread={item.unRead && item.unRead !== undefined}
            onSelect={() => onSelected(item)}
            isSelectedMsg={isSelectedMsg}
            isDraftMsg={checkIsDraftMessages(item.messages)}
          />
        );
      })}
    </div>
  );
};

export default MessagingListContent;
