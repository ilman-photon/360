import { render } from "@testing-library/react";


jest.mock('react-i18next', () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => {
    return {
      t: (str) => str,
      i18n: {
        changeLanguage: () => new Promise(() => { }),
      },
    };
  },
}));

export function setup(jsx) {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
}

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
              "expirationDate": "25/06/2023"
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
    StopDate: "",
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
    StopDate: "",
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
    StopDate: "",
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
    StopDate: "",
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
    StopDate: "",
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
    StopDate: "",
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
    StopDate: "",
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

