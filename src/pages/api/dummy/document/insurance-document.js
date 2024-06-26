export default function InsuranceDocuments(req, res) {
  const createData = (id, name, modifiedAt, source, digitalId) => {
    return {
      id,
      name,
      modifiedAt,
      source,
      digitalId,
    };
  };

  const dummyDocuments = [
    createData(
      1,
      "Consent to Treat - Patient Financial Responsibility - Assigment of Benefits",
      "09/09/2022 12:00PM",
      "/doctor.png",
      "test-id-123"
    ),
    createData(
      2,
      "Notice of Privacy Practices.pdf",
      "09/09/2022 12:00PM",
      "/doctor.png",
      "test-id-123"
    ),
    createData(
      3,
      "Medical/Vision Exams - Refractions - Prescription Release",
      "09/09/2022 12:00PM",
      "/doctor.png",
      "test-id-123"
    ),
    createData(
      4,
      "Authorization to Disclose Information to Those Involved in My Care",
      "08/08/2022 12:00PM",
      "/doctor.png",
      "test-id-123"
    ),
  ];

  if (req.method === "GET") {
    res.status(200).json(dummyDocuments);
  }
}
