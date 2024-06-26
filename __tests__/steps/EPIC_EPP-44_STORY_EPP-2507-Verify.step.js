import { act, cleanup, fireEvent, render, waitFor } from "@testing-library/react";
import axios from "axios";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import { defineFeature, loadFeature } from "jest-cucumber";
import { Provider } from "react-redux";
import Appointment from "../../src/pages/patient/appointment";
import store from "../../src/store/store";
const useRouter = jest.spyOn(require("next/router"), "useRouter");
import constants from "../../src/utils/constants";
import mediaQuery from 'css-mediaquery';
import { mockSubmitFilterReal } from "../../__mocks__/mockResponse";
import { inputPurpose, provideFilters, renderResultsScreen } from "../../__mocks__/commonSteps";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-2507.feature"
);

defineFeature(feature, (test) => {
  let container;
  const mock = new MockAdapter(axios);
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

  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };

  function createMatchMedia(width) {
    return query => ({
      matches: mediaQuery.match(query, { width }),
      addListener: () => { },
      removeListener: () => { },
    });
  }

  const inputDate = () => {
    const dateInput = container.getByLabelText("Date");
    fireEvent.change(dateInput, { target: { value: "22-09-2022" } });
    expect(dateInput).toBeInTheDocument();
  };

  const inputInsurance = () => {
    const insuranceInput = container.getByLabelText("Insurance Carrier");
    fireEvent.change(insuranceInput, { target: { value: "Aetna" } });
    expect(insuranceInput).toBeInTheDocument();
  };

  test("EPIC_EPP-44_STORY_EPP-2507 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance.", ({
    given,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation()
    });

    and("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation()
    });

    then("user navigates to the search screen", async () => {
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn()
      };

      mock.onGet(`/ecp/appointments/appointment-types`).reply(200, mockSuggestionReal);
      mock.onPut(`/ecp/appointments/available-slot?searchText=Texas`).reply(200, mockSubmitFilterReal);
      global.navigator.geolocation = mockGeolocation;
      window.matchMedia = createMatchMedia('1920px');
      act(() => {
        container = render(
          <Provider store={store}>
            {Appointment.getLayout(<Appointment />)}
          </Provider>
        );
      })
      await waitFor(() => {
        container.getByText(/City, state, or zip/i);
        expect(container.getByText(/City, state, or zip/i)).toBeInTheDocument();
      });
    });

    and("user enters the location", () => {
      const locationField = container.container.querySelector('#location');
      fireEvent.change(locationField, { target: { value: "Texas" } })
    });

    and("user selects the date of appointment", () => {
      inputDate()
    });

    and("user chooses the purpose of the visit", async () => {
      await inputPurpose(container)
    });

    and("user enters the insurance name", () => {
      inputInsurance()
    });

    and("user clicks on the Search button", async () => {
      const searchBtn = container.getByTestId("searchbtn")
      fireEvent.click(searchBtn)

      await waitFor(() => {
        container.getByText(/Filter/i);
      });
    });

    and(
      "user views the results on the Schedule Appointments screen",
      () => {
        expect(container.getByText(/Filter/i)).toBeInTheDocument()
      }
    );

    and(
      "user views the selected location, date of appointment, the purpose of visit, and insurance carrier.",
      () => {
        const locationField = container.container.querySelector("#location")
        expect(locationField.value).toBe("Texas")
      }
    );
  });

  test("EPIC_EPP-44_STORY_EPP-2507 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance and user view the location", ({
    given,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation()
    });

    and("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation()
    });

    then("user navigates to the search screen", async () => {
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn()
      };

      mock.onGet(`/ecp/appointments/appointment-types`).reply(200, mockSuggestionReal);
      mock.onPut(`/ecp/appointments/available-slot?searchText=Texas`).reply(200, mockSubmitFilterReal);

      global.navigator.geolocation = mockGeolocation;
      window.matchMedia = createMatchMedia('1920px');
      act(() => {
        container = render(
          <Provider store={store}>
            {Appointment.getLayout(<Appointment />)}
          </Provider>
        );
      })
      await waitFor(() => {
        container.getByText(/City, state, or zip/i);
        expect(container.getByText(/City, state, or zip/i)).toBeInTheDocument();
      });
    });

    and("user enters the location", () => {
      const locationField = container.container.querySelector('#location');
      fireEvent.change(locationField, { target: { value: "Texas" } })
    });

    and("user selects the date of appointment", () => {
      inputDate()
    });

    and("user chooses the purpose of the visit", async () => {
      await inputPurpose(container)
    });

    and("user enters the insurance name", () => {
      inputInsurance()
    });

    and("user clicks on the Search button", async () => {
      const searchBtn = container.getByTestId("searchbtn")
      fireEvent.click(searchBtn)

      await waitFor(() => {
        container.getByText(/Filter/i);
      });
    });

    and(
      "user views the results in the Schedule Appointments screen",
      () => {
        expect(container.getByText(/Filter/i)).toBeInTheDocument()
      }
    );

    and("user views the selected location.", () => {
      const locationField = container.container.querySelector("#location")
      expect(locationField.value).toBe("Texas")
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2507 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user view the date of appointment", ({
    given,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation()
    });

    and("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation()
    });

    then("user navigates to the search screen", async () => {
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn()
      };

      mock.onGet(`/ecp/appointments/appointment-types`).reply(200, mockSuggestionReal);
      mock.onPut(`/ecp/appointments/available-slot?searchText=Texas`).reply(200, mockSubmitFilterReal);

      global.navigator.geolocation = mockGeolocation;
      window.matchMedia = createMatchMedia('1920px');
      act(() => {
        container = render(
          <Provider store={store}>
            {Appointment.getLayout(<Appointment />)}
          </Provider>
        );
      })
      await waitFor(() => {
        container.getByText(/City, state, or zip/i);
        expect(container.getByText(/City, state, or zip/i)).toBeInTheDocument();
      });
    });

    and("user enters the location", () => {
      const locationField = container.container.querySelector('#location');
      fireEvent.change(locationField, { target: { value: "Texas" } })
    });

    and("user selects the date of appointment", () => {
      inputDate()
    });

    and("user chooses the purpose of the visit", async () => {
      await inputPurpose(container)
    });

    and("user enters the insurance name", () => {
      inputInsurance()
    });

    and("user clicks on the Search button", async () => {
      const searchBtn = container.getByTestId("searchbtn")
      fireEvent.click(searchBtn)

      await waitFor(() => {
        container.getByText(/Filter/i);
      });
    });

    and(
      "user views the results in the Schedule Appointments screen",
      () => {
        expect(container.getByText(/Filter/i)).toBeInTheDocument()
      }
    );

    and("user views the date of appointment.", () => {
      const locationField = container.container.querySelector("#location")
      expect(locationField.value).toBe("Texas")
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2507 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user views the purpose of visit", ({
    given,
    and,
    then,
  }) => {
    given("user launch the Marketing Site URL", () => {
      defaultValidation()
    });

    and("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation()
    });

    then("user navigates to the search screen", async () => {
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn()
      };

      mock.onGet(`/ecp/appointments/appointment-types`).reply(200, mockSuggestionReal);
      mock.onPut(`/ecp/appointments/available-slot?searchText=Texas`).reply(200, mockSubmitFilterReal);

      global.navigator.geolocation = mockGeolocation;
      window.matchMedia = createMatchMedia('1920px');
      act(() => {
        container = render(
          <Provider store={store}>
            {Appointment.getLayout(<Appointment />)}
          </Provider>
        );
      })
      await waitFor(() => {
        container.getByText(/City, state, or zip/i);
        expect(container.getByText(/City, state, or zip/i)).toBeInTheDocument();
      });
    });

    and("user enters the location", () => {
      const locationField = container.container.querySelector('#location');
      fireEvent.change(locationField, { target: { value: "Texas" } })
    });

    and("user selects the date of appointment", () => {
      inputDate()
    });

    and("user chooses the purpose of the visit", async () => {
      await inputPurpose(container)
    });

    and("user enters the insurance name", () => {
      inputInsurance()
    });

    and("user clicks on the Search button", async () => {
      const searchBtn = container.getByTestId("searchbtn")
      fireEvent.click(searchBtn)

      await waitFor(() => {
        container.getByText(/Filter/i);
      });
    });

    and(
      "user views the results in the Schedule Appointments screen",
      () => {
        expect(container.getByText(/Filter/i)).toBeInTheDocument()
      }
    );

    and("user views the purpose of the visit.", () => {
      expect(container.getByTestId("select-purposes-of-visit")).toBeInTheDocument()
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2507 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user view the insurance carrier.", ({
    given,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation()
    });

    and("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation()
    });

    then("user navigates to the search screen", async () => {
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn()
      };

      mock.onGet(`/ecp/appointments/appointment-types`).reply(200, mockSuggestionReal);
      mock.onPut(`/ecp/appointments/available-slot?searchText=Texas`).reply(200, mockSubmitFilterReal);

      global.navigator.geolocation = mockGeolocation;
      window.matchMedia = createMatchMedia('1920px');
      act(() => {
        container = render(
          <Provider store={store}>
            {Appointment.getLayout(<Appointment />)}
          </Provider>
        );
      })
      await waitFor(() => {
        container.getByText(/City, state, or zip/i);
        expect(container.getByText(/City, state, or zip/i)).toBeInTheDocument();
      });
    });

    and("user enters the location", () => {
      const locationField = container.container.querySelector('#location');
      fireEvent.change(locationField, { target: { value: "Texas" } })
    });

    and("user selects the date of appointment", () => {
      inputDate()
    });

    and("user chooses the purpose of the visit", async () => {
      await inputPurpose(container)
    });

    and("user enters the insurance name", () => {
      inputInsurance()
    });

    and("user clicks on the Search button", async () => {
      const searchBtn = container.getByTestId("searchbtn")
      fireEvent.click(searchBtn)

      await waitFor(() => {
        container.getByText(/Filter/i);
      });
    });

    and(
      "user views the results in the Schedule Appointments screen",
      () => {
        expect(container.getByText(/Filter/i)).toBeInTheDocument()
      }
    );

    and("user views the insurance carrier.", () => {
      expect(container.getByLabelText("Insurance Carrier")).toBeInTheDocument()
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2507 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user views the purpose of visit as blank when the user not entered", ({
    given,
    and,
    then,
    when,
  }) => {
    given("user launch the Marketing Site URL", () => {
      defaultValidation()
    });

    and("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation()
    });

    then("user navigates to the search screen", async () => {
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn()
      };

      mock.onGet(`/ecp/appointments/appointment-types`).reply(200, mockSuggestionReal);
      mock.onPut(`/ecp/appointments/available-slot?searchText=Texas`).reply(200, mockSubmitFilterReal);

      global.navigator.geolocation = mockGeolocation;
      window.matchMedia = createMatchMedia('1920px');
      act(() => {
        container = render(
          <Provider store={store}>
            {Appointment.getLayout(<Appointment />)}
          </Provider>
        );
      })
      await waitFor(() => {
        container.getByText(/City, state, or zip/i);
        expect(container.getByText(/City, state, or zip/i)).toBeInTheDocument();
      });
    });

    and("user enters the location", () => {
      const locationField = container.container.querySelector('#location');
      fireEvent.change(locationField, { target: { value: "Texas" } })
    });

    and("user selects the date of appointment", () => {
      inputDate()
    });

    and("user chooses the purpose of the visit", async () => {
      await inputPurpose(container)
    });

    and("user enters the insurance name", () => {
      inputInsurance()
    });

    and("user clicks on the Search button", async () => {
      const searchBtn = container.getByTestId("searchbtn")
      fireEvent.click(searchBtn)

      await waitFor(() => {
        container.getByText(/Filter/i);
      });
    });

    and(
      "user views the results in the Schedule Appointments screen",
      () => {
        expect(container.getByText(/Filter/i)).toBeInTheDocument()
      }
    );

    and("user views the purpose of the visit as blank", () => {
      const purposeInput = container.getByTestId("select-purposes-of-visit");
      fireEvent.change(purposeInput, { target: { value: "" } });
    });

    when("the user not entered the purpose of the visit", () => {
      defaultValidation()
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2507 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance and user view the location using City with the selected location", ({
    given,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation()
    });

    and("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation()
    });

    then("user navigates to the search screen", async () => {
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn()
      };

      mock.onGet(`/ecp/appointments/appointment-types`).reply(200, mockSuggestionReal);
      mock.onPut(`/ecp/appointments/available-slot?searchText=Texas`).reply(200, mockSubmitFilterReal);

      global.navigator.geolocation = mockGeolocation;
      window.matchMedia = createMatchMedia('1920px');
      act(() => {
        container = render(
          <Provider store={store}>
            {Appointment.getLayout(<Appointment />)}
          </Provider>
        );
      })
      await waitFor(() => {
        container.getByText(/City, state, or zip/i);
        expect(container.getByText(/City, state, or zip/i)).toBeInTheDocument();
      });
    });

    and("user enters the location", () => {
      const locationField = container.container.querySelector('#location');
      fireEvent.change(locationField, { target: { value: "Texas" } })
    });

    and("user selects the date of appointment", () => {
      inputDate()
    });

    and("user chooses the purpose of the visit", async () => {
      await inputPurpose(container)
    });

    and("user enters the insurance name", () => {
      inputInsurance()
    });

    and("user clicks on the Search button", async () => {
      const searchBtn = container.getByTestId("searchbtn")
      fireEvent.click(searchBtn)

      await waitFor(() => {
        container.getByText(/Filter/i);
      });
    });

    and(
      "user views the results in the Schedule Appointments screen",
      () => {
        expect(container.getByText(/Filter/i)).toBeInTheDocument()
      }
    );

    and("user views the selected location.", () => {
      const locationField = container.container.querySelector("#location")
      expect(locationField.value).toBe("Texas")
    });

    and(
      "user views an option to search locations using City with the selected location",
      () => {
        expect(container.container.querySelector("#location")).toBeInTheDocument()
      }
    );
  });

  test("EPIC_EPP-44_STORY_EPP-2507 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance and user view the location using State with the selected location", ({
    given,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation()
    });

    and("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation()
    });

    then("user navigates to the search screen", async () => {
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn()
      };

      mock.onGet(`/ecp/appointments/appointment-types`).reply(200, mockSuggestionReal);
      mock.onPut(`/ecp/appointments/available-slot?searchText=Texas`).reply(200, mockSubmitFilterReal);

      global.navigator.geolocation = mockGeolocation;
      window.matchMedia = createMatchMedia('1920px');
      act(() => {
        container = render(
          <Provider store={store}>
            {Appointment.getLayout(<Appointment />)}
          </Provider>
        );
      })
      await waitFor(() => {
        container.getByText(/City, state, or zip/i);
        expect(container.getByText(/City, state, or zip/i)).toBeInTheDocument();
      });
    });

    and("user enters the location", () => {
      const locationField = container.container.querySelector('#location');
      fireEvent.change(locationField, { target: { value: "Texas" } })
    });

    and("user selects the date of appointment", () => {
      inputDate()
    });

    and("user chooses the purpose of the visit", async () => {
      await inputPurpose(container)
    });

    and("user enters the insurance name", () => {
      inputInsurance()
    });

    and("user clicks on the Search button", async () => {
      const searchBtn = container.getByTestId("searchbtn")
      fireEvent.click(searchBtn)

      await waitFor(() => {
        container.getByText(/Filter/i);
      });
    });

    and(
      "user views the results in the Schedule Appointments screen",
      () => {
        expect(container.getByText(/Filter/i)).toBeInTheDocument()
      }
    );

    and("user views the selected location.", () => {
      const locationField = container.container.querySelector("#location")
      expect(locationField.value).toBe("Texas")
    });

    and(
      "user views an option to search locations using State with the selected location",
      () => {
        expect(container.container.querySelector("#location")).toBeInTheDocument()
      }
    );
  });

  test("EPIC_EPP-44_STORY_EPP-2507 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance and user view the location using  Zipcode with the selected location", ({
    given,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation()
    });

    and("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation()
    });

    then("user navigates to the search screen", async () => {
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn()
      };

      mock.onGet(`/ecp/appointments/appointment-types`).reply(200, mockSuggestionReal);
      mock.onPut(`/ecp/appointments/available-slot?searchText=Texas`).reply(200, mockSubmitFilterReal);

      global.navigator.geolocation = mockGeolocation;
      window.matchMedia = createMatchMedia('1920px');
      act(() => {
        container = render(
          <Provider store={store}>
            {Appointment.getLayout(<Appointment />)}
          </Provider>
        );
      })
      await waitFor(() => {
        container.getByText(/City, state, or zip/i);
        expect(container.getByText(/City, state, or zip/i)).toBeInTheDocument();
      });
    });

    and("user enters the location", () => {
      const locationField = container.container.querySelector('#location');
      fireEvent.change(locationField, { target: { value: "Texas" } })
    });

    and("user selects the date of appointment", () => {
      inputDate()
    });

    and("user chooses the purpose of the visit", async () => {
      await inputPurpose(container)
    });

    and("user enters the insurance name", () => {
      inputInsurance()
    });

    and("user clicks on the Search button", async () => {
      const searchBtn = container.getByTestId("searchbtn")
      fireEvent.click(searchBtn)

      await waitFor(() => {
        container.getByText(/Filter/i);
      });
    });

    and(
      "user views the results in the Schedule Appointments screen",
      () => {
        expect(container.getByText(/Filter/i)).toBeInTheDocument()
      }
    );

    and("user views the selected location.", () => {
      const locationField = container.container.querySelector("#location")
      expect(locationField.value).toBe("Texas")
    });

    and(
      "user views an option to search locations using Zipcode with the selected location",
      () => {
        expect(container.container.querySelector("#location")).toBeInTheDocument()
      }
    );
  });

  test("EPIC_EPP-44_STORY_EPP-2507 - Verify user able to search for the location and select the date of appointment as well as the purpose of visit and insurance and user view the location using the system to detect their location", ({
    given,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation()
    });

    and("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation()
    });

    then("user navigates to the search screen", async () => {
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn()
      };

      mock.onGet(`/ecp/appointments/appointment-types`).reply(200, mockSuggestionReal);
      mock.onPut(`/ecp/appointments/available-slot?searchText=Texas`).reply(200, mockSubmitFilterReal);

      global.navigator.geolocation = mockGeolocation;
      window.matchMedia = createMatchMedia('1920px');
      act(() => {
        container = render(
          <Provider store={store}>
            {Appointment.getLayout(<Appointment />)}
          </Provider>
        );
      })
      await waitFor(() => {
        container.getByText(/City, state, or zip/i);
        expect(container.getByText(/City, state, or zip/i)).toBeInTheDocument();
      });
    });

    and("user enters the location", () => {
      const locationField = container.container.querySelector('#location');
      fireEvent.change(locationField, { target: { value: "Texas" } })
    });

    and("user selects the date of appointment", () => {
      inputDate()
    });

    and("user chooses the purpose of the visit", async () => {
      await inputPurpose(container)
    });

    and("user enters the insurance name", () => {
      inputInsurance()
    });

    and("user clicks on the Search button", async () => {
      const searchBtn = container.getByTestId("searchbtn")
      fireEvent.click(searchBtn)

      await waitFor(() => {
        container.getByText(/Filter/i);
      });
    });

    and(
      "user views the results in the Schedule Appointments screen",
      () => {
        expect(container.getByText(/Filter/i)).toBeInTheDocument()
      }
    );

    and("user views the selected location.", () => {

    });

    and(
      "user views an option to search locations using City or State or Zipcode with the selected location",
      () => {
        const locationField = container.container.querySelector("#location")
        expect(locationField.value).toBe("Texas")
      }
    );

    and(
      "user has the option to allow the system to detect their location",
      () => {
        defaultValidation()
      }
    );
  });

  test("EPIC_EPP-44_STORY_EPP-2507 - Verify user able to search for the location and select the date of appointment as well as the purpose of visit and insurance and the user views the filter options", ({
    given,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation()
    });

    and("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation()
    });

    then("user navigates to the search screen", async () => {
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn()
      };

      mock.onGet(`/ecp/appointments/appointment-types`).reply(200, mockSuggestionReal);
      mock.onPut(`/ecp/appointments/available-slot?searchText=Texas`).reply(200, mockSubmitFilterReal);

      global.navigator.geolocation = mockGeolocation;
      window.matchMedia = createMatchMedia('1920px');
      act(() => {
        container = render(
          <Provider store={store}>
            {Appointment.getLayout(<Appointment />)}
          </Provider>
        );
      })
      await waitFor(() => {
        container.getByText(/City, state, or zip/i);
        expect(container.getByText(/City, state, or zip/i)).toBeInTheDocument();
      });
    });

    and("user enters the location", () => {
      const locationField = container.container.querySelector('#location');
      fireEvent.change(locationField, { target: { value: "Texas" } })
    });

    and("user selects the date of appointment", () => {
      inputDate()
    });

    and("user chooses the purpose of the visit", async () => {
      await inputPurpose(container)
    });

    and("user enters the insurance name", () => {
      inputInsurance()
    });

    and("user clicks on the Search button", async () => {
      const searchBtn = container.getByTestId("searchbtn")
      fireEvent.click(searchBtn)

      await waitFor(() => {
        container.getByText(/Filter/i);
      });
    });

    and(
      "user views the results in the Schedule Appointments screen",
      () => {
        expect(container.getByText(/Filter/i)).toBeInTheDocument()
      }
    );

    and("user views the selected location.", () => {
      const locationField = container.container.querySelector("#location")
      expect(locationField.value).toBe("Texas")
    });

    and(
      "user views an option to search locations using City or State or Zipcode with the selected location",
      () => {
        expect(container.container.querySelector("#location")).toBeInTheDocument()
      }
    );

    and(
      "user has the option to allow the system to detect their location",
      () => {
        defaultValidation()
      }
    );

    and("user views the filter options", () => {
      expect(container.container.querySelector("#location")).toBeInTheDocument()
      expect(container.getByLabelText("Date")).toBeInTheDocument()
      expect(container.getByTestId("select-purposes-of-visit")).toBeInTheDocument()
      expect(container.getByLabelText("Insurance Carrier")).toBeInTheDocument()
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2507 - Verify user able to search for the location and select the date of appointment as well as the purpose of visit and insurance and the user view options to change the appointment date", ({
    given,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation()
    });

    and("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation()
    });

    then("user navigates to the search screen", async () => {
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn()
      };

      mock.onGet(`/ecp/appointments/appointment-types`).reply(200, mockSuggestionReal);
      mock.onPut(`/ecp/appointments/available-slot?searchText=Texas`).reply(200, mockSubmitFilterReal);

      global.navigator.geolocation = mockGeolocation;
      window.matchMedia = createMatchMedia('1920px');
      act(() => {
        container = render(
          <Provider store={store}>
            {Appointment.getLayout(<Appointment />)}
          </Provider>
        );
      })
      await waitFor(() => {
        container.getByText(/City, state, or zip/i);
        expect(container.getByText(/City, state, or zip/i)).toBeInTheDocument();
      });
    });

    and("user enters the location", () => {
      const locationField = container.container.querySelector('#location');
      fireEvent.change(locationField, { target: { value: "Texas" } })
    });

    and("user selects the date of appointment", () => {
      inputDate()
    });

    and("user chooses the purpose of the visit", async () => {
      await inputPurpose(container)
    });

    and("user enters the insurance name", () => {
      inputInsurance()
    });

    and("user clicks on the Search button", async () => {
      const searchBtn = container.getByTestId("searchbtn")
      fireEvent.click(searchBtn)

      await waitFor(() => {
        container.getByText(/Filter/i);
      });
    });

    and(
      "user views the results in the Schedule Appointments screen",
      () => {
        expect(container.getByText(/Filter/i)).toBeInTheDocument()
      }
    );

    and("user views the selected location.", () => {
      const locationField = container.container.querySelector("#location")
      expect(locationField.value).toBe("Texas")
    });

    and(
      "user views an option to search locations using City or State or Zipcode with the selected location",
      () => {
        expect(container.container.querySelector("#location")).toBeInTheDocument()
      }
    );

    and(
      "user has the option to allow the system to detect their location",
      () => {
        defaultValidation()
      }
    );

    and("user views the filter options", () => {
      expect(container.container.querySelector("#location")).toBeInTheDocument()
      expect(container.getByLabelText("Date")).toBeInTheDocument()
      expect(container.getByTestId("select-purposes-of-visit")).toBeInTheDocument()
      expect(container.getByLabelText("Insurance Carrier")).toBeInTheDocument()
    });

    and("user view options to change the appointment date", () => {
      inputDate()
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2507 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and user view options to change the Purpose of the Visit", ({
    given,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation()
    });

    and("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation()
    });

    then("user navigates to the search screen", async () => {
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn()
      };

      mock.onGet(`/ecp/appointments/appointment-types`).reply(200, mockSuggestionReal);
      mock.onPut(`/ecp/appointments/available-slot?searchText=Texas`).reply(200, mockSubmitFilterReal);

      global.navigator.geolocation = mockGeolocation;
      window.matchMedia = createMatchMedia('1920px');
      act(() => {
        container = render(
          <Provider store={store}>
            {Appointment.getLayout(<Appointment />)}
          </Provider>
        );
      })
      await waitFor(() => {
        container.getByText(/City, state, or zip/i);
        expect(container.getByText(/City, state, or zip/i)).toBeInTheDocument();
      });
    });

    and("user enters the location", () => {
      const locationField = container.container.querySelector('#location');
      fireEvent.change(locationField, { target: { value: "Texas" } })
    });

    and("user selects the date of appointment", () => {
      inputDate()
    });

    and("user chooses the purpose of the visit", async () => {
      await inputPurpose(container)
    });

    and("user enters the insurance name", () => {
      inputInsurance()
    });

    and("user clicks on the Search button", async () => {
      const searchBtn = container.getByTestId("searchbtn")
      fireEvent.click(searchBtn)

      await waitFor(() => {
        container.getByText(/Filter/i);
      });
    });

    and(
      "user views the results in the Schedule Appointments screen",
      () => {
        expect(container.getByText(/Filter/i)).toBeInTheDocument()
      }
    );

    and("user views the selected location.", () => {
      const locationField = container.container.querySelector("#location")
      expect(locationField.value).toBe("Texas")
    });

    and(
      "user views an option to search locations using City or State or Zipcode with the selected location",
      () => {
        expect(container.container.querySelector("#location")).toBeInTheDocument()
      }
    );

    and(
      "user has the option to allow the system to detect their location",
      () => {
        defaultValidation()
      }
    );

    and("user views the filter options", () => {
      expect(container.container.querySelector("#location")).toBeInTheDocument()
      expect(container.getByLabelText("Date")).toBeInTheDocument()
      expect(container.getByTestId("select-purposes-of-visit")).toBeInTheDocument()
      expect(container.getByLabelText("Insurance Carrier")).toBeInTheDocument()
    });

    and("user view options to change the appointment date", () => {
      inputDate()
    });

    and(
      "user view options to change the Purpose of the Visit",
      () => {
        expect(container.getByTestId("select-purposes-of-visit")).toBeInTheDocument()
      }
    );
  });

  test("EPIC_EPP-44_STORY_EPP-2507 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and user view options to change the insurance.", ({
    given,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation()
    });

    and("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation()
    });

    then("user navigates to the search screen", async () => {
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn()
      };

      mock.onGet(`/ecp/appointments/appointment-types`).reply(200, mockSuggestionReal);
      mock.onPut(`/ecp/appointments/available-slot?searchText=Texas`).reply(200, mockSubmitFilterReal);

      global.navigator.geolocation = mockGeolocation;
      window.matchMedia = createMatchMedia('1920px');
      act(() => {
        container = render(
          <Provider store={store}>
            {Appointment.getLayout(<Appointment />)}
          </Provider>
        );
      })
      await waitFor(() => {
        container.getByText(/City, state, or zip/i);
        expect(container.getByText(/City, state, or zip/i)).toBeInTheDocument();
      });
    });

    and("user enters the location", () => {
      const locationField = container.container.querySelector('#location');
      fireEvent.change(locationField, { target: { value: "Texas" } })
    });

    and("user selects the date of appointment", () => {
      inputDate()
    });

    and("user chooses the purpose of the visit", async () => {
      await inputPurpose(container)
    });

    and("user enters the insurance name", () => {
      inputInsurance()
    });

    and("user clicks on the Search button", async () => {
      const searchBtn = container.getByTestId("searchbtn")
      fireEvent.click(searchBtn)

      await waitFor(() => {
        container.getByText(/Filter/i);
      });
    });

    and(
      "user views the results in the Schedule Appointments screen",
      () => {
        expect(container.getByText(/Filter/i)).toBeInTheDocument()
      }
    );

    and("user views the selected location.", () => {
      const locationField = container.container.querySelector("#location")
      expect(locationField.value).toBe("Texas")
    });

    and(
      "user views an option to search locations using City or State or Zipcode with the selected location",
      () => {
        expect(container.container.querySelector("#location")).toBeInTheDocument()
      }
    );

    and(
      "user has the option to allow the system to detect their location",
      () => {
        defaultValidation()
      }
    );

    and("user views the filter options", () => {
      expect(container.container.querySelector("#location")).toBeInTheDocument()
      expect(container.getByLabelText("Date")).toBeInTheDocument()
      expect(container.getByTestId("select-purposes-of-visit")).toBeInTheDocument()
      expect(container.getByLabelText("Insurance Carrier")).toBeInTheDocument()
    });

    and("user view options to change the appointment date", () => {
      expect(container.getByLabelText("Date")).toBeInTheDocument()
    });

    and(
      "user view options to change the Purpose of the Visit",
      () => {
        expect(container.getByTestId("select-purposes-of-visit")).toBeInTheDocument()
      }
    );

    and("user view options to change the insurance.", () => {
      expect(container.getByLabelText("Insurance Carrier")).toBeInTheDocument()
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2507 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user views the insurance carrier as blank when the user not entered", ({
    given,
    and,
    then,
    when,
  }) => {
    given("user launch the Marketing Site URL", () => {
      defaultValidation()
    });

    and("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation()
    });

    then("user navigates to the search screen", async () => {
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn()
      };

      mock.onGet(`/ecp/appointments/appointment-types`).reply(200, mockSuggestionReal);
      mock.onPut(`/ecp/appointments/available-slot?searchText=Texas`).reply(200, mockSubmitFilterReal);

      global.navigator.geolocation = mockGeolocation;
      window.matchMedia = createMatchMedia('1920px');
      act(() => {
        container = render(
          <Provider store={store}>
            {Appointment.getLayout(<Appointment />)}
          </Provider>
        );
      })
      await waitFor(() => {
        container.getByText(/City, state, or zip/i);
        expect(container.getByText(/City, state, or zip/i)).toBeInTheDocument();
      });
    });

    and("user enters the location", () => {
      const locationField = container.container.querySelector('#location');
      fireEvent.change(locationField, { target: { value: "Texas" } })
    });

    and("user selects the date of appointment", () => {
      inputDate()
    });

    and("user chooses the purpose of the visit", async () => {
      await inputPurpose(container)
    });

    and("user enters the insurance name", () => {
      inputInsurance()
    });

    and("user clicks on the Search button", async () => {
      const searchBtn = container.getByTestId("searchbtn")
      fireEvent.click(searchBtn)

      await waitFor(() => {
        container.getByText(/Filter/i);
      });
    });

    and(
      "user views the results in the Schedule Appointments screen",
      () => {
        expect(container.getByText(/Filter/i)).toBeInTheDocument()
      }
    );

    and("user views the purpose of the visit as blank", () => {
      const purposeInput = container.getByTestId("select-purposes-of-visit");
      fireEvent.change(purposeInput, { target: { value: "" } });
    });

    when("the user not entered the purpose of the visit", () => {
      defaultValidation()
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2507-Verify User should be able to view the following filters", ({
    given,
    when,
    then,
    and,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation()
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation()
    });

    then("user should navigated to the search screen", async () => {
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };
      mock.onGet(`/ecp/appointments/appointment-types`).reply(200, mockSuggestionReal);
      mock.onPut(`/ecp/appointments/available-slot?searchText=Texas`).reply(200, mockSubmitFilterReal);

      global.navigator.geolocation = mockGeolocation;
      window.matchMedia = createMatchMedia("1920px");
      act(() => {
        container = render(
          <Provider store={store}>
            {Appointment.getLayout(<Appointment />)}
          </Provider>
        );
      });
      await waitFor(() => container.getByText(/City, state, or zip/i));
      expect(container.getByText(/City, state, or zip/i)).toBeInTheDocument();
    });

    and("user should fill the location", () => {
      const locationField = container.container.querySelector('#location');
      fireEvent.change(locationField, { target: { value: "Texas" } })
    });

    and("user should select the date of appointment", () => {
      inputDate()
    });

    and("user should select the purpose of the visit", async () => {
      await inputPurpose(container)
    });

    and("user should fill the insurance name", () => {
      inputInsurance()
    });

    when("user clicks on the Search button", async () => {
      const searchBtn = container.getByTestId("searchbtn");
      fireEvent.click(searchBtn);

      await waitFor(() => {
        container.getByText(/Filter/i);
      });
    });

    then(
      "user should see the results on the Schedule Appointments screen",
      () => {
        expect(container.getByText(/Filter/i)).toBeInTheDocument()
      }
    );

    and(
      "user should see the selected location, date of appointment, the purpose of visit, and insurance carrier",
      () => {
        const locationField = container.container.querySelector("#location")
        expect(locationField.value).toBe("Texas")
      }
    );

    and(
      "user should be able to view the following filters as below",
      async (table) => {
        const filterBtn = container.getByTestId("filterbtn");
        fireEvent.click(filterBtn);

        await waitFor(() => {
          container.getByText(/Filter By/i);
        });
      }
    );
  });

  test("EPIC_EPP-44_STORY_EPP-2507-Verify User should be able to apply the Language filter", ({
    given,
    when,
    then,
    and,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation()
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation()
    });

    then("user should navigated to the search screen", async () => {
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };

      mock.onGet(`/ecp/appointments/appointment-types`).reply(200, mockSuggestionReal);
      mock.onPut(`/ecp/appointments/available-slot?searchText=Texas`).reply(200, mockSubmitFilterReal);

      global.navigator.geolocation = mockGeolocation;
      window.matchMedia = createMatchMedia("1920px");
      act(() => {
        container = render(
          <Provider store={store}>
            {Appointment.getLayout(<Appointment />)}
          </Provider>
        );
      });
      await waitFor(() => container.getByText(/City, state, or zip/i));
      expect(container.getByText(/City, state, or zip/i)).toBeInTheDocument();
    });

    and("user should fill the location", () => {
      const locationField = container.container.querySelector('#location');
      fireEvent.change(locationField, { target: { value: "Texas" } })
    });

    and("user should select the date of appointment", () => {
      inputDate()
    });

    and("user should select the purpose of the visit", async () => {
      await inputPurpose(container)
    });

    and("user should fill the insurance name", () => {
      inputInsurance()
    });

    when("user clicks on the Search button", async () => {
      const searchBtn = container.getByTestId("searchbtn");
      fireEvent.click(searchBtn);

      await waitFor(() => {
        container.getByText(/Filter/i);
      });
    });

    then(
      "user should see the results on the Schedule Appointments screen",
      () => {
        expect(container.getByText(/Filter/i)).toBeInTheDocument();
      }
    );

    and(
      "user should see the selected location, date of appointment, the purpose of visit, and insurance carrier",
      () => {
        expect(container.getByText(/Filter/i)).toBeInTheDocument();
      }
    );

    when("user selects Language filter", async () => {
      const filterBtn = container.getByTestId("filterbtn");
      fireEvent.click(filterBtn);

      await waitFor(() => {
        container.getByText(/Filter By/i);
      });
    });

    then("user should see Filtered Language", () => {
      defaultValidation()
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2507-Verify User should be able to apply the Gender filter", ({
    given,
    when,
    then,
    and,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation()
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation()
    });

    then("user should navigated to the search screen", async () => {
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };
      mock.onGet(`/ecp/appointments/appointment-types`).reply(200, mockSuggestionReal);
      mock.onPut(`/ecp/appointments/available-slot?searchText=Texas`).reply(200, mockSubmitFilterReal);

      global.navigator.geolocation = mockGeolocation;
      window.matchMedia = createMatchMedia("1920px");
      act(() => {
        container = render(
          <Provider store={store}>
            {Appointment.getLayout(<Appointment />)}
          </Provider>
        );
      });
      await waitFor(() => container.getByText(/City, state, or zip/i));
      expect(container.getByText(/City, state, or zip/i)).toBeInTheDocument();
    });

    and("user should fill the location", () => {
      const locationField = container.container.querySelector('#location');
      fireEvent.change(locationField, { target: { value: "Texas" } })
    });

    and("user should select the date of appointment", () => {
      inputDate()
    });

    and("user should select the purpose of the visit", async () => {
      await inputPurpose(container)
    });

    and("user should fill the insurance name", () => {
      inputInsurance()
    });

    when("user clicks on the Search button", async () => {
      const searchBtn = container.getByTestId("searchbtn");
      fireEvent.click(searchBtn);

      await waitFor(() => {
        container.getByText(/Filter/i);
      });
    });

    then(
      "user should see the results on the Schedule Appointments screen",
      () => {
        expect(container.getByText(/Filter/i)).toBeInTheDocument()
      }
    );

    and(
      "user should see the selected location, date of appointment, the purpose of visit, and insurance carrier",
      () => {
        const locationField = container.container.querySelector("#location")
        expect(locationField.value).toBe("Texas")
      }
    );

    when("user selects Gender filter", async () => {
      const filterBtn = container.getByTestId("filterbtn");
      fireEvent.click(filterBtn);

      await waitFor(() => {
        container.getByText(/Filter By/i);
      });
    });

    then("user should see Filtered Gender", () => {
      defaultValidation()
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2507-Verify User should be able to apply the Insurance In/Out of Network filter", ({
    given,
    when,
    then,
    and,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation()
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation()
    });

    then("user should navigated to the search screen", async () => {
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };

      mock.onGet(`/ecp/appointments/appointment-types`).reply(200, mockSuggestionReal);
      mock.onPut(`/ecp/appointments/available-slot?searchText=Texas`).reply(200, mockSubmitFilterReal);

      global.navigator.geolocation = mockGeolocation;
      window.matchMedia = createMatchMedia("1920px");
      act(() => {
        container = render(
          <Provider store={store}>
            {Appointment.getLayout(<Appointment />)}
          </Provider>
        );
      });
      await waitFor(() => container.getByText(/City, state, or zip/i));
      expect(container.getByText(/City, state, or zip/i)).toBeInTheDocument();
    });

    and("user should fill the location", () => {
      const locationField = container.container.querySelector('#location');
      fireEvent.change(locationField, { target: { value: "Texas" } })
    });

    and("user should select the date of appointment", () => {
      inputDate()
    });

    and("user should select the purpose of the visit", async () => {
      await inputPurpose(container)
    });

    and("user should fill the insurance name", () => {
      inputInsurance()
    });

    when("user clicks on the Search button", async () => {
      const searchBtn = container.getByTestId("searchbtn");
      fireEvent.click(searchBtn);

      await waitFor(() => {
        container.getByText(/Filter/i);
      });
    });

    then(
      "user should see the results on the Schedule Appointments screen",
      () => {
        expect(container.getByText(/Filter/i)).toBeInTheDocument()
      }
    );

    and(
      "user should see the selected location, date of appointment, the purpose of visit, and insurance carrier",
      () => {
        const locationField = container.container.querySelector("#location")
        expect(locationField.value).toBe("Texas")
      }
    );

    when("user selects Insurance In/Out of Network filter", async () => {
      const filterBtn = container.getByTestId("filterbtn");
      fireEvent.click(filterBtn);

      await waitFor(() => {
        container.getByText(/Filter By/i);
      });
    });

    then('user should see Filtered Insurance In/Out of Network"', () => {
      defaultValidation()
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2507-Verify User should be able to apply the Available Today (Provider) filter", ({
    given,
    when,
    then,
    and,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation()
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation()
    });

    then("user should navigated to the search screen", async () => {
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };

      mock.onGet(`/ecp/appointments/appointment-types`).reply(200, mockSuggestionReal);
      mock.onPut(`/ecp/appointments/available-slot?searchText=Texas`).reply(200, mockSubmitFilterReal);

      global.navigator.geolocation = mockGeolocation;
      window.matchMedia = createMatchMedia("1920px");
      act(() => {
        container = render(
          <Provider store={store}>
            {Appointment.getLayout(<Appointment />)}
          </Provider>
        );
      });
      await waitFor(() => container.getByText(/City, state, or zip/i));
      expect(container.getByText(/City, state, or zip/i)).toBeInTheDocument();
    });

    and("user should fill the location", () => {
      const locationField = container.container.querySelector('#location');
      fireEvent.change(locationField, { target: { value: "Texas" } })
    });

    and("user should select the date of appointment", () => {
      inputDate()
    });

    and("user should select the purpose of the visit", async () => {
      await inputPurpose(container)
    });

    and("user should fill the insurance name", () => {
      inputInsurance()
    });

    when("user clicks on the Search button", async () => {
      const searchBtn = container.getByTestId("searchbtn");
      fireEvent.click(searchBtn);

      await waitFor(() => {
        container.getByText(/Filter/i);
      });
    });

    then(
      "user should see the results on the Schedule Appointments screen",
      () => {
        expect(container.getByText(/Filter/i)).toBeInTheDocument()
      }
    );

    and(
      "user should see the selected location, date of appointment, the purpose of visit, and insurance carrier",
      () => {
        const locationField = container.container.querySelector("#location")
        expect(locationField.value).toBe("Texas")
      }
    );

    when(
      "user selects Insurance Available Today (Provider) filter",
      async () => {
        const filterBtn = container.getByTestId("filterbtn");
        fireEvent.click(filterBtn);

        await waitFor(() => {
          container.getByText(/Filter By/i);
        });

        const filter = container.getAllByText("Available Today")[0];
        fireEvent.click(filter);

        const done = container.getByRole("button", { name: "Done" });
        fireEvent.click(done);
        // await waitFor(() => {
        //   container.getByText("Available Today");
        //   expect(container.getByText("Available Today")).toBeInTheDocument();
        // });
      }
    );

    then("user should see Filtered Available Today (Provider)", () => {
      // expect(container.getByText("Available Today")).toBeInTheDocument();
      // fireEvent.click(container.getByTestId("CloseIcon"))
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2507-Verify User should see an option to clear those filters when applied", ({
    given,
    when,
    then,
    and,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation()
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation()
    });

    then("user should navigated to the search screen", async () => {
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };

      mock.onGet(`/ecp/appointments/appointment-types`).reply(200, mockSuggestionReal);
      mock.onPut(`/ecp/appointments/available-slot?searchText=Texas`).reply(200, mockSubmitFilterReal);

      global.navigator.geolocation = mockGeolocation;
      window.matchMedia = createMatchMedia("1920px");
      act(() => {
        container = render(
          <Provider store={store}>
            {Appointment.getLayout(<Appointment />)}
          </Provider>
        );
      });
      await waitFor(() => container.getByText(/City, state, or zip/i));
      expect(container.getByText(/City, state, or zip/i)).toBeInTheDocument();
    });

    and("user should fill the location", () => {
      const locationField = container.container.querySelector('#location');
      fireEvent.change(locationField, { target: { value: "Texas" } })
    });

    and("user should select the date of appointment", () => {
      inputDate()
    });

    and("user should select the purpose of the visit", async () => {
      await inputPurpose(container)
    });

    and("user should fill the insurance name", () => {
      inputInsurance()
    });

    when("user clicks on the Search button", async () => {
      const searchBtn = container.getByTestId("searchbtn");
      fireEvent.click(searchBtn);

      await waitFor(() => {
        container.getByText(/Filter/i);
      });
    });

    then(
      "user should see the results on the Schedule Appointments screen",
      () => {
        expect(container.getByText(/Filter/i)).toBeInTheDocument()
      }
    );

    and(
      "user should see the selected location, date of appointment, the purpose of visit, and insurance carrier",
      () => {
        const locationField = container.container.querySelector("#location")
        expect(locationField.value).toBe("Texas")
      }
    );

    when(
      "user selects Insurance Available Today (Provider) filter",
      async () => {
        const filterBtn = container.getByTestId("filterbtn");
        fireEvent.click(filterBtn);

        await waitFor(() => {
          container.getByText(/Filter By/i);
        });

        const filter = container.getAllByText("Available Today")[0];
        fireEvent.click(filter);

        const done = container.getByRole("button", { name: "Done" });
        act(() => {
          fireEvent.click(done);
        })
        // await waitFor(() => {
        //   container.getByText("Available Today");
        // });
        // expect(container.getByText("Available Today")).toBeInTheDocument();
      }
    );

    then("user should see Filtered Available Today (Provider)", () => {
      // expect(container.getByText("Available Today")).toBeInTheDocument();
    });

    and("user should see an option to clear the applied filter", () => {
      // expect(container.getByTestId("CloseIcon")).toBeInTheDocument()
      // fireEvent.click(container.getByTestId("CloseIcon"))
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2507-Verify User should see the filter was removed when user clicks on Clear option", ({
    given,
    when,
    then,
    and,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation()
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation()
    });

    then("user should navigated to the search screen", async () => {
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };

      mock.onGet(`/ecp/appointments/appointment-types`).reply(200, mockSuggestionReal);
      mock.onPut(`/ecp/appointments/available-slot?searchText=Texas`).reply(200, mockSubmitFilterReal);

      global.navigator.geolocation = mockGeolocation;
      window.matchMedia = createMatchMedia("1920px");
      act(() => {
        container = render(
          <Provider store={store}>
            {Appointment.getLayout(<Appointment />)}
          </Provider>
        );
      });
      await waitFor(() => container.getByText(/City, state, or zip/i));
      expect(container.getByText(/City, state, or zip/i)).toBeInTheDocument();
    });

    and("user should fill the location", () => {
      const locationField = container.container.querySelector('#location');
      fireEvent.change(locationField, { target: { value: "Texas" } })
    });

    and("user should select the date of appointment", () => {
      inputDate()
    });

    and("user should select the purpose of the visit", async () => {
      await inputPurpose(container)
    });

    and("user should fill the insurance name", () => {
      inputInsurance()
    });

    when("user clicks on the Search button", async () => {
      const searchBtn = container.getByTestId("searchbtn")
      fireEvent.click(searchBtn)

      await waitFor(() => {
        container.getByText(/Filter/i);
      });
    });

    then(
      "user should see the results on the Schedule Appointments screen",
      () => {
        expect(container.getByText(/Filter/i)).toBeInTheDocument()
      }
    );

    and(
      "user should see the selected location, date of appointment, the purpose of visit, and insurance carrier",
      () => {
        const locationField = container.container.querySelector("#location")
        expect(locationField.value).toBe("Texas")
      }
    );

    when(
      "user selects Insurance Available Today (Provider) filter",
      async () => {
        const filterBtn = container.getByTestId("filterbtn");
        fireEvent.click(filterBtn);

        await waitFor(() => {
          container.getByText(/Filter By/i);
        });

        const filter = container.getAllByText("Available Today")[0];
        fireEvent.click(filter);

        const done = container.getByRole("button", { name: "Done" });
        fireEvent.click(done);
        // await waitFor(() => {
        //   container.getByText("Available Today");
        //   expect(container.getByText("Available Today")).toBeInTheDocument();
        // });
      }
    );

    then("user should see Filtered Available Today (Provider)", () => {
      // expect(container.getByText("Available Today")).toBeInTheDocument();
    });

    and("user should see an option to clear the applied filter", () => {
      // expect(container.getByTestId("CloseIcon")).toBeInTheDocument()
    });

    and(
      "user should see the filter was removed when user clicks on Clear option",
      async () => {
        // fireEvent.click(container.getByTestId("CloseIcon"))
        await waitFor(() => {
          container.getByText(/Filter/i);
        });
        expect(container.getByText(/Filter/i)).toBeInTheDocument()
      }
    );
  });
});
