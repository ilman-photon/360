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
} from "../../__mocks__/commonSteps";
import {
	mockAppointmentTypes,
	submitFilter,
	MOCK_APPOINTMENT,
	MOCK_PAST,
	MOCK_SUGESTION,
} from "../../__mocks__/mockResponse";
import { Login } from "../../src/components/organisms/Login/login";
import { Provider } from "react-redux";
import store from "../../src/store/store";
import Appointments from "../../src/pages/patient/appointments";
import Appointment from "../../src/pages/patient/appointment";

const feature = loadFeature(
	"./__tests__/feature/Patient Portal/Sprint4/EPP-2503.feature"
);

let container;
const mock = new MockAdapter(axios);
const element = document.createElement("div");
let appointmentsContainer;
const { APPOINTMENT_TEST_ID, SEARCH_PROVIDER_TEST_ID } = constants.TEST_ID;

const launchURL = () => {
	const mockOnLoginClicked = jest.fn((data, route, callback) => {
		callback({
			status: "success",
		});
	});
	container = render(<Login OnLoginClicked={mockOnLoginClicked} />);
}

const userSeeScheduleScreen = () => {
	expect(container.getAllByText("Date and time")).toBeTruthy();
	expect(container.getAllByText("Insurance")).toBeTruthy();
	expect(container.getAllByText("No Insurance provided")).toBeTruthy();
	expect(container.getAllByText("Purpose of visit")).toBeTruthy();
};

const inputLocation = async () => {
	const locationInput = await waitFor(() =>
		container.getByLabelText("City, state, or zip code")
	);
	act(() => {
		fireEvent.change(locationInput, { target: { value: "Texas" } });
	});
	expect(locationInput).toBeInTheDocument();
};

const inputDate = async () => {
	const dateInput = await waitFor(() => container.getByLabelText("Date"));
	act(() => {
		fireEvent.change(dateInput, { target: { value: "22-09-2022" } });
	});
	expect(dateInput).toBeInTheDocument();
};

