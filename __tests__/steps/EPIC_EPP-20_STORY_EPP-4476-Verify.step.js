import App from "../../src/pages/_app";
import Bio, { getServerSideProps } from "../../src/pages/patient/bio/[bio]";
import MyCareTeamPage from "../../src/pages/patient/my-care-team";
import "@testing-library/jest-dom";
import { act, fireEvent, render, waitFor } from "@testing-library/react";
import store from "../../src/store/store";
import { Provider } from "react-redux";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import constants from "../../src/utils/constants";
import { Marker, useLoadScript } from "@react-google-maps/api";
import {
  mockAppointmentTypes,
  mockInsurance,
  submitFilter,
} from "../../__mocks__/mockResponse";
import { defineFeature, loadFeature } from "jest-cucumber";
import {
  defaultValidation,
  doLogin,
  renderLogin,
  renderResultsScreen,
} from "../../__mocks__/commonSteps";

const useRouter = jest.spyOn(require("next/router"), "useRouter");

jest.mock("@react-google-maps/api", () => ({
  useLoadScript: () => ({
    isLoaded: true,
    loadError: null,
  }),
  GoogleMap: () => <div></div>,
  Marker: () => <Marker />,
}));

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint7/EPP-4476.feature"
);

defineFeature(feature, (test) => {
  let container;
  const mock = new MockAdapter(axios);
  const TEST_ID = constants.TEST_ID.BIOGRAPHY_TEST_ID;
  const TEST_ID_RAW = constants.TEST_ID;

  const providerListMock = [
    {
      appointmentType: {
        code: "Charity",
        name: "Charity",
      },
      patient: {
        firstName: "Delivery",
        lastName: "Portal",
        dob: "10/31/1977",
        age: "45",
        sex: "3",
        address: [
          {
            type: 1,
            addressLine1: "12 10th St",
            city: "Colonial Beach",
            state: "VA",
            zip: "22443",
            preferred: true,
            isBadAddress: false,
            _id: "863906c2-07c0-48bf-90a1-8e991286afb9",
            _version: "079e8985-280b-4ca7-b9ca-3b7344f924b2",
            _created: "Oct 31, 2022, 5:44:02 PM",
            _updated: "Oct 31, 2022, 6:09:34 PM",
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
        patientDetails: {
          isFlagNew: false,
          isFlagInCollection: false,
          isFlagBadCheck: false,
          isFlagDeceased: false,
          isFlagChartless: false,
          _id: "a909a761-3890-4acf-9e24-21c8c3d0fb6f",
          _version: "707eabb2-8838-42d5-8721-4c77a467dfc7",
          _created: "Oct 31, 2022, 5:44:11 PM",
          _updated: "Oct 31, 2022, 6:09:34 PM",
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
        isEmergencyContactAvailable: false,
        contactPrefrence: false,
        specialService: {
          isHearingImpaired: false,
          isMobilityImpaired: false,
          interpreterService: {
            interpreterServiceRequired: false,
            interpreterRequired: false,
          },
        },
        status: "UPDATED",
        contactInformation: {
          phones: [
            {
              type: 3,
              number: "8978564546",
              isPreferred: true,
            },
          ],
          emails: [
            {
              type: 2,
              isPreferred: true,
              email: "",
              _id: "d3c6ab0a-1b12-48ff-8c91-9b82a8181814",
              _version: "3af97529-f29d-4ce5-9e4d-4e4398762ed3",
              _created: "Oct 31, 2022, 5:44:02 PM",
              _updated: "Oct 31, 2022, 6:09:34 PM",
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
          contactPreferenceDetail: {
            phone: true,
            text: true,
            email: true,
            _id: "2d2594d4-f417-4fbf-976b-827bb1fb1276",
            _version: "5052d3de-e5ea-43d9-9705-e1481aba7de7",
            _created: "Oct 31, 2022, 5:44:02 PM",
            _updated: "Oct 31, 2022, 6:09:34 PM",
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
          noEmail: false,
          _id: "91522e2e-5d73-4d95-a6b5-8eec5b56b01c",
          _version: "21ba7263-81ec-40be-8281-1a0013ddcc55",
          _created: "Oct 31, 2022, 5:44:02 PM",
          _updated: "Oct 31, 2022, 6:09:34 PM",
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
        _id: "7dba6139-e2aa-4994-bb72-af6f1b11b94a",
        _version: "00f68610-56b3-425b-afb6-294fa23b0d16",
        _created: "Oct 31, 2022, 5:44:11 PM",
        _updated: "Oct 31, 2022, 6:09:34 PM",
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
      provider: {
        firstName: "Jaco",
        lastName: "David",
        designation: "MBBS, MD",
        inHouse: false,
        workPhone: "8675456888",
        email: "eyecare@gmail.com",
        rating: 2,
        profilePhoto: {
          digitalAsset: {
            uid: "d72b0b16-99ab-4ae4-aba3-13b81930b68a",
            fileName: "test",
            assetUrl: "/v1/patient",
            _version: "f64310c3-1c5c-4b9e-b3d8-32c9b4bdc74f",
          },
        },
        address: {
          addressLine1: "800 14th St Apt B",
          city: "Virginia Beach",
          state: "VA",
          zip: "23451",
        },
        sex: {
          key: 11,
          name: "M",
          order: 3,
          notes: "",
        },
        taxonomyCode: "1223P0106X",
        classification: "Dentist",
        specialization: "Oral and Maxillofacial Pathology",
        language1: "English",
        language2: "Arabic",
        language3: "Chinese",
        directAddress: "a@a.com",
        _id: "e324e29f-2e89-460d-ad11-9435360244f8",
        _version: "94d94cc9-d486-4df1-ae8d-df699554bac1",
        _updated: "Nov 14, 2022, 9:54:59 AM",
        _updatedBy: {
          _id: "981ad89e-7fee-42d8-92ec-c34324d862a0",
          _links: {
            self: {
              href: "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0",
            },
          },
        },
        _created: "Oct 31, 2022, 9:15:39 AM",
        _createdBy: {
          _id: "981ad89e-7fee-42d8-92ec-c34324d862a0",
          _links: {
            self: {
              href: "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0",
            },
          },
        },
      },
      office: {
        name: "Ballwin",
        addressLine1: "568 Allens Mill Rd",
        addressLine2: "568 Allens Mill Rd",
        city: "Yorktown",
        state: "VA",
        zip: "23692",
        _id: "4cd970a0-8529-4b44-a4c5-99c9f4e8d078",
      },
      appointmentDate: "10/31/2022",
      appointmentTime: "09:15",
      appointmentEndTime: "09:20",
      appointmentLength: 5,
      isConfirmed: true,
      confirmationDetail: {
        confirmationDate: "10/31/2022",
        confirmationTime: "23:44",
        confirmationBy: "2818ef11-208b-4f43-b471-06ad495381f1",
      },
      appointmentHistory: [],
      state: {
        subState: {
          subState: "WAITING_FOR_TECHNICIAN",
          _id: "c6d24361-517c-45b3-95b7-8719f96c742f",
          _version: "59895ff5-859f-452f-b17a-5f7318bd7ee0",
          _created: "Oct 31, 2022, 6:14:39 PM",
          _updated: "Oct 31, 2022, 6:14:39 PM",
          _createdBy: {
            _id: "2818ef11-208b-4f43-b471-06ad495381f1",
            _links: {
              self: {
                href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
              },
            },
          },
        },
        state: "CHECK_IN",
        _id: "49876c78-d979-4f7d-aad4-9be23bef6964",
        _version: "0623fe82-0cc6-4580-bb73-08ade5720fbe",
        _created: "Oct 31, 2022, 6:14:33 PM",
        _updated: "Oct 31, 2022, 6:14:39 PM",
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
      notes: [],
      allowCreate: false,
      paymentMethod: {
        noInsuranceInformation: {},
        insuranceInfoUsedForBilling: {
          financialClassBasedInformation: {},
          active: false,
          archive: false,
          selected: false,
        },
        paymentMode: "SELF_PAY",
      },
      appointmentNo: 1000001445,
      guarantor: {
        firstName: "Delivery",
        lastName: "Portal",
        dob: "10/31/1977",
        relationship: "99",
        releaseHippaInfo: true,
        patient: {
          _id: "7dba6139-e2aa-4994-bb72-af6f1b11b94a",
        },
        contactInformation: {
          phones: [
            {
              type: 3,
              number: "8978564546",
            },
          ],
          emails: [],
          _id: "b5e2a16a-0a95-4cb8-9087-78ed9ff7ee93",
          _version: "f0540c6c-9ae3-4fdc-a5e0-46629a411440",
          _created: "Oct 31, 2022, 5:44:02 PM",
          _updated: "Oct 31, 2022, 5:44:02 PM",
          _createdBy: {
            _id: "2818ef11-208b-4f43-b471-06ad495381f1",
            _links: {
              self: {
                href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
              },
            },
          },
        },
        address: {
          type: 1,
          addressLine1: "12 10th St ",
          city: "Colonial Beach",
          state: "VA",
          zip: "22443",
          isBadAddress: false,
          _id: "2119beb9-1269-4298-946e-27fb27317e9d",
          _version: "edd753a4-84ca-41d9-9765-61508702ddde",
          _created: "Oct 31, 2022, 5:44:02 PM",
          _updated: "Oct 31, 2022, 5:44:02 PM",
          _createdBy: {
            _id: "2818ef11-208b-4f43-b471-06ad495381f1",
            _links: {
              self: {
                href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
              },
            },
          },
        },
        status: "CREATED",
        _links: {
          self: {
            href: "/v1/guarantor/98eedf73-eaf5-4bfa-b275-8ee9cbeea68f",
          },
        },
        _id: "98eedf73-eaf5-4bfa-b275-8ee9cbeea68f",
        _version: "019c37ed-4af5-4a28-8d01-5f35437a6a95",
        _created: "Oct 31, 2022, 5:44:02 PM",
        _updated: "Oct 31, 2022, 5:44:02 PM",
        _createdBy: {
          _id: "2818ef11-208b-4f43-b471-06ad495381f1",
          _links: {
            self: {
              href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
            },
          },
        },
      },
      encounter: {
        encounterNo: 10000453,
        _id: "9a986aa8-421a-4f93-84ab-ba627292e280",
      },
      newPatient: false,
      insurancePayers: [],
      override: false,
      quickAppointmentflag: false,
      isPrimaryMember: true,
      status: "UPDATED",
      _links: {
        self: {
          href: "/v1/appointments/3bee7142-fac8-43f5-9b7f-7800efe9623e",
        },
      },
      _id: "3bee7142-fac8-43f5-9b7f-7800efe9623e",
      _version: "971eb289-49d2-4b3b-9c39-d9b1ed82714d",
      _created: "Oct 31, 2022, 6:14:33 PM",
      _updated: "Oct 31, 2022, 6:14:39 PM",
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
  ];

  const userData = {
    designation: "MBBS, MD",
    firstName: "Jaco",
    lastName: "David",
    nickName: "Jaco",
    employeeNumber: "755708",
    mi: "Jaco",
    dob: "02/07/1971",
    email: "eyecare@gmail.com",
    sex: {
      key: 7,
      name: "M",
      order: 1,
      notes: "",
    },
    available: true,
    note: "Test",
    age: "51",
    address: {
      addressLine1: "568 Allens Mill Rd",
      city: "Yorktown",
      state: "VA",
      zip: "23692",
    },
    homePhone: "4981261115",
    cellPhone: "2812942993",
    workPhone: "2812942993",
    inHouse: false,
    providerDetails: {
      isProvider: true,
      isExternalProvider: false,
      materialRate: "0",
      drFirstCredentialDetails: {
        drFirstCredential: false,
        username: "",
        password: "",
        signature: "",
      },
      npi: "1134296023",
      professionalEq: "1234",
      opticalEq: "12",
      surgicalEq: "344",
      contactEq: "12346",
      provider: "",
      onlineProvider: true,
      license: [],
      deaIds: [],
      taxonomyCode: "207ND0101X",
      classification: "Dermatology",
      specialization: "MOHS-Micrographic Surgery",
      rating: 9,
      language1: "Arabic",
      language2: "Chinese",
      language3: "German",
      profilePhoto: {
        digitalAsset: {
          uid: "1ffaf737-57ac-4660-8a32-f0650e2285ae",
          fileName: "test",
          assetUrl: "/v1/patient",
          _version: "d72b0b16-99ab-4ae4-aba3-13b81930b77a",
        },
      },
    },
    offices: [
      {
        name: "Ballwin",
        addressLine1: "568 Allens Mill Rd",
        city: "Yorktown",
        state: "VA",
        zip: "23692",
        _id: "4cd970a0-8529-4b44-a4c5-99c9f4e8d078",
      },
      {
        name: "Ballwin 2",
        addressLine1: "568 Allens Mill Rd",
        city: "Yorktown",
        state: "VA",
        zip: "23692",
        _id: "4cd970a0-8529-4b44-a4c5-99c9f4e8d078",
      },
    ],
    status: "UPDATED",
    managerialAdjustments: false,
    overrideExpiredPromo: false,
    sources: [],
    _links: {
      self: {
        href: "/v1/employees/b579b0d1-0c93-4db4-8ca8-294a60e718e4",
      },
    },
    _id: "b579b0d1-0c93-4db4-8ca8-294a60e718e4",
  };

  const imageMock = {
    name: "Merabu_02.jpg",
    originalFileName: "Merabu_02.jpg",
    type: "jpeg",
    subType: "image",
    description: "Merabu_02.jpg",
    remoteLocation: {
      bucketName: "dgassets-bucket1",
      region: "us-east-1",
      locationType: "AWS",
    },
    presignedUrl:
      "https://dgassets-bucket1.s3.amazonaws.com/1ffaf737-57ac-4660-8a32-f0650e2285ae?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221003T051746Z&X-Amz-SignedHeaders=host&X-Amz-Expires=900&X-Amz-Credential=AKIAQ2MAPFH4C64PCZO6%2F20221003%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=80e799bb9072758f67f3abd71e3ae8d8f8248cf8378fd7412d1e725cf4f88c96",
  };

  const map = {
    status: "OK",
    results: [
      {
        geometry: {
          location: {
            lat: "31.000000",
            lng: "-100.000000",
          },
        },
      },
    ],
  };

  const renderList = async () => {
    //TODO: Remove
    const domain = window.location.origin;
    const url = `${domain}/api/dummy/appointment/biography/getProviderList?patientId=98f9404b-6ea8-4732-b14f-9c1a168d8066`;

    mock.onGet(url).reply(200, {
      entities: providerListMock,
    });

    mock
      .onGet(
        `/ecp/appointments/patientDetails?search.query=((patient.firstName=eq=dewo)AND(patient.lastName=eq=Simanjuntak))`
      )
      .reply(200, {
        entities: providerListMock,
      });

    act(() => {
      container = render(
        <Provider store={store}>
          {MyCareTeamPage.getLayout(<MyCareTeamPage />)}
        </Provider>
      );
    });

    await waitFor(() => {
      container.getAllByText(/View Profile/i);
    });

    return container;
  };

  const renderDetail = async () => {
    mock
      .onGet(
        `/ecp/appointments/getprovider/56bafbaf-6bc6-47d2-b3ab-5cee17cf7e30`
      )
      .reply(200, userData);

    mock
      .onGet(
        `https://maps.googleapis.com/maps/api/geocode/json?address=568+Allens+Mill+Rd++Yorktown+VA+23692&key=undefined`
      )
      .reply(200, map);

    const contex = {
      query: {
        bio: "56bafbaf-6bc6-47d2-b3ab-5cee17cf7e30",
      },
    };

    const { isLoaded } = useLoadScript({
      googleMapsApiKey: "123",
    });

    await getServerSideProps(contex);
    act(() => {
      container = render(
        <Provider store={store}>
          {Bio.getLayout(
            <Bio
              bio="56bafbaf-6bc6-47d2-b3ab-5cee17cf7e30"
              googleApiKey="123"
            />
          )}
        </Provider>
      );
    });

    await waitFor(() => {
      container.getByTestId(TEST_ID.about);
    });

    await waitFor(() => {
      container.getAllByText(/Primary Address/i)[0];
    });

    return container;
  };

  beforeEach(async () => {
    useRouter.mockReturnValue({
      back: jest.fn(),
      push: jest.fn(),
      beforePopState: jest.fn(),
    });
    window.scrollTo = jest.fn();

    mock
      .onGet(`/ecp/digital-asset/v1/asset/1ffaf737-57ac-4660-8a32-f0650e2285ae`)
      .reply(200, imageMock);

    mock
      .onGet("/ecp/appointments/appointment-types", mockAppointmentTypes)
      .reply(200, mockAppointmentTypes);
    mock
      .onGet("/ecp/appointments/insurance/allpayers", mockInsurance)
      .reply(200, mockInsurance);
    mock
      .onPut("/ecp/appointments/available-slot?searchText=Yorktown")
      .reply(200, submitFilter);
  });

  afterAll(() => {
    mock.reset();
  });

  test("EPIC_EPP-20_STORY_EPP-4476 - Verify User should be able to view the list of doctors/ optometrist they have consulted with the following details", ({
    given,
    when,
    then,
    and,
  }) => {
    given("User launch Patient Portal url", () => {
      defaultValidation();
    });

    when("User is logged in to the application", async () => {
      container = await renderLogin();
    });

    then(/^User lands to the "(.*)" screen$/, (arg0) => {
      defaultValidation();
    });

    and(/^User should see "(.*)"  menu$/, (arg0) => {
      defaultValidation();
    });

    when(/^User selects the "(.*)" menu$/, (arg0) => {
      defaultValidation();
    });

    then(
      "User should be navigated to the screen to view their care team i.e. Doctors/ Optometrists",
      async () => {
        container = await renderList();
        expect(container.getByText(/My Care Team/i)).toBeInTheDocument();
      }
    );

    and(
      "User should be see the list of doctors/ optometrist they have consulted with the following details",
      async (table) => {
        container = await renderList();
        expect(
          container.getAllByAltText(/Doctor Image/i).length > 0
        ).toBeTruthy();
        expect(container.getAllByText(/Jaco David/i).length > 0).toBeTruthy();
        expect(container.getAllByText(/Ballwin/i).length > 0).toBeTruthy();
        expect(
          container.getAllByText(/568 Allens Mill Rd/i).length > 0
        ).toBeTruthy();
        expect(container.getAllByText(/Specialties/i).length > 0).toBeTruthy();
        expect(container.getAllByText(/Phone/i).length > 0).toBeTruthy();
        expect(container.getAllByText(/Email/i).length > 0).toBeTruthy();
        expect(container.getAllByText(/View Profile/i).length > 0).toBeTruthy();
        expect(
          container.getAllByTestId("schedule-btn").length > 0
        ).toBeTruthy();
      }
    );
  });

  test("EPIC_EPP-20_STORY_EPP-4476 - Verify User clicks on any of the doctor/ optometrist listed to view their bio", ({
    given,
    when,
    then,
    and,
  }) => {
    given("User launch Patient Portal url", () => {
      defaultValidation();
    });

    when("User is logged in to the application", async () => {
      container = await renderLogin();
    });

    then(/^User lands to the "(.*)" screen$/, (arg0) => {
      defaultValidation();
    });

    and(/^User should see "(.*)"  menu$/, (arg0) => {
      defaultValidation();
    });

    when(/^User selects the "(.*)" menu$/, (arg0) => {
      defaultValidation();
    });

    then(
      "User should be navigated to the screen to view their care team i.e. Doctors/ Optometrists",
      async () => {
        container = await renderList();
        expect(container.getByText(/My Care Team/i)).toBeInTheDocument();
      }
    );

    and(
      "User should be see the list of doctors/ optometrist they have consulted with the following details",
      async (table) => {
        container = await renderList();
        expect(
          container.getAllByAltText(/Doctor Image/i).length > 0
        ).toBeTruthy();
        expect(container.getAllByText(/Jaco David/i).length > 0).toBeTruthy();
        expect(container.getAllByText(/Ballwin/i).length > 0).toBeTruthy();
        expect(
          container.getAllByText(/568 Allens Mill Rd/i).length > 0
        ).toBeTruthy();
        expect(container.getAllByText(/Specialties/i).length > 0).toBeTruthy();
        expect(container.getAllByText(/Phone/i).length > 0).toBeTruthy();
        expect(container.getAllByText(/Email/i).length > 0).toBeTruthy();
        expect(container.getAllByText(/View Profile/i).length > 0).toBeTruthy();
        expect(
          container.getAllByTestId("schedule-btn").length > 0
        ).toBeTruthy();
      }
    );

    when(
      "User clicks on any of the doctor/ optometrist listed there",
      async () => {
        container = await renderList();
        expect(container.getAllByText(/View Profile/i)[0]).toBeInTheDocument();
        fireEvent.click(container.getAllByText(/View Profile/i)[0]);
      }
    );

    then(
      "User should be able to view the following fields below:",
      async (table) => {
        container = await renderDetail();
        expect(container.getByText(/About Jaco/i)).toBeInTheDocument();
        expect(
          container.getByTestId(
            TEST_ID_RAW.APPOINTMENT_TEST_ID.PROVIDER_PROFILE.image
          )
        ).toBeInTheDocument();
        expect(
          container.getAllByText(/568 Allens Mill Rd/i).length > 0
        ).toBeTruthy();
        expect(
          container.getAllByText(/Specialties and Sub-specialties:/i)[0]
        ).toBeInTheDocument();
        expect(container.getByLabelText(/Rating/i)).toBeInTheDocument();
        expect(container.getByText(/Gender/i)).toBeInTheDocument();
        expect(container.getByText(/Primary Address/i)).toBeInTheDocument();
        expect(container.getByText(/Languages/i)).toBeInTheDocument();
        expect(
          container.getAllByText(/In-network insurances/i)[0]
        ).toBeInTheDocument();
        expect(container.getAllByText(/Education/i)[1]).toBeInTheDocument();
        expect(
          container.getByText(/Memberships and Afilliations/i)
        ).toBeInTheDocument();
      }
    );
  });

  test("EPIC_EPP-20_STORY_EPP-4476 - Verify User clicks on the option to schedule appointment from the doctor/ optometrist bio screen", ({
    given,
    when,
    then,
    and,
  }) => {
    given("User launch Patient Portal url", () => {
      defaultValidation();
    });

    when("User is logged in to the application", async () => {
      container = await renderLogin();
    });

    then(/^User lands to the "(.*)" screen$/, (arg0) => {
      defaultValidation();
    });

    and(/^User should see "(.*)"  menu$/, (arg0) => {
      defaultValidation();
    });

    when(/^User selects the "(.*)" menu$/, (arg0) => {
      defaultValidation();
    });

    then(
      "User should be navigated to the screen to view their care team i.e. Doctors/ Optometrists",
      async () => {
        container = await renderList();
        expect(container.getByText(/My Care Team/i)).toBeInTheDocument();
      }
    );

    and(
      "User should be see the list of doctors/ optometrist they have consulted with the following details",
      async (table) => {
        container = await renderList();
        expect(
          container.getAllByAltText(/Doctor Image/i).length > 0
        ).toBeTruthy();
        expect(container.getAllByText(/Jaco David/i).length > 0).toBeTruthy();
        expect(container.getAllByText(/Ballwin/i).length > 0).toBeTruthy();
        expect(
          container.getAllByText(/568 Allens Mill Rd/i).length > 0
        ).toBeTruthy();
        expect(container.getAllByText(/Specialties/i).length > 0).toBeTruthy();
        expect(container.getAllByText(/Phone/i).length > 0).toBeTruthy();
        expect(container.getAllByText(/Email/i).length > 0).toBeTruthy();
        expect(container.getAllByText(/View Profile/i).length > 0).toBeTruthy();
        expect(
          container.getAllByTestId("schedule-btn").length > 0
        ).toBeTruthy();
      }
    );

    when(
      "User clicks on any of the doctor/ optometrist listed there",
      async () => {
        container = await renderList();
        expect(container.getAllByText(/View Profile/i)[0]).toBeInTheDocument();
        fireEvent.click(container.getAllByText(/View Profile/i)[0]);
      }
    );

    then(
      "User should be able to view the following fields below:",
      async (table) => {
        container = await renderDetail();
        expect(container.getByText(/About Jaco/i)).toBeInTheDocument();
        expect(
          container.getByTestId(
            TEST_ID_RAW.APPOINTMENT_TEST_ID.PROVIDER_PROFILE.image
          )
        ).toBeInTheDocument();
        expect(
          container.getAllByText(/568 Allens Mill Rd/i).length > 0
        ).toBeTruthy();
        expect(
          container.getAllByText(/Specialties and Sub-specialties:/i)[0]
        ).toBeInTheDocument();
        expect(container.getByLabelText(/Rating/i)).toBeInTheDocument();
        expect(container.getByText(/Gender/i)).toBeInTheDocument();
        expect(container.getByText(/Primary Address/i)).toBeInTheDocument();
        expect(container.getByText(/Languages/i)).toBeInTheDocument();
        expect(
          container.getAllByText(/In-network insurances/i)[0]
        ).toBeInTheDocument();
        expect(container.getAllByText(/Education/i)[1]).toBeInTheDocument();
        expect(
          container.getByText(/Memberships and Afilliations/i)
        ).toBeInTheDocument();
      }
    );

    when(
      "User clicks on the option to schedule appointment from the doctor/ optometrist bio screen",
      async () => {
        container = await renderDetail();
        expect(container.getAllByTestId("schedule-btn")[1]).toBeInTheDocument();
        fireEvent.click(container.getAllByTestId("schedule-btn")[1]);
      }
    );

    then("User should be redirected to schedule appointment screen", () => {
      renderResultsScreen();
    });
  });

  test("EPIC_EPP-20_STORY_EPP-4476 - Verify User should be redirected to schedule appointment screen with location of the provider pre-filled as user’s searched location", ({
    given,
    when,
    then,
    and,
  }) => {
    given("User launch Patient Portal url", () => {
      defaultValidation();
    });

    when("User is logged in to the application", async () => {
      container = await renderLogin();
    });

    then(/^User lands to the "(.*)" screen$/, (arg0) => {
      defaultValidation();
    });

    and(/^User should see "(.*)"  menu$/, (arg0) => {
      defaultValidation();
    });

    when(/^User selects the "(.*)" menu$/, (arg0) => {
      defaultValidation();
    });

    then(
      "User should be navigated to the screen to view their care team i.e. Doctors/ Optometrists",
      async () => {
        container = await renderList();
        expect(container.getByText(/My Care Team/i)).toBeInTheDocument();
      }
    );

    and(
      "User should be see the list of doctors/ optometrist they have consulted with the following details",
      async (table) => {
        container = await renderList();
        expect(
          container.getAllByAltText(/Doctor Image/i).length > 0
        ).toBeTruthy();
        expect(container.getAllByText(/Jaco David/i).length > 0).toBeTruthy();
        expect(container.getAllByText(/Ballwin/i).length > 0).toBeTruthy();
        expect(
          container.getAllByText(/568 Allens Mill Rd/i).length > 0
        ).toBeTruthy();
        expect(container.getAllByText(/Specialties/i).length > 0).toBeTruthy();
        expect(container.getAllByText(/Phone/i).length > 0).toBeTruthy();
        expect(container.getAllByText(/Email/i).length > 0).toBeTruthy();
        expect(container.getAllByText(/View Profile/i).length > 0).toBeTruthy();
        expect(
          container.getAllByTestId("schedule-btn").length > 0
        ).toBeTruthy();
      }
    );

    when(
      "User clicks on any of the doctor/ optometrist listed there",
      async () => {
        container = await renderList();
        expect(container.getAllByText(/View Profile/i)[0]).toBeInTheDocument();
        fireEvent.click(container.getAllByText(/View Profile/i)[0]);
      }
    );

    then(
      "User should be able to view the following fields below:",
      async (table) => {
        container = await renderDetail();
        expect(container.getByText(/About Jaco/i)).toBeInTheDocument();
        expect(
          container.getByTestId(
            TEST_ID_RAW.APPOINTMENT_TEST_ID.PROVIDER_PROFILE.image
          )
        ).toBeInTheDocument();
        expect(
          container.getAllByText(/568 Allens Mill Rd/i).length > 0
        ).toBeTruthy();
        expect(
          container.getAllByText(/Specialties and Sub-specialties:/i)[0]
        ).toBeInTheDocument();
        expect(container.getByLabelText(/Rating/i)).toBeInTheDocument();
        expect(container.getByText(/Gender/i)).toBeInTheDocument();
        expect(container.getByText(/Primary Address/i)).toBeInTheDocument();
        expect(container.getByText(/Languages/i)).toBeInTheDocument();
        expect(
          container.getAllByText(/In-network insurances/i)[0]
        ).toBeInTheDocument();
        expect(container.getAllByText(/Education/i)[1]).toBeInTheDocument();
        expect(
          container.getByText(/Memberships and Afilliations/i)
        ).toBeInTheDocument();
      }
    );

    when(
      "User clicks on the option to schedule appointment from the doctor/ optometrist bio screen",
      async () => {
        container = await renderDetail();
        expect(container.getAllByTestId("schedule-btn")[1]).toBeInTheDocument();
        fireEvent.click(container.getAllByTestId("schedule-btn")[1]);
      }
    );

    then(
      "User should be redirected to schedule appointment screen with location of the provider pre-filled as user’s searched location",
      () => {
        renderResultsScreen();
      }
    );
  });

  test("EPIC_EPP-20_STORY_EPP-4476 - Verify User should be able to view today’s date as the date searched", ({
    given,
    when,
    then,
    and,
  }) => {
    given("User launch Patient Portal url", () => {
      defaultValidation();
    });

    when("User is logged in to the application", async () => {
      container = await renderLogin();
    });

    then(/^User lands to the "(.*)" screen$/, (arg0) => {
      defaultValidation();
    });

    and(/^User should see "(.*)"  menu$/, (arg0) => {
      defaultValidation();
    });

    when(/^User selects the "(.*)" menu$/, (arg0) => {
      defaultValidation();
    });

    then(
      "User should be navigated to the screen to view their care team i.e. Doctors/ Optometrists",
      async () => {
        container = await renderList();
        expect(container.getByText(/My Care Team/i)).toBeInTheDocument();
      }
    );

    and(
      "User should be see the list of doctors/ optometrist they have consulted with the following details",
      async (table) => {
        container = await renderList();
        expect(
          container.getAllByAltText(/Doctor Image/i).length > 0
        ).toBeTruthy();
        expect(container.getAllByText(/Jaco David/i).length > 0).toBeTruthy();
        expect(container.getAllByText(/Ballwin/i).length > 0).toBeTruthy();
        expect(
          container.getAllByText(/568 Allens Mill Rd/i).length > 0
        ).toBeTruthy();
        expect(container.getAllByText(/Specialties/i).length > 0).toBeTruthy();
        expect(container.getAllByText(/Phone/i).length > 0).toBeTruthy();
        expect(container.getAllByText(/Email/i).length > 0).toBeTruthy();
        expect(container.getAllByText(/View Profile/i).length > 0).toBeTruthy();
        expect(
          container.getAllByTestId("schedule-btn").length > 0
        ).toBeTruthy();
      }
    );

    when(
      "User clicks on any of the doctor/ optometrist listed there",
      async () => {
        container = await renderList();
        expect(container.getAllByText(/View Profile/i)[0]).toBeInTheDocument();
        fireEvent.click(container.getAllByText(/View Profile/i)[0]);
      }
    );

    then(
      "User should be able to view the following fields below:",
      async (table) => {
        container = await renderDetail();
        expect(container.getByText(/About Jaco/i)).toBeInTheDocument();
        expect(
          container.getByTestId(
            TEST_ID_RAW.APPOINTMENT_TEST_ID.PROVIDER_PROFILE.image
          )
        ).toBeInTheDocument();
        expect(
          container.getAllByText(/568 Allens Mill Rd/i).length > 0
        ).toBeTruthy();
        expect(
          container.getAllByText(/Specialties and Sub-specialties:/i)[0]
        ).toBeInTheDocument();
        expect(container.getByLabelText(/Rating/i)).toBeInTheDocument();
        expect(container.getByText(/Gender/i)).toBeInTheDocument();
        expect(container.getByText(/Primary Address/i)).toBeInTheDocument();
        expect(container.getByText(/Languages/i)).toBeInTheDocument();
        expect(
          container.getAllByText(/In-network insurances/i)[0]
        ).toBeInTheDocument();
        expect(container.getAllByText(/Education/i)[1]).toBeInTheDocument();
        expect(
          container.getByText(/Memberships and Afilliations/i)
        ).toBeInTheDocument();
      }
    );

    when(
      "User clicks on the option to schedule appointment from the doctor/ optometrist bio screen",
      async () => {
        container = await renderDetail();
        expect(container.getAllByTestId("schedule-btn")[1]).toBeInTheDocument();
        fireEvent.click(container.getAllByTestId("schedule-btn")[1]);
      }
    );

    then(
      "User should be redirected to schedule appointment screen with location of the provider pre-filled as user’s searched location",
      () => {
        renderResultsScreen();
      }
    );

    and("User should be able to view today’s date as the date searched", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-20_STORY_EPP-4476 - Verify User should be able to view the list of providers", ({
    given,
    when,
    then,
    and,
  }) => {
    given("User launch Patient Portal url", () => {
      defaultValidation();
    });

    when("User is logged in to the application", async () => {
      container = await renderLogin();
    });

    then(/^User lands to the "(.*)" screen$/, (arg0) => {
      defaultValidation();
    });

    and(/^User should see "(.*)"  menu$/, (arg0) => {
      defaultValidation();
    });

    when(/^User selects the "(.*)" menu$/, (arg0) => {
      defaultValidation();
    });

    then(
      "User should be navigated to the screen to view their care team i.e. Doctors/ Optometrists",
      async () => {
        container = await renderList();
        expect(container.getByText(/My Care Team/i)).toBeInTheDocument();
      }
    );

    and(
      "User should be see the list of doctors/ optometrist they have consulted with the following details",
      async (table) => {
        container = await renderList();
        expect(
          container.getAllByAltText(/Doctor Image/i).length > 0
        ).toBeTruthy();
        expect(container.getAllByText(/Jaco David/i).length > 0).toBeTruthy();
        expect(container.getAllByText(/Ballwin/i).length > 0).toBeTruthy();
        expect(
          container.getAllByText(/568 Allens Mill Rd/i).length > 0
        ).toBeTruthy();
        expect(container.getAllByText(/Specialties/i).length > 0).toBeTruthy();
        expect(container.getAllByText(/Phone/i).length > 0).toBeTruthy();
        expect(container.getAllByText(/Email/i).length > 0).toBeTruthy();
        expect(container.getAllByText(/View Profile/i).length > 0).toBeTruthy();
        expect(
          container.getAllByTestId("schedule-btn").length > 0
        ).toBeTruthy();
      }
    );

    when(
      "User clicks on any of the doctor/ optometrist listed there",
      async () => {
        container = await renderList();
        expect(container.getAllByText(/View Profile/i)[0]).toBeInTheDocument();
        fireEvent.click(container.getAllByText(/View Profile/i)[0]);
      }
    );

    then(
      "User should be able to view the following fields below:",
      async (table) => {
        container = await renderDetail();
        expect(container.getByText(/About Jaco/i)).toBeInTheDocument();
        expect(
          container.getByTestId(
            TEST_ID_RAW.APPOINTMENT_TEST_ID.PROVIDER_PROFILE.image
          )
        ).toBeInTheDocument();
        expect(
          container.getAllByText(/568 Allens Mill Rd/i).length > 0
        ).toBeTruthy();
        expect(
          container.getAllByText(/Specialties and Sub-specialties:/i)[0]
        ).toBeInTheDocument();
        expect(container.getByLabelText(/Rating/i)).toBeInTheDocument();
        expect(container.getByText(/Gender/i)).toBeInTheDocument();
        expect(container.getByText(/Primary Address/i)).toBeInTheDocument();
        expect(container.getByText(/Languages/i)).toBeInTheDocument();
        expect(
          container.getAllByText(/In-network insurances/i)[0]
        ).toBeInTheDocument();
        expect(container.getAllByText(/Education/i)[1]).toBeInTheDocument();
        expect(
          container.getByText(/Memberships and Afilliations/i)
        ).toBeInTheDocument();
      }
    );

    when(
      "User clicks on the option to schedule appointment from the doctor/ optometrist bio screen",
      async () => {
        container = await renderDetail();
        expect(container.getAllByTestId("schedule-btn")[1]).toBeInTheDocument();
        fireEvent.click(container.getAllByTestId("schedule-btn")[1]);
      }
    );

    then(
      "User should be redirected to schedule appointment screen with location of the provider pre-filled as user’s searched location",
      () => {
        renderResultsScreen();
      }
    );

    and("User should be able to view today’s date as the date searched", () => {
      defaultValidation();
    });

    when(
      "The provider from whose bio user got redirected to schedule appointment  at top",
      () => {
        defaultValidation();
      }
    );

    then(
      "User should be able to view the list of providers on the results in schedule appointment screen",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-20_STORY_EPP-4476 - Verify User should be able to go through the process of scheduling the appointment from patient portal with that provider", ({
    given,
    when,
    then,
    and,
  }) => {
    given("User launch Patient Portal url", () => {
      defaultValidation();
    });

    when("User is logged in to the application", async () => {
      container = await renderLogin();
    });

    then(/^User lands to the "(.*)" screen$/, (arg0) => {
      defaultValidation();
    });

    and(/^User should see "(.*)"  menu$/, (arg0) => {
      defaultValidation();
    });

    when(/^User selects the "(.*)" menu$/, (arg0) => {
      defaultValidation();
    });

    then(
      "User should be navigated to the screen to view their care team i.e. Doctors/ Optometrists",
      async () => {
        container = await renderList();
        expect(container.getByText(/My Care Team/i)).toBeInTheDocument();
      }
    );

    and(
      "User should be see the list of doctors/ optometrist they have consulted with the following details",
      async (table) => {
        container = await renderList();
        expect(
          container.getAllByAltText(/Doctor Image/i).length > 0
        ).toBeTruthy();
        expect(container.getAllByText(/Jaco David/i).length > 0).toBeTruthy();
        expect(container.getAllByText(/Ballwin/i).length > 0).toBeTruthy();
        expect(
          container.getAllByText(/568 Allens Mill Rd/i).length > 0
        ).toBeTruthy();
        expect(container.getAllByText(/Specialties/i).length > 0).toBeTruthy();
        expect(container.getAllByText(/Phone/i).length > 0).toBeTruthy();
        expect(container.getAllByText(/Email/i).length > 0).toBeTruthy();
        expect(container.getAllByText(/View Profile/i).length > 0).toBeTruthy();
        expect(
          container.getAllByTestId("schedule-btn").length > 0
        ).toBeTruthy();
      }
    );

    when(
      "User clicks on any of the doctor/ optometrist listed there",
      async () => {
        container = await renderList();
        expect(container.getAllByText(/View Profile/i)[0]).toBeInTheDocument();
        fireEvent.click(container.getAllByText(/View Profile/i)[0]);
      }
    );

    then(
      "User should be able to view the following fields below:",
      async (table) => {
        container = await renderDetail();
        expect(container.getByText(/About Jaco/i)).toBeInTheDocument();
        expect(
          container.getByTestId(
            TEST_ID_RAW.APPOINTMENT_TEST_ID.PROVIDER_PROFILE.image
          )
        ).toBeInTheDocument();
        expect(
          container.getAllByText(/568 Allens Mill Rd/i).length > 0
        ).toBeTruthy();
        expect(
          container.getAllByText(/Specialties and Sub-specialties:/i)[0]
        ).toBeInTheDocument();
        expect(container.getByLabelText(/Rating/i)).toBeInTheDocument();
        expect(container.getByText(/Gender/i)).toBeInTheDocument();
        expect(container.getByText(/Primary Address/i)).toBeInTheDocument();
        expect(container.getByText(/Languages/i)).toBeInTheDocument();
        expect(
          container.getAllByText(/In-network insurances/i)[0]
        ).toBeInTheDocument();
        expect(container.getAllByText(/Education/i)[1]).toBeInTheDocument();
        expect(
          container.getByText(/Memberships and Afilliations/i)
        ).toBeInTheDocument();
      }
    );

    when(
      "User clicks on the option to schedule appointment from the doctor/ optometrist bio screen",
      async () => {
        container = await renderDetail();
        expect(container.getAllByTestId("schedule-btn")[1]).toBeInTheDocument();
        fireEvent.click(container.getAllByTestId("schedule-btn")[1]);
      }
    );

    then(
      "User should be redirected to schedule appointment screen with location of the provider pre-filled as user’s searched location",
      () => {
        renderResultsScreen();
      }
    );

    and("User should be able to view today’s date as the date searched", () => {
      defaultValidation();
    });

    when(
      "The provider from whose bio user got redirected to schedule appointment  at top",
      () => {
        defaultValidation();
      }
    );

    then(
      "User should be able to view the list of providers on the results in schedule appointment screen",
      () => {
        defaultValidation();
      }
    );

    and(
      "User should be able to go through the process of scheduling the appointment from patient portal with that provider",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-20_STORY_EPP-4476 - Verify User should be able to go through the process of scheduling the appointment from patient portal with that provider - within 3 seconds", ({
    given,
    when,
    then,
    and,
  }) => {
    given("User launch Patient Portal url", () => {
      defaultValidation();
    });

    when("User is logged in to the application", async () => {
      container = await renderLogin();
    });

    then(/^User lands to the "(.*)" screen$/, (arg0) => {
      defaultValidation();
    });

    and(/^User should see "(.*)"  menu$/, (arg0) => {
      defaultValidation();
    });

    when(/^User selects the "(.*)" menu$/, (arg0) => {
      defaultValidation();
    });

    then(
      "User should be navigated to the screen to view their care team i.e. Doctors/ Optometrists",
      async () => {
        container = await renderList();
        expect(container.getByText(/My Care Team/i)).toBeInTheDocument();
      }
    );

    and(
      "User should be see the list of doctors/ optometrist they have consulted with the following details",
      async (table) => {
        container = await renderList();
        expect(
          container.getAllByAltText(/Doctor Image/i).length > 0
        ).toBeTruthy();
        expect(container.getAllByText(/Jaco David/i).length > 0).toBeTruthy();
        expect(container.getAllByText(/Ballwin/i).length > 0).toBeTruthy();
        expect(
          container.getAllByText(/568 Allens Mill Rd/i).length > 0
        ).toBeTruthy();
        expect(container.getAllByText(/Specialties/i).length > 0).toBeTruthy();
        expect(container.getAllByText(/Phone/i).length > 0).toBeTruthy();
        expect(container.getAllByText(/Email/i).length > 0).toBeTruthy();
        expect(container.getAllByText(/View Profile/i).length > 0).toBeTruthy();
        expect(
          container.getAllByTestId("schedule-btn").length > 0
        ).toBeTruthy();
      }
    );

    when(
      "User clicks on any of the doctor/ optometrist listed there",
      async () => {
        container = await renderList();
        expect(container.getAllByText(/View Profile/i)[0]).toBeInTheDocument();
        fireEvent.click(container.getAllByText(/View Profile/i)[0]);
      }
    );

    then(
      "User should be able to view the following fields below:",
      async (table) => {
        container = await renderDetail();
        expect(container.getByText(/About Jaco/i)).toBeInTheDocument();
        expect(
          container.getByTestId(
            TEST_ID_RAW.APPOINTMENT_TEST_ID.PROVIDER_PROFILE.image
          )
        ).toBeInTheDocument();
        expect(
          container.getAllByText(/568 Allens Mill Rd/i).length > 0
        ).toBeTruthy();
        expect(
          container.getAllByText(/Specialties and Sub-specialties:/i)[0]
        ).toBeInTheDocument();
        expect(container.getByLabelText(/Rating/i)).toBeInTheDocument();
        expect(container.getByText(/Gender/i)).toBeInTheDocument();
        expect(container.getByText(/Primary Address/i)).toBeInTheDocument();
        expect(container.getByText(/Languages/i)).toBeInTheDocument();
        expect(
          container.getAllByText(/In-network insurances/i)[0]
        ).toBeInTheDocument();
        expect(container.getAllByText(/Education/i)[1]).toBeInTheDocument();
        expect(
          container.getByText(/Memberships and Afilliations/i)
        ).toBeInTheDocument();
      }
    );

    when(
      "User clicks on the option to schedule appointment from the doctor/ optometrist bio screen",
      async () => {
        container = await renderDetail();
        expect(container.getAllByTestId("schedule-btn")[1]).toBeInTheDocument();
        fireEvent.click(container.getAllByTestId("schedule-btn")[1]);
      }
    );

    then(
      "User should be redirected to schedule appointment screen with location of the provider pre-filled as user’s searched location",
      () => {
        renderResultsScreen();
      }
    );

    and("User should be able to view today’s date as the date searched", () => {
      defaultValidation();
    });

    when(
      "The provider from whose bio user got redirected to schedule appointment  at top",
      () => {
        defaultValidation();
      }
    );

    then(
      "User should be able to view the list of providers on the results in schedule appointment screen",
      () => {
        defaultValidation();
      }
    );

    and(
      "User should be able to go through the process of scheduling the appointment from patient portal with that provider",
      () => {
        defaultValidation();
      }
    );

    and(/^User should see the page loads within (\d+) seconds$/, (arg0) => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-20_STORY_EPP-1543 - Verify User should not see the any errors script when user clicks F12 on the console - when user got redirected to schedule appointment  at top", ({
    given,
    when,
    then,
    and,
  }) => {
    given("User launch Patient Portal url", () => {
      defaultValidation();
    });

    when("User is logged in to the application", async () => {
      container = await renderLogin();
    });

    then(/^User lands to the "(.*)" screen$/, (arg0) => {
      defaultValidation();
    });

    and(/^User should see "(.*)"  menu$/, (arg0) => {
      defaultValidation();
    });

    when(/^User selects the "(.*)" menu$/, (arg0) => {
      defaultValidation();
    });

    then(
      "User should be navigated to the screen to view their care team i.e. Doctors/ Optometrists",
      async () => {
        container = await renderList();
        expect(container.getByText(/My Care Team/i)).toBeInTheDocument();
      }
    );

    and(
      "User should be see the list of doctors/ optometrist they have consulted with the following details",
      async (table) => {
        container = await renderList();
        expect(
          container.getAllByAltText(/Doctor Image/i).length > 0
        ).toBeTruthy();
        expect(container.getAllByText(/Jaco David/i).length > 0).toBeTruthy();
        expect(container.getAllByText(/Ballwin/i).length > 0).toBeTruthy();
        expect(
          container.getAllByText(/568 Allens Mill Rd/i).length > 0
        ).toBeTruthy();
        expect(container.getAllByText(/Specialties/i).length > 0).toBeTruthy();
        expect(container.getAllByText(/Phone/i).length > 0).toBeTruthy();
        expect(container.getAllByText(/Email/i).length > 0).toBeTruthy();
        expect(container.getAllByText(/View Profile/i).length > 0).toBeTruthy();
        expect(
          container.getAllByTestId("schedule-btn").length > 0
        ).toBeTruthy();
      }
    );

    when(
      "User clicks on any of the doctor/ optometrist listed there",
      async () => {
        container = await renderList();
        expect(container.getAllByText(/View Profile/i)[0]).toBeInTheDocument();
        fireEvent.click(container.getAllByText(/View Profile/i)[0]);
      }
    );

    then(
      "User should be able to view the following fields below:",
      async (table) => {
        container = await renderDetail();
        expect(container.getByText(/About Jaco/i)).toBeInTheDocument();
        expect(
          container.getByTestId(
            TEST_ID_RAW.APPOINTMENT_TEST_ID.PROVIDER_PROFILE.image
          )
        ).toBeInTheDocument();
        expect(
          container.getAllByText(/568 Allens Mill Rd/i).length > 0
        ).toBeTruthy();
        expect(
          container.getAllByText(/Specialties and Sub-specialties:/i)[0]
        ).toBeInTheDocument();
        expect(container.getByLabelText(/Rating/i)).toBeInTheDocument();
        expect(container.getByText(/Gender/i)).toBeInTheDocument();
        expect(container.getByText(/Primary Address/i)).toBeInTheDocument();
        expect(container.getByText(/Languages/i)).toBeInTheDocument();
        expect(
          container.getAllByText(/In-network insurances/i)[0]
        ).toBeInTheDocument();
        expect(container.getAllByText(/Education/i)[1]).toBeInTheDocument();
        expect(
          container.getByText(/Memberships and Afilliations/i)
        ).toBeInTheDocument();
      }
    );

    when(
      "User clicks on the option to schedule appointment from the doctor/ optometrist bio screen",
      async () => {
        container = await renderDetail();
        expect(container.getAllByTestId("schedule-btn")[1]).toBeInTheDocument();
        fireEvent.click(container.getAllByTestId("schedule-btn")[1]);
      }
    );

    then(
      "User should be redirected to schedule appointment screen with location of the provider pre-filled as user’s searched location",
      () => {
        renderResultsScreen();
      }
    );

    and("User should be able to view today’s date as the date searched", () => {
      defaultValidation();
    });

    when(
      "The provider from whose bio user got redirected to schedule appointment  at top",
      () => {
        defaultValidation();
      }
    );

    then(
      "User should be able to view the list of providers on the results in schedule appointment screen",
      () => {
        defaultValidation();
      }
    );

    and(
      "User should be able to go through the process of scheduling the appointment from patient portal with that provider",
      () => {
        defaultValidation();
      }
    );

    and(/^User should see the page loads within (\d+) seconds$/, (arg0) => {
      defaultValidation();
    });

    when(/^user clicks on F(\d+) on the console$/, (arg0) => {
      defaultValidation();
    });

    then("user should not to see any errors script", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-14_STORY_EPP-1543-Negative Test Cases-Verify user should see the error message when the internet service is unavailable - when user got redirected to schedule appointment  at top", ({
    given,
    when,
    then,
    and,
  }) => {
    given("User launch Patient Portal url", () => {
      defaultValidation();
    });

    when("User is logged in to the application", async () => {
      container = await renderLogin();
    });

    then(/^User lands to the "(.*)" screen$/, (arg0) => {
      defaultValidation();
    });

    and(/^User should see "(.*)"  menu$/, (arg0) => {
      defaultValidation();
    });

    when(/^User selects the "(.*)" menu$/, (arg0) => {
      defaultValidation();
    });

    then(
      "User should be navigated to the screen to view their care team i.e. Doctors/ Optometrists",
      async () => {
        container = await renderList();
        expect(container.getByText(/My Care Team/i)).toBeInTheDocument();
      }
    );

    and(
      "User should be see the list of doctors/ optometrist they have consulted with the following details",
      async (table) => {
        container = await renderList();
        expect(
          container.getAllByAltText(/Doctor Image/i).length > 0
        ).toBeTruthy();
        expect(container.getAllByText(/Jaco David/i).length > 0).toBeTruthy();
        expect(container.getAllByText(/Ballwin/i).length > 0).toBeTruthy();
        expect(
          container.getAllByText(/568 Allens Mill Rd/i).length > 0
        ).toBeTruthy();
        expect(container.getAllByText(/Specialties/i).length > 0).toBeTruthy();
        expect(container.getAllByText(/Phone/i).length > 0).toBeTruthy();
        expect(container.getAllByText(/Email/i).length > 0).toBeTruthy();
        expect(container.getAllByText(/View Profile/i).length > 0).toBeTruthy();
        expect(
          container.getAllByTestId("schedule-btn").length > 0
        ).toBeTruthy();
      }
    );

    when(
      "User clicks on any of the doctor/ optometrist listed there",
      async () => {
        container = await renderList();
        expect(container.getAllByText(/View Profile/i)[0]).toBeInTheDocument();
        fireEvent.click(container.getAllByText(/View Profile/i)[0]);
      }
    );

    then(
      "User should be able to view the following fields below:",
      async (table) => {
        container = await renderDetail();
        expect(container.getByText(/About Jaco/i)).toBeInTheDocument();
        expect(
          container.getByTestId(
            TEST_ID_RAW.APPOINTMENT_TEST_ID.PROVIDER_PROFILE.image
          )
        ).toBeInTheDocument();
        expect(
          container.getAllByText(/568 Allens Mill Rd/i).length > 0
        ).toBeTruthy();
        expect(
          container.getAllByText(/Specialties and Sub-specialties:/i)[0]
        ).toBeInTheDocument();
        expect(container.getByLabelText(/Rating/i)).toBeInTheDocument();
        expect(container.getByText(/Gender/i)).toBeInTheDocument();
        expect(container.getByText(/Primary Address/i)).toBeInTheDocument();
        expect(container.getByText(/Languages/i)).toBeInTheDocument();
        expect(
          container.getAllByText(/In-network insurances/i)[0]
        ).toBeInTheDocument();
        expect(container.getAllByText(/Education/i)[1]).toBeInTheDocument();
        expect(
          container.getByText(/Memberships and Afilliations/i)
        ).toBeInTheDocument();
      }
    );

    when(
      "User clicks on the option to schedule appointment from the doctor/ optometrist bio screen",
      async () => {
        container = await renderDetail();
        expect(container.getAllByTestId("schedule-btn")[1]).toBeInTheDocument();
        fireEvent.click(container.getAllByTestId("schedule-btn")[1]);
      }
    );

    then(
      "User should be redirected to schedule appointment screen with location of the provider pre-filled as user’s searched location",
      () => {
        renderResultsScreen();
      }
    );

    and("User should be able to view today’s date as the date searched", () => {
      defaultValidation();
    });

    when(
      "The provider from whose bio user got redirected to schedule appointment  at top",
      () => {
        defaultValidation();
      }
    );

    and("the internet service is unavailable", async () => {
      const headerText = /Clarkson Eyecare logo/i;
      act(() => {
        container = render(
          <App
            Component={Bio}
            pageProps={{
              bio: "56bafbaf-6bc6-47d2-b3ab-5cee17cf7e30",
              googleApiKey: "123",
            }}
          />
        );
      });
      await waitFor(() => container.getAllByLabelText(headerText));
      let goOffline = new window.Event("offline");
      act(() => {
        window.dispatchEvent(goOffline);
      });
      await waitFor(() => container.getByText(/No Internet Connection/i));
    });

    then("user should see the appropriate error message", () => {
      const text = container.getByText(/No Internet Connection/i);
      expect(text).toBeInTheDocument();
    });
  });

  test("EPIC_EPP-14_STORY_EPP-1543-Negative Test Cases-Verify user should see the error message when the service is unavailable - when user got redirected to schedule appointment  at top", ({
    given,
    when,
    then,
    and,
  }) => {
    given("User launch Patient Portal url", () => {
      defaultValidation();
    });

    when("User is logged in to the application", async () => {
      container = await renderLogin();
    });

    then(/^User lands to the "(.*)" screen$/, (arg0) => {
      defaultValidation();
    });

    and(/^User should see "(.*)"  menu$/, (arg0) => {
      defaultValidation();
    });

    when(/^User selects the "(.*)" menu$/, (arg0) => {
      defaultValidation();
    });

    then(
      "User should be navigated to the screen to view their care team i.e. Doctors/ Optometrists",
      async () => {
        container = await renderList();
        expect(container.getByText(/My Care Team/i)).toBeInTheDocument();
      }
    );

    and(
      "User should be see the list of doctors/ optometrist they have consulted with the following details",
      async (table) => {
        container = await renderList();
        expect(
          container.getAllByAltText(/Doctor Image/i).length > 0
        ).toBeTruthy();
        expect(container.getAllByText(/Jaco David/i).length > 0).toBeTruthy();
        expect(container.getAllByText(/Ballwin/i).length > 0).toBeTruthy();
        expect(
          container.getAllByText(/568 Allens Mill Rd/i).length > 0
        ).toBeTruthy();
        expect(container.getAllByText(/Specialties/i).length > 0).toBeTruthy();
        expect(container.getAllByText(/Phone/i).length > 0).toBeTruthy();
        expect(container.getAllByText(/Email/i).length > 0).toBeTruthy();
        expect(container.getAllByText(/View Profile/i).length > 0).toBeTruthy();
        expect(
          container.getAllByTestId("schedule-btn").length > 0
        ).toBeTruthy();
      }
    );

    when(
      "User clicks on any of the doctor/ optometrist listed there",
      async () => {
        container = await renderList();
        expect(container.getAllByText(/View Profile/i)[0]).toBeInTheDocument();
        fireEvent.click(container.getAllByText(/View Profile/i)[0]);
      }
    );

    then(
      "User should be able to view the following fields below:",
      async (table) => {
        container = await renderDetail();
        expect(container.getByText(/About Jaco/i)).toBeInTheDocument();
        expect(
          container.getByTestId(
            TEST_ID_RAW.APPOINTMENT_TEST_ID.PROVIDER_PROFILE.image
          )
        ).toBeInTheDocument();
        expect(
          container.getAllByText(/568 Allens Mill Rd/i).length > 0
        ).toBeTruthy();
        expect(
          container.getAllByText(/Specialties and Sub-specialties:/i)[0]
        ).toBeInTheDocument();
        expect(container.getByLabelText(/Rating/i)).toBeInTheDocument();
        expect(container.getByText(/Gender/i)).toBeInTheDocument();
        expect(container.getByText(/Primary Address/i)).toBeInTheDocument();
        expect(container.getByText(/Languages/i)).toBeInTheDocument();
        expect(
          container.getAllByText(/In-network insurances/i)[0]
        ).toBeInTheDocument();
        expect(container.getAllByText(/Education/i)[1]).toBeInTheDocument();
        expect(
          container.getByText(/Memberships and Afilliations/i)
        ).toBeInTheDocument();
      }
    );

    when(
      "User clicks on the option to schedule appointment from the doctor/ optometrist bio screen",
      async () => {
        container = await renderDetail();
        expect(container.getAllByTestId("schedule-btn")[1]).toBeInTheDocument();
        fireEvent.click(container.getAllByTestId("schedule-btn")[1]);
      }
    );

    then(
      "User should be redirected to schedule appointment screen with location of the provider pre-filled as user’s searched location",
      () => {
        renderResultsScreen();
      }
    );

    and("User should be able to view today’s date as the date searched", () => {
      defaultValidation();
    });

    when(
      "The provider from whose bio user got redirected to schedule appointment  at top",
      () => {
        defaultValidation();
      }
    );

    and("the service is unavailable", async () => {
      const headerText = /Clarkson Eyecare logo/i;
      act(() => {
        container = render(
          <App
            Component={Bio}
            pageProps={{
              bio: "56bafbaf-6bc6-47d2-b3ab-5cee17cf7e30",
              googleApiKey: "123",
            }}
          />
        );
      });
      await waitFor(() => container.getAllByLabelText(headerText));
      let goOffline = new window.Event("offline");
      act(() => {
        window.dispatchEvent(goOffline);
      });
      await waitFor(() => container.getByText(/No Internet Connection/i));
    });

    then("user should see the appropriate error messager", () => {
      const text = container.getByText(/No Internet Connection/i);
      expect(text).toBeInTheDocument();
    });
  });
});
