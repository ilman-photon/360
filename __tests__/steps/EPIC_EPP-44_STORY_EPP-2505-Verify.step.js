import { act, fireEvent, render, waitFor, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { defineFeature, loadFeature } from "jest-cucumber";
const useRouter = jest.spyOn(require("next/router"), "useRouter");
import constants from "../../src/utils/constants";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import {
	createMatchMedia,
	defaultValidation,
	renderAppointmentDetail,
	renderResultsScreen,
	renderScheduleAppointment,
} from "../../__mocks__/commonSteps";
import {
	mockAppointmentTypes,
	submitFilter,
	MOCK_APPOINTMENT,
	MOCK_PAST,
	MOCK_SUGESTION,
} from "../../__mocks__/mockResponse";
import { Login } from "../../src/components/organisms/Login/login";
import { Provider } from "react-redux";
import store from "../../src/store/store";
import Appointments from "../../src/pages/patient/appointments";
import Appointment from "../../src/pages/patient/appointment";

const feature = loadFeature(
	"./__tests__/feature/Patient Portal/Sprint4/EPP-2505.feature"
);

jest.mock("@react-google-maps/api", () => ({
	useLoadScript: () => ({
		isLoaded: true,
		loadError: null
	}),
	GoogleMap: () => <div></div>,
	Marker: () => <Marker />
}));

let container;
const mock = new MockAdapter(axios);
const element = document.createElement("div");
let appointmentsContainer;
const { APPOINTMENT_TEST_ID, SEARCH_PROVIDER_TEST_ID } = constants.TEST_ID;

const launchURL = () => {
	const mockOnLoginClicked = jest.fn((data, route, callback) => {
		callback({
			status: "success",
		});
	});
	container = render(<Login OnLoginClicked={mockOnLoginClicked} />);
}

const userSeeScheduleScreen = () => {
	expect(container.getAllByText("Date and time")).toBeTruthy();
	expect(container.getAllByText("Insurance")).toBeTruthy();
	expect(container.getAllByText("No Insurance provided")).toBeTruthy();
	expect(container.getAllByText("Purpose of visit")).toBeTruthy();
};

const inputLocation = async (value = "Texas") => {
	const locationInput = await waitFor(() =>
		container.container.querySelector("#location")
	);
	act(() => {
		fireEvent.change(locationInput, { target: { value } });
	});
	expect(locationInput).toBeInTheDocument();
};

const inputDate = async () => {
	const dateInput = await waitFor(() => container.getByLabelText("Date"));
	act(() => {
		fireEvent.change(dateInput, { target: { value: "22-09-2022" } });
	});
	expect(dateInput).toBeInTheDocument();
};

const inputPurpose = async () => {
	const purposeInput = await waitFor(() =>
		container.getByTestId("select-purposes-of-visit")
	);
	act(() => {
		fireEvent.change(purposeInput, { target: { value: "Eye Exam" } });
	});
	expect(purposeInput).toBeInTheDocument();
};

const inputInsurance = async () => {
	const insuranceInput = await waitFor(() =>
		container.getByLabelText("Insurance Carrier")
	);
	act(() => {
		fireEvent.change(insuranceInput, { target: { value: "Aetna" } });
	});
	expect(insuranceInput).toBeInTheDocument();
};

const clickSearch = async () => {
	const searchBtn = await waitFor(() =>
		container.getByTestId(APPOINTMENT_TEST_ID.searchbtn)
	);
	fireEvent.click(searchBtn);
	expect(searchBtn).toBeInTheDocument();
};

const clickSchedule = async () => {
	const mock = new MockAdapter(axios);
      mock
        .onGet(
          `/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/upcoming`
        )
        .reply(200, MOCK_APPOINTMENT);
      mock
        .onGet(
          `/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/history`
        )
        .reply(200, MOCK_PAST);
      act(() => {
        appointmentsContainer = render(
          <Provider store={store}>
            {Appointments.getLayout(<Appointments />)}
          </Provider>
        );
      });
      await waitFor(() =>
        appointmentsContainer.getByText(/View appointment details/i)
      );
}

const renderSearch = () => {
	const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };

      const domain = window.location.origin;
      mock
        .onGet(
          `${domain}/api/dummy/appointment/create-appointment/getSugestion`
        )
        .reply(200, MOCK_SUGESTION);
      mock
        .onPost(
          `${domain}/api/dummy/appointment/create-appointment/submitFilter`
        )
        .reply(400, {});
      global.navigator.geolocation = mockGeolocation;
      container = render(
        <Provider store={store}>
          {Appointment.getLayout(<Appointment />)}
        </Provider>
      );
}

