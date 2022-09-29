export default function RequestRefill(req, res) {
  if (req.method === "POST") {
    res.status(200).json({
      message: "Your refill request has been sumbitted",
    });
  }
}
