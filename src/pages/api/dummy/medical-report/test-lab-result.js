export default function TestLabResult(req, res) {
  const createData = (id, name, orderBy, date, status) => {
    return {
      id,
      name,
      orderBy,
      date,
      status,
    };
  };

  const dummyMedRep = [
    createData(
      1,
      "Eye Surgery",
      "Hopkins, D.M.",
      "09/09/2022 12:00PM",
      "Completed"
    ),
    createData(
      2,
      "Eye Surgery",
      "Hopkins, D.M.",
      "09/09/2022 12:00PM",
      "Completed"
    ),
    createData(
      3,
      "Eye Surgery",
      "Hopkins, D.M.",
      "09/09/2022 12:00PM",
      "Completed"
    ),
    createData(
      4,
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
