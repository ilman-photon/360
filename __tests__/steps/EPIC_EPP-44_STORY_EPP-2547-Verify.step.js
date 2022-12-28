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
    "./__tests__/feature/Patient Portal/Sprint4/EPP-2547.feature"
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

    test('EPIC_EPP-44_STORY_EPP-2547 - Verify user able to view the screen with list of providers for the searched location and available time-slots for the selected date of appointment.', ({ given, when, then, and }) => {
        given('user launch the Patient Portal url', () => {
            defaultValidation()
        });

        when('user provides valid Email or Phone Number and password and click on Login button', () => {
            defaultValidation()
        });

        then('user navigates to the Patient Portal application', () => {
            defaultValidation()
        });

        when('user  clicks on Schedule Appointment menu', () => {
            defaultValidation()
        });

        then('user navigates to the search screen', async () => {
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

        and('user provided location,date of appointment,purpose of visit,insurance and provider', async () => {
            const locationField = container.container.querySelector('#location');
			fireEvent.change(locationField, { target: { value: "Texas" } })
            await inputPurpose(container)
        });

        and('user clicks on the Search button', async () => {
            const searchBtn = container.getByTestId("searchbtn")
			fireEvent.click(searchBtn)

			await waitFor(() => {
				container.getByText(/Filter/i);
			});
        });

        and('user views the results on the Schedule Appointments screen', () => {
            expect(container.getByText(/Filter/i)).toBeInTheDocument()
        });

        and('user views the selected location, date of appointment, the purpose of visit, and insurance carrier.', () => {
            const locationField = container.container.querySelector("#location")
			expect(locationField.value).toBe("Texas")
        });
    });

    test('EPIC_EPP-44_STORY_EPP-2547 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance and user view the location using City with the selected location', ({ given, when, then, and }) => {
        given('user launch the Patient Portal url', () => {
            defaultValidation()
        });

        when('user provides valid Email or Phone Number and password and click on Login button', () => {
            defaultValidation()
        });

        then('user navigates to the Patient Portal application', () => {
            defaultValidation()
        });

        when('user  clicks on Schedule Appointment menu', () => {
            defaultValidation()
        });

        then('user navigates to the search screen', async () => {
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

        and('user provided location,date of appointment,purpose of visit,insurance and provider', async () => {
            const locationField = container.container.querySelector('#location');
			fireEvent.change(locationField, { target: { value: "Texas" } })
            await inputDate()
            await inputPurpose(container)
            await inputInsurance()
        });

        and('user clicks on the Search button', async () => {
            const searchBtn = container.getByTestId("searchbtn")
			fireEvent.click(searchBtn)

			await waitFor(() => {
				container.getByText(/Filter/i);
			});
        });

        and('user views the results in the Schedule Appointments screen', () => {
            expect(container.getByText(/Filter/i)).toBeInTheDocument()
        });

        and('user views the selected location.', () => {
            const locationField = container.container.querySelector("#location")
			expect(locationField.value).toBe("Texas")
        });

        and('user views an option to search locations using City with the selected location', () => {
            expect(container.container.querySelector('#location')).toBeInTheDocument()
        });
    });

    test('EPIC_EPP-44_STORY_EPP-2547 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance and user view the location using State with the selected location', ({ given, when, then, and }) => {
        given('user launch the Patient Portal url', () => {
            defaultValidation()
        });

        when('user provides valid Email or Phone Number and password and click on Login button', () => {
            defaultValidation()
        });

        then('user navigates to the Patient Portal application', () => {
            defaultValidation()
        });

        when('user  clicks on Schedule Appointment menu', () => {
            defaultValidation()
        });

        then('user navigates to the search screen', async () => {
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

        and('user provided location,date of appointment,purpose of visit,insurance and provider', async () => {
            const locationField = container.container.querySelector('#location');
			fireEvent.change(locationField, { target: { value: "Texas" } })
            await inputDate()
            await inputPurpose(container)
            await inputInsurance()
        });

        and('user clicks on the Search button', async () => {
            const searchBtn = container.getByTestId("searchbtn")
			fireEvent.click(searchBtn)

			await waitFor(() => {
				container.getByText(/Filter/i);
			});
        });

        and('user views the results in the Schedule Appointments screen', () => {
            expect(container.getByText(/Filter/i)).toBeInTheDocument()
        });

        and('user views the selected location.', () => {
            const locationField = container.container.querySelector("#location")
			expect(locationField.value).toBe("Texas")
        });

        and('user views an option to search locations using State with the selected location', () => {
            expect(container.container.querySelector("#location")).toBeInTheDocument()
        });
    });

    test('EPIC_EPP-44_STORY_EPP-2547 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance and user view the location using  Zipcode with the selected location', ({ given, when, then, and }) => {
        given('user launch the Patient Portal url', () => {
            defaultValidation()
        });

        when('user provides valid Email or Phone Number and password and click on Login button', () => {
            defaultValidation()
        });

        then('user navigates to the Patient Portal application', () => {
            defaultValidation()
        });

        when('user  clicks on Schedule Appointment menu', () => {
            defaultValidation()
        });

        then('user navigates to the search screen', async () => {
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

        and('user provided location,date of appointment,purpose of visit,insurance and provider', async () => {
            const locationField = container.container.querySelector('#location');
			fireEvent.change(locationField, { target: { value: "Texas" } })
            await inputDate()
            await inputPurpose(container)
            await inputInsurance()
        });

        and('user clicks on the Search button', async () => {
            const searchBtn = container.getByTestId("searchbtn")
			fireEvent.click(searchBtn)

			await waitFor(() => {
				container.getByText(/Filter/i);
			});
        });

        and('user views the results in the Schedule Appointments screen', () => {
            expect(container.getByText(/Filter/i)).toBeInTheDocument()
        });

        and('user views the selected location.', () => {
            const locationField = container.container.querySelector("#location")
			expect(locationField.value).toBe("Texas")
        });

        and('user views an option to search locations using  Zipcode with the selected location', () => {
            expect(container.container.querySelector("#location")).toBeInTheDocument()
        });
    });

    test('EPIC_EPP-44_STORY_EPP-2547 - Verify user able to search for the location and select the date of appointment as well as the purpose of visit and insurance and user view the location using the system to detect their location', ({ given, when, then, and }) => {
        given('user launch the Patient Portal url', () => {
            defaultValidation()
        });

        when('user provides valid Email or Phone Number and password and click on Login button', () => {
            defaultValidation()
        });

        then('user navigates to the Patient Portal application', () => {
            defaultValidation()
        });

        when('user  clicks on Schedule Appointment menu', () => {
            defaultValidation()
        });

        then('user navigates to the search screen', async () => {
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

        and('user provided location,date of appointment,purpose of visit,insurance and provider', async () => {
            const locationField = container.container.querySelector('#location');
			fireEvent.change(locationField, { target: { value: "Texas" } })
            await inputDate()
            await inputPurpose(container)
            await inputInsurance()
        });

        and('user clicks on the Search button', async () => {
            const searchBtn = container.getByTestId("searchbtn")
			fireEvent.click(searchBtn)

			await waitFor(() => {
				container.getByText(/Filter/i);
			});
        });

        and('user views the results in the Schedule Appointments screen', () => {
            expect(container.getByText(/Filter/i)).toBeInTheDocument()
        });

        and('user views the selected location.', () => {
            const locationField = container.container.querySelector("#location")
			expect(locationField.value).toBe("Texas")
        });

        and('user views an option to search locations using City or State or Zipcode with the selected location', () => {
            expect(container.container.querySelector("#location")).toBeInTheDocument()
        });

        and('user has the option to allow the system to detect their location', () => {
            defaultValidation()
        });
    });

    test('EPIC_EPP-44_STORY_EPP-2547 - Verify user able to search for the location and select the date of appointment as well as the purpose of visit and insurance and the user views the filter options', ({ }) => {

    });

    test('EPIC_EPP-44_STORY_EPP-2547 - Verify user able to search for the location and select the date of appointment as well as the purpose of visit and insurance and the user view options to change the appointment date', ({ given, when, then, and }) => {
        given('user launch the Patient Portal url', () => {
            defaultValidation()
        });

        when('user provides valid Email or Phone Number and password and click on Login button', () => {
            defaultValidation()
        });

        then('user navigates to the Patient Portal application', () => {
            defaultValidation()
        });

        when('user  clicks on Schedule Appointment menu', () => {
            defaultValidation()
        });

        then('user navigates to the search screen', async () => {
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

        and('user provided location,date of appointment,purpose of visit,insurance and provider', async () => {
            const locationField = container.container.querySelector('#location');
			fireEvent.change(locationField, { target: { value: "Texas" } })
            await inputDate()
            await inputPurpose(container)
            await inputInsurance()
        });

        and('user clicks on the Search button', async () => {
            const searchBtn = container.getByTestId("searchbtn")
			fireEvent.click(searchBtn)

			await waitFor(() => {
				container.getByText(/Filter/i);
			});
        });

        and('user views the results in the Schedule Appointments screen', () => {
            expect(container.getByText(/Filter/i)).toBeInTheDocument()
        });

        and('user views the selected location.', () => {
            const locationField = container.container.querySelector("#location")
			expect(locationField.value).toBe("Texas")
        });

        and('user views an option to search locations using City or State or Zipcode with the selected location', () => {
            expect(container.container.querySelector("#location")).toBeInTheDocument()
        });

        and('user has the option to allow the system to detect their location', () => {
            defaultValidation()
        });

        and('user views the filter options', () => {
            defaultValidation()
        });

        and('user view options to change the appointment date', () => {
            expect(container.getByLabelText("Date")).toBeInTheDocument()
        });
    });

    test('EPIC_EPP-44_STORY_EPP-2547 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and user view options to change the Purpose of the Visit', ({ given, when, then, and }) => {
        given('user launch the Patient Portal url', () => {
            defaultValidation()
        });

        when('user provides valid Email or Phone Number and password and click on Login button', () => {
            defaultValidation()
        });

        then('user navigates to the Patient Portal application', () => {
            defaultValidation()
        });

        when('user  clicks on Schedule Appointment menu', () => {
            defaultValidation()
        });

        then('user navigates to the search screen', async () => {
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

        and('user provided location,date of appointment,purpose of visit,insurance and provider', async () => {
            const locationField = container.container.querySelector('#location');
			fireEvent.change(locationField, { target: { value: "Texas" } })
            await inputDate()
            await inputPurpose(container)
            await inputInsurance()
        });

        and('user clicks on the Search button', async () => {
            const searchBtn = container.getByTestId("searchbtn")
			fireEvent.click(searchBtn)

			await waitFor(() => {
				container.getByText(/Filter/i);
			});
        });

        and('user views the results in the Schedule Appointments screen', () => {
            expect(container.getByText(/Filter/i)).toBeInTheDocument()
        });

        and('user views the selected location.', () => {
            const locationField = container.container.querySelector("#location")
			expect(locationField.value).toBe("Texas")
        });

        and('user views an option to search locations using City or State or Zipcode with the selected location', () => {
            expect(container.container.querySelector("#location")).toBeInTheDocument()
        });

        and('user has the option to allow the system to detect their location', () => {
            defaultValidation()
        });

        and('user views the filter options', () => {
            defaultValidation()
        });

        and('user view options to change the appointment date', () => {
            expect(container.getByLabelText("Date")).toBeInTheDocument()
        });

        and('user view options to change the Purpose of the Visit', () => {
            expect(container.getByTestId("select-purposes-of-visit")).toBeInTheDocument()
        });
    });

    test('EPIC_EPP-44_STORY_EPP-2547 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and user view options to change the insurance.', ({ given, when, then, and }) => {
        given('user launch the Patient Portal url', () => {
            defaultValidation()
        });

        when('user provides valid Email or Phone Number and password and click on Login button', () => {
            defaultValidation()
        });

        then('user navigates to the Patient Portal application', () => {
            defaultValidation()
        });

        when('user  clicks on Schedule Appointment menu', () => {
            defaultValidation()
        });

        then('user navigates to the search screen', async () => {
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

        and('user provided location,date of appointment,purpose of visit,insurance and provider', async () => {
            const locationField = container.container.querySelector('#location');
			fireEvent.change(locationField, { target: { value: "Texas" } })
            await inputDate()
            await inputPurpose(container)
            await inputInsurance()
        });

        and('user clicks on the Search button', async () => {
            const searchBtn = container.getByTestId("searchbtn")
			fireEvent.click(searchBtn)

			await waitFor(() => {
				container.getByText(/Filter/i);
			});
        });

        and('user views the results in the Schedule Appointments screen', () => {
            expect(container.getByText(/Filter/i)).toBeInTheDocument()
        });

        and('user views the selected location.', () => {
            const locationField = container.container.querySelector("#location")
			expect(locationField.value).toBe("Texas")
        });

        and('user views an option to search locations using City or State or Zipcode with the selected location', () => {
            expect(container.container.querySelector("#location")).toBeInTheDocument()
        });

        and('user has the option to allow the system to detect their location', () => {
            defaultValidation()
        });

        and('user views the filter options', () => {
            defaultValidation()
        });

        and('user view options to change the appointment date', () => {
            expect(container.getByLabelText("Date")).toBeInTheDocument()
        });

        and('user view options to change the Purpose of the Visit', () => {
            expect(container.getByTestId("select-purposes-of-visit")).toBeInTheDocument()
        });

        and('user view options to change the insurance.', () => {
            expect(container.getByLabelText("Insurance Carrier")).toBeInTheDocument()
        });
    });
})