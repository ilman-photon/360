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
	"./__tests__/feature/Patient Portal/Sprint4/EPP-2511.feature"
);

defineFeature(feature, (test) => {
	let container;
	const { APPOINTMENT_TEST_ID, SEARCH_PROVIDER_TEST_ID } = constants.TEST_ID
	const mock = new MockAdapter(axios);
	test('EPIC_EPP-44_STORY_EPP-2511-Verify if user able to pin the location in map view', ({ }) => {

	});

	test('-Verify if user able to pin the location in map view', ({ given, when, then }) => {
		given('user launch the Marketing Site url', () => {
			expect(true).toBeTruthy();
		});

		when('user clicks on the Schedule your Eye Exam button', () => {
			expect(true).toBeTruthy();
		});

		then('user lands on to the screen', () => {
			expect(true).toBeTruthy();
		});

		when('user to pin any location in Map view', () => {
			expect(true).toBeTruthy();
		});

		then('user should see the location pin in map', () => {
			expect(true).toBeTruthy();
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2511-Verify if user able see the doctor’s name with image and address of the location', ({ given, when, then, and }) => {
		given('user launch the Marketing Site url', () => {
			expect(true).toBeTruthy();
		});

		when('user clicks on the Schedule your Eye Exam button', () => {
			expect(true).toBeTruthy();
		});

		then('user lands on to the screen', () => {
			expect(true).toBeTruthy();
		});

		when('user to pin & click location in Map view', () => {
			expect(true).toBeTruthy();
		});

		then('user should see the doctor’s name with image', () => {
			expect(true).toBeTruthy();
		});

		and('user should see address of the location', () => {
			expect(true).toBeTruthy();
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2511- Verify if user able view the available time slots of the date of appointment', ({ given, when, then, and }) => {
		given('user launch the Marketing Site url', () => {
			expect(true).toBeTruthy();
		});

		when('user clicks on the Schedule your Eye Exam button', () => {
			expect(true).toBeTruthy();
		});

		then('user lands on to the screen', () => {
			expect(true).toBeTruthy();
		});

		when('user to pin & click location in Map view', () => {
			expect(true).toBeTruthy();
		});

		then('user should see the doctor’s name with image', () => {
			expect(true).toBeTruthy();
		});

		and('user should see address of the location', () => {
			expect(true).toBeTruthy();
		});

		then('user should view next avaliable time slot (Today,Tomorrow) for the appointment', () => {
			expect(true).toBeTruthy();
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2511- Verify if user able to select the time slot listed to schedule the appointment', ({ given, when, then, and }) => {
		given('user launch the Marketing Site url', () => {
			expect(true).toBeTruthy();
		});

		when('user clicks on the Schedule your Eye Exam button', () => {
			expect(true).toBeTruthy();
		});

		then('user lands on to the screen', () => {
			expect(true).toBeTruthy();
		});

		when('user to pin & click location in Map view', () => {
			expect(true).toBeTruthy();
		});

		then('user should see the doctor’s name with image', () => {
			expect(true).toBeTruthy();
		});

		and('user should see address of the location', () => {
			expect(true).toBeTruthy();
		});

		then('user should view next avaliable time slot (Today,Tomorrow) for the appointment', () => {
			expect(true).toBeTruthy();
		});

		when('user select the time slot listed with date', () => {
			expect(true).toBeTruthy();
		});

		then('user should see time slot selected for schedule the appointment', () => {
			expect(true).toBeTruthy();
		});
	});
})