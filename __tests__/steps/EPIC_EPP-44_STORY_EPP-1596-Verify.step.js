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
	"./__tests__/feature/Patient Portal/Sprint4/EPP-1596.feature"
);

const MOCK_SUGGESTION_DATA = {
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

const provideFilters = () => {
	inputLocation();
	inputDate();
	inputPurpose();
	inputInsurance();
	clickSearch();
};

const inputLocation = async () => {
	const locationInput = await waitFor(() =>
		container.getByLabelText("City, state, or zip code")
	);
	act(() => {
		fireEvent.change(locationInput, { target: { value: "Texas" } });
	});
};

const inputDate = async () => {
	const dateInput = await waitFor(() => container.getByLabelText("Date"));
	act(() => {
		fireEvent.change(dateInput, { target: { value: "22-09-2022" } });
	});
};

const inputPurpose = async () => {
	const purposeInput = await waitFor(() =>
		container.getByTestId("select-purposes-of-visit")
	);
	act(() => {
		fireEvent.change(purposeInput, { target: { value: "Eye Exam" } });
	});
};

const inputInsurance = async () => {
	const insuranceInput = await waitFor(() =>
		container.getByLabelText("Insurance Carrier")
	);
	act(() => {
		fireEvent.change(insuranceInput, { target: { value: "Aetna" } });
	});
};

const clickSearch = async () => {
	const searchBtn = await waitFor(() =>
		container.getByTestId(APPOINTMENT_TEST_ID.searchbtn)
	);
	fireEvent.click(searchBtn);
};

const defaultValidation = () => {
	expect(true).toBeTruthy();
};

defineFeature(feature, (test) => {
	let container
	test('EPIC_EPP-44_STORY_EPP-1596-To verify whether the user is allowed to change the Date and Time in Appointment Review screen.', ({ when, and, then }) => {
		when('user clicks on the Schedule Appointment button', () => {

		});

		and('user navigates to the schedule appointment screen', () => {
			const mock = new MockAdapter(axios);
			const mockGeolocation = {
				getCurrentPosition: jest.fn(),
				watchPosition: jest.fn()
			};

			const domain = window.location.origin;
			mock.onGet(`${domain}/api/dummy/appointment/create-appointment/getSugestion`).reply(200, MOCK_SUGGESTION_DATA);
			mock.onPost(`${domain}/api/dummy/appointment/create-appointment/submitFilter`).reply(400, {});
			global.navigator.geolocation = mockGeolocation;
			container = render(
				<Provider store={store}>
					{Appointment.getLayout(<Appointment />)}
				</Provider>
			);
		});

		and('user should select the location, Date of Appointment, Purpose of visit, Insurance carrier.', () => {
			provideFilters();
		});

		and('click on Search button', () => {
			clickSearch();
		});

		and('user should lands on Schedule Appointment Review screen with selected location, Date and Time, Purpose of visit andInsurance carrier data', () => {

		});

		and('try to update the Date and Time if already provided', () => {

		});

		then('user should allow to update the Date and Time.', () => {

		});
	});

	test('EPIC_EPP-44_STORY_EPP-1596-Verify whether the user is able to review the Appointment details after updating the Date and Time.', ({ given, when, and, then }) => {
		given('user launch the Patient portal URL', () => {

		});

		when('user clicks on the Schedule Appointment button', () => {

		});

		and('user navigates to the schedule appointment screen', () => {
			const mock = new MockAdapter(axios);
			const mockGeolocation = {
				getCurrentPosition: jest.fn(),
				watchPosition: jest.fn()
			};

			const domain = window.location.origin;
			mock.onGet(`${domain}/api/dummy/appointment/create-appointment/getSugestion`).reply(200, MOCK_SUGGESTION_DATA);
			mock.onPost(`${domain}/api/dummy/appointment/create-appointment/submitFilter`).reply(400, {});
			global.navigator.geolocation = mockGeolocation;
			container = render(
				<Provider store={store}>
					{Appointment.getLayout(<Appointment />)}
				</Provider>
			);
		});

		and('user should select the location, Date of Appointment, Purpose of visit, Insurance carrier.', () => {
			provideFilters();
		});

		and('click on Search button', () => {
			clickSearch();
		});

		and('user should lands on Schedule Appointment Review screen with selected location, Date and Time, Purpose of visit and Insurance carrier data', () => {
		});

		and('try to update the Date and Time if already provided', () => {

		});

		then('it should allow to review once again the changed Date and Time in Appointment review screen.', () => {

		});
	});
})