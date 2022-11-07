export default function deleteMessage(req, res) {
  if (req.method === "POST") {
    res.status(200).json({
      ResponseCode: 4000,
      ResponseMessage: "Cancel success",
    });
  }
}
