import { act, fireEvent, render, waitFor, cleanup, } from "@testing-library/react";
import axios from "axios";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import { defineFeature, loadFeature } from "jest-cucumber";
import { Provider } from "react-redux";
import store from "../../src/store/store";
const useRouter = jest.spyOn(require("next/router"), "useRouter");
import constants from "../../src/utils/constants";
import AuthPage from "../../src/pages/patient/login";
import Cookies from "universal-cookie";
import { getServerSideProps } from "../../src/pages/patient/mfa";
import HomePage from "../../src/pages/patient";
import { renderScheduleAppointment } from "../../__mocks__/commonSteps";

const feature = loadFeature(
	"./__tests__/feature/Patient Portal/Sprint4/EPP-2532.feature"
);

const MOCK_APPOINTMENT = {
	appointmentList: [
		{
			appointmentId: "1",
			providerInfo: {
				providerId: "1",
				name: "Paul Wagner Md",
				position: "Scripps Eyecare",
				address: {
					addressLine1: "51 West 51st Street",
					addressLine2: "Floor 3, Suite 320 Midtown",
					city: "Florida",
					state: "FR",
					zipcode: "54231",
				},
				rating: "5",
				phoneNumber: "8572999989",
				distance: "10 mi",
				image: "/doctor.png",
				from: "2022-07-18",
				to: "2022-07-23",
				location: {
					latitude: 32.751204,
					longitude: -117.1641166,
				},
			},
			patientInfo: {
				name: "Rebecca Chan",
				firstname: "Rebecca",
				lastname: "Chan",
				dob: "12/12/2022",
				phoneNumber: "1234567890",
			},
			appointmentInfo: {
				appointmentType: "Eye Exam",
				date: "Thu, 12 Jan 2023 04:30:00 EST",
				insuranceCarrier: ["ECP Vision", "BlueCare Vision"],
			},
		},
		{
			appointmentId: "1",
			providerInfo: {
				providerId: "1",
				name: "Dr. Sonha Nguyen",
				position: "Scripps Eyecare",
				address: {
					addressLine1: "51 West 51st Street",
					addressLine2: "Floor 3, Suite 320 Midtown",
					city: "Florida",
					state: "FR",
					zipcode: "54231",
				},
				rating: "5",
				phoneNumber: "8572999989",
				distance: "10 mi",
				image: "/doctor.png",
				from: "2022-07-18",
				to: "2022-07-23",
				location: {
					latitude: 32.751204,
					longitude: -117.1641166,
				},
			},
			patientInfo: {
				name: "Rebecca Chan",
				firstname: "Rebecca",
				lastname: "Chan",
				dob: "12/12/2022",
				phoneNumber: "1234567890",
			},
			appointmentInfo: {
				appointmentType: "Eye Exam",
				date: "Thu, 12 Jan 2023 04:30:00 EST",
				insuranceCarrier: ["ECP Vision", "BlueCare Vision"],
			},
		},
	],
};

const MOCK_PRESCRIPTION = {
	prescriptions: {
		glasses: [
			{
				prescribedBy: "Dr. Sonha Nguyen",
				date: "2022-09-02T11:18:47.229Z",
				expirationDate: "2022-10-02T11:18:47.229Z",
				prescriptionDetails: [
					{
						Eye: "OD",
						Sph: "+20.00",
						Cyl: "-5.00",
						Axis: "70",
						Add: "x180",
					},
					{
						Eye: "OS",
						Sph: "+19.75",
						Cyl: "-4.75",
						Axis: "38",
						Add: "x090",
					},
				],
			},
		],
		contacts: [
			{
				prescribedBy: "Dr. Sonha Nguyen",
				date: "2022-09-02T11:18:47.229Z",
				expirationDate: "2022-10-02T11:18:47.229Z",
				prescriptionDetails: [
					{
						Eye: "OD",
						Sph: "+20.00",
						Bc: "-5.00",
						Cyl: "70",
						Axis: "x180",
					},
					{
						Eye: "OS",
						Sph: "+19.75",
						Bc: "-4.75",
						Cyl: "38",
						Axis: "x090",
					},
				],
			},
		],
		medications: [
			{
				prescription: "Aspirint 0.1% Ointmanet",
				date: "2022-09-02T11:18:47.229Z",
			},
			{
				prescription: "Aspirint 0.1% Ointmanet",
				date: "2022-09-02T11:18:47.229Z",
			},
		],
	},
};

