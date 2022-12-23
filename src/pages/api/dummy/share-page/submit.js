export default function submitSharePage(req, res) {
  if (req.method == "POST" && req.body.code == "correct") {
    res.status(200).json({
      ResponseCode: 2000,
      ResponseMessage: "success",
    });
  } else if (req.method == "POST" && req.body.code == "expired") {
    res.status(400).json({
      ResponseCode: 3000,
      ResponseMessage: "expired",
    });
  } else if (req.method == "POST" && req.body.code == "multiple") {
    res.status(400).json({
      ResponseCode: 3000,
      ResponseMessage: "multiple",
    });
  } else if (req.method == "POST" && req.body.code == "incorrect") {
    res.status(400).json({
      ResponseCode: 3000,
      ResponseMessage: "incorrect",
    });
  }
}
