export const mockAppointmentTypes = {
  count: 5,
  entities: [
    {
      code: "Clinical_Diagnosis",
      name: "Clinical_Diagnosis",
      key: 4,
      order: 4,
      category: { code: "Vision", description: "Vision" },
      acronym: "CAD",
      color: "#6fc77b",
      slotLength: 5,
      notes: "",
      _links: { self: { href: "/v1/appointment-types/Clinical_Diagnosis" } },
    },
    {
      code: "NO_APPOINTMENT",
      name: "NO APPOINTMENT",
      key: 1,
      order: 1,
      category: { code: "Medical", description: "Medical" },
      acronym: "NA",
      color: "#8F8F8F",
      slotLength: 5,
      notes: "NO_APPOINTMENT is a default appointment type",
      _links: { self: { href: "/v1/appointment-types/NO_APPOINTMENT" } },
    },
    {
      code: "Comprehensive",
      name: "Comprehensive",
      key: 2,
      order: 2,
      category: { code: "Medical", description: "Medical" },
      acronym: "CP",
      color: "#f2ee74",
      slotLength: 5,
      notes: "",
      _links: { self: { href: "/v1/appointment-types/Comprehensive" } },
    },
    {
      code: "Glaucome_Appointment",
      name: "Glaucoma_Appointment",
      key: 3,
      order: 3,
      category: { code: "Vision", description: "Vision" },
      acronym: "GPA",
      color: "#528aa8",
      slotLength: 5,
      notes: "",
      _links: {
        self: { href: "/v1/appointment-types/Glaucome_Appointment" },
      },
    },
    {
      code: "Retina_checkup",
      name: "Retina checkup",
      key: 5,
      order: 5,
      category: { code: "Vision", description: "Vision" },
      acronym: "RET",
      color: "#db8686",
      slotLength: 5,
      notes: "",
      _links: { self: { href: "/v1/appointment-types/Retina_checkup" } },
    },
  ],
  _links: { self: { href: "/appointments?pageNo=0&pageSize=100" } },
};

export const mockInsurance = {
  count: 14,
  entities: [
    {
      name: "EyeMed",
      links: {
        self: { href: "/v1/payers/2a7601c4-f9e7-4698-ae56-bbe44dee0c9a" },
      },
      phone1: "5467234869",
      address: "700 18TH ST S",
      city: "BIRMINGHAM",
      state: "AL",
      zip: "35233",
      available: false,
      unbundleOptions: false,
      _id: "2a7601c4-f9e7-4698-ae56-bbe44dee0c9a",
      show_rx_on_hicf: false,
      pin_on_each_hicf: false,
      use_date_of_dispense_on_hicf: false,
      group_required_default: false,
      requires_credentiating: false,
      show_online: false,
    },
    {
      name: "Vision Care",
      links: {
        self: { href: "/v1/payers/40df17d8-b546-400d-94a4-218b1bc92747" },
      },
      phone1: "5467234869",
      address: "700 18TH ST S",
      city: "BIRMINGHAM",
      state: "AL",
      zip: "35233",
      available: false,
      unbundleOptions: false,
      _id: "40df17d8-b546-400d-94a4-218b1bc92747",
      show_rx_on_hicf: false,
      pin_on_each_hicf: false,
      use_date_of_dispense_on_hicf: false,
      group_required_default: false,
      requires_credentiating: false,
      show_online: false,
    },
    {
      name: "United Healthcare",
      links: {
        self: { href: "/v1/payers/45de1cbd-09f0-4e98-aa45-9e8f4b3f68fc" },
      },
      phone1: "5467234869",
      address: "700 18TH ST S",
      city: "BIRMINGHAM",
      state: "AL",
      zip: "35233",
      available: false,
      unbundleOptions: false,
      _id: "45de1cbd-09f0-4e98-aa45-9e8f4b3f68fc",
      show_rx_on_hicf: false,
      pin_on_each_hicf: false,
      use_date_of_dispense_on_hicf: false,
      group_required_default: false,
      requires_credentiating: false,
      show_online: false,
    },
    {
      name: "Blue Cross",
      links: {
        self: { href: "/v1/payers/36241a46-d135-4356-96b0-b2b5ceaf06ba" },
      },
      phone1: "5467234869",
      address: "700 18TH ST S",
      city: "BIRMINGHAM",
      state: "AL",
      zip: "35233",
      available: false,
      unbundleOptions: false,
      _id: "36241a46-d135-4356-96b0-b2b5ceaf06ba",
      show_rx_on_hicf: false,
      pin_on_each_hicf: false,
      use_date_of_dispense_on_hicf: false,
      group_required_default: false,
      requires_credentiating: false,
      show_online: false,
    },
    {
      name: "Medicare",
      links: {
        self: { href: "/v1/payers/890184c4-400f-4bdf-9d2f-4be098a9fd45" },
      },
      phone1: "5467234869",
      address: "700 18TH ST S",
      city: "BIRMINGHAM",
      state: "AL",
      zip: "35233",
      available: false,
      unbundleOptions: false,
      _id: "890184c4-400f-4bdf-9d2f-4be098a9fd45",
      show_rx_on_hicf: false,
      pin_on_each_hicf: false,
      use_date_of_dispense_on_hicf: false,
      group_required_default: false,
      requires_credentiating: false,
      show_online: false,
    },
    {
      name: "Medicaid",
      links: {
        self: { href: "/v1/payers/568f0fd4-98c5-470f-9f91-55f3c24449cf" },
      },
      phone1: "5467234869",
      address: "700 18TH ST S",
      city: "BIRMINGHAM",
      state: "AL",
      zip: "35233",
      available: false,
      unbundleOptions: false,
      _id: "568f0fd4-98c5-470f-9f91-55f3c24449cf",
      show_rx_on_hicf: false,
      pin_on_each_hicf: false,
      use_date_of_dispense_on_hicf: false,
      group_required_default: false,
      requires_credentiating: false,
      show_online: false,
    },
    {
      name: "Eye Care",
      links: {
        self: { href: "/v1/payers/0956cb6c-1bf5-4b8a-a632-208beaeff489" },
      },
      phone1: "5467234869",
      address: "700 18TH ST S",
      city: "BIRMINGHAM",
      state: "AL",
      zip: "35233",
      available: false,
      unbundleOptions: false,
      _id: "0956cb6c-1bf5-4b8a-a632-208beaeff489",
      show_rx_on_hicf: false,
      pin_on_each_hicf: false,
      use_date_of_dispense_on_hicf: false,
      group_required_default: false,
      requires_credentiating: false,
      show_online: false,
    },
    {
      name: "United Healthcare",
      links: {
        self: { href: "/v1/payers/9794b2a3-57a9-4ca1-a077-5a6f998501bd" },
      },
      phone1: "5467234869",
      address: "700 18TH ST S",
      city: "BIRMINGHAM",
      state: "AL",
      zip: "35233",
      available: false,
      unbundleOptions: false,
      _id: "9794b2a3-57a9-4ca1-a077-5a6f998501bd",
      show_rx_on_hicf: false,
      pin_on_each_hicf: false,
      use_date_of_dispense_on_hicf: false,
      group_required_default: false,
      requires_credentiating: false,
      show_online: false,
    },
    {
      name: "Test_Finance_class",
      links: {
        self: { href: "/v1/payers/84b3e396-82d3-42bb-a9e0-c3a90ee24dad" },
      },
      phone1: "7654367897",
      address: "tescase one",
      city: "Noida",
      state: "Delhi",
      zip: "10024",
      available: false,
      unbundleOptions: false,
      _id: "84b3e396-82d3-42bb-a9e0-c3a90ee24dad",
      show_rx_on_hicf: false,
      pin_on_each_hicf: false,
      use_date_of_dispense_on_hicf: false,
      group_required_default: false,
      requires_credentiating: false,
      show_online: false,
    },
    {
      name: "WORKERS COMPENSATION",
      links: {
        self: { href: "/v1/payers/dc87ae1f-8302-481e-b09f-990ffaa67cd7" },
      },
      phone1: "7654367897",
      address: "tescase one",
      city: "Noida",
      state: "Delhi",
      zip: "10024",
      available: false,
      unbundleOptions: false,
      _id: "dc87ae1f-8302-481e-b09f-990ffaa67cd7",
      show_rx_on_hicf: false,
      pin_on_each_hicf: false,
      use_date_of_dispense_on_hicf: false,
      group_required_default: false,
      requires_credentiating: false,
      show_online: false,
    },
    {
      name: "ALLSTATE",
      links: {
        self: { href: "/v1/payers/21526220-1b68-40bb-9b2d-54274b410caf" },
      },
      phone1: "7654367897",
      address: "tescase one",
      city: "Noida",
      state: "Delhi",
      zip: "10024",
      available: false,
      unbundleOptions: false,
      _id: "21526220-1b68-40bb-9b2d-54274b410caf",
      show_rx_on_hicf: false,
      pin_on_each_hicf: false,
      use_date_of_dispense_on_hicf: false,
      group_required_default: false,
      requires_credentiating: false,
      show_online: false,
    },
    {
      name: "ILLINOIS MEDICARE",
      links: {
        self: { href: "/v1/payers/44971e01-2994-4e2d-aff2-d31ce25b15f1" },
      },
      phone1: "7654367897",
      address: "tescase one",
      city: "Noida",
      state: "Delhi",
      zip: "10024",
      available: false,
      unbundleOptions: false,
      _id: "44971e01-2994-4e2d-aff2-d31ce25b15f1",
      show_rx_on_hicf: false,
      pin_on_each_hicf: false,
      use_date_of_dispense_on_hicf: false,
      group_required_default: false,
      requires_credentiating: false,
      show_online: false,
    },
    {
      name: "Cigna",
      links: {
        self: { href: "/v1/payers/42a5bc17-36bb-44a4-8ef7-940bca02838c" },
      },
      phone1: "7654367897",
      address: "tescase one",
      city: "Noida",
      state: "Delhi",
      zip: "10024",
      available: false,
      unbundleOptions: false,
      _id: "42a5bc17-36bb-44a4-8ef7-940bca02838c",
      show_rx_on_hicf: false,
      pin_on_each_hicf: false,
      use_date_of_dispense_on_hicf: false,
      group_required_default: false,
      requires_credentiating: false,
      show_online: false,
    },
    {
      name: "NW M Aetna",
      links: {
        self: { href: "/v1/payers/82d7064e-0f1f-46f8-83e5-3d37d2d9d1e6" },
      },
      phone1: "8002456738",
      address: "P.O. BOX 981106",
      city: "EL PASO",
      state: "TX",
      zip: "79998",
      available: false,
      unbundleOptions: false,
      _id: "82d7064e-0f1f-46f8-83e5-3d37d2d9d1e6",
      show_rx_on_hicf: false,
      pin_on_each_hicf: false,
      use_date_of_dispense_on_hicf: false,
      group_required_default: false,
      requires_credentiating: false,
      show_online: false,
    },
  ],
  _links: { self: { href: "/api?pageNo=0&pageSize=100" } },
};

