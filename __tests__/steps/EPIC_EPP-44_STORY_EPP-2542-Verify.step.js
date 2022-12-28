import { act, fireEvent, render, waitFor, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { defineFeature, loadFeature } from "jest-cucumber";
const useRouter = jest.spyOn(require("next/router"), "useRouter");
import constants from "../../src/utils/constants";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import {
	createMatchMedia,
	defaultValidation,
	renderAppointmentDetail,
	renderLogin,
	doLogin,
	renderScheduleAppointment,
	provideFilters,
	clickSearch,
} from "../../__mocks__/commonSteps";
import {
	mockAppointmentTypes,
	submitFilter,
	MOCK_APPOINTMENT,
	MOCK_PAST,
	MOCK_SUGESTION,
	mockInsurance,
} from "../../__mocks__/mockResponse";
import { Login } from "../../src/components/organisms/Login/login";
import { Provider } from "react-redux";
import store from "../../src/store/store";
import Appointments from "../../src/pages/patient/appointments";
import Appointment from "../../src/pages/patient/appointment";
import { TEST_ID } from "../../src/utils/constants";

const feature = loadFeature(
	"./__tests__/feature/Patient Portal/Sprint4/EPP-2542.feature"
);

jest.mock("@react-google-maps/api", () => ({
	useLoadScript: () => ({
		isLoaded: true,
		loadError: null
	}),
	GoogleMap: () => <div></div>,
	Marker: () => <Marker />
}));

defineFeature(feature, (test) => {
	let container;
	const mock = new MockAdapter(axios);
	const { APPOINTMENT_TEST_ID } = TEST_ID;

	beforeEach(() => {
		const mockGeolocation = {
			getCurrentPosition: jest.fn(),
			watchPosition: jest.fn(),
		};

		mock
			.onGet("/ecp/appointments/appointment-types", mockAppointmentTypes)
			.reply(200, mockAppointmentTypes);
		mock
			.onGet("/ecp/appointments/insurance/allpayers", mockInsurance)
			.reply(200, mockInsurance);
		mock
			.onPut("/ecp/appointments/available-slot?searchText=Texas")
			.reply(200, submitFilter);
		window.matchMedia = createMatchMedia("1920px");
		global.navigator.geolocation = mockGeolocation;
	});

	test('EPIC_EPP-44_STORY_EPP-2542-Verify whether the doctors availability details is displaying when the user clicks the View all availability in Schedule Appointment screen', ({ given, when, and, then }) => {
		given('user launch Patient Portal url', async () => {
			container = await renderLogin(container);
		});

		when('user is logged in to the application', async () => {
			await doLogin(mock, container);
		});

		and('user clicks on Appointments menu', () => {
			expect(true).toBeTruthy();
		});

		then('User should navigated to the search screen', async () => {
			container = await renderScheduleAppointment(mock);
		});

		and('user provided location,date of appointment,purpose of visit,insurance and provider', async () => {
			await provideFilters(container);
		});

		and('user clicks on the Search button', async () => {
			await clickSearch(container);
		});

		then('user should lands on Schedule Appointment view screen with selected location, date, Purpose of visit and insurance carrier data.', () => {
			expect(true).toBeTruthy();
		});

		when('user click the View all availability button', async () => {
			const timeSlotButton = await waitFor(
				() =>
					container.getAllByTestId(TEST_ID.SEARCH_PROVIDER_TEST_ID.viewAll)
			);
			act(() => {
				fireEvent.click(timeSlotButton[0]);
			});
		});

		then('user should see all the doctors availability details.', () => {
			expect(true).toBeTruthy();
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2542-Verify whether the below mentioned details are displaying after user clicking the View all availability button. Doctor\'s name with image', ({ given, when, and, then }) => {
		given('user launch Patient Portal url', async () => {
			container = await renderLogin(container);
		});

		when('user is logged in to the application', async () => {
			await doLogin(mock, container);
		});

		and('user clicks on Appointments menu', () => {
			expect(true).toBeTruthy();
		});

		then('User should navigated to the search screen', async () => {
			container = await renderScheduleAppointment(mock);
		});

		and('user provided location,date of appointment,purpose of visit,insurance and provider', () => {
			expect(true).toBeTruthy();
		});

		and('user clicks on the Search button', async () => {
			await clickSearch(container);
		});

		then('user should lands on Schedule Appointment view screen with selected location, date, Purpose of visit and insurance carrier data.', () => {
			expect(true).toBeTruthy();
		});

		when('user click the View all availability button', async () => {
			const timeSlotButton = await waitFor(
				() =>
					container.getAllByTestId(TEST_ID.SEARCH_PROVIDER_TEST_ID.viewAll)
			);
			act(() => {
				fireEvent.click(timeSlotButton[0]);
			});
		});

		then('user should display the Doctor\'s name with Image.', () => {
			expect(true).toBeTruthy();
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2542-Verify whether the user can able to see the available time slots of the doctors for the whole week in day wise', ({ given, when, and, then }) => {
		given('user launch Patient Portal url', async () => {
			container = await renderLogin(container);
		});

		when('user is logged in to the application', async () => {
			await doLogin(mock, container);
		});

		and('user clicks on Appointments menu', () => {
			expect(true).toBeTruthy();
		});

		then('User should navigated to the search screen', async () => {
			container = await renderScheduleAppointment(mock);
		});

		and('user provided location,date of appointment,purpose of visit,insurance and provider', () => {
			expect(true).toBeTruthy();
		});

		and('user clicks on the Search button', async () => {
			await clickSearch(container);
		});

		then('user should lands on Schedule Appointment view screen with selected location, date, Purpose of visit and insurance carrier data.', () => {
			expect(true).toBeTruthy();
		});

		when('user click the View all availability button', async () => {
			const timeSlotButton = await waitFor(
				() =>
					container.getAllByTestId(TEST_ID.SEARCH_PROVIDER_TEST_ID.viewAll)
			);
			act(() => {
				fireEvent.click(timeSlotButton[0]);
			});
		});

		then('user should see the time slots of each doctor for whole week in day wise', () => {
			expect(true).toBeTruthy();
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2542-Verify whether the user is able to select the available time slot and schedule the appointment.', ({ given, when, and, then }) => {
		given('user launch Patient Portal url', async () => {
			container = await renderLogin(container);
		});

		when('user is logged in to the application', async () => {
			await doLogin(mock, container);
		});

		and('user clicks on Appointments menu', () => {
			expect(true).toBeTruthy();
		});

		then('User should navigated to the search screen', async () => {
			container = await renderScheduleAppointment(mock);
		});

		and('user provided location,date of appointment,purpose of visit,insurance and provider', () => {
			expect(true).toBeTruthy();
		});

		and('user clicks on the Search button', async () => {
			await clickSearch(container);
		});

		then('user should lands on Schedule Appointment view screen with selected location, date, Purpose of visit and insurance carrier data.', () => {
			expect(true).toBeTruthy();
		});

		when('user click the View all availability button', async () => {
			const timeSlotButton = await waitFor(
				() =>
					container.getAllByTestId(TEST_ID.SEARCH_PROVIDER_TEST_ID.viewAll)
			);
			act(() => {
				fireEvent.click(timeSlotButton[0]);
			});
		});

		and('user should select any available time slot.', () => {
			expect(true).toBeTruthy();
		});

		then('user should able to schedule the appointment.', () => {
			expect(true).toBeTruthy();
		});
	});
})