export default function postForm(req, res) {
  const reqBody = {
    date: "Thu, 12 Jan 2023 04:30:00 EST",
    insuranceCarrier: "No Insurance Provided",
    appointmentType: "Eye Exam",
    patientInfo: {
      email: "patient@mail.com",
      firstname: "Rebecca",
      lastname: "Chan",
      dob: "12/12/2022",
      phoneNumber: "1234567890",
    },
    contactInfo: {
      email: "newPatienPortal@mail.com",
      firstname: "Jon",
      lastname: "Doe",
      dob: "12/12/2022",
      phoneNumber: "1234567890",
      communicationPreference: "Both",
      // password: "Password@123",
    },
  };
  if (req.method === "GET") {
    res.status(200).json({
      appointmentList: [
        {
          appointmentId: "1",
          providerInfo: {
            providerId: "1",
            address:
              "51 West 51st Street, Floor 3, Suite 320 Midtown, New York, NY, 10019",
            rating: "5",
            phoneNumber: "857299998",
            distance: "10 mi",
            image: "http://image-url/",
            from: "2022-07-18",
            to: "2022-07-23",
            location: { latitude: 32.751204, longitude: -117.1641166 },
          },
          patientInfo: {
            name: "Don Joe",
            firstname: "Rebecca",
            lastname: "Chan",
            dob: "12/12/2022",
            phoneNumber: "1234567890",
          },
          appointmentInfo: {
            appointmentType: "Eye Exam",
            date: "Thu, 12 Jan 2023 04:30:00 EST",
            InsuranceCarrier: [
              {
                category: "all",
                divider: false,
                id: "1",
                name: "ECP Vision",
              },
              {
                category: "all",
                divider: false,
                id: "1",
                name: "BlueCare Vision",
              },
            ],
          },
        },
        {
          appointmentId: "1",
          providerInfo: {
            providerId: "1",
            address:
              "51 West 51st Street, Floor 3, Suite 320 Midtown, New York, NY, 10019",
            rating: "5",
            phoneNumber: "857299998",
            distance: "10 mi",
            image: "http://image-url/",
            from: "2022-07-18",
            to: "2022-07-23",
            location: { latitude: 32.751204, longitude: -117.1641166 },
          },
          patientInfo: {
            name: "Don Joe",
            firstname: "Rebecca",
            lastname: "Chan",
            dob: "12/12/2022",
            phoneNumber: "1234567890",
          },
          appointmentInfo: {
            appointmentType: "Eye Exam",
            date: "Thu, 12 Jan 2023 04:30:00 EST",
            InsuranceCarrier: [
              {
                category: "all",
                divider: false,
                id: "1",
                name: "ECP Vision",
              },
              {
                category: "all",
                divider: false,
                id: "1",
                name: "BlueCare Vision",
              },
            ],
          },
        },
      ],
    });
  } else if (req.method === "POST") {
    if (req.body === reqBody) {
      res.status(200).json({
        appointment: {
          appointmentId: "1",
          providerInfo: {
            providerId: "1",
            address:
              "51 West 51st Street, Floor 3, Suite 320 Midtown, New York, NY, 10019",
            rating: "5",
            phoneNumber: "857299998",
            distance: "10 mi",
            image: "http://image-url/",
            from: "2022-07-18",
            to: "2022-07-23",
            location: { latitude: 32.751204, longitude: -117.1641166 },
          },
          patientInfo: {
            name: "Don Joe",
            firstname: "Rebecca",
            lastname: "Chan",
            dob: "12/12/2022",
            phoneNumber: "1234567890",
          },
          appointmentInfo: {
            appointmentType: "Eye Exam",
            date: "Thu, 12 Jan 2023 04:30:00 EST",
            InsuranceCarrier: [
              {
                category: "all",
                divider: false,
                id: "1",
                name: "ECP Vision",
              },
              {
                category: "all",
                divider: false,
                id: "1",
                name: "BlueCare Vision",
              },
            ],
          },
        },
        ResponseType: "success",
        ResponseCode: 7001,
      });
    } else if (req.body === "appointmentId") {
      res.status(200).json({
        appointmentId: "1",
        providerInfo: {
          providerId: "1",
          address:
            "51 West 51st Street, Floor 3, Suite 320 Midtown, New York, NY, 10019",
          rating: "5",
          phoneNumber: "857299998",
          distance: "10 mi",
          image: "http://image-url/",
          from: "2022-07-18",
          to: "2022-07-23",
          location: { latitude: 32.751204, longitude: -117.1641166 },
        },
        patientInfo: {
          name: "Don Joe",
          firstname: "Rebecca",
          lastname: "Chan",
          dob: "12/12/2022",
          phoneNumber: "1234567890",
        },
        appointmentInfo: {
          appointmentType: "Eye Exam",
          date: "Thu, 12 Jan 2023 04:30:00 EST",
          InsuranceCarrier: [
            {
              category: "all",
              divider: false,
              id: "1",
              name: "ECP Vision",
            },
            {
              category: "all",
              divider: false,
              id: "1",
              name: "BlueCare Vision",
            },
          ],
        },
      });
    }
  }
}
