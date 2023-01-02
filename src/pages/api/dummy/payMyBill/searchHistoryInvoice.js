export default function searchHistoryInvoice(req, res) {
  const data = [
    {
      invoiceNumber: "124344554",
      dos: "Oct 09, 2022, 4:31:42 PM",
      provider: "Don John",
    },
    {
      invoiceNumber: "124344556",
      dos: "Oct 14, 2022, 4:31:42 PM",
      provider: "James Black",
    },
    {
      invoiceNumber: "124344456",
      dos: "Oct 15, 2022, 4:31:42 PM",
      provider: "Odd Blame",
    },
    {
      invoiceNumber: "124345456",
      dos: "Oct 17, 2022, 4:31:42 PM",
      provider: "John Chenaa",
    },
    {
      invoiceNumber: "134445456",
      dos: "Oct 20, 2022, 4:31:42 PM",
      provider: "Albert Checkov",
    },
  ];

  let result = [];
  if (req.method === "GET" && req.query.type == "invoiceNumber") {
    let result = [];
    data.map((item) => {
      if (req.query.id == item.invoiceNumber) {
        result.push(item);
      }
    });
    res.status(200).json({ result });
  } else if (req.method === "GET" && req.query.type == "date") {
    let result = [];
    data.map((item) => {
      const dateData = new Date(item.dos);
      const fromDate = new Date(req.query.fromDate);
      const toDate = new Date(req.query.toDate);

      const dateConvert = dateData.toISOString();
      const fromDateConvert = fromDate.toISOString();
      const toDateConvert = toDate.toISOString();

      if (fromDateConvert <= dateConvert && toDateConvert >= dateConvert) {
        result.push(item);
      }
    });
    res.status(200).json({ result });
  }
}
