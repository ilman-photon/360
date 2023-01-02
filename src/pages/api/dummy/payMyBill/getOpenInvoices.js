export default function getOpenInvoices(req, res) {
  if (req.method === "GET") {
    res.status(200).json({
      result: [
        {
          invoiceNumber: "124344554",
          dos: "Oct 09, 2022, 4:31:42 PM",
          creditBalance: 75,
          patientDue: 50,
          provider: "Don John",
        },
        {
          invoiceNumber: "124344556",
          dos: "Oct 14, 2022, 4:31:42 PM",
          creditBalance: 75,
          patientDue: 50,
          provider: "James Black",
        },
        {
          invoiceNumber: "124344456",
          dos: "Oct 15, 2022, 4:31:42 PM",
          creditBalance: 75,
          patientDue: 50,
          provider: "Odd Blame",
        },
        {
          invoiceNumber: "124345456",
          dos: "Oct 17, 2022, 4:31:42 PM",
          creditBalance: 75,
          patientDue: 50,
          provider: "John Chenaa",
        },
        {
          invoiceNumber: "134445456",
          dos: "Oct 20, 2022, 4:31:42 PM",
          creditBalance: 75,
          patientDue: 50,
          provider: "Albert Checkov",
        },
      ],
    });
  }
}
