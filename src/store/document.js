import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Api } from "../pages/api/api";

export const fetchDocuments = createAsyncThunk(
  "document/fetchDocuments",
  async ({ patientId, category }) => {
    let url;
    let categoryId;
    if (category === "test-lab-result") {
      url = `/ecp/testResult/${patientId}`;
      // TODO: hardcoded response, remove later
      return Promise.resolve({
        count: 2,
        entities: [
          {
            examSheet: {
              _links: {
                self: {
                  href: "/v1/exam-sheets/6eac6174-dd4d-42d0-ab5d-8edcf17c1d64",
                },
              },
              _id: "6eac6174-dd4d-42d0-ab5d-8edcf17c1d64",
            },
            examSheetSectionGroup: {
              _links: {
                self: {
                  href: "/v1/exam-sheet-sections/4a610e7c-e134-44e7-848e-d2012067b76e",
                },
              },
              _id: "4a610e7c-e134-44e7-848e-d2012067b76e",
            },
            sequence: 1,
            status: "CREATED",
            deleted: false,
            data: {
              testingOrder: {
                orderDetails: {
                  status: "RESULTS_AVAILABLE",
                  patient: {
                    dob: "09/16/2022",
                    mrn: "VGF164640",
                    sex: "",
                    lastName: "nikita",
                    firstName: "nikita",
                    _id: "3b38ebd3-43f1-438e-b101-ba38f01350f0",
                  },
                  dateTime: {
                    endDate: "2022-09-30T12:51:30.000+00:00",
                    startDate: "2022-09-30T12:51:30.000+00:00",
                    startTime: "2022-09-30T12:51:30.000+00:00",
                  },
                  examLink:
                    "https://cloud.continuumpacs.com/ecp/PatientExamDirect/Exam?uID=emruser&uPass=reHg0U9U6fR!&ExamId=dfa86225-7aac-426c-989f-164ca8d5a0e9",
                  testType: {
                    _id: "012054df-15ad-4190-981b-4fb663a16c8b",
                  },
                  encounter: {
                    _id: "9d957ac0-efb4-41fb-938c-96464a874d4d",
                  },
                  technician: {
                    sex: "",
                    lastName: "emma",
                    firstName: "parker",
                    middleName: "M",
                    assigningAuthority: "ADT1",
                    _id: "3c49b82e-4ed0-4f4f-9948-7b092feadc6a",
                  },
                  appointment: {
                    _id: "d8bb91cf-cbcb-4467-bd0c-f5c37f5d12ba",
                  },
                  orderingProvider: {
                    lastName: "user",
                    firstName: "ECP",
                    middleName: "M",
                    assigningAuthority: "NPI",
                    _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              commonTestFields: {
                assessment: {
                  OU: ["Same"],
                  OD: null,
                  OS: null,
                },
                testReliability: ["Good"],
                patientCooperation: {
                  cooperation: ["Good"],
                },
              },
              biometry: null,
              Keratometry: {
                OD: {
                  parameters: [{}],
                },
                OS: {
                  parameters: [{}],
                },
              },
            },
            _links: {
              self: {
                href: "/v1/exam-sheet-entry/1973c4d0-74da-41c5-a5f7-b2358821f823",
              },
            },
            _id: "1973c4d0-74da-41c5-a5f7-b2358821f823",
            _version: "b404f709-5d33-4fe2-a57d-97231ab05a3f",
            _created: "Sep 30, 2022, 12:51:53 PM",
            _updated: "Sep 30, 2022, 12:51:53 PM",
            _createdBy: {
              _links: {
                self: {
                  href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                },
              },
              _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
            },
          },
          {
            examSheet: {
              _links: {
                self: {
                  href: "/v1/exam-sheets/6eac6174-dd4d-42d0-ab5d-8edcf17c1d64",
                },
              },
              _id: "6eac6174-dd4d-42d0-ab5d-8edcf17c1d64",
            },
            examSheetSectionGroup: {
              _links: {
                self: {
                  href: "/v1/exam-sheet-sections/4a610e7c-e134-44e7-848e-d2012067b76e",
                },
              },
              _id: "4a610e7c-e134-44e7-848e-d2012067b76e",
            },
            sequence: 1,
            status: "CREATED",
            deleted: false,
            data: {
              testingOrder: {
                orderDetails: {
                  status: "RESULTS_AVAILABLE",
                  patient: {
                    dob: "09/16/2022",
                    mrn: "VGF164640",
                    sex: "",
                    lastName: "nikita",
                    firstName: "nikita",
                    _id: "3b38ebd3-43f1-438e-b101-ba38f01350f0",
                  },
                  dateTime: {
                    endDate: "2022-09-30T12:53:26.000+00:00",
                    startDate: "2022-09-30T12:53:26.000+00:00",
                    startTime: "2022-09-30T12:53:26.000+00:00",
                  },
                  examLink:
                    "https://cloud.continuumpacs.com/ecp/PatientExamDirect/Exam?uID=emruser&uPass=reHg0U9U6fR!&ExamId=f249c1b1-9932-4423-880a-98dbbb363402",
                  testType: {
                    _id: "1d3deb86-f893-4b8f-bbd6-2fb061522ced",
                  },
                  encounter: {
                    _id: "9d957ac0-efb4-41fb-938c-96464a874d4d",
                  },
                  technician: {
                    sex: "",
                    lastName: "emma",
                    firstName: "parker",
                    middleName: "M",
                    assigningAuthority: "ADT1",
                    _id: "3c49b82e-4ed0-4f4f-9948-7b092feadc6a",
                  },
                  appointment: {
                    _id: "d8bb91cf-cbcb-4467-bd0c-f5c37f5d12ba",
                  },
                  orderingProvider: {
                    lastName: "user",
                    firstName: "ECP",
                    middleName: "M",
                    assigningAuthority: "NPI",
                    _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
                  },
                },
              },
              commonTestFields: {
                assessment: {
                  OU: ["Same"],
                  OD: ["Better"],
                  OS: ["Same"],
                },
                testReliability: ["Fair"],
                patientCooperation: {
                  cooperation: ["Good"],
                },
              },
              biometry: {
                texts: [
                  "Optical coherence biometry was performed with IOL calculations",
                  "Optical coherence biometry was performed without IOL calculations at no charge",
                  "Unable to obtain reliable axial length - an Immersion A-scan was required",
                  "Unable to obtain reliable keratometry, unable to perform IOL calculations",
                ],
              },
              Keratometry: null,
            },
            _links: {
              self: {
                href: "/v1/exam-sheet-entry/58b25da7-dc5e-43c8-8f20-3aa983cdc987",
              },
            },
            _id: "58b25da7-dc5e-43c8-8f20-3aa983cdc987",
            _version: "fdb6d2ac-e91a-4306-ac4c-5bce80fa361d",
            _created: "Sep 30, 2022, 12:53:38 PM",
            _updated: "Sep 30, 2022, 12:53:38 PM",
            _createdBy: {
              _links: {
                self: {
                  href: "/v1/employees/d9724501-1226-4b42-b9d5-f26faae03d6c",
                },
              },
              _id: "d9724501-1226-4b42-b9d5-f26faae03d6c",
            },
          },
        ],
        _links: {
          self: {
            href: "/emr?pageNo=0&pageSize=100",
          },
        },
      });
    } else {
      switch (category) {
        case "insurance-documents":
          break;
        case "health-record":
          break;
        case "care-plan-overview":
          categoryId = "Medical-Record";
          // TODO: hardcoded response, remove later
          return Promise.resolve({
            count: 1,
            entities: [
              {
                name: "MEDICAL_CERTIFICATE_OF_FITNESS2",
                documentType: "application/pdf",
                category: "care-plan",
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
                  _id: "23d9d6de-8689-48d0-9427-844087dde75e",
                },
                _id: "1d06a57a-418f-479a-b800-f9eae273b51a",
                _version: "53c0b7af-9bb6-4f86-8ac5-2cde8bcc84dd",
                _created: "Oct 7, 2022, 10:00:34 AM",
                _updated: "Oct 7, 2022, 10:00:34 AM",
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
                    href: "/v1/patients/1d06a57a-418f-479a-b800-f9eae273b51a",
                  },
                },
              },
            ],
            _links: {
              self: {
                href: "/patient-management?pageNo=0&pageSize=10",
              },
            },
          });
        // break;
        default:
          categoryId = "Intake-Forms";
          break;
      }
      url = `/ecp/patient/getPatientDocumentByCategory/${patientId}/documents?pageSize=10&pageNo=0&sortBy=updated&sortOrder=dsc&search.query=((category=eq=${categoryId}))`;
    }
    const api = new Api();
    return api.getResponse(url, null, "get");
  }
);

const documentSlice = createSlice({
  name: "document",
  initialState: {
    documentList: [],
    status: null,
  },
  reducers: {
    resetDocuments: (state) => {
      state.documentList = [];
    },
  },
  extraReducers: {
    [fetchDocuments.pending]: (state) => {
      state.status = "loading";
    },
    [fetchDocuments.fulfilled]: (state, { payload }) => {
      state.documentList = payload.entities;
      state.status = "success";
    },
    [fetchDocuments.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

// Action creators are generated for each case reducer function
export const { resetDocuments } = documentSlice.actions;

export default documentSlice.reducer;
