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
	"./__tests__/feature/Patient Portal/Sprint4/EPP-2512.feature"
);

defineFeature(feature, (test) => {
	let container;
	const { APPOINTMENT_TEST_ID, SEARCH_PROVIDER_TEST_ID } = constants.TEST_ID
	const mock = new MockAdapter(axios);
	test('EPIC_EPP-44_STORY_EPP-2512-Verify if user able to select a time slot of the provider', ({ }) => {

	});

	test('EPIC_EPP-44_STORY_EPP-2512-Verify if user able to navigate to review appointment details', ({ given, when, then, and }) => {
		given('user launch the Marketing Site url', () => {
			expect(true).toBeTruthy();
		});

		when('user clicks on the Schedule your Eye Exam button', () => {
			expect(true).toBeTruthy();
		});

		then('user lands on to the screen', () => {
			expect(true).toBeTruthy();
		});

		when('user click on pin location in Map view', () => {
			expect(true).toBeTruthy();
		});

		then('user should see time slot for provider', () => {
			expect(true).toBeTruthy();
		});

		and('user select provider with the time slot available', () => {
			expect(true).toBeTruthy();
		});

		then('user should lands onto review appointment page', () => {
			expect(true).toBeTruthy();
		});

		and('user should see Review Appointnment detail', () => {
			expect(true).toBeTruthy();
		});
	});
})