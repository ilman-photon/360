import Cookies from "universal-cookie";

export default function getAllAppointment(req, res) {
  const cookie = new Cookies(req.headers.cookie);
  if (req.method === "GET") {
    let responseData = {
      appointmentList: [
        {
          appointmentId: "1",
          providerInfo: {
            providerId: "1",
            name: "Paul Wagner Md",
            position: "Scripps Eyecare",
            address: {
              addressLine1: "51 West 51st Street",
              addressLine2: "Floor 3, Suite 320 Midtown",
              city: "Florida",
              state: "FR",
              zipcode: "54231",
            },
            rating: "5",
            phoneNumber: "8572999989",
            distance: "10 mi",
            image: "/doctor.png",
            from: "2022-07-18",
            to: "2022-07-23",
            location: {
              latitude: 32.751204,
              longitude: -117.1641166,
            },
          },
          patientInfo: {
            name: "Rebecca Chan",
            firstname: "Rebecca",
            lastname: "Chan",
            dob: "12/12/2022",
            phoneNumber: "1234567890",
          },
          appointmentInfo: {
            appointmentType: "Eye Exam",
            date: "Wed, 20 Nov 2022 07:30:00 EST",
            insuranceCarrier: ["ECP Vision", "BlueCare Vision"],
          },
        },
        {
          appointmentId: "2",
          providerInfo: {
            providerId: "1",
            name: "Dr. Sonha Nguyen",
            position: "Scripps Eyecare",
            address: {
              addressLine1: "51 West 51st Street",
              addressLine2: "Floor 3, Suite 320 Midtown",
              city: "Florida",
              state: "FR",
              zipcode: "54231",
            },
            rating: "5",
            phoneNumber: "8572999989",
            distance: "10 mi",
            image: "/doctor.png",
            from: "2022-07-18",
            to: "2022-07-23",
            location: {
              latitude: 32.751204,
              longitude: -117.1641166,
            },
          },
          patientInfo: {
            name: "Rebecca Chan",
            firstname: "Rebecca",
            lastname: "Chan",
            dob: "12/12/2022",
            phoneNumber: "1234567890",
          },
          appointmentInfo: {
            appointmentType: "Comprehensive",
            date: "Wed, 20 Sep 2022 07:30:00 EST",
            insuranceCarrier: ["ECP Vision", "BlueCare Vision"],
          },
        },
      ],
    };
    const patientId = cookie.get("patientId");
    if (patientId == "7300529f-ce7e-4f8e-946b-92d498a4b03d") {
      responseData = {
        appointmentList: [],
      };
    } else if (patientId == "ccc5a017-1339-404a-87cc-a8f863b27bdc") {
      responseData = {
        appointmentList: [
          {
            appointmentId: "1",
            providerInfo: {
              providerId: "1",
              name: "Paul Wagner Md",
              position: "Scripps Eyecare",
              address: {
                addressLine1: "51 West 51st Street",
                addressLine2: "Floor 3, Suite 320 Midtown",
                city: "Florida",
                state: "FR",
                zipcode: "54231",
              },
              rating: "5",
              phoneNumber: "8572999989",
              distance: "10 mi",
              image: "/doctor.png",
              from: "2022-07-18",
              to: "2022-07-23",
              location: {
                latitude: 32.751204,
                longitude: -117.1641166,
              },
            },
            patientInfo: {
              name: "Rebecca Chan",
              firstname: "Rebecca",
              lastname: "Chan",
              dob: "12/12/2022",
              phoneNumber: "1234567890",
            },
            appointmentInfo: {
              appointmentType: "Eye Exam",
              date: "Wed, 23 Sep 2022 07:30:00 EST",
              insuranceCarrier: ["ECP Vision", "BlueCare Vision"],
            },
          },
          {
            appointmentId: "2",
            providerInfo: {
              providerId: "1",
              name: "Dr. Sonha Nguyen",
              position: "Scripps Eyecare",
              address: {
                addressLine1: "51 West 51st Street",
                addressLine2: "Floor 3, Suite 320 Midtown",
                city: "Florida",
                state: "FR",
                zipcode: "54231",
              },
              rating: "5",
              phoneNumber: "8572999989",
              distance: "10 mi",
              image: "/doctor.png",
              from: "2022-07-18",
              to: "2022-07-23",
              location: {
                latitude: 32.751204,
                longitude: -117.1641166,
              },
            },
            patientInfo: {
              name: "Rebecca Chan",
              firstname: "Rebecca",
              lastname: "Chan",
              dob: "12/12/2022",
              phoneNumber: "1234567890",
            },
            appointmentInfo: {
              appointmentType: "Comprehensive",
              date: "Wed, 24 Sep 2022 07:30:00 EST",
              insuranceCarrier: ["ECP Vision", "BlueCare Vision"],
            },
          },
          {
            appointmentId: "3",
            providerInfo: {
              providerId: "1",
              name: "Dr. Sonha Nguyen",
              position: "Scripps Eyecare",
              address: {
                addressLine1: "51 West 51st Street",
                addressLine2: "Floor 3, Suite 320 Midtown",
                city: "Florida",
                state: "FR",
                zipcode: "54231",
              },
              rating: "5",
              phoneNumber: "8572999989",
              distance: "10 mi",
              image: "/doctor.png",
              from: "2022-07-18",
              to: "2022-07-23",
              location: {
                latitude: 32.751204,
                longitude: -117.1641166,
              },
            },
            patientInfo: {
              name: "Rebecca Chan",
              firstname: "Rebecca",
              lastname: "Chan",
              dob: "12/12/2022",
              phoneNumber: "1234567890",
            },
            appointmentInfo: {
              appointmentType: "Comprehensive",
              date: "Wed, 24 Sep 2022 10:30:00 EST",
              insuranceCarrier: ["ECP Vision", "BlueCare Vision"],
            },
          },
          {
            appointmentId: "4",
            providerInfo: {
              providerId: "1",
              name: "Dr. Sonha Nguyen",
              position: "Scripps Eyecare",
              address: {
                addressLine1: "51 West 51st Street",
                addressLine2: "Floor 3, Suite 320 Midtown",
                city: "Florida",
                state: "FR",
                zipcode: "54231",
              },
              rating: "5",
              phoneNumber: "8572999989",
              distance: "10 mi",
              image: "/doctor.png",
              from: "2022-07-18",
              to: "2022-07-23",
              location: {
                latitude: 32.751204,
                longitude: -117.1641166,
              },
            },
            patientInfo: {
              name: "Rebecca Chan",
              firstname: "Rebecca",
              lastname: "Chan",
              dob: "12/12/2022",
              phoneNumber: "1234567890",
            },
            appointmentInfo: {
              appointmentType: "Comprehensive",
              date: "Wed, 24 Sep 2022 14:30:00 EST",
              insuranceCarrier: ["ECP Vision", "BlueCare Vision"],
            },
          },
          {
            appointmentId: "5",
            providerInfo: {
              providerId: "1",
              name: "Dr. Sonha Nguyen",
              position: "Scripps Eyecare",
              address: {
                addressLine1: "51 West 51st Street",
                addressLine2: "Floor 3, Suite 320 Midtown",
                city: "Florida",
                state: "FR",
                zipcode: "54231",
              },
              rating: "5",
              phoneNumber: "8572999989",
              distance: "10 mi",
              image: "/doctor.png",
              from: "2022-07-18",
              to: "2022-07-23",
              location: {
                latitude: 32.751204,
                longitude: -117.1641166,
              },
            },
            patientInfo: {
              name: "Rebecca Chan",
              firstname: "Rebecca",
              lastname: "Chan",
              dob: "12/12/2022",
              phoneNumber: "1234567890",
            },
            appointmentInfo: {
              appointmentType: "Comprehensive",
              date: "Wed, 24 Sep 2022 18:30:00 EST",
              insuranceCarrier: ["ECP Vision", "BlueCare Vision"],
            },
          },
          {
            appointmentId: "6",
            providerInfo: {
              providerId: "1",
              name: "Dr. Sonha Nguyen",
              position: "Scripps Eyecare",
              address: {
                addressLine1: "51 West 51st Street",
                addressLine2: "Floor 3, Suite 320 Midtown",
                city: "Florida",
                state: "FR",
                zipcode: "54231",
              },
              rating: "5",
              phoneNumber: "8572999989",
              distance: "10 mi",
              image: "/doctor.png",
              from: "2022-07-18",
              to: "2022-07-23",
              location: {
                latitude: 32.751204,
                longitude: -117.1641166,
              },
            },
            patientInfo: {
              name: "Rebecca Chan",
              firstname: "Rebecca",
              lastname: "Chan",
              dob: "12/12/2022",
              phoneNumber: "1234567890",
            },
            appointmentInfo: {
              appointmentType: "Comprehensive",
              date: "Wed, 24 Sep 2022 07:30:00 EST",
              insuranceCarrier: ["ECP Vision", "BlueCare Vision"],
            },
          },
          {
            appointmentId: "2",
            providerInfo: {
              providerId: "1",
              name: "Dr. Sonha Nguyen",
              position: "Scripps Eyecare",
              address: {
                addressLine1: "51 West 51st Street",
                addressLine2: "Floor 3, Suite 320 Midtown",
                city: "Florida",
                state: "FR",
                zipcode: "54231",
              },
              rating: "5",
              phoneNumber: "8572999989",
              distance: "10 mi",
              image: "/doctor.png",
              from: "2022-07-18",
              to: "2022-07-23",
              location: {
                latitude: 32.751204,
                longitude: -117.1641166,
              },
            },
            patientInfo: {
              name: "Rebecca Chan",
              firstname: "Rebecca",
              lastname: "Chan",
              dob: "12/12/2022",
              phoneNumber: "1234567890",
            },
            appointmentInfo: {
              appointmentType: "Comprehensive",
              date: "Wed, 25 Sep 2022 07:30:00 EST",
              insuranceCarrier: ["ECP Vision", "BlueCare Vision"],
            },
          },
          {
            appointmentId: "2",
            providerInfo: {
              providerId: "1",
              name: "Dr. Sonha Nguyen",
              position: "Scripps Eyecare",
              address: {
                addressLine1: "51 West 51st Street",
                addressLine2: "Floor 3, Suite 320 Midtown",
                city: "Florida",
                state: "FR",
                zipcode: "54231",
              },
              rating: "5",
              phoneNumber: "8572999989",
              distance: "10 mi",
              image: "/doctor.png",
              from: "2022-07-18",
              to: "2022-07-23",
              location: {
                latitude: 32.751204,
                longitude: -117.1641166,
              },
            },
            patientInfo: {
              name: "Rebecca Chan",
              firstname: "Rebecca",
              lastname: "Chan",
              dob: "12/12/2022",
              phoneNumber: "1234567890",
            },
            appointmentInfo: {
              appointmentType: "Comprehensive",
              date: "Wed, 26 Sep 2022 07:30:00 EST",
              insuranceCarrier: ["ECP Vision", "BlueCare Vision"],
            },
          },
          {
            appointmentId: "2",
            providerInfo: {
              providerId: "1",
              name: "Dr. Sonha Nguyen",
              position: "Scripps Eyecare",
              address: {
                addressLine1: "51 West 51st Street",
                addressLine2: "Floor 3, Suite 320 Midtown",
                city: "Florida",
                state: "FR",
                zipcode: "54231",
              },
              rating: "5",
              phoneNumber: "8572999989",
              distance: "10 mi",
              image: "/doctor.png",
              from: "2022-07-18",
              to: "2022-07-23",
              location: {
                latitude: 32.751204,
                longitude: -117.1641166,
              },
            },
            patientInfo: {
              name: "Rebecca Chan",
              firstname: "Rebecca",
              lastname: "Chan",
              dob: "12/12/2022",
              phoneNumber: "1234567890",
            },
            appointmentInfo: {
              appointmentType: "Comprehensive",
              date: "Wed, 27 Sep 2022 07:30:00 EST",
              insuranceCarrier: ["ECP Vision", "BlueCare Vision"],
            },
          },
          {
            appointmentId: "2",
            providerInfo: {
              providerId: "1",
              name: "Dr. Sonha Nguyen",
              position: "Scripps Eyecare",
              address: {
                addressLine1: "51 West 51st Street",
                addressLine2: "Floor 3, Suite 320 Midtown",
                city: "Florida",
                state: "FR",
                zipcode: "54231",
              },
              rating: "5",
              phoneNumber: "8572999989",
              distance: "10 mi",
              image: "/doctor.png",
              from: "2022-07-18",
              to: "2022-07-23",
              location: {
                latitude: 32.751204,
                longitude: -117.1641166,
              },
            },
            patientInfo: {
              name: "Rebecca Chan",
              firstname: "Rebecca",
              lastname: "Chan",
              dob: "12/12/2022",
              phoneNumber: "1234567890",
            },
            appointmentInfo: {
              appointmentType: "Comprehensive",
              date: "Wed, 28 Sep 2022 07:30:00 EST",
              insuranceCarrier: ["ECP Vision", "BlueCare Vision"],
            },
          },
          {
            appointmentId: "1",
            providerInfo: {
              providerId: "1",
              name: "Paul Wagner Md",
              position: "Scripps Eyecare",
              address: {
                addressLine1: "51 West 51st Street",
                addressLine2: "Floor 3, Suite 320 Midtown",
                city: "Florida",
                state: "FR",
                zipcode: "54231",
              },
              rating: "5",
              phoneNumber: "8572999989",
              distance: "10 mi",
              image: "/doctor.png",
              from: "2022-07-18",
              to: "2022-07-23",
              location: {
                latitude: 32.751204,
                longitude: -117.1641166,
              },
            },
            patientInfo: {
              name: "Rebecca Chan",
              firstname: "Rebecca",
              lastname: "Chan",
              dob: "12/12/2022",
              phoneNumber: "1234567890",
            },
            appointmentInfo: {
              appointmentType: "Eye Exam",
              date: "Wed, 20 Aug 2021 07:30:00 EST",
              insuranceCarrier: ["ECP Vision", "BlueCare Vision"],
            },
          },
          {
            appointmentId: "2",
            providerInfo: {
              providerId: "1",
              name: "Dr. Sonha Nguyen",
              position: "Scripps Eyecare",
              address: {
                addressLine1: "51 West 51st Street",
                addressLine2: "Floor 3, Suite 320 Midtown",
                city: "Florida",
                state: "FR",
                zipcode: "54231",
              },
              rating: "5",
              phoneNumber: "8572999989",
              distance: "10 mi",
              image: "/doctor.png",
              from: "2022-07-18",
              to: "2022-07-23",
              location: {
                latitude: 32.751204,
                longitude: -117.1641166,
              },
            },
            patientInfo: {
              name: "Rebecca Chan",
              firstname: "Rebecca",
              lastname: "Chan",
              dob: "12/12/2022",
              phoneNumber: "1234567890",
            },
            appointmentInfo: {
              appointmentType: "Comprehensive",
              date: "Wed, 22 Aug 2020 07:30:00 EST",
              insuranceCarrier: ["ECP Vision", "BlueCare Vision"],
            },
          },
          {
            appointmentId: "3",
            providerInfo: {
              providerId: "1",
              name: "Dr. Sonha Nguyen",
              position: "Scripps Eyecare",
              address: {
                addressLine1: "51 West 51st Street",
                addressLine2: "Floor 3, Suite 320 Midtown",
                city: "Florida",
                state: "FR",
                zipcode: "54231",
              },
              rating: "5",
              phoneNumber: "8572999989",
              distance: "10 mi",
              image: "/doctor.png",
              from: "2022-07-18",
              to: "2022-07-23",
              location: {
                latitude: 32.751204,
                longitude: -117.1641166,
              },
            },
            patientInfo: {
              name: "Rebecca Chan",
              firstname: "Rebecca",
              lastname: "Chan",
              dob: "12/12/2022",
              phoneNumber: "1234567890",
            },
            appointmentInfo: {
              appointmentType: "Comprehensive",
              date: "Wed, 20 Aug 2019 07:30:00 EST",
              insuranceCarrier: ["ECP Vision", "BlueCare Vision"],
            },
          },
          {
            appointmentId: "4",
            providerInfo: {
              providerId: "1",
              name: "Dr. Sonha Nguyen",
              position: "Scripps Eyecare",
              address: {
                addressLine1: "51 West 51st Street",
                addressLine2: "Floor 3, Suite 320 Midtown",
                city: "Florida",
                state: "FR",
                zipcode: "54231",
              },
              rating: "5",
              phoneNumber: "8572999989",
              distance: "10 mi",
              image: "/doctor.png",
              from: "2022-07-18",
              to: "2022-07-23",
              location: {
                latitude: 32.751204,
                longitude: -117.1641166,
              },
            },
            patientInfo: {
              name: "Rebecca Chan",
              firstname: "Rebecca",
              lastname: "Chan",
              dob: "12/12/2022",
              phoneNumber: "1234567890",
            },
            appointmentInfo: {
              appointmentType: "Comprehensive",
              date: "Wed, 20 Aug 2018 07:30:00 EST",
              insuranceCarrier: ["ECP Vision", "BlueCare Vision"],
            },
          },
          {
            appointmentId: "5",
            providerInfo: {
              providerId: "1",
              name: "Dr. Sonha Nguyen",
              position: "Scripps Eyecare",
              address: {
                addressLine1: "51 West 51st Street",
                addressLine2: "Floor 3, Suite 320 Midtown",
                city: "Florida",
                state: "FR",
                zipcode: "54231",
              },
              rating: "5",
              phoneNumber: "8572999989",
              distance: "10 mi",
              image: "/doctor.png",
              from: "2022-07-18",
              to: "2022-07-23",
              location: {
                latitude: 32.751204,
                longitude: -117.1641166,
              },
            },
            patientInfo: {
              name: "Rebecca Chan",
              firstname: "Rebecca",
              lastname: "Chan",
              dob: "12/12/2022",
              phoneNumber: "1234567890",
            },
            appointmentInfo: {
              appointmentType: "Comprehensive",
              date: "Wed, 23 Aug 2017 07:30:00 EST",
              insuranceCarrier: ["ECP Vision", "BlueCare Vision"],
            },
          },
          {
            appointmentId: "6",
            providerInfo: {
              providerId: "1",
              name: "Dr. Sonha Nguyen",
              position: "Scripps Eyecare",
              address: {
                addressLine1: "51 West 51st Street",
                addressLine2: "Floor 3, Suite 320 Midtown",
                city: "Florida",
                state: "FR",
                zipcode: "54231",
              },
              rating: "5",
              phoneNumber: "8572999989",
              distance: "10 mi",
              image: "/doctor.png",
              from: "2022-07-18",
              to: "2022-07-23",
              location: {
                latitude: 32.751204,
                longitude: -117.1641166,
              },
            },
            patientInfo: {
              name: "Rebecca Chan",
              firstname: "Rebecca",
              lastname: "Chan",
              dob: "12/12/2022",
              phoneNumber: "1234567890",
            },
            appointmentInfo: {
              appointmentType: "Comprehensive",
              date: "Wed, 24 Aug 2017 07:30:00 EST",
              insuranceCarrier: ["ECP Vision", "BlueCare Vision"],
            },
          },
          {
            appointmentId: "2",
            providerInfo: {
              providerId: "1",
              name: "Dr. Sonha Nguyen",
              position: "Scripps Eyecare",
              address: {
                addressLine1: "51 West 51st Street",
                addressLine2: "Floor 3, Suite 320 Midtown",
                city: "Florida",
                state: "FR",
                zipcode: "54231",
              },
              rating: "5",
              phoneNumber: "8572999989",
              distance: "10 mi",
              image: "/doctor.png",
              from: "2022-07-18",
              to: "2022-07-23",
              location: {
                latitude: 32.751204,
                longitude: -117.1641166,
              },
            },
            patientInfo: {
              name: "Rebecca Chan",
              firstname: "Rebecca",
              lastname: "Chan",
              dob: "12/12/2022",
              phoneNumber: "1234567890",
            },
            appointmentInfo: {
              appointmentType: "Comprehensive",
              date: "Wed, 25 Aug 2015 07:30:00 EST",
              insuranceCarrier: ["ECP Vision", "BlueCare Vision"],
            },
          },
          {
            appointmentId: "2",
            providerInfo: {
              providerId: "1",
              name: "Dr. Sonha Nguyen",
              position: "Scripps Eyecare",
              address: {
                addressLine1: "51 West 51st Street",
                addressLine2: "Floor 3, Suite 320 Midtown",
                city: "Florida",
                state: "FR",
                zipcode: "54231",
              },
              rating: "5",
              phoneNumber: "8572999989",
              distance: "10 mi",
              image: "/doctor.png",
              from: "2022-07-18",
              to: "2022-07-23",
              location: {
                latitude: 32.751204,
                longitude: -117.1641166,
              },
            },
            patientInfo: {
              name: "Rebecca Chan",
              firstname: "Rebecca",
              lastname: "Chan",
              dob: "12/12/2022",
              phoneNumber: "1234567890",
            },
            appointmentInfo: {
              appointmentType: "Comprehensive",
              date: "Wed, 26 Aug 2015 07:30:00 EST",
              insuranceCarrier: ["ECP Vision", "BlueCare Vision"],
            },
          },
          {
            appointmentId: "2",
            providerInfo: {
              providerId: "1",
              name: "Dr. Sonha Nguyen",
              position: "Scripps Eyecare",
              address: {
                addressLine1: "51 West 51st Street",
                addressLine2: "Floor 3, Suite 320 Midtown",
                city: "Florida",
                state: "FR",
                zipcode: "54231",
              },
              rating: "5",
              phoneNumber: "8572999989",
              distance: "10 mi",
              image: "/doctor.png",
              from: "2022-07-18",
              to: "2022-07-23",
              location: {
                latitude: 32.751204,
                longitude: -117.1641166,
              },
            },
            patientInfo: {
              name: "Rebecca Chan",
              firstname: "Rebecca",
              lastname: "Chan",
              dob: "12/12/2022",
              phoneNumber: "1234567890",
            },
            appointmentInfo: {
              appointmentType: "Comprehensive",
              date: "Wed, 27 Aug 2022 07:30:00 EST",
              insuranceCarrier: ["ECP Vision", "BlueCare Vision"],
            },
          },
          {
            appointmentId: "2",
            providerInfo: {
              providerId: "1",
              name: "Dr. Sonha Nguyen",
              position: "Scripps Eyecare",
              address: {
                addressLine1: "51 West 51st Street",
                addressLine2: "Floor 3, Suite 320 Midtown",
                city: "Florida",
                state: "FR",
                zipcode: "54231",
              },
              rating: "5",
              phoneNumber: "8572999989",
              distance: "10 mi",
              image: "/doctor.png",
              from: "2022-07-18",
              to: "2022-07-23",
              location: {
                latitude: 32.751204,
                longitude: -117.1641166,
              },
            },
            patientInfo: {
              name: "Rebecca Chan",
              firstname: "Rebecca",
              lastname: "Chan",
              dob: "12/12/2022",
              phoneNumber: "1234567890",
            },
            appointmentInfo: {
              appointmentType: "Comprehensive",
              date: "Wed, 28 Aug 2014 07:30:00 EST",
              insuranceCarrier: ["ECP Vision", "BlueCare Vision"],
            },
          },
        ],
      };
    }
    res.status(200).json(responseData);
  }
}