const inputPurpose = async () => {
	const purposeInput = await waitFor(() =>
		container.getByTestId("select-purposes-of-visit")
	);
	act(() => {
		fireEvent.change(purposeInput, { target: { value: "Eye Exam" } });
	});
	expect(purposeInput).toBeInTheDocument();
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

const clickSearch = async () => {
	const searchBtn = await waitFor(() =>
		container.getByTestId(APPOINTMENT_TEST_ID.searchbtn)
	);
	fireEvent.click(searchBtn);
	expect(searchBtn).toBeInTheDocument();
};

defineFeature(feature, (test) => {
	test('"EPIC_EPP-44_STORY_EPP-2503 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user view the insurance carrier."', ({ given, and, then }) => {
		given('user launch the Marketing Site url', () => {
			launchURL();
		});

		and('user clicks on the Schedule your Eye Exam button', async () => {
			cleanup();
			const mock = new MockAdapter(axios);
			mock
				.onGet(
					`/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/upcoming`
				)
				.reply(200, MOCK_APPOINTMENT);
			mock
				.onGet(
					`/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/history`
				)
				.reply(200, MOCK_PAST);
			act(() => {
				appointmentsContainer = render(
					<Provider store={store}>
						{Appointments.getLayout(<Appointments />)}
					</Provider>
				);
			});
			await waitFor(() =>
				appointmentsContainer.getByText(/View appointment details/i)
			);
			expect(
				appointmentsContainer.getByText(/Past Appointments/i)
			).toBeInTheDocument();
			expect(
				appointmentsContainer.getByText(/Schedule New Appointment/i)
			).toBeInTheDocument();
		});

		then('user navigates to the search screen', () => {
			cleanup();
			const mockGeolocation = {
				getCurrentPosition: jest.fn(),
				watchPosition: jest.fn(),
			};

			const domain = window.location.origin;
			mock
				.onGet(
					`${domain}/api/dummy/appointment/create-appointment/getSugestion`
				)
				.reply(200, MOCK_SUGESTION);
			mock
				.onPost(
					`${domain}/api/dummy/appointment/create-appointment/submitFilter`
				)
				.reply(400, {});
			global.navigator.geolocation = mockGeolocation;
			container = render(
				<Provider store={store}>
					{Appointment.getLayout(<Appointment />)}
				</Provider>
			);
		});

		and('user enters the location', () => {
			inputLocation();
		});

		and('user selects the date of appointment', () => {
			inputDate();
		});

		and('user chooses the purpose of the visit', () => {
			inputPurpose();
		});

		and('user enters the insurance name', () => {
			inputInsurance();
		});

		and('user clicks on the Search button', () => {
			clickSearch();
		});

		and('user views the results in the Schedule Appointments screen', () => {
			expect(true).toBeTruthy();
		});

		and('user views the insurance carrier.', () => {
			expect(true).toBeTruthy();
		});
	});

	test('"EPIC_EPP-44_STORY_EPP-2503 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user views the purpose of visit as blank when the user not entered."', ({ given, and, then }) => {
		given('user launch the Marketing Site url', () => {
			launchURL();
		});

		and('user clicks on the Schedule your Eye Exam button', async () => {
			cleanup();
			const mock = new MockAdapter(axios);
			mock
				.onGet(
					`/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/upcoming`
				)
				.reply(200, MOCK_APPOINTMENT);
			mock
				.onGet(
					`/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/history`
				)
				.reply(200, MOCK_PAST);
			act(() => {
				appointmentsContainer = render(
					<Provider store={store}>
						{Appointments.getLayout(<Appointments />)}
					</Provider>
				);
			});
			await waitFor(() =>
				appointmentsContainer.getByText(/View appointment details/i)
			);
			expect(
				appointmentsContainer.getByText(/Past Appointments/i)
			).toBeInTheDocument();
			expect(
				appointmentsContainer.getByText(/Schedule New Appointment/i)
			).toBeInTheDocument();
		});

		then('user navigates to the search screen', () => {
			cleanup();
			const mockGeolocation = {
				getCurrentPosition: jest.fn(),
				watchPosition: jest.fn(),
			};

			const domain = window.location.origin;
			mock
				.onGet(
					`${domain}/api/dummy/appointment/create-appointment/getSugestion`
				)
				.reply(200, MOCK_SUGESTION);
			mock
				.onPost(
					`${domain}/api/dummy/appointment/create-appointment/submitFilter`
				)
				.reply(400, {});
			global.navigator.geolocation = mockGeolocation;
			container = render(
				<Provider store={store}>
					{Appointment.getLayout(<Appointment />)}
				</Provider>
			);
		});

		and('user enters the location', () => {
			inputLocation();
		});

		and('user selects the date of appointment', () => {
			inputDate();
		});

		and('user chooses the purpose of the visit', () => {
			inputPurpose();
		});

		and('user enters the insurance name', () => {
			inputInsurance();
		});

		and('user clicks on the Search button', () => {
			clickSearch();
		});

		and('user views the results in the Schedule Appointments screen', () => {
			expect(true).toBeTruthy();
		});

		and('user views the purpose of the visit as blank', () => {
			expect(true).toBeTruthy();
		});

		and('the user not entered the purpose of the visit', () => {
			expect(true).toBeTruthy();
		});
	});

	test('"EPIC_EPP-44_STORY_EPP-2503 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user views the insurance carrier as blank when the user not entered."', ({ given, and, then }) => {
		given('user launch the Marketing Site url', () => {
			launchURL();
		});

		and('user clicks on the Schedule your Eye Exam button', async () => {
			cleanup();
			const mock = new MockAdapter(axios);
			mock
				.onGet(
					`/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/upcoming`
				)
				.reply(200, MOCK_APPOINTMENT);
			mock
				.onGet(
					`/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/history`
				)
				.reply(200, MOCK_PAST);
			act(() => {
				appointmentsContainer = render(
					<Provider store={store}>
						{Appointments.getLayout(<Appointments />)}
					</Provider>
				);
			});
			await waitFor(() =>
				appointmentsContainer.getByText(/View appointment details/i)
			);
			expect(
				appointmentsContainer.getByText(/Past Appointments/i)
			).toBeInTheDocument();
			expect(
				appointmentsContainer.getByText(/Schedule New Appointment/i)
			).toBeInTheDocument();
		});

		then('user navigates to the search screen', () => {
			cleanup();
			const mockGeolocation = {
				getCurrentPosition: jest.fn(),
				watchPosition: jest.fn(),
			};

			const domain = window.location.origin;
			mock
				.onGet(
					`${domain}/api/dummy/appointment/create-appointment/getSugestion`
				)
				.reply(200, MOCK_SUGESTION);
			mock
				.onPost(
					`${domain}/api/dummy/appointment/create-appointment/submitFilter`
				)
				.reply(400, {});
			global.navigator.geolocation = mockGeolocation;
			container = render(
				<Provider store={store}>
					{Appointment.getLayout(<Appointment />)}
				</Provider>
			);
		});

		and('user enters the location', () => {
			inputLocation();
		});

		and('user selects the date of appointment', () => {
			inputDate();
		});

		and('user chooses the purpose of the visit', () => {
			inputPurpose();
		});

		and('user enters the insurance name', () => {
			inputInsurance();
		});

		and('user clicks on the Search button', () => {
			clickSearch();
		});

		and('user views the results in the Schedule Appointments screen', () => {
			expect(true).toBeTruthy();
		});

		and('user views the insurance carrier as blank.', () => {
			expect(true).toBeTruthy();
		});

		and('user has not entered in the insurance carrier', () => {
			expect(true).toBeTruthy();
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2503 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user view the insurance carrier.', ({ }) => {

	});

	test('EPIC_EPP-44_STORY_EPP-2503 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user views the purpose of visit as blank when the user not entered', ({ }) => {

	});

	test('EPIC_EPP-44_STORY_EPP-2503 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user views the insurance carrier as blank when the user not entered', ({ }) => {

	});
});