import { act, fireEvent, render, waitFor } from "@testing-library/react";
import axios from "axios";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import { defineFeature, loadFeature } from "jest-cucumber";
import { Provider } from "react-redux";
import Appointment from "../../src/pages/patient/appointment";
import store from "../../src/store/store";
const useRouter = jest.spyOn(require("next/router"), "useRouter");
import constants from "../../src/utils/constants";
import mediaQuery from "css-mediaquery";
import { mockSubmitFilterReal } from "../../__mocks__/mockResponse";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-2538.feature"
);

defineFeature(feature, (test) => {
  let container;
  const element = document.createElement("div");
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
    return (query) => ({
      matches: mediaQuery.match(query, { width }),
      addListener: () => {},
      removeListener: () => {},
    });
  }

  test("EPIC_EPP-44_STORY_EPP-2538 - Verify user able to apply the filters which will update the results accordingly from the patient portal.", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch Patient Portal url", () => {});

    when("user is logged in to the application", () => {});

    and("user clicks to Appointments menu", () => {});

    then("user navigates to Appointments screen", () => {});

    and("user lands on 'Appointments' screen", () => {});

    and("user views the schedule new appointments link", () => {});

    and("user clicks on the schedule new appointments", () => {});

    then("user navigates to the search screen", async () => {
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };

      const domain = window.location.origin;
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

    and("user enters the location", () => {
      const locationField = container.container.querySelector("#location");
      fireEvent.change(locationField, { target: { value: "Texas" } });
    });

    and("user selects the date of appointment", () => {});

    and("user chooses the purpose of the visit", () => {});

    and("user enters the insurance name", () => {});

    and("user clicks on the Search button", async () => {
      const searchBtn = container.getByTestId("searchbtn");
      fireEvent.click(searchBtn);

      await waitFor(() => {
        container.getByText(/Filter/i);
      });
    });

    and("user views the results in the Schedule Appointments screen", () => {});

    and("user views the Filters button", () => {
      const filterBtn = container.getByTestId("filterbtn");
      expect(filterBtn).toBeInTheDocument();
    });

    and("user clicks on the filter button", async () => {
      const filterBtn = container.getByTestId("filterbtn");
      fireEvent.click(filterBtn);

      await waitFor(() => {
        container.getByText(/Filter By/i);
      });
    });

    and("user views the filter for Available Today (Provider)", () => {
      // expect(container.getByText(/Available Today/i)).toBeInTheDocument();
    });

    and("user views the filter for Language of Provider", () => {
      // expect(container.getByText(/Language/i)).toBeInTheDocument();
    });

    and("user views the filter for Gender of Provider", () => {
      // expect(container.getByText(/Gender/i)).toBeInTheDocument();
    });

    and("user views the filter for Insurance In/Out of Network", () => {
      // expect(container.getAllByText(/Insurance/i)[1]).toBeInTheDocument();
    });

    and("user selects the filters", () => {
      // const language = container.getByText("Arabic");
      // fireEvent.click(language);
    });

    and("user applies the filters", async () => {
      // const done = container.getByRole("button", { name: "Done" });
      // fireEvent.click(done);
      // await waitFor(() => container.getByText("Arabic"));
      // expect(container.getByText("Arabic")).toBeInTheDocument();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2538 - Verify user able to view the filters in the schedule appointment screen from the patient portal and user apply the filter and getting result accordingly.", ({
    given,
    when,
    and,
  }) => {
    given("user launch Patient Portal url", () => {});

    when("user is logged in to the application", async () => {
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };

      const domain = window.location.origin;
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
      await waitFor(() => {
        container.getByText(/City, state, or zip/i);
      });
      expect(container.getByText(/City, state, or zip/i)).toBeInTheDocument();
    });

    and(
      "user clicks on the schedule new appointments search button",
      async () => {
        const locationField = container.container.querySelector("#location");
        fireEvent.change(locationField, { target: { value: "Texas" } });
        const searchBtn = container.getByTestId("searchbtn");
        fireEvent.click(searchBtn);

        await waitFor(() => {
          container.getByText(/Filter/i);
        });
      }
    );

    and("user views the results in the Schedule Appointments screen", () => {
      expect(container.getByText(/Filter/i)).toBeInTheDocument();
    });

    and("user views the Filters button", () => {
      expect(container.getByText(/Filter/i)).toBeInTheDocument();
    });

    and("user clicks on the filter button", async () => {
      const filterBtn = container.getByTestId("filterbtn");
      fireEvent.click(filterBtn);

      await waitFor(() => {
        container.getByText(/Filter By/i);
      });
    });

    and("user views the filter for Available Today (Provider)", () => {
      // expect(container.getByText(/Available Today/i)).toBeInTheDocument();
    });

    and("user views the filter for Language of Provider", () => {
      // expect(container.getByText(/Language/i)).toBeInTheDocument();
    });

    and("user views the filter for Gender of Provider", () => {
      // expect(container.getByText(/Gender/i)).toBeInTheDocument();
    });

    and("user views the filter for Insurance In/Out of Network", () => {
      // expect(container.getAllByText(/Insurance/i)[1]).toBeInTheDocument();
    });

    and("user selects the filters", () => {
      // const language = container.getByText("English");
      // fireEvent.click(language);
    });

    and("user applies the filters", async () => {
      // const done = container.getByRole("button", { name: "Done" });
      // fireEvent.click(done);
      // await waitFor(() => {
      //   container.getByText("English");
      // });
      // expect(container.getByText("English")).toBeInTheDocument();
    });

    and("user gets the updated result", () => {
      // expect(container.getByText("English")).toBeInTheDocument();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2538 - Verify user able to view the filters in the schedule appointment screen from the patient portal and the user clears the filter.", ({
    given,
    when,
    and,
  }) => {
    given("user launch Patient Portal url", () => {});

    when("user is logged in to the application", async () => {
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };

      const domain = window.location.origin;
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

    and(
      "user clicks on the schedule new appointments search button",
      async () => {
        const locationField = container.container.querySelector("#location");
        fireEvent.change(locationField, { target: { value: "Texas" } });
        const searchBtn = container.getByTestId("searchbtn");
        fireEvent.click(searchBtn);

        await waitFor(() => {
          container.getByText(/Filter/i);
        });
      }
    );

    and("user views the results in the Schedule Appointments screen", () => {
      expect(container.getByText(/Filter/i)).toBeInTheDocument();
    });

    and("user views the Filters button", () => {
      expect(container.getByText(/Filter/i)).toBeInTheDocument();
    });

    and("user clicks on the filter button", async () => {
      const filterBtn = container.getByTestId("filterbtn");
      fireEvent.click(filterBtn);

      await waitFor(() => {
        container.getByText(/Filter By/i);
      });
    });

    and("user views the filter for Available Today (Provider)", () => {
      // expect(container.getByText(/Available Today/i)).toBeInTheDocument();
    });

    and("user views the filter for Language of Provider", () => {
      // expect(container.getByText(/Language/i)).toBeInTheDocument();
    });

    and("user views the filter for Gender of Provider", () => {
      // expect(container.getByText(/Gender/i)).toBeInTheDocument();
    });

    and("user views the filter for Insurance In/Out of Network", () => {
      // expect(container.getAllByText(/Insurance/i)[1]).toBeInTheDocument();
    });

    and("user selects the filters", () => {
      // const language = container.getAllByText("English")[0];
      // fireEvent.click(language);
    });

    and("user applies the filters", async () => {
      // const done = container.getByRole("button", { name: "Done" });
      // fireEvent.click(done);
      // await waitFor(() => {
      //   container.getByText("English");
      // });
      // expect(container.getByText("English")).toBeInTheDocument();
    });

    and("user gets the updated result", () => {
      // expect(container.getByText("English")).toBeInTheDocument();
    });

    and("user removes the filter", () => {
      // const close = container.getAllByTestId('CloseIcon')[0];
      // expect(close).toBeInTheDocument()
      // fireEvent.click(close)
      // expect(container.queryByTestId('CloseIcon')).not.toBeInTheDocument()
    });
  });
});
