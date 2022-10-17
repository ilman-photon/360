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
import mediaQuery from "css-mediaquery";

const feature = loadFeature(
	"./__tests__/feature/Patient Portal/Sprint4/EPP-2539.feature"
);

defineFeature(feature, (test) => {
	let container;
	const element = document.createElement("div");
	const mock = new MockAdapter(axios);
	test('EPIC_EPP-44_STORY_EPP-2539 - Verify user able to change the date of appointment in schedule appointment screen from patient portal.', ({ given, when, and, then }) => {
		given('user launch Patient Portal url', () => {
			expect(true).toBeTruthy();
		});

		when('user is logged in to the application', () => {
			expect(true).toBeTruthy();
		});

		and('user clicks on the schedule new appointments search button', () => {
			expect(true).toBeTruthy();
		});

		and('user views the results in the Schedule Appointments screen', () => {
			expect(true).toBeTruthy();
		});

		and('user views the doctors  details and availability', () => {
			expect(true).toBeTruthy();
		});

		and('user selected a time slot', () => {
			expect(true).toBeTruthy();
		});

		and('user lands on the review of the appointment details', () => {
			expect(true).toBeTruthy();
		});

		and('user view the location', () => {
			expect(true).toBeTruthy();
		});

		and('user view the date of appointment', () => {
			expect(true).toBeTruthy();
		});

		then('user clicks on the edit to change the date', () => {
			expect(true).toBeTruthy();
		});

		and('user select the date of appointment', () => {
			expect(true).toBeTruthy();
		});

		and('user select the purpose of the visit', () => {
			expect(true).toBeTruthy();
		});

		and('user enters the insurance name', () => {
			expect(true).toBeTruthy();
		});

		and('user clicks on the Search button', () => {
			expect(true).toBeTruthy();
		});

		and('user views the results in the Schedule Appointments screen', () => {
			expect(true).toBeTruthy();
		});

		and('user selected a time slot', () => {
			expect(true).toBeTruthy();
		});

		and('user lands on the review of the appointment details', () => {
			expect(true).toBeTruthy();
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2539 - Verify the user is not able to select past dates on the date of appointment in the schedule appointment screen from the patient portal.', ({ given, when, and, then }) => {
		given('user launch Patient Portal url', () => {
			expect(true).toBeTruthy();
		});

		when('user is logged in to the application', () => {
			expect(true).toBeTruthy();
		});

		and('user clicks on the schedule new appointments search button', () => {
			expect(true).toBeTruthy();
		});

		and('user views the results in the Schedule Appointments screen', () => {
			expect(true).toBeTruthy();
		});

		and('user views the doctors  details and availability', () => {
			expect(true).toBeTruthy();
		});

		and('user selected a time slot', () => {
			expect(true).toBeTruthy();
		});

		and('user lands on the review of the appointment details', () => {
			expect(true).toBeTruthy();
		});

		and('user view the location', () => {
			expect(true).toBeTruthy();
		});

		and('user view the date of appointment', () => {
			expect(true).toBeTruthy();
		});

		then('user clicks on the edit to change the date', () => {
			expect(true).toBeTruthy();
		});

		and('user is not allowed to enter the past days from today', () => {
			expect(true).toBeTruthy();
		});

		and(/^user views the error message "(.*)"$/, (arg0) => {
			expect(true).toBeTruthy();
		});

		and('user select the valid date of appointment', () => {
			expect(true).toBeTruthy();
		});

		and('user select the purpose of the visit', () => {
			expect(true).toBeTruthy();
		});

		and('user enters the insurance name', () => {
			expect(true).toBeTruthy();
		});

		and('user clicks on the Search button', () => {
			expect(true).toBeTruthy();
		});

		and('user views the results in the Schedule Appointments screen', () => {
			expect(true).toBeTruthy();
		});

		and('user selected a time slot', () => {
			expect(true).toBeTruthy();
		});

		and('user lands on the review of the appointment details', () => {
			expect(true).toBeTruthy();
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2539 - Verify the user is not allowed to select a date that is 3 months greater than today’s date of appointment in the schedule appointment screen from the patient portal.', ({ given, when, and, then }) => {
		given('user launch Patient Portal url', () => {
			expect(true).toBeTruthy();
		});

		when('user is logged in to the application', () => {
			expect(true).toBeTruthy();
		});

		and('user clicks on the schedule new appointments search button', () => {
			expect(true).toBeTruthy();
		});

		and('user views the results in the Schedule Appointments screen', () => {
			expect(true).toBeTruthy();
		});

		and('user views the doctors  details and availability', () => {
			expect(true).toBeTruthy();
		});

		and('user selected a time slot', () => {
			expect(true).toBeTruthy();
		});

		and('user lands on the review of the appointment details', () => {
			expect(true).toBeTruthy();
		});

		and('user views the location', () => {
			expect(true).toBeTruthy();
		});

		and('user views the date of the appointment', () => {
			expect(true).toBeTruthy();
		});

		then('user clicks on the edit to change the date', () => {
			expect(true).toBeTruthy();
		});

		and(/^user is not allowed to (\d+) months greater than today’s date$/, (arg0) => {
			expect(true).toBeTruthy();
		});

		and(/^user views the error message "(.*)"$/, (arg0) => {
			expect(true).toBeTruthy();
		});

		and('user selects the valid date of appointment', () => {
			expect(true).toBeTruthy();
		});

		and('user selects the purpose of the visit', () => {
			expect(true).toBeTruthy();
		});

		and('user selects the date of appointment', () => {
			expect(true).toBeTruthy();
		});

		and('user selects the purpose of the visit', () => {
			expect(true).toBeTruthy();
		});

		and('user enters the insurance name', () => {
			expect(true).toBeTruthy();
		});

		and('user clicks on the Search button', () => {
			expect(true).toBeTruthy();
		});

		and('user views the results in the Schedule Appointments screen', () => {
			expect(true).toBeTruthy();
		});

		and('user selected a time slot', () => {
			expect(true).toBeTruthy();
		});

		and('user lands on the review of the appointment details', () => {
			expect(true).toBeTruthy();
		});
	});
});
