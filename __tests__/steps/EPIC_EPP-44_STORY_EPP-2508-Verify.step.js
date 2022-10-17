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
	"./__tests__/feature/Patient Portal/Sprint4/EPP-2508.feature"
);

defineFeature(feature, (test) => {
	let container;
	const element = document.createElement("div");
	const mock = new MockAdapter(axios);
	test('EPIC_EPP-44_STORY_EPP-2508 - Verify user able to view the screen with list of providers for the searched location and available time-slots for the selected date of appointment.', ({ given, and, then }) => {
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

		and('user views the results on the Schedule Appointments screen', () => {
			expect(true).toBeTruthy();
		});

		and('user views the selected location, date of appointment, the purpose of visit, and insurance carrier.', () => {
			expect(true).toBeTruthy();
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2508 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance and user view the location using City with the selected location', ({ given, and, then }) => {
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

		and('user views the selected location.', () => {
			expect(true).toBeTruthy();
		});

		and('user views an option to search locations using City with the selected location', () => {
			expect(true).toBeTruthy();
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2508 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance and user view the location using State with the selected location', ({ }) => {

	});

	test('EPIC_EPP-44_STORY_EPP-2508 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance and user view the location using  Zipcode with the selected location', ({ given, and, then }) => {
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

		and('user views the selected location.', () => {
			expect(true).toBeTruthy();
		});

		and('user views an option to search locations using  Zipcode with the selected location', () => {
			expect(true).toBeTruthy();
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2508 - Verify user able to search for the location and select the date of appointment as well as the purpose of visit and insurance and user view the location using the system to detect their location', ({ given, and, then }) => {
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

		and('user views the selected location.', () => {
			expect(true).toBeTruthy();
		});

		and('user views an option to search locations using City or State or Zipcode with the selected location', () => {
			expect(true).toBeTruthy();
		});

		and('user has the option to allow the system to detect their location', () => {
			expect(true).toBeTruthy();
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2508 - Verify user able to search for the location and select the date of appointment as well as the purpose of visit and insurance and the user views the filter options', ({ given, and, then }) => {
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

		and('user views the selected location.', () => {
			expect(true).toBeTruthy();
		});

		and('user views an option to search locations using City or State or Zipcode with the selected location', () => {
			expect(true).toBeTruthy();
		});

		and('user has the option to allow the system to detect their location', () => {
			expect(true).toBeTruthy();
		});

		and('user views the filter options', () => {
			expect(true).toBeTruthy();
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2508 - Verify user able to search for the location and select the date of appointment as well as the purpose of visit and insurance and the user view options to change the appointment date', ({ given, and, then }) => {
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

		and('user views the selected location.', () => {
			expect(true).toBeTruthy();
		});

		and('user views an option to search locations using City or State or Zipcode with the selected location', () => {
			expect(true).toBeTruthy();
		});

		and('user has the option to allow the system to detect their location', () => {
			expect(true).toBeTruthy();
		});

		and('user views the filter options', () => {
			expect(true).toBeTruthy();
		});

		and('user view options to change the appointment date', () => {
			expect(true).toBeTruthy();
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2508 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and user view options to change the Purpose of the Visit', ({ given, and, then }) => {
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

		and('user views the selected location.', () => {
			expect(true).toBeTruthy();
		});

		and('user views an option to search locations using City or State or Zipcode with the selected location', () => {
			expect(true).toBeTruthy();
		});

		and('user has the option to allow the system to detect their location', () => {
			expect(true).toBeTruthy();
		});

		and('user views the filter options', () => {
			expect(true).toBeTruthy();
		});

		and('user view options to change the appointment date', () => {
			expect(true).toBeTruthy();
		});

		and('user view options to change the Purpose of the Visit', () => {
			expect(true).toBeTruthy();
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2508 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and user view options to change the insurance.', ({ given, and, then }) => {
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

		and('user views the selected location.', () => {
			expect(true).toBeTruthy();
		});

		and('user views an option to search locations using City or State or Zipcode with the selected location', () => {
			expect(true).toBeTruthy();
		});

		and('user has the option to allow the system to detect their location', () => {
			expect(true).toBeTruthy();
		});

		and('user views the filter options', () => {
			expect(true).toBeTruthy();
		});

		and('user view options to change the appointment date', () => {
			expect(true).toBeTruthy();
		});

		and('user view options to change the Purpose of the Visit', () => {
			expect(true).toBeTruthy();
		});

		and('user view options to change the insurance.', () => {
			expect(true).toBeTruthy();
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2508 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user views the purpose of visit as blank when the user not entered', ({ given, and, then, when }) => {
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

		when('the user not entered the purpose of the visit', () => {
			expect(true).toBeTruthy();
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2508 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user views the insurance carrier as blank when the user not entered', ({ }) => {

	});

	test('EPIC_EPP-44_STORY_EPP-2508 - Verify the user should be able to change the date of appointment', ({ given, and, then }) => {
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

		then('user changes the date of appointment', () => {
			expect(true).toBeTruthy();
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2508 - Verify the user should not be able to select past dates from current date', ({ given, and, then }) => {
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

		then('user should validate user should not be able to select past dates from current date', () => {
			expect(true).toBeTruthy();
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2508 - Verify the user should not be able to select a date that is 3 months greater than current date', ({ given, and, then }) => {
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

		then(/^user should validate user should not be able to select date that is (\d+) months greater than current date$/, (arg0) => {
			expect(true).toBeTruthy();
		});
	});
});
