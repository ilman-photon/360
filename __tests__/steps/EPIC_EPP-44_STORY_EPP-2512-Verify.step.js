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
import { navigateToPatientPortalHome } from "../../__mocks__/commonSteps";
import { mockSubmitFilterReal } from "../../__mocks__/mockResponse";
import { renderWithProviders } from "../src/utils/test-util";
import ScheduleAppointmentPage from "../../src/pages/patient/schedule-appointment";

const feature = loadFeature(
	"./__tests__/feature/Patient Portal/Sprint4/EPP-2512.feature"
);

defineFeature(feature, (test) => {
	let container;
	const { APPOINTMENT_TEST_ID, SEARCH_PROVIDER_TEST_ID } = constants.TEST_ID
	const mock = new MockAdapter(axios);

	const mockProviderData = [
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
          list: [

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
          list: [

          ],

        },

      ],
      coordinate: {
        latitude: 32.751204,
        longitude: -117.1641166,

      },

    },
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
      availability: [],
      coordinate: {
        latitude: 32.751204,
        longitude: -117.1641166,
      },
    },
  ]

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

	const userClickScheduleAppointmentButton = async () => {
    const btn = await waitFor(() => container.getByTestId("Schedule Appointment"))
    fireEvent.click(btn)
  }

	const userNavigateToAppointmentScreen = async () => {
		const mockGeolocation = {
			getCurrentPosition: jest.fn(),
			watchPosition: jest.fn()
		};

		const domain = window.location.origin;
		mock.onGet(`/ecp/appointments/appointment-types`).reply(200, mockSuggestionReal);
		mock.onPut(`/ecp/appointments/available-slot?searchText=Texas`).reply(400, mockSubmitFilterReal);
		window = Object.assign(window, { innerWidth: 1500 });
		global.navigator.geolocation = mockGeolocation;
		container = renderWithProviders(<Appointment />)
	}

	const userClickPinLocationOnMap = () => {
		var marker = new google.maps.Marker();
		google.maps.event.trigger(marker, 'click', {
			latLng: new google.maps.LatLng(0, 0)
		});
	}

	const userViewTimeSlotIW = async () => {
		const timeSlot = await waitFor(() => container.getByTestId(constants.TEST_ID.SCHEDULE_APPOINTMENT_TEST_ID
			.MAPS.infoWindow.timeslot))
			expect(timeSlot).toBeInTheDocument()
	}

	const reviewAppPage = async () => {
    container.rerender(
      <Provider store={store}>
        {ScheduleAppointmentPage.getLayout(<ScheduleAppointmentPage />)}
      </Provider>
    );
  };

	const userViewAppointmentDetails = async () => {
    await waitFor(() => container.getByText("Review Appointment Details"));
	}

	test('EPIC_EPP-44_STORY_EPP-2512-Verify if user able to select a time slot of the provider', ({ }) => {

	});

	test('EPIC_EPP-44_STORY_EPP-2512-Verify if user able to navigate to review appointment details', ({ given, when, then, and }) => {
		given('user launch the Marketing Site url', () => {
			navigateToPatientPortalHome()
		});

		when('user clicks on the Schedule your Eye Exam button', () => {
			userClickScheduleAppointmentButton()
		});

		then('user lands on to the screen', () => {
			userNavigateToAppointmentScreen()
		});

		when('user click on pin location in Map view', () => {
			userClickPinLocationOnMap()
		});

		then('user should see time slot for provider', () => {
			userViewTimeSlotIW()
		});

		and('user select provider with the time slot available', () => {
			userViewTimeSlotIW()
		});

		then('user should lands onto review appointment page', () => {
			reviewAppPage()
		});

		and('user should see Review Appointnment detail', () => {
			userViewAppointmentDetails()
		});
	});
})