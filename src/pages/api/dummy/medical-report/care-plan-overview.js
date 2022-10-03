export default function CarePlanOverview(req, res) {
  const createData = (id, name, date) => {
    return {
      id,
      name,
      date,
    };
  };

  const dummyDocuments = [
    createData(1, "Eye Surgery", "09/09/2022 12:00PM"),
    createData(2, "Eye Surgery", "09/09/2022 12:00PM"),
    createData(3, "Eye Surgery", "09/09/2022 12:00PM"),
    createData(4, "Eye Surgery", "08/08/2022 12:00PM"),
  ];

  if (req.method === "GET") {
    res.status(200).json(dummyDocuments);
  }
}
