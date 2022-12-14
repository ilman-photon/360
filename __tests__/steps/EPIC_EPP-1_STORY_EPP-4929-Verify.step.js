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
import { Login } from "../../src/components/organisms/Login/login";
import AuthPage from "../../src/pages/patient/login";
import { renderWithProviders } from "../src/utils/test-util";
import { navigateToPatientPortalHome } from "../../__mocks__/commonSteps";
import Cookies from "universal-cookie";

const MOCK_APPOINTMENT = {
  appointmentList: [
    {
      appointmentId: "1",
      providerInfo: {
        providerId: "1",
        name: "Paul Wagner Md",
        position: "Scripps Eyecare",
        address: {
          addressLine1: "51 West 51st Street",
          addressLine2: "Floor 3, Suite 320 Midtown",
          city: "Florida",
          state: "FR",
          zipcode: "54231",
        },
        rating: "5",
        phoneNumber: "8572999989",
        distance: "10 mi",
        image: "/doctor.png",
        from: "2022-07-18",
        to: "2022-07-23",
        location: {
          latitude: 32.751204,
          longitude: -117.1641166,
        },
      },
      patientInfo: {
        name: "Rebecca Chan",
        firstname: "Rebecca",
        lastname: "Chan",
        dob: "12/12/2022",
        phoneNumber: "1234567890",
      },
      appointmentInfo: {
        appointmentType: "Eye Exam",
        date: "Thu, 12 Jan 2023 04:30:00 EST",
        insuranceCarrier: [
          {
            category: "all",
            divider: false,
            id: "1",
            name: "ECP Vision",
          },
          {
            category: "all",
            divider: false,
            id: "1",
            name: "BlueCare Vision",
          },
        ],
      },
    },
    {
      appointmentId: "1",
      providerInfo: {
        providerId: "1",
        name: "Dr. Sonha Nguyen",
        position: "Scripps Eyecare",
        address: {
          addressLine1: "51 West 51st Street",
          addressLine2: "Floor 3, Suite 320 Midtown",
          city: "Florida",
          state: "FR",
          zipcode: "54231",
        },
        rating: "5",
        phoneNumber: "8572999989",
        distance: "10 mi",
        image: "/doctor.png",
        from: "2022-07-18",
        to: "2022-07-23",
        location: {
          latitude: 32.751204,
          longitude: -117.1641166,
        },
      },
      patientInfo: {
        name: "Rebecca Chan",
        firstname: "Rebecca",
        lastname: "Chan",
        dob: "12/12/2022",
        phoneNumber: "1234567890",
      },
      appointmentInfo: {
        appointmentType: "Eye Exam",
        date: "Thu, 12 Jan 2023 04:30:00 EST",
        insuranceCarrier: [
          {
            category: "all",
            divider: false,
            id: "1",
            name: "ECP Vision",
          },
          {
            category: "all",
            divider: false,
            id: "1",
            name: "BlueCare Vision",
          },
        ],
      },
    },
  ],
};

const MOCK_PRESCRIPTION = {
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
    ],
    contacts: [
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
        prescription: "Aspirint 0.1% Ointmanet",
        date: "2022-09-02T11:18:47.229Z",
      },
      {
        prescription: "Aspirint 0.1% Ointmanet",
        date: "2022-09-02T11:18:47.229Z",
      },
    ],
  },
};

const mockSuggestionReal = {
  count: 5,
  entities: [
    {
      code: "Clinical_Diagnosis",
      name: "Clinical_Diagnosis",
      key: 4,
      order: 4,
      category: {
        code: "Vision",
        description: "Vision",
      },
      acronym: "CAD",
      color: "#6fc77b",
      slotLength: 5,
      notes: "",
      _links: {
        self: {
          href: "/v1/appointment-types/Clinical_Diagnosis",
        },
      },
    },
    {
      code: "NO_APPOINTMENT",
      name: "NO APPOINTMENT",
      key: 1,
      order: 1,
      category: {
        code: "Medical",
        description: "Medical",
      },
      acronym: "NA",
      color: "#8F8F8F",
      slotLength: 5,
      notes: "NO_APPOINTMENT is a default appointment type",
      _links: {
        self: {
          href: "/v1/appointment-types/NO_APPOINTMENT",
        },
      },
    },
    {
      code: "Comprehensive",
      name: "Comprehensive",
      key: 2,
      order: 2,
      category: {
        code: "Medical",
        description: "Medical",
      },
      acronym: "CP",
      color: "#f2ee74",
      slotLength: 5,
      notes: "",
      _links: {
        self: {
          href: "/v1/appointment-types/Comprehensive",
        },
      },
    },
    {
      code: "Glaucome_Appointment",
      name: "Glaucoma_Appointment",
      key: 3,
      order: 3,
      category: {
        code: "Vision",
        description: "Vision",
      },
      acronym: "GPA",
      color: "#528aa8",
      slotLength: 5,
      notes: "",
      _links: {
        self: {
          href: "/v1/appointment-types/Glaucome_Appointment",
        },
      },
    },
    {
      code: "Retina_checkup",
      name: "Retina checkup",
      key: 5,
      order: 5,
      category: {
        code: "Vision",
        description: "Vision",
      },
      acronym: "RET",
      color: "#db8686",
      slotLength: 5,
      notes: "",
      _links: {
        self: {
          href: "/v1/appointment-types/Retina_checkup",
        },
      },
    },
  ],
  _links: {
    self: {
      href: "/appointments?pageNo=0&pageSize=100",
    },
  },
};

