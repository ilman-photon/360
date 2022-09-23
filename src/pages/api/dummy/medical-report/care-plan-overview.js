export default function CarePlanOverview(req, res) {
  const createData = (name, date) => {
    return {
      name,
      date,
    };
  };

  const dummyDocuments = [
    createData("Eye Surgery", "09/09/2022 12:00PM"),
    createData("Eye Surgery", "09/09/2022 12:00PM"),
    createData("Eye Surgery", "09/09/2022 12:00PM"),
    createData("Eye Surgery", "08/08/2022 12:00PM"),
  ];

  if (req.method === "GET") {
    res.status(200).json(dummyDocuments);
  }
}
