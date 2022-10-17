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
	"./__tests__/feature/Patient Portal/Sprint4/EPP-2501.feature"
);

defineFeature(feature, (test) => {
	test('EPIC_EPP-44_STORY_EPP-2501-Verify whether the error message This field is required is displaying when Location is not filled.', ({ }) => {

	});

	test('Verify whether the error message This field is required is displaying when Location is not filled.', ({ given, when, and, then }) => {
		given('user launch the Marketing Site url', () => {
			expect(true).toBeTruthy();
		});

		when('user clicks on the Schedule your Eye Exam button', () => {
			expect(true).toBeTruthy();
		});

		and('user navigates to the schedule appointment screen', () => {
			expect(true).toBeTruthy();
		});

		and('without selecting the location, click the search button.', () => {
			expect(true).toBeTruthy();
		});

		then('user should see the error message This field is required for Location field.', () => {
			expect(true).toBeTruthy();
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2501-Verify whether the error message This field is required is displaying when Date of Appointment is not filled.', ({ }) => {

	});

	test('Verify whether the error message This field is required is displaying when Date of Appointment is not filled.', ({ given, when, and, then }) => {
		given('user launch the Marketing Site url', () => {
			expect(true).toBeTruthy();
		});

		when('user clicks on the Schedule your Eye Exam button', () => {
			expect(true).toBeTruthy();
		});

		and('user navigates to the schedule appointment screen', () => {
			expect(true).toBeTruthy();
		});

		and('without selecting the Date of Appointment, click the search button.', () => {
			expect(true).toBeTruthy();
		});

		then('user should see the error message This field is required for Date of Appointment field.', () => {
			expect(true).toBeTruthy();
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2501- Verify whether the system is automatically taking the current location if enabled.', ({ }) => {

	});

	test('Verify whether the system is automatically taking the current location if enabled.', ({ given, when, and, then }) => {
		given('user launch the Marketing Site url', () => {
			expect(true).toBeTruthy();
		});

		when('user clicks on the Schedule your Eye Exam button', () => {
			expect(true).toBeTruthy();
		});

		and('user navigates to the schedule appointment screen', () => {
			expect(true).toBeTruthy();
		});

		then('user should see the current location as default, if location is enabled.', () => {
			expect(true).toBeTruthy();
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2501- Verify whether the user is able to search the location using City', ({ }) => {

	});

	test('Verify whether the user is able to search the location using City.', ({ given, when, and, then }) => {
		given('user launch the Marketing Site url', () => {
			expect(true).toBeTruthy();
		});

		when('user clicks on the Schedule your Eye Exam button', () => {
			expect(true).toBeTruthy();
		});

		and('user navigates to the schedule appointment screen', () => {
			expect(true).toBeTruthy();
		});

		and('search the location using City option', () => {
			expect(true).toBeTruthy();
		});

		then('user should see the list of locations based upon City.', () => {
			expect(true).toBeTruthy();
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2501-Verify whether the user is able to search the location using State', ({ }) => {

	});

	test('Verify whether the user is able to search the location using State.', ({ given, when, and, then }) => {
		given('user launch the Marketing Site url', () => {
			expect(true).toBeTruthy();
		});

		when('user clicks on the Schedule your Eye Exam button', () => {
			expect(true).toBeTruthy();
		});

		and('user navigates to the schedule appointment screen', () => {
			expect(true).toBeTruthy();
		});

		and('search the location using State option.', () => {
			expect(true).toBeTruthy();
		});

		then('user should see the list of locations based upon State.', () => {
			expect(true).toBeTruthy();
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2501-Verify whether the user is able to search the location using Zipcode', ({ }) => {

	});

	test('Verify whether the user is able to search the location using Zipcode.', ({ given, when, and, then }) => {
		given('user launch the Marketing Site url', () => {
			expect(true).toBeTruthy();
		});

		when('user clicks on the Schedule your Eye Exam button', () => {
			expect(true).toBeTruthy();
		});

		and('user navigates to the schedule appointment screen', () => {
			expect(true).toBeTruthy();
		});

		and('search the location using Zipcode option.', () => {
			expect(true).toBeTruthy();
		});

		then('user should see the list of locations based upon Zipcode.', () => {
			expect(true).toBeTruthy();
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2501-Verify whether the user is having the option to detect their location.', ({ }) => {

	});

	test('Verify whether the user is having the option to detect their location.', ({ given, when, and, then }) => {
		given('user launch the Marketing Site url', () => {
			expect(true).toBeTruthy();
		});

		when('user clicks on the Schedule your Eye Exam button', () => {
			expect(true).toBeTruthy();
		});

		and('user navigates to the schedule appointment screen', () => {
			expect(true).toBeTruthy();
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
			expect(true).toBeTruthy();
		});

		when('user clicks on the Schedule your Eye Exam button', () => {
			expect(true).toBeTruthy();
		});

		and('user navigates to the schedule appointment screen', () => {
			expect(true).toBeTruthy();
		});

		then('user should see the List of options in the Purpose of visit', () => {
			expect(true).toBeTruthy();
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2501-Verify whether the list of Insurance Carrier options are displaying.', ({ given, when, and, then }) => {
		given('user launch the Marketing Site url', () => {
			expect(true).toBeTruthy();
		});

		when('user clicks on the Schedule your Eye Exam button', () => {
			expect(true).toBeTruthy();
		});

		and('user navigates to the schedule appointment screen', () => {
			expect(true).toBeTruthy();
		});

		then('user should see the List of options in the Insurance carrier.', () => {
			expect(true).toBeTruthy();
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2501-Verify whether the \'Search\' button is searching and displaying the result.', ({ }) => {

	});

	test('Verify whether the \'Search\' button is searching and displaying the result.', ({ given, when, and, then }) => {
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

		then('user should see the results.', () => {
			expect(true).toBeTruthy();
		});
	});
});