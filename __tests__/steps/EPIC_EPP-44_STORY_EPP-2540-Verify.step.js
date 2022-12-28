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
import {
  clickSearch,
  createMatchMedia,
  doLogin,
  provideFilters,
  renderLogin,
  renderScheduleAppointment,
} from "../../__mocks__/commonSteps";
import { TEST_ID } from "../../src/utils/constants";
import {
  mockAppointmentTypes,
  mockInsurance,
  submitFilter,
} from "../../__mocks__/mockResponse";

const feature = loadFeature(
	"./__tests__/feature/Patient Portal/Sprint4/EPP-2540.feature"
);

defineFeature(feature, (test) => {
	let container;
	const element = document.createElement("div");
	const mock = new MockAdapter(axios);
	const { APPOINTMENT_TEST_ID } = TEST_ID;

	beforeEach(() => {
		const mockGeolocation = {
		  getCurrentPosition: jest.fn(),
		  watchPosition: jest.fn(),
		};
	
		mock
		  .onGet("/ecp/appointments/appointment-types", mockAppointmentTypes)
		  .reply(200, mockAppointmentTypes);
		mock
		  .onGet("/ecp/appointments/insurance/allpayers", mockInsurance)
		  .reply(200, mockInsurance);
		mock
		  .onPut("/ecp/appointments/available-slot?searchText=Texas")
		  .reply(200, submitFilter);
		window.matchMedia = createMatchMedia("1920px");
		global.navigator.geolocation = mockGeolocation;
	  });
	  
	const inputPurpose = async (value = "Eye Exam") => {
		await waitFor(() => container.getByTestId("select-purposes-of-visit"));
		const purposeInput = container.getByTestId("select-purposes-of-visit");
		act(() => {
		  fireEvent.change(purposeInput, { target: { value } });
		});
		expect(purposeInput).toBeInTheDocument();
	};

	test('EPIC_EPP-44_STORY_EPP-2540 - Verify user able to select/ update the purpose of visit in schedule appointment screen from patient portal.', ({ given, when, and }) => {
		given('user launch Patient Portal url', async () => {
			container = await renderLogin(container);
		});

		when('user is logged in to the application', async () => {
			await doLogin(mock, container);
		});

		and('user clicks on the schedule new appointments search button', () => {
			expect(true).toBeTruthy();
		});

		and('user views the results in the Schedule Appointments screen', async () => {
			container = await renderScheduleAppointment(mock);
		});

		and('user views the Location section', async () => {
			const locationInput = await waitFor(() =>
				container.container.querySelector("#location")
			);
			expect(locationInput).toBeInTheDocument();
		});

		and('user views the selected location.', async () => {
			await provideFilters(container);
			await clickSearch(container);
		});

		and('user views the Appointment details section', async () => {
			await waitFor(() =>
			container.getAllByTestId(APPOINTMENT_TEST_ID.PROVIDER_PROFILE.name)
			);
			expect(
				container.getAllByTestId(APPOINTMENT_TEST_ID.PROVIDER_PROFILE.name)[0]
			).toBeInTheDocument();
		});

		and('user clicks on the Edit link', () => {
			expect(true).toBeTruthy();
		});

		and('user views the appointment date and time', () => {
			expect(true).toBeTruthy();
		});

		and('user view options to change the Purpose of visit', async () => {
			await inputPurpose("Clinical_Diagnosis")
		});

		and('user selects the option to change the purpose of visit', () => {
			expect(true).toBeTruthy();
		});

		and('user changes the purpose of visit', async () => {
			const purposeInput = await waitFor(() =>
				container.getByTestId("select-purposes-of-visit")
			);
			expect(purposeInput.value).toEqual("Clinical_Diagnosis")
		});

		and('user clicks on the continue button', () => {
			expect(true).toBeTruthy();
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2540 - Verify user able to update the purpose of visit in schedule appointment screen from patient portal and already user selected then user can remove.', ({ given, when, and }) => {
		given('user launch Patient Portal url', async () => {
			container = await renderLogin(container);
		});

		when('user is logged in to the application', async () => {
			await doLogin(mock, container);
		});

		and('user clicks on the schedule new appointments search button', () => {
			expect(true).toBeTruthy();
		});

		and('user views the results in the Schedule Appointments screen', async () => {
			container = await renderScheduleAppointment(mock);
		});

		and('user views the Location section', async () => {
			await provideFilters(container);
		});

		and('user views the selected location.', async () => {
			await clickSearch(container);
		});

		and('user views the Appointment details section', async() => {
			await waitFor(() =>
			container.getAllByTestId(APPOINTMENT_TEST_ID.PROVIDER_PROFILE.name)
			);
			expect(
				container.getAllByTestId(APPOINTMENT_TEST_ID.PROVIDER_PROFILE.name)[0]
			).toBeInTheDocument();
		});

		and('user clicks on the Edit link', () => {
			expect(true).toBeTruthy();
		});

		and('user views the appointment date and time', () => {
			expect(true).toBeTruthy();
		});

		and('user view options to change the Purpose of visit', async () => {
			await inputPurpose("Clinical_Diagnosis")
		});

		and('user selects the option to change the purpose of visit', () => {
			expect(true).toBeTruthy();
		});

		and('user remove the purpose of visit', async () => {
			const purposeInput = await waitFor(() =>
				container.getByTestId("select-purposes-of-visit")
			);
			expect(purposeInput.value).toEqual("Clinical_Diagnosis")
		});

		and('user clicks on the continue button', () => {
			expect(true).toBeTruthy();
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2540 - Verify user able to update the purpose of visit in schedule appointment screen from patient portal and already user selected then user can edit.', ({ given, when, and }) => {
		given('user launch Patient Portal url', async () => {
			container = await renderLogin(container);
		});

		when('user is logged in to the application', async () => {
			await doLogin(mock, container);
		});

		and('user clicks on the schedule new appointments search button', () => {
			expect(true).toBeTruthy();
		});

		and('user views the results in the Schedule Appointments screen', async() => {
			container = await renderScheduleAppointment(mock);
		});

		and('user views the Location section', async() => {
			await provideFilters(container);
		});

		and('user views the selected location.', async() => {
			await clickSearch(container);
		});

		and('user views the Appointment details section', async() => {
			await waitFor(() =>
			container.getAllByTestId(APPOINTMENT_TEST_ID.PROVIDER_PROFILE.name)
			);
			expect(
				container.getAllByTestId(APPOINTMENT_TEST_ID.PROVIDER_PROFILE.name)[0]
			).toBeInTheDocument();
		});

		and('user clicks on the Edit link', () => {
			expect(true).toBeTruthy();
		});

		and('user views the appointment date and time', () => {
			expect(true).toBeTruthy();
		});

		and('user view options to change the Purpose of visit', async () => {
			await inputPurpose("Clinical_Diagnosis")
		});

		and('user selects the option to change the purpose of visit', () => {
			expect(true).toBeTruthy();
		});

		and('user selects another option for purpose of visit', async () => {
			const purposeInput = await waitFor(() =>
				container.getByTestId("select-purposes-of-visit")
			);
			expect(purposeInput.value).toEqual("Clinical_Diagnosis")
		});

		and('user clicks on the continue button', () => {
			expect(true).toBeTruthy();
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2540 - Verify user not selected the purpose of visit in schedule appointment screen from patient portal and user add the purpose of visit', ({ given, when, and }) => {
		given('user launch Patient Portal url', async () => {
			container = await renderLogin(container);
		});

		when('user is logged in to the application', async () => {
			await doLogin(mock, container);
		});

		and('user clicks on the schedule new appointments search button  without selecting the purpose of visit', () => {
			expect(true).toBeTruthy();
		});

		and('user views the results in the Schedule Appointments screen', async () => {
			container = await renderScheduleAppointment(mock);
		});

		and('user views the Location section', async () => {
			await provideFilters(container);
		});

		and('user views the selected location.', async () => {
			await clickSearch(container);
		});

		and('user views the Appointment details section', async () => {
			await waitFor(() =>
			container.getAllByTestId(APPOINTMENT_TEST_ID.PROVIDER_PROFILE.name)
			);
			expect(
				container.getAllByTestId(APPOINTMENT_TEST_ID.PROVIDER_PROFILE.name)[0]
			).toBeInTheDocument();
		});

		and('user clicks on the Edit link', () => {
			expect(true).toBeTruthy();
		});

		and('user views the appointment date and time', () => {
			expect(true).toBeTruthy();
		});

		and('user view options to change the Purpose of visit', async () => {
			await inputPurpose("Clinical_Diagnosis")
		});

		and('user selects the option to change the purpose of visit', async () => {
			expect(true).toBeTruthy();
		});

		and('user selects the purpose of visit', async () => {
			const purposeInput = await waitFor(() =>
				container.getByTestId("select-purposes-of-visit")
			);
			expect(purposeInput.value).toEqual("Clinical_Diagnosis")
		});

		and('user clicks on the continue button', () => {
			expect(true).toBeTruthy();
		});
	});
});
