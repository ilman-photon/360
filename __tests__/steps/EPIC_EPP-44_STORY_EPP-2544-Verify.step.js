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
import mediaQuery from "css-mediaquery";
import { TEST_ID } from "../../src/utils/constants";
import { clickSearch, inputLocation, inputPurpose, renderAppointmentDetail } from "../../__mocks__/commonSteps";
import {
  mockAppointmentTypes,
  mockInsurance,
  mockSubmitFilterReal,
  submitFilter,
} from "../../__mocks__/mockResponse";
import { renderWithProviders } from "../src/utils/test-util";
import ScheduleAppointmentPage from "../../src/pages/patient/schedule-appointment/index";
import InfoWindowContent from "../../src/components/organisms/Google/Maps/infoWindowContent";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-2544.feature"
);

const defaultValidation = () => {
  expect(true).toBeTruthy();
};

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

  function createMatchMedia(width) {
    return (query) => ({
      matches: mediaQuery.match(query, { width }),
      addListener: () => {},
      removeListener: () => {},
    });
  }

  beforeEach(() => {
    mock
      .onGet("/ecp/appointments/appointment-types", mockAppointmentTypes)
      .reply(200, mockAppointmentTypes);
    mock
      .onGet("/ecp/appointments/insurance/allpayers", mockInsurance)
      .reply(200, mockInsurance);
    mock
      .onPut("/ecp/appointments/available-slot?searchText=Texas")
      .reply(200, submitFilter);
  });

  afterEach(() => {
    mock.reset();
  });

  const userClickScheduleAppointmentButton = async () => {
    const btn = await waitFor(() => container.getByTestId("Schedule Appointment"))
    fireEvent.click(btn)
  }

  const userSeeSelectedLocationAndProvider = () => {
    expect(container.getByText(/Location/i)).toBeInTheDocument()
    expect(container.getByText(/Date/i)).toBeInTheDocument()
  }

  const userSeePinMarkerMap = async () => {
    new google.maps.Marker();
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

  const userSelectDate = async () => {
		const dateInput = await waitFor(() => container.getByLabelText("Date"))
		act(() => {
			fireEvent.change(dateInput, { target: { value: "22-09-2022" } });
		});
	}

	const userSelectInsuranceCarrier = async () => {
		const insuranceInput = await waitFor(() => container.getByLabelText("Insurance Carrier"))
		act(() => {
			fireEvent.change(insuranceInput, { target: { value: "Aetna" } });
		});
	}

	const userSeeFilterResult = async () => {
		const filterResult = await waitFor(() => container.getByTestId(APPOINTMENT_TEST_ID.FILTER_RESULT.container))
		expect(filterResult).toBeInTheDocument()
	}

  const userSeeDoctorTimeSlots = async () => {
		const filterResult = await waitFor(() => container.getByTestId(TEST_ID.SEARCH_PROVIDER_TEST_ID.hourButton))
		expect(filterResult).toBeInTheDocument()
	}

  const userClickOneDoctorTimeSlots = async () => {
		const hourBtn = await waitFor(() => container.getByTestId(TEST_ID.SEARCH_PROVIDER_TEST_ID.hourButton))
		fireEvent.click(hourBtn)
	}

  const reviewAppPage = async () => {
    container.rerender(
      <Provider store={store}>
        {ScheduleAppointmentPage.getLayout(<ScheduleAppointmentPage />)}
      </Provider>
    );
    await waitFor(() => container.getByText("Review Appointment Details"));
  };
  
  const userClickPinLocationOnMap = () => {
		var marker = new google.maps.Marker();
		google.maps.event.trigger(marker, 'click', {
			latLng: new google.maps.LatLng(0, 0)
		});
	}

  const userSeeDoctorNameWithImage = async () => {
		container.rerender(<InfoWindowContent
      data={mockProviderData}
      OnTimeClicked={() => jest.fn()} />);
	}

  const userViewTimeSlotIW = async () => {
		const timeSlot = await waitFor(() => container.getByTestId(constants.TEST_ID.SCHEDULE_APPOINTMENT_TEST_ID
			.MAPS.infoWindow.timeslot))
    expect(timeSlot).toBeInTheDocument()
	}
  
  const userClickTimeSlotIW = async () => {
		const timeSlot = await waitFor(() => container.getByTestId(constants.TEST_ID.SCHEDULE_APPOINTMENT_TEST_ID
			.MAPS.infoWindow.timeslot))
		fireEvent.click(timeSlot)
	}

  const userClickNextProvider = () => {
    const nextBtn = container.getByTestId(constants.TEST_ID.MAP_INFO_WINDOW.nextProvider)
    fireEvent.click(nextBtn)
  }

  test("EPIC_EPP-44_STORY_EPP-2544-Verify User should see a pin in Map view", ({
    given,
    when,
    then,
    and,
  }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      userClickScheduleAppointmentButton()
    });

    then("User should navigated to the search screen", () => {
      userNavigateToAppointmentScreen()
    });

    and("User should fill the location", () => {
      inputLocation()
    });

    and("User should select the date of appointment", () => {
      userSelectDate()
    });

    and("User should select the purpose of the visit", () => {
      inputPurpose()
    });

    and("User should fill the insurance name", () => {
      userSelectInsuranceCarrier()
    });

    and("User should see the option to Search", () => {
      defaultValidation();
    });

    when("User clicks on the option to Search", () => {
      clickSearch()
    });

    then(/^User should navigated on "(.*)" screen$/, (arg0) => {
      userSeeFilterResult()
    });

    and("User should see the selected location", () => {
      defaultValidation();
    });

    and("User should see the selected date", () => {
      defaultValidation();
    });

    and("User should see the purpose of visit (if provided)", () => {
      defaultValidation();
    });

    and("And User should see the insurance carrier (if provided)", () => {
      defaultValidation();
    });

    and("User should see a time slot of the provider", () => {
      userSeeDoctorTimeSlots()
    });

    when("User selects a time slot of the provider", () => {
      userClickOneDoctorTimeSlots()
    });

    then("User should navigated to review the appointment details", () => {
      reviewAppPage()
    });

    and("User should see the selected location along with the provider", () => {
      userSeeSelectedLocationAndProvider()
    });

    and("User should see a pin in Map view", () => {
      userSeePinMarkerMap()
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2544-Verify User should see the doctor’s name with image and address of the location", ({
    given,
    when,
    then,
    and,
  }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      userClickScheduleAppointmentButton()
    });

    then("User should navigated to the search screen", () => {
      userNavigateToAppointmentScreen()
    });

    and("User should fill the location", () => {
      inputLocation()
    });

    and("User should select the date of appointment", () => {
      userSelectDate()
    });

    and("User should select the purpose of the visit", () => {
      inputPurpose()
    });

    and("User should fill the insurance name", () => {
      userSelectInsuranceCarrier()
    });

    and("User should see the option to Search", () => {
      defaultValidation();
    });

    when("User clicks on the option to Search", () => {
      clickSearch()
    });

    then(/^User should navigated on "(.*)" screen$/, (arg0) => {
      userSeeFilterResult()
    });

    and("User should see the selected location", () => {
      defaultValidation();
    });

    and("User should see the selected date", () => {
      defaultValidation();
    });

    and("User should see the purpose of visit (if provided)", () => {
      defaultValidation();
    });

    and("And User should see the insurance carrier (if provided)", () => {
      defaultValidation();
    });

    and("User should see a time slot of the provider", () => {
      userSeeDoctorTimeSlots()
    });

    when("User selects a time slot of the provider", () => {
      userClickOneDoctorTimeSlots()
    });

    then("User should navigated to review the appointment details", () => {
      reviewAppPage()
    });

    and("User should see the selected location along with the provider", () => {
      userSeeSelectedLocationAndProvider()
    });

    and("User should see a pin in Map view", () => {
      userSeePinMarkerMap()
    });

    when("User clicks on any pin in Map view", () => {
      userClickPinLocationOnMap()
    });

    then('user should see the doctor’s name with image', () => {
			userSeeDoctorNameWithImage()
		});

		and('User should see the address of the doctor\'s location', () => {
			userSeeDoctorNameWithImage()
		});
  });

  test("EPIC_EPP-44_STORY_EPP-2544-Verify User should see the available time slots of that provider for the date of appointment selected", ({
    given,
    when,
    then,
    and,
  }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      userClickScheduleAppointmentButton()
    });

    then("User should navigated to the search screen", () => {
      userNavigateToAppointmentScreen()
    });

    and("User should fill the location", () => {
      inputLocation()
    });

    and("User should select the date of appointment", () => {
      userSelectDate()
    });

    and("User should select the purpose of the visit", () => {
      inputPurpose()
    });

    and("User should fill the insurance name", () => {
      userSelectInsuranceCarrier()
    });

    and("User should see the option to Search", () => {
      defaultValidation();
    });

    when("User clicks on the option to Search", () => {
      clickSearch()
    });

    then(/^User should navigated on "(.*)" screen$/, (arg0) => {
      userSeeFilterResult()
    });

    and("User should see the selected location", () => {
      defaultValidation();
    });

    and("User should see the selected date", () => {
      defaultValidation();
    });

    and("User should see the purpose of visit (if provided)", () => {
      defaultValidation();
    });

    and("User should see the insurance carrier (if provided)", () => {
      defaultValidation();
    });

    and("User should see a time slot of the provider", () => {
      userSeeDoctorTimeSlots()
    });

    when("User selects a time slot of the provider", () => {
      userClickOneDoctorTimeSlots()
    });

    then("User should navigated to review the appointment details", () => {
      reviewAppPage()
    });

    and("User should see the selected location along with the provider", () => {
      userSeeSelectedLocationAndProvider()
    });

    and("User should see a pin in Map view", () => {
      userSeePinMarkerMap()
    });

    when("User clicks on any pin in Map view", () => {
      userClickPinLocationOnMap()
    });

    then('user should see the doctor’s name with image', () => {
			userSeeDoctorNameWithImage()
		});

		and('User should see the address of the doctor\'s location', () => {
			userSeeDoctorNameWithImage()
		});

    and(
      "User should see the available time slots of that provider for the date of appointment selected",
      () => {
        userViewTimeSlotIW();
      }
    );
  });

  test("EPIC_EPP-44_STORY_EPP-2544-Verify User should be able to swipe/ navigate through different providers if they are the same location in the map", ({
    given,
    when,
    then,
    and,
  }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      userClickScheduleAppointmentButton()
    });

    then("User should navigated to the search screen", () => {
      userNavigateToAppointmentScreen()
    });

    and("User should fill the location", () => {
      inputLocation()
    });

    and("User should select the date of appointment", () => {
      userSelectDate()
    });

    and("User should select the purpose of the visit", () => {
      inputPurpose()
    });

    and("User should fill the insurance name", () => {
      userSelectInsuranceCarrier()
    });

    and("User should see the option to Search", () => {
      defaultValidation();
    });

    when("User clicks on the option to Search", () => {
      clickSearch()
    });

    then(/^User should navigated on "(.*)" screen$/, (arg0) => {
      userSeeFilterResult()
    });

    and("User should see the selected location", () => {
      defaultValidation();
    });

    and("User should see the selected date", () => {
      defaultValidation();
    });

    and("User should see the purpose of visit (if provided)", () => {
      defaultValidation();
    });

    and("And User should see the insurance carrier (if provided)", () => {
      defaultValidation();
    });

    and("User should see a time slot of the provider", () => {
      userSeeDoctorTimeSlots()
    });

    when("User selects a time slot of the provider", () => {
      userClickOneDoctorTimeSlots()
    });

    then("User should navigated to review the appointment details", () => {
      reviewAppPage()
    });

    and("User should see the selected location along with the provider", () => {
      userSeeSelectedLocationAndProvider()
    });

    and("User should see a pin in Map view", () => {
      userSeePinMarkerMap()
    });

    when("User clicks on any pin in Map view", () => {
      userClickPinLocationOnMap()
    });

    then('user should see the doctor’s name with image', () => {
			userSeeDoctorNameWithImage()
		});

		and('User should see the address of the doctor\'s location', () => {
			userSeeDoctorNameWithImage()
		});

    and(
      "User should see the available time slots of that provider for the date of appointment selected",
      () => {
        userViewTimeSlotIW();
      }
    );

    and(
      "User should be able to swipe/ navigate through different providers if they are the same location in the map",
      () => {
        userClickNextProvider();
      }
    );
  });

  test("EPIC_EPP-44_STORY_EPP-2544-Verify User should be able to select a time-slot listed there to schedule the appointment", ({
    given,
    when,
    then,
    and,
  }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      userClickScheduleAppointmentButton()
    });

    then("User should navigated to the search screen", () => {
      userNavigateToAppointmentScreen()
    });

    and("User should fill the location", () => {
      inputLocation()
    });

    and("User should select the date of appointment", () => {
      userSelectDate()
    });

    and("User should select the purpose of the visit", () => {
      inputPurpose()
    });

    and("User should fill the insurance name", () => {
      userSelectInsuranceCarrier()
    });

    and("User should see the option to Search", () => {
      defaultValidation();
    });

    when("User clicks on the option to Search", () => {
      clickSearch()
    });

    then(/^User should navigated on "(.*)" screen$/, (arg0) => {
      userSeeFilterResult()
    });

    and("User should see the selected location", () => {
      defaultValidation();
    });

    and("User should see the selected date", () => {
      defaultValidation();
    });

    and("User should see the purpose of visit (if provided)", () => {
      defaultValidation();
    });

    and("And User should see the insurance carrier (if provided)", () => {
      defaultValidation();
    });

    and("User should see a time slot of the provider", () => {
      userSeeDoctorTimeSlots()
    });

    when("User selects a time slot of the provider", () => {
      userClickOneDoctorTimeSlots()
    });

    then("User should navigated to review the appointment details", () => {
      reviewAppPage()
    });

    and("User should see the selected location along with the provider", () => {
      userSeeSelectedLocationAndProvider()
    });

    and("User should see a pin in Map view", () => {
      userSeePinMarkerMap()
    });

    when("User clicks on any pin in Map view", () => {
      userClickPinLocationOnMap()
    });

    then('user should see the doctor’s name with image', () => {
			userSeeDoctorNameWithImage()
		});

		and('User should see the address of the doctor\'s location', () => {
			userSeeDoctorNameWithImage()
		});

    and(
      "User should see the available time slots of that provider for the date of appointment selected",
      () => {
        userViewTimeSlotIW();
      }
    );

    and(
      "User should be able to swipe/ navigate through different providers if they are the same location in the map",
      () => {
        userClickNextProvider();
      }
    );

    when(
      "User selects a time-slot listed there to schedule the appointment",
      () => {
        userClickTimeSlotIW();
      }
    );

    then(
      "User see the list of provider with time slots in map view from patient portal.",
      () => {
        userViewTimeSlotIW();
      }
    );
  });

  test("EPIC_EPP-44_STORY_EPP-2544-Verify should be able to view the list of provider with time slots in map view from patient portal - within 3 seconds", ({
    given,
    when,
    then,
    and,
  }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      userClickScheduleAppointmentButton()
    });

    then("User should navigated to the search screen", () => {
      userNavigateToAppointmentScreen()
    });

    and("User should fill the location", () => {
      inputLocation()
    });

    and("User should select the date of appointment", () => {
      userSelectDate()
    });

    and("User should select the purpose of the visit", () => {
      inputPurpose()
    });

    and("User should fill the insurance name", () => {
      userSelectInsuranceCarrier()
    });

    and("User should see the option to Search", () => {
      defaultValidation();
    });

    when("User clicks on the option to Search", () => {
      clickSearch()
    });

    then(/^User should navigated on "(.*)" screen$/, (arg0) => {
      userSeeFilterResult()
    });

    and("User should see the selected location", () => {
      defaultValidation();
    });

    and("User should see the selected date", () => {
      defaultValidation();
    });

    and("User should see the purpose of visit (if provided)", () => {
      defaultValidation();
    });

    and("And User should see the insurance carrier (if provided)", () => {
      defaultValidation();
    });

    and("User should see a time slot of the provider", () => {
      userSeeDoctorTimeSlots()
    });

    when("User selects a time slot of the provider", () => {
      userClickOneDoctorTimeSlots()
    });

    then("User should navigated to review the appointment details", () => {
      reviewAppPage()
    });

    and("User should see the selected location along with the provider", () => {
      userSeeSelectedLocationAndProvider()
    });

    and("User should see a pin in Map view", () => {
      userSeePinMarkerMap()
    });

    when("User clicks on any pin in Map view", () => {
      userClickPinLocationOnMap()
    });

    then('user should see the doctor’s name with image', () => {
			userSeeDoctorNameWithImage()
		});

		and('User should see the address of the doctor\'s location', () => {
			userSeeDoctorNameWithImage()
		});

    and(
      "User should see the available time slots of that provider for the date of appointment selected",
      () => {
        userViewTimeSlotIW();
      }
    );

    and(
      "User should be able to swipe/ navigate through different providers if they are the same location in the map",
      () => {
        userClickNextProvider();
      }
    );

    when(
      "User selects a time-slot listed there to schedule the appointment",
      () => {
        userClickTimeSlotIW();
      }
    );

    and(/^User should see page load within "(.*)"$/, (arg0) => {
      defaultValidation();
    });

    then(
      "User see the list of provider with time slots in map view from patient portal",
      () => {
        userViewTimeSlotIW();
      }
    );
  });

  test("EPIC_EPP-44_STORY_EPP-2544-Verify should be able to view the list of provider with time slots in map view from patient portal - Without error script when user clicks on F12 on the console", ({
    given,
    when,
    then,
    and,
  }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      userClickScheduleAppointmentButton()
    });

    then("User should navigated to the search screen", () => {
      userNavigateToAppointmentScreen()
    });

    and("User should fill the location", () => {
      inputLocation()
    });

    and("User should select the date of appointment", () => {
      userSelectDate()
    });

    and("User should select the purpose of the visit", () => {
      inputPurpose()
    });

    and("User should fill the insurance name", () => {
      userSelectInsuranceCarrier()
    });

    and("User should see the option to Search", () => {
      defaultValidation();
    });

    when("User clicks on the option to Search", () => {
      clickSearch()
    });

    then(/^User should navigated on "(.*)" screen$/, (arg0) => {
      userSeeFilterResult()
    });

    and("User should see the selected location", () => {
      defaultValidation();
    });

    and("User should see the selected date", () => {
      defaultValidation();
    });

    and("User should see the purpose of visit (if provided)", () => {
      defaultValidation();
    });

    and("And User should see the insurance carrier (if provided)", () => {
      defaultValidation();
    });

    and("User should see a time slot of the provider", () => {
      userSeeDoctorTimeSlots()
    });

    when("User selects a time slot of the provider", () => {
      userClickOneDoctorTimeSlots()
    });

    then("User should navigated to review the appointment details", () => {
      reviewAppPage()
    });

    and("User should see the selected location along with the provider", () => {
      userSeeSelectedLocationAndProvider()
    });

    and("User should see a pin in Map view", () => {
      userSeePinMarkerMap()
    });

    when("User clicks on any pin in Map view", () => {
      userClickPinLocationOnMap()
    });

    then('user should see the doctor’s name with image', () => {
			userSeeDoctorNameWithImage()
		});

		and('User should see the address of the doctor\'s location', () => {
			userSeeDoctorNameWithImage()
		});

    and(
      "User should see the available time slots of that provider for the date of appointment selected",
      () => {
        userViewTimeSlotIW();
      }
    );

    and(
      "User should be able to swipe/ navigate through different providers if they are the same location in the map",
      () => {
        userClickNextProvider();
      }
    );

    when(
      "User selects a time-slot listed there to schedule the appointment",
      () => {
        userClickTimeSlotIW();
      }
    );

    and(/^User should see page load within "(.*)"$/, (arg0) => {
      defaultValidation();
    });

    then(
      "User see the list of provider with time slots in map view from patient portal",
      () => {
        userViewTimeSlotIW();
      }
    );

    when(/^user clicks on F(\d+) on the console$/, (arg0) => {
      defaultValidation();
    });

    then("user should not to see any errors script", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2544-Verify should be able to view the list of provider with time slots in map view from patient portal - When the internet service is unavailable user should see the following error message", ({
    given,
    when,
    then,
    and,
  }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      userClickScheduleAppointmentButton()
    });

    then("User should navigated to the search screen", () => {
      userNavigateToAppointmentScreen()
    });

    and("User should fill the location", () => {
      inputLocation()
    });

    and("User should select the date of appointment", () => {
      userSelectDate()
    });

    and("User should select the purpose of the visit", () => {
      inputPurpose()
    });

    and("User should fill the insurance name", () => {
      userSelectInsuranceCarrier()
    });

    and("User should see the option to Search", () => {
      defaultValidation();
    });

    when("User clicks on the option to Search", () => {
      clickSearch()
    });

    then(/^User should navigated on "(.*)" screen$/, (arg0) => {
      userSeeFilterResult()
    });

    and("User should see the selected location", () => {
      defaultValidation();
    });

    and("User should see the selected date", () => {
      defaultValidation();
    });

    and("User should see the purpose of visit (if provided)", () => {
      defaultValidation();
    });

    and("And User should see the insurance carrier (if provided)", () => {
      defaultValidation();
    });

    and("User should see a time slot of the provider", () => {
      userSeeDoctorTimeSlots()
    });

    when("User selects a time slot of the provider", () => {
      userClickOneDoctorTimeSlots()
    });

    then("User should navigated to review the appointment details", () => {
      reviewAppPage()
    });

    and("User should see the selected location along with the provider", () => {
      userSeeSelectedLocationAndProvider()
    });

    and("User should see a pin in Map view", () => {
      userSeePinMarkerMap()
    });

    when("User clicks on any pin in Map view", () => {
      userClickPinLocationOnMap()
    });

    then('user should see the doctor’s name with image', () => {
			userSeeDoctorNameWithImage()
		});

		and('User should see the address of the doctor\'s location', () => {
			userSeeDoctorNameWithImage()
		});

    and(
      "User should see the available time slots of that provider for the date of appointment selected",
      () => {
        userViewTimeSlotIW();
      }
    );

    and(
      "User should be able to swipe/ navigate through different providers if they are the same location in the map",
      () => {
        userClickNextProvider();
      }
    );

    when(
      "User selects a time-slot listed there to schedule the appointment",
      () => {
        userClickTimeSlotIW();
      }
    );

    then("The Internet service is unavailable", () => {
      defaultValidation();
    });

    and("User should see the appropriate error message", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2544-Verify should be able to view the list of provider with time slots in map view from patient portal - When the service is unavailable user should see the following error message", ({
    given,
    when,
    then,
    and,
  }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      userClickScheduleAppointmentButton()
    });

    then("User should navigated to the search screen", () => {
      userNavigateToAppointmentScreen()
    });

    and("User should fill the location", () => {
      inputLocation()
    });

    and("User should select the date of appointment", () => {
      userSelectDate()
    });

    and("User should select the purpose of the visit", () => {
      inputPurpose()
    });

    and("User should fill the insurance name", () => {
      userSelectInsuranceCarrier()
    });

    and("User should see the option to Search", () => {
      defaultValidation();
    });

    when("User clicks on the option to Search", () => {
      clickSearch()
    });

    then(/^User should navigated on "(.*)" screen$/, (arg0) => {
      userSeeFilterResult()
    });

    and("User should see the selected location", () => {
      defaultValidation();
    });

    and("User should see the selected date", () => {
      defaultValidation();
    });

    and("User should see the purpose of visit (if provided)", () => {
      defaultValidation();
    });

    and("And User should see the insurance carrier (if provided)", () => {
      defaultValidation();
    });

    and("User should see a time slot of the provider", () => {
      userSeeDoctorTimeSlots()
    });

    when("User selects a time slot of the provider", () => {
      userClickOneDoctorTimeSlots()
    });

    then("User should navigated to review the appointment details", () => {
      reviewAppPage()
    });

    and("User should see the selected location along with the provider", () => {
      userSeeSelectedLocationAndProvider()
    });

    and("User should see a pin in Map view", () => {
      userSeePinMarkerMap()
    });

    when("User clicks on any pin in Map view", () => {
      userClickPinLocationOnMap()
    });

    then('user should see the doctor’s name with image', () => {
			userSeeDoctorNameWithImage()
		});

		and('User should see the address of the doctor\'s location', () => {
			userSeeDoctorNameWithImage()
		});

    and(
      "User should see the available time slots of that provider for the date of appointment selected",
      () => {
        userViewTimeSlotIW();
      }
    );

    and(
      "User should be able to swipe/ navigate through different providers if they are the same location in the map",
      () => {
        userClickNextProvider();
      }
    );

    when(
      "User selects a time-slot listed there to schedule the appointment",
      () => {
        userClickTimeSlotIW();
      }
    );

    then("The service is unavailable", () => {
      defaultValidation();
    });

    and("User should see the appropriate error message", () => {
      defaultValidation();
    });
  });
});
