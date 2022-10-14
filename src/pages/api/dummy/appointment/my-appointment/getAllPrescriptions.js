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
                eye: "OD",
                sph: "+20.00",
                cyl: "-5.00",
                axis: "70",
                add: "x180",
              },
              {
                eye: "OS",
                sph: "+19.75",
                cyl: "-4.75",
                axis: "38",
                add: "x090",
              },
            ],
          },
          {
            prescribedBy: "Dr. Sonha Nguyen",
            date: "2022-09-02T11:18:47.229Z",
            expirationDate: "2022-10-02T11:18:47.229Z",
            prescriptionDetails: [
              {
                eye: "OD",
                sph: "+20.00",
                cyl: "-5.00",
                axis: "70",
                add: "x180",
              },
              {
                eye: "OS",
                sph: "+19.75",
                cyl: "-4.75",
                axis: "38",
                add: "x090",
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
                eye: "OD",
                sph: "+20.00",
                bc: "-5.00",
                cyl: "70",
                axis: "x180",
              },
              {
                eye: "OS",
                sph: "+19.75",
                bc: "-4.75",
                cyl: "38",
                axis: "x090",
              },
            ],
          },
          {
            prescribedBy: "Dr. Sonha Nguyen",
            date: "2022-09-02T11:18:47.229Z",
            expirationDate: "2022-10-02T11:18:47.229Z",
            prescriptionDetails: [
              {
                eye: "OD",
                sph: "+20.00",
                bc: "-5.00",
                cyl: "70",
                axis: "x180",
              },
              {
                eye: "OS",
                sph: "+19.75",
                bc: "-4.75",
                cyl: "38",
                axis: "x090",
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
            expiredDate: "2022-10-02T11:18:47.229Z",
          },
          {
            id: "2",
            prescription: "Aspirint 0.1% Ointmanet",
            date: "2022-09-02T11:18:47.229Z",
          },
          {
            id: "3",
            prescription: "Aspirint 0.1% Ointmanet",
            date: "2022-09-02T11:18:47.229Z",
            expiredDate: "2022-10-02T11:18:47.229Z",
          },
          {
            id: "4",
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
