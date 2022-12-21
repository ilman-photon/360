import { act, fireEvent, render, waitFor } from "@testing-library/react";
import axios from "axios";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import { defineFeature, loadFeature } from "jest-cucumber";
import { Provider } from "react-redux";
import Appointment from "../../src/pages/patient/appointment";
import store from "../../src/store/store";
import constants, { TEST_ID } from "../../src/utils/constants";
import mediaQuery from 'css-mediaquery';
import { clickSearch, inputLocation, inputPurpose, navigateToPatientPortalHome } from "../../__mocks__/commonSteps";
import { renderWithProviders } from "../src/utils/test-util";
import { mockSubmitFilterReal, MOCK_SUGESTION } from "../../__mocks__/mockResponse";
import ScheduleAppointmentPage from "../../src/pages/patient/schedule-appointment";

const feature = loadFeature(
	"./__tests__/feature/Patient Portal/Sprint4/EPP-2510.feature"
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

	test('EPIC_EPP-44_STORY_EPP-2510-Verify whether the Time slot is available in the Schedule Appointment view screen', ({ given, when, and, then }) => {
		given('user launch the Marketing Site url', () => {
			navigateToPatientPortalHome()
		});

		when('user clicks on the Schedule your Eye Exam button', () => {
			userClickScheduleAppointmentButton()
		});

		and('user navigates to the schedule appointment screen', () => {
			userNavigateToAppointmentScreen()
		});

		and('user should select the location', () => {
			inputLocation()
		});

		and('user should select the Date of Appointment', () => {
			userSelectDate()
		});

		and('user should select the Purpose of visit', () => {
			inputPurpose()
		});

		and('user should select the Insurance carrier.', () => {
			userSelectInsuranceCarrier()
		});

		and('click on Search button', () => {
			clickSearch()
		});

		and('user should lands on Schedule Appointment view screen with selected location, date, Purpose of visit and insurance carrier data.', () => {
			userSeeFilterResult()
		});

		then('user should see the time slots of each doctor.', async () => {
			userSeeDoctorTimeSlots()
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2510-Verify whether the user is able to select any time slot.', ({ given, when, and, then }) => {
		given('user launch the Marketing Site url', () => {
			navigateToPatientPortalHome()
		});

		when('user clicks on the Schedule your Eye Exam button', () => {
			userClickScheduleAppointmentButton()
		});

		and('user navigates to the schedule appointment screen', () => {
			userNavigateToAppointmentScreen()
		});

		and('user should select the location', () => {
			inputLocation()
		});

		and('user should select the Date of Appointment', () => {
			userSelectDate()
		});

		and('user should select the Purpose of visit', () => {
			inputPurpose()
		});

		and('user should select the Insurance carrier.', () => {
			userSelectInsuranceCarrier()
		});

		and('click on Search button', () => {
			clickSearch()
		});

		and('user should lands on Schedule Appointment view screen with selected location, date, Purpose of visit and insurance carrier data.', () => {
			userSeeFilterResult()
		});

		and('user is able to select any available time slot with their desired Provider.', () => {
			userClickOneDoctorTimeSlots()
		});

		then('user should see the Appointment details review page.', () => {
			reviewAppPage()
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2510-Verify whether the user is navigated to appointment details review page after selecting the time slot.', ({ given, when, and, then }) => {
		given('user launch the Marketing Site url', () => {
			navigateToPatientPortalHome()
		});

		when('user clicks on the Schedule your Eye Exam button', () => {
			userClickScheduleAppointmentButton()
		});

		and('user navigates to the schedule appointment screen', () => {
			userNavigateToAppointmentScreen()
		});

		and('user should select the location', () => {
			inputLocation()
		});

		and('user should select the Date of Appointment', () => {
			userSelectDate()
		});

		and('user should select the Purpose of visit', () => {
			inputPurpose()
		});

		and('user should select the Insurance carrier.', () => {
			userSelectInsuranceCarrier()
		});

		and('click on Search button', () => {
			clickSearch()
		});

		and('user should lands on Schedule Appointment view screen with selected location, date, Purpose of visit and insurance carrier data.', () => {
			userSeeFilterResult()
		});

		then('user is able to select any available time slot with their desired Provider.', () => {
			userClickOneDoctorTimeSlots()
		});
	});
})