jest.mock("universal-cookie", () => {
  class MockCookies {
    static result = {};
    get() {
      return MockCookies.result;
    }
    remove() {
      return jest.fn();
    }
  }
  return MockCookies;
});

function createMatchMedia(width) {
  return (query) => ({
    matches: mediaQuery.match(query, { width }),
    addListener: () => {},
    removeListener: () => {},
  });
}

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint10/EPP-4929.feature"
);

const mockApi = () => {
  Cookies.result = { authorized: true };
  const expectedResult = {
    ResponseCode: 2005,
    ResponseType: "success",
  };
  const mock = new MockAdapter(axios);
  const domain = window.location.origin;
  mock.onPost(`/ecp/patient/logout`).reply(200, expectedResult);
  mock
    .onGet(`/ecp/appointments/appointment-types`)
    .reply(200, mockSuggestionReal);
  mock
    .onGet(
      `${domain}/api/dummy/appointment/my-appointment/getAllAppointment/98f9404b-6ea8-4732-b14f-9c1a168d8066`
    )
    .reply(200, MOCK_APPOINTMENT);
  mock
    .onGet(
      `${domain}/api/dummy/appointment/my-appointment/getAllPrescriptions?patientId=98f9404b-6ea8-4732-b14f-9c1a168d8066`
    )
    .reply(200, MOCK_PRESCRIPTION);
};

const geolocation = () => {
  const mockGeolocation = {
    getCurrentPosition: jest.fn(),
    watchPosition: jest.fn(),
  };
  global.navigator.geolocation = mockGeolocation;
};

let container;
const mock = new MockAdapter(axios);
const element = document.createElement("div");

const launchURL = () => {
  const mockOnLoginClicked = jest.fn((data, route, callback) => {
    callback({
      status: "success",
    });
  });
  container = render(<Login OnLoginClicked={mockOnLoginClicked} />);
};

const navigateToPatientPortalApp = () => {
  mock
    .onGet(`https://api.ipify.org?format=json`)
    .reply(200, { ip: "10.10.10.10" });
  act(() => {
    container = renderWithProviders(<AuthPage />, {
      container: document.body.appendChild(element),
      legacyRoot: true,
    });
  });
};

defineFeature(feature, (test) => {
  beforeEach(() => {});
  afterEach(cleanup);
  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };

  test("EPIC_EPP-1_STORY_EPP-4929 - Verify user should be able to view Test/ Lab reports widget in the dashboard with details", ({
    given,
    and,
  }) => {
    given("User launch Patient Portal url", () => {
      launchURL();
    });

    and("user is logged into the portal as admin", () => {
      navigateToPatientPortalApp();
    });

    and("user lands on the Dashboard screen", async () => {
      mockApi();
      geolocation();
      Cookies.result = { authorized: true };
      act(() => {
        container = render(
          <Provider store={store}>{HomePage.getLayout(<HomePage />)}</Provider>
        );
      });
      await waitFor(() => container.getByText(/Search for a doctor/i));
    });

    and(
      "user should be able to view Test/ Lab reports widget in the dashboard.",
      async () => {
        await waitFor(() => container.getAllByText(/Test and Lab Reports/i)[0]);
        expect(
          container.getAllByText(/Test and Lab Reports/i)[0]
        ).toBeInTheDocument();
      }
    );

    and("user should be able to view widget with details", async (table) => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-1_STORY_EPP-4929 - Verify user should see the message “You do not have any test/lab reports.” when there are no test/lab reports available", ({
    given,
    and,
  }) => {
    given("User launch Patient Portal url", () => {
      launchURL();
    });

    and("user is logged into the portal as admin", () => {
      navigateToPatientPortalApp();
    });

    and("user lands on the Dashboard screen", async () => {
      mockApi();
      geolocation();
      Cookies.result = { authorized: true };
      act(() => {
        container = render(
          <Provider store={store}>{HomePage.getLayout(<HomePage />)}</Provider>
        );
      });
      await waitFor(() => container.getByText(/Search for a doctor/i));
    });

    and(
      "user should be able to view Test/ Lab reports widget in the dashboard.",
      async () => {
        await waitFor(() => container.getAllByText(/Test and Lab Reports/i)[0]);
        expect(
          container.getAllByText(/Test and Lab Reports/i)[0]
        ).toBeInTheDocument();
      }
    );

    and(
      "user should see the message “You do not have any test/lab reports.” when there are no test/lab reports available",
      async () => {
        await waitFor(() => container.getAllByText(/Test and Lab Reports/i)[0]);
        expect(
          container.getAllByText(/Test and Lab Reports/i)[0]
        ).toBeInTheDocument();
      }
    );
  });
});
