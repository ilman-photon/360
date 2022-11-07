export default function getDraftMessages(req, res) {
  if (req.method === "GET") {
    const data = [
      {
        id: 6783,
        subject: "Follow-up from past visit/message",
        messages: [
          {
            id: 9899,
            name: "Anthony Beth, D.O.",
            modifiedAt: "Oct 09, 2022, 4:31:42 PM",
            message:
              "I have attached the updated note about the patient. It was nice seeing you at the appointment we’ll need...",
            attachments: [],
            source: "/doctor.png",
            isDraft: false,
          },
          {
            id: 9899,
            name: "Anthony Beth, D.O.",
            modifiedAt: "Oct 09, 2022, 4:31:42 PM",
            message:
              "I have attached the updated note about the patient. It was nice seeing you at the appointment we’ll need...",
            attachments: [],
            source: "/doctor.png",
            isDraft: true,
          },
        ],
        unRead: false,
      },
      {
        id: 9998,
        subject: "",
        messages: [
          {
            id: 9899,
            name: "",
            modifiedAt: "Oct 09, 2022, 4:31:42 PM",
            message:
              "I have attached the updated note about the patient. It was nice seeing you at the appointment we’ll need...",
            attachments: [],
            source: "",
            isDraft: true,
          },
        ],
        unRead: false,
      },
    ];
    res.status(200).json(data);
  }
}
