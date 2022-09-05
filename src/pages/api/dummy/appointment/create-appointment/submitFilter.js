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
          from: "2022-09-19",
          to: "2022-09-24",
          availability: [
            {
              date: "2022-09-19",
              list: [
                {
                  time: "11:30am",
                  key: 12222,
                },
              ],
            },
            {
              date: "2022-09-20",
              list: [
                {
                  time: "08:00am",
                  key: 12223,
                },
                {
                  time: "10:30am",
                  key: 12224,
                },
                {
                  time: "11:00am",
                  key: 12225,
                },
                {
                  time: "12:00pm",
                  key: 12226,
                },
                {
                  time: "13:00pm",
                  key: 12227,
                },
                {
                  time: "14:00pm",
                  key: 12228,
                },
              ],
            },
            {
              date: "2022-09-21",
              list: [
                {
                  time: "08:30am",
                  key: 12229,
                },
                {
                  time: "10:30am",
                  key: 12230,
                },
                {
                  time: "11:30am",
                  key: 12231,
                },
                {
                  time: "12:00pm",
                  key: 12232,
                },
                {
                  time: "13:30pm",
                  key: 12233,
                },
                {
                  time: "14:30pm",
                  key: 12234,
                },
                {
                  time: "15:30pm",
                  key: 12235,
                },
                {
                  time: "16:30pm",
                  key: 12236,
                },
                ,
              ],
            },
            {
              date: "2022-09-22",
              list: [
                {
                  time: "09:30am",
                  key: 12237,
                },
                {
                  time: "11:00am",
                  key: 12238,
                },
              ],
            },
            {
              date: "2022-09-23",
              list: [
                {
                  time: "09:30am",
                  key: 12239,
                },
              ],
            },
            {
              date: "2022-09-24",
              list: [
                {
                  time: "09:30am",
                  key: 12240,
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
          from: "2022-09-19",
          to: "2022-09-24",
          availability: [
            {
              date: "2022-09-19",
              list: [],
            },
            {
              date: "2022-09-20",
              list: [
                {
                  time: "08:00am",
                  key: 12223,
                },
                {
                  time: "10:30am",
                  key: 12224,
                },
                {
                  time: "11:00am",
                  key: 12225,
                },
                {
                  time: "12:00pm",
                  key: 12226,
                },
                {
                  time: "13:00pm",
                  key: 12227,
                },
                {
                  time: "14:00pm",
                  key: 12228,
                },
              ],
            },
            {
              date: "2022-09-21",
              list: [
                {
                  time: "08:30am",
                  key: 12229,
                },
                {
                  time: "10:30am",
                  key: 12230,
                },
                {
                  time: "11:30am",
                  key: 12231,
                },
                {
                  time: "12:00pm",
                  key: 12232,
                },
                {
                  time: "13:30pm",
                  key: 12233,
                },
                {
                  time: "14:30pm",
                  key: 12234,
                },
                {
                  time: "15:30pm",
                  key: 12235,
                },
                {
                  time: "16:30pm",
                  key: 12236,
                },
                ,
              ],
            },
            {
              date: "2022-09-22",
              list: [
                {
                  time: "09:30am",
                  key: 12237,
                },
                {
                  time: "11:00am",
                  key: 12238,
                },
              ],
            },
            {
              date: "2022-09-23",
              list: [],
            },
            {
              date: "2022-09-24",
              list: [
                {
                  time: "09:30am",
                  key: 12240,
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
          from: "2022-09-19",
          to: "2022-09-24",
          availability: [
            {
              date: "2022-09-19",
              list: [
                {
                  time: "11:30am",
                  key: 12222,
                },
              ],
            },
            {
              date: "2022-09-20",
              list: [
                {
                  time: "08:00am",
                  key: 12223,
                },
                {
                  time: "10:30am",
                  key: 12224,
                },
                {
                  time: "11:00am",
                  key: 12225,
                },
                {
                  time: "12:00pm",
                  key: 12226,
                },
                {
                  time: "13:00pm",
                  key: 12227,
                },
                {
                  time: "14:00pm",
                  key: 12228,
                },
              ],
            },
            {
              date: "2022-09-21",
              list: [
                {
                  time: "08:30am",
                  key: 12229,
                },
                {
                  time: "10:30am",
                  key: 12230,
                },
                {
                  time: "11:30am",
                  key: 12231,
                },
                {
                  time: "12:00pm",
                  key: 12232,
                },
                {
                  time: "13:30pm",
                  key: 12233,
                },
                {
                  time: "14:30pm",
                  key: 12234,
                },
                {
                  time: "15:30pm",
                  key: 12235,
                },
                {
                  time: "16:30pm",
                  key: 12236,
                },
                ,
              ],
            },
            {
              date: "2022-09-22",
              list: [
                {
                  time: "09:30am",
                  key: 12237,
                },
                {
                  time: "11:00am",
                  key: 12238,
                },
              ],
            },
            {
              date: "2022-09-23",
              list: [
                {
                  time: "09:30am",
                  key: 12239,
                },
              ],
            },
            {
              date: "2022-09-24",
              list: [],
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
          name: "Language",
          checklist: [
            {
              name: "Arabic",
              checked: false,
            },
            {
              name: "Chinese",
              checked: false,
            },
            {
              name: "English",
              checked: false,
            },
            {
              name: "Farsi",
              checked: false,
            },
            {
              name: "French",
              checked: false,
            },
            {
              name: "Spanish",
              checked: false,
            },
            {
              name: "Portuguese",
              checked: false,
            },
            {
              name: "Korean",
              checked: false,
            },
            {
              name: "German",
              checked: false,
            },
            {
              name: "Italian",
              checked: false,
            },
            {
              name: "Indonesian",
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
