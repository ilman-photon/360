export default function TestLabResult(req, res) {
  const createData = (name, orderBy, date, status) => {
    return {
      name,
      orderBy,
      date,
      status,
    };
  };

  const dummyMedRep = [
    createData(
      "Consent to Treat - Patient Financial Responsibility - Assigment of Benefits",
      "Hopkins, D.M.",
      "09/09/2022 12:00PM",
      "Completed"
    ),
    createData(
      "Notice of Privacy Practices.pdf",
      "Hopkins, D.M.",
      "09/09/2022 12:00PM",
      "Completed"
    ),
    createData(
      "Medical/Vision Exams - Refractions - Prescription Release",
      "Hopkins, D.M.",
      "09/09/2022 12:00PM",
      "Completed"
    ),
    createData(
      "Authorization to Disclose Information to Those Involved in My Care",
      "Hopkins, D.M.",
      "08/08/2022 12:00PM",
      "Completed"
    ),
  ];

  if (req.method === "GET") {
    res.status(200).json(dummyMedRep);
  }
}
