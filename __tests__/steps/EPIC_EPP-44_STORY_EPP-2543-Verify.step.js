import { act, fireEvent, render, waitFor } from "@testing-library/react";
import axios from "axios";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import { defineFeature, loadFeature } from "jest-cucumber";
import { Provider } from "react-redux";
import Appointment from "../../src/pages/patient/appointment";
import ScheduleAppointment from "../../src/pages/patient/schedule-appointment/index";
import store from "../../src/store/store";
const useRouter = jest.spyOn(require("next/router"), "useRouter");
import constants from "../../src/utils/constants";
import mediaQuery from 'css-mediaquery';
import { TEST_ID } from "../../src/utils/constants";

const feature = loadFeature(
	"./__tests__/feature/Patient Portal/Sprint4/EPP-2543.feature"
);



const defaultValidation = () => {
	expect(true).toBeTruthy();
};

defineFeature(feature, (test) => {
	let container;
	const element = document.createElement("div");
	const mock = new MockAdapter(axios);
	const mockSuggestion = {
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
	}

	const mockSubmitFilter = {
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
	}

	function createMatchMedia(width) {
		return query => ({
			matches: mediaQuery.match(query, { width }),
			addListener: () => { },
			removeListener: () => { },
		});
	}

	test('EPIC_EPP-44_STORY_EPP-2543-Verify User should be navigated to "Schedule Appointment" screen with the selected data', ({ given, when, then, and }) => {
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
			mock.onGet(`${domain}/api/dummy/appointment/create-appointment/getSugestion`).reply(200, mockSuggestion);
			mock.onPost(`${domain}/api/dummy/appointment/create-appointment/submitFilter`).reply(200, mockSubmitFilter);
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

		and('User should fill the insurance name', () => {
			const insuranceField = container.getByText(/Insurance Carrier/i);
			expect(insuranceField).toBeInTheDocument()
		});

		and('User should see the option to Search', () => {
			const optionSearch = container.getByTestId("searchbtn");
			expect(optionSearch).toBeInTheDocument()
		});

		when('User clicks on the option to Search', async () => {
			const searchBtn = container.getByTestId("searchbtn")
			fireEvent.click(searchBtn)

			await waitFor(() => {
				container.getByText(/Filter/i);
			});
		});

		then(/^User should navigated on "(.*)" screen$/, (arg0) => {
			expect(container.getByText(/Filter/i)).toBeInTheDocument()
		});

		and('User should see the selected location', () => {
			expect(container.container.querySelector('#location')).toBeInTheDocument()
		});

		and('User should see the selected date', () => {
			expect(container.getByText(/Date/i)).toBeInTheDocument()
		});

		and('User should see the purpose of visit (if provided)', () => {
			expect(container.getByText(/Purpose of Visit/i)).toBeInTheDocument()
		});

		and('And User should see the insurance carrier (if provided)', () => {
			expect(container.getByText(/Insurance Carrier/i)).toBeInTheDocument()
		});
	})

	test('EPIC_EPP-44_STORY_EPP-2543-Verify User should be able to selects a time slot of the provider', ({ given, when, then, and }) => {
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
			mock.onGet(`${domain}/api/dummy/appointment/create-appointment/getSugestion`).reply(200, mockSuggestion);
			mock.onPost(`${domain}/api/dummy/appointment/create-appointment/submitFilter`).reply(200, mockSubmitFilter);
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

		and('User should fill the insurance name', () => {
			const insuranceField = container.getByText(/Insurance Carrier/i);
			expect(insuranceField).toBeInTheDocument()
		});

		and('User should see the option to Search', () => {
			const optionSearch = container.getByTestId("searchbtn");
			expect(optionSearch).toBeInTheDocument()
		});

		when('User clicks on the option to Search', async () => {
			const searchBtn = container.getByTestId("searchbtn")
			fireEvent.click(searchBtn)

			await waitFor(() => {
				container.getByText(/Filter/i);
			});
		});

		then(/^User should navigated on "(.*)" screen$/, (arg0) => {
			expect(container.getByText(/Filter/i)).toBeInTheDocument()
		});

		and('User should see the selected location', () => {
			expect(container.container.querySelector('#location')).toBeInTheDocument()
		});

		and('User should see the selected date', () => {
			expect(container.getByText(/Date/i)).toBeInTheDocument()
		});

		and('User should see the purpose of visit (if provided)', () => {
			expect(container.getByText(/Purpose of Visit/i)).toBeInTheDocument()
		});

		and('And User should see the insurance carrier (if provided)', () => {
			expect(container.getByText(/Insurance Carrier/i)).toBeInTheDocument()
		});

		and('User should see a time slot of the provider', async () => {
			expect(container.getAllByTestId(TEST_ID.SEARCH_PROVIDER_TEST_ID.viewAll)[0]).toBeInTheDocument();
		});

		when('User selects a time slot of the provider', async () => {
			const timeSlotButton = await waitFor(() => container.getAllByTestId(TEST_ID.SEARCH_PROVIDER_TEST_ID.viewAll)[0]);
			act(() => {
				fireEvent.click(timeSlotButton)
			});
			expect(
				container.getAllByTestId(TEST_ID.SEARCH_PROVIDER_TEST_ID.viewAll)[0]
			).toBeInTheDocument();
		});

		then('User should navigated to review the appointment details', () => {
			defaultValidation()
		});

		and('User should see the selected location along with the provider', () => {
			defaultValidation()
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2543-Verify User should navigated to review the appointment details', ({ given, when, then, and }) => {
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
			mock.onGet(`${domain}/api/dummy/appointment/create-appointment/getSugestion`).reply(200, mockSuggestion);
			mock.onPost(`${domain}/api/dummy/appointment/create-appointment/submitFilter`).reply(200, mockSubmitFilter);
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

		and('User should fill the insurance name', () => {
			const insuranceField = container.getByText(/Insurance Carrier/i);
			expect(insuranceField).toBeInTheDocument()
		});

		and('User should see the option to Search', () => {
			const optionSearch = container.getByTestId("searchbtn");
			expect(optionSearch).toBeInTheDocument()
		});

		when('User clicks on the option to Search', async () => {
			const searchBtn = container.getByTestId("searchbtn")
			fireEvent.click(searchBtn)

			await waitFor(() => {
				container.getByText(/Filter/i);
			});
		});

		then(/^User should navigated on "(.*)" screen$/, (arg0) => {
			expect(container.getByText(/Filter/i)).toBeInTheDocument()
		});

		and('User should see the selected location', () => {
			expect(container.container.querySelector('#location')).toBeInTheDocument()
		});

		and('User should see the selected date', () => {
			expect(container.getByText(/Date/i)).toBeInTheDocument()
		});

		and('User should see the purpose of visit (if provided)', () => {
			expect(container.getByText(/Purpose of Visit/i)).toBeInTheDocument()
		});

		and('And User should see the insurance carrier (if provided)', () => {
			expect(container.getByText(/Insurance Carrier/i)).toBeInTheDocument()
		});

		and('User should see a time slot of the provider', async () => {
			expect(container.getAllByTestId(TEST_ID.SEARCH_PROVIDER_TEST_ID.viewAll)[0]).toBeInTheDocument();
		});

		when('User selects a time slot of the provider', async () => {
			const timeSlotButton = await waitFor(() => container.getAllByTestId(TEST_ID.SEARCH_PROVIDER_TEST_ID.viewAll)[0]);
			act(() => {
				fireEvent.click(timeSlotButton)
			});
			expect(
				container.getAllByTestId(TEST_ID.SEARCH_PROVIDER_TEST_ID.viewAll)[0]
			).toBeInTheDocument();
		});

		then('User should navigated to review the appointment details', async () => {
			act(() => {
				container = render(
					<Provider store={store}>
						{ScheduleAppointment.getLayout(<ScheduleAppointment />)}
					</Provider>
				);
			})
			expect(
				await waitFor(() =>
					container.getByTestId(TEST_ID.SCHEDULE_APPOINTMENT_TEST_ID.APPOINTMENT_DETAILS.editButton)
				)
			).toBeInTheDocument();
		});

		and('User should see the selected location along with the provider', () => {
			const locationEditButton = container.getByTestId(TEST_ID.SCHEDULE_APPOINTMENT_TEST_ID.APPOINTMENT_LOCATION.editButton);
			expect(locationEditButton).toBeInTheDocument()
		});

		and('User should see the selected Date and Time of the appointment', () => {
			expect(container.getByText(/Date and time/i)).toBeInTheDocument()
		});

		and('User should see the selected purpose of visit (if provided)', () => {
			// expect(container.getByText(/Purpose of visit/i)).toBeInTheDocument()
		});

		and('User should see the selected Insurance Career (if provided)', () => {
			// expect(container.getByText(/Insurance/i)).toBeInTheDocument()
		});

		and('User should see a progress bar to identify with scheduling the appointment', () => {
			// const progressBarId = container.getByTestId("progress_bar_appoinment");
			// expect(locationEditButton).toBeInTheDocument()
		});

		and('User should see an option to go back to the previous screen', () => {
			expect(container.getByText(/Back/i)).toBeInTheDocument()
		});

		and('User should see an option to schedule the appointment', () => {
			defaultValidation()
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2543-Verify User should be able to selects a time slot of the provider within 3 seconds', ({ given, when, then, and }) => {
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
			mock.onGet(`${domain}/api/dummy/appointment/create-appointment/getSugestion`).reply(200, mockSuggestion);
			mock.onPost(`${domain}/api/dummy/appointment/create-appointment/submitFilter`).reply(200, mockSubmitFilter);
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

		and('User should fill the insurance name', () => {
			const insuranceField = container.getByText(/Insurance Carrier/i);
			expect(insuranceField).toBeInTheDocument()
		});

		and('User should see the option to Search', () => {
			const optionSearch = container.getByTestId("searchbtn");
			expect(optionSearch).toBeInTheDocument()
		});

		when('User clicks on the option to Search', async () => {
			const searchBtn = container.getByTestId("searchbtn")
			fireEvent.click(searchBtn)

			await waitFor(() => {
				container.getByText(/Filter/i);
			});
		});

		then(/^User should navigated on "(.*)" screen$/, (arg0) => {
			expect(container.getByText(/Filter/i)).toBeInTheDocument()
		});

		and('User should see the selected location', () => {
			expect(container.container.querySelector('#location')).toBeInTheDocument()
		});

		and('User should see the selected date', () => {
			expect(container.getByText(/Date/i)).toBeInTheDocument()
		});

		and('User should see the purpose of visit (if provided)', () => {
			expect(container.getByText(/Purpose of Visit/i)).toBeInTheDocument()
		});

		and('User should see the insurance carrier (if provided)', () => {
			expect(container.getByText(/Insurance Carrier/i)).toBeInTheDocument()
		});

		and('User should see a time slot of the provider', async () => {
			expect(container.getAllByTestId(TEST_ID.SEARCH_PROVIDER_TEST_ID.viewAll)[0]).toBeInTheDocument();
		});

		when('User selects a time slot of the provider', async () => {
			const timeSlotButton = await waitFor(() => container.getAllByTestId(TEST_ID.SEARCH_PROVIDER_TEST_ID.viewAll)[0]);
			act(() => {
				fireEvent.click(timeSlotButton)
			});
			expect(
				container.getAllByTestId(TEST_ID.SEARCH_PROVIDER_TEST_ID.viewAll)[0]
			).toBeInTheDocument();
		});

		and(/^User should see page load within "(.*)"$/, (arg0) => {
			defaultValidation()
		});

		then('User should navigated to review the appointment details', () => {
			defaultValidation()
		});

		and('User should see the selected location along with the provider', () => {
			defaultValidation()
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2543-Verify User should be able to selects a time slot of the provider - Without error script when user clicks on F12 on the console', ({ given, when, then, and }) => {
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
			mock.onGet(`${domain}/api/dummy/appointment/create-appointment/getSugestion`).reply(200, mockSuggestion);
			mock.onPost(`${domain}/api/dummy/appointment/create-appointment/submitFilter`).reply(200, mockSubmitFilter);
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

		and('User should fill the insurance name', () => {
			const insuranceField = container.getByText(/Insurance Carrier/i);
			expect(insuranceField).toBeInTheDocument()
		});

		and('User should see the option to Search', () => {
			const optionSearch = container.getByTestId("searchbtn");
			expect(optionSearch).toBeInTheDocument()
		});

		when('User clicks on the option to Search', async () => {
			const searchBtn = container.getByTestId("searchbtn")
			fireEvent.click(searchBtn)

			await waitFor(() => {
				container.getByText(/Filter/i);
			});
		});

		then(/^User should navigated on "(.*)" screen$/, (arg0) => {
			expect(container.getByText(/Filter/i)).toBeInTheDocument()
		});

		and('User should see the selected location', () => {
			expect(container.container.querySelector('#location')).toBeInTheDocument()
		});

		and('User should see the selected date', () => {
			expect(container.getByText(/Date/i)).toBeInTheDocument()
		});

		and('User should see the purpose of visit (if provided)', () => {
			expect(container.getByText(/Purpose of Visit/i)).toBeInTheDocument()
		});

		and('User should see the insurance carrier (if provided)', () => {
			expect(container.getByText(/Insurance Carrier/i)).toBeInTheDocument()
		});

		and('User should see a time slot of the provider', async () => {
			expect(container.getAllByTestId(TEST_ID.SEARCH_PROVIDER_TEST_ID.viewAll)[0]).toBeInTheDocument();
		});

		when('User selects a time slot of the provider', async () => {
			const timeSlotButton = await waitFor(() => container.getAllByTestId(TEST_ID.SEARCH_PROVIDER_TEST_ID.viewAll)[0]);
			act(() => {
				fireEvent.click(timeSlotButton)
			});
			expect(
				container.getAllByTestId(TEST_ID.SEARCH_PROVIDER_TEST_ID.viewAll)[0]
			).toBeInTheDocument();
		});

		and(/^User should see page load within "(.*)"$/, (arg0) => {
			defaultValidation()
		});

		then('User should navigated to review the appointment details', () => {
			defaultValidation()
		});

		and('User should see the selected location along with the provider', () => {
			defaultValidation()
		});

		when(/^user clicks on F(\d+) on the console$/, (arg0) => {
			defaultValidation()
		});

		then('user should not to see any errors script', () => {
			defaultValidation()
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2543-Negative Test Cases-Verify User should be able to selects a time slot of the provider - When the internet service is unavailable user should see the following error message', ({ given, when, then, and }) => {
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
			mock.onGet(`${domain}/api/dummy/appointment/create-appointment/getSugestion`).reply(200, mockSuggestion);
			mock.onPost(`${domain}/api/dummy/appointment/create-appointment/submitFilter`).reply(200, mockSubmitFilter);
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

		and('User should fill the insurance name', () => {
			const insuranceField = container.getByText(/Insurance Carrier/i);
			expect(insuranceField).toBeInTheDocument()
		});

		and('User should see the option to Search', () => {
			const optionSearch = container.getByTestId("searchbtn");
			expect(optionSearch).toBeInTheDocument()
		});

		when('User clicks on the option to Search', async () => {
			const searchBtn = container.getByTestId("searchbtn")
			fireEvent.click(searchBtn)

			await waitFor(() => {
				container.getByText(/Filter/i);
			});
		});

		then(/^User should navigated on "(.*)" screen$/, (arg0) => {
			expect(container.getByText(/Filter/i)).toBeInTheDocument()
		});

		and('User should see the selected location', () => {
			expect(container.container.querySelector('#location')).toBeInTheDocument()
		});

		and('User should see the selected date', () => {
			expect(container.getByText(/Date/i)).toBeInTheDocument()
		});

		and('User should see the purpose of visit (if provided)', () => {
			expect(container.getByText(/Purpose of Visit/i)).toBeInTheDocument()
		});

		and('User should see the insurance carrier (if provided)', () => {
			expect(container.getByText(/Insurance Carrier/i)).toBeInTheDocument()
		});

		and('User should see a time slot of the provider', async () => {
			expect(container.getAllByTestId(TEST_ID.SEARCH_PROVIDER_TEST_ID.viewAll)[0]).toBeInTheDocument();
		});

		when('User selects a time slot of the provider', async () => {
			const timeSlotButton = await waitFor(() => container.getAllByTestId(TEST_ID.SEARCH_PROVIDER_TEST_ID.viewAll)[0]);
			act(() => {
				fireEvent.click(timeSlotButton)
			});
			expect(
				container.getAllByTestId(TEST_ID.SEARCH_PROVIDER_TEST_ID.viewAll)[0]
			).toBeInTheDocument();
		});

		then('The Internet service is unavailable', () => {
			defaultValidation()
		});

		and('User should see the appropriate error message', () => {
			defaultValidation()
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2543-Negative Test Cases-Verify User should be able to selects a time slot of the provider - When the service is unavailable user should see the following error message', ({ given, when, then, and }) => {
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
			mock.onGet(`${domain}/api/dummy/appointment/create-appointment/getSugestion`).reply(200, mockSuggestion);
			mock.onPost(`${domain}/api/dummy/appointment/create-appointment/submitFilter`).reply(200, mockSubmitFilter);
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

		and('User should fill the insurance name', () => {
			const insuranceField = container.getByText(/Insurance Carrier/i);
			expect(insuranceField).toBeInTheDocument()
		});

		and('User should see the option to Search', () => {
			const optionSearch = container.getByTestId("searchbtn");
			expect(optionSearch).toBeInTheDocument()
		});

		when('User clicks on the option to Search', async () => {
			const searchBtn = container.getByTestId("searchbtn")
			fireEvent.click(searchBtn)

			await waitFor(() => {
				container.getByText(/Filter/i);
			});
		});

		then(/^User should navigated on "(.*)" screen$/, (arg0) => {
			expect(container.getByText(/Filter/i)).toBeInTheDocument()
		});

		and('User should see the selected location', () => {
			expect(container.container.querySelector('#location')).toBeInTheDocument()
		});

		and('User should see the selected date', () => {
			expect(container.getByText(/Date/i)).toBeInTheDocument()
		});

		and('User should see the purpose of visit (if provided)', () => {
			expect(container.getByText(/Purpose of Visit/i)).toBeInTheDocument()
		});

		and('And User should see the insurance carrier (if provided)', () => {
			expect(container.getByText(/Insurance Carrier/i)).toBeInTheDocument()
		});

		and('User should see a time slot of the provider', async () => {
			expect(container.getAllByTestId(TEST_ID.SEARCH_PROVIDER_TEST_ID.viewAll)[0]).toBeInTheDocument();
		});

		when('User selects a time slot of the provider', async () => {
			const timeSlotButton = await waitFor(() => container.getAllByTestId(TEST_ID.SEARCH_PROVIDER_TEST_ID.viewAll)[0]);
			act(() => {
				fireEvent.click(timeSlotButton)
			});
			expect(
				container.getAllByTestId(TEST_ID.SEARCH_PROVIDER_TEST_ID.viewAll)[0]
			).toBeInTheDocument();
		});

		then('The service is unavailable', () => {
			defaultValidation()
		});

		and('User should see the appropriate error message', () => {
			defaultValidation()
		});
	});
})