export default function getAllMessages(req, res) {
  if (req.method === "GET") {
    const data = [
      {
        id: 6783,
        subject: "Follow-up from past visit/message",
        messages: [
          {
            id: 7395,
            name: "Anthony Beth, D.O.",
            modifiedAt: "Oct 11, 2022, 4:31:42 PM",
            message:
              "I have attached the updated note about the patient. It was nice seeing you at the appointment we’ll need...",
            attachments: [],
            source: "/doctor.png",
          },
          {
            id: 2345,
            name: "Daniel Radclief SpOg",
            modifiedAt: "Oct 13, 2022, 4:31:42 PM",
            message:
              "I have attached the updated note about the patient. It was nice seeing you at the appointment we’ll need...",
            attachments: [
              {
                id: "682d29e5-9d85-498c-b2dc-8be8ba4b3b64",
                fileName: "PatientNotes.pdf",
                url: "https://www.africau.edu/images/default/sample.pdf",
              },
              {
                id: "682d29e5-9d85-498c-b2dc-8be8ba4b3b64",
                fileName: "PatientNotes2.pdf",
                url: "https://www.africau.edu/images/default/sample.pdf",
              },
              {
                id: "682d29e5-9d85-498c-b2dc-8be8ba4b3b64",
                fileName: "PatientNotes3.pdf",
                url: "https://www.africau.edu/images/default/sample.pdf",
              },
            ],
            source: null,
          },
          {
            id: 9333,
            name: "James Black, D.O.",
            modifiedAt: "Oct 25, 2022, 4:31:42 PM",
            message:
              "I have attached the updated note about the patient. It was nice seeing you at the appointment we’ll need...",
            attachments: [
              {
                id: "682d29e5-9d85-498c-b2dc-8be8ba4b3b64",
                fileName: "PatientNotes.pdf",
                url: "https://www.africau.edu/images/default/sample.pdf",
              },
              {
                id: "682d29e5-9d85-498c-b2dc-8be8ba4b3b64",
                fileName: "PatientNotes2.pdf",
                url: "https://www.africau.edu/images/default/sample.pdf",
              },
              {
                id: "682d29e5-9d85-498c-b2dc-8be8ba4b3b64",
                fileName: "PatientNotes3.pdf",
                url: "https://www.africau.edu/images/default/sample.pdf",
              },
            ],
            source: "/doctor.png",
          },
        ],
        unRead: true,
      },
      {
        id: 2333,
        subject: "Your lab results",
        messages: [
          {
            id: 8399,
            name: "Barnard Don, D.O.",
            modifiedAt: "Oct 08, 2022, 4:31:42 PM",
            message:
              "I have attached the updated note about the patient. It was nice seeing you at the appointment we’ll need...",
            attachments: [],
            source: "/doctor.png",
          },
          {
            id: 8900,
            name: "Aliando Explend SpOg",
            modifiedAt: "Oct 09, 2022, 4:31:42 PM",
            message:
              "I have attached the updated note about the patient. It was nice seeing you at the appointment we’ll need...",
            attachments: [],
            source: "/doctor.png",
          },
          {
            id: 5600,
            name: "Janed Dunt, D.O.",
            modifiedAt: "Oct 10, 2022, 4:31:42 PM",
            message:
              "I have attached the updated note about the patient. It was nice seeing you at the appointment we’ll need...",
            attachments: [],
            source: null,
          },
        ],
        unRead: false,
      },
      {
        id: 3423,
        subject: "Follow-up from past visit/message",
        messages: [
          {
            id: 4533,
            name: "Jodi Berzak, D.O.",
            modifiedAt: "Sep 30, 2022, 4:31:42 PM",
            message:
              "I have attached the updated note about the patient. It was nice seeing you at the appointment we’ll need...",
            attachments: [
              {
                id: "682d29e5-9d85-498c-b2dc-8be8ba4b3b64",
                fileName: "PatientNotes.pdf",
                url: "https://www.africau.edu/images/default/sample.pdf",
              },
              {
                id: "682d29e5-9d85-498c-b2dc-8be8ba4b3b64",
                fileName: "PatientNotes2.pdf",
                url: "https://www.africau.edu/images/default/sample.pdf",
              },
              {
                id: "682d29e5-9d85-498c-b2dc-8be8ba4b3b64",
                fileName: "PatientNotes3.pdf",
                url: "https://www.africau.edu/images/default/sample.pdf",
              },
            ],
            source: "/doctor.png",
          },
          {
            id: 7789,
            name: "Daniel Radclief SpOg",
            modifiedAt: "Sep 29, 2022, 4:31:42 PM",
            message:
              "I have attached the updated note about the patient. It was nice seeing you at the appointment we’ll need...",
            attachments: [
              {
                id: "682d29e5-9d85-498c-b2dc-8be8ba4b3b64",
                fileName: "PatientNotes.pdf",
                url: "https://www.africau.edu/images/default/sample.pdf",
              },
              {
                id: "682d29e5-9d85-498c-b2dc-8be8ba4b3b64",
                fileName: "PatientNotes2.pdf",
                url: "https://www.africau.edu/images/default/sample.pdf",
              },
              {
                id: "682d29e5-9d85-498c-b2dc-8be8ba4b3b64",
                fileName: "PatientNotes3.pdf",
                url: "https://www.africau.edu/images/default/sample.pdf",
              },
            ],
            source: "/doctor.png",
          },
          {
            id: 5464,
            name: "James Bond, D.O.",
            modifiedAt: "Sep 28, 2022, 4:31:42 PM",
            message:
              "I have attached the updated note about the patient. It was nice seeing you at the appointment we’ll need...",
            attachments: [
              {
                id: "682d29e5-9d85-498c-b2dc-8be8ba4b3b64",
                fileName: "PatientNotes.pdf",
                url: "https://www.africau.edu/images/default/sample.pdf",
              },
              {
                id: "682d29e5-9d85-498c-b2dc-8be8ba4b3b64",
                fileName: "PatientNotes2.pdf",
                url: "https://www.africau.edu/images/default/sample.pdf",
              },
              {
                id: "682d29e5-9d85-498c-b2dc-8be8ba4b3b64",
                fileName: "PatientNotes3.pdf",
                url: "https://www.africau.edu/images/default/sample.pdf",
              },
            ],
            source: "/doctor.png",
          },
        ],
        unRead: false,
      },
      {
        id: 4234,
        subject: "Your lab results",
        messages: [
          {
            id: 2234,
            name: "Jodi Berzak, D.O.",
            modifiedAt: "Sep 15, 2022, 4:31:42 PM",
            message:
              "I have attached the updated note about the patient. It was nice seeing you at the appointment we’ll need...",
            attachments: [
              {
                id: "682d29e5-9d85-498c-b2dc-8be8ba4b3b64",
                fileName: "PatientNotes.pdf",
                url: "https://www.africau.edu/images/default/sample.pdf",
              },
              {
                id: "682d29e5-9d85-498c-b2dc-8be8ba4b3b64",
                fileName: "PatientNotes2.pdf",
                url: "https://www.africau.edu/images/default/sample.pdf",
              },
              {
                id: "682d29e5-9d85-498c-b2dc-8be8ba4b3b64",
                fileName: "PatientNotes3.pdf",
                url: "https://www.africau.edu/images/default/sample.pdf",
              },
            ],
            source: "/doctor.png",
          },
          {
            id: 1123,
            name: "Daniel Radclief SpOg",
            modifiedAt: "Sep 14, 2022, 4:31:42 PM",
            message:
              "I have attached the updated note about the patient. It was nice seeing you at the appointment we’ll need...",
            attachments: [
              {
                id: "682d29e5-9d85-498c-b2dc-8be8ba4b3b64",
                fileName: "PatientNotes.pdf",
                url: "https://www.africau.edu/images/default/sample.pdf",
              },
              {
                id: "682d29e5-9d85-498c-b2dc-8be8ba4b3b64",
                fileName: "PatientNotes2.pdf",
                url: "https://www.africau.edu/images/default/sample.pdf",
              },
              {
                id: "682d29e5-9d85-498c-b2dc-8be8ba4b3b64",
                fileName: "PatientNotes3.pdf",
                url: "https://www.africau.edu/images/default/sample.pdf",
              },
            ],
            source: "/doctor.png",
          },
          {
            id: 1123,
            name: "James Bond, D.O.",
            modifiedAt: "Sep 13, 2022, 4:31:42 PM",
            message:
              "I have attached the updated note about the patient. It was nice seeing you at the appointment we’ll need...",
            attachments: [
              {
                id: "682d29e5-9d85-498c-b2dc-8be8ba4b3b64",
                fileName: "PatientNotes.pdf",
                url: "https://www.africau.edu/images/default/sample.pdf",
              },
              {
                id: "682d29e5-9d85-498c-b2dc-8be8ba4b3b64",
                fileName: "PatientNotes2.pdf",
                url: "https://www.africau.edu/images/default/sample.pdf",
              },
              {
                id: "682d29e5-9d85-498c-b2dc-8be8ba4b3b64",
                fileName: "PatientNotes3.pdf",
                url: "https://www.africau.edu/images/default/sample.pdf",
              },
            ],
            source: "/doctor.png",
          },
        ],
        unRead: true,
      },
      {
        id: 4567,
        subject: "Follow-up from past visit/message",
        messages: [
          {
            id: 2312,
            name: "Jodi Berzak, D.O.",
            modifiedAt: "Sep 10, 2022, 4:31:42 PM",
            message:
              "I have attached the updated note about the patient. It was nice seeing you at the appointment we’ll need...",
            attachments: [],
            source: "/doctor.png",
          },
          {
            id: 1178,
            name: "Daniel Radclief SpOg",
            modifiedAt: "Sep 09, 2022, 4:31:42 PM",
            message:
              "I have attached the updated note about the patient. It was nice seeing you at the appointment we’ll need...",
            attachments: [],
            source: "/doctor.png",
          },
          {
            id: 8907,
            name: "James Bond, D.O.",
            modifiedAt: "Sep 08, 2022, 4:31:42 PM",
            message:
              "I have attached the updated note about the patient. It was nice seeing you at the appointment we’ll need...",
            attachments: [],
            source: "/doctor.png",
          },
        ],
        unRead: true,
      },
      {
        id: 6453,
        subject: "Follow-up from past visit/message",
        messages: [
          {
            id: 7385,
            name: "Jodi Berzak, D.O.",
            modifiedAt: "Sep 07, 2022, 4:31:42 PM",
            message:
              "I have attached the updated note about the patient. It was nice seeing you at the appointment we’ll need...",
            attachments: [
              {
                id: "682d29e5-9d85-498c-b2dc-8be8ba4b3b64",
                fileName: "PatientNotes.pdf",
                url: "https://www.africau.edu/images/default/sample.pdf",
              },
              {
                id: "682d29e5-9d85-498c-b2dc-8be8ba4b3b64",
                fileName: "PatientNotes2.pdf",
                url: "https://www.africau.edu/images/default/sample.pdf",
              },
              {
                id: "682d29e5-9d85-498c-b2dc-8be8ba4b3b64",
                fileName: "PatientNotes3.pdf",
                url: "https://www.africau.edu/images/default/sample.pdf",
              },
            ],
            source: "/doctor.png",
          },
          {
            id: 5624,
            name: "Daniel Radclief SpOg",
            modifiedAt: "Sep 07, 2022, 4:31:42 PM",
            message:
              "I have attached the updated note about the patient. It was nice seeing you at the appointment we’ll need...",
            attachments: [
              {
                id: "682d29e5-9d85-498c-b2dc-8be8ba4b3b64",
                fileName: "PatientNotes.pdf",
                url: "https://www.africau.edu/images/default/sample.pdf",
              },
              {
                id: "682d29e5-9d85-498c-b2dc-8be8ba4b3b64",
                fileName: "PatientNotes2.pdf",
                url: "https://www.africau.edu/images/default/sample.pdf",
              },
              {
                id: "682d29e5-9d85-498c-b2dc-8be8ba4b3b64",
                fileName: "PatientNotes3.pdf",
                url: "https://www.africau.edu/images/default/sample.pdf",
              },
            ],
            source: "/doctor.png",
          },
          {
            id: 3904,
            name: "James Bond, D.O.",
            modifiedAt: "Sep 06, 2022, 4:31:42 PM",
            message:
              "I have attached the updated note about the patient. It was nice seeing you at the appointment we’ll need...",
            attachments: [
              {
                id: "682d29e5-9d85-498c-b2dc-8be8ba4b3b64",
                fileName: "PatientNotes.pdf",
                url: "https://www.africau.edu/images/default/sample.pdf",
              },
              {
                id: "682d29e5-9d85-498c-b2dc-8be8ba4b3b64",
                fileName: "PatientNotes2.pdf",
                url: "https://www.africau.edu/images/default/sample.pdf",
              },
              {
                id: "682d29e5-9d85-498c-b2dc-8be8ba4b3b64",
                fileName: "PatientNotes3.pdf",
                url: "https://www.africau.edu/images/default/sample.pdf",
              },
            ],
            source: "/doctor.png",
          },
        ],
        unRead: true,
      },
    ];
    res.status(200).json(data);
  }
}
