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
import mediaQuery from 'css-mediaquery';

const feature = loadFeature(
	"./__tests__/feature/Patient Portal/Sprint4/EPP-2506.feature"
);

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
	test('EPIC_EPP-44_STORY_EPP-2506-Verify User should be able to view the following filters', ({ given, when, then, and }) => {
		given(/^User launch the "(.*)" url$/, (arg0) => {

		});

		when(/^User clicks on the "(.*)" button$/, (arg0) => {

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
			fireEvent.change(locationField, {target: { value: "Texas" }})
		});

		and('User should select the date of appointment', () => {
			const dateField = container.getByText(/Date/i);
		});

		and('User should select the purpose of the visit', () => {
			const pusposeField = container.getByText(/Purpose of Visit/i);
		});

		and('User should fill the insurance name', () => {
			const insuranceField = container.getByText(/Insurance Carrier/i);
		});

		when('User clicks on the Search button', async () => {
			const searchBtn = container.getByTestId("searchbtn")
			fireEvent.click(searchBtn)

			await waitFor(() => {
				container.getByText(/Filter/i);
			});
		});

		then('User should see the results on the Schedule Appointments screen', () => {

		});

		and('User should see the selected location, date of appointment, the purpose of visit, and insurance carrier', () => {

		});

		and('User should be able to view the following filters as below:', async (table) => {
			const filterBtn = container.getByTestId("filterbtn")
			fireEvent.click(filterBtn)

			await waitFor(() => {
				container.getByText(/Filter By/i);
			});
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2506-Verify User should be able to apply the Language filter', ({ given, when, then, and }) => {
		given(/^User launch the "(.*)" url$/, (arg0) => {

		});

		when(/^User clicks on the "(.*)" button$/, (arg0) => {

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
			fireEvent.change(locationField, {target: { value: "Texas" }})
		});

		and('User should select the date of appointment', () => {

		});

		and('User should select the purpose of the visit', () => {

		});

		and('User should fill the insurance name', () => {

		});

		when('User clicks on the Search button', async () => {
			const searchBtn = container.getByTestId("searchbtn")
			fireEvent.click(searchBtn)

			await waitFor(() => {
				container.getByText(/Filter/i);
			});
		});

		then('User should see the results on the Schedule Appointments screen', () => {

		});

		and('User should see the selected location, date of appointment, the purpose of visit, and insurance carrier', () => {

		});

		when('User selects Language filter', async() => {
			const filterBtn = container.getByTestId("filterbtn")
			fireEvent.click(filterBtn)

			await waitFor(() => {
				container.getByText(/Filter By/i);
			});
			const expand = container.getByText(/See more/i)
			fireEvent.click(expand)

			const language = container.getByText("Arabic");
			fireEvent.click(language)
		});

		then('User should see Filtered Language', () => {
			const done = container.getByRole('button', {name: "Done"});
			fireEvent.click(done)
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2506-Verify User should be able to apply the Gender filter', ({ given, when, then, and }) => {
		given(/^User launch the "(.*)" url$/, (arg0) => {

		});

		when(/^User clicks on the "(.*)" button$/, (arg0) => {

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
			fireEvent.change(locationField, {target: { value: "Texas" }})
		});

		and('User should select the date of appointment', () => {

		});

		and('User should select the purpose of the visit', () => {

		});

		and('User should fill the insurance name', () => {

		});

		when('User clicks on the Search button', async () => {
			const searchBtn = container.getByTestId("searchbtn")
			fireEvent.click(searchBtn)

			await waitFor(() => {
				container.getByText(/Filter/i);
			});
		});

		then('User should see the results on the Schedule Appointments screen', () => {

		});

		and('User should see the selected location, date of appointment, the purpose of visit, and insurance carrier', () => {

		});

		when('User selects Gender filter', async () => {
			const filterBtn = container.getByTestId("filterbtn")
			fireEvent.click(filterBtn)

			await waitFor(() => {
				container.getByText(/Filter By/i);
				
			});
			
			const language = container.getByText("Arabic");
			fireEvent.click(language)
			fireEvent.click(language)

			const gender = container.getByText("Male");
			fireEvent.click(gender)
		});

		then('User should see Filtered Gender', () => {
			const done = container.getByRole('button', {name: "Done"});
			fireEvent.click(done)
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2506-Verify User should be able to apply the Insurance In/Out of Network filter', ({ given, when, then, and }) => {
		given(/^User launch the "(.*)" url$/, (arg0) => {

		});

		when(/^User clicks on the "(.*)" button$/, (arg0) => {

		});

		then('User should navigated to the search screen', () => {

		});

		and('User should fill the location', () => {

		});

		and('User should select the date of appointment', () => {

		});

		and('User should select the purpose of the visit', () => {

		});

		and('User should fill the insurance name', () => {

		});

		when('User clicks on the Search button', () => {

		});

		then('User should see the results on the Schedule Appointments screen', () => {

		});

		and('User should see the selected location, date of appointment, the purpose of visit, and insurance carrier', () => {

		});

		when('User selects Insurance In/Out of Network filter', () => {

		});

		then('User should see Filtered Insurance In/Out of Network', () => {

		});
	});

	test('EPIC_EPP-44_STORY_EPP-2506-Verify User should be able to apply the Available Today (Provider) filter', ({ given, when, then, and }) => {
		given(/^User launch the "(.*)" url$/, (arg0) => {

		});

		when(/^User clicks on the "(.*)" button$/, (arg0) => {

		});

		then('User should navigated to the search screen', () => {

		});

		and('User should fill the location', () => {

		});

		and('User should select the date of appointment', () => {

		});

		and('User should select the purpose of the visit', () => {

		});

		and('User should fill the insurance name', () => {

		});

		when('User clicks on the Search button', () => {

		});

		then('User should see the results on the Schedule Appointments screen', () => {

		});

		and('User should see the selected location, date of appointment, the purpose of visit, and insurance carrier', () => {

		});

		when('User selects Insurance Available Today (Provider) filter', () => {

		});

		then('User should see Filtered Available Today (Provider)', () => {

		});
	});

	test('EPIC_EPP-44_STORY_EPP-2506-Verify User should see an option to clear those filters when applied', ({ given, when, then, and }) => {
		given(/^User launch the "(.*)" url$/, (arg0) => {

		});

		when(/^User clicks on the "(.*)" button$/, (arg0) => {

		});

		then('User should navigated to the search screen', () => {

		});

		and('User should fill the location', () => {

		});

		and('User should select the date of appointment', () => {

		});

		and('User should select the purpose of the visit', () => {

		});

		and('User should fill the insurance name', () => {

		});

		when('User clicks on the Search button', () => {

		});

		then('User should see the results on the Schedule Appointments screen', () => {

		});

		and('User should see the selected location, date of appointment, the purpose of visit, and insurance carrier', () => {

		});

		when('User selects Insurance Available Today (Provider) filter', () => {

		});

		then('User should see Filtered Available Today (Provider)', () => {

		});

		and('User should see an option to clear the applied filter', () => {

		});
	});

	test('EPIC_EPP-44_STORY_EPP-2506-Verify User should see the filter was removed when user clicks on Clear option', ({ given, when, then, and }) => {
		given(/^User launch the "(.*)" url$/, (arg0) => {

		});

		when(/^User clicks on the "(.*)" button$/, (arg0) => {

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
			fireEvent.change(locationField, {target: { value: "Texas" }})
		});

		and('User should select the date of appointment', () => {

		});

		and('User should select the purpose of the visit', () => {

		});

		and('User should fill the insurance name', () => {

		});

		when('User clicks on the Search button', async () => {
			const searchBtn = container.getByTestId("searchbtn")
			fireEvent.click(searchBtn)

			await waitFor(() => {
				container.getByText(/Filter/i);
				
			});
		});

		then('User should see the results on the Schedule Appointments screen', () => {

		});

		and('User should see the selected location, date of appointment, the purpose of visit, and insurance carrier', () => {

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

		then('User should see Filtered Available Today (Provider)', () => {

		});

		and('User should see an option to clear the applied filter', () => {
			const reset = container.getByRole('button', {name: "Reset"});
			fireEvent.click(reset)
		});

		and('User should see the filter was removed when user clicks on Clear option', () => {
			const done = container.getByRole('button', {name: "Done"});
			fireEvent.click(done)
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2506-Verify User should be able to view the following filters within 3 seconds', ({ given, when, then, and }) => {
		given(/^User launch the "(.*)" url$/, (arg0) => {

		});

		when(/^User clicks on the "(.*)" button$/, (arg0) => {

		});

		then('User should navigated to the search screen', () => {

		});

		and('User should fill the location', () => {

		});

		and('User should select the date of appointment', () => {

		});

		and('User should select the purpose of the visit', () => {

		});

		and('User should fill the insurance name', () => {

		});

		when('User clicks on the Search button', () => {

		});

		then('User should see the results on the Schedule Appointments screen', () => {

		});

		and('User should see the selected location, date of appointment, the purpose of visit, and insurance carrier', () => {

		});

		and('User should be able to view the following filters as below:', (table) => {

		});

		when('User filter based on selected filter', () => {

		});

		then(/^User should see page load within "(.*)"$/, (arg0) => {

		});
	});

	test('EPIC_EPP-44_STORY_EPP-2506-Verify User should not see the any errors script when user clicks F12 on the console', ({ given, when, then, and }) => {
		given(/^User launch the "(.*)" url$/, (arg0) => {

		});

		when(/^User clicks on the "(.*)" button$/, (arg0) => {

		});

		then('User should navigated to the search screen', () => {

		});

		and('User should fill the location', () => {

		});

		and('User should select the date of appointment', () => {

		});

		and('User should select the purpose of the visit', () => {

		});

		and('User should fill the insurance name', () => {

		});

		when('User clicks on the Search button', () => {

		});

		then('User should see the results on the Schedule Appointments screen', () => {

		});

		and('User should see the selected location, date of appointment, the purpose of visit, and insurance carrier', () => {

		});

		and('User should be able to view the following filters as below:', (table) => {

		});

		when('User filter based on selected filter', () => {

		});

		then(/^User should see page load within "(.*)"$/, (arg0) => {

		});

		when(/^User clicks on F(\d+) on the console$/, (arg0) => {

		});

		then('User should not to see any errors script', () => {

		});
	});

	test('EPIC_EPP-44_STORY_EPP-2506-Negative Test Cases-Verify user should see the error message when the internet service is unavailable', ({ given, when, then, and }) => {
		given(/^User launch the "(.*)" url$/, (arg0) => {

		});

		when(/^User clicks on the "(.*)" button$/, (arg0) => {

		});

		then('User should navigated to the search screen', () => {

		});

		and('User should fill the location', () => {

		});

		and('User should select the date of appointment', () => {

		});

		and('User should select the purpose of the visit', () => {

		});

		and('User should fill the insurance name', () => {

		});

		when('User clicks on the Search button', () => {

		});

		then('User should see the results on the Schedule Appointments screen', () => {

		});

		and('User should see the selected location, date of appointment, the purpose of visit, and insurance carrier', () => {

		});

		and('User should be able to view the following filters as below:', (table) => {

		});

		when('User filter based on selected filter', () => {

		});

		then('The Internet service is unavailable', () => {

		});

		and('User should see the appropriate error message', () => {

		});
	});

	test('EPIC_EPP-44_STORY_EPP-2506-Negative Test Cases-Verify user should see the error message when the service is unavailable', ({ given, when, then, and }) => {
		given(/^User launch the "(.*)" url$/, (arg0) => {

		});

		when(/^User clicks on the "(.*)" button$/, (arg0) => {

		});

		then('User should navigated to the search screen', () => {

		});

		and('User should fill the location', () => {

		});

		and('User should select the date of appointment', () => {

		});

		and('User should select the purpose of the visit', () => {

		});

		and('User should fill the insurance name', () => {

		});

		when('User clicks on the Search button', () => {

		});

		then('User should see the results on the Schedule Appointments screen', () => {

		});

		and('User should see the selected location, date of appointment, the purpose of visit, and insurance carrier', () => {

		});

		and('User should be able to view the following filters as below:', (table) => {

		});

		when('User filter based on selected filter', () => {

		});

		then('The service is unavailable', () => {

		});

		and('User should see the appropriate error message', () => {

		});
	});
})