const getUserProfile = () => {
  const userProfile = JSON.parse(localStorage.getItem("userProfile"));
  return {
    userId: userProfile?._id,
    userDOB: userProfile?.dob,
    userFirstName: userProfile?.firstName,
    userLastName: userProfile?.lastName,
    userMRN: userProfile?.mrn,
    userSex: userProfile?.sex,
  };
};

const getDetailData = (data) => {
  let detailsData = {};
  const userProfile = getUserProfile();

  if (Object.hasOwn(data, "employee")) {
    detailsData = {
      isNew: data.isNew,
      isDeleted: data.isDeleted,
      isStar: data.isStar,
      recipientType: data.recipientType,
      senderId: data.employee._id,
      name: data.employee.firstName,
      lastName: data.employee.lastName,
      designation: data.employee.designation,
      recipientUid: data.recipientUid,
    };
  } else {
    detailsData = {
      isNew: data.isNew,
      isDeleted: data.isDeleted,
      isStar: data.isStar,
      recipientType: data.recipientType,
      senderId: data.senderPatientId,
      name: userProfile.userFirstName,
      lastName: userProfile.userLastName,
    };
  }

  return detailsData;
};

const getMessageReceipientsData = (messagesData) => {
  let newMessageData = [];
  messagesData.map((message) => {
    const newObj = getDetailData(message);
    newMessageData.push(newObj);
  });
  return newMessageData;
};

export const messageParser = (data = []) => {
  let newData = [];
  data.map((item) => {
    const objData = {
      _created: item._created,
      _createdBy: item._createdBy,
      _id: item._id,
      _updated: item._updated,
      _version: item._version,
      bodyNote: item.bodyNote,
      deliveryDate: item.deliveryDate,
      digitalAssets: item.digitalAssets,
      messageReceipients: getMessageReceipientsData(item.messageReceipients),
      messageStatus: item.messageStatus,
      priority: item.priority,
      senderIsPatient: item.senderIsPatient,
      senderIsProvider: item.senderIsProvider,
      senderPatientId: item.senderPatientId,
      senderProviderId: item.senderProviderId,
      status: item.status,
      subject: item.subject,
    };
    newData.push(objData);
  });
  return newData;
};

export const postBodySentDraft = (data = {}) => {
  return {
    _created: data._created,
    _createdBy: data._createdBy,
    _id: data._id,
    _updated: data._updated,
    _version: data._version,
    bodyNote: data.bodyNote,
    bodyReferences: [
      {
        _id: data._id,
        code: "",
      },
    ],
    deliveryDate: data.deliveryDate,
    digitalAssets: data.digitalAssets,
    messageReceipients: data.messageReceipients,
    messageStatus: data.messageStatus,
    patient: {
      _id: getUserProfile().userId,
      dob: getUserProfile().userDOB,
      firstName: getUserProfile().userFirstName,
      lastName: getUserProfile().userLastName,
      mrn: getUserProfile().userMRN,
      sex: getUserProfile().userSex,
    },
    priority: data.priority,
    senderIsPatient: data.senderIsPatient,
    senderIsProvider: data.senderIsProvider,
    senderPatientId: data.senderPatientId,
    senderProviderId: data.senderProviderId,
    sentBy: {
      _id: getUserProfile().userId,
      designation: "",
      firstName: getUserProfile().userFirstName,
      lastName: getUserProfile().userLastName,
    },
    sources: [{}],
    status: data.status,
    subject: data.subject,
  };
};
