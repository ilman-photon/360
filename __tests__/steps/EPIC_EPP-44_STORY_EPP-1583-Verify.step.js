import { act, fireEvent, render, waitFor } from "@testing-library/react";
import axios from "axios";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import { defineFeature, loadFeature } from "jest-cucumber";
import { Provider } from "react-redux";
import ForgotPasswordPage from "../../src/pages/patient/forgot-password";
import store from "../../src/store/store";
const useRouter = jest.spyOn(require("next/router"), "useRouter");
import constants from "../../src/utils/constants";
import SetPasswordPage from "../../src/pages/patient/set-password";

const feature = loadFeature(
	"./__tests__/feature/Patient Portal/Sprint4/EPP-1583.feature"
);

defineFeature(feature, (test) => {
	let container;
	let container2;
	const element = document.createElement("div");
	const mock = new MockAdapter(axios);
	test('EPIC_EPP-44_STORY_EPP-1583 -Verify user able to view inline error message if Email or Phone Number is not entered', ({ given, and, when, then }) => {
		given('user launch the Marketing Site url', () => {

		});

		and('user clicks on the Schedule your Eye Exam button', () => {

		});

		and('user click on Continue as a Guest option', () => {

		});

		when('user click on Already have an appointment? Sync your appointment information button', () => {

		});

		then('user should see the Email or Phone number', async () => {
			useRouter.mockReturnValue({
				back: jest.fn(),
				asPath: "/patient/sync",
				push: jest.fn()
			});
			act(() => {
				container = render(
					<Provider store={store}>
						{ForgotPasswordPage.getLayout(<ForgotPasswordPage />)}
					</Provider>
				);
			});
			await waitFor(() => {
				container.getByText(/usernamePlaceHolder/i)
			})
		});

		and('user provides blank Email or Phone number', () => {

		});

		and('user should click on submit', () => {
			expect(container.getByTestId("continuebtn")).toBeInTheDocument();
			fireEvent.click(container.getByTestId("continuebtn"));
		});

		then(/^user should see error message "(.*)"$/, (arg0) => {
			expect(container.getByText(/usernamePlaceHolder/i)).toBeInTheDocument()
		});
	});

	test('EPIC_EPP-44_STORY_EPP-1583 -Verify user able to click both as preferences mode and able to get the link to create password', ({ given, when, then, and }) => {
		given('user launch the Marketing Site url', () => {

		});

		when('user click on Already have an appointment? Sync your appointment information button', () => {

		});

		then('user should see the Email or Phone number', async () => {
			useRouter.mockReturnValue({
				back: jest.fn(),
				asPath: "/patient/sync",
				push: jest.fn()
			});
			act(() => {
				container = render(
					<Provider store={store}>
						{ForgotPasswordPage.getLayout(<ForgotPasswordPage />)}
					</Provider>
				);
			});
			await waitFor(() => {
				container.getByText(/usernamePlaceHolder/i)
			})
		});

		and('user provides valid email or phone number', () => {
			const usernameField = container.getByRole('textbox', { name: 'usernamePlaceHolder' })
			fireEvent.change(usernameField, { target: { value: "0987654321" } });
		});

		then('user clicks only both as preferences mode', () => {

		});

		and('user click on submit', () => {
			const expectedResult = {
				ResponseCode: 1000,
				ResponseType: "success",
				SecurityQuestions: [
					{
						"Where did you go the first time you flew on a plane?": "America",
						"Who is your all-time favorite movie character": "Peter",
						"In what city or town did your parents meet?": "Berlin",
					},
				],

				PreferredComunication: "Both",
			};
			mock.onPost(`/ecp/patient/validate`).reply(200, expectedResult);
			const oneTimeLinkVal = {
				ResponseCode: 1000,
				ResponseType: "success",
			};
			mock.onPost(`/ecp/patient/onetimelink`).reply(200, oneTimeLinkVal);
			const button = container.getByTestId("continuebtn");
			fireEvent.click(button);
		});

		then('user recieves link to email or phone number', () => {

		});
	});

	test('EPIC_EPP-44_STORY_EPP-1583 -Verify user able to click the link to reset the password', ({ given, when, then, and }) => {
		given('user launch the Marketing Site url', () => {

		});

		when('user click on Already have an appointment? Sync your appointment information button', () => {

		});

		then('user should see the Email or Phone number', async () => {
			useRouter.mockReturnValue({
				back: jest.fn(),
				asPath: "/patient/sync",
				push: jest.fn()
			});
			act(() => {
				container = render(
					<Provider store={store}>
						{ForgotPasswordPage.getLayout(<ForgotPasswordPage />)}
					</Provider>
				);
			});
			await waitFor(() => {
				container.getByText(/usernamePlaceHolder/i)
			})
		});

		and('user provides valid email or phone number', () => {
			const usernameField = container.getByRole('textbox', { name: 'usernamePlaceHolder' })
			fireEvent.change(usernameField, { target: { value: "smith1@photon.com" } });
		});

		then('user clicks only both as preferences mode', () => {

		});

		and('user click on submit', () => {
			const expectedResult = {
				ResponseCode: 1000,
				ResponseType: "success",
				SecurityQuestions: [
					{
						"Where did you go the first time you flew on a plane?": "America",
						"Who is your all-time favorite movie character": "Peter",
						"In what city or town did your parents meet?": "Berlin",
					},
				],

				PreferredComunication: "Both",
			};
			mock.onPost(`/ecp/patient/validate`).reply(200, expectedResult);
			const oneTimeLinkVal = {
				ResponseCode: 1000,
				ResponseType: "success",
			};
			mock.onPost(`/ecp/patient/onetimelink`).reply(200, oneTimeLinkVal);
			const button = container.getByTestId("continuebtn");
			fireEvent.click(button);
		});

		then('user recieves link to email or phone number', () => {

		});

		then('user should be able to click the link', async () => {
			act(() => {
				container2 = render(
					<Provider store={store}>
						{SetPasswordPage.getLayout(<SetPasswordPage />)}
					</Provider>
				);
			});
			await waitFor(() => {
				container2.getByText(/Schedule Your Appointment/i)
			})
			expect(container2.getByText(/Schedule Your Appointment/i)).toBeInTheDocument()
		});
	});

	test('EPIC_EPP-44_STORY_EPP-1583 -Verify that user should be able to see the verbiage "Enter a password to setup your account"', ({ given, when, then, and }) => {
		given('user launch the Marketing Site url', () => {

		});

		when('user click on Already have an appointment? Sync your appointment information button', () => {

		});

		then('user should see the Email or Phone number', () => {

		});

		and('user provides valid email or phone number', () => {

		});

		then('user clicks only both as preferences mode', () => {

		});

		and('user click on submit', () => {

		});

		then('user recieves link to email or phone number', () => {

		});

		then('user should be able to click the link', () => {

		});

		then(/^user should be able to see the verbiage "(.*)"$/, (arg0) => {

		});
	});

	test('EPIC_EPP-44_STORY_EPP-1583 -Verify that user should be able to see the username is already auto-populated', ({ given, when, then, and }) => {
		given('user launch the Marketing Site url', () => {

		});

		when('user click on Already have an appointment? Sync your appointment information button', () => {

		});

		then('user should see the Email or Phone number', () => {

		});

		and('user provides valid email or phone number', () => {

		});

		then('user clicks only both as preferences mode', () => {

		});

		and('user click on submit', () => {

		});

		then('user recieves link to email or phone number', () => {

		});

		then('user should be able to click the link', () => {

		});

		then(/^user should be able to see the verbiage "(.*)"$/, (arg0) => {

		});

		then('user should be able to see the username is already auto-populated', async () => {
			act(() => {
				container2 = render(
					<Provider store={store}>
						{SetPasswordPage.getLayout(<SetPasswordPage />)}
					</Provider>
				);
			});

			await waitFor(() => {
				container2.getByText(/Set Password/i)
			})
			expect(container2.getByText(/Set Password/i)).toBeInTheDocument()
		});
	});

	test('EPIC_EPP-44_STORY_EPP-1583 -Verify that user should be prompted with inline validation error message “This field is required” when all the required fields are not filled', ({ }) => {

	});

	test('EPIC_EPP-44_STORY_EPP-1583 -Verify that upon successful registration, user should be notified to preferred mode(s) of communication', ({ given, when, then, and }) => {
		given('user launch the Marketing Site url', () => {

		});

		when('user click on Already have an appointment? Sync your appointment information button', () => {

		});

		then('user should see the Email or Phone number', () => {

		});

		and('user provides valid email or phone number', () => {

		});

		then('user clicks only both as preferences mode', () => {

		});

		and('user click on submit', () => {

		});

		then('user recieves link to email or phone number', () => {

		});

		then('user should be able to click the link', () => {

		});

		then(/^user should be able to see the verbiage "(.*)"$/, (arg0) => {

		});

		then('user should be able to see the username is already auto-populated', () => {

		});

		and('User should see New Password and Confirm New Password fields', () => {

		});

		when('User should fill the valid New Password and Confirm New Password fields', () => {

		});

		then('User should be shown masked password along with an option to unmask it by default', () => {

		});

		and('User should see Create Account button', () => {

		});

		when('User should click on Create Account button', () => {

		});

		then('user should see the message Password has been set', () => {

		});

		then('user should get below notification message in either Email or mobile number based on preferred mode', (table) => {

		});
	});

	test('EPIC_EPP-44_STORY_EPP-1583 -Verify that upon successful registration, user lands on the dashboard', ({ given, when, then, and }) => {
		given('user launch the Marketing Site url', () => {

		});

		when('user click on Already have an appointment? Sync your appointment information button', () => {

		});

		then('user should see the Email or Phone number', () => {

		});

		and('user provides valid email or phone number', () => {

		});

		then('user clicks only both as preferences mode', () => {

		});

		and('user click on submit', () => {

		});

		then('user recieves link to email or phone number', () => {

		});

		then('user should be able to click the link', () => {

		});

		then(/^user should be able to see the verbiage "(.*)"$/, (arg0) => {

		});

		then('user should be able to see the username is already auto-populated', () => {

		});

		and('User should see New Password and Confirm New Password fields', () => {

		});

		when('User should fill the valid New Password and Confirm New Password fields', () => {

		});

		then('User should be shown masked password along with an option to unmask it by default', () => {

		});

		and('User should see Create Account button', () => {

		});

		when('User should click on Create Account button', () => {

		});

		then('user should see the message Password has been set', () => {

		});

		then('user should get below notification message in either Email or mobile number based on preferred mode', () => {

		});

		then('user should be navigated to the dashboard page', () => {

		});
	});

	test('EPIC_EPP-44_STORY_EPP-1583 -Verify that User is able to view Past Appointments with an option to view the visit summary for each appointment', ({ given, and, when, then }) => {
		given('user launch the patient portal url', () => {

		});

		and('User is logged in to the application', () => {

		});

		when('User clicks to “Appointments” menu', () => {

		});

		then('User navigates to “Appointments” screen', () => {

		});

		and('User lands on “Appointments” screen', () => {

		});

		then('User should view Past Appointments', () => {

		});

		then('user should see an option to view the visit summary for each appointment', () => {

		});
	});

	test('EPIC_EPP-44_STORY_EPP-1583 - Verify user able to view enter Email or Phone Number to Sync Appointment Information', ({ given, and, when, then }) => {
		given('user launch the Marketing Site url', () => {

		});

		and('user clicks on the Schedule your Eye Exam button', () => {

		});

		and('user click on Continue as a Guest option', () => {

		});

		when('user click on Already have an appointment? Sync your appointment information button', () => {

		});

		then('user should see the Email or Phone number', () => {

		});

		and('user should see submit', () => {

		});

		when(/^user provides (.*)$/, (arg0) => {

		});

		and('user click on submit', () => {

		});

		then('user should see the Email or Phone Number synced with appointment', () => {

		});
	});
})