export default function getAppointmentDetails(req, res) {
  if (req.method === "GET") {
    res.status(200).json({
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
        date: "Fri, 14 Oct 2022 04:30:00 EST",
        insuranceCarrier: ["ECP Vision", "BlueCare Vision"],
        contents: [
          {
            type: "Allergies",
            list: [
              {
                subtance: "No Know Allergies",
                code: "",
                status: "active",
                severity: "UNK",
                reaction: "UNK",
              },
            ],
          },
          {
            type: "Results",
            list: [
              {
                battery: "Physical findings of Macula",
                date: "2018-04-06 - 2018-04-06",
                test: "",
                result: "",
                result_date: "",
                lab: "",
              },
              {
                battery: "",
                date: "",
                test: "Physical finding of Macula",
                result: "NL",
                result_date: "2018-04-26 00:00:00",
                lab: "",
              },
              {
                battery:
                  "Optic disk or retinal nerve fiber layer structural abnormalities Right eye by Ophthalmoscopy",
                date: "2016-11-16 - 2016-11-16",
                test: "",
                result: "",
                result_date: "",
                lab: "",
              },
            ],
          },
          {
            type: "Vital Signs",
            list: [
              {
                date: "2019-05-28",
                height: "",
                weight: "active",
                bmi: "UNK",
                blood_pressure: "107.0 mmHg / 78.0 mmHg",
                body_temp: "",
                pulse: "",
                o2_concentration: "",
                inhaled_o2: "",
                resp_rate: "",
              },
              {
                date: "2018-10-08",
                height: "",
                weight: "active",
                bmi: "UNK",
                blood_pressure: "130.0 mmHg / 70.0 mmHg",
                body_temp: "",
                pulse: "",
                o2_concentration: "",
                inhaled_o2: "",
                resp_rate: "",
              },
              {
                date: "2019-01-08",
                height: "",
                weight: "active",
                bmi: "UNK",
                blood_pressure: "194.0 mmHg / 107.0 mmHg",
                body_temp: "",
                pulse: "",
                o2_concentration: "",
                inhaled_o2: "",
                resp_rate: "",
              },
            ],
          },
        ],
        documentation: {
          name: "Care Provision",
        },
      },
    });
  }
}
