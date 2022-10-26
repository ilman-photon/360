export default function Notifications(req, res) {
  const createData = (id, isRead, type, createdAt, content, details) => {
    return {
      id,
      isRead,
      type,
      createdAt,
      content,
      details,
    };
  };

  const realDummyNotifications = [
    createData(
      1,
      false,
      "appointment-first-reminder",
      "2022-10-26T13:22:45.177Z",
      "You have an <b>Block/No Appt appointment</b> in 3 days.",
      {
        appointmentData: {
          appointmentId: "123456",
          appointmentDate: "2022-10-26T13:22:45.177Z",
          appointmentTypes: {
            name: "Block/No Appt",
          },
        },
      }
    ),
    createData(
      2,
      false,
      "appointment-second-reminder",
      "2022-10-26T13:22:45.177Z",
      "You have an <b>Block/No Appt appointment</b> tomorrow.",
      {
        appointmentData: {
          appointmentId: "123456",
          appointmentDate: "2022-10-26T13:22:45.177Z",
          appointmentTypes: {
            name: "Block/No Appt",
          },
        },
      }
    ),
    createData(
      3,
      false,
      "prescription-refill",
      "2022-10-26T13:22:45.177Z",
      "You have an <b>Block/No Appt appointment</b> tomorrow."
    ),
    createData(
      4,
      false,
      "test-result",
      "2022-10-26T13:22:45.177Z",
      "You <b>lab test test results</b> are available now."
    ),
    createData(
      5,
      false,
      "message",
      "2022-10-26T13:22:45.177Z",
      "You have received a <b>new message</b> from <b>John Roe, O.D.</b>",
      {
        messageData: {
          messageId: "12345",
        },
        providerData: {
          providerName: "John Roe, O.D.",
        },
      }
    ),
    createData(
      6,
      false,
      "invoice",
      "2022-10-26T13:22:45.177Z",
      "There’s a new <b>outstanding invoice</b>",
      {
        invoiceData: {
          invoiceId: "12345",
        },
      }
    ),
    createData(
      7,
      false,
      "appointment-summary",
      "2022-10-26T13:22:45.177Z",
      "Your visit summary for your appointment on <b>Tuesday, May 15</b> is available now.",
      {
        visitSummaryData: {
          visitSummaryId: "12345",
        },
      }
    ),
    createData(
      8,
      false,
      "prescription-glasses",
      "2022-10-26T13:22:45.177Z",
      "You have your <b>glasses prescription</b> available now."
    ),
    createData(
      9,
      false,
      "prescription-contact",
      "2022-10-26T13:22:45.177Z",
      "You have your <b>contact lens prescription</b> available now."
    ),
    createData(
      10,
      false,
      "prescription-aspirin",
      "2022-10-26T13:22:45.177Z",
      "Your <b>Aspirin prescription</b> is now available."
    ),
    createData(
      11,
      false,
      "contact-lens",
      "2022-10-26T13:22:45.177Z",
      "Your <b>Contact Lens</b> are available for pickup."
    ),
    createData(
      12,
      false,
      "glasses",
      "2022-10-26T13:22:45.177Z",
      "Your <b>Glasses</b> are available for pickup."
    ),
    createData(
      13,
      false,
      "aspirin",
      "2022-10-26T13:22:45.177Z",
      "Hi! It is time to take your medication: <b>Aspirin</b>"
    ),
  ];

  if (req.method === "GET") {
    res.status(200).json(realDummyNotifications);
  }
}