export const submitFilter = {
  offices: [
    {
      office: {
        name: "Ballwin",
        _id: "4cd970a0-8529-4b44-a4c5-99c9f4e8d078",
        _version: "0c381712-420e-4705-bb6d-f0226ceb5b12",
        _updated: "Sep 17, 2022, 10:14:52 AM",
        _updatedBy: {
          _id: "981ad89e-7fee-42d8-92ec-c34324d862a0",
          _links: {
            self: {
              href: "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0",
            },
          },
        },
        _links: {
          self: { href: "/v1/offices/4cd970a0-8529-4b44-a4c5-99c9f4e8d078" },
        },
      },
      providerTemplate: [
        {
          name: "Sick",
          templateType: { code: "USER", description: "User template type" },
          provider: {
            firstName: "Steve",
            lastName: "Adam",
            designation: "Dr",
            inHouse: false,
            _id: "19f1c186-37a8-46ef-a731-0a1f022be782",
            _version: "a1c4536d-6e5e-4779-81b0-080fe4e23a23",
            _updated: "Apr 8, 2022, 8:35:42 AM",
          },
          slots: [
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "11:05",
              endHHMM: "11:10",
              _id: "6f64f4e2-5273-4631-b2fa-b4d6745d6062",
              _version: "3e03ec17-50fd-4a43-9147-ca300d3025be",
              _created: "Apr 8, 2022, 8:37:38 AM",
              _updated: "Sep 22, 2022, 10:24:08 AM",
              _createdBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
              _updatedBy: {
                _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                _links: {
                  self: {
                    href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "11:20",
              endHHMM: "11:25",
              _id: "83a08007-4537-424d-90e2-563947d0d91c",
              _version: "d8b7d0fe-cd95-410b-97c8-0bfc90bdf983",
              _created: "Apr 8, 2022, 8:37:38 AM",
              _updated: "Sep 22, 2022, 10:24:08 AM",
              _createdBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
              _updatedBy: {
                _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                _links: {
                  self: {
                    href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "11:25",
              endHHMM: "11:30",
              _id: "1375634c-23f5-47b9-a15a-990df8752f8b",
              _version: "9e2571a8-20f4-4426-8238-68802cf056ed",
              _created: "Apr 8, 2022, 8:37:38 AM",
              _updated: "Sep 22, 2022, 10:24:08 AM",
              _createdBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
              _updatedBy: {
                _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                _links: {
                  self: {
                    href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "11:30",
              endHHMM: "11:35",
              _id: "fec3523e-a6ab-4ca1-8444-6ab463524b4e",
              _version: "2041999e-83bb-47dd-9c6b-ca7a0dc1abfa",
              _created: "Apr 8, 2022, 8:37:38 AM",
              _updated: "Sep 22, 2022, 10:24:08 AM",
              _createdBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
              _updatedBy: {
                _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                _links: {
                  self: {
                    href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "11:35",
              endHHMM: "11:40",
              _id: "4a9fa94d-2ef9-444b-bcb3-e13e4298f46e",
              _version: "20549e02-dda6-4653-ac01-bc49b74fc27d",
              _created: "Apr 8, 2022, 8:37:38 AM",
              _updated: "Sep 22, 2022, 10:24:08 AM",
              _createdBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
              _updatedBy: {
                _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                _links: {
                  self: {
                    href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "15:20",
              endHHMM: "15:25",
              _id: "c2ecd16d-6dd0-434f-8c79-f2eedf3cd8ad",
              _version: "19eb2ffd-92a6-42df-b3bd-3692c4e8f047",
              _created: "Apr 8, 2022, 8:37:38 AM",
              _updated: "Sep 22, 2022, 10:24:08 AM",
              _createdBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
              _updatedBy: {
                _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                _links: {
                  self: {
                    href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "16:15",
              endHHMM: "16:20",
              _id: "5f4ef00d-a8d1-4587-8d96-33a845f83cfe",
              _version: "7861bfe1-ab4c-4152-b102-c5619cb881b3",
              _created: "Apr 8, 2022, 8:37:38 AM",
              _updated: "Sep 22, 2022, 10:24:08 AM",
              _createdBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
              _updatedBy: {
                _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                _links: {
                  self: {
                    href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "17:15",
              endHHMM: "17:20",
              _id: "c30757cc-a2b9-4f2d-a53d-fb3067f0eedb",
              _version: "7f02a502-4c2c-4cc4-8062-e397d8238a5c",
              _created: "Apr 8, 2022, 8:37:38 AM",
              _updated: "Sep 22, 2022, 10:24:08 AM",
              _createdBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
              _updatedBy: {
                _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                _links: {
                  self: {
                    href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                  },
                },
              },
            },
          ],
          scheduleDate: "10/03/2022",
          status: "UPDATED",
          _id: "ff788e3f-4ed2-4cf8-9d6f-ab50dcf70789",
          _version: "7c6e09ea-9159-4bfe-aa18-395f5c30ea4b",
          _created: "Apr 8, 2022, 8:37:38 AM",
          _updated: "Sep 22, 2022, 10:24:08 AM",
          _createdBy: {
            _id: "2818ef11-208b-4f43-b471-06ad495381f1",
            _links: {
              self: {
                href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
              },
            },
          },
          _updatedBy: {
            _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
            _links: {
              self: {
                href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
              },
            },
          },
        },
        {
          name: "Surgery",
          templateType: { code: "USER", description: "User template type" },
          provider: {
            firstName: "Steve",
            lastName: "Adam",
            designation: "Dr",
            inHouse: false,
            _id: "19f1c186-37a8-46ef-a731-0a1f022be782",
            _version: "a1c4536d-6e5e-4779-81b0-080fe4e23a23",
            _updated: "Apr 8, 2022, 8:35:42 AM",
          },
          slots: [
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "15:15",
              endHHMM: "15:20",
              _id: "dfb339d2-4cdc-4eeb-a083-4a9f83fed520",
              _version: "633cdf5f-5baa-4bf8-805a-9594a032db23",
              _created: "Apr 8, 2022, 8:38:02 AM",
              _updated: "Jun 3, 2022, 8:41:14 AM",
              _createdBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "16:15",
              endHHMM: "16:20",
              _id: "7e13adb2-ddd7-4113-a42a-55613330a0cf",
              _version: "4a11d155-129c-4caa-8846-c69028802d86",
              _created: "Apr 8, 2022, 8:38:02 AM",
              _updated: "Jun 3, 2022, 8:41:14 AM",
              _createdBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "17:00",
              endHHMM: "17:05",
              _id: "b531e4dc-3931-4768-a880-4640ae20e98e",
              _version: "1f2fad28-fc17-4cf7-9c77-9b1eaadb21d8",
              _created: "Apr 8, 2022, 8:38:02 AM",
              _updated: "Jun 3, 2022, 8:41:14 AM",
              _createdBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
          ],
          scheduleDate: "10/03/2022",
          status: "UPDATED",
          _id: "af473975-2e0d-40cb-a88e-9e975d58dd51",
          _version: "18f55599-781d-4da2-a45e-1567b9e3773c",
          _created: "Apr 8, 2022, 8:38:02 AM",
          _updated: "Jun 3, 2022, 8:41:14 AM",
          _createdBy: {
            _id: "2818ef11-208b-4f43-b471-06ad495381f1",
            _links: {
              self: {
                href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
              },
            },
          },
          _updatedBy: {
            _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
            _links: {
              self: {
                href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
              },
            },
          },
        },
        {
          name: "Standard",
          templateType: { code: "USER", description: "User template type" },
          provider: {
            firstName: "Jaco",
            lastName: "David",
            designation: "MBBS, MD",
            inHouse: false,
            _id: "b579b0d1-0c93-4db4-8ca8-294a60e718e4",
            _version: "cbff920b-0dbb-4450-b00d-cd94f5a842ca",
            _updated: "Feb 15, 2022, 7:06:54 AM",
          },
          slots: [
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "10:15",
              endHHMM: "10:20",
              _id: "2761acee-e634-4db1-a54f-172443f47532",
              _version: "bae0fa33-2df5-41a1-94c0-e5b037139d63",
              _created: "Feb 28, 2022, 12:11:38 PM",
              _updated: "Sep 20, 2022, 4:57:56 AM",
              _createdBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
              _updatedBy: {
                _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                _links: {
                  self: {
                    href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "10:30",
              endHHMM: "10:35",
              _id: "7eb8c88b-02a4-4f55-8d9e-6cc1d25377e0",
              _version: "3b839d5f-e929-4177-a722-16dac797782e",
              _created: "Feb 28, 2022, 12:11:38 PM",
              _updated: "Sep 20, 2022, 4:57:56 AM",
              _createdBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
              _updatedBy: {
                _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                _links: {
                  self: {
                    href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "10:45",
              endHHMM: "10:50",
              _id: "e7db2ce2-74a3-40e0-bf2f-8cf147ac7fa9",
              _version: "25a9d913-364f-4992-b35f-dde3c53d49d5",
              _created: "Feb 28, 2022, 12:11:38 PM",
              _updated: "Sep 20, 2022, 4:57:56 AM",
              _createdBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
              _updatedBy: {
                _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                _links: {
                  self: {
                    href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "11:05",
              endHHMM: "11:10",
              _id: "1595cef4-13de-492a-af8e-609e01f70cad",
              _version: "bcdfe9d2-2781-4e16-a117-4616960f7413",
              _created: "Feb 28, 2022, 12:11:38 PM",
              _updated: "Sep 20, 2022, 4:57:56 AM",
              _createdBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
              _updatedBy: {
                _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                _links: {
                  self: {
                    href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                  },
                },
              },
            },
          ],
          scheduleDate: "10/03/2022",
          status: "UPDATED",
          _id: "4e8156e3-94b9-4b9e-8516-730c34fd9dd2",
          _version: "d070230c-a6ed-49f8-9100-6d7110c643e5",
          _created: "Feb 28, 2022, 12:11:38 PM",
          _updated: "Sep 20, 2022, 4:57:56 AM",
          _createdBy: {
            _id: "2818ef11-208b-4f43-b471-06ad495381f1",
            _links: {
              self: {
                href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
              },
            },
          },
          _updatedBy: {
            _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
            _links: {
              self: {
                href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
              },
            },
          },
        },
        {
          name: "OPH Dr Bloom",
          templateType: { code: "USER", description: "User template type" },
          provider: {
            firstName: "Bloom",
            lastName: "Steven",
            designation: "MBBS, MD",
            inHouse: false,
            _id: "8b5cd1de-a931-475e-8997-2c35209997d7",
            _version: "f7394cdb-b7d8-4f1c-8108-a2cd8e3a2a5f",
            _updated: "Sep 28, 2022, 1:06:32 PM",
          },
          slots: [
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "09:10",
              endHHMM: "09:15",
              _id: "20fa83a7-6c7f-424e-828f-594d7f1e7a05",
              _version: "66af3265-7117-4fbb-923d-eefacb79f70f",
              _created: "Feb 15, 2022, 6:55:06 AM",
              _updated: "Feb 15, 2022, 6:56:52 AM",
              _createdBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
              _updatedBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "09:15",
              endHHMM: "09:20",
              _id: "5cbb625c-f32b-40ad-884b-1f1ad8bf3c67",
              _version: "3133d32d-cf7d-48f7-a0fc-a781be1a2129",
              _created: "Feb 15, 2022, 6:55:06 AM",
              _updated: "Feb 15, 2022, 6:56:52 AM",
              _createdBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
              _updatedBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "09:35",
              endHHMM: "09:40",
              _id: "c3b508a1-88b8-4ccd-a342-fe17d49aebbe",
              _version: "5cca33d0-bfc4-4f72-a125-b8a4316da6bd",
              _created: "Feb 15, 2022, 6:55:06 AM",
              _updated: "Feb 15, 2022, 6:56:52 AM",
              _createdBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
              _updatedBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "09:55",
              endHHMM: "10:00",
              _id: "fd37c7ca-1756-491d-b29a-e86738220cc7",
              _version: "d98a3adf-2a73-48a5-b7ee-3078fe53e1b2",
              _created: "Feb 15, 2022, 6:55:06 AM",
              _updated: "Feb 15, 2022, 6:56:52 AM",
              _createdBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
              _updatedBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
            },
          ],
          scheduleDate: "10/03/2022",
          status: "UPDATED",
          _id: "9c089446-7193-4585-813b-5dfbd59f9ef0",
          _version: "d3a32b93-f842-4a77-8123-75126d927919",
          _created: "Feb 15, 2022, 6:55:06 AM",
          _updated: "Feb 15, 2022, 6:56:52 AM",
          _createdBy: {
            _id: "2818ef11-208b-4f43-b471-06ad495381f1",
            _links: {
              self: {
                href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
              },
            },
          },
          _updatedBy: {
            _id: "2818ef11-208b-4f43-b471-06ad495381f1",
            _links: {
              self: {
                href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
              },
            },
          },
        },
        {
          name: "STANDARD",
          templateType: { code: "USER", description: "User template type" },
          provider: {
            firstName: "Bloom",
            lastName: "Steven",
            designation: "MBBS, MD",
            inHouse: false,
            _id: "8b5cd1de-a931-475e-8997-2c35209997d7",
            _version: "f7394cdb-b7d8-4f1c-8108-a2cd8e3a2a5f",
            _updated: "Sep 28, 2022, 1:06:32 PM",
          },
          slots: [
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "14:00",
              endHHMM: "14:05",
              _id: "4ed8ba08-2fbf-44b4-89d5-ab8e26e66ff0",
              _version: "a8c9c947-3cfe-4e45-9cbe-c5e8ccb96dfd",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "14:05",
              endHHMM: "14:10",
              _id: "560d1c38-0011-4a61-bf06-07db5c1ddae3",
              _version: "3a99fc76-77b4-488e-9669-03b6e698fc06",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "14:10",
              endHHMM: "14:15",
              _id: "ebb3ba27-aceb-41c6-ae1c-dbe009b5ddb8",
              _version: "e8ef9f44-5bc3-4dce-98ab-924420c969c1",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "14:15",
              endHHMM: "14:20",
              _id: "81d33d15-8713-4cfe-b959-bd0a371edc26",
              _version: "d322d328-8651-4f7c-b8cd-682810e1f41e",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "14:20",
              endHHMM: "14:25",
              _id: "077ab5df-d6b2-4b2f-a3dd-a0654729698d",
              _version: "579540d6-0e71-4054-8409-9e0b3414134a",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "14:25",
              endHHMM: "14:30",
              _id: "db18faa1-8dc7-4497-bc57-8e704e8c274f",
              _version: "0e75017e-9295-4cae-bb4f-eefcd6453f3b",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "14:30",
              endHHMM: "14:35",
              _id: "8dd7e2a0-9e8d-4a3a-99e6-c5fddf2c96a3",
              _version: "01cea112-8b46-41df-8606-1a73af1cbe60",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "14:35",
              endHHMM: "14:40",
              _id: "11c6e0e4-66fa-4652-9ff8-8b4e5335892c",
              _version: "30a5e0c4-4971-444f-b118-4e796443da0d",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "14:40",
              endHHMM: "14:45",
              _id: "d9b64aa5-c77b-4d22-849a-772d5e724924",
              _version: "a0e263fb-b413-4356-9d61-c7dd38b4febe",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "14:45",
              endHHMM: "14:50",
              _id: "ee342819-fd59-4eb1-bc37-35ec8cfba82f",
              _version: "87c87170-0916-4205-a4bc-302fb3687497",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "14:50",
              endHHMM: "14:55",
              _id: "54d1a041-9c5d-42fc-9ba9-6d603ccba5cf",
              _version: "dfb44243-de06-4653-85bc-9589db16af37",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "14:55",
              endHHMM: "15:00",
              _id: "29b2cb8c-a9ab-4cd6-b55e-d4e74b0ebee2",
              _version: "8a1f45fd-4378-4b4a-9666-57bbda6a9cbe",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "18:05",
              endHHMM: "18:10",
              _id: "722ec681-4483-40d3-83a6-988cd836dda1",
              _version: "889a5524-fbd1-40a6-9328-fe25183bd875",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "18:10",
              endHHMM: "18:15",
              _id: "b62d22ef-21f1-4f7d-b70a-46169dd1c1e8",
              _version: "74841323-c9c1-4324-8bb0-ff86bdf3bb63",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "18:15",
              endHHMM: "18:20",
              _id: "f4413829-2270-4192-8493-590d078873a9",
              _version: "43709d43-c7a4-461b-98e0-ebf5d66ae6c6",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "18:20",
              endHHMM: "18:25",
              _id: "3be78187-5cde-4396-8ad0-c4c9a688db75",
              _version: "4e93232d-7428-43d6-a3d7-ff04c47f845f",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "18:25",
              endHHMM: "18:30",
              _id: "b83d4ee2-a060-4e19-9b7c-c2b4e9d02094",
              _version: "5c1c8b41-c17b-4bf5-8418-b4dc6d38eb27",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "18:30",
              endHHMM: "18:35",
              _id: "b024f358-06a5-4335-94e8-431fec76d65e",
              _version: "1b34ea20-f015-4ff3-b3d2-19c07cbd2154",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "18:35",
              endHHMM: "18:40",
              _id: "b8072d08-91c2-438e-bc37-175b09f2ed0a",
              _version: "e7eb8540-9bb2-438d-b0bd-f3a17e76a35e",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "18:40",
              endHHMM: "18:45",
              _id: "9508c6eb-00e5-4137-aeee-3b08ea993689",
              _version: "ca427aec-b6fd-4e39-a837-9a7471d3d6d1",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "18:45",
              endHHMM: "18:50",
              _id: "e35274eb-f188-4b34-aa10-2e00ad6f9b69",
              _version: "48809043-9227-4e58-9c20-6997c8cb9e6c",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "18:50",
              endHHMM: "18:55",
              _id: "dd67c690-50ee-4485-94e0-1151a2c68676",
              _version: "ce593a52-3fa2-4914-bf25-f5970befa017",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "18:55",
              endHHMM: "19:00",
              _id: "d46da0d3-38f7-4886-8d33-25f4f8a9f169",
              _version: "cf5f698b-263e-4ed0-b075-fb8c9101d9c6",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "19:00",
              endHHMM: "19:05",
              _id: "5afdf21b-f11e-4a75-9926-3e8ef2caa92d",
              _version: "53165819-0166-44f2-8c07-de01e39f4411",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "22:05",
              endHHMM: "22:10",
              _id: "d4c775e3-f204-48d4-bfa8-bf4c8b4cf7e1",
              _version: "a25080b3-4fca-4ea3-9748-e9e29d09828a",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "22:10",
              endHHMM: "22:15",
              _id: "c9a25951-b55a-46de-b44b-909bed698e82",
              _version: "695322c9-db44-481a-abc3-30fa51fe806b",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "22:15",
              endHHMM: "22:20",
              _id: "98fc0fda-2c96-4f02-a992-82d766bf3b9e",
              _version: "ce2faaa7-a3e4-4175-8fea-128b84b62442",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "22:20",
              endHHMM: "22:25",
              _id: "7770315e-555a-4544-a2d2-fe7596f9b9f5",
              _version: "eaa01ead-2542-49d9-a0da-27e3999aeb30",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "22:25",
              endHHMM: "22:30",
              _id: "a37add81-2640-4f7a-a031-d8c3326d89fc",
              _version: "9bf30d7a-08a0-4960-a76e-05f40fc2bc86",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "22:30",
              endHHMM: "22:35",
              _id: "802bf554-78df-47d1-ad0f-67129643117f",
              _version: "b959111e-2d9b-4417-883c-879df721958e",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "22:35",
              endHHMM: "22:40",
              _id: "5ff2ab27-18be-431b-9aae-353d0a622f92",
              _version: "ef4742f0-4ac5-49c8-939d-906324899533",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "22:40",
              endHHMM: "22:45",
              _id: "61ca2b4f-8c6f-40d6-9722-380ac8bee2d8",
              _version: "833856a5-bfba-4f16-a38d-5bf87c9caad3",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "22:45",
              endHHMM: "22:50",
              _id: "081c9df3-136b-4390-aa03-546efd1a2a71",
              _version: "4860cd16-eab9-45c5-9f3f-a4bd387e8568",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "22:50",
              endHHMM: "22:55",
              _id: "535b819f-71a8-44d1-b9b5-cca96666814e",
              _version: "3c411e70-912a-491a-8f9b-4120a8100688",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "22:55",
              endHHMM: "23:00",
              _id: "d79f4740-4ebe-4333-9e32-dae799349a3e",
              _version: "8b2c121c-c13a-4d29-9301-2b0b5ebed6a4",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
          ],
          scheduleDate: "10/03/2022",
          status: "UPDATED",
          _id: "5e6a9c25-e247-4d39-a0d1-e9de46b3a725",
          _version: "526f0fcd-35c1-43f3-8f5c-c4e5d9ea7433",
          _created: "Sep 28, 2022, 12:52:40 PM",
          _updated: "Sep 28, 2022, 1:03:46 PM",
          _createdBy: {
            _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
            _links: {
              self: {
                href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
              },
            },
          },
          _updatedBy: {
            _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
            _links: {
              self: {
                href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
              },
            },
          },
        },
        {
          name: "Sick",
          templateType: { code: "USER", description: "User template type" },
          provider: {
            firstName: "Steve",
            lastName: "Adam",
            designation: "Dr",
            inHouse: false,
            _id: "19f1c186-37a8-46ef-a731-0a1f022be782",
            _version: "a1c4536d-6e5e-4779-81b0-080fe4e23a23",
            _updated: "Apr 8, 2022, 8:35:42 AM",
          },
          slots: [
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "10:15",
              endHHMM: "10:20",
              _id: "5cccda4c-c309-4a73-bed5-2b4dcd320490",
              _version: "0649e227-df6c-40be-a576-cd68874cd73d",
              _created: "Apr 8, 2022, 8:37:38 AM",
              _updated: "Sep 22, 2022, 10:24:08 AM",
              _createdBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
              _updatedBy: {
                _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                _links: {
                  self: {
                    href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "11:00",
              endHHMM: "11:05",
              _id: "8d0f66d8-67e6-4c93-8c41-3e92c4a88b0e",
              _version: "3f41f3e8-90d2-4a39-8579-cb1d11539d15",
              _created: "Apr 8, 2022, 8:37:38 AM",
              _updated: "Sep 22, 2022, 10:24:08 AM",
              _createdBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
              _updatedBy: {
                _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                _links: {
                  self: {
                    href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "11:05",
              endHHMM: "11:10",
              _id: "6f64f4e2-5273-4631-b2fa-b4d6745d6062",
              _version: "3e03ec17-50fd-4a43-9147-ca300d3025be",
              _created: "Apr 8, 2022, 8:37:38 AM",
              _updated: "Sep 22, 2022, 10:24:08 AM",
              _createdBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
              _updatedBy: {
                _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                _links: {
                  self: {
                    href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "11:10",
              endHHMM: "11:15",
              _id: "646deec2-3859-405b-9b9d-25df8545efe3",
              _version: "acbf2731-4ac6-4d9f-8606-3b2f791bbace",
              _created: "Apr 8, 2022, 8:37:38 AM",
              _updated: "Sep 22, 2022, 10:24:08 AM",
              _createdBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
              _updatedBy: {
                _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                _links: {
                  self: {
                    href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "11:15",
              endHHMM: "11:20",
              _id: "9186b279-ca0c-4b1e-88f5-33be923c060b",
              _version: "aa875054-51e1-4f81-97f2-7a077a618eae",
              _created: "Apr 8, 2022, 8:37:38 AM",
              _updated: "Sep 22, 2022, 10:24:08 AM",
              _createdBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
              _updatedBy: {
                _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                _links: {
                  self: {
                    href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "11:20",
              endHHMM: "11:25",
              _id: "83a08007-4537-424d-90e2-563947d0d91c",
              _version: "d8b7d0fe-cd95-410b-97c8-0bfc90bdf983",
              _created: "Apr 8, 2022, 8:37:38 AM",
              _updated: "Sep 22, 2022, 10:24:08 AM",
              _createdBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
              _updatedBy: {
                _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                _links: {
                  self: {
                    href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "11:25",
              endHHMM: "11:30",
              _id: "1375634c-23f5-47b9-a15a-990df8752f8b",
              _version: "9e2571a8-20f4-4426-8238-68802cf056ed",
              _created: "Apr 8, 2022, 8:37:38 AM",
              _updated: "Sep 22, 2022, 10:24:08 AM",
              _createdBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
              _updatedBy: {
                _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                _links: {
                  self: {
                    href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "11:30",
              endHHMM: "11:35",
              _id: "fec3523e-a6ab-4ca1-8444-6ab463524b4e",
              _version: "2041999e-83bb-47dd-9c6b-ca7a0dc1abfa",
              _created: "Apr 8, 2022, 8:37:38 AM",
              _updated: "Sep 22, 2022, 10:24:08 AM",
              _createdBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
              _updatedBy: {
                _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                _links: {
                  self: {
                    href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "11:35",
              endHHMM: "11:40",
              _id: "4a9fa94d-2ef9-444b-bcb3-e13e4298f46e",
              _version: "20549e02-dda6-4653-ac01-bc49b74fc27d",
              _created: "Apr 8, 2022, 8:37:38 AM",
              _updated: "Sep 22, 2022, 10:24:08 AM",
              _createdBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
              _updatedBy: {
                _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                _links: {
                  self: {
                    href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "15:20",
              endHHMM: "15:25",
              _id: "c2ecd16d-6dd0-434f-8c79-f2eedf3cd8ad",
              _version: "19eb2ffd-92a6-42df-b3bd-3692c4e8f047",
              _created: "Apr 8, 2022, 8:37:38 AM",
              _updated: "Sep 22, 2022, 10:24:08 AM",
              _createdBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
              _updatedBy: {
                _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                _links: {
                  self: {
                    href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "16:15",
              endHHMM: "16:20",
              _id: "5f4ef00d-a8d1-4587-8d96-33a845f83cfe",
              _version: "7861bfe1-ab4c-4152-b102-c5619cb881b3",
              _created: "Apr 8, 2022, 8:37:38 AM",
              _updated: "Sep 22, 2022, 10:24:08 AM",
              _createdBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
              _updatedBy: {
                _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                _links: {
                  self: {
                    href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "17:15",
              endHHMM: "17:20",
              _id: "c30757cc-a2b9-4f2d-a53d-fb3067f0eedb",
              _version: "7f02a502-4c2c-4cc4-8062-e397d8238a5c",
              _created: "Apr 8, 2022, 8:37:38 AM",
              _updated: "Sep 22, 2022, 10:24:08 AM",
              _createdBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
              _updatedBy: {
                _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                _links: {
                  self: {
                    href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                  },
                },
              },
            },
          ],
          scheduleDate: "10/04/2022",
          status: "UPDATED",
          _id: "ff788e3f-4ed2-4cf8-9d6f-ab50dcf70789",
          _version: "7c6e09ea-9159-4bfe-aa18-395f5c30ea4b",
          _created: "Apr 8, 2022, 8:37:38 AM",
          _updated: "Sep 22, 2022, 10:24:08 AM",
          _createdBy: {
            _id: "2818ef11-208b-4f43-b471-06ad495381f1",
            _links: {
              self: {
                href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
              },
            },
          },
          _updatedBy: {
            _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
            _links: {
              self: {
                href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
              },
            },
          },
        },
        {
          name: "Surgery",
          templateType: { code: "USER", description: "User template type" },
          provider: {
            firstName: "Steve",
            lastName: "Adam",
            designation: "Dr",
            inHouse: false,
            _id: "19f1c186-37a8-46ef-a731-0a1f022be782",
            _version: "a1c4536d-6e5e-4779-81b0-080fe4e23a23",
            _updated: "Apr 8, 2022, 8:35:42 AM",
          },
          slots: [
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "15:15",
              endHHMM: "15:20",
              _id: "dfb339d2-4cdc-4eeb-a083-4a9f83fed520",
              _version: "633cdf5f-5baa-4bf8-805a-9594a032db23",
              _created: "Apr 8, 2022, 8:38:02 AM",
              _updated: "Jun 3, 2022, 8:41:14 AM",
              _createdBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "16:15",
              endHHMM: "16:20",
              _id: "7e13adb2-ddd7-4113-a42a-55613330a0cf",
              _version: "4a11d155-129c-4caa-8846-c69028802d86",
              _created: "Apr 8, 2022, 8:38:02 AM",
              _updated: "Jun 3, 2022, 8:41:14 AM",
              _createdBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "17:00",
              endHHMM: "17:05",
              _id: "b531e4dc-3931-4768-a880-4640ae20e98e",
              _version: "1f2fad28-fc17-4cf7-9c77-9b1eaadb21d8",
              _created: "Apr 8, 2022, 8:38:02 AM",
              _updated: "Jun 3, 2022, 8:41:14 AM",
              _createdBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
          ],
          scheduleDate: "10/04/2022",
          status: "UPDATED",
          _id: "af473975-2e0d-40cb-a88e-9e975d58dd51",
          _version: "18f55599-781d-4da2-a45e-1567b9e3773c",
          _created: "Apr 8, 2022, 8:38:02 AM",
          _updated: "Jun 3, 2022, 8:41:14 AM",
          _createdBy: {
            _id: "2818ef11-208b-4f43-b471-06ad495381f1",
            _links: {
              self: {
                href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
              },
            },
          },
          _updatedBy: {
            _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
            _links: {
              self: {
                href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
              },
            },
          },
        },
        {
          name: "Standard",
          templateType: { code: "USER", description: "User template type" },
          provider: {
            firstName: "Jaco",
            lastName: "David",
            designation: "MBBS, MD",
            inHouse: false,
            _id: "b579b0d1-0c93-4db4-8ca8-294a60e718e4",
            _version: "cbff920b-0dbb-4450-b00d-cd94f5a842ca",
            _updated: "Feb 15, 2022, 7:06:54 AM",
          },
          slots: [
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "10:30",
              endHHMM: "10:35",
              _id: "7eb8c88b-02a4-4f55-8d9e-6cc1d25377e0",
              _version: "3b839d5f-e929-4177-a722-16dac797782e",
              _created: "Feb 28, 2022, 12:11:38 PM",
              _updated: "Sep 20, 2022, 4:57:56 AM",
              _createdBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
              _updatedBy: {
                _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                _links: {
                  self: {
                    href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "10:45",
              endHHMM: "10:50",
              _id: "e7db2ce2-74a3-40e0-bf2f-8cf147ac7fa9",
              _version: "25a9d913-364f-4992-b35f-dde3c53d49d5",
              _created: "Feb 28, 2022, 12:11:38 PM",
              _updated: "Sep 20, 2022, 4:57:56 AM",
              _createdBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
              _updatedBy: {
                _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                _links: {
                  self: {
                    href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "11:05",
              endHHMM: "11:10",
              _id: "1595cef4-13de-492a-af8e-609e01f70cad",
              _version: "bcdfe9d2-2781-4e16-a117-4616960f7413",
              _created: "Feb 28, 2022, 12:11:38 PM",
              _updated: "Sep 20, 2022, 4:57:56 AM",
              _createdBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
              _updatedBy: {
                _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                _links: {
                  self: {
                    href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                  },
                },
              },
            },
          ],
          scheduleDate: "10/04/2022",
          status: "UPDATED",
          _id: "4e8156e3-94b9-4b9e-8516-730c34fd9dd2",
          _version: "d070230c-a6ed-49f8-9100-6d7110c643e5",
          _created: "Feb 28, 2022, 12:11:38 PM",
          _updated: "Sep 20, 2022, 4:57:56 AM",
          _createdBy: {
            _id: "2818ef11-208b-4f43-b471-06ad495381f1",
            _links: {
              self: {
                href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
              },
            },
          },
          _updatedBy: {
            _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
            _links: {
              self: {
                href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
              },
            },
          },
        },
        {
          name: "OPH Dr Bloom",
          templateType: { code: "USER", description: "User template type" },
          provider: {
            firstName: "Bloom",
            lastName: "Steven",
            designation: "MBBS, MD",
            inHouse: false,
            _id: "8b5cd1de-a931-475e-8997-2c35209997d7",
            _version: "f7394cdb-b7d8-4f1c-8108-a2cd8e3a2a5f",
            _updated: "Sep 28, 2022, 1:06:32 PM",
          },
          slots: [
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "09:15",
              endHHMM: "09:20",
              _id: "5cbb625c-f32b-40ad-884b-1f1ad8bf3c67",
              _version: "3133d32d-cf7d-48f7-a0fc-a781be1a2129",
              _created: "Feb 15, 2022, 6:55:06 AM",
              _updated: "Feb 15, 2022, 6:56:52 AM",
              _createdBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
              _updatedBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "09:35",
              endHHMM: "09:40",
              _id: "c3b508a1-88b8-4ccd-a342-fe17d49aebbe",
              _version: "5cca33d0-bfc4-4f72-a125-b8a4316da6bd",
              _created: "Feb 15, 2022, 6:55:06 AM",
              _updated: "Feb 15, 2022, 6:56:52 AM",
              _createdBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
              _updatedBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
            },
          ],
          scheduleDate: "10/04/2022",
          status: "UPDATED",
          _id: "9c089446-7193-4585-813b-5dfbd59f9ef0",
          _version: "d3a32b93-f842-4a77-8123-75126d927919",
          _created: "Feb 15, 2022, 6:55:06 AM",
          _updated: "Feb 15, 2022, 6:56:52 AM",
          _createdBy: {
            _id: "2818ef11-208b-4f43-b471-06ad495381f1",
            _links: {
              self: {
                href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
              },
            },
          },
          _updatedBy: {
            _id: "2818ef11-208b-4f43-b471-06ad495381f1",
            _links: {
              self: {
                href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
              },
            },
          },
        },
        {
          name: "STANDARD",
          templateType: { code: "USER", description: "User template type" },
          provider: {
            firstName: "Bloom",
            lastName: "Steven",
            designation: "MBBS, MD",
            inHouse: false,
            _id: "8b5cd1de-a931-475e-8997-2c35209997d7",
            _version: "f7394cdb-b7d8-4f1c-8108-a2cd8e3a2a5f",
            _updated: "Sep 28, 2022, 1:06:32 PM",
          },
          slots: [
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "14:00",
              endHHMM: "14:05",
              _id: "4ed8ba08-2fbf-44b4-89d5-ab8e26e66ff0",
              _version: "a8c9c947-3cfe-4e45-9cbe-c5e8ccb96dfd",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "14:05",
              endHHMM: "14:10",
              _id: "560d1c38-0011-4a61-bf06-07db5c1ddae3",
              _version: "3a99fc76-77b4-488e-9669-03b6e698fc06",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "14:10",
              endHHMM: "14:15",
              _id: "ebb3ba27-aceb-41c6-ae1c-dbe009b5ddb8",
              _version: "e8ef9f44-5bc3-4dce-98ab-924420c969c1",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "14:15",
              endHHMM: "14:20",
              _id: "81d33d15-8713-4cfe-b959-bd0a371edc26",
              _version: "d322d328-8651-4f7c-b8cd-682810e1f41e",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "14:20",
              endHHMM: "14:25",
              _id: "077ab5df-d6b2-4b2f-a3dd-a0654729698d",
              _version: "579540d6-0e71-4054-8409-9e0b3414134a",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "14:25",
              endHHMM: "14:30",
              _id: "db18faa1-8dc7-4497-bc57-8e704e8c274f",
              _version: "0e75017e-9295-4cae-bb4f-eefcd6453f3b",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "14:30",
              endHHMM: "14:35",
              _id: "8dd7e2a0-9e8d-4a3a-99e6-c5fddf2c96a3",
              _version: "01cea112-8b46-41df-8606-1a73af1cbe60",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "14:35",
              endHHMM: "14:40",
              _id: "11c6e0e4-66fa-4652-9ff8-8b4e5335892c",
              _version: "30a5e0c4-4971-444f-b118-4e796443da0d",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "14:40",
              endHHMM: "14:45",
              _id: "d9b64aa5-c77b-4d22-849a-772d5e724924",
              _version: "a0e263fb-b413-4356-9d61-c7dd38b4febe",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "14:45",
              endHHMM: "14:50",
              _id: "ee342819-fd59-4eb1-bc37-35ec8cfba82f",
              _version: "87c87170-0916-4205-a4bc-302fb3687497",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "14:50",
              endHHMM: "14:55",
              _id: "54d1a041-9c5d-42fc-9ba9-6d603ccba5cf",
              _version: "dfb44243-de06-4653-85bc-9589db16af37",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "14:55",
              endHHMM: "15:00",
              _id: "29b2cb8c-a9ab-4cd6-b55e-d4e74b0ebee2",
              _version: "8a1f45fd-4378-4b4a-9666-57bbda6a9cbe",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "18:05",
              endHHMM: "18:10",
              _id: "722ec681-4483-40d3-83a6-988cd836dda1",
              _version: "889a5524-fbd1-40a6-9328-fe25183bd875",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "18:10",
              endHHMM: "18:15",
              _id: "b62d22ef-21f1-4f7d-b70a-46169dd1c1e8",
              _version: "74841323-c9c1-4324-8bb0-ff86bdf3bb63",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "18:15",
              endHHMM: "18:20",
              _id: "f4413829-2270-4192-8493-590d078873a9",
              _version: "43709d43-c7a4-461b-98e0-ebf5d66ae6c6",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "18:20",
              endHHMM: "18:25",
              _id: "3be78187-5cde-4396-8ad0-c4c9a688db75",
              _version: "4e93232d-7428-43d6-a3d7-ff04c47f845f",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "18:25",
              endHHMM: "18:30",
              _id: "b83d4ee2-a060-4e19-9b7c-c2b4e9d02094",
              _version: "5c1c8b41-c17b-4bf5-8418-b4dc6d38eb27",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "18:30",
              endHHMM: "18:35",
              _id: "b024f358-06a5-4335-94e8-431fec76d65e",
              _version: "1b34ea20-f015-4ff3-b3d2-19c07cbd2154",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "18:35",
              endHHMM: "18:40",
              _id: "b8072d08-91c2-438e-bc37-175b09f2ed0a",
              _version: "e7eb8540-9bb2-438d-b0bd-f3a17e76a35e",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "18:40",
              endHHMM: "18:45",
              _id: "9508c6eb-00e5-4137-aeee-3b08ea993689",
              _version: "ca427aec-b6fd-4e39-a837-9a7471d3d6d1",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "18:45",
              endHHMM: "18:50",
              _id: "e35274eb-f188-4b34-aa10-2e00ad6f9b69",
              _version: "48809043-9227-4e58-9c20-6997c8cb9e6c",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "18:50",
              endHHMM: "18:55",
              _id: "dd67c690-50ee-4485-94e0-1151a2c68676",
              _version: "ce593a52-3fa2-4914-bf25-f5970befa017",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "18:55",
              endHHMM: "19:00",
              _id: "d46da0d3-38f7-4886-8d33-25f4f8a9f169",
              _version: "cf5f698b-263e-4ed0-b075-fb8c9101d9c6",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "19:00",
              endHHMM: "19:05",
              _id: "5afdf21b-f11e-4a75-9926-3e8ef2caa92d",
              _version: "53165819-0166-44f2-8c07-de01e39f4411",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "22:05",
              endHHMM: "22:10",
              _id: "d4c775e3-f204-48d4-bfa8-bf4c8b4cf7e1",
              _version: "a25080b3-4fca-4ea3-9748-e9e29d09828a",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "22:10",
              endHHMM: "22:15",
              _id: "c9a25951-b55a-46de-b44b-909bed698e82",
              _version: "695322c9-db44-481a-abc3-30fa51fe806b",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "22:15",
              endHHMM: "22:20",
              _id: "98fc0fda-2c96-4f02-a992-82d766bf3b9e",
              _version: "ce2faaa7-a3e4-4175-8fea-128b84b62442",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "22:20",
              endHHMM: "22:25",
              _id: "7770315e-555a-4544-a2d2-fe7596f9b9f5",
              _version: "eaa01ead-2542-49d9-a0da-27e3999aeb30",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "22:25",
              endHHMM: "22:30",
              _id: "a37add81-2640-4f7a-a031-d8c3326d89fc",
              _version: "9bf30d7a-08a0-4960-a76e-05f40fc2bc86",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "22:30",
              endHHMM: "22:35",
              _id: "802bf554-78df-47d1-ad0f-67129643117f",
              _version: "b959111e-2d9b-4417-883c-879df721958e",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "22:35",
              endHHMM: "22:40",
              _id: "5ff2ab27-18be-431b-9aae-353d0a622f92",
              _version: "ef4742f0-4ac5-49c8-939d-906324899533",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "22:40",
              endHHMM: "22:45",
              _id: "61ca2b4f-8c6f-40d6-9722-380ac8bee2d8",
              _version: "833856a5-bfba-4f16-a38d-5bf87c9caad3",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "22:45",
              endHHMM: "22:50",
              _id: "081c9df3-136b-4390-aa03-546efd1a2a71",
              _version: "4860cd16-eab9-45c5-9f3f-a4bd387e8568",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "22:50",
              endHHMM: "22:55",
              _id: "535b819f-71a8-44d1-b9b5-cca96666814e",
              _version: "3c411e70-912a-491a-8f9b-4120a8100688",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "22:55",
              endHHMM: "23:00",
              _id: "d79f4740-4ebe-4333-9e32-dae799349a3e",
              _version: "8b2c121c-c13a-4d29-9301-2b0b5ebed6a4",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
          ],
          scheduleDate: "10/04/2022",
          status: "UPDATED",
          _id: "5e6a9c25-e247-4d39-a0d1-e9de46b3a725",
          _version: "526f0fcd-35c1-43f3-8f5c-c4e5d9ea7433",
          _created: "Sep 28, 2022, 12:52:40 PM",
          _updated: "Sep 28, 2022, 1:03:46 PM",
          _createdBy: {
            _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
            _links: {
              self: {
                href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
              },
            },
          },
          _updatedBy: {
            _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
            _links: {
              self: {
                href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
              },
            },
          },
        },
        {
          name: "OPD",
          templateType: { code: "USER", description: "User template type" },
          provider: {
            firstName: "indraku",
            lastName: "kumar",
            designation: "Mr",
            inHouse: false,
            _id: "2818ef11-208b-4f43-b471-06ad495381f1",
            _version: "98a1c478-6e50-43b2-a208-c9ee41007811",
            _updated: "Oct 5, 2022, 6:24:10 AM",
          },
          slots: [
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "09:15",
              endHHMM: "09:20",
              _id: "cd313aa8-7c2f-4413-8e16-31c7c522efb9",
              _version: "85dd0c90-a5e6-4b2f-9e29-1b52ba0305bd",
              _created: "Feb 7, 2022, 12:30:53 PM",
              _updated: "Mar 21, 2022, 12:51:21 PM",
              _createdBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
              _updatedBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
            },
          ],
          scheduleDate: "10/04/2022",
          status: "UPDATED",
          _id: "42248991-3385-4164-9d75-eec7945cb6a9",
          _version: "f48ceb6a-3048-4c30-b931-ac90ec2956e1",
          _created: "Feb 7, 2022, 12:30:53 PM",
          _updated: "Mar 21, 2022, 12:51:21 PM",
          _createdBy: {
            _id: "2818ef11-208b-4f43-b471-06ad495381f1",
            _links: {
              self: {
                href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
              },
            },
          },
          _updatedBy: {
            _id: "2818ef11-208b-4f43-b471-06ad495381f1",
            _links: {
              self: {
                href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
              },
            },
          },
        },
        {
          name: "OPD",
          templateType: { code: "USER", description: "User template type" },
          provider: {
            firstName: "indraku",
            lastName: "kumar",
            designation: "Mr",
            inHouse: false,
            _id: "2818ef11-208b-4f43-b471-06ad495381f1",
            _version: "98a1c478-6e50-43b2-a208-c9ee41007811",
            _updated: "Oct 5, 2022, 6:24:10 AM",
          },
          slots: [
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "09:00",
              endHHMM: "09:05",
              _id: "c0539d82-293c-44ff-904a-47810afab1a5",
              _version: "b164e0c4-ad03-4ecd-b392-ddddbfa861e0",
              _created: "Feb 7, 2022, 12:30:53 PM",
              _updated: "Mar 21, 2022, 12:51:21 PM",
              _createdBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
              _updatedBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "09:15",
              endHHMM: "09:20",
              _id: "cd313aa8-7c2f-4413-8e16-31c7c522efb9",
              _version: "85dd0c90-a5e6-4b2f-9e29-1b52ba0305bd",
              _created: "Feb 7, 2022, 12:30:53 PM",
              _updated: "Mar 21, 2022, 12:51:21 PM",
              _createdBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
              _updatedBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
            },
          ],
          scheduleDate: "10/05/2022",
          status: "UPDATED",
          _id: "42248991-3385-4164-9d75-eec7945cb6a9",
          _version: "f48ceb6a-3048-4c30-b931-ac90ec2956e1",
          _created: "Feb 7, 2022, 12:30:53 PM",
          _updated: "Mar 21, 2022, 12:51:21 PM",
          _createdBy: {
            _id: "2818ef11-208b-4f43-b471-06ad495381f1",
            _links: {
              self: {
                href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
              },
            },
          },
          _updatedBy: {
            _id: "2818ef11-208b-4f43-b471-06ad495381f1",
            _links: {
              self: {
                href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
              },
            },
          },
        },
        {
          name: "Standard",
          templateType: { code: "USER", description: "User template type" },
          provider: {
            firstName: "Jaco",
            lastName: "David",
            designation: "MBBS, MD",
            inHouse: false,
            _id: "b579b0d1-0c93-4db4-8ca8-294a60e718e4",
            _version: "cbff920b-0dbb-4450-b00d-cd94f5a842ca",
            _updated: "Feb 15, 2022, 7:06:54 AM",
          },
          slots: [
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "10:15",
              endHHMM: "10:20",
              _id: "2761acee-e634-4db1-a54f-172443f47532",
              _version: "bae0fa33-2df5-41a1-94c0-e5b037139d63",
              _created: "Feb 28, 2022, 12:11:38 PM",
              _updated: "Sep 20, 2022, 4:57:56 AM",
              _createdBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
              _updatedBy: {
                _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                _links: {
                  self: {
                    href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "10:30",
              endHHMM: "10:35",
              _id: "7eb8c88b-02a4-4f55-8d9e-6cc1d25377e0",
              _version: "3b839d5f-e929-4177-a722-16dac797782e",
              _created: "Feb 28, 2022, 12:11:38 PM",
              _updated: "Sep 20, 2022, 4:57:56 AM",
              _createdBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
              _updatedBy: {
                _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                _links: {
                  self: {
                    href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "10:45",
              endHHMM: "10:50",
              _id: "e7db2ce2-74a3-40e0-bf2f-8cf147ac7fa9",
              _version: "25a9d913-364f-4992-b35f-dde3c53d49d5",
              _created: "Feb 28, 2022, 12:11:38 PM",
              _updated: "Sep 20, 2022, 4:57:56 AM",
              _createdBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
              _updatedBy: {
                _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                _links: {
                  self: {
                    href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "11:05",
              endHHMM: "11:10",
              _id: "1595cef4-13de-492a-af8e-609e01f70cad",
              _version: "bcdfe9d2-2781-4e16-a117-4616960f7413",
              _created: "Feb 28, 2022, 12:11:38 PM",
              _updated: "Sep 20, 2022, 4:57:56 AM",
              _createdBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
              _updatedBy: {
                _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                _links: {
                  self: {
                    href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                  },
                },
              },
            },
          ],
          scheduleDate: "10/05/2022",
          status: "UPDATED",
          _id: "4e8156e3-94b9-4b9e-8516-730c34fd9dd2",
          _version: "d070230c-a6ed-49f8-9100-6d7110c643e5",
          _created: "Feb 28, 2022, 12:11:38 PM",
          _updated: "Sep 20, 2022, 4:57:56 AM",
          _createdBy: {
            _id: "2818ef11-208b-4f43-b471-06ad495381f1",
            _links: {
              self: {
                href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
              },
            },
          },
          _updatedBy: {
            _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
            _links: {
              self: {
                href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
              },
            },
          },
        },
        {
          name: "OPH Dr Bloom",
          templateType: { code: "USER", description: "User template type" },
          provider: {
            firstName: "Bloom",
            lastName: "Steven",
            designation: "MBBS, MD",
            inHouse: false,
            _id: "8b5cd1de-a931-475e-8997-2c35209997d7",
            _version: "f7394cdb-b7d8-4f1c-8108-a2cd8e3a2a5f",
            _updated: "Sep 28, 2022, 1:06:32 PM",
          },
          slots: [
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "09:15",
              endHHMM: "09:20",
              _id: "5cbb625c-f32b-40ad-884b-1f1ad8bf3c67",
              _version: "3133d32d-cf7d-48f7-a0fc-a781be1a2129",
              _created: "Feb 15, 2022, 6:55:06 AM",
              _updated: "Feb 15, 2022, 6:56:52 AM",
              _createdBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
              _updatedBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "09:35",
              endHHMM: "09:40",
              _id: "c3b508a1-88b8-4ccd-a342-fe17d49aebbe",
              _version: "5cca33d0-bfc4-4f72-a125-b8a4316da6bd",
              _created: "Feb 15, 2022, 6:55:06 AM",
              _updated: "Feb 15, 2022, 6:56:52 AM",
              _createdBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
              _updatedBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "09:55",
              endHHMM: "10:00",
              _id: "fd37c7ca-1756-491d-b29a-e86738220cc7",
              _version: "d98a3adf-2a73-48a5-b7ee-3078fe53e1b2",
              _created: "Feb 15, 2022, 6:55:06 AM",
              _updated: "Feb 15, 2022, 6:56:52 AM",
              _createdBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
              _updatedBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
            },
          ],
          scheduleDate: "10/05/2022",
          status: "UPDATED",
          _id: "9c089446-7193-4585-813b-5dfbd59f9ef0",
          _version: "d3a32b93-f842-4a77-8123-75126d927919",
          _created: "Feb 15, 2022, 6:55:06 AM",
          _updated: "Feb 15, 2022, 6:56:52 AM",
          _createdBy: {
            _id: "2818ef11-208b-4f43-b471-06ad495381f1",
            _links: {
              self: {
                href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
              },
            },
          },
          _updatedBy: {
            _id: "2818ef11-208b-4f43-b471-06ad495381f1",
            _links: {
              self: {
                href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
              },
            },
          },
        },
        {
          name: "STANDARD",
          templateType: { code: "USER", description: "User template type" },
          provider: {
            firstName: "Bloom",
            lastName: "Steven",
            designation: "MBBS, MD",
            inHouse: false,
            _id: "8b5cd1de-a931-475e-8997-2c35209997d7",
            _version: "f7394cdb-b7d8-4f1c-8108-a2cd8e3a2a5f",
            _updated: "Sep 28, 2022, 1:06:32 PM",
          },
          slots: [
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "14:00",
              endHHMM: "14:05",
              _id: "4ed8ba08-2fbf-44b4-89d5-ab8e26e66ff0",
              _version: "a8c9c947-3cfe-4e45-9cbe-c5e8ccb96dfd",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "14:05",
              endHHMM: "14:10",
              _id: "560d1c38-0011-4a61-bf06-07db5c1ddae3",
              _version: "3a99fc76-77b4-488e-9669-03b6e698fc06",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "14:10",
              endHHMM: "14:15",
              _id: "ebb3ba27-aceb-41c6-ae1c-dbe009b5ddb8",
              _version: "e8ef9f44-5bc3-4dce-98ab-924420c969c1",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "14:15",
              endHHMM: "14:20",
              _id: "81d33d15-8713-4cfe-b959-bd0a371edc26",
              _version: "d322d328-8651-4f7c-b8cd-682810e1f41e",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "14:20",
              endHHMM: "14:25",
              _id: "077ab5df-d6b2-4b2f-a3dd-a0654729698d",
              _version: "579540d6-0e71-4054-8409-9e0b3414134a",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "14:25",
              endHHMM: "14:30",
              _id: "db18faa1-8dc7-4497-bc57-8e704e8c274f",
              _version: "0e75017e-9295-4cae-bb4f-eefcd6453f3b",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "14:30",
              endHHMM: "14:35",
              _id: "8dd7e2a0-9e8d-4a3a-99e6-c5fddf2c96a3",
              _version: "01cea112-8b46-41df-8606-1a73af1cbe60",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "14:35",
              endHHMM: "14:40",
              _id: "11c6e0e4-66fa-4652-9ff8-8b4e5335892c",
              _version: "30a5e0c4-4971-444f-b118-4e796443da0d",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "14:40",
              endHHMM: "14:45",
              _id: "d9b64aa5-c77b-4d22-849a-772d5e724924",
              _version: "a0e263fb-b413-4356-9d61-c7dd38b4febe",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "14:45",
              endHHMM: "14:50",
              _id: "ee342819-fd59-4eb1-bc37-35ec8cfba82f",
              _version: "87c87170-0916-4205-a4bc-302fb3687497",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "14:50",
              endHHMM: "14:55",
              _id: "54d1a041-9c5d-42fc-9ba9-6d603ccba5cf",
              _version: "dfb44243-de06-4653-85bc-9589db16af37",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "14:55",
              endHHMM: "15:00",
              _id: "29b2cb8c-a9ab-4cd6-b55e-d4e74b0ebee2",
              _version: "8a1f45fd-4378-4b4a-9666-57bbda6a9cbe",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "18:05",
              endHHMM: "18:10",
              _id: "722ec681-4483-40d3-83a6-988cd836dda1",
              _version: "889a5524-fbd1-40a6-9328-fe25183bd875",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "18:10",
              endHHMM: "18:15",
              _id: "b62d22ef-21f1-4f7d-b70a-46169dd1c1e8",
              _version: "74841323-c9c1-4324-8bb0-ff86bdf3bb63",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "18:15",
              endHHMM: "18:20",
              _id: "f4413829-2270-4192-8493-590d078873a9",
              _version: "43709d43-c7a4-461b-98e0-ebf5d66ae6c6",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "18:20",
              endHHMM: "18:25",
              _id: "3be78187-5cde-4396-8ad0-c4c9a688db75",
              _version: "4e93232d-7428-43d6-a3d7-ff04c47f845f",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "18:25",
              endHHMM: "18:30",
              _id: "b83d4ee2-a060-4e19-9b7c-c2b4e9d02094",
              _version: "5c1c8b41-c17b-4bf5-8418-b4dc6d38eb27",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "18:30",
              endHHMM: "18:35",
              _id: "b024f358-06a5-4335-94e8-431fec76d65e",
              _version: "1b34ea20-f015-4ff3-b3d2-19c07cbd2154",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "18:35",
              endHHMM: "18:40",
              _id: "b8072d08-91c2-438e-bc37-175b09f2ed0a",
              _version: "e7eb8540-9bb2-438d-b0bd-f3a17e76a35e",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "18:40",
              endHHMM: "18:45",
              _id: "9508c6eb-00e5-4137-aeee-3b08ea993689",
              _version: "ca427aec-b6fd-4e39-a837-9a7471d3d6d1",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "18:45",
              endHHMM: "18:50",
              _id: "e35274eb-f188-4b34-aa10-2e00ad6f9b69",
              _version: "48809043-9227-4e58-9c20-6997c8cb9e6c",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "18:50",
              endHHMM: "18:55",
              _id: "dd67c690-50ee-4485-94e0-1151a2c68676",
              _version: "ce593a52-3fa2-4914-bf25-f5970befa017",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "18:55",
              endHHMM: "19:00",
              _id: "d46da0d3-38f7-4886-8d33-25f4f8a9f169",
              _version: "cf5f698b-263e-4ed0-b075-fb8c9101d9c6",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "19:00",
              endHHMM: "19:05",
              _id: "5afdf21b-f11e-4a75-9926-3e8ef2caa92d",
              _version: "53165819-0166-44f2-8c07-de01e39f4411",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "22:05",
              endHHMM: "22:10",
              _id: "d4c775e3-f204-48d4-bfa8-bf4c8b4cf7e1",
              _version: "a25080b3-4fca-4ea3-9748-e9e29d09828a",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "22:10",
              endHHMM: "22:15",
              _id: "c9a25951-b55a-46de-b44b-909bed698e82",
              _version: "695322c9-db44-481a-abc3-30fa51fe806b",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "22:15",
              endHHMM: "22:20",
              _id: "98fc0fda-2c96-4f02-a992-82d766bf3b9e",
              _version: "ce2faaa7-a3e4-4175-8fea-128b84b62442",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "22:20",
              endHHMM: "22:25",
              _id: "7770315e-555a-4544-a2d2-fe7596f9b9f5",
              _version: "eaa01ead-2542-49d9-a0da-27e3999aeb30",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "22:25",
              endHHMM: "22:30",
              _id: "a37add81-2640-4f7a-a031-d8c3326d89fc",
              _version: "9bf30d7a-08a0-4960-a76e-05f40fc2bc86",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "22:30",
              endHHMM: "22:35",
              _id: "802bf554-78df-47d1-ad0f-67129643117f",
              _version: "b959111e-2d9b-4417-883c-879df721958e",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "22:35",
              endHHMM: "22:40",
              _id: "5ff2ab27-18be-431b-9aae-353d0a622f92",
              _version: "ef4742f0-4ac5-49c8-939d-906324899533",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "22:40",
              endHHMM: "22:45",
              _id: "61ca2b4f-8c6f-40d6-9722-380ac8bee2d8",
              _version: "833856a5-bfba-4f16-a38d-5bf87c9caad3",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "22:45",
              endHHMM: "22:50",
              _id: "081c9df3-136b-4390-aa03-546efd1a2a71",
              _version: "4860cd16-eab9-45c5-9f3f-a4bd387e8568",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "22:50",
              endHHMM: "22:55",
              _id: "535b819f-71a8-44d1-b9b5-cca96666814e",
              _version: "3c411e70-912a-491a-8f9b-4120a8100688",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "22:55",
              endHHMM: "23:00",
              _id: "d79f4740-4ebe-4333-9e32-dae799349a3e",
              _version: "8b2c121c-c13a-4d29-9301-2b0b5ebed6a4",
              _created: "Sep 28, 2022, 12:52:40 PM",
              _updated: "Sep 28, 2022, 1:03:46 PM",
              _createdBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
          ],
          scheduleDate: "10/05/2022",
          status: "UPDATED",
          _id: "5e6a9c25-e247-4d39-a0d1-e9de46b3a725",
          _version: "526f0fcd-35c1-43f3-8f5c-c4e5d9ea7433",
          _created: "Sep 28, 2022, 12:52:40 PM",
          _updated: "Sep 28, 2022, 1:03:46 PM",
          _createdBy: {
            _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
            _links: {
              self: {
                href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
              },
            },
          },
          _updatedBy: {
            _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
            _links: {
              self: {
                href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
              },
            },
          },
        },
        {
          name: "Sick",
          templateType: { code: "USER", description: "User template type" },
          provider: {
            firstName: "Steve",
            lastName: "Adam",
            designation: "Dr",
            inHouse: false,
            _id: "19f1c186-37a8-46ef-a731-0a1f022be782",
            _version: "a1c4536d-6e5e-4779-81b0-080fe4e23a23",
            _updated: "Apr 8, 2022, 8:35:42 AM",
          },
          slots: [
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "10:15",
              endHHMM: "10:20",
              _id: "5cccda4c-c309-4a73-bed5-2b4dcd320490",
              _version: "0649e227-df6c-40be-a576-cd68874cd73d",
              _created: "Apr 8, 2022, 8:37:38 AM",
              _updated: "Sep 22, 2022, 10:24:08 AM",
              _createdBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
              _updatedBy: {
                _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                _links: {
                  self: {
                    href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "11:00",
              endHHMM: "11:05",
              _id: "8d0f66d8-67e6-4c93-8c41-3e92c4a88b0e",
              _version: "3f41f3e8-90d2-4a39-8579-cb1d11539d15",
              _created: "Apr 8, 2022, 8:37:38 AM",
              _updated: "Sep 22, 2022, 10:24:08 AM",
              _createdBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
              _updatedBy: {
                _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                _links: {
                  self: {
                    href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "11:05",
              endHHMM: "11:10",
              _id: "6f64f4e2-5273-4631-b2fa-b4d6745d6062",
              _version: "3e03ec17-50fd-4a43-9147-ca300d3025be",
              _created: "Apr 8, 2022, 8:37:38 AM",
              _updated: "Sep 22, 2022, 10:24:08 AM",
              _createdBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
              _updatedBy: {
                _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                _links: {
                  self: {
                    href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "11:10",
              endHHMM: "11:15",
              _id: "646deec2-3859-405b-9b9d-25df8545efe3",
              _version: "acbf2731-4ac6-4d9f-8606-3b2f791bbace",
              _created: "Apr 8, 2022, 8:37:38 AM",
              _updated: "Sep 22, 2022, 10:24:08 AM",
              _createdBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
              _updatedBy: {
                _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                _links: {
                  self: {
                    href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "11:15",
              endHHMM: "11:20",
              _id: "9186b279-ca0c-4b1e-88f5-33be923c060b",
              _version: "aa875054-51e1-4f81-97f2-7a077a618eae",
              _created: "Apr 8, 2022, 8:37:38 AM",
              _updated: "Sep 22, 2022, 10:24:08 AM",
              _createdBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
              _updatedBy: {
                _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                _links: {
                  self: {
                    href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "11:20",
              endHHMM: "11:25",
              _id: "83a08007-4537-424d-90e2-563947d0d91c",
              _version: "d8b7d0fe-cd95-410b-97c8-0bfc90bdf983",
              _created: "Apr 8, 2022, 8:37:38 AM",
              _updated: "Sep 22, 2022, 10:24:08 AM",
              _createdBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
              _updatedBy: {
                _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                _links: {
                  self: {
                    href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "11:25",
              endHHMM: "11:30",
              _id: "1375634c-23f5-47b9-a15a-990df8752f8b",
              _version: "9e2571a8-20f4-4426-8238-68802cf056ed",
              _created: "Apr 8, 2022, 8:37:38 AM",
              _updated: "Sep 22, 2022, 10:24:08 AM",
              _createdBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
              _updatedBy: {
                _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                _links: {
                  self: {
                    href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "11:30",
              endHHMM: "11:35",
              _id: "fec3523e-a6ab-4ca1-8444-6ab463524b4e",
              _version: "2041999e-83bb-47dd-9c6b-ca7a0dc1abfa",
              _created: "Apr 8, 2022, 8:37:38 AM",
              _updated: "Sep 22, 2022, 10:24:08 AM",
              _createdBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
              _updatedBy: {
                _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                _links: {
                  self: {
                    href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "11:35",
              endHHMM: "11:40",
              _id: "4a9fa94d-2ef9-444b-bcb3-e13e4298f46e",
              _version: "20549e02-dda6-4653-ac01-bc49b74fc27d",
              _created: "Apr 8, 2022, 8:37:38 AM",
              _updated: "Sep 22, 2022, 10:24:08 AM",
              _createdBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
              _updatedBy: {
                _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                _links: {
                  self: {
                    href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "15:20",
              endHHMM: "15:25",
              _id: "c2ecd16d-6dd0-434f-8c79-f2eedf3cd8ad",
              _version: "19eb2ffd-92a6-42df-b3bd-3692c4e8f047",
              _created: "Apr 8, 2022, 8:37:38 AM",
              _updated: "Sep 22, 2022, 10:24:08 AM",
              _createdBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
              _updatedBy: {
                _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                _links: {
                  self: {
                    href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "16:15",
              endHHMM: "16:20",
              _id: "5f4ef00d-a8d1-4587-8d96-33a845f83cfe",
              _version: "7861bfe1-ab4c-4152-b102-c5619cb881b3",
              _created: "Apr 8, 2022, 8:37:38 AM",
              _updated: "Sep 22, 2022, 10:24:08 AM",
              _createdBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
              _updatedBy: {
                _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                _links: {
                  self: {
                    href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "17:15",
              endHHMM: "17:20",
              _id: "c30757cc-a2b9-4f2d-a53d-fb3067f0eedb",
              _version: "7f02a502-4c2c-4cc4-8062-e397d8238a5c",
              _created: "Apr 8, 2022, 8:37:38 AM",
              _updated: "Sep 22, 2022, 10:24:08 AM",
              _createdBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
              _updatedBy: {
                _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                _links: {
                  self: {
                    href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                  },
                },
              },
            },
          ],
          scheduleDate: "10/05/2022",
          status: "UPDATED",
          _id: "ff788e3f-4ed2-4cf8-9d6f-ab50dcf70789",
          _version: "7c6e09ea-9159-4bfe-aa18-395f5c30ea4b",
          _created: "Apr 8, 2022, 8:37:38 AM",
          _updated: "Sep 22, 2022, 10:24:08 AM",
          _createdBy: {
            _id: "2818ef11-208b-4f43-b471-06ad495381f1",
            _links: {
              self: {
                href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
              },
            },
          },
          _updatedBy: {
            _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
            _links: {
              self: {
                href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
              },
            },
          },
        },
        {
          name: "Surgery",
          templateType: { code: "USER", description: "User template type" },
          provider: {
            firstName: "Steve",
            lastName: "Adam",
            designation: "Dr",
            inHouse: false,
            _id: "19f1c186-37a8-46ef-a731-0a1f022be782",
            _version: "a1c4536d-6e5e-4779-81b0-080fe4e23a23",
            _updated: "Apr 8, 2022, 8:35:42 AM",
          },
          slots: [
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "15:15",
              endHHMM: "15:20",
              _id: "dfb339d2-4cdc-4eeb-a083-4a9f83fed520",
              _version: "633cdf5f-5baa-4bf8-805a-9594a032db23",
              _created: "Apr 8, 2022, 8:38:02 AM",
              _updated: "Jun 3, 2022, 8:41:14 AM",
              _createdBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "16:15",
              endHHMM: "16:20",
              _id: "7e13adb2-ddd7-4113-a42a-55613330a0cf",
              _version: "4a11d155-129c-4caa-8846-c69028802d86",
              _created: "Apr 8, 2022, 8:38:02 AM",
              _updated: "Jun 3, 2022, 8:41:14 AM",
              _createdBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
            {
              appointmentType: {
                code: "Clinical_Diagnosis",
                name: "Clinical_Diagnosis",
                key: 4,
                order: 4,
                category: { code: "Vision", description: "Vision" },
                acronym: "CAD",
                color: "#6fc77b",
                slotLength: 5,
                notes: "",
              },
              startHHMM: "17:00",
              endHHMM: "17:05",
              _id: "b531e4dc-3931-4768-a880-4640ae20e98e",
              _version: "1f2fad28-fc17-4cf7-9c77-9b1eaadb21d8",
              _created: "Apr 8, 2022, 8:38:02 AM",
              _updated: "Jun 3, 2022, 8:41:14 AM",
              _createdBy: {
                _id: "2818ef11-208b-4f43-b471-06ad495381f1",
                _links: {
                  self: {
                    href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
                  },
                },
              },
              _updatedBy: {
                _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                _links: {
                  self: {
                    href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
            },
          ],
          scheduleDate: "10/05/2022",
          status: "UPDATED",
          _id: "af473975-2e0d-40cb-a88e-9e975d58dd51",
          _version: "18f55599-781d-4da2-a45e-1567b9e3773c",
          _created: "Apr 8, 2022, 8:38:02 AM",
          _updated: "Jun 3, 2022, 8:41:14 AM",
          _createdBy: {
            _id: "2818ef11-208b-4f43-b471-06ad495381f1",
            _links: {
              self: {
                href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
              },
            },
          },
          _updatedBy: {
            _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
            _links: {
              self: {
                href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
              },
            },
          },
        },
      ],
    },
  ],
};

export const testLab = [
  {
    id: 1,
    name: "Eye Surgery",
    orderBy: "Hopkins, D.M.",
    date: "09/09/2022 12:00PM",
    status: "Completed",
  },
  {
    id: 2,
    name: "Eye Surgery",
    orderBy: "Hopkins, D.M.",
    date: "09/09/2022 12:00PM",
    status: "Completed",
  },
  {
    id: 3,
    name: "Eye Surgery",
    orderBy: "Hopkins, D.M.",
    date: "09/09/2022 12:00PM",
    status: "Completed",
  },
  {
    id: 4,
    name: "Eye Surgery",
    orderBy: "Hopkins, D.M.",
    date: "08/08/2022 12:00PM",
    status: "Completed",
  },
];
export const carePlan = [
  { id: 1, name: "Eye Surgery", date: "09/09/2022 12:00PM" },
  { id: 2, name: "Eye Surgery", date: "09/09/2022 12:00PM" },
  { id: 3, name: "Eye Surgery", date: "09/09/2022 12:00PM" },
  { id: 4, name: "Eye Surgery", date: "08/08/2022 12:00PM" },
];

export const mockDocument = {
  count: 1,
  entities: [
    {
      name: "MEDICAL_CERTIFICATE_OF_FITNESS1 - Copy - Copy",
      documentType: "application/pdf",
      category: "Intake-Forms",
      uploadedBy: {
        uid: "2818ef11-208b-4f43-b471-06ad495381f1",
        firstName: "indraku",
        lastName: "kumar",
        designation: "Mr",
        _createdBy: {
          _id: "981ad89e-7fee-42d8-92ec-c34324d862a0",
          _links: {
            self: {
              href: "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0",
            },
          },
        },
        _updatedBy: {
          _id: "981ad89e-7fee-42d8-92ec-c34324d862a0",
          _links: {
            self: {
              href: "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0",
            },
          },
        },
      },
      patientId: "95090352-de7b-485b-8a7b-9c1255a15070",
      status: "CREATED",
      digital_assets: {
        _id: "62591396-3890-4cc3-b38a-96788430769d",
      },
      _id: "38762e58-0cbf-47b6-9580-2f7c336f5bdc",
      _version: "9ba1234d-9857-4a9c-9147-e1e257377a39",
      _created: "Oct 7, 2022, 10:00:20 AM",
      _updated: "Oct 7, 2022, 10:00:20 AM",
      _createdBy: {
        _id: "2818ef11-208b-4f43-b471-06ad495381f1",
        _links: {
          self: {
            href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
          },
        },
      },
      _links: {
        self: {
          href: "/v1/patients/38762e58-0cbf-47b6-9580-2f7c336f5bdc",
        },
      },
    },
  ],
  _links: {
    self: {
      href: "/patient-management?pageNo=0&pageSize=10",
    },
  },
};

export const TEMP_DATA_CONTACTS = {
  count: 1,
  entities: [
    {
      expirationDate: "01/06/2025",
      startDate: "01/10/2022",
      clrx: {
        clrx: {
          od: {
            t: false,
            bc: "11.2",
            add: "111",
            bc2: "11.2",
            axis: "111",
            diam: "14",
            lens: {
              sku: 409374,
              name: "EDGE III DW",
            },
            sph2: "15.5",
            type: "SCL",
            color: "black",
            notes: "India ttterrsting",
            segHt: "11.1",
            skirt: "11.1",
            addOns: "11.1",
            sphere: "10.1",
            cylinder: "",
            material: "soft",
            opticZone: "10.5",
            thickness: "105.",
            intermCurve: "test",
            periphCurve: "test",
          },
          os: {
            t: false,
            bc: "8.3",
            add: "11.2",
            bc2: "22.3",
            axis: "000",
            diam: "14",
            lens: {
              sku: 409374,
              name: "EDGE III DW",
            },
            sph2: "",
            type: "SCL",
            color: "black",
            notes: "test",
            segHt: "11.3",
            skirt: "11.8",
            addOns: "33.7",
            sphere: "55.7",
            cylinder: "11.0",
            material: "soft",
            opticZone: "44.8",
            thickness: "11.6",
            intermCurve: "54.0",
            periphCurve: "20.6",
          },
          mono: true,
          notes: "test notes",
          eyeDom: "OD",
          finalRx: "false",
          trialRx: "false",
        },
      },
      provider: {
        firstName: "indraku",
        lastName: "kumar",
        designation: "Mr",
        providerDetails: {
          isProvider: true,
        },
        _id: "2818ef11-208b-4f43-b471-06ad495381f1",
        _links: {
          self: {
            href: "/v1/template-users/2818ef11-208b-4f43-b471-06ad495381f1",
          },
        },
      },
      patient: {
        firstName: "naina",
        lastName: "naina ",
        mrn: "UNY323737",
        dob: "10/7/92, 12:00 AM",
        sex: "3",
        status: "UPDATED",
        _id: "d6ba6289-4190-4346-8dd7-34a1d81447e2",
        _version: "ab6a730f-adc2-4f79-aa8d-648ad901b8cf",
        _created: "Oct 7, 2022, 2:40:07 PM",
        _updated: "Oct 7, 2022, 3:57:12 PM",
        _createdBy: {
          _id: "981ad89e-7fee-42d8-92ec-c34324d862a0",
          _links: {
            self: {
              href: "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0",
            },
          },
        },
        _updatedBy: {
          _id: "981ad89e-7fee-42d8-92ec-c34324d862a0",
          _links: {
            self: {
              href: "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0",
            },
          },
        },
      },
      _links: {
        self: {
          href: "/v1/exam-sheet-entry/bf3410cf-3e8f-4dd7-95b6-184dc93bc1f7",
        },
      },
      _id: "bf3410cf-3e8f-4dd7-95b6-184dc93bc1f7",
    },
  ],
  _links: {
    self: {
      href: "/emr?pageNo=0&pageSize=100",
    },
  },
};

export const TEMP_DATA_GLASSES = {
  "count": 2,
  "entities": [
      {
          "glrx": {
              "od": {
                  "add": "+4.75",
                  "axis": "033",
                  "sphere": "+1.25",
                  "cylinder": "-3.50"
              },
              "os": {
                  "add": "+4.75",
                  "axis": "033",
                  "sphere": "+1.25",
                  "cylinder": "-5.75"
              },
              "type": "Distance"
          },
          "provider": {
              "firstName": "indraku",
              "lastName": "kumar",
              "designation": "Mr",
              "providerDetails": {
                  "isProvider": true
              },
              "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
              "_links": {
                  "self": {
                      "href": "/v1/template-users/2818ef11-208b-4f43-b471-06ad495381f1"
                  }
              }
          },
          "patient": {
              "firstName": "naina",
              "lastName": "naina ",
              "mrn": "UNY323737",
              "dob": "10/7/92, 12:00 AM",
              "sex": "3",
              "status": "UPDATED",
              "_id": "d6ba6289-4190-4346-8dd7-34a1d81447e2",
              "_version": "ab6a730f-adc2-4f79-aa8d-648ad901b8cf",
              "_created": "Oct 7, 2022, 2:40:07 PM",
              "_updated": "Oct 7, 2022, 3:57:12 PM",
              "_createdBy": {
                  "_id": "981ad89e-7fee-42d8-92ec-c34324d862a0",
                  "_links": {
                      "self": {
                          "href": "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0"
                      }
                  }
              },
              "_updatedBy": {
                  "_id": "981ad89e-7fee-42d8-92ec-c34324d862a0",
                  "_links": {
                      "self": {
                          "href": "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0"
                      }
                  }
              }
          },
          "_links": {
              "self": {
                  "href": "/v1/exam-sheet-entry/5a40c3fc-df14-475e-bd64-9bc45891bd74"
              }
          },
          "_id": "5a40c3fc-df14-475e-bd64-9bc45891bd74"
      },
      {
          "glrx": {
              "od": {
                  "add": "111",
                  "axis": "111",
                  "sphere": "10.1",
                  "cylinder": "",
                  "bal": true
              },
              "os": {
                  "add": "11.2",
                  "axis": "000",
                  "sphere": "55.7",
                  "cylinder": "11.0",
                  "bal": true
              },
              "type": "",
              "notes": "test notes",
              "startDate": "01/10/2022",
              "expirationDate": "06/25/2023"
          },
          "provider": {
              "firstName": "indraku",
              "lastName": "kumar",
              "designation": "Mr",
              "providerDetails": {
                  "isProvider": true
              },
              "_id": "2818ef11-208b-4f43-b471-06ad495381f1",
              "_links": {
                  "self": {
                      "href": "/v1/template-users/2818ef11-208b-4f43-b471-06ad495381f1"
                  }
              }
          },
          "patient": {
              "firstName": "naina",
              "lastName": "naina ",
              "mrn": "UNY323737",
              "dob": "10/7/92, 12:00 AM",
              "sex": "3",
              "status": "UPDATED",
              "_id": "d6ba6289-4190-4346-8dd7-34a1d81447e2",
              "_version": "ab6a730f-adc2-4f79-aa8d-648ad901b8cf",
              "_created": "Oct 7, 2022, 2:40:07 PM",
              "_updated": "Oct 7, 2022, 3:57:12 PM",
              "_createdBy": {
                  "_id": "981ad89e-7fee-42d8-92ec-c34324d862a0",
                  "_links": {
                      "self": {
                          "href": "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0"
                      }
                  }
              },
              "_updatedBy": {
                  "_id": "981ad89e-7fee-42d8-92ec-c34324d862a0",
                  "_links": {
                      "self": {
                          "href": "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0"
                      }
                  }
              }
          },
          "_links": {
              "self": {
                  "href": "/v1/exam-sheet-entry/89835c9b-d0df-4941-a169-508fd822b754"
              }
          },
          "_id": "89835c9b-d0df-4941-a169-508fd822b754"
      }
  ],
  "_links": {
      "self": {
          "href": "/emr?pageNo=0&pageSize=100"
      }
  }
}

export const TEMP_DATA_MEDICATION = [
  {
    Deleted: "n",
    Voided: "n",
    RcopiaID: "SB-26353646482",
    Patient: {
      RcopiaPracticeID: "222531942",
      FirstName: "FirstNikita",
      ExternalID: "",
      RcopiaID: "26151571631",
      LastName: "Dr",
    },
    NeedsReview: "n",
    Provider: {
      DEA: "AP3864421",
      Username: "pclarksoneyecare",
      NPI: "1741791705",
      FirstName: "Provider",
      ExternalID: "",
      RcopiaID: "2642957631",
      LastName: "ClarksonEyeCare",
    },
    Preparer: {
      RcopiaID: "2642957631",
      ExternalID: "",
      FirstName: "Provider",
      LastName: "ClarksonEyeCare",
    },
    Sig: {
      Drug: {
        NDCID: "00378070901",
        BrandName: "D-Penamine",
        GenericName: "penicillamine",
        Form: "tablet",
        Strength: "125 mg",
        RcopiaID: "12100000098779",
        FirstDataBankMedID: "585251",
        DrugDescription: "D-Penamine 125 mg tablet",
        Schedule: "nonscheduled",
        BrandType: "brand",
        Route: "oral",
        LegendStatus: "rx",
      },
      DoseUnit: "tablet",
      DoseTiming: "twice a day",
      Duration: "",
      Route: "by mouth",
      Quantity: "1",
      QuantityUnit: "tablet",
      Refills: "0",
      SubstitutionPermitted: "y",
      OtherNotes: "",
      PatientNotes: "as directed",
      Dose: "3",
      Action: "Take",
      Comments: "",
      MaximumDailyDoseUnit: "",
      DoseOther: "as directed",
      MaximumDailyDose: "",
    },
    CreatedDate: "12/05/2022 03:40:57 EDT",
    CompletedDate: "",
    SignedDate: "",
    StopDate: "10/05/2022",
    LastModifiedBy: "pclarksoneyecare",
    LastModifiedDate: "10/05/2022 03:41:00 EDT",
    Height: "",
    Weight: "",
    IntendedUse: "",
    Denied: "n",
    patientRcopiaID: "26151571631",
    _id: "323498f1-dff7-47b6-b3af-2dcc432f65ce",
    _version: "b3118e77-ad8c-4ac9-9840-1b38f6fb008e",
    _created: "Oct 5, 2022, 7:41:50 AM",
    _updated: "Oct 5, 2022, 7:41:50 AM",
    _createdBy: {
      _id: "2818ef11-208b-4f43-b471-06ad495381f1",
      _links: {
        self: {
          href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
        },
      },
    },
  },
  {
    Deleted: "n",
    Voided: "n",
    RcopiaID: "SB-26353646482",
    Patient: {
      RcopiaPracticeID: "222531942",
      FirstName: "FirstNikita",
      ExternalID: "",
      RcopiaID: "26151571631",
      LastName: "Dr",
    },
    NeedsReview: "n",
    Provider: {
      DEA: "AP3864421",
      Username: "pclarksoneyecare",
      NPI: "1741791705",
      FirstName: "Provider",
      ExternalID: "",
      RcopiaID: "2642957631",
      LastName: "ClarksonEyeCare",
    },
    Preparer: {
      RcopiaID: "2642957631",
      ExternalID: "",
      FirstName: "Philips",
      LastName: "ClarksonEyeCare",
    },
    Sig: {
      Drug: {
        NDCID: "00378070901",
        BrandName: "D-Penamine",
        GenericName: "penicillamine",
        Form: "tablet",
        Strength: "125 mg",
        RcopiaID: "12100000098779",
        FirstDataBankMedID: "585251",
        DrugDescription: "D-Penamine 125 mg tablet",
        Schedule: "nonscheduled",
        BrandType: "brand",
        Route: "oral",
        LegendStatus: "rx",
      },
      DoseUnit: "tablet",
      DoseTiming: "twice a day",
      Duration: "",
      Route: "by mouth",
      Quantity: "1",
      QuantityUnit: "tablet",
      Refills: "0",
      SubstitutionPermitted: "y",
      OtherNotes: "",
      PatientNotes: "as directed",
      Dose: "3",
      Action: "Take",
      Comments: "",
      MaximumDailyDoseUnit: "",
      DoseOther: "as directed",
      MaximumDailyDose: "",
    },
    CreatedDate: "12/05/2022 03:40:57 EDT",
    CompletedDate: "",
    SignedDate: "",
    StopDate: "10/05/2022",
    LastModifiedBy: "pclarksoneyecare",
    LastModifiedDate: "10/05/2022 03:41:00 EDT",
    Height: "",
    Weight: "",
    IntendedUse: "",
    Denied: "n",
    patientRcopiaID: "26151571631",
    _id: "323498f1-dff7-47b6-b3af-2dcc432f65ca",
    _version: "b3118e77-ad8c-4ac9-9840-1b38f6fb008e",
    _created: "Oct 5, 2022, 7:41:50 AM",
    _updated: "Oct 5, 2022, 7:41:50 AM",
    _createdBy: {
      _id: "2818ef11-208b-4f43-b471-06ad495381f1",
      _links: {
        self: {
          href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
        },
      },
    },
  },
  {
    Deleted: "n",
    Voided: "n",
    RcopiaID: "SB-26353646482",
    Patient: {
      RcopiaPracticeID: "222531942",
      FirstName: "FirstNikita",
      ExternalID: "",
      RcopiaID: "26151571631",
      LastName: "Dr",
    },
    NeedsReview: "n",
    Provider: {
      DEA: "AP3864421",
      Username: "pclarksoneyecare",
      NPI: "1741791705",
      FirstName: "Provider",
      ExternalID: "",
      RcopiaID: "2642957631",
      LastName: "ClarksonEyeCare",
    },
    Preparer: {
      RcopiaID: "2642957631",
      ExternalID: "",
      FirstName: "Delip",
      LastName: "ClarksonEyeCare",
    },
    Sig: {
      Drug: {
        NDCID: "00378070901",
        BrandName: "D-Penamine",
        GenericName: "penicillamine",
        Form: "tablet",
        Strength: "125 mg",
        RcopiaID: "12100000098779",
        FirstDataBankMedID: "585251",
        DrugDescription: "D-Penamine 125 mg tablet",
        Schedule: "nonscheduled",
        BrandType: "brand",
        Route: "oral",
        LegendStatus: "rx",
      },
      DoseUnit: "tablet",
      DoseTiming: "twice a day",
      Duration: "",
      Route: "by mouth",
      Quantity: "1",
      QuantityUnit: "tablet",
      Refills: "0",
      SubstitutionPermitted: "y",
      OtherNotes: "",
      PatientNotes: "as directed",
      Dose: "3",
      Action: "Take",
      Comments: "",
      MaximumDailyDoseUnit: "",
      DoseOther: "as directed",
      MaximumDailyDose: "",
    },
    CreatedDate: "12/05/2022 03:40:57 EDT",
    CompletedDate: "",
    SignedDate: "",
    StopDate: "10/05/2022",
    LastModifiedBy: "pclarksoneyecare",
    LastModifiedDate: "10/05/2022 03:41:00 EDT",
    Height: "",
    Weight: "",
    IntendedUse: "",
    Denied: "n",
    patientRcopiaID: "26151571631",
    _id: "323498f1-dff7-47b6-b3af-2dcc432f65cb",
    _version: "b3118e77-ad8c-4ac9-9840-1b38f6fb008e",
    _created: "Oct 5, 2022, 7:41:50 AM",
    _updated: "Oct 5, 2022, 7:41:50 AM",
    _createdBy: {
      _id: "2818ef11-208b-4f43-b471-06ad495381f1",
      _links: {
        self: {
          href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
        },
      },
    },
  },
  {
    Deleted: "n",
    Voided: "n",
    RcopiaID: "SB-26353646482",
    Patient: {
      RcopiaPracticeID: "222531942",
      FirstName: "FirstNikita",
      ExternalID: "",
      RcopiaID: "26151571631",
      LastName: "Dr",
    },
    NeedsReview: "n",
    Provider: {
      DEA: "AP3864421",
      Username: "pclarksoneyecare",
      NPI: "1741791705",
      FirstName: "Provider",
      ExternalID: "",
      RcopiaID: "2642957631",
      LastName: "ClarksonEyeCare",
    },
    Preparer: {
      RcopiaID: "2642957631",
      ExternalID: "",
      FirstName: "David",
      LastName: "ClarksonEyeCare",
    },
    Sig: {
      Drug: {
        NDCID: "00378070901",
        BrandName: "D-Penamine",
        GenericName: "penicillamine",
        Form: "tablet",
        Strength: "125 mg",
        RcopiaID: "12100000098779",
        FirstDataBankMedID: "585251",
        DrugDescription: "D-Penamine 125 mg tablet",
        Schedule: "nonscheduled",
        BrandType: "brand",
        Route: "oral",
        LegendStatus: "rx",
      },
      DoseUnit: "tablet",
      DoseTiming: "twice a day",
      Duration: "",
      Route: "by mouth",
      Quantity: "1",
      QuantityUnit: "tablet",
      Refills: "0",
      SubstitutionPermitted: "y",
      OtherNotes: "",
      PatientNotes: "as directed",
      Dose: "3",
      Action: "Take",
      Comments: "",
      MaximumDailyDoseUnit: "",
      DoseOther: "as directed",
      MaximumDailyDose: "",
    },
    CreatedDate: "12/05/2022 03:40:57 EDT",
    CompletedDate: "",
    SignedDate: "",
    StopDate: "10/05/2023",
    LastModifiedBy: "pclarksoneyecare",
    LastModifiedDate: "10/05/2022 03:41:00 EDT",
    Height: "",
    Weight: "",
    IntendedUse: "",
    Denied: "n",
    patientRcopiaID: "26151571631",
    _id: "323498f1-dff7-47b6-b3af-2dcc432f65cn",
    _version: "b3118e77-ad8c-4ac9-9840-1b38f6fb008i",
    _created: "Oct 5, 2022, 7:41:50 AM",
    _updated: "Oct 5, 2022, 7:41:50 AM",
    _createdBy: {
      _id: "2818ef11-208b-4f43-b471-06ad495381f1",
      _links: {
        self: {
          href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
        },
      },
    },
  },
  {
    Deleted: "n",
    Voided: "n",
    RcopiaID: "SB-26353646482",
    Patient: {
      RcopiaPracticeID: "222531942",
      FirstName: "FirstNikita",
      ExternalID: "",
      RcopiaID: "26151571631",
      LastName: "Dr",
    },
    NeedsReview: "n",
    Provider: {
      DEA: "AP3864421",
      Username: "pclarksoneyecare",
      NPI: "1741791705",
      FirstName: "Provider",
      ExternalID: "",
      RcopiaID: "2642957631",
      LastName: "ClarksonEyeCare",
    },
    Preparer: {
      RcopiaID: "2642957631",
      ExternalID: "",
      FirstName: "Ivan",
      LastName: "ClarksonEyeCare",
    },
    Sig: {
      Drug: {
        NDCID: "00378070901",
        BrandName: "D-Penamine",
        GenericName: "penicillamine",
        Form: "tablet",
        Strength: "125 mg",
        RcopiaID: "12100000098779",
        FirstDataBankMedID: "585251",
        DrugDescription: "D-Penamine 125 mg tablet",
        Schedule: "nonscheduled",
        BrandType: "brand",
        Route: "oral",
        LegendStatus: "rx",
      },
      DoseUnit: "tablet",
      DoseTiming: "twice a day",
      Duration: "",
      Route: "by mouth",
      Quantity: "1",
      QuantityUnit: "tablet",
      Refills: "0",
      SubstitutionPermitted: "y",
      OtherNotes: "",
      PatientNotes: "as directed",
      Dose: "3",
      Action: "Take",
      Comments: "",
      MaximumDailyDoseUnit: "",
      DoseOther: "as directed",
      MaximumDailyDose: "",
    },
    CreatedDate: "12/05/2022 03:40:57 EDT",
    CompletedDate: "",
    SignedDate: "",
    StopDate: "10/05/2022",
    LastModifiedBy: "pclarksoneyecare",
    LastModifiedDate: "10/05/2022 03:41:00 EDT",
    Height: "",
    Weight: "",
    IntendedUse: "",
    Denied: "n",
    patientRcopiaID: "26151571631",
    _id: "323498f1-dff7-47b6-b3af-2dcc432f65cp",
    _version: "b3118e77-ad8c-4ac9-9840-1b38f6fb008e",
    _created: "Oct 5, 2022, 7:41:50 AM",
    _updated: "Oct 5, 2022, 7:41:50 AM",
    _createdBy: {
      _id: "2818ef11-208b-4f43-b471-06ad495381f1",
      _links: {
        self: {
          href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
        },
      },
    },
  },
  {
    Deleted: "n",
    Voided: "n",
    RcopiaID: "SB-26353646482",
    Patient: {
      RcopiaPracticeID: "222531942",
      FirstName: "FirstNikita",
      ExternalID: "",
      RcopiaID: "26151571631",
      LastName: "Dr",
    },
    NeedsReview: "n",
    Provider: {
      DEA: "AP3864421",
      Username: "pclarksoneyecare",
      NPI: "1741791705",
      FirstName: "Provider",
      ExternalID: "",
      RcopiaID: "2642957631",
      LastName: "ClarksonEyeCare",
    },
    Preparer: {
      RcopiaID: "2642957631",
      ExternalID: "",
      FirstName: "Capi",
      LastName: "ClarksonEyeCare",
    },
    Sig: {
      Drug: {
        NDCID: "00378070901",
        BrandName: "D-Penamine",
        GenericName: "penicillamine",
        Form: "tablet",
        Strength: "125 mg",
        RcopiaID: "12100000098779",
        FirstDataBankMedID: "585251",
        DrugDescription: "D-Penamine 125 mg tablet",
        Schedule: "nonscheduled",
        BrandType: "brand",
        Route: "oral",
        LegendStatus: "rx",
      },
      DoseUnit: "tablet",
      DoseTiming: "twice a day",
      Duration: "",
      Route: "by mouth",
      Quantity: "1",
      QuantityUnit: "tablet",
      Refills: "0",
      SubstitutionPermitted: "y",
      OtherNotes: "",
      PatientNotes: "as directed",
      Dose: "3",
      Action: "Take",
      Comments: "",
      MaximumDailyDoseUnit: "",
      DoseOther: "as directed",
      MaximumDailyDose: "",
    },
    CreatedDate: "12/05/2022 03:40:57 EDT",
    CompletedDate: "",
    SignedDate: "",
    StopDate: "10/05/2022",
    LastModifiedBy: "pclarksoneyecare",
    LastModifiedDate: "10/05/2022 03:41:00 EDT",
    Height: "",
    Weight: "",
    IntendedUse: "",
    Denied: "n",
    patientRcopiaID: "26151571631",
    _id: "323498f1-dff7-47b6-b3af-2dcc432f65cx",
    _version: "b3118e77-ad8c-4ac9-9840-1b38f6fb008e",
    _created: "Oct 5, 2022, 7:41:50 AM",
    _updated: "Oct 5, 2022, 7:41:50 AM",
    _createdBy: {
      _id: "2818ef11-208b-4f43-b471-06ad495381f1",
      _links: {
        self: {
          href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
        },
      },
    },
  },
  {
    Deleted: "n",
    Voided: "n",
    RcopiaID: "SB-26353646482",
    Patient: {
      RcopiaPracticeID: "222531942",
      FirstName: "FirstNikita",
      ExternalID: "",
      RcopiaID: "26151571631",
      LastName: "Dr",
    },
    NeedsReview: "n",
    Provider: {
      DEA: "AP3864421",
      Username: "pclarksoneyecare",
      NPI: "1741791705",
      FirstName: "Provider",
      ExternalID: "",
      RcopiaID: "2642957631",
      LastName: "ClarksonEyeCare",
    },
    Preparer: {
      RcopiaID: "2642957631",
      ExternalID: "",
      FirstName: "Opa",
      LastName: "ClarksonEyeCare",
    },
    Sig: {
      Drug: {
        NDCID: "00378070901",
        BrandName: "D-Penamine",
        GenericName: "penicillamine",
        Form: "tablet",
        Strength: "125 mg",
        RcopiaID: "12100000098779",
        FirstDataBankMedID: "585251",
        DrugDescription: "D-Penamine 125 mg tablet",
        Schedule: "nonscheduled",
        BrandType: "brand",
        Route: "oral",
        LegendStatus: "rx",
      },
      DoseUnit: "tablet",
      DoseTiming: "twice a day",
      Duration: "",
      Route: "by mouth",
      Quantity: "1",
      QuantityUnit: "tablet",
      Refills: "0",
      SubstitutionPermitted: "y",
      OtherNotes: "",
      PatientNotes: "as directed",
      Dose: "3",
      Action: "Take",
      Comments: "",
      MaximumDailyDoseUnit: "",
      DoseOther: "as directed",
      MaximumDailyDose: "",
    },
    CreatedDate: "12/05/2022 03:40:57 EDT",
    CompletedDate: "",
    SignedDate: "",
    StopDate: "10/05/2022",
    LastModifiedBy: "pclarksoneyecare",
    LastModifiedDate: "10/05/2022 03:41:00 EDT",
    Height: "",
    Weight: "",
    IntendedUse: "",
    Denied: "n",
    patientRcopiaID: "26151571631",
    _id: "323498f1-dff7-47b6-b3af-2dcc432f65cw",
    _version: "b3118e77-ad8c-4ac9-9840-1b38f6fb008e",
    _created: "Oct 5, 2022, 7:41:50 AM",
    _updated: "Oct 5, 2022, 7:41:50 AM",
    _createdBy: {
      _id: "2818ef11-208b-4f43-b471-06ad495381f1",
      _links: {
        self: {
          href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
        },
      },
    },
  }
];