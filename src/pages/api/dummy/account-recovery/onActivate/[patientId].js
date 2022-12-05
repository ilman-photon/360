import { mockResponse } from "../getPatientAccount/[keyword]";

export default function onActivate(req, res) {
  const { patientId } = req.query;
  if (req.method === "POST") {
    const found = mockResponse.find((v) => v.patientId === patientId);
    if (found) {
      if (!found.verified) {
        res.status(200).json({
          success: true,
          data: { ...found, verified: true },
        });
      } else {
        res.status(400).json({
          success: false,
          message: "User is already verified",
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
