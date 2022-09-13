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

const feature = loadFeature(
	"./__tests__/feature/Patient Portal/Sprint4/EPP-2509.feature"
);

defineFeature(feature, (test) => {
	let container;
  const { APPOINTMENT_TEST_ID, SEARCH_PROVIDER_TEST_ID } = constants.TEST_ID
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

    and('user should select any available time slot.', async () => {
      const timeslotButton = await waitFor(() => container.getAllByTestId(APPOINTMENT_TEST_ID.DIALOG_VIEW_ALL.timeslotButton))
      act(() => {
        fireEvent.click(timeslotButton[0])
      })
    });

    then('user should able to schedule the appointment.', async () => {
      const states = store.getState()
      expect(states.appointment.appointmentSchedule.appointmentInfo.date).toBeTruthy();
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