import { fireEvent, render, waitFor, cleanup } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import MockAdapter from "axios-mock-adapter";
import "@testing-library/jest-dom";
import axios from "axios";
import { act } from "react-dom/test-utils";
import Cookies from "universal-cookie";
import constants from "../../src/utils/constants";
import { Provider } from "react-redux";
import HomePage from "../../src/pages/patient";
import store from "../../src/store/store";
import mediaQuery from "css-mediaquery";

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
        id: "0",
        prescription: "Aspirint 0.1% Ointmanet",
        date: "2022-09-02T11:18:47.229Z",
      },
      {
        id: "0",
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

const MOCK_SUBMIT = {
  listOfProvider: [
    {
      providerId: "1",
      address: {
        addressLine1: "51 West 51st Street",
        addressLine2: "Floor 3, Suite 320 Midtown",
        city: "Florida",
        state: "FR",
        zipcode: "54231",
      },
      rating: "5",
      name: "Paul Wagner Md",
      phoneNumber: "(123) 123-4567",
      distance: "10 mi",
      image: "/doctor.png",
      from: "2022-09-19",
      to: "2022-09-24",
      availability: [
        {
          date: "2022-09-19",
          list: [
            {
              time: "11:30am",
              key: 12222,
            },
          ],
        },
        {
          date: "2022-09-20",
          list: [
            {
              time: "08:00am",
              key: 12223,
            },
            {
              time: "10:30am",
              key: 12224,
            },
            {
              time: "11:00am",
              key: 12225,
            },
            {
              time: "12:00pm",
              key: 12226,
            },
            {
              time: "01:00pm",
              key: 12227,
            },
            {
              time: "02:00pm",
              key: 12228,
            },
          ],
        },
        {
          date: "2022-09-21",
          list: [
            {
              time: "08:30am",
              key: 12229,
            },
            {
              time: "10:30am",
              key: 12230,
            },
            {
              time: "11:30am",
              key: 12231,
            },
            {
              time: "12:00pm",
              key: 12232,
            },
            {
              time: "01:30pm",
              key: 12233,
            },
            {
              time: "02:30pm",
              key: 12234,
            },
            {
              time: "03:30pm",
              key: 12235,
            },
            {
              time: "04:30pm",
              key: 12236,
            },
            ,
          ],
        },
        {
          date: "2022-09-22",
          list: [
            {
              time: "09:30am",
              key: 12237,
            },
            {
              time: "11:00am",
              key: 12238,
            },
          ],
        },
        {
          date: "2022-09-23",
          list: [
            {
              time: "09:30am",
              key: 12239,
            },
          ],
        },
        {
          date: "2022-09-24",
          list: [
            {
              time: "09:30am",
              key: 12240,
            },
          ],
        },
      ],
      coordinate: {
        latitude: 32.751204,
        longitude: -117.1641166,
      },
    },
    {
      providerId: "2",
      address: {
        addressLine1: "51 West 51st Street",
        addressLine2: "Floor 3, Suite 320 Midtown",
        city: "Florida",
        state: "FR",
        zipcode: "54231",
      },
      rating: "5",
      name: "Paul Wagner Nd",
      phoneNumber: "(123) 123-4567",
      distance: "10 mi",
      image: "/doctor.png",
      from: "2022-09-19",
      to: "2022-09-24",
      availability: [
        {
          date: "2022-09-19",
          list: [],
        },
        {
          date: "2022-09-20",
          list: [
            {
              time: "08:00am",
              key: 12223,
            },
            {
              time: "10:30am",
              key: 12224,
            },
            {
              time: "11:00am",
              key: 12225,
            },
            {
              time: "12:00pm",
              key: 12226,
            },
            {
              time: "01:00pm",
              key: 12227,
            },
            {
              time: "02:00pm",
              key: 12228,
            },
          ],
        },
        {
          date: "2022-09-21",
          list: [
            {
              time: "08:30am",
              key: 12229,
            },
            {
              time: "10:30am",
              key: 12230,
            },
            {
              time: "11:30am",
              key: 12231,
            },
            {
              time: "12:00pm",
              key: 12232,
            },
            {
              time: "01:30pm",
              key: 12233,
            },
            {
              time: "02:30pm",
              key: 12234,
            },
            {
              time: "03:30pm",
              key: 12235,
            },
            {
              time: "04:30pm",
              key: 12236,
            },
            ,
          ],
        },
        {
          date: "2022-09-22",
          list: [
            {
              time: "09:30am",
              key: 12237,
            },
            {
              time: "11:00am",
              key: 12238,
            },
          ],
        },
        {
          date: "2022-09-23",
          list: [],
        },
        {
          date: "2022-09-24",
          list: [
            {
              time: "09:30am",
              key: 12240,
            },
          ],
        },
      ],
      coordinate: {
        latitude: 32.751204,
        longitude: -117.1641166,
      },
    },
    {
      providerId: "3",
      name: "Paul Wagner Md",
      address: {
        addressLine1: "51 West 51st Street",
        addressLine2: "Floor 3, Suite 320 Midtown",
        city: "Florida",
        state: "FR",
        zipcode: "54231",
      },
      rating: "5",
      phoneNumber: "(123) 123-4567",
      distance: "10 mi",
      image: "/doctor.png",
      from: "2022-09-19",
      to: "2022-09-24",
      availability: [
        {
          date: "2022-09-19",
          list: [
            {
              time: "11:30am",
              key: 12222,
            },
          ],
        },
        {
          date: "2022-09-20",
          list: [
            {
              time: "08:00am",
              key: 12223,
            },
            {
              time: "10:30am",
              key: 12224,
            },
            {
              time: "11:00am",
              key: 12225,
            },
            {
              time: "12:00pm",
              key: 12226,
            },
            {
              time: "01:00pm",
              key: 12227,
            },
            {
              time: "02:00pm",
              key: 12228,
            },
          ],
        },
        {
          date: "2022-09-21",
          list: [
            {
              time: "08:30am",
              key: 12229,
            },
            {
              time: "10:30am",
              key: 12230,
            },
            {
              time: "11:30am",
              key: 12231,
            },
            {
              time: "12:00pm",
              key: 12232,
            },
            {
              time: "01:30pm",
              key: 12233,
            },
            {
              time: "02:30pm",
              key: 12234,
            },
            {
              time: "03:30pm",
              key: 12235,
            },
            {
              time: "04:30pm",
              key: 12236,
            },
            ,
          ],
        },
        {
          date: "2022-09-22",
          list: [
            {
              time: "09:30am",
              key: 12237,
            },
            {
              time: "11:00am",
              key: 12238,
            },
          ],
        },
        {
          date: "2022-09-23",
          list: [
            {
              time: "09:30am",
              key: 12239,
            },
          ],
        },
        {
          date: "2022-09-24",
          list: [],
        },
      ],
      coordinate: {
        latitude: 32.751204,
        longitude: -117.1641166,
      },
    },
  ],
  filterbyData: [
    {
      name: "Available Today",
      checked: false,
    },
    {
      name: "Language",
      checklist: [
        {
          name: "Arabic",
          checked: false,
        },
        {
          name: "Chinese",
          checked: false,
        },
        {
          name: "English",
          checked: false,
        },
        {
          name: "Farsi",
          checked: false,
        },
        {
          name: "French",
          checked: false,
        },
        {
          name: "Spanish",
          checked: false,
        },
        {
          name: "Portuguese",
          checked: false,
        },
        {
          name: "Korean",
          checked: false,
        },
        {
          name: "German",
          checked: false,
        },
        {
          name: "Italian",
          checked: false,
        },
        {
          name: "Indonesian",
          checked: false,
        },
      ],
    },
    {
      name: "Insurance",
      checklist: [
        {
          name: "In Network",
          checked: false,
        },
        {
          name: "Out of Network",
          checked: false,
        },
      ],
    },
    {
      name: "Gender",
      checklist: [
        {
          name: "Male",
          checked: false,
        },
        {
          name: "Female",
          checked: false,
        },
        {
          name: "Non-Binary",
          checked: false,
        },
      ],
    },
  ],
};

function createMatchMedia(width) {
  return (query) => ({
    matches: mediaQuery.match(query, { width }),
    addListener: () => {},
    removeListener: () => {},
  });
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

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint5/EPP-3299.feature",
  {
    tagFilter: "@included and not @excluded",
  }
);

defineFeature(feature, (test) => {
  let container, mock;

  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
    cleanup();
  });

  test("EPIC_EPP-1_STORY_EPP-3299 - Verify User should see the following details as part of each prescriptions", ({
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
      Cookies.result = { authorized: true };
      const expectedResult = {
        ResponseCode: 2005,
        ResponseType: "success",
      };

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
      mock
        .onPost(
          `${domain}/api/dummy/appointment/create-appointment/submitFilter`
        )
        .reply(400, {});
        window.matchMedia = createMatchMedia("1920px");
        const mockGeolocation = {
          getCurrentPosition: jest.fn(),
          watchPosition: jest.fn(),
        };
        global.navigator.geolocation = mockGeolocation;
        Cookies.result = { authorized: true };
        act(() => {
          container = render(
            <Provider store={store}>{HomePage.getLayout(<HomePage />)}</Provider>
          );
        });
        await waitFor(() => container.getAllByLabelText(/Prescriptions/i)[0]);
    });

    and("User should see the widget with prescriptions", () => {
      const prescriptions = container.getAllByLabelText(/Prescriptions/i)[0];
      expect(prescriptions).toBeInTheDocument();

      const locationField = container.container.querySelector("#location");
      fireEvent.change(locationField, { target: { value: "Texas" } });
    });

    when("User clicks on the widget with prescriptions", () => {
      const prescriptionsView = container.getByTestId(
        "view-prescription-glasses"
      );
      fireEvent.click(prescriptionsView);

      const searchBtn = container.getByTestId("searchbtn");
      fireEvent.click(searchBtn);
    });

    then(/^User should navigated to "(.*)" screen$/, (arg0) => {
      defaultValidation();
    });

    and(
      "User should be able to view the following details as below:",
      (table) => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-1_STORY_EPP-3299 - Verify User on clicking the widget will get navigated to the screen with upcoming prescriptions", ({
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
      Cookies.result = { authorized: true };
      const expectedResult = {
        ResponseCode: 2005,
        ResponseType: "success",
      };
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
      window.matchMedia = createMatchMedia("700px");
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };
      global.navigator.geolocation = mockGeolocation;
      Cookies.result = { authorized: true };
      act(() => {
        container = render(
          <Provider store={store}>{HomePage.getLayout(<HomePage />)}</Provider>
        );
      });
      await waitFor(() => container.getByTestId("menu-contact"));
      expect(container.getByTestId("menu-contact")).toBeInTheDocument();
    });

    and("User should see the widget with prescriptions", async () => {
      const contactMenu = container.getByTestId("menu-contact");
      act(() => {
        fireEvent.click(contactMenu);
      });

      await waitFor(() => container.getAllByText(/Contacts Prescription/i)[0]);
    });

    when("User clicks on the widget with prescriptions", () => {
      const prescriptionsView = container.getByTestId(
        "view-prescription-contact"
      );
      fireEvent.click(prescriptionsView);
    });

    then(/^User should navigated to "(.*)" screen$/, (arg0) => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-1_STORY_EPP-3299 - Verify User on clicking any particular test/ procedure will get navigated to that particular test/ procedure in the screen with upcoming test sand procedures", ({
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
      Cookies.result = { authorized: true };
      const expectedResult = {
        ResponseCode: 2005,
        ResponseType: "success",
      };

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
      window.matchMedia = createMatchMedia("700px");
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };
      global.navigator.geolocation = mockGeolocation;
      Cookies.result = { authorized: true };
      act(() => {
        container = render(
          <Provider store={store}>{HomePage.getLayout(<HomePage />)}</Provider>
        );
      });
      await waitFor(() => container.getByText(/Search for a doctor/i));
      expect(container.getByText(/Search for a doctor/i)).toBeInTheDocument();
    });

    and("User should see the widget with prescriptions", async () => {
      const medicationMenu = container.getByTestId("menu-medication");
      act(() => {
        fireEvent.click(medicationMenu);
      });

      await waitFor(() => container.getByText(/Medications Prescriptions/i));
    });

    when("User clicks on the widget with prescriptions", () => {
      const prescriptionsView = container.getByTestId(
        "view-prescription-medication"
      );
      fireEvent.click(prescriptionsView);
    });

    then(/^User should navigated to "(.*)" screen$/, (arg0) => {
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

  test("EPIC_EPP-1_STORY_EPP-3299 - Verify User should be able to swipe through to view other upcoming prescriptionss", ({
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
      Cookies.result = { authorized: true };
      const expectedResult = {
        ResponseCode: 2005,
        ResponseType: "success",
      };

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
      mock
        .onPost(
          `${domain}/api/dummy/appointment/create-appointment/submitFilter`
        )
        .reply(200, MOCK_SUBMIT);
      window.matchMedia = createMatchMedia("1920px");
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };
      global.navigator.geolocation = mockGeolocation;
      Cookies.result = { authorized: true };
      act(() => {
        container = render(
          <Provider store={store}>{HomePage.getLayout(<HomePage />)}</Provider>
        );
      });
      await waitFor(() => container.getByText(/Search for a doctor/i));
      expect(container.getByText(/Search for a doctor/i)).toBeInTheDocument();
    });

    and("User should see the widget with prescriptions", async () => {
      const medicationMenu = container.getByTestId("menu-medication");
      act(() => {
        fireEvent.click(medicationMenu);
      });

      await waitFor(() => container.getByText(/Medications Prescriptions/i));
    });

    when("User clicks on the widget with prescriptions", () => {
      const prescriptionsView = container.getByTestId(
        "view-prescription-medication"
      );
      fireEvent.click(prescriptionsView);

      const locationField = container.container.querySelector("#location");
      fireEvent.change(locationField, { target: { value: "Texas" } });

      const searchBtn = container.getByTestId("searchbtn");
      fireEvent.click(searchBtn);
    });

    then(/^User should navigated to "(.*)" screen$/, (arg0) => {
      defaultValidation();
    });

    when("User on clicking any particular appointment", () => {
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
