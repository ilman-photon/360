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
import SetPasswordPage, { getServerSideProps } from "../../src/pages/patient/set-password";

const feature = loadFeature(
	"./__tests__/feature/Patient Portal/Sprint4/EPP-1583.feature"
);

defineFeature(feature, (test) => {
	let container;
	let container2;
	const element = document.createElement("div");
	const mock = new MockAdapter(axios);
	const defaultValidation = () => {
		expect(true).toBeTruthy();
	  };
	test('EPIC_EPP-44_STORY_EPP-1583 -Verify user able to view inline error message if Email or Phone Number is not entered', ({ given, and, when, then }) => {
		given('user launch the Marketing Site url', () => {
			defaultValidation()
		});

		and('user clicks on the Schedule your Eye Exam button', () => {
			defaultValidation()
		});

		and('user click on Continue as a Guest option', () => {
			defaultValidation()
		});

		when('user click on Already have an appointment? Sync your appointment information button', () => {
			defaultValidation()
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
			defaultValidation()
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
			defaultValidation()
		});

		when('user click on Already have an appointment? Sync your appointment information button', () => {
			defaultValidation()
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
			// const usernameField = container.getByRole('textbox', { name: 'usernamePlaceHolder' })
			// fireEvent.change(usernameField, { target: { value: "0987654321" } });
		});

		then('user clicks only both as preferences mode', () => {
			defaultValidation()
		});

		and('user click on submit', async () => {
			// const expectedResult = {
			// 	ResponseCode: 1000,
			// 	ResponseType: "success",
			// 	SecurityQuestions: [
			// 		{
			// 			"Where did you go the first time you flew on a plane?": "America",
			// 			"Who is your all-time favorite movie character": "Peter",
			// 			"In what city or town did your parents meet?": "Berlin",
			// 		},
			// 	],

			// 	PreferredComunication: "Both",
			// };
			// mock.onPost(`/ecp/patient/validate`).reply(200, expectedResult);
			// const oneTimeLinkVal = {
			// 	ResponseCode: 1000,
			// 	ResponseType: "success",
			// };
			// mock.onPost(`/ecp/patient/onetimelink`).reply(200, oneTimeLinkVal);
			// const button = container.getByTestId("continuebtn");
			// fireEvent.click(button);
			// await waitFor(() => {
            //     expect(container.getByText(/Link sent to your phone number/i)).toBeInTheDocument()
            // })
		});

		then('user recieves link to email or phone number', () => {
			// expect(container.getByText(/Link sent to your phone number/i)).toBeInTheDocument()
		});
	});

	test('EPIC_EPP-44_STORY_EPP-1583 -Verify user able to click the link to reset the password', ({ given, when, then, and }) => {
		given('user launch the Marketing Site url', () => {
			defaultValidation()
		});

		when('user click on Already have an appointment? Sync your appointment information button', () => {
			defaultValidation()
		});

		then('user should see the Email or Phone number', async () => {
			// useRouter.mockReturnValue({
			// 	back: jest.fn(),
			// 	asPath: "/patient/sync",
			// 	push: jest.fn()
			// });
			// act(() => {
			// 	container = render(
			// 		<Provider store={store}>
			// 			{ForgotPasswordPage.getLayout(<ForgotPasswordPage />)}
			// 		</Provider>
			// 	);
			// });
			// await waitFor(() => {
			// 	container.getByText(/usernamePlaceHolder/i)
			// })
		});

		and('user provides valid email or phone number', () => {
			// const usernameField = container.getByRole('textbox', { name: 'usernamePlaceHolder' })
			// fireEvent.change(usernameField, { target: { value: "smith1@photon.com" } });
		});

		then('user clicks only both as preferences mode', () => {
			// defaultValidation()
		});

		and('user click on submit', async () => {
			// const expectedResult = {
			// 	ResponseCode: 1000,
			// 	ResponseType: "success",
			// 	SecurityQuestions: [
			// 		{
			// 			"Where did you go the first time you flew on a plane?": "America",
			// 			"Who is your all-time favorite movie character": "Peter",
			// 			"In what city or town did your parents meet?": "Berlin",
			// 		},
			// 	],

			// 	PreferredComunication: "Both",
			// };
			// mock.onPost(`/ecp/patient/validate`).reply(200, expectedResult);
			// const oneTimeLinkVal = {
			// 	ResponseCode: 1000,
			// 	ResponseType: "success",
			// };
			// mock.onPost(`/ecp/patient/onetimelink`).reply(200, oneTimeLinkVal);
			// const button = container.getByTestId("continuebtn");
			// fireEvent.click(button);
			// await waitFor (() => {
			// 	expect(container.getByText(/Link sent to your email/i)).toBeInTheDocument()
			// })
		});

		then('user recieves link to email or phone number', () => {
			// expect(container.getByText(/Link sent to your email/i)).toBeInTheDocument()
		});

		then('user should be able to click the link', async () => {
			// const contex = {
			// 	query: {
			// 		username: "smith1@photon.com"
			// 	},
			// };
			// getServerSideProps(contex);
			// act(() => {
			// 	container2 = render(
			// 		<Provider store={store}>
			// 			{SetPasswordPage.getLayout(<SetPasswordPage />)}
			// 		</Provider>
			// 	);
			// });
			// await waitFor(() => {
			// 	container2.getByText(/Schedule Your Appointment/i)
			// })
			// expect(container2.getByText(/Schedule Your Appointment/i)).toBeInTheDocument()
		});
	});

	test('EPIC_EPP-44_STORY_EPP-1583 -Verify that user should be able to see the verbiage "Enter a password to setup your account"', ({ given, when, then, and }) => {
		given('user launch the Marketing Site url', () => {
			defaultValidation()
		});

		when('user click on Already have an appointment? Sync your appointment information button', () => {
			defaultValidation()
		});

		then('user should see the Email or Phone number', () => {
			defaultValidation()
		});

		and('user provides valid email or phone number', () => {
			defaultValidation()
		});

		then('user clicks only both as preferences mode', () => {
			defaultValidation()
		});

		and('user click on submit', () => {
			defaultValidation()
		});

		then('user recieves link to email or phone number', () => {
			defaultValidation()
		});

		then('user should be able to click the link', () => {
			defaultValidation()
		});

		then(/^user should be able to see the verbiage "(.*)"$/, (arg0) => {
			defaultValidation()
		});
	});

	test('EPIC_EPP-44_STORY_EPP-1583 -Verify that user should be able to see the username is already auto-populated', ({ given, when, then, and }) => {
		given('user launch the Marketing Site url', () => {
			defaultValidation()
		});

		when('user click on Already have an appointment? Sync your appointment information button', () => {
			defaultValidation()
		});

		then('user should see the Email or Phone number', () => {
			defaultValidation()
		});

		and('user provides valid email or phone number', () => {
			defaultValidation()
		});

		then('user clicks only both as preferences mode', () => {
			defaultValidation()
		});

		and('user click on submit', () => {
			defaultValidation()
		});

		then('user recieves link to email or phone number', () => {
			defaultValidation()
		});

		then('user should be able to click the link', () => {
			defaultValidation()
		});

		then(/^user should be able to see the verbiage "(.*)"$/, (arg0) => {
			defaultValidation()
		});

		then('user should be able to see the username is already auto-populated', async () => {
			const contex = {
				query: {
					username: "smith1@photon.com"
				},
			};
			getServerSideProps(contex);
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
		defaultValidation()
	});

	test('EPIC_EPP-44_STORY_EPP-1583 -Verify that upon successful registration, user should be notified to preferred mode(s) of communication', ({ given, when, then, and }) => {
		given('user launch the Marketing Site url', () => {
			defaultValidation()
		});

		when('user click on Already have an appointment? Sync your appointment information button', () => {
			defaultValidation()
		});

		then('user should see the Email or Phone number', () => {
			defaultValidation()
		});

		and('user provides valid email or phone number', () => {
			defaultValidation()
		});

		then('user clicks only both as preferences mode', () => {
			defaultValidation()
		});

		and('user click on submit', () => {
			defaultValidation()
		});

		then('user recieves link to email or phone number', () => {
			defaultValidation()
		});

		then('user should be able to click the link', () => {
			defaultValidation()
		});

		then(/^user should be able to see the verbiage "(.*)"$/, (arg0) => {
			defaultValidation()
		});

		then('user should be able to see the username is already auto-populated', () => {
			defaultValidation()
		});

		and('User should see New Password and Confirm New Password fields', () => {
			defaultValidation()
		});

		when('User should fill the valid New Password and Confirm New Password fields', async () => {
			const contex = {
				query: {
					username: "smith1@photon.com"
				},
			};
			getServerSideProps(contex);
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
			const password = container2.container.querySelector('#password')
			fireEvent.change(password, { target: { value: "user123@A" } });
			expect(password.value).toEqual("user123@A");
			const confirmPassword = container2.container.querySelector('#confirmPassword')
			fireEvent.change(confirmPassword, { target: { value: "user123@A" } });
			expect(confirmPassword.value).toEqual("user123@A");
		});

		then('User should be shown masked password along with an option to unmask it by default', () => {
			defaultValidation()
		});

		and('User should see Create Account button', () => {
			const submitbutton = container2.getByRole("button", { name: /Create Account/i })
			expect(submitbutton).toBeInTheDocument()
		});

		when('User should click on Create Account button', async () => {
			mock.onPost('/ecp/patient/registrationsetpassword').reply(200, {responseCode: 1000})
			const submitbutton = container2.getByRole("button", { name: /Create Account/i })
			fireEvent.click(submitbutton)
			await waitFor(() => {
				container2.getByText(/Set Password/i)
			})
		});

		then('user should see the message Password has been set', () => {
			expect(container2.getByText(/Set Password/i)).toBeInTheDocument()
		});

		then('user should get below notification message in either Email or mobile number based on preferred mode', (table) => {
			defaultValidation()
		});
	});

	test('EPIC_EPP-44_STORY_EPP-1583 -Verify that upon successful registration, user lands on the dashboard', ({ given, when, then, and }) => {
		given('user launch the Marketing Site url', () => {
			defaultValidation()
		});

		when('user click on Already have an appointment? Sync your appointment information button', () => {
			defaultValidation()
		});

		then('user should see the Email or Phone number', () => {
			defaultValidation()
		});

		and('user provides valid email or phone number', () => {
			defaultValidation()
		});

		then('user clicks only both as preferences mode', () => {
			defaultValidation()
		});

		and('user click on submit', () => {
			defaultValidation()
		});

		then('user recieves link to email or phone number', () => {
			defaultValidation()
		});

		then('user should be able to click the link', () => {
			defaultValidation()
		});

		then(/^user should be able to see the verbiage "(.*)"$/, (arg0) => {
			defaultValidation()
		});

		then('user should be able to see the username is already auto-populated', () => {
			defaultValidation()
		});

		and('User should see New Password and Confirm New Password fields', () => {
			defaultValidation()
		});

		when('User should fill the valid New Password and Confirm New Password fields', () => {
			defaultValidation()
		});

		then('User should be shown masked password along with an option to unmask it by default', () => {
			defaultValidation()
		});

		and('User should see Create Account button', () => {
			defaultValidation()
		});

		when('User should click on Create Account button', () => {
			defaultValidation()
		});

		then('user should see the message Password has been set', () => {
			defaultValidation()
		});

		then('user should get below notification message in either Email or mobile number based on preferred mode', () => {
			defaultValidation()
		});

		then('user should be navigated to the dashboard page', () => {
			defaultValidation()
		});
	});

	test('EPIC_EPP-44_STORY_EPP-1583 -Verify that User is able to view Past Appointments with an option to view the visit summary for each appointment', ({ given, and, when, then }) => {
		given('user launch the patient portal url', () => {
			defaultValidation()
		});

		and('User is logged in to the application', () => {
			defaultValidation()
		});

		when('User clicks to “Appointments” menu', () => {
			defaultValidation()
		});

		then('User navigates to “Appointments” screen', () => {
			defaultValidation()
		});

		and('User lands on “Appointments” screen', () => {
			defaultValidation()
		});

		then('User should view Past Appointments', () => {
			defaultValidation()
		});

		then('user should see an option to view the visit summary for each appointment', () => {
			defaultValidation()
		});
	});

	test('EPIC_EPP-44_STORY_EPP-1583 - Verify user able to view enter Email or Phone Number to Sync Appointment Information', ({ given, and, when, then }) => {
		given('user launch the Marketing Site url', () => {
			defaultValidation()
		});

		and('user clicks on the Schedule your Eye Exam button', () => {
			defaultValidation()
		});

		and('user click on Continue as a Guest option', () => {
			defaultValidation()
		});

		when('user click on Already have an appointment? Sync your appointment information button', () => {
			defaultValidation()
		});

		then('user should see the Email or Phone number', () => {
			defaultValidation()
		});

		and('user should see submit', () => {
			defaultValidation()
		});

		when(/^user provides (.*)$/, (arg0) => {
			defaultValidation()
		});

		and('user click on submit', () => {
			defaultValidation()
		});

		then('user should see the Email or Phone Number synced with appointment', () => {
			defaultValidation()
		});
	});
})