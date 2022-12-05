import { mockResponse } from "../getPatientAccount/[keyword]";

export default function onSendPasswordReset(req, res) {
  const { patientId } = req.query;
  if (req.method === "POST") {
    const found = mockResponse.find((v) => v.patientId === patientId);
    if (found) {
      res.status(200).json({
        success: true,
        message: `Password reset link sent to ${found.name} successfully`,
      });
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
