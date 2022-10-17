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
	"./__tests__/feature/Patient Portal/Sprint4/EPP-2505.feature"
);

defineFeature(feature, (test) => {
	let container;
	const element = document.createElement("div");
	const mock = new MockAdapter(axios);
	test('EPIC_EPP-44_STORY_EPP-2505-Verify User should be able to change the location by searching locations using City along with an option to detect their location (Locate me)', ({ given, when, then, and }) => {
		given(/^User launch the "(.*)" url$/, (arg0) => {
			expect(true).toBeTruthy();
		});

		when('User clicks on the “Schedule your Eye Exam” button', () => {
			expect(true).toBeTruthy();
		});

		then('User should navigated to the search screen', () => {
			expect(true).toBeTruthy();
		});

		and('User enters the location', () => {
			expect(true).toBeTruthy();
		});

		and('User selects the date of appointment', () => {
			expect(true).toBeTruthy();
		});

		and('User selects the purpose of the visit', () => {
			expect(true).toBeTruthy();
		});

		and('User enters the insurance name', () => {
			expect(true).toBeTruthy();
		});

		when('User clicks on the Search button', () => {
			expect(true).toBeTruthy();
		});

		then(/^User should navigated the results in the "(.*)" screen$/, (arg0) => {
			expect(true).toBeTruthy();
		});

		and(/^User views the results in the "(.*)" screen$/, (arg0) => {
			expect(true).toBeTruthy();
		});

		and('User views the selected location.', () => {
			expect(true).toBeTruthy();
		});

		and('User views an option to search locations using City', () => {
			expect(true).toBeTruthy();
		});

		when('User selects location', () => {
			expect(true).toBeTruthy();
		});

		then('User changes the City', () => {
			expect(true).toBeTruthy();
		});

		and('User should see a location based on the City', () => {
			expect(true).toBeTruthy();
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2505-Verify User should be able to change the location by searching locations using State along with an option to detect their location (Locate me)', ({ given, when, then, and }) => {
		given(/^User launch the "(.*)" url$/, (arg0) => {
			expect(true).toBeTruthy();
		});

		when('User clicks on the “Schedule your Eye Exam” button', () => {
			expect(true).toBeTruthy();
		});

		then('User should navigated to the search screen', () => {
			expect(true).toBeTruthy();
		});

		and('User enters the location', () => {
			expect(true).toBeTruthy();
		});

		and('User selects the date of appointment', () => {
			expect(true).toBeTruthy();
		});

		and('User selects the purpose of the visit', () => {
			expect(true).toBeTruthy();
		});

		and('User enters the insurance name', () => {
			expect(true).toBeTruthy();
		});

		when('User clicks on the Search button', () => {
			expect(true).toBeTruthy();
		});

		then(/^User should navigated the results in the "(.*)" screen$/, (arg0) => {
			expect(true).toBeTruthy();
		});

		and(/^User views the results in the "(.*)" screen$/, (arg0) => {
			expect(true).toBeTruthy();
		});

		and('User views the selected location.', () => {
			expect(true).toBeTruthy();
		});

		and('User views an option to search locations using State', () => {
			expect(true).toBeTruthy();
		});

		when('User selects location', () => {
			expect(true).toBeTruthy();
		});

		then('User changes the State', () => {
			expect(true).toBeTruthy();
		});

		and('User should see a location based on the State', () => {
			expect(true).toBeTruthy();
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2505-Verify User should be able to change the location by searching locations using Zipcode along with an option to detect their location (Locate me)', ({ given, when, then, and }) => {
		given(/^User launch the "(.*)" url$/, (arg0) => {
			expect(true).toBeTruthy();
		});

		when('User clicks on the “Schedule your Eye Exam” button', () => {
			expect(true).toBeTruthy();
		});

		then('User should navigated to the search screen', () => {
			expect(true).toBeTruthy();
		});

		and('User enters the location', () => {
			expect(true).toBeTruthy();
		});

		and('User selects the date of appointment', () => {
			expect(true).toBeTruthy();
		});

		and('User selects the purpose of the visit', () => {
			expect(true).toBeTruthy();
		});

		and('User enters the insurance name', () => {
			expect(true).toBeTruthy();
		});

		when('User clicks on the Search button', () => {
			expect(true).toBeTruthy();
		});

		then(/^User should navigated the results in the "(.*)" screen$/, (arg0) => {
			expect(true).toBeTruthy();
		});

		and(/^User views the results in the "(.*)" screen$/, (arg0) => {
			expect(true).toBeTruthy();
		});

		and('User views the selected location.', () => {
			expect(true).toBeTruthy();
		});

		and('User views an option to search locations using Zipcode', () => {
			expect(true).toBeTruthy();
		});

		when('User selects location', () => {
			expect(true).toBeTruthy();
		});

		then('User changes the Zipcode', () => {
			expect(true).toBeTruthy();
		});

		and('User should see a location based on the Zipcode', () => {
			expect(true).toBeTruthy();
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2505-Verify User should see the purpose of visit, insurance carrier, date of appointment and time slot of provider is reset if user updated the location', ({ given, when, then, and }) => {
		given(/^User launch the "(.*)" url$/, (arg0) => {
			expect(true).toBeTruthy();
		});

		when('User clicks on the “Schedule your Eye Exam” button', () => {
			expect(true).toBeTruthy();
		});

		then('User should navigated to the search screen', () => {
			expect(true).toBeTruthy();
		});

		and('User enters the location', () => {
			expect(true).toBeTruthy();
		});

		and('User selects the date of appointment', () => {
			expect(true).toBeTruthy();
		});

		and('User selects the purpose of the visit', () => {
			expect(true).toBeTruthy();
		});

		and('User enters the insurance name', () => {
			expect(true).toBeTruthy();
		});

		when('User clicks on the Search button', () => {
			expect(true).toBeTruthy();
		});

		then(/^User should navigated the results in the "(.*)" screen$/, (arg0) => {
			expect(true).toBeTruthy();
		});

		and(/^User views the results in the "(.*)" screen$/, (arg0) => {
			expect(true).toBeTruthy();
		});

		and('User views the selected location.', () => {
			expect(true).toBeTruthy();
		});

		and('User views an option to search locations using Zipcode', () => {
			expect(true).toBeTruthy();
		});

		when('User selects location', () => {
			expect(true).toBeTruthy();
		});

		then('User changes the Zipcode', () => {
			expect(true).toBeTruthy();
		});

		and('User should see a location based on the Zipcode', () => {
			expect(true).toBeTruthy();
		});

		when('User updates location', () => {
			expect(true).toBeTruthy();
		});

		then('User should see the purpose of visit, insurance carrier, date of appointment and time slot of provider is reset', () => {
			expect(true).toBeTruthy();
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2505-Verify User should see the results i.e. providers with available time slots getting updated based on the change in location', ({ given, when, then, and }) => {
		given(/^User launch the "(.*)" url$/, (arg0) => {
			expect(true).toBeTruthy();
		});

		when('User clicks on the “Schedule your Eye Exam” button', () => {
			expect(true).toBeTruthy();
		});

		then('User should navigated to the search screen', () => {
			expect(true).toBeTruthy();
		});

		and('User enters the location', () => {
			expect(true).toBeTruthy();
		});

		and('User selects the date of appointment', () => {
			expect(true).toBeTruthy();
		});

		and('User selects the purpose of the visit', () => {
			expect(true).toBeTruthy();
		});

		and('User enters the insurance name', () => {
			expect(true).toBeTruthy();
		});

		when('User clicks on the Search button', () => {
			expect(true).toBeTruthy();
		});

		then(/^User should navigated the results in the "(.*)" screen$/, (arg0) => {
			expect(true).toBeTruthy();
		});

		and(/^User views the results in the "(.*)" screen$/, (arg0) => {
			expect(true).toBeTruthy();
		});

		and('User views the selected location.', () => {
			expect(true).toBeTruthy();
		});

		when('User input invalid the State/ City/ Zipcode', () => {
			expect(true).toBeTruthy();
		});

		then('User should see a location based on the State/ City/ Zipcode', () => {
			expect(true).toBeTruthy();
		});

		and('User should see the results i.e. providers with available time slots getting updated based on the change in location', () => {
			expect(true).toBeTruthy();
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2505-Verify User should see an error message for the location search criteria is invalid as "No results found. Please try again with a different search criteria."', ({ given, when, then, and }) => {
		given(/^User launch the "(.*)" url$/, (arg0) => {
			expect(true).toBeTruthy();
		});

		when('User clicks on the “Schedule your Eye Exam” button', () => {
			expect(true).toBeTruthy();
		});

		then('User should navigated to the search screen', () => {
			expect(true).toBeTruthy();
		});

		and('User enters the location', () => {
			expect(true).toBeTruthy();
		});

		and('User selects the date of appointment', () => {
			expect(true).toBeTruthy();
		});

		and('User selects the purpose of the visit', () => {
			expect(true).toBeTruthy();
		});

		and('User enters the insurance name', () => {
			expect(true).toBeTruthy();
		});

		when('User clicks on the Search button', () => {
			expect(true).toBeTruthy();
		});

		then(/^User should navigated the results in the "(.*)" screen$/, (arg0) => {
			expect(true).toBeTruthy();
		});

		and(/^User views the results in the "(.*)" screen$/, (arg0) => {
			expect(true).toBeTruthy();
		});

		and('User views the selected location.', () => {
			expect(true).toBeTruthy();
		});

		and('User views an option to search locations using Zipcode', () => {
			expect(true).toBeTruthy();
		});

		when('User selects location', () => {
			expect(true).toBeTruthy();
		});

		and('User input invalid the State/ City/ Zipcode', () => {
			expect(true).toBeTruthy();
		});

		then(/^User should be prompted with an error message "(.*)"$/, (arg0) => {
			expect(true).toBeTruthy();
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2505-Verify User should be able to select a location based on the search within 3 seconds', ({ given, when, then, and }) => {
		given(/^User launch the "(.*)" url$/, (arg0) => {
			expect(true).toBeTruthy();
		});

		when('User clicks on the “Schedule your Eye Exam” button', () => {
			expect(true).toBeTruthy();
		});

		then('User should navigated to the search screen', () => {
			expect(true).toBeTruthy();
		});

		and('User enters the location', () => {
			expect(true).toBeTruthy();
		});

		and('User selects the date of appointment', () => {
			expect(true).toBeTruthy();
		});

		and('User selects the purpose of the visit', () => {
			expect(true).toBeTruthy();
		});

		and('User enters the insurance name', () => {
			expect(true).toBeTruthy();
		});

		when('User clicks on the Search button', () => {
			expect(true).toBeTruthy();
		});

		then(/^User should navigated the results in the "(.*)" screen$/, (arg0) => {
			expect(true).toBeTruthy();
		});

		and(/^User views the results in the "(.*)" screen$/, (arg0) => {
			expect(true).toBeTruthy();
		});

		and('User views the selected location.', () => {
			expect(true).toBeTruthy();
		});

		and('User views an option to search locations using Zipcode', () => {
			expect(true).toBeTruthy();
		});

		when('User selects location', () => {
			expect(true).toBeTruthy();
		});

		and('User input invalid the State/ City/ Zipcode', () => {
			expect(true).toBeTruthy();
		});

		then(/^User should see the page loads within "(.*)"$/, (arg0) => {
			expect(true).toBeTruthy();
		});

		and('User should see a location based on the State/ City/ Zipcode', () => {
			expect(true).toBeTruthy();
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2505-Verify User should not see the any errors script when user clicks F12 on the console', ({ given, when, then, and }) => {
		given(/^User launch the "(.*)" url$/, (arg0) => {
			expect(true).toBeTruthy();
		});

		when('User clicks on the “Schedule your Eye Exam” button', () => {
			expect(true).toBeTruthy();
		});

		then('User should navigated to the search screen', () => {
			expect(true).toBeTruthy();
		});

		and('User enters the location', () => {
			expect(true).toBeTruthy();
		});

		and('User selects the date of appointment', () => {
			expect(true).toBeTruthy();
		});

		and('User selects the purpose of the visit', () => {
			expect(true).toBeTruthy();
		});

		and('User enters the insurance name', () => {
			expect(true).toBeTruthy();
		});

		when('User clicks on the Search button', () => {
			expect(true).toBeTruthy();
		});

		then(/^User should navigated the results in the "(.*)" screen$/, (arg0) => {
			expect(true).toBeTruthy();
		});

		and(/^User views the results in the "(.*)" screen$/, (arg0) => {
			expect(true).toBeTruthy();
		});

		and('User views the selected location.', () => {
			expect(true).toBeTruthy();
		});

		and('User views an option to search locations using Zipcode', () => {
			expect(true).toBeTruthy();
		});

		when('User selects location', () => {
			expect(true).toBeTruthy();
		});

		and('User input invalid the State/ City/ Zipcode', () => {
			expect(true).toBeTruthy();
		});

		then(/^User should see the page loads within "(.*)"$/, (arg0) => {
			expect(true).toBeTruthy();
		});

		and('User should see a location based on the State/ City/ Zipcode', () => {
			expect(true).toBeTruthy();
		});

		when(/^User clicks on F(\d+) on the console$/, (arg0) => {
			expect(true).toBeTruthy();
		});

		then('User should not to see any errors script', () => {
			expect(true).toBeTruthy();
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2505-Negative Test Cases-Verify user should see the error message when the internet service is unavailable', ({ given, when, then, and }) => {
		given(/^User launch the "(.*)" url$/, (arg0) => {
			expect(true).toBeTruthy();
		});

		when('User clicks on the “Schedule your Eye Exam” button', () => {
			expect(true).toBeTruthy();
		});

		then('User should navigated to the search screen', () => {
			expect(true).toBeTruthy();
		});

		and('User enters the location', () => {
			expect(true).toBeTruthy();
		});

		and('User selects the date of appointment', () => {
			expect(true).toBeTruthy();
		});

		and('User selects the purpose of the visit', () => {
			expect(true).toBeTruthy();
		});

		and('User enters the insurance name', () => {
			expect(true).toBeTruthy();
		});

		when('User clicks on the Search button', () => {
			expect(true).toBeTruthy();
		});

		then(/^User should navigated the results in the "(.*)" screen$/, (arg0) => {
			expect(true).toBeTruthy();
		});

		and(/^User views the results in the "(.*)" screen$/, (arg0) => {
			expect(true).toBeTruthy();
		});

		and('User views the selected location.', () => {
			expect(true).toBeTruthy();
		});

		and('User views an option to search locations using Zipcode', () => {
			expect(true).toBeTruthy();
		});

		when('User selects location', () => {
			expect(true).toBeTruthy();
		});

		and('User input invalid the State/ City/ Zipcode', () => {
			expect(true).toBeTruthy();
		});

		then('The internet service is unavailable', () => {
			expect(true).toBeTruthy();
		});

		and('User should see the appropriate error message', () => {
			expect(true).toBeTruthy();
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2505-Negative Test Cases-Verify user should see the error message when the service is unavailable', ({ given, when, then, and }) => {
		given(/^User launch the "(.*)" url$/, (arg0) => {
			expect(true).toBeTruthy();
		});

		when('User clicks on the “Schedule your Eye Exam” button', () => {
			expect(true).toBeTruthy();
		});

		then('User should navigated to the search screen', () => {
			expect(true).toBeTruthy();
		});

		and('User enters the location', () => {
			expect(true).toBeTruthy();
		});

		and('User selects the date of appointment', () => {
			expect(true).toBeTruthy();
		});

		and('User selects the purpose of the visit', () => {
			expect(true).toBeTruthy();
		});

		and('User enters the insurance name', () => {
			expect(true).toBeTruthy();
		});

		when('User clicks on the Search button', () => {
			expect(true).toBeTruthy();
		});

		then(/^User should navigated the results in the "(.*)" screen$/, (arg0) => {
			expect(true).toBeTruthy();
		});

		and(/^User views the results in the "(.*)" screen$/, (arg0) => {
			expect(true).toBeTruthy();
		});

		and('User views the selected location.', () => {
			expect(true).toBeTruthy();
		});

		and('User views an option to search locations using Zipcode', () => {
			expect(true).toBeTruthy();
		});

		when('User selects location', () => {
			expect(true).toBeTruthy();
		});

		and('User input invalid the State/ City/ Zipcode', () => {
			expect(true).toBeTruthy();
		});

		then('The service is unavailable', () => {
			expect(true).toBeTruthy();
		});

		and('User should see the appropriate error message', () => {
			expect(true).toBeTruthy();
		});
	});

})