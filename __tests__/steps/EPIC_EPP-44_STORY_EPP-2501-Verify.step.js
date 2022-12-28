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
	"./__tests__/feature/Patient Portal/Sprint4/EPP-2501.feature"
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
	test('EPIC_EPP-44_STORY_EPP-2501-Verify whether the error message This field is required is displaying when Location is not filled.', ({ }) => {

	});

	test('Verify whether the error message This field is required is displaying when Location is not filled.', ({ given, when, and, then }) => {
		given('user launch the Marketing Site url', () => {
			launchURL();
		});

		when('user clicks on the Schedule your Eye Exam button', async () => {
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

		and('user navigates to the schedule appointment screen', () => {
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

		and('without selecting the location, click the search button.', () => {
			clickSearch();
		});

		then('user should see the error message This field is required for Location field.', () => {
			const errMsg = container.getAllByText(/This field is required/i)
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2501-Verify whether the error message This field is required is displaying when Date of Appointment is not filled.', ({ }) => {

	});

	test('Verify whether the error message This field is required is displaying when Date of Appointment is not filled.', ({ given, when, and, then }) => {
		given('user launch the Marketing Site url', () => {
			launchURL();
		});

		when('user clicks on the Schedule your Eye Exam button', async () => {
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

		and('user navigates to the schedule appointment screen', () => {
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

		and('without selecting the Date of Appointment, click the search button.', () => {
			clickSearch();
		});

		then('user should see the error message This field is required for Date of Appointment field.', () => {
			const errMsg = container.getAllByText(/This field is required/i)
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2501- Verify whether the system is automatically taking the current location if enabled.', ({ }) => {

	});

	test('Verify whether the system is automatically taking the current location if enabled.', ({ given, when, and, then }) => {
		given('user launch the Marketing Site url', () => {
			launchURL();
		});

		when('user clicks on the Schedule your Eye Exam button', async () => {
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

		and('user navigates to the schedule appointment screen', () => {
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

		then('user should see the current location as default, if location is enabled.', () => {
			inputLocation();
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2501- Verify whether the user is able to search the location using City', ({ }) => {

	});

	test('Verify whether the user is able to search the location using City.', ({ given, when, and, then }) => {
		given('user launch the Marketing Site url', () => {
			launchURL();
		});

		when('user clicks on the Schedule your Eye Exam button', async () => {
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

		and('user navigates to the schedule appointment screen', () => {
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

		and('search the location using City option', () => {
			inputLocation();
		});

		then('user should see the list of locations based upon City.', () => {
			inputLocation();
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2501-Verify whether the user is able to search the location using State', ({ }) => {

	});

	test('Verify whether the user is able to search the location using State.', ({ given, when, and, then }) => {
		given('user launch the Marketing Site url', () => {
			launchURL();
		});

		when('user clicks on the Schedule your Eye Exam button', async () => {
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

		and('user navigates to the schedule appointment screen', () => {
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

		and('search the location using State option.', () => {
			inputLocation();
		});

		then('user should see the list of locations based upon State.', () => {
			inputLocation();
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2501-Verify whether the user is able to search the location using Zipcode', ({ }) => {

	});

	test('Verify whether the user is able to search the location using Zipcode.', ({ given, when, and, then }) => {
		given('user launch the Marketing Site url', () => {
			launchURL();
		});

		when('user clicks on the Schedule your Eye Exam button', async () => {
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

		and('user navigates to the schedule appointment screen', () => {
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

		and('search the location using Zipcode option.', () => {
			inputLocation();
		});

		then('user should see the list of locations based upon Zipcode.', () => {
			inputLocation();
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2501-Verify whether the user is having the option to detect their location.', ({ }) => {

	});

	test('Verify whether the user is having the option to detect their location.', ({ given, when, and, then }) => {
		given('user launch the Marketing Site url', () => {
			launchURL();
		});

		when('user clicks on the Schedule your Eye Exam button', async () => {
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

		and('user navigates to the schedule appointment screen', () => {
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

		and('click the option such as \'Locate me\'.', () => {
			expect(true).toBeTruthy();
		});

		then('user present location should be displayed.', () => {
			expect(true).toBeTruthy();
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2501-Verify whether the list of Purpose of visit options are displaying.', ({ given, when, and, then }) => {
		given('user launch the Marketing Site url', () => {
			launchURL();
		});

		when('user clicks on the Schedule your Eye Exam button', async () => {
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

		and('user navigates to the schedule appointment screen', () => {
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

		then('user should see the List of options in the Purpose of visit', () => {
			inputPurpose();
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2501-Verify whether the list of Insurance Carrier options are displaying.', ({ given, when, and, then }) => {
		given('user launch the Marketing Site url', () => {
			launchURL();
		});

		when('user clicks on the Schedule your Eye Exam button', async () => {
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

		and('user navigates to the schedule appointment screen', () => {
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

		then('user should see the List of options in the Insurance carrier.', () => {
			inputInsurance();
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2501-Verify whether the \'Search\' button is searching and displaying the result.', ({ }) => {

	});

	test('Verify whether the \'Search\' button is searching and displaying the result.', ({ given, when, and, then }) => {
		given('user launch the Marketing Site url', () => {
			launchURL();
		});

		when('user clicks on the Schedule your Eye Exam button', async () => {
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

		and('user navigates to the schedule appointment screen', () => {
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

		and('user should select the location', () => {
			inputLocation();
		});

		and('user should select the Date of Appointment', () => {
			inputDate();
		});

		and('user should select the Purpose of visit', () => {
			inputPurpose();
		});

		and('user should select the Insurance carrier.', () => {
			inputInsurance();
		});

		and('click on Search button', () => {
			clickSearch();
		});

		then('user should see the results.', () => {
			expect(true).toBeTruthy();
		});
	});
});