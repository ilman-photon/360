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
            type: "Medications",
            list: [
              {
                medication: "no known medications",
                code: "",
                route: "",
                frequency: "3",
                dose: "",
                start_date: "",
                stop_date: "",
                status: "",
              },
            ],
          },
          {
            type: "Problems",
            list: [
              {
                problem:
                  "Disorder of refraction AND/OR accommodation (disorder)",
                code: "72128008",
                status: "Active",
              },
              {
                problem: "Low tension glaucoma",
                code: "50485007",
                status: "Active",
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

          {
            type: "Social History",
            list: [
              {
                element: "Smoking Status",
                observation: "Tobaco Smoking consumption",
                dates: "2022-07-26 14:54:10",
              },
            ],
          },
          {
            type: "Implants",
            list: [
              {
                id: "",
                date: "",
                authority: "",
              },
            ],
          },
          {
            type: "Functional Status",
            list: [
              {
                functional_finding: "",
                observation: "no functional data information",
                date: "",
                status: "",
              },
            ],
          },
          {
            type: "Mental Status",
            list: [
              {
                cognitive_finding: "",
                observation: "",
                date: "",
                status: "",
              },
            ],
          },
          {
            type: "Immunizations",
            list: [
              {
                vaccine: "NI",
                date: "2022-07-26",
                status: "completed",
                notes: "N/A",
              },
            ],
          },
          {
            type: "Procedures",
            list: [
              {
                procedure: "Refraction",
                date: "2018-10-08",
                status: "Completed",
                Interpretation: "",
              },
              {
                procedure: "New Patient Comp",
                date: "2018-10-08",
                status: "Completed",
                Interpretation: "",
              },
              {
                procedure: "New Patient Comp",
                date: "2018-04-26",
                status: "Completed",
                Interpretation: "",
              },
              {
                procedure: "New Patient Comp",
                date: "2018-11-16",
                status: "Completed",
                Interpretation: "",
              },
            ],
          },
          {
            type: "Assessments",
            list: [
              {
                assessment: "",
              },
            ],
          },
          {
            type: "Health Concerns",
            list: [{}],
          },
          {
            type: "Goals section",
            list: [
              {
                goal: "",
                value: "",
                date: "",
              },
            ],
          },
          {
            type: "Plan of Treatment",
            list: [
              {
                activity: "CVE 1 Year",
                date: "",
                status: "active",
              },
              {
                activity: "CVE 1 Yr",
                date: "",
                status: "active",
              },
              {
                activity: "CVE 1 Yr",
                date: "",
                status: "active",
              },
              {
                activity: "Glasses",
                date: "",
                status: "active",
              },
            ],
          },
          {
            type: "Reason for Referral",
            list: [{}],
          },
          {
            type: "Interventions",
            list: [
              {
                resource: "",
                date: "",
              },
            ],
          },
          {
            type: "Encounters",
            list: [
              {
                encounter: "New Patient Comp ",
                performer: "Tina Siegel ",
                diagnosis:
                  "Regular astigmatiosm, bilateral (h52.233) / age-related nuclear cataract, right eyeh25.11",
                location: "Swansboro 755 weest Corbett ave swobro nc 1234 ",
                date: "2018-10-08",
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
