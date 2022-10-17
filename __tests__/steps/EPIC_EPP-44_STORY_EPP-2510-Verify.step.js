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
	"./__tests__/feature/Patient Portal/Sprint4/EPP-2510.feature"
);

defineFeature(feature, (test) => {
	let container;
	const { APPOINTMENT_TEST_ID, SEARCH_PROVIDER_TEST_ID } = constants.TEST_ID
	const mock = new MockAdapter(axios);
	test('EPIC_EPP-44_STORY_EPP-2510-Verify whether the Time slot is available in the Schedule Appointment view screen', ({ given, when, and, then }) => {
		given('user launch the Marketing Site url', () => {
			expect(true).toBeTruthy();
		});

		when('user clicks on the Schedule your Eye Exam button', () => {
			expect(true).toBeTruthy();
		});

		and('user navigates to the schedule appointment screen', () => {
			expect(true).toBeTruthy();
		});

		and('user should select the location', () => {
			expect(true).toBeTruthy();
		});

		and('user should select the Date of Appointment', () => {
			expect(true).toBeTruthy();
		});

		and('user should select the Purpose of visit', () => {
			expect(true).toBeTruthy();
		});

		and('user should select the Insurance carrier.', () => {
			expect(true).toBeTruthy();
		});

		and('click on Search button', () => {
			expect(true).toBeTruthy();
		});

		and('user should lands on Schedule Appointment view screen with selected location, date, Purpose of visit and insurance carrier data.', () => {
			expect(true).toBeTruthy();
		});

		then('user should see the time slots of each doctor.', () => {
			expect(true).toBeTruthy();
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2510-Verify whether the user is able to select any time slot.', ({ given, when, and, then }) => {
		given('user launch the Marketing Site url', () => {
			expect(true).toBeTruthy();
		});

		when('user clicks on the Schedule your Eye Exam button', () => {
			expect(true).toBeTruthy();
		});

		and('user navigates to the schedule appointment screen', () => {
			expect(true).toBeTruthy();
		});

		and('user should select the location', () => {
			expect(true).toBeTruthy();
		});

		and('user should select the Date of Appointment', () => {
			expect(true).toBeTruthy();
		});

		and('user should select the Purpose of visit', () => {
			expect(true).toBeTruthy();
		});

		and('user should select the Insurance carrier.', () => {
			expect(true).toBeTruthy();
		});

		and('click on Search button', () => {
			expect(true).toBeTruthy();
		});

		and('user should lands on Schedule Appointment view screen with selected location, date, Purpose of visit and insurance carrier data.', () => {
			expect(true).toBeTruthy();
		});

		and('user is able to select any available time slot with their desired Provider.', () => {
			expect(true).toBeTruthy();
		});

		then('user should see the Appointment details review page.', () => {
			expect(true).toBeTruthy();
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2510-Verify whether the user is navigated to appointment details review page after selecting the time slot.', ({ given, when, and, then }) => {
		given('user launch the Marketing Site url', () => {
			expect(true).toBeTruthy();
		});

		when('user clicks on the Schedule your Eye Exam button', () => {
			expect(true).toBeTruthy();
		});

		and('user navigates to the schedule appointment screen', () => {
			expect(true).toBeTruthy();
		});

		and('user should select the location', () => {
			expect(true).toBeTruthy();
		});

		and('user should select the Date of Appointment', () => {
			expect(true).toBeTruthy();
		});

		and('user should select the Purpose of visit', () => {
			expect(true).toBeTruthy();
		});

		and('user should select the Insurance carrier.', () => {
			expect(true).toBeTruthy();
		});

		and('click on Search button', () => {
			expect(true).toBeTruthy();
		});

		and('user should lands on Schedule Appointment view screen with selected location, date, Purpose of visit and insurance carrier data.', () => {
			expect(true).toBeTruthy();
		});

		then('user is able to select any available time slot with their desired Provider.', () => {
			expect(true).toBeTruthy();
		});
	});
})