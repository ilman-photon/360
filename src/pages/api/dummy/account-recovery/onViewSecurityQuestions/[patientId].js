import { mockResponse } from "../getPatientAccount/[keyword]";

export const mockSecurityQuestions = [
  {
    question: "Where was your mother born?",
    answer: "Kentucky",
  },
  {
    question: "Where was your mother born?",
    answer: "Kentucky",
  },
  {
    question: "Where was your mother born?",
    answer: "Kentucky",
  },
  {
    question: "Where was your mother born?",
    answer: "Kentucky",
  },
];

export default function onViewSecurityQuestions(req, res) {
  const { patientId } = req.query;
  if (req.method === "GET") {
    const found = mockResponse.find((v) => v.patientId === patientId);
    if (found) {
      res.status(200).json(mockSecurityQuestions);
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
