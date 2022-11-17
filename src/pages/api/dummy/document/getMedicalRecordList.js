export default function getMedicalRecordList(req, res) {
  if (req.method === "GET") {
    res.status(200).json({
      count: 3,
      entities: [
        {
          encounter: {
            _id: "6de55801-e5de-4344-84d0-dd9fa90f8700",
          },
          provider: {
            _id: "2818ef11-208b-4f43-b471-06ad495381f1",
            firstName: "indraku",
            lastName: "kumar",
            designation: "Mr",
          },
          examSheetTemplate: {
            name: "Exam",
            active: true,
            deleted: false,
            isProvider: false,
            isall: false,
            appointmentType: "Comprehensive",
            _id: "2b3f89ed-9c44-4279-8068-e05e534ac207",
          },
          digitalSignature: {
            _id: "2818ef11-208b-4f43-b471-06ad495381f1",
            date: "Nov 14, 2022 - 05:31 PM",
            lastName: "kumar",
            firstName: "indraku",
            designation: "Mr",
          },
          _id: "7dff3225-4213-42ee-8112-8d088d43fff6",
          _version: "5fc82452-bc3f-4c15-abba-e423ae41a607",
          _created: "Nov 14, 2022, 12:00:56 PM",
        },
        {
          encounter: {
            _id: "968f25f0-a75e-4ff9-b26b-95263e5198a2",
          },
          provider: {
            _id: "2818ef11-208b-4f43-b471-06ad495381f1",
            firstName: "indraku",
            lastName: "kumar",
            designation: "Mr",
          },
          examSheetTemplate: {
            name: "CATARACT",
            active: true,
            deleted: false,
            isProvider: false,
            isall: false,
            appointmentType: "Retina_checkup",
            _id: "1d2a3385-502b-45e4-96ef-a1997d2a6b9d",
          },
          digitalSignature: {
            _id: "2818ef11-208b-4f43-b471-06ad495381f1",
            date: "Nov 14, 2022 - 05:32 PM",
            lastName: "kumar",
            firstName: "indraku",
            designation: "Mr",
          },
          _id: "fef0f253-376d-49e6-ab9e-96089fb03974",
          _version: "0d6b1cc3-58d2-4891-acaf-aeef3ab06847",
          _created: "Nov 14, 2022, 12:00:36 PM",
        },
        {
          encounter: {
            _id: "1fa1d57e-53fc-4878-86ac-c97901d68628",
          },
          provider: {
            _id: "2818ef11-208b-4f43-b471-06ad495381f1",
            firstName: "indraku",
            lastName: "kumar",
            designation: "Mr",
          },
          examSheetTemplate: {
            name: "Ophthalmology",
            active: true,
            deleted: false,
            isProvider: false,
            isall: false,
            appointmentType: "Glaucome_Appointment",
            _id: "dc98f324-a019-4a3a-8fb9-7a1e23700efb",
          },
          digitalSignature: {
            _id: "2818ef11-208b-4f43-b471-06ad495381f1",
            date: "Nov 14, 2022 - 05:31 PM",
            lastName: "kumar",
            firstName: "indraku",
            designation: "Mr",
          },
          _id: "a5618def-2040-4c3d-9186-d680ea25773c",
          _version: "aeee2d87-305e-4081-a603-95d1f2d19cc5",
          _created: "Nov 14, 2022, 12:00:17 PM",
        },
      ],
      _links: {
        self: {
          href: "/emr?pageNo=0&pageSize=20",
        },
      },
    });
  }
}
