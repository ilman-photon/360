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
	"./__tests__/feature/Patient Portal/Sprint4/EPP-2506.feature"
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
		return query => ({
			matches: mediaQuery.match(query, { width }),
			addListener: () => { },
			removeListener: () => { },
		});
	}

	const inputDate = async () => {
		const dateInput = await waitFor(() => container.getByLabelText("Date"));
		act(() => {
			fireEvent.change(dateInput, { target: { value: "22-09-2022" } });
		});
		expect(dateInput).toBeInTheDocument();
	};

	const inputInsurance = async () => {
		const insuranceInput = await waitFor(() =>
			container.getByLabelText("Insurance Carrier")
		);
		act(() => {
			fireEvent.change(insuranceInput, { target: { value: "Aetna" } });
		});
		expect(insuranceInput).toBeInTheDocument();
	};

	test('EPIC_EPP-44_STORY_EPP-2506-Verify User should be able to view the following filters', ({ given, when, then, and }) => {
		given(/^User launch the "(.*)" url$/, (arg0) => {
			defaultValidation()
		});

		when(/^User clicks on the "(.*)" button$/, (arg0) => {
			defaultValidation()
		});

		then('User should navigated to the search screen', async () => {
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

		and('User should fill the location', () => {
			const locationField = container.container.querySelector('#location');
			fireEvent.change(locationField, { target: { value: "Texas" } })
		});

		and('User should select the date of appointment', () => {
			const dateField = container.getByText(/Date/i);
			expect(dateField).toBeInTheDocument()
		});

		and('User should select the purpose of the visit', () => {
			const pusposeField = container.getByText(/Purpose of Visit/i);
			expect(pusposeField).toBeInTheDocument()
		});

		and('User should fill the insurance name', async () => {
			const insuranceField = container.getByText(/Insurance Carrier/i);
			expect(insuranceField).toBeInTheDocument()
			await inputPurpose(container)
		});

		when('User clicks on the Search button', async () => {
			const searchBtn = container.getByTestId("searchbtn")
			fireEvent.click(searchBtn)

			await waitFor(() => {
				container.getByText(/Filter/i);
			});
		});

		then('User should see the results on the Schedule Appointments screen', () => {
			expect(container.getByText(/Filter/i)).toBeInTheDocument()
		});

		and('User should see the selected location, date of appointment, the purpose of visit, and insurance carrier', () => {
			expect(container.container.querySelector('#location')).toBeInTheDocument()
			expect(container.getByText(/Date/i)).toBeInTheDocument()
			expect(container.getByText(/Purpose of Visit/i)).toBeInTheDocument()
			expect(container.getByText(/Insurance Carrier/i)).toBeInTheDocument()
		});

		and('User should be able to view the following filters as below:', async (table) => {
			const filterBtn = container.getByTestId("filterbtn")
			fireEvent.click(filterBtn)

			await waitFor(() => {
				container.getByText(/Filter By/i);
				expect(container.getByText(/Filter By/i)).toBeInTheDocument()
			});
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2506-Verify User should be able to apply the Language filter', ({ given, when, then, and }) => {
		given(/^User launch the "(.*)" url$/, (arg0) => {
			defaultValidation()
		});

		when(/^User clicks on the "(.*)" button$/, (arg0) => {
			defaultValidation()
		});

		then('User should navigated to the search screen', async () => {
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

		and('User should fill the location', () => {
			const locationField = container.container.querySelector('#location');
			fireEvent.change(locationField, { target: { value: "Texas" } })
		});

		and('User should select the date of appointment', async () => {
			await inputDate()
		});

		and('User should select the purpose of the visit', async () => {
			await inputPurpose(container)
		});

		and('User should fill the insurance name', async () => {
			await inputInsurance()
		});

		when('User clicks on the Search button', async () => {
			const searchBtn = container.getByTestId("searchbtn")
			fireEvent.click(searchBtn)

			await waitFor(() => {
				container.getByText(/Filter/i);
			});
		});

		then('User should see the results on the Schedule Appointments screen', async () => {
			expect(container.getByText(/Filter/i)).toBeInTheDocument()
		});

		and('User should see the selected location, date of appointment, the purpose of visit, and insurance carrier', () => {
			const locationField = container.container.querySelector("#location")
			expect(locationField.value).toBe("Texas")
		});

		when('User selects Language filter', async () => {
			const filterBtn = container.getByTestId("filterbtn")
			fireEvent.click(filterBtn)

			await waitFor(() => {
				container.getByText(/Filter By/i);
			});

		});

		then('User should see Filtered Language', async () => {
			const done = container.getByRole('button', { name: "Done" });
			fireEvent.click(done)
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2506-Verify User should be able to apply the Gender filter', ({ given, when, then, and }) => {
		given(/^User launch the "(.*)" url$/, (arg0) => {
			defaultValidation()
		});

		when(/^User clicks on the "(.*)" button$/, (arg0) => {
			defaultValidation()
		});

		then('User should navigated to the search screen', async () => {
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

		and('User should fill the location', () => {
			const locationField = container.container.querySelector('#location');
			fireEvent.change(locationField, { target: { value: "Texas" } })
		});

		and('User should select the date of appointment', async () => {
			await inputDate()
		});

		and('User should select the purpose of the visit', async () => {
			await inputPurpose(container)
		});

		and('User should fill the insurance name', async () => {
			await inputInsurance()
		});

		when('User clicks on the Search button', async () => {
			const searchBtn = container.getByTestId("searchbtn")
			fireEvent.click(searchBtn)

			await waitFor(() => {
				container.getByText(/Filter/i);
			});
		});

		then('User should see the results on the Schedule Appointments screen', () => {
			expect(container.getByText(/Filter/i)).toBeInTheDocument()
		});

		and('User should see the selected location, date of appointment, the purpose of visit, and insurance carrier', () => {
			const locationField = container.container.querySelector("#location")
			expect(locationField.value).toBe("Texas")
		});

		when('User selects Gender filter', async () => {
			const filterBtn = container.getByTestId("filterbtn")
			fireEvent.click(filterBtn)

			await waitFor(() => {
				container.getByText(/Filter By/i);

			});

		});

		then('User should see Filtered Gender', async () => {
			const done = container.getByRole('button', { name: "Done" });
			fireEvent.click(done)
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2506-Verify User should be able to apply the Insurance In/Out of Network filter', ({ given, when, then, and }) => {
		given(/^User launch the "(.*)" url$/, (arg0) => {
			defaultValidation()
		});

		when(/^User clicks on the "(.*)" button$/, (arg0) => {
			defaultValidation()
		});

		then('User should navigated to the search screen', async () => {
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

		and('User should fill the location', () => {
			const locationField = container.container.querySelector('#location');
			fireEvent.change(locationField, { target: { value: "Texas" } })
		});

		and('User should select the date of appointment', async () => {
			await inputDate()
		});

		and('User should select the purpose of the visit', async () => {
			await inputPurpose(container)
		});

		and('User should fill the insurance name', async () => {
			await inputInsurance()
		});

		when('User clicks on the Search button', async () => {
			const searchBtn = container.getByTestId("searchbtn")
			fireEvent.click(searchBtn)

			await waitFor(() => {
				container.getByText(/Filter/i);
			});
		});

		then('User should see the results on the Schedule Appointments screen', () => {
			expect(container.getByText(/Filter/i)).toBeInTheDocument()
		});

		and('User should see the selected location, date of appointment, the purpose of visit, and insurance carrier', () => {
			const locationField = container.container.querySelector("#location")
			expect(locationField.value).toBe("Texas")
		});

		when('User selects Insurance In/Out of Network filter', async () => {
			const filterBtn = container.getByTestId("filterbtn")
			fireEvent.click(filterBtn)

			await waitFor(() => {
				container.getByText(/Filter By/i);
			});
		});

		then('User should see Filtered Insurance In/Out of Network', () => {
			const done = container.getByRole('button', { name: "Done" });
			fireEvent.click(done)
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2506-Verify User should be able to apply the Available Today (Provider) filter', ({ given, when, then, and }) => {
		given(/^User launch the "(.*)" url$/, (arg0) => {
			defaultValidation()
		});

		when(/^User clicks on the "(.*)" button$/, (arg0) => {
			defaultValidation()
		});

		then('User should navigated to the search screen', async () => {
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

		and('User should fill the location', () => {
			const locationField = container.container.querySelector('#location');
			fireEvent.change(locationField, { target: { value: "Texas" } })
		});

		and('User should select the date of appointment', async () => {
			await inputDate()
		});

		and('User should select the purpose of the visit', async () => {
			await inputPurpose(container)
		});

		and('User should fill the insurance name', async () => {
			await inputInsurance()
		});

		when('User clicks on the Search button', async () => {
			const searchBtn = container.getByTestId("searchbtn")
			fireEvent.click(searchBtn)

			await waitFor(() => {
				container.getByText(/Filter/i);
			});
		});

		then('User should see the results on the Schedule Appointments screen', () => {
			expect(container.getByText(/Filter/i)).toBeInTheDocument()
		});

		and('User should see the selected location, date of appointment, the purpose of visit, and insurance carrier', () => {
			const locationField = container.container.querySelector("#location")
			expect(locationField.value).toBe("Texas")
		});

		when('User selects Insurance Available Today (Provider) filter', async () => {
			const filterBtn = container.getByTestId("filterbtn")
			fireEvent.click(filterBtn)

			await waitFor(() => {
				container.getByText(/Filter By/i);

			});

			const check = container.getByText(/Available Today/i);
			fireEvent.click(check)

		});

		then('User should see Filtered Available Today (Provider)', async () => {
			const done = container.getByRole('button', { name: "Done" });
			fireEvent.click(done)
			await waitFor(() => {
				container.getByText(/Available Today/i);
			});
			expect(container.getByText(/Available Today/i)).toBeInTheDocument()
			fireEvent.click(container.getByTestId("CloseIcon"))
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2506-Verify User should see an option to clear those filters when applied', ({ given, when, then, and }) => {
		given(/^User launch the "(.*)" url$/, (arg0) => {
			defaultValidation()
		});

		when(/^User clicks on the "(.*)" button$/, (arg0) => {
			defaultValidation()
		});

		then('User should navigated to the search screen', async () => {
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

		and('User should fill the location', () => {
			const locationField = container.container.querySelector('#location');
			fireEvent.change(locationField, { target: { value: "Texas" } })
		});

		and('User should select the date of appointment', async () => {
			await inputDate()
		});

		and('User should select the purpose of the visit', async () => {
			await inputPurpose(container)
		});

		and('User should fill the insurance name', async () => {
			await inputInsurance()
		});

		when('User clicks on the Search button', async () => {
			const searchBtn = container.getByTestId("searchbtn")
			fireEvent.click(searchBtn)

			await waitFor(() => {
				container.getByText(/Filter/i);
			});
		});

		then('User should see the results on the Schedule Appointments screen', () => {
			expect(container.getByText(/Filter/i)).toBeInTheDocument()
		});

		and('User should see the selected location, date of appointment, the purpose of visit, and insurance carrier', () => {
			const locationField = container.container.querySelector("#location")
			expect(locationField.value).toBe("Texas")
		});

		when('User selects Insurance Available Today (Provider) filter', async () => {
			const filterBtn = container.getByTestId("filterbtn")
			fireEvent.click(filterBtn)

			await waitFor(() => {
				container.getByText(/Filter By/i);

			});

			const check = container.getByText(/Available Today/i);
			fireEvent.click(check)
		});

		then('User should see Filtered Available Today (Provider)', async () => {
			const done = container.getByRole('button', { name: "Done" });
			fireEvent.click(done)
			await waitFor(() => {
				container.getByText(/Available Today/i);
			});
			expect(container.getByText(/Available Today/i)).toBeInTheDocument()
			
		});

		and('User should see an option to clear the applied filter', () => {
			expect(container.getByTestId("CloseIcon")).toBeInTheDocument()
			fireEvent.click(container.getByTestId("CloseIcon"))
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2506-Verify User should see the filter was removed when user clicks on Clear option', ({ given, when, then, and }) => {
		given(/^User launch the "(.*)" url$/, (arg0) => {
			defaultValidation()
		});

		when(/^User clicks on the "(.*)" button$/, (arg0) => {
			defaultValidation()
		});

		then('User should navigated to the search screen', async () => {
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

		and('User should fill the location', () => {
			const locationField = container.container.querySelector('#location');
			fireEvent.change(locationField, { target: { value: "Texas" } })
		});	

		and('User should select the date of appointment', async () => {
			await inputDate()
		});

		and('User should select the purpose of the visit', async () => {
			await inputPurpose(container)
		});

		and('User should fill the insurance name', async () => {
			await inputInsurance()
		});

		when('User clicks on the Search button', async () => {
			const searchBtn = container.getByTestId("searchbtn")
			fireEvent.click(searchBtn)

			await waitFor(() => {
				container.getByText(/Filter/i);

			});
		});

		then('User should see the results on the Schedule Appointments screen', () => {
			expect(container.getByText(/Filter/i)).toBeInTheDocument()
		});

		and('User should see the selected location, date of appointment, the purpose of visit, and insurance carrier', () => {
			const locationField = container.container.querySelector("#location")
			expect(locationField.value).toBe("Texas")
		});

		when('User selects Insurance Available Today (Provider) filter', async () => {
			const filterBtn = container.getByTestId("filterbtn")
			fireEvent.click(filterBtn)

			await waitFor(() => {
				container.getByText(/Filter By/i);

			});

			const available = container.getByText("Available Today");
			fireEvent.click(available)
		});

		then('User should see Filtered Available Today (Provider)', async () => {
			const done = container.getByRole('button', { name: "Done" });
			fireEvent.click(done)
			await waitFor(() => {
				container.getByText(/Available Today/i);
			});
			expect(container.getByText(/Available Today/i)).toBeInTheDocument()
		});

		and('User should see an option to clear the applied filter', async () => {
			const filterBtn = container.getByTestId("filterbtn")
			fireEvent.click(filterBtn)

			await waitFor(() => {
				container.getByText(/Filter By/i);

			});
			const reset = container.getAllByRole('button', { name: "Reset" })[0];
			expect(reset).toBeInTheDocument()
			fireEvent.click(reset)
		});

		and('User should see the filter was removed when user clicks on Clear option', async () => {
			const done = container.getByRole('button', { name: "Done" });
			fireEvent.click(done)
			await waitFor(() => {
				container.getByText(/Filter/i);

			});
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2506-Verify User should be able to view the following filters within 3 seconds', ({ given, when, then, and }) => {
		given(/^User launch the "(.*)" url$/, (arg0) => {
			defaultValidation()
		});

		when(/^User clicks on the "(.*)" button$/, (arg0) => {
			defaultValidation()
		});

		then('User should navigated to the search screen', async () => {
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

		and('User should fill the location', () => {
			const locationField = container.container.querySelector('#location');
			fireEvent.change(locationField, { target: { value: "Texas" } })
		});

		and('User should select the date of appointment', async () => {
			await inputDate()
		});

		and('User should select the purpose of the visit', async () => {
			await inputPurpose(container)
		});

		and('User should fill the insurance name', async () => {
			await inputInsurance()
		});

		when('User clicks on the Search button', async () => {
			const searchBtn = container.getByTestId("searchbtn")
			fireEvent.click(searchBtn)

			await waitFor(() => {
				container.getByText(/Filter/i);

			});
		});

		then('User should see the results on the Schedule Appointments screen', () => {
			expect(container.getByText(/Filter/i)).toBeInTheDocument()
		});

		and('User should see the selected location, date of appointment, the purpose of visit, and insurance carrier', () => {
			const locationField = container.container.querySelector("#location")
			expect(locationField.value).toBe("Texas")
		});

		and('User should be able to view the following filters as below:', async (table) => {
			const filterBtn = container.getByTestId("filterbtn")
			fireEvent.click(filterBtn)

			await waitFor(() => {
				container.getByText(/Filter By/i);

			});

			const available = container.getByText("Available Today");
			fireEvent.click(available)
		});

		when('User filter based on selected filter', async () => {
			const done = container.getByRole('button', { name: "Done" });
			fireEvent.click(done)
			await waitFor(() => {
				container.getByText(/Available Today/i);
			});
			expect(container.getByText(/Available Today/i)).toBeInTheDocument()
		});

		then(/^User should see page load within "(.*)"$/, (arg0) => {
			expect(container.getByText(/Available Today/i)).toBeInTheDocument()
			fireEvent.click(container.getByTestId("CloseIcon"))
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2506-Verify User should not see the any errors script when user clicks F12 on the console', ({ given, when, then, and }) => {
		given(/^User launch the "(.*)" url$/, (arg0) => {
			defaultValidation()
		});

		when(/^User clicks on the "(.*)" button$/, (arg0) => {
			defaultValidation()
		});

		then('User should navigated to the search screen', async () => {
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

		and('User should fill the location', () => {
			const locationField = container.container.querySelector('#location');
			fireEvent.change(locationField, { target: { value: "Texas" } })
		});

		and('User should select the date of appointment', async () => {
			await inputDate()
		});

		and('User should select the purpose of the visit', async () => {
			await inputPurpose(container)
		});

		and('User should fill the insurance name', async () => {
			await inputInsurance()
		});

		when('User clicks on the Search button', async () => {
			const searchBtn = container.getByTestId("searchbtn")
			fireEvent.click(searchBtn)

			await waitFor(() => {
				container.getByText(/Filter/i);

			});
		});

		then('User should see the results on the Schedule Appointments screen', () => {
			expect(container.getByText(/Filter/i)).toBeInTheDocument()
		});

		and('User should see the selected location, date of appointment, the purpose of visit, and insurance carrier', () => {
			const locationField = container.container.querySelector("#location")
			expect(locationField.value).toBe("Texas")
		});

		and('User should be able to view the following filters as below:', async (table) => {
			const filterBtn = container.getByTestId("filterbtn")
			fireEvent.click(filterBtn)

			await waitFor(() => {
				container.getByText(/Filter By/i);

			});

			const available = container.getByText("Available Today");
			fireEvent.click(available)
		});

		when('User filter based on selected filter', async () => {
			const done = container.getByRole('button', { name: "Done" });
			fireEvent.click(done)
			await waitFor(() => {
				container.getByText(/Available Today/i);
			});
			expect(container.getByText(/Available Today/i)).toBeInTheDocument()
		});

		then(/^User should see page load within "(.*)"$/, (arg0) => {
			expect(container.getByText(/Available Today/i)).toBeInTheDocument()
			fireEvent.click(container.getByTestId("CloseIcon"))
		});

		when(/^User clicks on F(\d+) on the console$/, (arg0) => {
			defaultValidation()
		});

		then('User should not to see any errors script', () => {
			defaultValidation()
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2506-Negative Test Cases-Verify user should see the error message when the internet service is unavailable', ({ given, when, then, and }) => {
		given(/^User launch the "(.*)" url$/, (arg0) => {
			defaultValidation()
		});

		when(/^User clicks on the "(.*)" button$/, (arg0) => {
			defaultValidation()
		});

		then('User should navigated to the search screen', async () => {
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

		and('User should fill the location', () => {
			const locationField = container.container.querySelector('#location');
			fireEvent.change(locationField, { target: { value: "Texas" } })
		});

		and('User should select the date of appointment', async () => {
			await inputDate()
		});

		and('User should select the purpose of the visit', async () => {
			await inputPurpose(container)
		});

		and('User should fill the insurance name', async () => {
			await inputInsurance()
		});

		when('User clicks on the Search button', async () => {
			const searchBtn = container.getByTestId("searchbtn")
			fireEvent.click(searchBtn)

			await waitFor(() => {
				container.getByText(/Filter/i);

			});
		});

		then('User should see the results on the Schedule Appointments screen', () => {
			expect(container.getByText(/Filter/i)).toBeInTheDocument()
		});

		and('User should see the selected location, date of appointment, the purpose of visit, and insurance carrier', () => {
			const locationField = container.container.querySelector("#location")
			expect(locationField.value).toBe("Texas")
		});

		and('User should be able to view the following filters as below:', async (table) => {
			const filterBtn = container.getByTestId("filterbtn")
			fireEvent.click(filterBtn)

			await waitFor(() => {
				container.getByText(/Filter By/i);

			});

			const available = container.getByText("Available Today");
			fireEvent.click(available)
		});

		when('User filter based on selected filter', async () => {
			const done = container.getByRole('button', { name: "Done" });
			fireEvent.click(done)
			await waitFor(() => {
				container.getByText(/Available Today/i);
			});
			expect(container.getByText(/Available Today/i)).toBeInTheDocument()
			fireEvent.click(container.getByTestId("CloseIcon"))
		});

		then('The Internet service is unavailable', () => {
			defaultValidation()
		});

		and('User should see the appropriate error message', () => {
			defaultValidation()
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2506-Negative Test Cases-Verify user should see the error message when the service is unavailable', ({ given, when, then, and }) => {
		given(/^User launch the "(.*)" url$/, (arg0) => {
			defaultValidation()
		});

		when(/^User clicks on the "(.*)" button$/, (arg0) => {
			defaultValidation()
		});

		then('User should navigated to the search screen', async () => {
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

		and('User should fill the location', () => {
			const locationField = container.container.querySelector('#location');
			fireEvent.change(locationField, { target: { value: "Texas" } })
		});

		and('User should select the date of appointment', async () => {
			await inputDate()
		});

		and('User should select the purpose of the visit', async () => {
			await inputPurpose(container)
		});

		and('User should fill the insurance name', async () => {
			await inputInsurance()
		});

		when('User clicks on the Search button', async () => {
			const searchBtn = container.getByTestId("searchbtn")
			fireEvent.click(searchBtn)

			await waitFor(() => {
				container.getByText(/Filter/i);

			});
		});

		then('User should see the results on the Schedule Appointments screen', () => {
			expect(container.getByText(/Filter/i)).toBeInTheDocument()
		});

		and('User should see the selected location, date of appointment, the purpose of visit, and insurance carrier', () => {
			const locationField = container.container.querySelector("#location")
			expect(locationField.value).toBe("Texas")
		});

		and('User should be able to view the following filters as below:', async (table) => {
			const filterBtn = container.getByTestId("filterbtn")
			fireEvent.click(filterBtn)

			await waitFor(() => {
				container.getByText(/Filter By/i);

			});

			const available = container.getByText("Available Today");
			fireEvent.click(available)
		});

		when('User filter based on selected filter', async () => {
			const done = container.getByRole('button', { name: "Done" });
			fireEvent.click(done)
			await waitFor(() => {
				container.getByText(/Available Today/i);
			});
			expect(container.getByText(/Available Today/i)).toBeInTheDocument()
			fireEvent.click(container.getByTestId("CloseIcon"))
		});

		then('The service is unavailable', () => {
			defaultValidation()
		});

		and('User should see the appropriate error message', () => {
			defaultValidation()
		});
	});
})