import { act, fireEvent, render, waitFor } from "@testing-library/react";
import axios from "axios";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import { defineFeature, loadFeature } from "jest-cucumber";
import { Provider } from "react-redux";
import Appointment from "../../src/pages/patient/appointment";
import store from "../../src/store/store";
const useRouter = jest.spyOn(require("next/router"), "useRouter");
import mediaQuery from 'css-mediaquery';
import { mockSubmitFilterReal } from "../../__mocks__/mockResponse";
import AppointmentLayout from "../../src/components/templates/appointmentLayout";
import { doLogin, renderLogin } from "../../__mocks__/commonSteps";

const feature = loadFeature(
	"./__tests__/feature/Patient Portal/Sprint10/EPP-10112.feature",
	{
	  tagFilter: "@included and not @excluded",
	}
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
    afterEach(() => {
      mock.reset();
    });

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

	test('EPIC_EPP-44_STORY_EPP-10112- Verify User should be able to click on the \'Schedule your Eye  Exam\' CTA from Marketing site', ({ given, and }) => {
        given('User launches the Marketing site patient portal URL', async () => {
			container = await renderLogin(container);
			await doLogin(mock, container)

			const mockGeolocation = {
				getCurrentPosition: jest.fn(),
				watchPosition: jest.fn()
			};

			const domain = window.location.origin;
			mock.onGet(`/ecp/appointments/appointment-types`).reply(200, mockSuggestionReal);
      		mock.onPut(`/ecp/appointments/available-slot?searchText=Texas`).reply(200, mockSubmitFilterReal);
			
			global.navigator.geolocation = mockGeolocation;
			window.matchMedia = createMatchMedia('720px');
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
			})
			await waitFor(() => {
				container.getByText(/City, state, or zip/i);
				expect(container.getByText(/City, state, or zip/i)).toBeInTheDocument();
			});
        });

        and('User should be able to click on the \'Schedule your Eye Exam\' CTA from Marketing site', () => {
			expect(container.getByText(/Schedule an eye exam/i)).toBeInTheDocument();
        });
    });

	test('EPIC_EPP-44_STORY_EPP-10112- Verify User should be able to view search for location, select the date of appointment as well as purpose of visit and insurance', ({ given, when, then, and }) => {
        given('User launches the Marketing site patient portal URL', async () => {
			container = await renderLogin(container);
			await doLogin(mock, container)

			const mockGeolocation = {
				getCurrentPosition: jest.fn(),
				watchPosition: jest.fn()
			};

			const domain = window.location.origin;
			mock.onGet(`/ecp/appointments/appointment-types`).reply(200, mockSuggestionReal);
      		mock.onPut(`/ecp/appointments/available-slot?searchText=Texas`).reply(200, mockSubmitFilterReal);
			
			global.navigator.geolocation = mockGeolocation;
			window.matchMedia = createMatchMedia('720px');
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
			})
			await waitFor(() => {
				container.getByText(/City, state, or zip/i);
				expect(container.getByText(/City, state, or zip/i)).toBeInTheDocument();
			});
        });

        when('User should be able to click on the \'Schedule your Eye Exam\' CTA from Marketing site', () => {
			expect(container.getByText(/Schedule an eye exam/i)).toBeInTheDocument();
        });

        then('User should be able to land on the dashboard screen', () => {
			defaultValidation()
        });

        and('User  should be able to view search for location, select the date of appointment as well as purpose of visit and insurance', () => {
			expect(container.getByTestId("search-location")).toBeInTheDocument();
			expect(container.getByTestId("search-date")).toBeInTheDocument();
			expect(container.getByTestId("search-purpose")).toBeInTheDocument();
			expect(container.getByTestId("search-insurance")).toBeInTheDocument();
        });
    });

	test('EPIC_EPP-44_STORY_EPP-10112- Verify User should be able to select purpose of visit', ({ given, when, then, and }) => {
        given('User launches the Marketing site patient portal URL', async () => {
			container = await renderLogin(container);
			await doLogin(mock, container)

			const mockGeolocation = {
				getCurrentPosition: jest.fn(),
				watchPosition: jest.fn()
			};

			const domain = window.location.origin;
			mock.onGet(`/ecp/appointments/appointment-types`).reply(200, mockSuggestionReal);
      		mock.onPut(`/ecp/appointments/available-slot?searchText=Texas`).reply(200, mockSubmitFilterReal);
			
			global.navigator.geolocation = mockGeolocation;
			window.matchMedia = createMatchMedia('720px');
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
			})
			await waitFor(() => {
				container.getByText(/City, state, or zip/i);
				expect(container.getByText(/City, state, or zip/i)).toBeInTheDocument();
			});
        });

        when('User should be able to click on the \'Schedule your Eye Exam\' CTA from Marketing site', () => {
			expect(container.getByText(/Schedule an eye exam/i)).toBeInTheDocument();
        });

        then('User should be able to land on the dashboard screen', () => {
			defaultValidation()
        });

        and('User  should be able to view search for location, select the date of appointment as well as purpose of visit and insurance', () => {
			expect(container.getByTestId("search-location")).toBeInTheDocument();
			expect(container.getByTestId("search-date")).toBeInTheDocument();
			expect(container.getByTestId("search-purpose")).toBeInTheDocument();
			expect(container.getByTestId("search-insurance")).toBeInTheDocument();
        });

        and('User should be able to select purpose of visit', async () => {
			const purposes = container.getByTestId("search-purpose")
			await fireEvent.click(purposes)
			expect(container.getByText(/Clinical_Diagnosis/i)).toBeInTheDocument();
        });
    });

	test('EPIC_EPP-44_STORY_EPP-10112- Verify User should be prompted with inline validation error message “This field is required” when the purpose of visit field is not filled', ({ given, when, then, and }) => {
        given('User launches the Marketing site patient portal URL', async () => {
			container = await renderLogin(container);
			await doLogin(mock, container)

			const mockGeolocation = {
				getCurrentPosition: jest.fn(),
				watchPosition: jest.fn()
			};

			const domain = window.location.origin;
			mock.onGet(`/ecp/appointments/appointment-types`).reply(200, mockSuggestionReal);
      		mock.onPut(`/ecp/appointments/available-slot?searchText=Texas`).reply(200, mockSubmitFilterReal);
			
			global.navigator.geolocation = mockGeolocation;
			window.matchMedia = createMatchMedia('720px');
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
			})
			await waitFor(() => {
				container.getByText(/City, state, or zip/i);
				expect(container.getByText(/City, state, or zip/i)).toBeInTheDocument();
			});
        });

        when('User should be able to click on the \'Schedule your Eye Exam\' CTA from Marketing site', () => {
			expect(container.getByText(/Schedule an eye exam/i)).toBeInTheDocument();
        });

        then('User should be able to land on the dashboard screen', () => {
			defaultValidation()
        });

        and('User  should be able to view search for location, select the date of appointment as well as purpose of visit and insurance', () => {
			expect(container.getByTestId("search-location")).toBeInTheDocument();
			expect(container.getByTestId("search-date")).toBeInTheDocument();
			expect(container.getByTestId("search-purpose")).toBeInTheDocument();
			expect(container.getByTestId("search-insurance")).toBeInTheDocument();
        });

        and('User should be able to select purpose of visit', () => {
			defaultValidation()
        });

        and('User should be prompted with inline validation error message “This field is required” when the purpose of visit field is not filled', async (done) => {
			const searchBtn = container.getByTestId("searchbtn")
			await fireEvent.click(searchBtn)
			await waitFor(() => container.getAllByText(/This field is required/i));
			await expect(container.getAllByText(/This field is required/i)[1]).toBeInTheDocument();
        });

		test('EPIC_EPP-44_STORY_EPP-10112- Verify User should not be able to create/ reschedule an appointment without selecting a ‘Purpose of Visit’', ({ given, when, then, and }) => {
			given('User launches the Marketing site patient portal URL', async () => {
			container = await renderLogin(container);
			await doLogin(mock, container)

			const mockGeolocation = {
				getCurrentPosition: jest.fn(),
				watchPosition: jest.fn()
			};

			const domain = window.location.origin;
			mock.onGet(`/ecp/appointments/appointment-types`).reply(200, mockSuggestionReal);
      		mock.onPut(`/ecp/appointments/available-slot?searchText=Texas`).reply(200, mockSubmitFilterReal);
			
			global.navigator.geolocation = mockGeolocation;
			window.matchMedia = createMatchMedia('720px');
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
			})
			await waitFor(() => {
				container.getByText(/City, state, or zip/i);
				expect(container.getByText(/City, state, or zip/i)).toBeInTheDocument();
			});
			});
	
			when('User should be able to click on the \'Schedule your Eye Exam\' CTA from Marketing site', () => {
				expect(container.getByText(/Schedule an eye exam/i)).toBeInTheDocument();
			});
	
			then('User should be able to land on the dashboard screen', () => {
				defaultValidation()
			});
	
			and('User  should be able to view search for location, select the date of appointment as well as purpose of visit and insurance', () => {
				expect(container.getByTestId("search-location")).toBeInTheDocument();
				expect(container.getByTestId("search-date")).toBeInTheDocument();
				expect(container.getByTestId("search-purpose")).toBeInTheDocument();
				expect(container.getByTestId("search-insurance")).toBeInTheDocument();
			});
	
			and('User should be able to select purpose of visit', () => {
				defaultValidation()
			});
	
			and('User should be prompted with inline validation error message “This field is required” when the purpose of visit field is not filled', async () => {
				const searchBtn = container.getByTestId("searchbtn")
				await fireEvent.click(searchBtn)
				await waitFor(() => container.getAllByText(/This field is required/i));
				await expect(container.getAllByText(/This field is required/i)[1]).toBeInTheDocument();
			});
	
			when('user click on Schedule Appointment', () => {
				defaultValidation()
			});
	
			then('User should not be able to create/ reschedule an appointment without selecting a ‘Purpose of Visit’', () => {
				defaultValidation()
			});
		});
    });
})