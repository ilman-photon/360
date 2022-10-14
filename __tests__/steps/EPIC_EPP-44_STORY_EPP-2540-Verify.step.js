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
	"./__tests__/feature/Patient Portal/Sprint4/EPP-2540.feature"
);

defineFeature(feature, (test) => {
	let container;
	const element = document.createElement("div");
	const mock = new MockAdapter(axios);
	test('EPIC_EPP-44_STORY_EPP-2540 - Verify user able to select/ update the purpose of visit in schedule appointment screen from patient portal.', ({ given, when, and }) => {
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

		and('user views the Location section', () => {
			expect(true).toBeTruthy();
		});

		and('user views the selected location.', () => {
			expect(true).toBeTruthy();
		});

		and('user views the Appointment details section', () => {
			expect(true).toBeTruthy();
		});

		and('user clicks on the Edit link', () => {
			expect(true).toBeTruthy();
		});

		and('user views the appointment date and time', () => {
			expect(true).toBeTruthy();
		});

		and('user view options to change the Purpose of visit', () => {
			expect(true).toBeTruthy();
		});

		and('user selects the option to change the purpose of visit', () => {
			expect(true).toBeTruthy();
		});

		and('user changes the purpose of visit', () => {
			expect(true).toBeTruthy();
		});

		and('user clicks on the continue button', () => {
			expect(true).toBeTruthy();
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2540 - Verify user able to update the purpose of visit in schedule appointment screen from patient portal and already user selected then user can remove.', ({ given, when, and }) => {
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

		and('user views the Location section', () => {
			expect(true).toBeTruthy();
		});

		and('user views the selected location.', () => {
			expect(true).toBeTruthy();
		});

		and('user views the Appointment details section', () => {
			expect(true).toBeTruthy();
		});

		and('user clicks on the Edit link', () => {
			expect(true).toBeTruthy();
		});

		and('user views the appointment date and time', () => {
			expect(true).toBeTruthy();
		});

		and('user view options to change the Purpose of visit', () => {
			expect(true).toBeTruthy();
		});

		and('user selects the option to change the purpose of visit', () => {
			expect(true).toBeTruthy();
		});

		and('user remove the purpose of visit', () => {
			expect(true).toBeTruthy();
		});

		and('user clicks on the continue button', () => {
			expect(true).toBeTruthy();
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2540 - Verify user able to update the purpose of visit in schedule appointment screen from patient portal and already user selected then user can edit.', ({ given, when, and }) => {
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

		and('user views the Location section', () => {
			expect(true).toBeTruthy();
		});

		and('user views the selected location.', () => {
			expect(true).toBeTruthy();
		});

		and('user views the Appointment details section', () => {
			expect(true).toBeTruthy();
		});

		and('user clicks on the Edit link', () => {
			expect(true).toBeTruthy();
		});

		and('user views the appointment date and time', () => {
			expect(true).toBeTruthy();
		});

		and('user view options to change the Purpose of visit', () => {
			expect(true).toBeTruthy();
		});

		and('user selects the option to change the purpose of visit', () => {
			expect(true).toBeTruthy();
		});

		and('user selects another option for purpose of visit', () => {
			expect(true).toBeTruthy();
		});

		and('user clicks on the continue button', () => {
			expect(true).toBeTruthy();
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2540 - Verify user not selected the purpose of visit in schedule appointment screen from patient portal and user add the purpose of visit', ({ given, when, and }) => {
		given('user launch Patient Portal url', () => {
			expect(true).toBeTruthy();
		});

		when('user is logged in to the application', () => {
			expect(true).toBeTruthy();
		});

		and('user clicks on the schedule new appointments search button  without selecting the purpose of visit', () => {
			expect(true).toBeTruthy();
		});

		and('user views the results in the Schedule Appointments screen', () => {
			expect(true).toBeTruthy();
		});

		and('user views the Location section', () => {
			expect(true).toBeTruthy();
		});

		and('user views the selected location.', () => {
			expect(true).toBeTruthy();
		});

		and('user views the Appointment details section', () => {
			expect(true).toBeTruthy();
		});

		and('user clicks on the Edit link', () => {
			expect(true).toBeTruthy();
		});

		and('user views the appointment date and time', () => {
			expect(true).toBeTruthy();
		});

		and('user view options to change the Purpose of visit', () => {
			expect(true).toBeTruthy();
		});

		and('user selects the option to change the purpose of visit', () => {
			expect(true).toBeTruthy();
		});

		and('user selects the purpose of visit', () => {
			expect(true).toBeTruthy();
		});

		and('user clicks on the continue button', () => {
			expect(true).toBeTruthy();
		});
	});
});
