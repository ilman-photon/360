export default function Notifications(req, res) {
  const createData = (id, isRead, type, createdAt, data) => {
    return {
      id,
      isRead,
      type,
      createdAt,
      data,
    };
  };

  const dummyNotifications = [
    createData(1, true, "appointment", "09/10/2022 12:00"),
    createData(2, false, "test-result", "09/09/2022 12:00"),
    createData(3, false, "prescription-refill", "09/09/2022 12:00"),
    createData(4, false, "prescription-refill", "08/08/2022 12:00"),
    createData(5, true, "test-result", "09/09/2022 12:00"),
    createData(6, true, "prescription-refill", "09/09/2022 12:00"),
    createData(7, false, "aspirin", "09/10/2022 12:00"),
    createData(8, true, "glasses", "08/08/2022 12:00"),
    createData(9, false, "prescription-refill", "09/09/2022 12:00"),
    createData(10, true, "appointment", "09/10/2022 12:00"),
    createData(11, false, "contact-lens", "08/08/2022 12:00"),
    createData(12, true, "prescription-glasses", "09/09/2022 12:00"),
    createData(13, true, "prescription-refill", "09/09/2022 12:00"),
    createData(14, true, "prescription-contact", "09/10/2022 12:00"),
    createData(15, false, "test-result", "09/09/2022 12:00"),
    createData(16, false, "appointment", "09/10/2022 12:00"),
    createData(17, true, "prescription-aspirin", "08/08/2022 12:00"),
    createData(18, false, "appointment", "09/10/2022 12:00"),
    createData(19, true, "aspirin", "08/08/2022 12:00"),
    createData(20, false, "glasses", "09/09/2022 12:00"),
    createData(21, true, "contact-lens", "09/10/2022 12:00"),
    createData(22, false, "prescription-refill", "08/08/2022 12:00"),
    createData(23, true, "appointment", "09/10/2022 12:00"),
    createData(24, false, "prescription-glasses", "09/09/2022 12:00"),
    createData(25, false, "prescription-refill", "09/09/2022 12:00"),
    createData(26, false, "prescription-aspirin", "08/08/2022 12:00"),
    createData(27, false, "prescription-contact", "10/10/2022 12:00"),
    createData(28, true, "prescription-refill", "08/08/2022 12:00"),
    createData(29, false, "appointment", "09/10/2022 12:00"),
    createData(30, true, "message", "08/08/2022 12:00"),
    createData(31, false, "message", "09/09/2022 12:00"),
    createData(32, true, "prescription-refill", "08/08/2022 12:00"),
    createData(33, false, "appointment", "09/10/2022 12:00"),
    createData(34, true, "appointment-summary", "08/08/2022 12:00"),
    createData(35, false, "appointment-summary", "09/09/2022 12:00"),
    createData(36, true, "invoice", "08/08/2022 12:00"),
    createData(37, false, "appointment", "09/10/2022 12:00"),
    createData(38, true, "prescription-refill", "08/08/2022 12:00"),
    createData(39, false, "invoice", "10/12/2022 12:00"),
    createData(40, true, "appointment-one", "09/10/2022 12:00"),
    createData(41, false, "appointment-one", "09/10/2022 12:00"),
  ];

  if (req.method === "GET") {
    res.status(200).json(dummyNotifications);
  }
}