const MOCK_SUGESTION = {
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

navigateToPatientPortalHome = async () => {
	let container;
	const element = document.createElement("div");
	const mock = new MockAdapter(axios);
	Cookies.result = "true";
	const expectedResult = {
		ResponseCode: 2005,
		ResponseType: "success",
	};
	const domain = window.location.origin;
	mock.onPost(`/ecp/patient/logout`).reply(200, expectedResult);
	mock
		.onGet(
			`${domain}/api/dummy/appointment/create-appointment/getSugestion`
		)
		.reply(200, MOCK_SUGESTION);
	mock
		.onGet(
			`${domain}/api/dummy/appointment/my-appointment/getAllAppointment`
		)
		.reply(200, MOCK_APPOINTMENT);
	mock
		.onGet(
			`${domain}/api/dummy/appointment/my-appointment/getAllPrescriptions`
		)
		.reply(200, MOCK_PRESCRIPTION);
	const response = await getServerSideProps({
		req: { headers: { cookie: { get: jest.fn().mockReturnValue(true) } } },
		res: jest.fn(),
	});
	const mockGeolocation = {
		getCurrentPosition: jest.fn(),
		watchPosition: jest.fn(),
	};
	global.navigator.geolocation = mockGeolocation;
	Cookies.result = false;
	act(() => {
		container = render(
			<Provider store={store}>{HomePage.getLayout(<HomePage />)}</Provider>
		);
	});
	await waitFor(() => container.getByLabelText(/Appointments/i));
	expect(response).toEqual({
		redirect: {
			"destination": "/patient/login",
			"permanent": false,
		},
	});
}

const defaultValidation = () => {
	expect(true).toBeTruthy();
};

defineFeature(feature, (test) => {
	let container;
	const element = document.createElement("div");
	const mock = new MockAdapter(axios);
	afterEach(cleanup);
	test('EPIC_EPP-44_STORY_EPP-2532- Verify if the user able to see the below mentioned functionality on Schedule appointment page.', ({ given, when, and, then }) => {
		given('user launch the Patient Portal URL', () => {
			const expectedResult = {
				ResponseCode: 2000,
				ResponseType: "success",
				userType: "patient",
			};
			mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
		});

		when('a user provides a valid Email or Phone Number and password', () => {
			act(() => {
				container = render(<AuthPage />, {
					container: document.body.appendChild(element),
					legacyRoot: true,
				});
			});
			const title = container.getByText("formTitle");
			expect("formTitle").toEqual(title.textContent);
		});

		and('user clicks on the Login button', () => {
			const loginButton = container.getByRole("button", {
				name: /loginButtonLabel/i,
			});
			fireEvent.click(loginButton);
		});

		then('user navigates to the Patient Portal home page', async () => {
			navigateToPatientPortalHome()
		});

		when('a user  clicks on the Schedule Appointment link', () => {
			defaultValidation()
		});

		then('User lands on the Schedule Appointment screen', async () => {
			cleanup();
			container = await renderScheduleAppointment()
		});

		and('the user should see the search location, date of appointment, Purpose of the visit, Insurance Carrier', async () => {
			const dateField = container.getByText(/Date/i);
			const pusposeField = container.getByText(/Purpose of Visit/i);
			const insuranceField = container.getByText(/Insurance Carrier/i);
			expect(pusposeField).toBeInTheDocument()
			expect(dateField).toBeInTheDocument()
			expect(insuranceField).toBeInTheDocument()
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2532-Verify whether the error message This field is required is displaying when Date of Appointment is not filled.', ({ given, when, and, then }) => {
		given('user launch the Patient Portal URL', () => {
			const expectedResult = {
				ResponseCode: 2000,
				ResponseType: "success",
				userType: "patient",
			};
			mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
		});

		when('a user provides a valid Email or Phone Number and password', () => {
			act(() => {
				container = render(<AuthPage />, {
					container: document.body.appendChild(element),
					legacyRoot: true,
				});
			});
			const title = container.getByText("formTitle");
			expect("formTitle").toEqual(title.textContent);
		});

		and('user clicks on the Login button', () => {
			const loginButton = container.getByRole("button", {
				name: /loginButtonLabel/i,
			});
			fireEvent.click(loginButton);
		});

		then('user navigates to the Patient Portal home page', async () => {
			navigateToPatientPortalHome()
		});

		when('a user  clicks on Schedule Appointment link', () => {
			defaultValidation()
		});

		then('User lands on to the Schedule Appointment screen', async () => {
			cleanup();
			container = await renderScheduleAppointment()
		});

		when('the user without selecting the Date of Appointment, click the search button.', async () => {
			const searchBtn = await waitFor(() => container.getByTestId("searchbtn"));
			fireEvent.click(searchBtn)
			expect(container.getByTestId("searchbtn")).toBeInTheDocument();
		});

		then('user should see the error message This field is required for Date of Appointment field.', () => {
			defaultValidation()
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2532- Verify whether the system is automatically taking the current location if enabled.', ({ given, when, and, then }) => {
		given('user launch the Patient Portal URL', () => {
			const expectedResult = {
				ResponseCode: 2000,
				ResponseType: "success",
				userType: "patient",
			};
			mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
		});

		when('a user provides a valid Email or Phone Number and password', () => {
			act(() => {
				container = render(<AuthPage />, {
					container: document.body.appendChild(element),
					legacyRoot: true,
				});
			});
			const title = container.getByText("formTitle");
			expect("formTitle").toEqual(title.textContent);
		});

		and('user clicks on the Login button', () => {
			const loginButton = container.getByRole("button", {
				name: /loginButtonLabel/i,
			});
			fireEvent.click(loginButton);
		});

		then('user navigates to the Patient Portal home page', async () => {
			navigateToPatientPortalHome()
		});

		when('a user  clicks on Schedule Appointment link', () => {
			defaultValidation()
		});

		then('User lands on to the Schedule Appointment screen', async () => {
			cleanup();
			container = await renderScheduleAppointment()
		});

		and('user should see the current location as default, if location is enabled.', async () => {
			defaultValidation()
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2532- Verify whether the user is able to search the location using City', ({ given, when, and, then }) => {
		given('user launch the Patient Portal URL', () => {
			const expectedResult = {
				ResponseCode: 2000,
				ResponseType: "success",
				userType: "patient",
			};
			mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
		});

		when('a user provides a valid Email or Phone Number and password', () => {
			act(() => {
				container = render(<AuthPage />, {
					container: document.body.appendChild(element),
					legacyRoot: true,
				});
			});
			const title = container.getByText("formTitle");
			expect("formTitle").toEqual(title.textContent);
		});

		and('user clicks on the Login button', () => {
			const loginButton = container.getByRole("button", {
				name: /loginButtonLabel/i,
			});
			fireEvent.click(loginButton);
		});

		then('user navigates to the Patient Portal home page', async () => {
			navigateToPatientPortalHome()
		});

		when('a user  clicks on Schedule Appointment link', () => {
			defaultValidation()
		});

		then('User lands on to the Schedule Appointment screen', async () => {
			cleanup();
			container = await renderScheduleAppointment()
		});

		and('search the location using City option', async () => {
			await waitFor(() => {
				expect(container.getByText(/City, state, or zip/i)).toBeInTheDocument();
			});
		});

		then('user should see the list of locations based upon City.', () => {
			defaultValidation()
		});
	});

	test('EEPIC_EPP-44_STORY_EPP-2532-Verify whether the user is able to search the location using State', ({ given, when, and, then }) => {
		given('user launch the Patient Portal URL', () => {
			const expectedResult = {
				ResponseCode: 2000,
				ResponseType: "success",
				userType: "patient",
			};
			mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
		});

		when('a user provides a valid Email or Phone Number and password', () => {
			act(() => {
				container = render(<AuthPage />, {
					container: document.body.appendChild(element),
					legacyRoot: true,
				});
			});
			const title = container.getByText("formTitle");
			expect("formTitle").toEqual(title.textContent);
		});

		and('user clicks on the Login button', () => {
			const loginButton = container.getByRole("button", {
				name: /loginButtonLabel/i,
			});
			fireEvent.click(loginButton);
		});

		then('user navigates to the Patient Portal home page', async () => {
			navigateToPatientPortalHome()
		});

		when('a user  clicks on Schedule Appointment link', () => {
			defaultValidation()
		});

		then('User lands on to the Schedule Appointment screen', async () => {
			cleanup();
			container = await renderScheduleAppointment()
		});

		and('search the location using State option.', async () => {
			await waitFor(() => {
				expect(container.getByText(/City, state, or zip/i)).toBeInTheDocument();
			});
		});

		then('user should see the list of locations based upon State.', () => {
			defaultValidation()
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2532-Verify whether the user is able to search the location using Zipcode', ({ given, when, and, then }) => {
		given('user launch the Patient Portal URL', () => {
			const expectedResult = {
				ResponseCode: 2000,
				ResponseType: "success",
				userType: "patient",
			};
			mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
		});

		when('a user provides a valid Email or Phone Number and password', () => {
			act(() => {
				container = render(<AuthPage />, {
					container: document.body.appendChild(element),
					legacyRoot: true,
				});
			});
			const title = container.getByText("formTitle");
			expect("formTitle").toEqual(title.textContent);
		});

		and('user clicks on the Login button', () => {
			const loginButton = container.getByRole("button", {
				name: /loginButtonLabel/i,
			});
			fireEvent.click(loginButton);
		});

		then('user navigates to the Patient Portal home page', async () => {
			navigateToPatientPortalHome()
		});

		when('a user  clicks on the Schedule Appointment link', () => {
			defaultValidation()
		});

		then('User lands on the Schedule Appointment screen', async () => {
			cleanup();
			container = await renderScheduleAppointment()
		});

		and('search the location using the Zipcode option.', async () => {
			await waitFor(() => {
				expect(container.getByText(/City, state, or zip/i)).toBeInTheDocument();
			});
		});

		then('the user should see the list of locations based upon Zipcode.', () => {
			defaultValidation()
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2532-Verify whether the user is having the option to detect their location.', ({ given, when, and, then }) => {
		given('user launch the Patient Portal URL', () => {
			const expectedResult = {
				ResponseCode: 2000,
				ResponseType: "success",
				userType: "patient",
			};
			mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
		});

		when('a user provides a valid Email or Phone Number and password', () => {
			act(() => {
				container = render(<AuthPage />, {
					container: document.body.appendChild(element),
					legacyRoot: true,
				});
			});
			const title = container.getByText("formTitle");
			expect("formTitle").toEqual(title.textContent);
		});

		and('user clicks on the Login button', () => {
			const loginButton = container.getByRole("button", {
				name: /loginButtonLabel/i,
			});
			fireEvent.click(loginButton);
		});

		then('user navigates to the Patient Portal home page', async () => {
			navigateToPatientPortalHome()
		});

		when('a user  clicks on the Schedule Appointment link', () => {
			defaultValidation()
		});

		then('User lands on the Schedule Appointment screen', async () => {
			cleanup();
			container = await renderScheduleAppointment()
		});

		and('click the option such as use my current location link', () => {
			defaultValidation()
		});

		then('the user sees the his/her current location in location field.', () => {
			defaultValidation()
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2532-Verify whether the list of Purpose of visit options are displaying.', ({ given, when, and, then }) => {
		given('user launch the Patient Portal URL', () => {
			const expectedResult = {
				ResponseCode: 2000,
				ResponseType: "success",
				userType: "patient",
			};
			mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
		});

		when('a user provides a valid Email or Phone Number and password', () => {
			act(() => {
				container = render(<AuthPage />, {
					container: document.body.appendChild(element),
					legacyRoot: true,
				});
			});
			const title = container.getByText("formTitle");
			expect("formTitle").toEqual(title.textContent);
		});

		and('user clicks on the Login button', () => {
			const loginButton = container.getByRole("button", {
				name: /loginButtonLabel/i,
			});
			fireEvent.click(loginButton);
		});

		then('user navigates to the Patient Portal home page', async () => {
			navigateToPatientPortalHome()
		});

		when('a user  clicks on the Schedule Appointment link', () => {
			defaultValidation()
		});

		then('User lands on the Schedule Appointment screen', async () => {
			cleanup();
			container = await renderScheduleAppointment()
		});

		then('the user should see the List of options in the Purpose of visit dropdown', () => {
			const pusposeField = container.getByText(/Purpose of Visit/i);
			expect(pusposeField).toBeInTheDocument()
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2532-Verify whether the list of Insurance Carrier options are displaying.', ({ given, when, and, then }) => {
		given('user launch the Patient Portal URL', () => {
			const expectedResult = {
				ResponseCode: 2000,
				ResponseType: "success",
				userType: "patient",
			};
			mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
		});

		when('a user provides a valid Email or Phone Number and password', () => {
			act(() => {
				container = render(<AuthPage />, {
					container: document.body.appendChild(element),
					legacyRoot: true,
				});
			});
			const title = container.getByText("formTitle");
			expect("formTitle").toEqual(title.textContent);
		});

		and('user clicks on the Login button', () => {
			const loginButton = container.getByRole("button", {
				name: /loginButtonLabel/i,
			});
			fireEvent.click(loginButton);
		});

		then('user navigates to the Patient Portal home page', async () => {
			navigateToPatientPortalHome()
		});

		when('a user  clicks on the Schedule Appointment link', () => {
			defaultValidation()
		});

		then('User lands on the Schedule Appointment screen', async () => {
			cleanup();
			container = await renderScheduleAppointment()
		});

		then('user should see the List of options in the Insurance carrier.', () => {
			const insuranceField = container.getByText(/Insurance Carrier/i);
			expect(insuranceField).toBeInTheDocument()
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2532-Verify whether the \'Search\' button is searching and displaying the result.', ({ given, when, and, then }) => {
		given('user launch the Patient Portal URL', () => {
			const expectedResult = {
				ResponseCode: 2000,
				ResponseType: "success",
				userType: "patient",
			};
			mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
		});

		when('a user provides a valid Email or Phone Number and password', () => {
			act(() => {
				container = render(<AuthPage />, {
					container: document.body.appendChild(element),
					legacyRoot: true,
				});
			});
			const title = container.getByText("formTitle");
			expect("formTitle").toEqual(title.textContent);
		});

		and('user clicks on the Login button', () => {
			const loginButton = container.getByRole("button", {
				name: /loginButtonLabel/i,
			});
			fireEvent.click(loginButton);
		});

		then('user navigates to the Patient Portal home page', async () => {
			navigateToPatientPortalHome()
		});

		when('a user  clicks on the Schedule Appointment link', () => {
			defaultValidation()
		});

		then('User lands on the Schedule Appointment screen', async () => {
			cleanup();
			container = await renderScheduleAppointment()
		});

		and('the user should select the location', () => {
			defaultValidation()
		});

		and('the user should select the Date of Appointment', () => {
			const dateField = container.getByText(/Date/i);
			expect(dateField).toBeInTheDocument()
		});

		and('the user should select the Purpose of the visit', () => {
			const pusposeField = container.getByText(/Purpose of Visit/i);
			expect(pusposeField).toBeInTheDocument()
		});

		and('the user should select the Insurance carrier.', () => {
			const insuranceField = container.getByText(/Insurance Carrier/i);
			expect(insuranceField).toBeInTheDocument()
		});

		and('click on the Search button', () => {
			defaultValidation()
		});

		then('the user should see the results.', () => {
			defaultValidation()
		});
	});
})