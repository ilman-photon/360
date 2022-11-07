export default function getSentMessages(req, res) {
  if (req.method === "GET") {
    const data = [
      {
        id: 6783,
        subject: "Follow-up from past visit/message",
        messages: [
          {
            id: 5647,
            name: "Daniel Radclief SpOg",
            modifiedAt: "Oct 14, 2022, 4:31:42 PM",
            message:
              "I have attached the updated note about the patient. It was nice seeing you at the appointment we’ll need...",
            attachments: [
              {
                fileName: "PatientNotes.pdf",
                url: "https://www.africau.edu/images/default/sample.pdf",
              },
              {
                fileName: "PatientNotes2.pdf",
                url: "https://www.africau.edu/images/default/sample.pdf",
              },
              {
                fileName: "PatientNotes3.pdf",
                url: "https://www.africau.edu/images/default/sample.pdf",
              },
            ],
            source: null,
          },
        ],
        unRead: false,
      },
      {
        id: 2333,
        subject: "Your lab results",
        messages: [
          {
            id: 5567,
            name: "Barnard Don, D.O.",
            modifiedAt: "Oct 15, 2022, 4:31:42 PM",
            message:
              "I have attached the updated note about the patient. It was nice seeing you at the appointment we’ll need...",
            attachments: [
              {
                fileName: "PatientNotes.pdf",
                url: "https://www.africau.edu/images/default/sample.pdf",
              },
            ],
            source: "/doctor.png",
          },
        ],
        unRead: false,
      },
      {
        id: 3423,
        subject: "Follow-up from past visit/message",
        messages: [
          {
            id: 3722,
            name: "Jodi Berzak, D.O.",
            modifiedAt: "Oct 18, 2022, 4:31:42 PM",
            message:
              "I have attached the updated note about the patient. It was nice seeing you at the appointment we’ll need...",
            attachments: [
              {
                fileName: "PatientNotes.pdf",
                url: "https://www.africau.edu/images/default/sample.pdf",
              },
              {
                fileName: "PatientNotes2.pdf",
                url: "https://www.africau.edu/images/default/sample.pdf",
              },
              {
                fileName: "PatientNotes3.pdf",
                url: "https://www.africau.edu/images/default/sample.pdf",
              },
            ],
            source: "/doctor.png",
          },
          {
            name: "Daniel Radclief SpOg",
            modifiedAt: "Oct 19, 2022, 4:31:42 PM",
            message:
              "I have attached the updated note about the patient. It was nice seeing you at the appointment we’ll need...",
            attachments: [
              {
                fileName: "PatientNotes.pdf",
                url: "https://www.africau.edu/images/default/sample.pdf",
              },
              {
                fileName: "PatientNotes2.pdf",
                url: "https://www.africau.edu/images/default/sample.pdf",
              },
              {
                fileName: "PatientNotes3.pdf",
                url: "https://www.africau.edu/images/default/sample.pdf",
              },
            ],
            source: "/doctor.png",
          },
          {
            name: "James Bond, D.O.",
            modifiedAt: "Oct 20, 2022, 4:31:42 PM",
            message:
              "I have attached the updated note about the patient. It was nice seeing you at the appointment we’ll need...",
            attachments: [
              {
                fileName: "PatientNotes.pdf",
                url: "https://www.africau.edu/images/default/sample.pdf",
              },
              {
                fileName: "PatientNotes2.pdf",
                url: "https://www.africau.edu/images/default/sample.pdf",
              },
              {
                fileName: "PatientNotes3.pdf",
                url: "https://www.africau.edu/images/default/sample.pdf",
              },
            ],
            source: "/doctor.png",
          },
        ],
        unRead: false,
      },
    ];
    res.status(200).json(data);
  }
}
