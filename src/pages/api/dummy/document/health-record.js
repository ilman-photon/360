export default function HealthRecord(req, res) {
  const createData = (name, modifiedAt, source) => {
    return {
      name,
      modifiedAt,
      source,
    };
  };

  const dummyDocuments = [
    createData(
      "Consent to Treat - Patient Financial Responsibility - Assigment of Benefits",
      "09/09/2022 12:00PM",
      "/doctor.png"
    ),
    createData(
      "Notice of Privacy Practices.pdf",
      "09/09/2022 12:00PM",
      "/doctor.png"
    ),
    createData(
      "Medical/Vision Exams - Refractions - Prescription Release",
      "09/09/2022 12:00PM",
      "/doctor.png"
    ),
    createData(
      "Authorization to Disclose Information to Those Involved in My Care",
      "08/08/2022 12:00PM",
      "/doctor.png"
    ),
  ];

  if (req.method === "GET") {
    res.status(200).json(dummyDocuments);
  }
}
