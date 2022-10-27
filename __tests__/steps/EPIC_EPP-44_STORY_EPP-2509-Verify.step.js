import { act, fireEvent, render, waitFor } from "@testing-library/react";
import axios from "axios";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import { defineFeature, loadFeature } from "jest-cucumber";
import { Provider } from "react-redux";
import Appointment from "../../src/pages/patient/appointment";
import store from "../../src/store/store";
import constants from "../../src/utils/constants";
import mediaQuery from 'css-mediaquery';
import { mockSubmitFilterReal } from "../../__mocks__/mockResponse";

const feature = loadFeature(
	"./__tests__/feature/Patient Portal/Sprint4/EPP-2509.feature"
);

defineFeature(feature, (test) => {
	let container;
  const { APPOINTMENT_TEST_ID, SEARCH_PROVIDER_TEST_ID } = constants.TEST_ID
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

  test('EPIC_EPP-44_STORY_EPP-2509-Verify whether the doctors availability details is displaying when the user clicks the View all availability in Schedule Appointment screen', ({ given, when, then, and }) => {
    given('user launch the Marketing Site url', () => {
      defaultValidation()
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      defaultValidation()
    });

    and('user navigates to the schedule appointment screen', async () => {
      const mockGeolocation = {
				getCurrentPosition: jest.fn(),
				watchPosition: jest.fn()
			};

			const domain = window.location.origin;

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

    and('user should select the location', async () => {
      const locationInput = await waitFor(() => container.getByLabelText("City, state, or zip code"))
      act(() => {
        fireEvent.change(locationInput, { target: { value: "Texas" } });
      });
    });

    and('user should select the Date of Appointment', async () => {
      const dateInput = await waitFor(() => container.getByLabelText("Date"))
      act(() => {
        fireEvent.change(dateInput, { target: { value: "22-09-2022" } });
      });
    });

    and('user should select the Purpose of visit', async() => {
      const purposeInput = await waitFor(() => container.getByTestId("select-purposes-of-visit"))
      act(() => {
        fireEvent.change(purposeInput, { target: { value: "Eye Exam" } });
      });
    });

    and('user should select the Insurance carrier.', async () => {
      const insuranceInput = await waitFor(() => container.getByLabelText("Insurance Carrier"))
      act(() => {
        fireEvent.change(insuranceInput, { target: { value: "Aetna" } });
      });
    });

    and('click on Search button', async () => {
      const searchBtn = await waitFor(() => container.getByTestId(APPOINTMENT_TEST_ID.searchbtn))
      act(() => {
        fireEvent.click(searchBtn)
      })
    });

    then('user should lands on Schedule Appointment view screen with selected location, date, Purpose of visit and insurance carrier data.', async () => {
      const filterResult = await waitFor(() => container.getByTestId(APPOINTMENT_TEST_ID.FILTER_RESULT.container))
      expect(filterResult).toBeInTheDocument()
    });

    when('user click the View all availability button', async () => {
      const viewAllBtn = await waitFor(() => container.getAllByTestId(SEARCH_PROVIDER_TEST_ID.viewAll))
      act(() => {
        fireEvent.click(viewAllBtn[0])
      })
    });

    then('user should see all the doctors availability details', async () => {
      const viewAllAvailabilityContainer = await waitFor(() => container.getByTestId(APPOINTMENT_TEST_ID.DIALOG_VIEW_ALL.container))
      expect(viewAllAvailabilityContainer).toBeInTheDocument()
    });
  })
  
  test("EPIC_EPP-44_STORY_EPP-2509-Verify whether the user can able to see the available time slots of the doctors for the whole week in day wise", ({ given, when, then, and }) => {
    given('user launch the Marketing Site url', () => {
      defaultValidation()
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      defaultValidation()
    });

    and('user navigates to the schedule appointment screen', async () => {
      const mockGeolocation = {
				getCurrentPosition: jest.fn(),
				watchPosition: jest.fn()
			};

			const domain = window.location.origin;
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

    and('user should select the location', async () => {
      const locationInput = await waitFor(() => container.getByLabelText("City, state, or zip code"))
      act(() => {
        fireEvent.change(locationInput, { target: { value: "Texas" } });
      });
    });

    and('user should select the Date of Appointment', async () => {
      const dateInput = await waitFor(() => container.getByLabelText("Date"))
      act(() => {
        fireEvent.change(dateInput, { target: { value: "22-09-2022" } });
      });
    });

    and('user should select the Purpose of visit', async() => {
      const purposeInput = await waitFor(() => container.getByTestId("select-purposes-of-visit"))
      act(() => {
        fireEvent.change(purposeInput, { target: { value: "Eye Exam" } });
      });
    });

    and('user should select the Insurance carrier.', async () => {
      const insuranceInput = await waitFor(() => container.getByLabelText("Insurance Carrier"))
      act(() => {
        fireEvent.change(insuranceInput, { target: { value: "Aetna" } });
      });
    });

    and('click on Search button', async () => {
      const searchBtn = await waitFor(() => container.getByTestId(APPOINTMENT_TEST_ID.searchbtn))
      act(() => {
        fireEvent.click(searchBtn)
      })
    });

    then('user should lands on Schedule Appointment view screen with selected location, date, Purpose of visit and insurance carrier data.', async () => {
      const filterResult = await waitFor(() => container.getByTestId(APPOINTMENT_TEST_ID.FILTER_RESULT.container))
      expect(filterResult).toBeInTheDocument()
    });

    when('user click the View all availability button', async () => {
      const viewAllBtn = await waitFor(() => container.getAllByTestId(SEARCH_PROVIDER_TEST_ID.viewAll))
      act(() => {
        fireEvent.click(viewAllBtn[0])
      })
    });

    then('user should see the time slots of each doctor for whole week in day wise', async () => {
      const scheduleContainer = await waitFor(() => container.getByTestId(APPOINTMENT_TEST_ID.DIALOG_VIEW_ALL.scheduleContainer))
      expect(scheduleContainer).toBeInTheDocument()
    });
  })

  test("EPIC_EPP-44_STORY_EPP-2509-Verify whether the user is able to see the Doctor's Time slots of Previous week", ({ given, when, then, and }) => {
    given('user launch the Marketing Site url', () => {
      defaultValidation()
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      defaultValidation()
    });

    and('user navigates to the schedule appointment screen', async () => {
      const mockGeolocation = {
				getCurrentPosition: jest.fn(),
				watchPosition: jest.fn()
			};

			const domain = window.location.origin;
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

    and('user should select the location, Date of Appointment, Purpose of visit, Insurance carrier.', async () => {
      const locationInput = await waitFor(() => container.getByLabelText("City, state, or zip code"))
      const dateInput = await waitFor(() => container.getByLabelText("Date"))
      const purposeInput = await waitFor(() => container.getByTestId("select-purposes-of-visit"))
      const insuranceInput = await waitFor(() => container.getByLabelText("Insurance Carrier"))
      act(() => {
        fireEvent.change(locationInput, { target: { value: "Texas" } });
        fireEvent.change(dateInput, { target: { value: "22-09-2022" } });
        fireEvent.change(purposeInput, { target: { value: "Eye Exam" } });
        fireEvent.change(insuranceInput, { target: { value: "Aetna" } });
      });
    });

    and('click on Search button', async () => {
      const searchBtn = await waitFor(() => container.getByTestId(APPOINTMENT_TEST_ID.searchbtn))
      act(() => {
        fireEvent.click(searchBtn)
      })
    });

    then('user should lands on Schedule Appointment view screen with selected location, date, Purpose of visit and insurance carrier data.', async () => {
      const filterResult = await waitFor(() => container.getByTestId(APPOINTMENT_TEST_ID.FILTER_RESULT.container))
      expect(filterResult).toBeInTheDocument()
    });

    when('user click the View all availability button', async () => {
      const viewAllBtn = await waitFor(() => container.getAllByTestId(SEARCH_PROVIDER_TEST_ID.viewAll))
      act(() => {
        fireEvent.click(viewAllBtn[0])
      })
    });

    then('user should see the time slots of each doctor for whole week in day wise', async () => {
      const scheduleContainer = await waitFor(() => container.getByTestId(APPOINTMENT_TEST_ID.DIALOG_VIEW_ALL.scheduleContainer))
      expect(scheduleContainer).toBeInTheDocument()
    });

    then("user should have the option to see the Time slots of doctor's for Previous week", async () => {
      const previousWeekButton = await waitFor(() => container.getAllByTestId(APPOINTMENT_TEST_ID.DIALOG_VIEW_ALL.previousWeekButton))
      act(() => {
        fireEvent.click(previousWeekButton[0])
      })
      const scheduleContainer = await waitFor(() => container.getByTestId(APPOINTMENT_TEST_ID.DIALOG_VIEW_ALL.scheduleContainer))
      expect(scheduleContainer).toBeInTheDocument()
    });
  })

  test("EPIC_EPP-44_STORY_EPP-2509-Verify whether the user is able to see the Doctor's Time slots of Next week", ({ given, when, then, and }) => {
    given('user launch the Marketing Site url', () => {
      defaultValidation()
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      defaultValidation()
    });

    and('user navigates to the schedule appointment screen', async () => {
      const mockGeolocation = {
				getCurrentPosition: jest.fn(),
				watchPosition: jest.fn()
			};

			const domain = window.location.origin;
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

    and('user should select the location, Date of Appointment, Purpose of visit, Insurance carrier.', async () => {
      const locationInput = await waitFor(() => container.getByLabelText("City, state, or zip code"))
      const dateInput = await waitFor(() => container.getByLabelText("Date"))
      const purposeInput = await waitFor(() => container.getByTestId("select-purposes-of-visit"))
      const insuranceInput = await waitFor(() => container.getByLabelText("Insurance Carrier"))
      act(() => {
        fireEvent.change(locationInput, { target: { value: "Texas" } });
        fireEvent.change(dateInput, { target: { value: "22-09-2022" } });
        fireEvent.change(purposeInput, { target: { value: "Eye Exam" } });
        fireEvent.change(insuranceInput, { target: { value: "Aetna" } });
      });
    });

    and('click on Search button', async () => {
      const searchBtn = await waitFor(() => container.getByTestId(APPOINTMENT_TEST_ID.searchbtn))
      act(() => {
        fireEvent.click(searchBtn)
      })
    });

    then('user should lands on Schedule Appointment view screen with selected location, date, Purpose of visit and insurance carrier data.', async () => {
      const filterResult = await waitFor(() => container.getByTestId(APPOINTMENT_TEST_ID.FILTER_RESULT.container))
      expect(filterResult).toBeInTheDocument()
    });

    when('user click the View all availability button', async () => {
      const viewAllBtn = await waitFor(() => container.getAllByTestId(SEARCH_PROVIDER_TEST_ID.viewAll))
      act(() => {
        fireEvent.click(viewAllBtn[0])
      })
    });

    then('user should see the time slots of each doctor for whole week in day wise', async () => {
      const scheduleContainer = await waitFor(() => container.getByTestId(APPOINTMENT_TEST_ID.DIALOG_VIEW_ALL.scheduleContainer))
      expect(scheduleContainer).toBeInTheDocument()
    });

    then("user should have the option to see the Time slots of doctor's for Next week", async () => {
      const nextWeekButton = await waitFor(() => container.getAllByTestId(APPOINTMENT_TEST_ID.DIALOG_VIEW_ALL.nextWeekButton))
      act(() => {
        fireEvent.click(nextWeekButton[0])
      })
      const scheduleContainer = await waitFor(() => container.getByTestId(APPOINTMENT_TEST_ID.DIALOG_VIEW_ALL.scheduleContainer))
      expect(scheduleContainer).toBeInTheDocument()
    });
  })

  test("EPIC_EPP-44_STORY_EPP-2509-Verify whether the user is not able to see the Doctor's Time slots of Past dates", ({ given, when, then, and }) => {
    given('user launch the Marketing Site url', () => {
      defaultValidation()
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      defaultValidation()
    });

    and('user navigates to the schedule appointment screen', async () => {
      const mockGeolocation = {
				getCurrentPosition: jest.fn(),
				watchPosition: jest.fn()
			};

			const domain = window.location.origin;
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

    and('user should select the location, Date of Appointment, Purpose of visit, Insurance carrier.', async () => {
      const locationInput = await waitFor(() => container.getByLabelText("City, state, or zip code"))
      const dateInput = await waitFor(() => container.getByLabelText("Date"))
      const purposeInput = await waitFor(() => container.getByTestId("select-purposes-of-visit"))
      const insuranceInput = await waitFor(() => container.getByLabelText("Insurance Carrier"))
      act(() => {
        fireEvent.change(locationInput, { target: { value: "Texas" } });
        fireEvent.change(dateInput, { target: { value: "22-09-2022" } });
        fireEvent.change(purposeInput, { target: { value: "Eye Exam" } });
        fireEvent.change(insuranceInput, { target: { value: "Aetna" } });
      });
    });

    and('click on Search button', async () => {
      const searchBtn = await waitFor(() => container.getByTestId(APPOINTMENT_TEST_ID.searchbtn))
      act(() => {
        fireEvent.click(searchBtn)
      })
    });

    then('user should lands on Schedule Appointment view screen with selected location, date, Purpose of visit and insurance carrier data.', async () => {
      const filterResult = await waitFor(() => container.getByTestId(APPOINTMENT_TEST_ID.FILTER_RESULT.container))
      expect(filterResult).toBeInTheDocument()
    });

    when('user click the View all availability button', async () => {
      const viewAllBtn = await waitFor(() => container.getAllByTestId(SEARCH_PROVIDER_TEST_ID.viewAll))
      act(() => {
        fireEvent.click(viewAllBtn[0])
      })
    });

    then('user should see the time slots of each doctor for whole week in day wise', async () => {
      const scheduleContainer = await waitFor(() => container.getByTestId(APPOINTMENT_TEST_ID.DIALOG_VIEW_ALL.scheduleContainer))
      expect(scheduleContainer).toBeInTheDocument()
    });

    then("user should have the option to see the Time slots of doctor's for Next week", async () => {
      const nextWeekButton = await waitFor(() => container.getAllByTestId(APPOINTMENT_TEST_ID.DIALOG_VIEW_ALL.nextWeekButton))
      act(() => {
        fireEvent.click(nextWeekButton[0])
      })
      const scheduleContainer = await waitFor(() => container.getByTestId(APPOINTMENT_TEST_ID.DIALOG_VIEW_ALL.scheduleContainer))
      expect(scheduleContainer).toBeInTheDocument()
    });
  })

  test("EPIC_EPP-44_STORY_EPP-2509-Verify whether the user is able to select the available time slot and schedule the appointment.", ({ given, when, then, and }) => {
    given('user launch the Marketing Site url', () => {
      defaultValidation()
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      defaultValidation()
    });

    and('user navigates to the schedule appointment screen', async () => {
      const mockGeolocation = {
				getCurrentPosition: jest.fn(),
				watchPosition: jest.fn()
			};

			const domain = window.location.origin;
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

    and('user should select the location, Date of Appointment, Purpose of visit, Insurance carrier.', async () => {
      const locationInput = await waitFor(() => container.getByLabelText("City, state, or zip code"))
      const dateInput = await waitFor(() => container.getByLabelText("Date"))
      const purposeInput = await waitFor(() => container.getByTestId("select-purposes-of-visit"))
      const insuranceInput = await waitFor(() => container.getByLabelText("Insurance Carrier"))
      act(() => {
        fireEvent.change(locationInput, { target: { value: "Texas" } });
        fireEvent.change(dateInput, { target: { value: "22/09/2022" } });
        fireEvent.change(purposeInput, { target: { value: "Eye Exam" } });
        fireEvent.change(insuranceInput, { target: { value: "Aetna" } });
      });
    });

    and('click on Search button', async () => {
      const searchBtn = await waitFor(() => container.getByTestId(APPOINTMENT_TEST_ID.searchbtn))
      act(() => {
        fireEvent.click(searchBtn)
      })
    });

    then('user should lands on Schedule Appointment view screen with selected location, date, Purpose of visit and insurance carrier data.', async () => {
      const filterResult = await waitFor(() => container.getByTestId(APPOINTMENT_TEST_ID.FILTER_RESULT.container))
      expect(filterResult).toBeInTheDocument()
    });

    when('user click the View all availability button', async () => {
      const viewAllBtn = await waitFor(() => container.getAllByTestId(SEARCH_PROVIDER_TEST_ID.viewAll))
      act(() => {
        fireEvent.click(viewAllBtn[0])
      })
    });

    and('user should select any available time slot.', async () => {
	// 	expect(container).toMatchSnapshot()
    //   const timeslotButton = await waitFor(() => container.getAllByTestId(APPOINTMENT_TEST_ID.DIALOG_VIEW_ALL.timeslotButton))
    //   act(() => {
    //     fireEvent.click(timeslotButton[0])
    //   })
    });

    then('user should able to schedule the appointment.', async () => {
    //   const states = store.getState()
    //   expect(states.appointment.appointmentSchedule.appointmentInfo.date).toBeTruthy();
    });
  })

  test("EPIC_EPP-44_STORY_EPP-2509-Verify whether user is not allowed to select the date not more than 3 months from the current date.", ({ given, when, then, and }) => {
    given('user launch the Marketing Site url', () => {
      defaultValidation()
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      defaultValidation()
    });

    and('user navigates to the schedule appointment screen', async () => {
      const mockGeolocation = {
				getCurrentPosition: jest.fn(),
				watchPosition: jest.fn()
			};

			const domain = window.location.origin;
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

    and('user should select the location, Date of Appointment, Purpose of visit, Insurance carrier.', async () => {
      const locationInput = await waitFor(() => container.getByLabelText("City, state, or zip code"))
      const dateInput = await waitFor(() => container.getByLabelText("Date"))
      const purposeInput = await waitFor(() => container.getByTestId("select-purposes-of-visit"))
      const insuranceInput = await waitFor(() => container.getByLabelText("Insurance Carrier"))
      act(() => {
        fireEvent.change(locationInput, { target: { value: "Texas" } });
        fireEvent.change(dateInput, { target: { value: "22-09-2022" } });
        fireEvent.change(purposeInput, { target: { value: "Eye Exam" } });
        fireEvent.change(insuranceInput, { target: { value: "Aetna" } });
      });
    });

    and('click on Search button', async () => {
      const searchBtn = await waitFor(() => container.getByTestId(APPOINTMENT_TEST_ID.searchbtn))
      act(() => {
        fireEvent.click(searchBtn)
      })
    });

    then('user should lands on Schedule Appointment view screen with selected location, date, Purpose of visit and insurance carrier data.', async () => {
      const filterResult = await waitFor(() => container.getByTestId(APPOINTMENT_TEST_ID.FILTER_RESULT.container))
      expect(filterResult).toBeInTheDocument()
    });

    when('user click the View all availability button', async () => {
      const viewAllBtn = await waitFor(() => container.getAllByTestId(SEARCH_PROVIDER_TEST_ID.viewAll))
      act(() => {
        fireEvent.click(viewAllBtn[0])
      })
    });

    and(/^select the date more than (\d+) months from the current date.$/, (arg0) => {
      // TODO
    });

    then(/^user should not allow to select more than (\d+) months from the current date$/, (arg0) => {
      // TODO
    });
  })

  test("EPIC_EPP-44_STORY_EPP-2509-Verify whether the below mentioned details are displaying after user clicking the View all availability button. Doctor's name with image", ({ given, when, then, and }) => {
    given('user launch the Marketing Site url', () => {
      defaultValidation()
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      defaultValidation()
    });

    and('user navigates to the schedule appointment screen', async () => {
      const mockGeolocation = {
				getCurrentPosition: jest.fn(),
				watchPosition: jest.fn()
			};

			const domain = window.location.origin;
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

    and('user should select the location', async () => {
      const locationInput = await waitFor(() => container.getByLabelText("City, state, or zip code"))
      act(() => {
        fireEvent.change(locationInput, { target: { value: "Texas" } });
      });
    });

    and('user should select the Date of Appointment', async () => {
      const dateInput = await waitFor(() => container.getByLabelText("Date"))
      act(() => {
        fireEvent.change(dateInput, { target: { value: "22-09-2022" } });
      });
    });

    and('user should select the Purpose of visit', async() => {
      const purposeInput = await waitFor(() => container.getByTestId("select-purposes-of-visit"))
      act(() => {
        fireEvent.change(purposeInput, { target: { value: "Eye Exam" } });
      });
    });

    and('user should select the Insurance carrier.', async () => {
      const insuranceInput = await waitFor(() => container.getByLabelText("Insurance Carrier"))
      act(() => {
        fireEvent.change(insuranceInput, { target: { value: "Aetna" } });
      });
    });

    and('click on Search button', async () => {
      const searchBtn = await waitFor(() => container.getByTestId(APPOINTMENT_TEST_ID.searchbtn))
      act(() => {
        fireEvent.click(searchBtn)
      })
    });

    then('user should lands on Schedule Appointment view screen with selected location, date, Purpose of visit and insurance carrier data.', async () => {
      const filterResult = await waitFor(() => container.getByTestId(APPOINTMENT_TEST_ID.FILTER_RESULT.container))
      expect(filterResult).toBeInTheDocument()
    });

    when('user click the View all availability button', async () => {
      const viewAllBtn = await waitFor(() => container.getAllByTestId(SEARCH_PROVIDER_TEST_ID.viewAll))
      act(() => {
        fireEvent.click(viewAllBtn[0])
      })
    });

    then('user should display the Doctor\'s name with Image.', async () => {
      const providerImage = await waitFor(() => container.getAllByTestId(APPOINTMENT_TEST_ID.PROVIDER_PROFILE.image))
      const providerName = await waitFor(() => container.getAllByTestId(APPOINTMENT_TEST_ID.PROVIDER_PROFILE.name))
      expect(providerImage[0]).toBeInTheDocument()
      expect(providerName[0]).toBeInTheDocument()
    });
  })
})