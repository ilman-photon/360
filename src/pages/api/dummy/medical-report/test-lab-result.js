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
      "Eye Surgery",
      "Hopkins, D.M.",
      "09/09/2022 12:00PM",
      "Completed"
    ),
    createData(
      "Eye Surgery",
      "Hopkins, D.M.",
      "09/09/2022 12:00PM",
      "Completed"
    ),
    createData(
      "Eye Surgery",
      "Hopkins, D.M.",
      "09/09/2022 12:00PM",
      "Completed"
    ),
    createData(
      "Eye Surgery",
      "Hopkins, D.M.",
      "08/08/2022 12:00PM",
      "Completed"
    ),
  ];

  if (req.method === "GET") {
    res.status(200).json(dummyMedRep);
  }
}
