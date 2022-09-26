export default function CancelRequestRefill(req, res) {
  if (req.method === "POST") {
    res.status(200).json({
      message: "Your refill request has been canceled",
    });
  }
}
