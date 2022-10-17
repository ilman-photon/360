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
    createData(7, false, "appointment", "09/10/2022 12:00"),
    createData(8, true, "prescription-refill", "08/08/2022 12:00"),
    createData(9, false, "prescription-refill", "09/09/2022 12:00"),
    createData(10, true, "appointment", "09/10/2022 12:00"),
    createData(11, false, "prescription-refill", "08/08/2022 12:00"),
    createData(12, true, "test-result", "09/09/2022 12:00"),
    createData(13, true, "prescription-refill", "09/09/2022 12:00"),
    createData(14, true, "appointment", "09/10/2022 12:00"),
    createData(15, false, "test-result", "09/09/2022 12:00"),
    createData(16, false, "appointment", "09/10/2022 12:00"),
    createData(17, true, "prescription-refill", "08/08/2022 12:00"),
    createData(18, false, "appointment", "09/10/2022 12:00"),
    createData(19, true, "prescription-refill", "08/08/2022 12:00"),
    createData(20, false, "prescription-refill", "09/09/2022 12:00"),
    createData(21, true, "appointment", "09/10/2022 12:00"),
    createData(22, false, "prescription-refill", "08/08/2022 12:00"),
    createData(23, true, "appointment", "09/10/2022 12:00"),
    createData(24, false, "test-result", "09/09/2022 12:00"),
    createData(25, false, "prescription-refill", "09/09/2022 12:00"),
    createData(26, false, "prescription-refill", "08/08/2022 12:00"),
    createData(27, false, "appointment", "09/10/2022 12:00"),
    createData(28, true, "prescription-refill", "08/08/2022 12:00"),
    createData(29, false, "appointment", "09/10/2022 12:00"),
    createData(30, true, "prescription-refill", "08/08/2022 12:00"),
    createData(31, false, "prescription-refill", "09/09/2022 12:00"),
  ];

  if (req.method === "GET") {
    res.status(200).json(dummyNotifications);
  }
}
