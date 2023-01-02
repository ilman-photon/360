export default function getSummaryBill(req, res) {
  if (req.method === "GET") {
    if (req.query.id === "124344554") {
      res.status(200).json({
        invoiceNumber: "124344554",
        dos: "Oct 09, 2022, 4:31:42 PM",
        balanceDue: 75,
        totalCharges: 227.5,
        totalAllowed: 239.5,
        insurancePaid: 174.5,
        patientPaid: 302.2,
        description: "Service, Lens, Frame, Misc",
        providerName: "Don John",
      });
    } else if (req.query.id === "124344556") {
      res.status(200).json({
        invoiceNumber: "124344556",
        dos: "Oct 14, 2022, 4:31:42 PM",
        balanceDue: 75,
        totalCharge: 227.5,
        totalAllowed: 239.5,
        insurancePaid: 174.5,
        patientPaid: 302.2,
        description: "Service, Lens, Frame, Misc",
        providerName: "James Black",
      });
    } else if (req.query.id === "124344456") {
      res.status(200).json({
        invoiceNumber: "124344456",
        dos: "Oct 15, 2022, 4:31:42 PM",
        balanceDue: 75,
        totalCharge: 227.5,
        totalAllowed: 239.5,
        insurancePaid: 174.5,
        patientPaid: 302.2,
        description: "Service, Frame, Misc",
        providerName: "Odd Blame",
      });
    } else if (req.query.id === "124345456") {
      res.status(200).json({
        invoiceNumber: "124345456",
        dos: "Oct 17, 2022, 4:31:42 PM",
        balanceDue: 75,
        totalCharge: 227.5,
        totalAllowed: 239.5,
        insurancePaid: 174.5,
        patientPaid: 302.2,
        description: "Service, Frame, Misc",
        providerName: "John Chenaa",
      });
    } else if (req.query.id === "134445456") {
      res.status(200).json({
        invoiceNumber: "134445456",
        dos: "Oct 20, 2022, 4:31:42 PM",
        balanceDue: 75,
        totalCharge: 227.5,
        totalAllowed: 239.5,
        insurancePaid: 174.5,
        patientPaid: 302.2,
        description: "Service, Frame, Misc",
        providerName: "Albert Checkov",
      });
    }
  }
}
