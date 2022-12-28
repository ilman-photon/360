import {
  act,
  render,
  fireEvent,
  cleanup,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import { defineFeature, loadFeature } from "jest-cucumber";
// const useRouter = jest.spyOn(require("next/router"), "useRouter");
import constants from "../../src/utils/constants";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import {
  doLogin,
  renderLogin,
  createMatchMedia,
  defaultValidation,
  renderScheduleAppointment,
} from "../../__mocks__/commonSteps";
import { Provider } from "react-redux";
import Appointment, {
  getStaticProps,
} from "../../src/pages/patient/appointment";
import { mockSubmitFilterReal } from "../../__mocks__/mockResponse";
import AppointmentLayout from "../../src/components/templates/appointmentLayout";
import store from "../../src/store/store";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-1542.feature"
);

defineFeature(feature, (test) => {
  let container;
  const element = document.createElement("div");
  const mock = new MockAdapter(axios);
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
  afterEach(() => {
    mock.reset();
  });

  test("Verify if user clicks 'Schedule your Eye Exam' CTA from Marketing site", ({
    given,
    when,
    then,
    and,
  }) => {
    given("user launch the Marketing Site url", async () => {
      container = await renderLogin(container);
      await doLogin(mock, container);

      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };

      const domain = window.location.origin;
      mock
        .onGet(`/ecp/appointments/appointment-types`)
        .reply(200, mockSuggestionReal);
      mock
        .onPut(`/ecp/appointments/available-slot?searchText=Texas`)
        .reply(200, mockSubmitFilterReal);

      global.navigator.geolocation = mockGeolocation;
      window.matchMedia = createMatchMedia("720px");
      act(() => {
        container = render(
          <Provider store={store}>
            {Appointment.getLayout(
              <AppointmentLayout
                pageTitle="Schedule Appointment - Search Page"
                currentActivePage={"appointment"}
              >
                <Appointment />
              </AppointmentLayout>
            )}
          </Provider>
        );
      });
      await waitFor(() => {
        container.getByText(/City, state, or zip/i);
        expect(container.getByText(/City, state, or zip/i)).toBeInTheDocument();
      });
    });

    when("user clicks on the Schedule your Eye Exam button", async () => {
      await waitFor(() => container.getAllByText(/Schedule an eye exam/i));
      expect(container.getByText(/Schedule an eye exam/i)).toBeInTheDocument();
    });

    then("User lands on to the screen", () => {
      defaultValidation();
    });

    and("user view and search  the location", async () => {
      await waitFor(() => {
        container.getAllByText(/City, state, or zip code/i);
      });
      const locationField = container.getByTestId("search-location");
      fireEvent.change(locationField, { value: "Texas" });
      fireEvent.click(locationField);
    });

    when("user view  the date of appointment", () => {
      const dateField = container.getByTestId("search-date");
      expect(dateField).toBeInTheDocument();
    });

    and("user view the purpose of visit dropdown field", () => {
      const pusposeField = container.getByTestId("search-purpose");
      expect(pusposeField).toBeInTheDocument();
    });

    then("user view  Insurance field", () => {
      const insuranceField = container.getByTestId("search-insurance");
      expect(insuranceField).toBeInTheDocument();
    });
  });

  test("Verify if user able to select the ‘Purpose of Visit’", ({
    given,
    when,
    then,
    and,
  }) => {
    given("user launch the Marketing Site url", async () => {
      container = await renderLogin(container);
      await doLogin(mock, container);

      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };

      const domain = window.location.origin;
      mock
        .onGet(`/ecp/appointments/appointment-types`)
        .reply(200, mockSuggestionReal);
      mock
        .onPut(`/ecp/appointments/available-slot?searchText=Texas`)
        .reply(200, mockSubmitFilterReal);

      global.navigator.geolocation = mockGeolocation;
      window.matchMedia = createMatchMedia("720px");
      act(() => {
        container = render(
          <Provider store={store}>
            {Appointment.getLayout(
              <AppointmentLayout
                pageTitle="Schedule Appointment - Search Page"
                currentActivePage={"appointment"}
              >
                <Appointment />
              </AppointmentLayout>
            )}
          </Provider>
        );
      });
      await waitFor(() => {
        container.getByText(/City, state, or zip/i);
        expect(container.getByText(/City, state, or zip/i)).toBeInTheDocument();
      });
    });

    when("user clicks on the Schedule your Eye Exam button", async () => {
      await waitFor(() => container.getAllByText(/Schedule an eye exam/i));
      expect(container.getByText(/Schedule an eye exam/i)).toBeInTheDocument();
    });

    then("User lands on to the screen", () => {
      defaultValidation();
    });

    and("user view and search  the location", async () => {
      await waitFor(() => {
        container.getAllByText(/City, state, or zip code/i);
      });
      const locationField = container.getByTestId("search-location");
      fireEvent.change(locationField, { value: "Texas" });
      fireEvent.click(locationField);
    });

    when("user select  the date of appointment", async () => {
      const dateField = container.getByTestId("search-date");
      expect(dateField).toBeInTheDocument();
    });

    and(/^user view the"(.*)"$/, () => {
      const dateField = container.getByTestId("search-date");
      expect(dateField).toBeInTheDocument();
    });

    then("user select the Purpose of Visit in dropdown field", () => {
      const pusposeField = container.getByTestId("search-purpose");
      expect(pusposeField).toBeInTheDocument();
    });
  });

  test("Verify if user able to select the ‘Purpose of Visit’which is a optional field", ({
    given,
    when,
    then,
    and,
  }) => {
    given(/^user launch the "(.*)" url$/, async () => {
      container = await renderLogin(container);
      await doLogin(mock, container);

      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };

      const domain = window.location.origin;
      mock
        .onGet(`/ecp/appointments/appointment-types`)
        .reply(200, mockSuggestionReal);
      mock
        .onPut(`/ecp/appointments/available-slot?searchText=Texas`)
        .reply(200, mockSubmitFilterReal);

      global.navigator.geolocation = mockGeolocation;
      window.matchMedia = createMatchMedia("720px");
      act(() => {
        container = render(
          <Provider store={store}>
            {Appointment.getLayout(
              <AppointmentLayout
                pageTitle="Schedule Appointment - Search Page"
                currentActivePage={"appointment"}
              >
                <Appointment />
              </AppointmentLayout>
            )}
          </Provider>
        );
      });
      await waitFor(() => {
        container.getByText(/City, state, or zip/i);
        expect(container.getByText(/City, state, or zip/i)).toBeInTheDocument();
      });
    });

    when("user clicks on the “Schedule your Eye Exam” button", async () => {
      await waitFor(() => container.getAllByText(/Schedule an eye exam/i));
      expect(container.getByText(/Schedule an eye exam/i)).toBeInTheDocument();
    });

    then("User lands on to the screen", async () => {
      cleanup();
      container = await renderScheduleAppointment(mock);
    });

    and("user view and search  the location", async () => {
      const locationInput = container.getByLabelText(
        "City, state, or zip code"
      );
      act(() => {
        fireEvent.change(locationInput, { target: { value: "Texas" } });
      });
      expect(locationInput.value).toEqual("Texas");
    });

    when("user select  the date of appointment", () => {
      expect(container.getByLabelText("Date")).toBeInTheDocument();
    });

    and("user view the purpose of visit field", () => {
      const pusposeField = container.getByTestId("select-purposes-of-visit");
      expect(pusposeField).toBeInTheDocument();
    });

    then(/^user able to select the "(.*)"$/, async () => {
      const purposeInput = await waitFor(() =>
        container.getByTestId("select-purposes-of-visit")
      );
      act(() => {
        fireEvent.change(purposeInput, {
          target: { value: "Clinical_Diagnosis" },
        });
      });
      expect(purposeInput.value).toEqual("Clinical_Diagnosis");
    });

    and("user view optional label under ‘Purpose of Visit’field", () => {
      expect(container.getByText(/optional/i)).toBeInTheDocument();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1542 -Verify if user able to view   click 'Schedule your Eye Exam' CTA from Marketing site", ({}) => {});

  test("EPIC_EPP-44_STORY_EPP-1542 -Verify if user able to select the ‘Purpose of Visit’", ({}) => {});

  test("EPIC_EPP-44_STORY_EPP-1542 -Verify if user able to view optional label under ‘Purpose of Visit’field", ({}) => {});
});
