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
	"./__tests__/feature/Patient Portal/Sprint4/EPP-2538.feature"
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

	test('EPIC_EPP-44_STORY_EPP-2538 - Verify user able to apply the filters which will update the results accordingly from the patient portal.', ({  }) => {

    });

    test('"EPIC_EPP-44_STORY_EPP-2538 - Verify user able to apply the filters which will update the results accordingly from the patient portal."', ({ given, when, and, then }) => {
    	given('user launch Patient Portal url', () => {

    	});

    	when('user is logged in to the application', () => {

    	});

    	and('user clicks to Appointments menu', () => {

    	});

    	then('user navigates to Appointments screen', () => {

    	});

    	and('user lands on \'Appointments\' screen', () => {

    	});

    	and('user views the schedule new appointments link', () => {

    	});

    	and('user clicks on the schedule new appointments', () => {

    	});

    	then('user navigates to the search screen', async () => {
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

    	and('user enters the location', () => {
			const locationField = container.container.querySelector('#location');
			fireEvent.change(locationField, {target: { value: "Texas" }})
    	});

    	and('user selects the date of appointment', () => {

    	});

    	and('user chooses the purpose of the visit', () => {

    	});

    	and('user enters the insurance name', () => {

    	});

    	and('user clicks on the Search button', async () => {
			const searchBtn = container.getByTestId("searchbtn")
			fireEvent.click(searchBtn)

			await waitFor(() => {
				container.getByText(/Filter/i);
			});
    	});

    	and('user views the results in the Schedule Appointments screen', () => {

    	});

    	and('user views the Filters button', () => {
			const filterBtn = container.getByTestId("filterbtn")
			expect(filterBtn).toBeInTheDocument()
    	});

    	and('user clicks on the filter button', async () => {
			const filterBtn = container.getByTestId("filterbtn")
			fireEvent.click(filterBtn)

			await waitFor(() => {
				container.getByText(/Filter By/i);
			});
    	});

    	and('user views the filter for Available Today (Provider)', () => {
			expect(container.getByText(/Available Today/i)).toBeInTheDocument()
    	});

    	and('user views the filter for Language of Provider', () => {
			expect(container.getByText(/Language/i)).toBeInTheDocument()
    	});

    	and('user views the filter for Gender of Provider', () => {
			expect(container.getByText(/Gender/i)).toBeInTheDocument()
    	});

    	and('user views the filter for Insurance In/Out of Network', () => {
			expect(container.getAllByText(/Insurance/i)[1]).toBeInTheDocument()
    	});

    	and('user selects the filters', () => {
			const language = container.getByText("Arabic");
			fireEvent.click(language)
    	});

    	and('user applies the filters', async () => {
			const done = container.getByRole('button', {name: "Done"});
			fireEvent.click(done)
			await waitFor(() => {
				container.getByText("Arabic");
				expect(container.getByText("Arabic")).toBeInTheDocument()
			});
    	});
    });

    test('EPIC_EPP-44_STORY_EPP-2538 - Verify user able to view the filters in the schedule appointment screen from the patient portal and user apply the filter and getting result accordingly.', ({  }) => {

    });

    test('"EPIC_EPP-44_STORY_EPP-2537 - Verify user able to view the filters in the schedule appointment screen from the patient portal and user apply the filter and getting result accordingly."', ({ given, when, and }) => {
    	given('user launch Patient Portal url', () => {

    	});

    	when('user is logged in to the application', async () => {
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

    	and('user clicks on the schedule new appointments search button', async () => {
			const locationField = container.container.querySelector('#location');
			fireEvent.change(locationField, {target: { value: "Texas" }})
			const searchBtn = container.getByTestId("searchbtn")
			fireEvent.click(searchBtn)

			await waitFor(() => {
				container.getByText(/Filter/i);
			});
    	});

    	and('user views the results in the Schedule Appointments screen', () => {
			expect(container.getByText(/Filter/i)).toBeInTheDocument()
    	});

    	and('user views the Filters button', () => {
			expect(container.getByText(/Filter/i)).toBeInTheDocument()
    	});

    	and('user clicks on the filter button', async () => {
			const filterBtn = container.getByTestId("filterbtn")
			fireEvent.click(filterBtn)

			await waitFor(() => {
				container.getByText(/Filter By/i);
			});
    	});

    	and('user views the filter for Available Today (Provider)', () => {
			expect(container.getByText(/Available Today/i)).toBeInTheDocument()
    	});

    	and('user views the filter for Language of Provider', () => {
			expect(container.getByText(/Language/i)).toBeInTheDocument()
    	});

    	and('user views the filter for Gender of Provider', () => {
			expect(container.getByText(/Gender/i)).toBeInTheDocument()
    	});

    	and('user views the filter for Insurance In/Out of Network', () => {
			expect(container.getAllByText(/Insurance/i)[1]).toBeInTheDocument()
    	});

    	and('user selects the filters', () => {
			const language = container.getByText("English");
			fireEvent.click(language)
    	});

    	and('user applies the filters', async () => {
			const done = container.getByRole('button', {name: "Done"});
			fireEvent.click(done)
			await waitFor(() => {
				container.getByText("English");
				expect(container.getByText("English")).toBeInTheDocument()
			});
    	});

    	and('user gets the updated result', () => {
			expect(container.getByText("English")).toBeInTheDocument()
    	});
    });

    test('EPIC_EPP-44_STORY_EPP-2538 - Verify user able to view the filters in the schedule appointment screen from the patient portal and the user clears the filter.', ({  }) => {

    });

    test('"EPIC_EPP-44_STORY_EPP-2537 - Verify user able to view the filters in the schedule appointment screen from the patient portal and the user clears the filter."', ({ given, when, and }) => {
    	given('user launch Patient Portal url', () => {

    	});

    	when('user is logged in to the application', async () => {
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

    	and('user clicks on the schedule new appointments search button', async () => {
			const locationField = container.container.querySelector('#location');
			fireEvent.change(locationField, {target: { value: "Texas" }})
			const searchBtn = container.getByTestId("searchbtn")
			fireEvent.click(searchBtn)

			await waitFor(() => {
				container.getByText(/Filter/i);
			});
    	});

    	and('user views the results in the Schedule Appointments screen', () => {
			expect(container.getByText(/Filter/i)).toBeInTheDocument()
    	});

    	and('user views the Filters button', () => {
			expect(container.getByText(/Filter/i)).toBeInTheDocument()
    	});

    	and('user clicks on the filter button', async () => {
			const filterBtn = container.getByTestId("filterbtn")
			fireEvent.click(filterBtn)

			await waitFor(() => {
				container.getByText(/Filter By/i);
			});
    	});

    	and('user views the filter for Available Today (Provider)', () => {
			expect(container.getByText(/Available Today/i)).toBeInTheDocument()
    	});

    	and('user views the filter for Language of Provider', () => {
			expect(container.getByText(/Language/i)).toBeInTheDocument()
    	});

    	and('user views the filter for Gender of Provider', () => {
			expect(container.getByText(/Gender/i)).toBeInTheDocument()
    	});

    	and('user views the filter for Insurance In/Out of Network', () => {
			expect(container.getAllByText(/Insurance/i)[1]).toBeInTheDocument()
    	});

    	and('user selects the filters', () => {
			const language = container.getAllByText("English")[0];
			fireEvent.click(language)
    	});

    	and('user applies the filters', async () => {
			const done = container.getByRole('button', {name: "Done"});
			fireEvent.click(done)
			await waitFor(() => {
				container.getByText("English");
				expect(container.getByText("English")).toBeInTheDocument()
			});
    	});

    	and('user gets the updated result', () => {
			expect(container.getByText("English")).toBeInTheDocument()
    	});

    	and('user removes the filter', () => {
			// const close = container.getAllByTestId('CloseIcon')[0];
			// expect(close).toBeInTheDocument()
			// fireEvent.click(close)

			// expect(container.queryByTestId('CloseIcon')).not.toBeInTheDocument()
    	});
    });  
})