defineFeature(feature, (test) => {
	test('EPIC_EPP-44_STORY_EPP-2505-Verify User should be able to change the location by searching locations using City along with an option to detect their location (Locate me)', ({ given, when, then, and }) => {
		given(/^User launch the "(.*)" url$/, (arg0) => {
			launchURL();
		});

		when('User clicks on the “Schedule your Eye Exam” button', async () => {
			cleanup();
			await clickSchedule()
			expect(
				appointmentsContainer.getByText(/Past Appointments/i)
			  ).toBeInTheDocument();
			  expect(
				appointmentsContainer.getByText(/Schedule New Appointment/i)
			  ).toBeInTheDocument();
		});

		then('User should navigated to the search screen', async () => {
			cleanup()
			container = await renderScheduleAppointment(mock)
		});

		and('User enters the location', async () => {
			await inputLocation()
		});

		and('User selects the date of appointment', async () => {
			await inputDate();
		});

		and('User selects the purpose of the visit', async () => {
			await inputPurpose();
		});

		and('User enters the insurance name', async () => {
			await inputInsurance();
		});

		when('User clicks on the Search button', async () => {
			await clickSearch();
		});

		then(/^User should navigated the results in the "(.*)" screen$/, (arg0) => {
			defaultValidation()
		});

		and(/^User views the results in the "(.*)" screen$/, async (arg0) => {
			await renderResultsScreen()
		});

		and('User views the selected location.', () => {
			const locationField = container.container.querySelector("#location")
			expect(locationField.value).toBe("Texas")
		});

		and('User views an option to search locations using City', () => {
			defaultValidation()
		});

		when('User selects location', () => {
			defaultValidation()
		});

		then('User changes the City', async () => {
			await inputLocation("Yorktown")
		});

		and('User should see a location based on the City', () => {
			const locationField = container.container.querySelector("#location")
			expect(locationField.value).toBe("Yorktown")
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2505-Verify User should be able to change the location by searching locations using State along with an option to detect their location (Locate me)', ({ given, when, then, and }) => {
		given(/^User launch the "(.*)" url$/, (arg0) => {
			launchURL()
		});

		when('User clicks on the “Schedule your Eye Exam” button', async () => {
			cleanup();
			await clickSchedule()
			expect(
				appointmentsContainer.getByText(/Past Appointments/i)
			  ).toBeInTheDocument();
			  expect(
				appointmentsContainer.getByText(/Schedule New Appointment/i)
			  ).toBeInTheDocument();
		});

		then('User should navigated to the search screen', async () => {
			cleanup()
			container = await renderScheduleAppointment(mock)
		});

		and('User enters the location', async () => {
			await inputLocation()
		});

		and('User selects the date of appointment', async () => {
			await inputDate();
		});

		and('User selects the purpose of the visit', async () => {
			await inputPurpose();
		});

		and('User enters the insurance name', async () => {
			await inputInsurance();
		});

		when('User clicks on the Search button', async () => {
			await clickSearch();
		});

		then(/^User should navigated the results in the "(.*)" screen$/, (arg0) => {
			defaultValidation()
		});

		and(/^User views the results in the "(.*)" screen$/, async (arg0) => {
			await renderResultsScreen()
		});

		and('User views the selected location.', () => {
			const locationField = container.container.querySelector("#location")
			expect(locationField.value).toBe("Texas")
		});

		and('User views an option to search locations using State', () => {
			defaultValidation()
		});

		when('User selects location', () => {
			defaultValidation()
		});

		then('User changes the State', async () => {
			await inputLocation("VA")
		});

		and('User should see a location based on the State', () => {
			const locationField = container.container.querySelector("#location")
			expect(locationField.value).toBe("VA")
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2505-Verify User should be able to change the location by searching locations using Zipcode along with an option to detect their location (Locate me)', ({ given, when, then, and }) => {
		given(/^User launch the "(.*)" url$/, (arg0) => {
			launchURL()
		});

		when('User clicks on the “Schedule your Eye Exam” button', async () => {
			cleanup();
			await clickSchedule()
			expect(
				appointmentsContainer.getByText(/Past Appointments/i)
			  ).toBeInTheDocument();
			  expect(
				appointmentsContainer.getByText(/Schedule New Appointment/i)
			  ).toBeInTheDocument();
		});

		then('User should navigated to the search screen', async () => {
			cleanup()
			container = await renderScheduleAppointment(mock)
		});

		and('User enters the location', async () => {
			await inputLocation()
		});

		and('User selects the date of appointment', async () => {
			await inputDate();
		});

		and('User selects the purpose of the visit', async () => {
			await inputPurpose();
		});

		and('User enters the insurance name', async () => {
			await inputInsurance();
		});

		when('User clicks on the Search button', async () => {
			await clickSearch();
		});

		then(/^User should navigated the results in the "(.*)" screen$/, (arg0) => {
			defaultValidation()
		});

		and(/^User views the results in the "(.*)" screen$/, async (arg0) => {
			await renderResultsScreen()
		});

		and('User views the selected location.', () => {
			const locationField = container.container.querySelector("#location")
			expect(locationField.value).toBe("Texas")
		});

		and('User views an option to search locations using Zipcode', () => {
			defaultValidation()
		});

		when('User selects location', () => {
			defaultValidation()
		});

		then('User changes the Zipcode', async () => {
			await inputLocation("32456")
		});

		and('User should see a location based on the Zipcode', () => {
			const locationField = container.container.querySelector("#location")
			expect(locationField.value).toBe("32456")
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2505-Verify User should see the purpose of visit, insurance carrier, date of appointment and time slot of provider is reset if user updated the location', ({ given, when, then, and }) => {
		given(/^User launch the "(.*)" url$/, (arg0) => {
			launchURL()
		});

		when('User clicks on the “Schedule your Eye Exam” button', async () => {
			cleanup();
			await clickSchedule()
			expect(
				appointmentsContainer.getByText(/Past Appointments/i)
			  ).toBeInTheDocument();
			  expect(
				appointmentsContainer.getByText(/Schedule New Appointment/i)
			  ).toBeInTheDocument();
		});

		then('User should navigated to the search screen', async () => {
			cleanup()
			container = await renderScheduleAppointment(mock)
		});

		and('User enters the location', async () => {
			await inputLocation()
		});

		and('User selects the date of appointment', async () => {
			await inputDate();
		});

		and('User selects the purpose of the visit', async () => {
			await inputPurpose();
		});

		and('User enters the insurance name', async () => {
			await inputInsurance();
		});

		when('User clicks on the Search button', async () => {
			await clickSearch();
		});

		then(/^User should navigated the results in the "(.*)" screen$/, (arg0) => {
			defaultValidation()
		});

		and(/^User views the results in the "(.*)" screen$/, async (arg0) => {
			await renderResultsScreen()
		});

		and('User views the selected location.', () => {
			const locationField = container.container.querySelector("#location")
			expect(locationField.value).toBe("Texas")
		});

		and('User views an option to search locations using Zipcode', () => {
			defaultValidation()
		});

		when('User selects location', () => {
			defaultValidation()
		});

		then('User changes the Zipcode', async () => {
			await inputLocation("32456")
		});

		and('User should see a location based on the Zipcode', () => {
			const locationField = container.container.querySelector("#location")
			expect(locationField.value).toBe("32456")
		});

		when('User updates location', () => {
			defaultValidation()
		});

		then('User should see the purpose of visit, insurance carrier, date of appointment and time slot of provider is reset', () => {
			defaultValidation()
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2505-Verify User should see the results i.e. providers with available time slots getting updated based on the change in location', ({ given, when, then, and }) => {
		given(/^User launch the "(.*)" url$/, (arg0) => {
			launchURL()
		});

		when('User clicks on the “Schedule your Eye Exam” button', async () => {
			cleanup();
			await clickSchedule()
			expect(
				appointmentsContainer.getByText(/Past Appointments/i)
			  ).toBeInTheDocument();
			  expect(
				appointmentsContainer.getByText(/Schedule New Appointment/i)
			  ).toBeInTheDocument();
		});

		then('User should navigated to the search screen', async () => {
			cleanup()
			container = await renderScheduleAppointment(mock)
		});

		and('User enters the location', async () => {
			await inputLocation()
		});

		and('User selects the date of appointment', async () => {
			await inputDate();
		});

		and('User selects the purpose of the visit', async () => {
			await inputPurpose();
		});

		and('User enters the insurance name', async () => {
			await inputInsurance();
		});

		when('User clicks on the Search button', async () => {
			await clickSearch();
		});

		then(/^User should navigated the results in the "(.*)" screen$/, (arg0) => {
			defaultValidation()
		});

		and(/^User views the results in the "(.*)" screen$/, async (arg0) => {
			await renderResultsScreen()
		});

		and('User views the selected location.', () => {
			const locationField = container.container.querySelector("#location")
			expect(locationField.value).toBe("Texas")
		});

		when('User input invalid the State/ City/ Zipcode', async () => {
			await inputLocation("#")
		});

		then('User should see a location based on the State/ City/ Zipcode', () => {
			defaultValidation()
		});

		and('User should see the results i.e. providers with available time slots getting updated based on the change in location', () => {
			defaultValidation()
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2505-Verify User should see an error message for the location search criteria is invalid as "No results found. Please try again with a different search criteria."', ({ given, when, then, and }) => {
		given(/^User launch the "(.*)" url$/, (arg0) => {
			launchURL()
		});

		when('User clicks on the “Schedule your Eye Exam” button', async () => {
			cleanup();
			await clickSchedule()
			expect(
				appointmentsContainer.getByText(/Past Appointments/i)
			  ).toBeInTheDocument();
			  expect(
				appointmentsContainer.getByText(/Schedule New Appointment/i)
			  ).toBeInTheDocument();
		});

		then('User should navigated to the search screen', async () => {
			cleanup()
			container = await renderScheduleAppointment(mock)
		});

		and('User enters the location', async () => {
			await inputLocation()
		});

		and('User selects the date of appointment', async () => {
			await inputDate();
		});

		and('User selects the purpose of the visit', async () => {
			await inputPurpose();
		});

		and('User enters the insurance name', async () => {
			await inputInsurance();
		});

		when('User clicks on the Search button', async () => {
			await clickSearch();
		});

		then(/^User should navigated the results in the "(.*)" screen$/, (arg0) => {
			defaultValidation()
		});

		and(/^User views the results in the "(.*)" screen$/, async (arg0) => {
			await renderResultsScreen()
		});

		and('User views the selected location.', () => {
			const locationField = container.container.querySelector("#location")
			expect(locationField.value).toBe("Texas")
		});

		and('User views an option to search locations using Zipcode', () => {
			defaultValidation()
		});

		when('User selects location', () => {
			defaultValidation()
		});

		and('User input invalid the State/ City/ Zipcode', async () => {
			await inputLocation("#")
		});

		then(/^User should be prompted with an error message "(.*)"$/, (arg0) => {
			defaultValidation()
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2505-Verify User should be able to select a location based on the search within 3 seconds', ({ given, when, then, and }) => {
		given(/^User launch the "(.*)" url$/, (arg0) => {
			launchURL()
		});

		when('User clicks on the “Schedule your Eye Exam” button', async () => {
			cleanup();
			await clickSchedule()
			expect(
				appointmentsContainer.getByText(/Past Appointments/i)
			  ).toBeInTheDocument();
			  expect(
				appointmentsContainer.getByText(/Schedule New Appointment/i)
			  ).toBeInTheDocument();
		});

		then('User should navigated to the search screen', async () => {
			cleanup()
			container = await renderScheduleAppointment(mock)
		});

		and('User enters the location', async () => {
			await inputLocation()
		});

		and('User selects the date of appointment', async () => {
			await inputDate();
		});

		and('User selects the purpose of the visit', async () => {
			await inputPurpose();
		});

		and('User enters the insurance name', async () => {
			await inputInsurance();
		});

		when('User clicks on the Search button', async () => {
			await clickSearch();
		});

		then(/^User should navigated the results in the "(.*)" screen$/, (arg0) => {
			defaultValidation()
		});

		and(/^User views the results in the "(.*)" screen$/, async (arg0) => {
			await renderResultsScreen()
		});

		and('User views the selected location.', () => {
			const locationField = container.container.querySelector("#location")
			expect(locationField.value).toBe("Texas")
		});

		and('User views an option to search locations using Zipcode', () => {
			defaultValidation()
		});

		when('User selects location', () => {
			defaultValidation()
		});

		and('User input invalid the State/ City/ Zipcode', async () => {
			await inputLocation("#")
		});

		then(/^User should see the page loads within "(.*)"$/, (arg0) => {
			defaultValidation()
		});

		and('User should see a location based on the State/ City/ Zipcode', () => {
			defaultValidation()
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2505-Verify User should not see the any errors script when user clicks F12 on the console', ({ given, when, then, and }) => {
		given(/^User launch the "(.*)" url$/, (arg0) => {
			launchURL()
		});

		when('User clicks on the “Schedule your Eye Exam” button', async () => {
			cleanup();
			await clickSchedule()
			expect(
				appointmentsContainer.getByText(/Past Appointments/i)
			  ).toBeInTheDocument();
			  expect(
				appointmentsContainer.getByText(/Schedule New Appointment/i)
			  ).toBeInTheDocument();
		});

		then('User should navigated to the search screen', async () => {
			cleanup()
			container = await renderScheduleAppointment(mock)
		});

		and('User enters the location', async () => {
			await inputLocation()
		});

		and('User selects the date of appointment', async () => {
			await inputDate();
		});

		and('User selects the purpose of the visit', async () => {
			await inputPurpose();
		});

		and('User enters the insurance name', async () => {
			await inputInsurance();
		});

		when('User clicks on the Search button', async () => {
			await clickSearch();
		});

		then(/^User should navigated the results in the "(.*)" screen$/, (arg0) => {
			defaultValidation()
		});

		and(/^User views the results in the "(.*)" screen$/, async (arg0) => {
			await renderResultsScreen()
		});

		and('User views the selected location.', () => {
			const locationField = container.container.querySelector("#location")
			expect(locationField.value).toBe("Texas")
		});

		and('User views an option to search locations using Zipcode', () => {
			defaultValidation()
		});

		when('User selects location', () => {
			defaultValidation()
		});

		and('User input invalid the State/ City/ Zipcode', async () => {
			await inputLocation("#")
		});

		then(/^User should see the page loads within "(.*)"$/, (arg0) => {
			defaultValidation()
		});

		and('User should see a location based on the State/ City/ Zipcode', () => {
			defaultValidation()
		});

		when(/^User clicks on F(\d+) on the console$/, (arg0) => {
			defaultValidation()
		});

		then('User should not to see any errors script', () => {
			defaultValidation()
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2505-Negative Test Cases-Verify user should see the error message when the internet service is unavailable', ({ given, when, then, and }) => {
		given(/^User launch the "(.*)" url$/, (arg0) => {
			launchURL()
		});

		when('User clicks on the “Schedule your Eye Exam” button', async () => {
			cleanup();
			await clickSchedule()
			expect(
				appointmentsContainer.getByText(/Past Appointments/i)
			  ).toBeInTheDocument();
			  expect(
				appointmentsContainer.getByText(/Schedule New Appointment/i)
			  ).toBeInTheDocument();
		});

		then('User should navigated to the search screen', async () => {
			cleanup()
			container = await renderScheduleAppointment(mock)
		});

		and('User enters the location', async () => {
			await inputLocation()
		});

		and('User selects the date of appointment', async () => {
			await inputDate();
		});

		and('User selects the purpose of the visit', async () => {
			await inputPurpose();
		});

		and('User enters the insurance name', async () => {
			await inputInsurance();
		});

		when('User clicks on the Search button', async () => {
			await clickSearch();
		});

		then(/^User should navigated the results in the "(.*)" screen$/, (arg0) => {
			defaultValidation()
		});

		and(/^User views the results in the "(.*)" screen$/, async (arg0) => {
			await renderResultsScreen()
		});

		and('User views the selected location.', () => {
			const locationField = container.container.querySelector("#location")
			expect(locationField.value).toBe("Texas")
		});

		and('User views an option to search locations using Zipcode', () => {
			defaultValidation()
		});

		when('User selects location', () => {
			defaultValidation()
		});

		and('User input invalid the State/ City/ Zipcode', async () => {
			await inputLocation("#")
		});

		then('The internet service is unavailable', () => {
			defaultValidation()
		});

		and('User should see the appropriate error message', () => {
			defaultValidation()
		});
	});

	test('EPIC_EPP-44_STORY_EPP-2505-Negative Test Cases-Verify user should see the error message when the service is unavailable', ({ given, when, then, and }) => {
		given(/^User launch the "(.*)" url$/, (arg0) => {
			launchURL()
		});

		when('User clicks on the “Schedule your Eye Exam” button', async () => {
			cleanup();
			await clickSchedule()
			expect(
				appointmentsContainer.getByText(/Past Appointments/i)
			  ).toBeInTheDocument();
			  expect(
				appointmentsContainer.getByText(/Schedule New Appointment/i)
			  ).toBeInTheDocument();
		});

		then('User should navigated to the search screen', async () => {
			cleanup()
			container = await renderScheduleAppointment(mock)
		});

		and('User enters the location', async () => {
			await inputLocation()
		});

		and('User selects the date of appointment', async () => {
			await inputDate();
		});

		and('User selects the purpose of the visit', async () => {
			await inputPurpose();
		});

		and('User enters the insurance name', async () => {
			await inputInsurance();
		});

		when('User clicks on the Search button', async () => {
			await clickSearch();
		});

		then(/^User should navigated the results in the "(.*)" screen$/, async (arg0) => {
			defaultValidation()
		});

		and(/^User views the results in the "(.*)" screen$/, async (arg0) => {
			await renderResultsScreen()
		});

		and('User views the selected location.', () => {
			const locationField = container.container.querySelector("#location")
			expect(locationField.value).toBe("Texas")
		});

		and('User views an option to search locations using Zipcode', () => {
			defaultValidation()
		});

		when('User selects location', () => {
			defaultValidation()
		});

		and('User input invalid the State/ City/ Zipcode', async () => {
			await inputLocation("#")
		});

		then('The service is unavailable', () => {
			defaultValidation()
		});

		and('User should see the appropriate error message', () => {
			defaultValidation()
		});
	});

})