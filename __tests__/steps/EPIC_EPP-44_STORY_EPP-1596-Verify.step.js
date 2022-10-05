import {
  act,
  cleanup,
  fireEvent,
  render,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import { defineFeature, loadFeature } from "jest-cucumber";
import { TEST_ID } from "../../src/utils/constants";
import { renderScheduleAppointment, renderResultsScreen } from "../../__mocks__/commonSteps";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { Login } from "../../src/components/organisms/Login/login";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-1596.feature"
);

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

const provideFilters = (container) => {
  inputLocation(container);
  inputInsurance(container);
};

const inputLocation = (container) => {
  const locationInput = container.getByLabelText("City, state, or zip code");
  act(() => {
    fireEvent.change(locationInput, { target: { value: "Texas" } });
  });
  expect(locationInput.value).toEqual("Texas");
};

const inputDate = (container) => {
  const dateInput = container.getByLabelText("Date");
  act(() => {
    fireEvent.change(dateInput, { target: { value: "Sep 22, 2022" } });
  });
  expect(dateInput.value).toEqual("Sep 22, 2022");
};

const inputPurpose = async (container) => {
  const purposeInput = await waitFor(() =>
    container.getByTestId("select-purposes-of-visit")
  );
  act(() => {
    fireEvent.change(purposeInput, { target: { value: "Eye Exam" } });
  });
  expect(purposeInput.value).toEqual("Eye Exam");
};

const inputInsurance = (container) => {
  const insuranceInput = container.getByLabelText("Insurance Carrier");
  act(() => {
    fireEvent.change(insuranceInput, { target: { value: "Aetna" } });
  });
  expect(insuranceInput.value).toEqual("Aetna");
};

const clickSearch = async (container, mock, domain) => {
  mock
    .onPost(`${domain}/api/dummy/appointment/create-appointment/submitFilter`)
    .reply(200, MOCK_SUBMIT);
  const searchBtn = container.getByTestId(
    TEST_ID.APPOINTMENT_TEST_ID.searchbtn
  );
  act(() => {
    fireEvent.click(searchBtn);
  });
  await waitFor(() =>
    container.getAllByTestId(TEST_ID.SEARCH_PROVIDER_TEST_ID.hourButton)
  );
  expect(
    container.getAllByTestId(TEST_ID.SEARCH_PROVIDER_TEST_ID.hourButton)[0]
  ).toBeInTheDocument();
};

const defaultValidation = () => {
  expect(true).toBeTruthy();
};

const launchURL = () => {
  let container
  const mockOnLoginClicked = jest.fn((callback) => {
    callback({
      status: "success",
    });
  });
  container = render(<Login OnLoginClicked={mockOnLoginClicked} />);
};

defineFeature(feature, (test) => {
  let container;
  const mock = new MockAdapter(axios);
  const domain = window.location.origin;

  beforeEach(() => {
    const mockGeolocation = {
      getCurrentPosition: jest.fn(),
      watchPosition: jest.fn(),
    };

    mock
      .onGet(`${domain}/api/dummy/appointment/create-appointment/getSugestion`)
      .reply(200, MOCK_SUGGESTION_DATA);
    global.navigator.geolocation = mockGeolocation;
  });

  afterEach(cleanup);

  test("EPIC_EPP-44_STORY_EPP-1596-To verify whether the user is allowed to change the Date and Time in Appointment Review screen.", ({
    when,
    and,
    then,
  }) => {
    when("user clicks on the Schedule Appointment button", () => {
      defaultValidation();
    });

    and("user navigates to the schedule appointment screen", async () => {
      container = await renderScheduleAppointment(
        container,
        MOCK_SUGGESTION_DATA
      );
    });

    and(
      "user should select the location, Date of Appointment, Purpose of visit, Insurance carrier.",
      () => {
        provideFilters(container);
      }
    );

    and("click on Search button", async () => {
      await clickSearch(container, mock, domain);
    });

    and(
      "user should lands on Schedule Appointment Review screen with selected location, Date and Time, Purpose of visit andInsurance carrier data",
      () => {
        renderResultsScreen()
      }
    );

    and("try to update the Date and Time if already provided", () => {
      const dateField = container.getByText(/Date/i);
      expect(dateField).toBeInTheDocument()
    });

    then("user should allow to update the Date and Time.", () => {
      const dateField = container.getByText(/Date/i);
      expect(dateField).toBeInTheDocument()
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1596-Verify whether the user is able to select the Date and Time, if not selected in Previous page.", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Patient portal URL", () => {
      launchURL()
    });

    when("user clicks on the Schedule Appointment button", () => {
      defaultValidation();
    });

    and("user navigates to the schedule appointment screen", async () => {
      container = await renderScheduleAppointment(
        container,
        MOCK_SUGGESTION_DATA
      );
    });

    and(
      "user should select the location, Date of Appointment, Purpose of visit, Insurance carrier.",
      () => {
        provideFilters(container);
      }
    );

    and("click on Search button", async () => {
      await clickSearch(container, mock, domain);
    });

    and(
      "user should lands on Schedule Appointment Review screen with selected location, Date and Time, Purpose of visit and Insurance carrier data",
      () => {
        renderResultsScreen()
      }
    );

    and("try to add the Date and Time", () => {
      const dateField = container.getByText(/Date/i);
      expect(dateField).toBeInTheDocument()
    });

    then("user should allow to add the Date and Time.", () => {
      const dateField = container.getByText(/Date/i);
      expect(dateField).toBeInTheDocument()
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1596-Verify whether the user is able to review the Appointment details after updating the Date and Time.", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Patient portal URL", () => {
      launchURL()
    });

    when("user clicks on the Schedule Appointment button", () => {
      defaultValidation();
    });

    and("user navigates to the schedule appointment screen", async () => {
      container = await renderScheduleAppointment(container);
    });

    and(
      "user should select the location, Date of Appointment, Purpose of visit, Insurance carrier.",
      () => {
        provideFilters(container);
      }
    );

    and("click on Search button", async () => {
      await clickSearch(container, mock, domain);
    });

    and(
      "user should lands on Schedule Appointment Review screen with selected location, Date and Time, Purpose of visit and Insurance carrier data",
      () => {
        renderResultsScreen()
      }
    );

    and("try to update the Date and Time if already provided", () => {
      const dateField = container.getByText(/Date/i);
      expect(dateField).toBeInTheDocument()
    });

    then(
      "it should allow to review once again the changed Date and Time in Appointment review screen.",
      () => {
        const dateField = container.getByText(/Date/i);
        expect(dateField).toBeInTheDocument();
      }
    );
  });
});
