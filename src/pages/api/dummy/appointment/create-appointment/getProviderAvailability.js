export default function getProviderAvailability(req, res) {
  if (req.method === "POST") {
    res.status(200).json({
      providerList: [
        {
          providerId: "1",
          address:
            "51 West 51st Street, Floor 3, Suite 320 Midtown, New York, NY, 10019",
          rating: "5",
          phoneNumber: "857299998",
          distance: "10",
          image: "http//:img-url",
          from: "2022-07-18",
          to: "2022-07-23",
          availability: [
            {
              date: "2022-07-18",
              list: [
                { time: "11:30am", key: 12222 },
                { time: "12:30am", key: 12223 },
              ],
            },
            { date: "2022-07-19", list: [] },
            {
              date: "2022-07-20",
              list: [
                { time: "08:30am", key: 12222 },
                { time: "09:30am", key: 12223 },
              ],
            },
            {
              date: "2022-07-21",
              list: [
                { time: "11:30am", key: 12222 },
                { time: "12:30am", key: 12223 },
              ],
            },
            {
              date: "2022-07-22",
              list: [
                { time: "11:30am", key: 12222 },
                { time: "12:30am", key: 12223 },
              ],
            },
            {
              date: "2022-07-23",
              list: [
                { time: "11:30am", key: 12222 },
                { time: "12:30am", key: 12223 },
              ],
            },
          ],
          coordinate: { latitude: 32.751204, longitude: -117.1641166 },
        },
      ],
    });
  }
}
