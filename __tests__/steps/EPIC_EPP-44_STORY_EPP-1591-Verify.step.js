import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { defineFeature, loadFeature } from "jest-cucumber";
import { Provider } from "react-redux";
import Appointment from "../../src/pages/patient/appointment";
import store from "../../src/store/store";
import { fireEvent, render, waitFor } from "@testing-library/react";
import constants from "../../src/utils/constants";
import { act } from "react-dom/test-utils";
import mediaQuery from "css-mediaquery";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-1591.feature",
  {
    tagFilter: "@included and not @excluded",
  }
);
const MOCK_SUGGESTION_DATA = {
  appointmentType: [
    {
      id: "1",
      name: "Eye Exam",
      description: "Test the health of your eye",
    },
    {
      id: "2",
      name: "Follow up",
      description: "See your doctor today",
    },
    {
      id: "3",
      name: "Comprehensive",
      description: "Get detailed eye exam",
    },
    {
      id: "4",
      name: "Contacts Only",
      description: "Get fitted for the right contacts",
    },
  ],
  insuranceCarrier: {
    general: [
      {
        id: "1",
        name: "I'm paying out of my pocket",
      },
      {
        id: "2",
        name: "skip and choose insurance later",
      },
      {
        id: "3",
        name: "Other Insurance",
      },
    ],
    popular: [
      {
        id: "4",
        name: "Aetna",
      },
      {
        id: "5",
        name: "Aetna",
      },
      {
        id: "6",
        name: "Blue Cross Blue Shield",
      },
      {
        id: "7",
        name: "Cigna",
      },
    ],
    all: [
      {
        id: "8",
        name: "Kaiser",
      },
    ],
  },
  filterbyData: [
    {
      name: "Available Today",
      checked: false,
    },
    {
      name: "language",
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

defineFeature(feature, (test) => {
  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };

  function createMatchMedia(width) {
    return (query) => ({
      matches: mediaQuery.match(query, { width }),
      addListener: () => {},
      removeListener: () => {},
    });
  }

  test("EPIC_EPP-44_STORY_EPP-1591 -Verify if user able to view system date by default set as todays date", ({
    given,
    when,
    and,
    then,
  }) => {
    let container;
    given("user launch the Patient Portal URL", () => {
      defaultValidation();
    });

    when("a user provides a valid Email or Phone Number and password", () => {
      defaultValidation();
    });

    and("user clicks on the Login button", () => {
      defaultValidation();
    });

    then("user navigates to the Patient Portal home page", () => {
      defaultValidation();
    });

    when("a user  clicks on the Schedule Appointment link", () => {
      defaultValidation();
    });

    then("User lands on the Schedule Appointment screen", () => {
      const mock = new MockAdapter(axios);
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };

      const domain = window.location.origin;
      mock
        .onGet(
          `${domain}/api/dummy/appointment/create-appointment/getSugestion`
        )
        .reply(200, MOCK_SUGGESTION_DATA);
      mock
        .onPost(
          `${domain}/api/dummy/appointment/create-appointment/submitFilter`
        )
        .reply(400, {});
      window = Object.assign(window, { innerWidth: 1500 });
      global.navigator.geolocation = mockGeolocation;
      container = render(
        <Provider store={store}>
          {Appointment.getLayout(<Appointment />)}
        </Provider>
      );
      waitFor(() => {
        container.getByLabelText(/Date/i);
      });
    });

    when(/^user navigate to "(.*)" calender field$/, (arg0) => {
      const dateField = container.getByLabelText(/Date/i);
      expect(dateField).toBeTruthy();
    });

    and(
      "user should see today’s date as date of appointment by default",
      () => {
        const dateField = container.getByLabelText(/Date/i);
        const date = new Date();
        const currentDate = new Date(dateField.value);
        expect(date.getDate()).toEqual(currentDate.getDate());
      }
    );
  });

  test("EPIC_EPP-44_STORY_EPP-1591 -Verify if user able to change the date of appointment", ({
    given,
    when,
    and,
    then,
  }) => {
    let container;
    given("user launch the Patient Portal URL", () => {
      defaultValidation();
    });

    when("a user provides a valid Email or Phone Number and password", () => {
      defaultValidation();
    });

    and("user clicks on the Login button", () => {
      defaultValidation();
    });

    then("user navigates to the Patient Portal home page", () => {
      defaultValidation();
    });

    when("a user  clicks on the Schedule Appointment link", () => {
      defaultValidation();
    });

    then("User lands on the Schedule Appointment screen", () => {
      const mock = new MockAdapter(axios);
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };

      const domain = window.location.origin;
      mock
        .onGet(
          `${domain}/api/dummy/appointment/create-appointment/getSugestion`
        )
        .reply(200, MOCK_SUGGESTION_DATA);
      mock
        .onPost(
          `${domain}/api/dummy/appointment/create-appointment/submitFilter`
        )
        .reply(400, {});
      window = Object.assign(window, { innerWidth: 700 });
      global.navigator.geolocation = mockGeolocation;
      container = render(
        <Provider store={store}>
          {Appointment.getLayout(<Appointment />)}
        </Provider>
      );
      waitFor(() => {
        container.getByText(/Schedule an eye exam/i);
      });
    });

    when("the user navigates to the date calendar field", async () => {
      const startDateInput = container.getByLabelText(/Date/i);
      expect(startDateInput).toBeTruthy();
    });

    and(
      "the user should see today’s date as the date of appointment by default",
      () => {
        const dateField = container.getByLabelText(/Date/i);
        console.log(dateField.value);
        const date = new Date();
        const currentDate = new Date(dateField.value);
        expect(date.getDate()).toEqual(currentDate.getDate());
      }
    );

    when(/^user change the "(.*)" of appointment$/, async (arg0) => {
      const locationField = container.getByLabelText(/Date/i);
      await act(() => {
        fireEvent.click(locationField);
      });
      waitFor(function () {
        container.getByLabelText(/Cancel/i);
        const startDateInput = container.getByTestId("dateFilter");
        fireEvent.change(startDateInput, { target: { value: "2022/11/11" } });
        fireEvent.submit(input);
      });
    });

    then("user should see change in the date", () => {
      waitFor(function () {
        const startDateInput = container.getByLabelText(/Date/i);
        expect(startDateInput.value).toBe("2022/11/11");
      });
    });
  });
});
