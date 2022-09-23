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
    if (patientId == "2efef720-4bfc-4fb7-b1a2-19fd11c67eba") {
      //patient 3: 10 appointments
      responseData = {
        appointmentList: [],
      };
    } else if (patientId == "1cd0eee2-3bf6-4606-aec0-f80dff4eedf7") {
      //patient 5: 10 appointments
      const mockData = {
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
          date: "",
          insuranceCarrier: ["ECP Vision", "BlueCare Vision"],
        },
      };
      responseData = {
        appointmentList: [],
      };
      for (let i = 1; i <= 10; i++) {
        const dateMock = new Date();
        mockData.appointmentInfo = {
          ...mockData.appointmentInfo,
          date: new Date(
            dateMock.getTime() - i * 60 * 60 * 24 * 1000 * 60
          ).toUTCString(),
        };
        responseData.appointmentList.push({
          ...mockData,
        });
      }
      for (let i = 1; i <= 10; i++) {
        const dateMock = new Date();
        mockData.appointmentInfo = {
          ...mockData.appointmentInfo,
          date: new Date(
            dateMock.getTime() + i * 60 * 60 * 24 * 1000 * 7
          ).toUTCString(),
        };
        responseData.appointmentList.push({
          ...mockData,
        });
      }
    } else if (patientId == "9832a190-f682-4d32-81c9-8f6cdf6a32b4") {
      //patient 4: can't reschedule
      const dateMock = new Date();
      const eyeCare = new Date(dateMock.setHours(dateMock.getHours() + 2));
      const comprehensive = new Date(
        dateMock.setHours(dateMock.getHours() + 10)
      );
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
              date: eyeCare.toUTCString(),
              insuranceCarrier: ["ECP Vision", "BlueCare Vision"],
            },
          },
          {
            appointmentId: "2",
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
              appointmentType: "Comprehensive",
              date: comprehensive.toUTCString(),
              insuranceCarrier: ["ECP Vision", "BlueCare Vision"],
            },
          },
        ],
      };
    }
    res.status(200).json(responseData);
  }
}
