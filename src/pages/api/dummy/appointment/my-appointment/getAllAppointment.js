export default function getAllAppointment(req, res) {
  if (req.method === "GET") {
    res.status(200).json({
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
            date: "Wed, 20 Sep 2022 07:30:00 EST",
            insuranceCarrier: ["ECP Vision", "BlueCare Vision"],
          },
        },
        {
          appointmentId: "1",
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
    });
  }
}
