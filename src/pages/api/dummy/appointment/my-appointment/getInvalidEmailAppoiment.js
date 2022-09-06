export default function getInvalidEmailAppoiment(req, res) {
  if (req.method === "GET") {
    res.status(200).json({
      ResponseType: "succses",
      ResponseCode: 7001,
    });
  }
}
