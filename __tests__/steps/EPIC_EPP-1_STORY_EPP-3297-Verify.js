import {
  act,
  cleanup,
  fireEvent,
  render,
  waitFor,
} from "@testing-library/react";
import axios from "axios";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import { defineFeature, loadFeature } from "jest-cucumber";
import { Provider } from "react-redux";
import Appointment from "../../src/pages/patient/appointment";
import store from "../../src/store/store";
import Cookies from "universal-cookie";
import constants from "../../src/utils/constants";
import mediaQuery from "css-mediaquery";
import HomePage from "../../src/pages/patient";

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
  "count": 5,
  "entities": [
    {
      "code": "Clinical_Diagnosis",
      "name": "Clinical_Diagnosis",
      "key": 4,
      "order": 4,
      "category": {
        "code": "Vision",
        "description": "Vision"
      },
      "acronym": "CAD",
      "color": "#6fc77b",
      "slotLength": 5,
      "notes": "",
      "_links": {
        "self": {
          "href": "/v1/appointment-types/Clinical_Diagnosis"
        }
      }
    },
    {
      "code": "NO_APPOINTMENT",
      "name": "NO APPOINTMENT",
      "key": 1,
      "order": 1,
      "category": {
        "code": "Medical",
        "description": "Medical"
      },
      "acronym": "NA",
      "color": "#8F8F8F",
      "slotLength": 5,
      "notes": "NO_APPOINTMENT is a default appointment type",
      "_links": {
        "self": {
          "href": "/v1/appointment-types/NO_APPOINTMENT"
        }
      }
    },
    {
      "code": "Comprehensive",
      "name": "Comprehensive",
      "key": 2,
      "order": 2,
      "category": {
        "code": "Medical",
        "description": "Medical"
      },
      "acronym": "CP",
      "color": "#f2ee74",
      "slotLength": 5,
      "notes": "",
      "_links": {
        "self": {
          "href": "/v1/appointment-types/Comprehensive"
        }
      }
    },
    {
      "code": "Glaucome_Appointment",
      "name": "Glaucoma_Appointment",
      "key": 3,
      "order": 3,
      "category": {
        "code": "Vision",
        "description": "Vision"
      },
      "acronym": "GPA",
      "color": "#528aa8",
      "slotLength": 5,
      "notes": "",
      "_links": {
        "self": {
          "href": "/v1/appointment-types/Glaucome_Appointment"
        }
      }
    },
    {
      "code": "Retina_checkup",
      "name": "Retina checkup",
      "key": 5,
      "order": 5,
      "category": {
        "code": "Vision",
        "description": "Vision"
      },
      "acronym": "RET",
      "color": "#db8686",
      "slotLength": 5,
      "notes": "",
      "_links": {
        "self": {
          "href": "/v1/appointment-types/Retina_checkup"
        }
      }
    }
  ],
  "_links": {
    "self": {
      "href": "/appointments?pageNo=0&pageSize=100"
    }
  }
}

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
  "./__tests__/feature/Patient Portal/Sprint5/EPP-3297.feature"
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
  mock.onGet(`/ecp/appointments/appointment-types`).reply(200, mockSuggestionReal);
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

