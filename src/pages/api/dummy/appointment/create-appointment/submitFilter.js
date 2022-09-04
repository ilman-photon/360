export default function submitFilter(req, res) {
  if (req.method === "POST") {
    res.status(200).json({
      listOfProvider: [
        {
          providerId: "1",
          address: {
            addressLine1: "51 West 51st Street",
            addressLine2: "Floor 3, Suite 320 Midtown",
            city: "Florida",
            state: "FR",
            zipcode: "54231",
          },
          rating: "5",
          name: "Paul Wagner Md",
          phoneNumber: "(123) 123-4567",
          distance: "10 mi",
          image: "/doctor.png",
          from: "2022-07-18",
          to: "2022-07-23",
          availability: [
            {
              date: "2022-07-18",
              list: [
                {
                  time: "11:30am",
                  key: 12222,
                },
                {
                  time: "12:30am",
                  key: 12223,
                },
              ],
            },
            {
              date: "2022-07-19",
              list: [],
            },
            {
              date: "2022-07-20",
              list: [
                {
                  time: "08:30am",
                  key: 12222,
                },
                {
                  time: "09:30am",
                  key: 12223,
                },
              ],
            },
            {
              date: "2022-07-21",
              list: [
                {
                  time: "11:30am",
                  key: 12222,
                },
                {
                  time: "12:30am",
                  key: 12223,
                },
              ],
            },
            {
              date: "2022-07-22",
              list: [
                {
                  time: "11:30am",
                  key: 12222,
                },
                {
                  time: "12:30am",
                  key: 12223,
                },
              ],
            },
            {
              date: "2022-07-23",
              list: [
                {
                  time: "11:30am",
                  key: 12222,
                },
                {
                  time: "12:30am",
                  key: 12223,
                },
              ],
            },
          ],
          coordinate: {
            latitude: 32.751204,
            longitude: -117.1641166,
          },
        },
        {
          providerId: "2",
          address: {
            addressLine1: "51 West 51st Street",
            addressLine2: "Floor 3, Suite 320 Midtown",
            city: "Florida",
            state: "FR",
            zipcode: "54231",
          },
          rating: "5",
          name: "Paul Wagner Md",
          phoneNumber: "(123) 123-4567",
          distance: "10 mi",
          image: "/doctor.png",
          from: "2022-07-18",
          to: "2022-07-23",
          availability: [
            {
              date: "2022-07-18",
              list: [
                {
                  time: "11:30am",
                  key: 12222,
                },
                {
                  time: "12:30am",
                  key: 12223,
                },
              ],
            },
            {
              date: "2022-07-19",
              list: [],
            },
            {
              date: "2022-07-20",
              list: [
                {
                  time: "08:30am",
                  key: 12222,
                },
                {
                  time: "09:30am",
                  key: 12223,
                },
              ],
            },
            {
              date: "2022-07-21",
              list: [
                {
                  time: "11:30am",
                  key: 12222,
                },
                {
                  time: "12:30am",
                  key: 12223,
                },
              ],
            },
            {
              date: "2022-07-22",
              list: [
                {
                  time: "11:30am",
                  key: 12222,
                },
                {
                  time: "12:30am",
                  key: 12223,
                },
              ],
            },
            {
              date: "2022-07-23",
              list: [
                {
                  time: "11:30am",
                  key: 12222,
                },
                {
                  time: "12:30am",
                  key: 12223,
                },
              ],
            },
          ],
          coordinate: {
            latitude: 32.751204,
            longitude: -117.1641166,
          },
        },
        {
          providerId: "3",
          name: "Paul Wagner Md",
          address: {
            addressLine1: "51 West 51st Street",
            addressLine2: "Floor 3, Suite 320 Midtown",
            city: "Florida",
            state: "FR",
            zipcode: "54231",
          },
          rating: "5",
          phoneNumber: "(123) 123-4567",
          distance: "10 mi",
          image: "/doctor.png",
          from: "2022-07-18",
          to: "2022-07-23",
          availability: [
            {
              date: "2022-07-18",
              list: [
                {
                  time: "11:30am",
                  key: 12222,
                },
                {
                  time: "12:30am",
                  key: 12223,
                },
              ],
            },
            {
              date: "2022-07-19",
              list: [],
            },
            {
              date: "2022-07-20",
              list: [
                {
                  time: "08:30am",
                  key: 12222,
                },
                {
                  time: "09:30am",
                  key: 12223,
                },
              ],
            },
            {
              date: "2022-07-21",
              list: [
                {
                  time: "11:30am",
                  key: 12222,
                },
                {
                  time: "12:30am",
                  key: 12223,
                },
              ],
            },
            {
              date: "2022-07-22",
              list: [
                {
                  time: "11:30am",
                  key: 12222,
                },
                {
                  time: "12:30am",
                  key: 12223,
                },
              ],
            },
            {
              date: "2022-07-23",
              list: [
                {
                  time: "11:30am",
                  key: 12222,
                },
                {
                  time: "12:30am",
                  key: 12223,
                },
              ],
            },
          ],
          coordinate: {
            latitude: 32.751204,
            longitude: -117.1641166,
          },
        },
      ],
      filterbyData: [
        {
          name: "Available Today",
          checked: false,
        },
        {
          name: "language",
          checklist: [
            {
              name: "Arabic",
              checked: false,
            },
          ],
        },
        {
          name: "Insurance",
          checklist: [
            {
              name: "In Network",
              checked: false,
            },
            {
              name: "Out of Network",
              checked: false,
            },
          ],
        },
        {
          name: "Gender",
          checklist: [
            {
              name: "Male",
              checked: false,
            },
            {
              name: "Female",
              checked: false,
            },
            {
              name: "Non-Binary",
              checked: false,
            },
          ],
        },
      ],
    });
  }
}
