export default function getSugestion(req, res) {
  if (req.method === "GET") {
    res.status(200).json({
      appointmentType: [
        {
          id: "1",
          name: "Eye Exam",
          description: "Test the health of your eye",
        },
        {
          id: "2",
          name: "Follow up",
          description: "See your doctor today",
        },
        {
          id: "3",
          name: "Comprehensive",
          description: "Get a detailed eye exam",
        },
        {
          id: "4",
          name: "Contacts Only",
          description: "Get fitted for the right contacts",
        },
      ],
      insuranceCarrier: {
        general: [
          {
            // id: "1",
            name: "I'm paying out of my pocket",
          },
          {
            // id: "2",
            name: "skip and choose insurance later",
          },
          {
            // id: "3",
            name: "Other Insurance",
          },
        ],
        popular: [
          {
            id: "4",
            name: "Aetna",
          },
          {
            id: "5",
            name: "Aetna",
          },
          {
            id: "6",
            name: "Blue Cross Blue Shield",
          },
          {
            id: "7",
            name: "Cigna",
          },
        ],
        all: [
          {
            id: "8",
            name: "Kaiser",
          },
        ],
      },
      filterbyData: [
        {
          name: "Available Today",
          checked: false,
        },
        {
          name: "language",
          checklist: [
            {
              name: "Arabic",
              checked: false,
            },
            {
              name: "Chinese",
              checked: false,
            },
            {
              name: "English",
              checked: false,
            },
            {
              name: "Farsi",
              checked: false,
            },
            {
              name: "French",
              checked: false,
            },
            {
              name: "Spanish",
              checked: false,
            },
            {
              name: "Portuguese",
              checked: false,
            },
            {
              name: "Korean",
              checked: false,
            },
            {
              name: "German",
              checked: false,
            },
            {
              name: "Italian",
              checked: false,
            },
            {
              name: "Indonesian",
              checked: false,
            },
          ],
        },
        {
          name: "Insurance",
          checklist: [
            {
              name: "In Network",
              checked: false,
            },
            {
              name: "Out of Network",
              checked: false,
            },
          ],
        },
        {
          name: "Gender",
          checklist: [
            {
              name: "Male",
              checked: false,
            },
            {
              name: "Female",
              checked: false,
            },
            {
              name: "Non-Binary",
              checked: false,
            },
          ],
        },
      ],
    });
  }
}