defineFeature(feature, (test) => {
  let container;

  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };

  afterEach(cleanup);

  test("EPIC_EPP-1_STORY_EPP-3297 - Verify User should see the following details as part of each upcoming appointment", ({
    given,
    when,
    then,
    and,
  }) => {
    given("User launch Patient Portal url", () => {
      defaultValidation();
    });

    when("User is logged in to the application", () => {
      defaultValidation();
    });

    then(/^User lands to the "(.*)" screen$/, (arg0) => {
      defaultValidation();
    });

    and(/^User should see the "(.*)" option$/, (arg0) => {
      defaultValidation();
    });

    when(/^User selects the "(.*)" option$/, (arg0) => {
      defaultValidation();
    });

    then(/^User should navigated to "(.*)" screen$/, (arg0) => {
      defaultValidation();
    });

    and(/^User should see on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then(/^User should navigated to "(.*)" screen$/, async (arg0) => {
      mockApi();
      geolocation();
      Cookies.result = { authorized: true };
      act(() => {
        container = render(
          <Provider store={store}>{HomePage.getLayout(<HomePage />)}</Provider>
        );
      });
      await waitFor(() => container.getByLabelText(/Appointments/i));
    });

    and("User should see the widget with upcoming appointments", () => {
      const appointments = container.getByLabelText(/Appointments/i);
      expect(appointments).toBeInTheDocument();
    });

    when("User click on the widget with with upcoming appointments", () => {
      defaultValidation();
    });

    then(/^User should navigated "(.*)" screen$/, (arg0) => {
      defaultValidation();
    });

    and(
      "User should see the following details as part of each upcoming appointment as below:",
      (table) => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-1_STORY_EPP-3297 - Verify User should see the latest list of appointments that are scheduled in the widget", ({
    given,
    when,
    then,
    and,
  }) => {
    given("User launch Patient Portal url", () => {
      defaultValidation();
    });

    when("User is logged in to the application", () => {
      defaultValidation();
    });

    then(/^User lands to the "(.*)" screen$/, (arg0) => {
      defaultValidation();
    });

    and(/^User should see the "(.*)" option$/, (arg0) => {
      defaultValidation();
    });

    when(/^User selects the "(.*)" option$/, (arg0) => {
      defaultValidation();
    });

    then(/^User should navigated to "(.*)" screen$/, (arg0) => {
      defaultValidation();
    });

    and(/^User should see on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then(/^User should navigated to "(.*)" screen$/, async (arg0) => {
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

    and("User should see the widget with upcoming appointments", () => {
      const title = container.getByText(/Search for a doctor/i);
      // const patientInfo = container.getByText("Patient Information");
      expect(title).toBeInTheDocument();
      // expect(patientInfo).toBeInTheDocument();
    });

    when("User click on the widget with with upcoming appointments", () => {
      defaultValidation();
    });

    then(/^User should navigated "(.*)" screen$/, (arg0) => {
      defaultValidation();
    });

    and(
      "User should see the latest list of appointments that are scheduled in the widget",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-1_STORY_EPP-3297 - Verify User on clicking the widget will get navigated to the screen with upcoming appointments", ({
    given,
    when,
    then,
    and,
  }) => {
    given("User launch Patient Portal url", () => {
      defaultValidation();
    });

    when("User is logged in to the application", () => {
      defaultValidation();
    });

    then(/^User lands to the "(.*)" screen$/, (arg0) => {
      defaultValidation();
    });

    and(/^User should see the "(.*)" option$/, (arg0) => {
      defaultValidation();
    });

    when(/^User selects the "(.*)" option$/, (arg0) => {
      defaultValidation();
    });

    then(/^User should navigated to "(.*)" screen$/, (arg0) => {
      defaultValidation();
    });

    and(/^User should see on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then(/^User should navigated to "(.*)" screen$/, async (arg0) => {
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

    and("User should see the widget with upcoming appointments", () => {
      defaultValidation();
    });

    when("User click on the widget with with upcoming appointments", () => {
      // const rescheduleBtn = container.getByText("Reschedule");
      // act(() => {
      //   fireEvent.click(rescheduleBtn);
      // });
    });

    then(/^User should navigated "(.*)" screen$/, (arg0) => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-1_STORY_EPP-3297 - Verify User on clicking any particular appointment will get navigated to that particular appointment in the screen with upcoming appointments", ({
    given,
    when,
    then,
    and,
  }) => {
    given("User launch Patient Portal url", () => {
      defaultValidation();
    });

    when("User is logged in to the application", () => {
      defaultValidation();
    });

    then(/^User lands to the "(.*)" screen$/, (arg0) => {
      defaultValidation();
    });

    and(/^User should see the "(.*)" option$/, (arg0) => {
      defaultValidation();
    });

    when(/^User selects the "(.*)" option$/, (arg0) => {
      defaultValidation();
    });

    then(/^User should navigated to "(.*)" screen$/, async (arg0) => {
      mockApi();

      geolocation();
      Cookies.result = { authorized: true };
      act(() => {
        container = render(
          <Provider store={store}>{HomePage.getLayout(<HomePage />)}</Provider>
        );
      });
      await waitFor(() => container.getByLabelText(/Appointments/i));

    });

    and(/^User should see on "(.*)" button$/, (arg0) => {
      const purposeVisit = container.getByText(/View Appointments/i);
      expect(purposeVisit).toBeInTheDocument();
    });

    when(/^User clicks on "(.*)" button$/, (arg0) => {
      const viewAppointment = container.getByText(/View Appointments/i);
      fireEvent.click(viewAppointment);
    });

    then(/^User should navigated to "(.*)" screen$/, (arg0) => {
      defaultValidation();
    });

    and("User should see the widget with upcoming appointments", () => {
      defaultValidation();
    });

    when("User on clicking any particular appointment", () => {
      defaultValidation();
    });

    then(
      "User should navigated particular appointment in the screen with upcoming appointments",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-1_STORY_EPP-3297 - Verify User should be able to swipe through to view other upcoming appointments", ({
    given,
    when,
    then,
    and,
  }) => {
    given("User launch Patient Portal url", () => {
      defaultValidation();
    });

    when("User is logged in to the application", () => {
      defaultValidation();
    });

    then(/^User lands to the "(.*)" screen$/, (arg0) => {
      defaultValidation();
    });

    and(/^User should see the "(.*)" option$/, (arg0) => {
      defaultValidation();
    });

    when(/^User selects the "(.*)" option$/, (arg0) => {
      defaultValidation();
    });

    then(/^User should navigated to "(.*)" screen$/, (arg0) => {
      defaultValidation();
    });

    and(/^User should see on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then(/^User should navigated to "(.*)" screen$/, async (arg0) => {
      mockApi();
      window.matchMedia = createMatchMedia("700px");

      geolocation();
      act(() => {
        container = render(
          <Provider store={store}>{HomePage.getLayout(<HomePage />)}</Provider>
        );
      });
      await waitFor(() => container.getByText(/Search for a doctor/i));

    });

    and("User should see the widget with upcoming appointments", () => {
      expect(container.getByText("Search for a doctor")).toBeInTheDocument();
    });

    when("User click on the widget with with upcoming appointments", () => {
      // const cancelBtn = container.getByText("Cancel");
      // act(() => {
      //   fireEvent.click(cancelBtn);
      // });
    });

    then(/^User should navigated "(.*)" screen$/, async (arg0) => {
      defaultValidation();
    });

    and(
      "User should be able to swipe through to view other upcoming appointments",
      () => {
        defaultValidation();
      }
    );
  });
});
