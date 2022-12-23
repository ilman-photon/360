export default function validationSharePage(req, res) {
  if (req.method == "POST" && req.body.code == "expired") {
    res.status(400).json({
      ResponseCode: 3000,
      ResponseMessage: "expired",
    });
  } else if (req.method == "POST" && req.body.code == "not active") {
    res.status(400).json({
      ResponseCode: 3000,
      ResponseMessage: "not active",
    });
  } else if (req.method == "POST" && req.body.code == "success") {
    res.status(200).json({
      ResponseCode: 2000,
      ResponseMessage: "success",
    });
  }
}
