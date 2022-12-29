import {
  act,
  fireEvent,
  render,
  cleanup,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import { defineFeature, loadFeature } from "jest-cucumber";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import HomePage from "../../src/pages/patient";
import { Provider } from "react-redux";
import store from "../../src/store/store";
import mediaQuery from "css-mediaquery";
import SearchDoctorPage from "../../src/pages/patient/search-doctor";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint8/EPP-7224.feature",
  {
    tagFilter: "@included and not @excluded",
  }
);

const mockDoctorSearch = {
  entities: [
    {
      designation: "MBBS, MD",
      firstName: "Jaco",
      lastName: "David",
      nickName: "Jaco",
      employeeNumber: "755707",
      mi: "Jaco",
      dob: "02/07/1971",
      email: "eyecare@gmail.com",
      sex: {
        key: 11,
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
        specialization: "Glaucoma",
        rating: 9,
        language1: "Arabic",
        language2: "Chinese",
        language3: "German",
        profilePhoto: {
          digitalAsset: {
            uid: "d72b0b16-99ab-4ae4-aba3-13b81930b68a",
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
          name: "Edwardsville ",
          addressLine1: "700 12th St # A",
          city: "Bellingham",
          state: "WA",
          zip: "98225",
          _id: "cd68948d-aa9d-4100-a806-1afd2b227104",
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
    },
    {
      designation: "MD",
      firstName: "Robert",
      lastName: "Fox",
      nickName: "Robert",
      employeeNumber: "755708",
      mi: "Robert",
      dob: "02/07/1971",
      email: "robertF@ecp.com",
      sex: {
        key: 11,
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
        specialization: "Ophthalmology",
        rating: 9,
        language1: "Arabic",
        language2: "Chinese",
        language3: "German",
        profilePhoto: {
          digitalAsset: {
            uid: "d72b0b16-99ab-4ae4-aba3-13b81930b68a",
            fileName: "test",
            assetUrl: "/v1/patient",
            _version: "d72b0b16-99ab-4ae4-aba3-13b81930b77a",
          },
        },
      },
      offices: [
        {
          name: "Ballwin",
          addressLine2: "568 Allens Mill Rd",
          _id: "4cd970a0-8529-4b44-a4c5-99c9f4e8d078",
        },
        {
          name: "Edwardsville ",
          addressLine1: "700 12th St # A",
          city: "Bellingham",
          state: "WA",
          zip: "98225",
          _id: "cd68948d-aa9d-4100-a806-1afd2b227104",
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
    },
    {
      designation: "MBBS, MD",
      firstName: "John",
      lastName: "Doe",
      nickName: "John",
      employeeNumber: "755708",
      mi: "John",
      dob: "02/07/1971",
      email: "eyecare@gmail.com",
      sex: {
        key: 11,
        name: "M",
        order: 1,
        notes: "",
      },
      available: true,
      note: "Test",
      age: "51",
      address: {
        addressLine1: "3771 Pringle Drive",
        city: "Chicago",
        state: "IL",
        zip: "60610",
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
        specialization: "Dry Eye",
        rating: 9,
        language1: "Arabic",
        language2: "Chinese",
        language3: "German",
        profilePhoto: {
          digitalAsset: {
            uid: "c4ba4230-24b9-4b6b-af14-6907317c83e5",
            fileName: "test",
            assetUrl: "/v1/patient",
            _version: "d72b0b16-99ab-4ae4-aba3-13b81930b77a",
          },
        },
      },
      offices: [
        {
          name: "Chicago Eye Institute",
          addressLine1: "3771 Pringle Drive",
          city: "Chicago",
          state: "IL",
          zip: "Illinois",
          _id: "4cd970a0-8529-4b44-a4c5-99c9f4e8d078",
        },
        {
          name: "Edwardsville ",
          addressLine1: "700 12th St # A",
          city: "Bellingham",
          state: "WA",
          zip: "98225",
          _id: "cd68948d-aa9d-4100-a806-1afd2b227104",
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
    },
  ],
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

const locationMock = {
  cities: ["Yorktown", "Chicago"],
};

const specialtiesMock = ["Glaucoma", "Ophthalmology", "Dry Eye"];

const mockApi = () => {
  const mock = new MockAdapter(axios);
  const domain = window.location.origin;
  const userData = JSON.parse(localStorage.getItem("userData"));
  mock.onGet(`/ecp/appointments/appointment-types`).reply(200, {});
  mock
    .onGet(
      `${domain}/api/dummy/appointment/my-appointment/getAllAppointment/98f9404b-6ea8-4732-b14f-9c1a168d8066`
    )
    .reply(200, {});
  mock
    .onGet(
      `${domain}/api/dummy/appointment/my-appointment/getAllPrescriptions?patientId=98f9404b-6ea8-4732-b14f-9c1a168d8066`
    )
    .reply(200, {});
  mock
    .onGet(`/ecp/digital-asset/v1/asset/d72b0b16-99ab-4ae4-aba3-13b81930b68a`)
    .reply(200, imageMock);
  mock
    .onGet(`/ecp/digital-asset/v1/asset/c4ba4230-24b9-4b6b-af14-6907317c83e5`)
    .reply(200, imageMock);
  mock
    .onGet(`/ecp/appointments/getDoctorDetails?pageSize=300&search.query=`)
    .reply(200, mockDoctorSearch);
  mock
    .onGet(
      `/ecp/appointments/getDoctorDetails?pageSize=300&search.query=((firstName=co=Robert)OR(lastName=co=Robert))`
    )
    .reply(200, mockDoctorSearch);
  mock
    .onGet(
      `/ecp/appointments/getDoctorDetails?pageSize=300&search.query=((firstName=co=Robert)OR(lastName=co=Robert)AND(offices.city=co=Chicago))`
    )
    .reply(200, mockDoctorSearch);
  mock.onGet(`/ecp/appointments/getOfficeDetails`).reply(200, locationMock);
  mock
    .onGet(
      `/ecp/appointments/getSpecialization?search.query=((entityName=eq=document)AND(attributeName=eq=specialization))`
    )
    .reply(200, { specializations: specialtiesMock });
  mock
    .onGet(
      `/ecp/patient/getPatientDocumentByCategory/98f9404b-6ea8-4732-b14f-9c1a168d8066/documents?pageSize=10&pageNo=0&sortBy=updated&sortOrder=dsc&search.query=((category=eq=EducationMaterials))`
    )
    .reply(200, {});
  mock
    .onGet(`/ecp/patientbillingsystem/getPatientCredits/${userData?.patientId}`)
    .reply(200, {});
  mock
    .onGet(
      `/ecp/patientbillingsystem/getInvoiceWithPatientDetails?search.query=((patient.uid=eq=${userData?.patientId}))`
    )
    .reply(200, {});
  mock
    .onGet(`/ecp/patient/phr/patientchart/${userData?.patientId}`)
    .reply(200, {});
  mock.onGet(`/ecp/testResult/${userData?.patientId}`).reply(200, {});
};

function createMatchMedia(width) {
  return (query) => ({
    matches: mediaQuery.match(query, { width }),
    addListener: () => {},
    removeListener: () => {},
  });
}

const geolocation = () => {
  const mockGeolocation = {
    getCurrentPosition: jest.fn(),
    watchPosition: jest.fn(),
  };
  global.navigator.geolocation = mockGeolocation;
};

defineFeature(feature, (test) => {
  let containerDashboard;
  let container;

  const renderDashboard = async () => {
    window.matchMedia = createMatchMedia("1980px");
    geolocation();
    containerDashboard = render(
      <Provider store={store}>{HomePage.getLayout(<HomePage />)}</Provider>
    );
    await waitFor(() => containerDashboard.getByText(/Search for a doctor/i));
  };

  const expectMenu = () => {
    expect(
      containerDashboard.getByLabelText("Dashboard menu")
    ).toBeInTheDocument();
    expect(
      containerDashboard.getByLabelText("Appointments menu")
    ).toBeInTheDocument();
    expect(
      containerDashboard.getByLabelText("Health Chart menu")
    ).toBeInTheDocument();
    expect(
      containerDashboard.getByLabelText("My Care Team menu")
    ).toBeInTheDocument();
    expect(
      containerDashboard.getByLabelText("Messaging menu")
    ).toBeInTheDocument();
    expect(
      containerDashboard.getByLabelText("Documents menu")
    ).toBeInTheDocument();
  };

  const clickAppointmentsMenu = () => {
    fireEvent.click(containerDashboard.getByLabelText("Appointments menu"));
  };

  const expectAppointmentsMenu = () => {
    expect(
      containerDashboard.getByLabelText("Find a Doctor menu")
    ).toBeInTheDocument();
    expect(
      containerDashboard.getByLabelText("Upcoming Appointments menu")
    ).toBeInTheDocument();
  };

  const clickFindDoctor = () => {
    fireEvent.click(containerDashboard.getByLabelText("Find a Doctor menu"));
  };

  const renderFindDoctor = async () => {
    window.matchMedia = createMatchMedia("1980px");
    act(() => {
      container = render(
        <Provider store={store}>
          {SearchDoctorPage.getLayout(<SearchDoctorPage />)}
        </Provider>
      );
    });
    await waitFor(() => container.getByText(/Doctor Search/i));
  };

  beforeEach(() => {
    window.matchMedia = createMatchMedia("1980px");
    mockApi();
    Object.defineProperty(document, "cookie", {
      writable: true,
      value: "authorized=true;accessToken=1234",
    });
  });

  afterEach(cleanup);

  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };

  test("EPIC_EPP-24_STORY_EPP-7224 - Verify User searches and selects a city to filter the doctors", ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch Patient Portal url", () => {
      defaultValidation();
    });

    and("user is logged into the portal", () => {
      defaultValidation();
    });

    and("user lands on the dashboard screen", async () => {
      await renderDashboard();
    });

    and("user should see Top Navigation Menu such as", (table) => {
      expectMenu();
    });

    when("User Click on Appointment menu", () => {
      clickAppointmentsMenu();
    });

    then(
      "Sub menu is displayed such as Find a Doctor, Upcoming & Past Appointment (TBD)",
      () => {
        expectAppointmentsMenu();
      }
    );

    when("user click on Find a Doctor", () => {
      clickFindDoctor();
    });

    then(
      "user should be able to navigated to search doctors screen",
      async () => {
        await renderFindDoctor();
      }
    );

    and(/^user click on (.*) field$/, (arg0) => {
      defaultValidation();
    });

    and("user enter some keyword", () => {
      fireEvent.change(container.container.querySelector("#doctor"), {
        target: { value: "Robert" },
      });
    });

    when("user click on search icon", async () => {
      fireEvent.click(container.getByTestId("search-btn"));
      await waitFor(() => {
        container.getByText(/Robert Fox/i);
      });
    });

    then("user should see result from keyword they search", () => {
      expect(container.getByText(/Robert Fox/i)).toBeInTheDocument();
    });

    and("user should view a card with basic details of a doctor", () => {
      expect(container.getByText(/Robert Fox/i)).toBeInTheDocument();
      expect(container.getByText(/Chicago Eye Institute/i)).toBeInTheDocument();
      expect(container.getAllByText("Email")[1]).toBeInTheDocument();
      expect(container.getAllByText("Phone")[1]).toBeInTheDocument();
      expect(container.getAllByText("Specialties")[1]).toBeInTheDocument();
    });

    when(/^user click on dropdown of (.*) field$/, (arg0) => {
      fireEvent.change(container.container.querySelector("#location"), {
        target: { value: "Chi" },
      });
    });

    and("user click on one of city from the list", async () => {
      fireEvent.click(container.getByText("Chicago"));
      fireEvent.click(container.getByTestId("search-btn"));
      await waitFor(() => {
        container.getByText(/Robert Fox/i);
      });
    });

    then(
      "user should be able to view list of doctor from the selected city",
      () => {
        expect(container.getByText(/Robert Fox/i)).toBeInTheDocument();
      }
    );
  });

  test("EPIC_EPP-24_STORY_EPP-7224 - Verify User able to view filter result from city that they selected", ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch Patient Portal url", () => {
      defaultValidation();
    });

    and("user is logged into the portal", () => {
      defaultValidation();
    });

    and("user lands on the dashboard screen", async () => {
      await renderDashboard();
    });
  });

  test("EPIC_EPP-24_STORY_EPP-7224 - Verify User able to view filter button to open overlay", ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch Patient Portal url", () => {
      defaultValidation();
    });

    and("user is logged into the portal", () => {
      defaultValidation();
    });

    and("user lands on the dashboard screen", async () => {
      await renderDashboard();
    });

    and("user should see Top Navigation Menu such as", (table) => {
      expectMenu();
    });

    when("User Click on Appointment menu", () => {
      clickAppointmentsMenu();
    });

    then(
      "Sub menu is displayed such as Find a Doctor, Upcoming & Past Appointment (TBD)",
      () => {
        expectAppointmentsMenu();
      }
    );

    when("user click on Find a Doctor", () => {
      clickFindDoctor();
    });

    then(
      "user should be able to navigated to search doctors screen",
      async () => {
        await renderFindDoctor();
      }
    );

    and(/^user click on (.*) field$/, (arg0) => {
      defaultValidation();
    });

    and("user enter some keyword", () => {
      fireEvent.change(container.container.querySelector("#doctor"), {
        target: { value: "Robert" },
      });
    });

    when("user click on search icon", async () => {
      fireEvent.click(container.getByTestId("search-btn"));
      await waitFor(() => {
        container.getByText(/Robert Fox/i);
      });
    });

    then("user should see result from keyword they search", () => {
      expect(container.getByText(/Robert Fox/i)).toBeInTheDocument();
    });

    and("user should view a card with basic details of a doctor", () => {
      expect(container.getByText(/Robert Fox/i)).toBeInTheDocument();
      expect(container.getByText(/Chicago Eye Institute/i)).toBeInTheDocument();
      expect(container.getAllByText("Email")[1]).toBeInTheDocument();
      expect(container.getAllByText("Phone")[1]).toBeInTheDocument();
      expect(container.getAllByText("Specialties")[1]).toBeInTheDocument();
    });

    when(/^user click on dropdown of (.*) field$/, (arg0) => {
      fireEvent.change(container.container.querySelector("#location"), {
        target: { value: "Chi" },
      });
    });

    and("user click on one of city from the list", async () => {
      fireEvent.click(container.getByText("Chicago"));
      fireEvent.click(container.getByTestId("search-btn"));
      await waitFor(() => {
        container.getByText(/Robert Fox/i);
      });
    });

    then(
      "user should be able to view list of doctor from the selected city",
      () => {
        expect(container.getByText(/Robert Fox/i)).toBeInTheDocument();
      }
    );

    and("user able to view filter button to open overlay", () => {
      expect(container.getByText("Filters")).toBeInTheDocument();
    });
  });
});
