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
} from "../../__mocks__/commonSteps";

const useRouter = jest.spyOn(require("next/router"), "useRouter");
const useGeolocated = jest.spyOn(require("react-geolocated"), "useGeolocated");

jest.mock("@react-google-maps/api", () => ({
  useLoadScript: () => ({
    isLoaded: true,
    loadError: null,
  }),
  GoogleMap: () => <div></div>,
  Marker: () => <Marker />,
}));

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint7/EPP-1543.feature"
);

defineFeature(feature, (test) => {
  let container;
  const mock = new MockAdapter(axios);
  const TEST_ID = constants.TEST_ID.BIOGRAPHY_TEST_ID;
  const TEST_ID_RAW = constants.TEST_ID;

  useGeolocated.mockReturnValue({
    coords: { latitude: 36.8493937, longitude: -76.0106753 },
    isGeolocationEnabled: true,
  });

  const providerListMock = [
    {
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
      office: [{
        name: "Ballwin",
        addressLine1: "568 Allens Mill Rd",
        addressLine2: "568 Allens Mill Rd",
        city: "Yorktown",
        state: "VA",
        zip: "23692",
        _id: "4cd970a0-8529-4b44-a4c5-99c9f4e8d078",
      }],
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
    mock
      .onGet(
        `/ecp/appointments/getProvidersBasedOnPatientName?search.query=((patient.firstName=eq=dewo)AND(patient.lastName=eq=Simanjuntak))`
      )
      .reply(200, providerListMock);

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
      events: { on: jest.fn() },
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

  test("EPIC_EPP-20_STORY_EPP-1543 - Verify User navigates to the screen to view their care team i.e. Doctors/ Optometrists", ({
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
  });

  test("EPIC_EPP-20_STORY_EPP-1543 - Verify User clicks on any of the doctor/ optometrist listed there", ({
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
      }
    );
  });

  test("EPIC_EPP-20_STORY_EPP-1543 - Verify User should be able to view an option to schedule an appointment with that provider", ({
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
      }
    );

    and(
      "User should be able to view an option to schedule an appointment with that provider",
      async () => {
        container = await renderDetail();
        expect(container.getAllByTestId("schedule-btn")[1]).toBeInTheDocument();
      }
    );
  });

  test("EPIC_EPP-14_STORY_EPP-1543-Negative Test Cases-Verify user should see the error message when the internet service is unavailable - when User clicks on any of the doctor/ optometrist listed there", ({
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

    and("the Internet service is unavailable", async () => {
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

  test("EPIC_EPP-14_STORY_EPP-1543-Negative Test Cases-Verify user should see the error message when the service is unavailable - when User clicks on any of the doctor/ optometrist listed there", ({
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

    then("user should see the appropriate error message", () => {
      const text = container.getByText(/No Internet Connection/i);
      expect(text).toBeInTheDocument();
    });
  });
});
