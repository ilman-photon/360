import moment from "moment";

export default function submitFilter(req, res) {
  const reqDate = new Date(req.body.date);
  if (
    req.method === "POST" &&
    reqDate > new Date("2022-10-01T00:00:00.000Z") &&
    reqDate < new Date("2022-10-09T00:00:00.000Z")
  ) {
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
          from: "2022-10-03",
          to: "2022-10-08",
          availability: [
            {
              date: "2022-10-03",
              list: [
                {
                  time: "11:30am",
                  key: 12222,
                },
              ],
            },
            {
              date: "2022-10-04",
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
                  time: "01:00pm",
                  key: 12227,
                },
                {
                  time: "02:00pm",
                  key: 12228,
                },
              ],
            },
            {
              date: "2022-10-05",
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
                  time: "01:30pm",
                  key: 12233,
                },
                {
                  time: "02:30pm",
                  key: 12234,
                },
                {
                  time: "03:30pm",
                  key: 12235,
                },
                {
                  time: "04:30pm",
                  key: 12236,
                },
                ,
              ],
            },
            {
              date: "2022-10-06",
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
              date: "2022-10-07",
              list: [
                {
                  time: "09:30am",
                  key: 12239,
                },
              ],
            },
            {
              date: "2022-10-08",
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
          name: "Paul Wagner Nd",
          phoneNumber: "(123) 123-4567",
          distance: "10 mi",
          image: "/doctor.png",
          from: "2022-10-03",
          to: "2022-10-08",
          availability: [
            {
              date: "2022-10-03",
              list: [],
            },
            {
              date: "2022-10-04",
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
                  time: "01:00pm",
                  key: 12227,
                },
                {
                  time: "02:00pm",
                  key: 12228,
                },
              ],
            },
            {
              date: "2022-10-05",
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
                  time: "01:30pm",
                  key: 12233,
                },
                {
                  time: "02:30pm",
                  key: 12234,
                },
                {
                  time: "03:30pm",
                  key: 12235,
                },
                {
                  time: "04:30pm",
                  key: 12236,
                },
                ,
              ],
            },
            {
              date: "2022-10-06",
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
              date: "2022-10-07",
              list: [],
            },
            {
              date: "2022-10-08",
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
          from: "2022-10-03",
          to: "2022-10-08",
          availability: [
            {
              date: "2022-10-03",
              list: [
                {
                  time: "11:30am",
                  key: 12222,
                },
              ],
            },
            {
              date: "2022-10-04",
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
                  time: "01:00pm",
                  key: 12227,
                },
                {
                  time: "02:00pm",
                  key: 12228,
                },
              ],
            },
            {
              date: "2022-10-05",
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
                  time: "01:30pm",
                  key: 12233,
                },
                {
                  time: "02:30pm",
                  key: 12234,
                },
                {
                  time: "03:30pm",
                  key: 12235,
                },
                {
                  time: "04:30pm",
                  key: 12236,
                },
                ,
              ],
            },
            {
              date: "2022-10-06",
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
              date: "2022-10-07",
              list: [
                {
                  time: "09:30am",
                  key: 12239,
                },
              ],
            },
            {
              date: "2022-10-08",
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
  } else if (req.method === "POST") {
    const time = new moment(reqDate).day(1).toDate().getTime();

    const days = (i, t) => {
      return new Date(t + i * 60 * 60 * 24 * 1000);
    };
    const from = new moment(days(1, time)).format("YYYY-MM-DD");
    const day2 = new moment(days(2, time)).format("YYYY-MM-DD");
    const day3 = new moment(days(3, time)).format("YYYY-MM-DD");
    const day4 = new moment(days(4, time)).format("YYYY-MM-DD");
    const day5 = new moment(days(5, time)).format("YYYY-MM-DD");
    const to = new moment(days(6, time)).format("YYYY-MM-DD");

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
          from,
          to,
          availability: [
            {
              date: from,
              list: [
                {
                  time: "08:30am",
                  key: 12222,
                },
                {
                  time: "11:30am",
                  key: 12222,
                },
                {
                  time: "12:30pm",
                  key: 12223,
                },
              ],
            },
            {
              date: day2,
              list: [],
            },
            {
              date: day3,
              list: [
                {
                  time: "08:30am",
                  key: 12222,
                },
              ],
            },
            {
              date: day4,
              list: [
                {
                  time: "11:30am",
                  key: 12222,
                },
                {
                  time: "12:30pm",
                  key: 12223,
                },
                {
                  time: "02:30pm",
                  key: 12223,
                },
                {
                  time: "03:30pm",
                  key: 12223,
                },
                {
                  time: "04:30pm",
                  key: 12223,
                },
              ],
            },
            {
              date: day5,
              list: [],
            },
            {
              date: to,
              list: [
                {
                  time: "11:30am",
                  key: 12222,
                },
                {
                  time: "12:30pm",
                  key: 12223,
                },
                {
                  time: "03:30pm",
                  key: 12222,
                },
                {
                  time: "04:00pm",
                  key: 12222,
                },
                {
                  time: "04:30pm",
                  key: 12222,
                },
                {
                  time: "05:30pm",
                  key: 12222,
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
          name: "Paul Wagner Nd",
          phoneNumber: "(123) 123-4567",
          distance: "10 mi",
          image: "/doctor.png",
          from: from,
          to: to,
          availability: [
            {
              date: from,
              list: [
                {
                  time: "08:30am",
                  key: 12222,
                },
                {
                  time: "11:30am",
                  key: 12222,
                },
                {
                  time: "12:30pm",
                  key: 12223,
                },
              ],
            },
            {
              date: day2,
              list: [
                {
                  time: "08:30am",
                  key: 12222,
                },
              ],
            },
            {
              date: day3,
              list: [
                {
                  time: "08:30am",
                  key: 12222,
                },
              ],
            },
            {
              date: day4,
              list: [
                {
                  time: "11:30am",
                  key: 12222,
                },
                {
                  time: "12:30pm",
                  key: 12223,
                },
                {
                  time: "02:30pm",
                  key: 12223,
                },
                {
                  time: "03:30pm",
                  key: 12223,
                },
                {
                  time: "04:30pm",
                  key: 12223,
                },
              ],
            },
            {
              date: day5,
              list: [
                {
                  time: "08:30am",
                  key: 12222,
                },
                {
                  time: "09:30am",
                  key: 12222,
                },
              ],
            },
            {
              date: to,
              list: [
                {
                  time: "11:30am",
                  key: 12222,
                },
                {
                  time: "12:30pm",
                  key: 12223,
                },
                {
                  time: "03:30pm",
                  key: 12222,
                },
                {
                  time: "04:00pm",
                  key: 12222,
                },
                {
                  time: "04:30pm",
                  key: 12222,
                },
                {
                  time: "05:30pm",
                  key: 12222,
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
          from: from,
          to: to,
          availability: [
            {
              date: from,
              list: [
                {
                  time: "08:30am",
                  key: 12222,
                },
                {
                  time: "11:30am",
                  key: 12222,
                },
                {
                  time: "12:30pm",
                  key: 12223,
                },
              ],
            },
            {
              date: day2,
              list: [
                {
                  time: "08:00am",
                  key: 12222,
                },
              ],
            },
            {
              date: day3,
              list: [
                {
                  time: "08:30am",
                  key: 12222,
                },
              ],
            },
            {
              date: day4,
              list: [
                {
                  time: "11:30am",
                  key: 12222,
                },
                {
                  time: "12:30pm",
                  key: 12223,
                },
                {
                  time: "02:30pm",
                  key: 12223,
                },
              ],
            },
            {
              date: day5,
              list: [
                {
                  time: "08:90am",
                  key: 12222,
                },
              ],
            },
            {
              date: to,
              list: [
                {
                  time: "11:30am",
                  key: 12222,
                },
                {
                  time: "12:30pm",
                  key: 12223,
                },
                {
                  time: "03:30pm",
                  key: 12222,
                },
                {
                  time: "04:00pm",
                  key: 12222,
                },
                {
                  time: "04:30pm",
                  key: 12222,
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
