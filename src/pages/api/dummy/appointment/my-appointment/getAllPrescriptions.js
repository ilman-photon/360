export default function getAllPrescriptions(req, res) {
  const { patientId } = req.query;
  if (req.method === "GET") {
    let data = {
      prescriptions: {
        glasses: [
          {
            prescribedBy: "Dr. Sonha Nguyen",
            date: "2022-09-02T11:18:47.229Z",
            expirationDate: "2022-10-02T11:18:47.229Z",
            prescriptionDetails: [
              {
                Eye: "OD",
                Sph: "+20.00",
                Cyl: "-5.00",
                Axis: "70",
                Add: "x180",
              },
              {
                Eye: "OS",
                Sph: "+19.75",
                Cyl: "-4.75",
                Axis: "38",
                Add: "x090",
              },
            ],
          },
          {
            prescribedBy: "Dr. Sonha Nguyen",
            date: "2022-09-02T11:18:47.229Z",
            expirationDate: "2022-10-02T11:18:47.229Z",
            prescriptionDetails: [
              {
                Eye: "OD",
                Sph: "+20.00",
                Cyl: "-5.00",
                Axis: "70",
                Add: "x180",
              },
              {
                Eye: "OS",
                Sph: "+19.75",
                Cyl: "-4.75",
                Axis: "38",
                Add: "x090",
              },
            ],
          },
        ],
        contacts: [
          {
            prescribedBy: "Dr. Sonha Nguyen",
            date: "2022-09-01T11:18:47.229Z",
            expirationDate: "2022-10-02T11:18:47.229Z",
            prescriptionDetails: [
              {
                Eye: "OD",
                Sph: "+20.00",
                Bc: "-5.00",
                Cyl: "70",
                Axis: "x180",
              },
              {
                Eye: "OS",
                Sph: "+19.75",
                Bc: "-4.75",
                Cyl: "38",
                Axis: "x090",
              },
            ],
          },
          {
            prescribedBy: "Dr. Sonha Nguyen",
            date: "2022-09-02T11:18:47.229Z",
            expirationDate: "2022-10-02T11:18:47.229Z",
            prescriptionDetails: [
              {
                Eye: "OD",
                Sph: "+20.00",
                Bc: "-5.00",
                Cyl: "70",
                Axis: "x180",
              },
              {
                Eye: "OS",
                Sph: "+19.75",
                Bc: "-4.75",
                Cyl: "38",
                Axis: "x090",
              },
            ],
          },
        ],
        medications: [
          {
            id: "0",
            prescription: "Aspirint 0.1% Ointmanet",
            date: "2022-09-02T11:18:47.229Z",
          },
          {
            id: "1",
            prescription: "Aspirint 0.1% Ointmanet",
            date: "2022-09-02T11:18:47.229Z",
          },
          {
            id: "2",
            prescription: "Aspirint 0.1% Ointmanet",
            date: "2022-09-02T11:18:47.229Z",
          },
          {
            id: "3",
            prescription: "Aspirint 0.1% Ointmanet",
            date: "2022-08-02T11:18:47.229Z",
            expiredDate: "2022-08-10T11:18:47.229Z",
          },
        ],
      },
    };
    if (patientId == "3b7c741a-8772-48fe-a414-90ea5b68d12a") {
      data = {
        prescriptions: {
          glasses: [],
          contacts: [],
          medications: [],
        },
      };
    }
    res.status(200).json(data);
  }
}
