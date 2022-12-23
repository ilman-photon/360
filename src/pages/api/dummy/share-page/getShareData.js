export default function getShareData(req, res) {
  if (req.method == "GET" && req.query.type == "glasses") {
    res.status(200).json([
      {
        glrx: {
          od: {
            add: "111",
            axis: "111",
            sphere: "10.1",
            cylinder: "",
            bal: true,
          },
          os: {
            add: "11.2",
            axis: "000",
            sphere: "55.7",
            cylinder: "11.0",
            bal: true,
          },
          type: "",
          notes: "test notes",
          startDate: "01/10/2022",
          expirationDate: "25/06/2023",
        },
        provider: {
          firstName: "Steve",
          lastName: "Adam",
          designation: "Dr",
          providerDetails: {
            isProvider: true,
          },
          _id: "19f1c186-37a8-46ef-a731-0a1f022be782",
          _links: {
            self: {
              href: "/v1/template-users/19f1c186-37a8-46ef-a731-0a1f022be782",
            },
          },
        },
        patient: {
          firstName: " karan",
          lastName: "dhina",
          mrn: "XAB212457",
          dob: "10/21/96, 12:00 AM",
          sex: "1",
          status: "UPDATED",
          _id: "b4d9e6e2-eab2-41ba-8c44-d493bc68a824",
          _version: "0c872f35-6dbf-4733-baa2-778e1202608c",
          _created: "Oct 21, 2022, 7:05:44 AM",
          _updated: "Nov 4, 2022, 9:33:12 AM",
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
            href: "/v1/exam-sheet-entry/52dce3f2-bfbd-4ef3-b92f-725d2c668f1a",
          },
        },
        _id: "52dce3f2-bfbd-4ef3-b92f-725d2c668f1a",
      },
    ]);
  } else if (req.method == "GET" && req.query.type == "contact") {
    res.status(200).json([
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
          firstName: "Steve",
          lastName: "Adam",
          designation: "Dr",
          providerDetails: {
            isProvider: true,
          },
          _id: "19f1c186-37a8-46ef-a731-0a1f022be782",
          _links: {
            self: {
              href: "/v1/template-users/19f1c186-37a8-46ef-a731-0a1f022be782",
            },
          },
        },
        patient: {
          firstName: " karan",
          lastName: "dhina",
          mrn: "XAB212457",
          dob: "10/21/96, 12:00 AM",
          sex: "1",
          status: "UPDATED",
          _id: "b4d9e6e2-eab2-41ba-8c44-d493bc68a824",
          _version: "0c872f35-6dbf-4733-baa2-778e1202608c",
          _created: "Oct 21, 2022, 7:05:44 AM",
          _updated: "Nov 4, 2022, 9:33:12 AM",
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
            href: "/v1/exam-sheet-entry/cf25c8c0-be32-4d00-8326-663391342b7a",
          },
        },
        _id: "cf25c8c0-be32-4d00-8326-663391342b7a",
      },
    ]);
  } else if (req.method == "GET" && req.query.type == "carePlans") {
    res.status(200).json([
      {
        name: "APPSEQ.drawio",
        documentType: "image/png",
        category: "care-plan",
        uploadedBy: {
          uid: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
          firstName: "Portal",
          lastName: "User",
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
        patientId: "b4d9e6e2-eab2-41ba-8c44-d493bc68a824",
        status: "CREATED",
        digital_assets: {
          _id: "7c83c708-70b3-4390-9f7d-a9750956a936",
        },
        _id: "16db44da-d4bd-4be7-a637-79a896ec1386",
        _version: "97157de5-138b-464c-b56d-3ae20e653455",
        _created: "Oct 21, 2022, 12:10:27 PM",
        _updated: "Oct 21, 2022, 12:10:27 PM",
        _createdBy: {
          _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
          _links: {
            self: {
              href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
            },
          },
        },
        _links: {
          self: {
            href: "/v1/patients/16db44da-d4bd-4be7-a637-79a896ec1386",
          },
        },
      },
    ]);
  } else if (req.method == "GET" && req.query.type == "healthRecord") {
    res.status(200).json([
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
    ]);
  } else if (req.method == "GET" && req.query.type == "medication") {
    res.status(200).json([
      {
        Deleted: "n",
        Voided: "n",
        RcopiaID: "SB-26353967698",
        Patient: {
          RcopiaPracticeID: "222531942",
          FirstName: "karan",
          ExternalID: "",
          RcopiaID: "26151876440",
          LastName: "dhina",
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
            NDCID: "49452220001",
            BrandName: "cod liver oil (bulk)",
            GenericName: "cod liver oil (bulk)",
            Form: "oil",
            Strength: "100%",
            RcopiaID: "15158",
            FirstDataBankMedID: "565783",
            DrugDescription: "cod liver oil (bulk) 100 %",
            Schedule: "nonscheduled",
            BrandType: "generic",
            Route: "",
            LegendStatus: "otc",
          },
          DoseUnit: "gram",
          DoseTiming: "three times a day",
          Duration: "10",
          Route: "to skin",
          Quantity: "1",
          QuantityUnit: "ml",
          Refills: "0",
          SubstitutionPermitted: "y",
          OtherNotes: "",
          PatientNotes: "",
          Dose: "1",
          Action: "Apply",
          Comments: "",
          MaximumDailyDoseUnit: "",
          DoseOther: "between meals",
          MaximumDailyDose: "",
        },
        CreatedDate: "11/01/2022 05:56:26 EDT",
        CompletedDate: "11/01/2022 05:59:19 EDT",
        SignedDate: "11/01/2022 05:59:19 EDT",
        StopDate: "11/11/2022 13:29:59 EST",
        LastModifiedBy: "pclarksoneyecare",
        LastModifiedDate: "11/01/2022 05:59:20 EDT",
        Height: "",
        Weight: "",
        IntendedUse: "",
        Denied: "n",
        Pharmacy: {
          RcopiaID: "234071",
          RcopiaMasterID: "234071",
          Deleted: "n",
          NCPDPID: "2126565",
          NPI: null,
          Name: "CVS Pharmacy # 2775",
          Address1: "2601 RIVA RD.",
          CrossStreet: null,
          City: "ANNAPOLIS",
          State: "MD",
          Zip: "21401",
          Phone: "(410) 571-2895",
          Fax: "(410) 571-2896",
          Is24Hour: "n",
          Level3: "n",
          Electronic: "y",
          MailOrder: "n",
          RequiresEligibility: "",
          Retail: "y",
          LongTermCare: "n",
          Specialty: "n",
          CanReceiveControlledSubstance: "n",
          ScriptVersion: "10.6",
          InHouseDispensing: "n",
          Compounding: "n",
          DurableMedicalEquipment: "n",
          Kiosk: "n",
        },
        patientRcopiaID: "26151876440",
        _id: "d2769811-9469-49ec-82f8-929f6740cccd",
        _version: "f47bbdf3-f877-4646-b3a1-498e0b079e88",
        _created: "Nov 1, 2022, 9:59:36 AM",
        _updated: "Nov 2, 2022, 9:27:43 AM",
        _createdBy: {
          _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
          _links: {
            self: {
              href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
            },
          },
        },
        CompletionAction: "sent,signed",
        status: "UPDATED",
      },
    ]);
  }
}
