import Cookies from "universal-cookie";

export default function getAllAppointment(req, res) {
  const { patientId } = req.query;
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
    if (patientId == "3b7c741a-8772-48fe-a414-90ea5b68d12a") {
      //patient2@gmail.com: 0 appointments
      responseData = {
        appointmentList: [],
      };
    } else if (patientId == "9496a63c-3f61-4af0-8c82-c7c139c04bd9") {
      //patient3@gmail.com: 10 appointments
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
    } else if (patientId == "130708ca-ca3c-4abf-95f7-db7162b95474") {
      //patient4@gmail.com: can't reschedule
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
    } else if (patientId == "a86a757f-62ec-4a86-8b5b-85df1d0a421d") {
      const cookie = new Cookies(req.headers.cookie);
      //ppatient5@gmail.com: can't reschedule
      const dateMock = new Date();
      let elapseTime = 3;
      if (cookie.get("appointmentTimeOut")) {
        elapseTime = cookie.get("appointmentTimeOut");
      }
      const eyeCare = new Date(
        dateMock.getTime() + 60 * 60 * 4 * 1000 + 60000 * elapseTime
      );
      const comprehensive = new Date(
        dateMock.getTime() + 60 * 60 * 24 * 1000 + 60000 * elapseTime
      );
      responseData = {
        appointmentList: [
          {
            appointmentId: "2",
            providerInfo: {
              providerId: "1",
              name: "Iori Blaze Md",
              position: "Scripps Eyecare",
              address: {
                addressLine1: "51 West 51st Street",
                addressLine2: "Floor 3, Suite 320 Midtown",
                city: "California",
                state: "CA",
                zipcode: "90210",
              },
              rating: "4",
              phoneNumber: "8572222289",
              distance: "15 mi",
              image: "/doctor.png",
              from: "2022-07-18",
              to: "2022-07-23",
              location: {
                latitude: 32.751204,
                longitude: -117.1641166,
              },
            },
            patientInfo: {
              name: "Jessica Chan",
              firstname: "Jessica",
              lastname: "Chan",
              dob: "12/12/2000",
              phoneNumber: "1234567890",
            },
            appointmentInfo: {
              appointmentType: "Test or Procedure",
              date: comprehensive.toUTCString(),
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
