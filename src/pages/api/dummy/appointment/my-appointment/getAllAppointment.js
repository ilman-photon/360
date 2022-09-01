export default function getAllAppointment(req, res) {
  if (req.method === "GET" && req.body === "appointmentId") {
    res.status(200).json({ ResponseType: "success", ResponseCode: 7001 });
  }
}
