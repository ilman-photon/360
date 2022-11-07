export default function getDeleteMessages(req, res) {
  if (req.method === "GET") {
    const data = [
      {
        id: 6888,
        subject: "Follow-up from past visit/message",
        messages: [
          {
            id: 4229,
            name: "Anthony Beth, D.O.",
            modifiedAt: "Oct 09, 2022, 4:31:42 PM",
            message:
              "I have attached the updated note about the patient. It was nice seeing you at the appointment we’ll need...",
            attachments: [],
            source: "/doctor.png",
          },
        ],
        unRead: false,
      },
    ];
    res.status(200).json(data);
  }
}
