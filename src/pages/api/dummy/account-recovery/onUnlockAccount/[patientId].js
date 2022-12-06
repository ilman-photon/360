import { mockResponse } from "../getPatientAccount/[keyword]";

export default function onUnlockAccount(req, res) {
  const { patientId } = req.query;
  if (req.method === "POST") {
    const found = mockResponse.find((v) => v.patientId === patientId);
    if (found) {
      if (found.status === "locked") {
        res.status(200).json({
          success: true,
          data: { ...found, status: "unlocked" },
        });
      } else {
        res.status(400).json({
          success: false,
          message: "User is already unlocked",
        });
      }
    } else {
      res.status(400).json({
        success: false,
        message: `User are not found for patientId ${patientId}`,
      });
    }
  } else {
    res.status(404).json("Route not found");
  }
}
