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
	"./__tests__/feature/Patient Portal/Sprint4/EPP-2503.feature"
);

defineFeature(feature, (test) => {
	test('"EPIC_EPP-44_STORY_EPP-2503 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user view the insurance carrier."', ({ given, and, then }) => {
		given('user launch the Marketing Site url', () => {
			expect(true).toBeTruthy();
		});

		and('user clicks on the Schedule your Eye Exam button', () => {
			expect(true).toBeTruthy();
		});

		then('user navigates to the search screen', () => {
			expect(true).toBeTruthy();
		});

		and('user enters the location', () => {
			expect(true).toBeTruthy();
		});

		and('user selects the date of appointment', () => {
			expect(true).toBeTruthy();
		});

		and('user chooses the purpose of the visit', () => {
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

		and('user views the insurance carrier.', () => {
			expect(true).toBeTruthy();
		});
	});

	test('"EPIC_EPP-44_STORY_EPP-2503 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user views the purpose of visit as blank when the user not entered."', ({ given, and, then }) => {
		given('user launch the Marketing Site URL', () => {
			expect(true).toBeTruthy();
		});

		and('user clicks on the Schedule your Eye Exam button', () => {
			expect(true).toBeTruthy();
		});

		then('user navigates to the search screen', () => {
			expect(true).toBeTruthy();
		});

		and('user enters the location', () => {
			expect(true).toBeTruthy();
		});

		and('user selects the date of appointment', () => {
			expect(true).toBeTruthy();
		});

		and('user chooses the purpose of the visit', () => {
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

		and('user views the purpose of the visit as blank', () => {
			expect(true).toBeTruthy();
		});

		and('the user not entered the purpose of the visit', () => {
			expect(true).toBeTruthy();
		});
	});

	test('"EPIC_EPP-44_STORY_EPP-2503 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user views the insurance carrier as blank when the user not entered."', ({ given, and, then }) => {
		given('user launch the Marketing Site url', () => {
			expect(true).toBeTruthy();
		});

		and('user clicks on the Schedule your Eye Exam button', () => {
			expect(true).toBeTruthy();
		});

		then('user navigates to the search screen', () => {
			expect(true).toBeTruthy();
		});

		and('user enters the location', () => {
			expect(true).toBeTruthy();
		});

		and('user selects the date of appointment', () => {
			expect(true).toBeTruthy();
		});

		and('user chooses the purpose of the visit', () => {
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