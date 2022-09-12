import { act, fireEvent, render, waitFor } from "@testing-library/react";
import axios from "axios";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import { defineFeature, loadFeature } from "jest-cucumber";
import { Provider } from "react-redux";
import Appointment from "../../src/pages/patient/appointment";
import store from "../../src/store/store";
import constants, { TEST_ID } from "../../src/utils/constants";
import mediaQuery from 'css-mediaquery';
import { Login } from "../../src/components/organisms/Login/login";
import Appointments from "../../src/pages/patient/appointments";
const useRouter = jest.spyOn(require("next/router"), "useRouter");

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint5/EPP-1602.feature",
  {
    tagFilter: "@included and not @excluded",
  }
);

useRouter.mockReturnValue({
  back: jest.fn(),
  push: jest.fn(),
  query: {
    reschedule: true
  }
});
window.scrollTo = jest.fn();

const userData = {
  appointmentList: [
      {
          appointmentId: "1",
          providerInfo: {
              providerId: "1",
              name: "Paul Wagner Md",
              position: "Scripps Eyecare",
              address: {
                  addressLine1: "51 West 51st Street",
                  addressLine2: "Floor 3, Suite 320 Midtown",
                  city: "Florida",
                  state: "FR",
                  zipcode: "54231",
              },
              rating: "5",
              phoneNumber: "8572999989",
              distance: "10 mi",
              image: "/doctor.png",
              from: "2022-07-18",
              to: "2022-07-23",
              location: {
                  latitude: 32.751204,
                  longitude: -117.1641166,
              },
          },
          patientInfo: {
              name: "Rebecca Chan",
              firstname: "Rebecca",
              lastname: "Chan",
              dob: "12/12/2022",
              phoneNumber: "1234567890",
          },
          appointmentInfo: {
              appointmentType: "Eye Exam",
              date: "Thu, 12 Jan 2023 04:30:00 EST",
              insuranceCarrier: ["ECP Vision", "BlueCare Vision"],
          },
      },
      {
          appointmentId: "1",
          providerInfo: {
              providerId: "1",
              name: "Dr. Sonha Nguyen",
              position: "Scripps Eyecare",
              address: {
                  addressLine1: "51 West 51st Street",
                  addressLine2: "Floor 3, Suite 320 Midtown",
                  city: "Florida",
                  state: "FR",
                  zipcode: "54231",
              },
              rating: "5",
              phoneNumber: "8572999989",
              distance: "10 mi",
              image: "/doctor.png",
              from: "2022-07-18",
              to: "2022-07-23",
              location: {
                  latitude: 32.751204,
                  longitude: -117.1641166,
              },
          },
          patientInfo: {
              name: "Rebecca Chan",
              firstname: "Rebecca",
              lastname: "Chan",
              dob: "12/12/2022",
              phoneNumber: "1234567890",
          },
          appointmentInfo: {
              appointmentType: "Eye Exam",
              date: "Thu, 12 Jan 2023 04:30:00 EST",
              insuranceCarrier: ["ECP Vision", "BlueCare Vision"],
          },
      },
  ],
}

const MOCK_SUGGESTION_DATA = {
  appointmentType: [
    {
      id: "1",
      name: "Eye Exam",
      description: "Test the health of your eye",
    },
    {
      id: "2",
      name: "Follow up",
      description: "See your doctor today",
    },
    {
      id: "3",
      name: "Comprehensive",
      description: "Get detailed eye exam",
    },
    {
      id: "4",
      name: "Contacts Only",
      description: "Get fitted for the right contacts",
    },
  ],
  insuranceCarrier: {
    general: [
      {
        id: "1",
        name: "I'm paying out of my pocket",
      },
      {
        id: "2",
        name: "skip and choose insurance later",
      },
      {
        id: "3",
        name: "Other Insurance",
      },
    ],
    popular: [
      {
        id: "4",
        name: "Aetna",
      },
      {
        id: "5",
        name: "Aetna",
      },
      {
        id: "6",
        name: "Blue Cross Blue Shield",
      },
      {
        id: "7",
        name: "Cigna",
      },
    ],
    all: [
      {
        id: "8",
        name: "Kaiser",
      },
    ],
  },
  filterbyData: [
    {
      name: "Available Today",
      checked: false,
    },
    {
      name: "language",
      checklist: [
        {
          name: "Arabic",
          checked: false,
        },
        {
          name: "Chinese",
          checked: false,
        },
        {
          name: "English",
          checked: false,
        },
        {
          name: "Farsi",
          checked: false,
        },
        {
          name: "French",
          checked: false,
        },
        {
          name: "Spanish",
          checked: false,
        },
        {
          name: "Portuguese",
          checked: false,
        },
        {
          name: "Korean",
          checked: false,
        },
        {
          name: "German",
          checked: false,
        },
        {
          name: "Italian",
          checked: false,
        },
        {
          name: "Indonesian",
          checked: false,
        },
      ],
    },
    {
      name: "Insurance",
      checklist: [
        {
          name: "In Network",
          checked: false,
        },
        {
          name: "Out of Network",
          checked: false,
        },
      ],
    },
    {
      name: "Gender",
      checklist: [
        {
          name: "Male",
          checked: false,
        },
        {
          name: "Female",
          checked: false,
        },
        {
          name: "Non-Binary",
          checked: false,
        },
      ],
    },
  ],
}

const mockSubmitFilter = {
  listOfProvider: [
    {
      providerId: "1",
      address: {
        addressLine1: "51 West 51st Street",
        addressLine2: "Floor 3, Suite 320 Midtown",
        city: "Florida",
        state: "FR",
        zipcode: "54231",
      },
      rating: "5",
      name: "Paul Wagner Md",
      phoneNumber: "(123) 123-4567",
      distance: "10 mi",
      image: "/doctor.png",
      from: "2022-09-19",
      to: "2022-09-24",
      availability: [
        {
          date: "2022-09-19",
          list: [
            {
              time: "11:30am",
              key: 12222,
            },
          ],
        },
        {
          date: "2022-09-20",
          list: [
            {
              time: "08:00am",
              key: 12223,
            },
            {
              time: "10:30am",
              key: 12224,
            },
            {
              time: "11:00am",
              key: 12225,
            },
            {
              time: "12:00pm",
              key: 12226,
            },
            {
              time: "01:00pm",
              key: 12227,
            },
            {
              time: "02:00pm",
              key: 12228,
            },
          ],
        },
        {
          date: "2022-09-21",
          list: [
            {
              time: "08:30am",
              key: 12229,
            },
            {
              time: "10:30am",
              key: 12230,
            },
            {
              time: "11:30am",
              key: 12231,
            },
            {
              time: "12:00pm",
              key: 12232,
            },
            {
              time: "01:30pm",
              key: 12233,
            },
            {
              time: "02:30pm",
              key: 12234,
            },
            {
              time: "03:30pm",
              key: 12235,
            },
            {
              time: "04:30pm",
              key: 12236,
            },
            ,
          ],
        },
        {
          date: "2022-09-22",
          list: [
            {
              time: "09:30am",
              key: 12237,
            },
            {
              time: "11:00am",
              key: 12238,
            },
          ],
        },
        {
          date: "2022-09-23",
          list: [
            {
              time: "09:30am",
              key: 12239,
            },
          ],
        },
        {
          date: "2022-09-24",
          list: [
            {
              time: "09:30am",
              key: 12240,
            },
          ],
        },
      ],
      coordinate: {
        latitude: 32.751204,
        longitude: -117.1641166,
      },
    },
    {
      providerId: "2",
      address: {
        addressLine1: "51 West 51st Street",
        addressLine2: "Floor 3, Suite 320 Midtown",
        city: "Florida",
        state: "FR",
        zipcode: "54231",
      },
      rating: "5",
      name: "Paul Wagner Nd",
      phoneNumber: "(123) 123-4567",
      distance: "10 mi",
      image: "/doctor.png",
      from: "2022-09-19",
      to: "2022-09-24",
      availability: [
        {
          date: "2022-09-19",
          list: [],
        },
        {
          date: "2022-09-20",
          list: [
            {
              time: "08:00am",
              key: 12223,
            },
            {
              time: "10:30am",
              key: 12224,
            },
            {
              time: "11:00am",
              key: 12225,
            },
            {
              time: "12:00pm",
              key: 12226,
            },
            {
              time: "01:00pm",
              key: 12227,
            },
            {
              time: "02:00pm",
              key: 12228,
            },
          ],
        },
        {
          date: "2022-09-21",
          list: [
            {
              time: "08:30am",
              key: 12229,
            },
            {
              time: "10:30am",
              key: 12230,
            },
            {
              time: "11:30am",
              key: 12231,
            },
            {
              time: "12:00pm",
              key: 12232,
            },
            {
              time: "01:30pm",
              key: 12233,
            },
            {
              time: "02:30pm",
              key: 12234,
            },
            {
              time: "03:30pm",
              key: 12235,
            },
            {
              time: "04:30pm",
              key: 12236,
            },
            ,
          ],
        },
        {
          date: "2022-09-22",
          list: [
            {
              time: "09:30am",
              key: 12237,
            },
            {
              time: "11:00am",
              key: 12238,
            },
          ],
        },
        {
          date: "2022-09-23",
          list: [],
        },
        {
          date: "2022-09-24",
          list: [
            {
              time: "09:30am",
              key: 12240,
            },
          ],
        },
      ],
      coordinate: {
        latitude: 32.751204,
        longitude: -117.1641166,
      },
    },
    {
      providerId: "3",
      name: "Paul Wagner Md",
      address: {
        addressLine1: "51 West 51st Street",
        addressLine2: "Floor 3, Suite 320 Midtown",
        city: "Florida",
        state: "FR",
        zipcode: "54231",
      },
      rating: "5",
      phoneNumber: "(123) 123-4567",
      distance: "10 mi",
      image: "/doctor.png",
      from: "2022-09-19",
      to: "2022-09-24",
      availability: [
        {
          date: "2022-09-19",
          list: [
            {
              time: "11:30am",
              key: 12222,
            },
          ],
        },
        {
          date: "2022-09-20",
          list: [
            {
              time: "08:00am",
              key: 12223,
            },
            {
              time: "10:30am",
              key: 12224,
            },
            {
              time: "11:00am",
              key: 12225,
            },
            {
              time: "12:00pm",
              key: 12226,
            },
            {
              time: "01:00pm",
              key: 12227,
            },
            {
              time: "02:00pm",
              key: 12228,
            },
          ],
        },
        {
          date: "2022-09-21",
          list: [
            {
              time: "08:30am",
              key: 12229,
            },
            {
              time: "10:30am",
              key: 12230,
            },
            {
              time: "11:30am",
              key: 12231,
            },
            {
              time: "12:00pm",
              key: 12232,
            },
            {
              time: "01:30pm",
              key: 12233,
            },
            {
              time: "02:30pm",
              key: 12234,
            },
            {
              time: "03:30pm",
              key: 12235,
            },
            {
              time: "04:30pm",
              key: 12236,
            },
            ,
          ],
        },
        {
          date: "2022-09-22",
          list: [
            {
              time: "09:30am",
              key: 12237,
            },
            {
              time: "11:00am",
              key: 12238,
            },
          ],
        },
        {
          date: "2022-09-23",
          list: [
            {
              time: "09:30am",
              key: 12239,
            },
          ],
        },
        {
          date: "2022-09-24",
          list: [],
        },
      ],
      coordinate: {
        latitude: 32.751204,
        longitude: -117.1641166,
      },
    },
  ],
  filterbyData: [
    {
      name: "Available Today",
      checked: false,
    },
    {
      name: "Language",
      checklist: [
        {
          name: "Arabic",
          checked: false,
        },
        {
          name: "Chinese",
          checked: false,
        },
        {
          name: "English",
          checked: false,
        },
        {
          name: "Farsi",
          checked: false,
        },
        {
          name: "French",
          checked: false,
        },
        {
          name: "Spanish",
          checked: false,
        },
        {
          name: "Portuguese",
          checked: false,
        },
        {
          name: "Korean",
          checked: false,
        },
        {
          name: "German",
          checked: false,
        },
        {
          name: "Italian",
          checked: false,
        },
        {
          name: "Indonesian",
          checked: false,
        },
      ],
    },
    {
      name: "Insurance",
      checklist: [
        {
          name: "In Network",
          checked: false,
        },
        {
          name: "Out of Network",
          checked: false,
        },
      ],
    },
    {
      name: "Gender",
      checklist: [
        {
          name: "Male",
          checked: false,
        },
        {
          name: "Female",
          checked: false,
        },
        {
          name: "Non-Binary",
          checked: false,
        },
      ],
    },
  ],
}

defineFeature(feature, (test) => {
	let container;
  const { APPOINTMENT_TEST_ID, SEARCH_PROVIDER_TEST_ID } = constants.TEST_ID
	const mock = new MockAdapter(axios);

	const defaultValidation = () => {
		expect(true).toBeTruthy();
	};

	function createMatchMedia(width) {
		return query => ({
			matches: mediaQuery.match(query, { width }),
			addListener: () => { },
			removeListener: () => { },
		});
	}

  test('EPIC_EPP-45_STORY_EPP-1602 - Verify user should receive an email based on their registered mail-id when user reschedule upcoming appointment list', ({ given, when, and, then }) => {
    given('user launch Patient Portal url', () => {
      defaultValidation()
    });

    when('user is logged in to the application', () => {
      const mockOnLoginClicked = jest.fn((data, route, callback) => {
        callback({
          status: "success",
        });
      });
      act(() => {
        container = render(<Login OnLoginClicked={mockOnLoginClicked} />);
      })
      const usernameField = container.getByLabelText("emailUserLabel")
      const passwordField = container.getByLabelText("passwordLabel");
      act(() => {
        fireEvent.change(usernameField, { target: { value: "wrongUserName" } });
        fireEvent.change(passwordField, { target: { value: "validPassword" } });
      })
      expect(usernameField.value).not.toEqual("validUsername");
      expect(passwordField.value).toEqual("validPassword");
      const login = container.getByRole("button", { name: /Login/i });
      fireEvent.click(login);

      const mock = new MockAdapter(axios);
      const expectedResult = {
        ResponseCode: 2001,
        ResponseType: "failure",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    and('user clicks to “Appointments” menu', async () => {
      defaultValidation()
    });

    then('user navigates to “Appointments” screen', () => {
      defaultValidation()
    });

    and('user lands on \'Appointments\' screen', async () => {
      mock
        .onGet(`${window.location.origin}/api/dummy/appointment/my-appointment/getAllAppointment`)
        .reply(200, userData);
      act(() => {
        container.rerender(
          <Provider store={store}>
            {Appointments.getLayout(<Appointments />)}
          </Provider>
        );
      });
      await waitFor(() => {
        container.getByText(/Upcoming appointments/i)
      })

      expect(container.getByText(/Upcoming appointments/i).textContent).toEqual("Upcoming appointments")
    });

    and('user should see list of upcoming appointment', async () => {
      await waitFor(() => {
        container.getByText(/Upcoming appointments/i)
      })

      expect(container.getByText(/Upcoming appointments/i).textContent).toEqual("Upcoming appointments")
    });

    and('user should see reschedule and cancel each of them', async () => {
      const cancelBtn = await waitFor(() => container.getAllByTestId(TEST_ID.APPOINTMENTS_TEST_ID.cancelAppointmentButton)[0])
      const rescheduleBtn = await waitFor(() => container.getAllByTestId(TEST_ID.APPOINTMENTS_TEST_ID.rescheduleAppointmentButton)[0])
      expect(cancelBtn).toBeInTheDocument()
      expect(rescheduleBtn).toBeInTheDocument()
    });

    and('user clicks on the reschedule an appointment', async () => {
      const rescheduleButtons =await waitFor(() => container.getAllByTestId(TEST_ID.APPOINTMENTS_TEST_ID.rescheduleAppointmentButton))
      act(() => {
        fireEvent.click(rescheduleButtons[0]);
      })
      
      const confirmButton = await waitFor(() => container.getByTestId(TEST_ID.APPOINTMENTS_TEST_ID.confirmRescheduleButton))
      act(() => {
        fireEvent.click(confirmButton);
      })
      
      const mockGeolocation = {
				getCurrentPosition: jest.fn(),
				watchPosition: jest.fn()
			};
			const domain = window.location.origin;
			mock.onGet(`${domain}/api/dummy/appointment/create-appointment/getSugestion`).reply(200, MOCK_SUGGESTION_DATA);
			mock.onPost(`${domain}/api/dummy/appointment/create-appointment/submitFilter`).reply(200, mockSubmitFilter);
			global.navigator.geolocation = mockGeolocation;
			window.matchMedia = createMatchMedia('1920px');
			act(() => {
				container = render(
					<Provider store={store}>
						{Appointment.getLayout(<Appointment />)}
					</Provider>
				);
			})
			await waitFor(() => {
				container.getByText(/City, state, or zip/i);
				expect(container.getByText(/City, state, or zip/i)).toBeInTheDocument();
			});
    });

    and('user view the selected location and able to change', async () => {
      const locationInput = await waitFor(() => container.getByLabelText("City, state, or zip code"))
      act(() => {
        fireEvent.change(locationInput, { target: { value: "Texas" } });
      });
    });

    and('user view the selected Date of the appointment and able to change', async () => {
      const dateInput = await waitFor(() => container.getByLabelText("Date"))
      act(() => {
        fireEvent.change(dateInput, { target: { value: "22-09-2022" } });
      });
    });

    and('user view the selected time-slot and able to change', () => {
      defaultValidation()
    });

    and('user view the selected purpose of visit and able to change', async () => {    
      const purposeInput = await waitFor(() => container.getByTestId("select-purposes-of-visit"))
      act(() => {
        fireEvent.change(purposeInput, { target: { value: "Eye Exam" } });
      });
    });

    and('user view the selected Insurance Career and able to change', async () => {    
      const insuranceInput = await waitFor(() => container.getByLabelText("Insurance Carrier"))
      act(() => {
        fireEvent.change(insuranceInput, { target: { value: "Aetna" } });
      });

      const timeslotButton = await waitFor(() => container.getAllByTestId(APPOINTMENT_TEST_ID.DIALOG_VIEW_ALL.timeslotButton))
      act(() => {
        fireEvent.click(timeslotButton[0])
      })
    });

    then('user navigates to review the updated details', async () => {
      mock
        .onGet(`${window.location.origin}/api/dummy/appointment/my-appointment/getAllAppointment`)
        .reply(200, userData);
      act(() => {
        container.rerender(
          <Provider store={store}>
            {Appointments.getLayout(<Appointments />)}
          </Provider>
        );
      });
      await waitFor(() => {
        container.getByText(/Upcoming appointments/i)
      })

      expect(container.getByText(/Upcoming appointments/i).textContent).toEqual("Upcoming appointments")
    });

    and('user view an option to reschedule the appointment', () => {

    });

    and('user prompted with a confirmation message “Are you sure you want to reschedule?” with option to confirm and deny', () => {

    });

    and('user clicks on the confirm botton', () => {

    });

    and('user receive an email regarding the reschedule', () => {

    });

    and('user navigated to \'Appointments\' screen to see the updated details under upcoming appointments', () => {

    });
  });

  test('EPIC_EPP-45_STORY_EPP-1602 - Verify user should receive an text message based on their registered phone number when user reshedulle upcoming appointment list', ({ given, when, and, then }) => {
    given('user launch Patient Portal url', () => {

    });

    when('user is logged in to the application', () => {

    });

    and('user clicks to “Appointments” menu', () => {

    });

    then('user navigates to “Appointments” screen', () => {

    });

    and('user lands on \'Appointments\' screen', () => {

    });

    and('user should see list of upcoming appointment', () => {

    });

    and('user should see reschedule and cancel each of them', () => {

    });

    and('user clicks on the reschedule an appointment', () => {

    });

    and('user view the selected location and able to change', () => {

    });

    and('user view the selected Date of the appointment and able to change', () => {

    });

    and('user view the selected time-slot and able to change', () => {

    });

    and('user view the selected purpose of visit and able to change', () => {    

    });

    and('user view the selected Insurance Career and able to change', () => {    

    });

    then('user navigates to review the updated details', () => {

    });

    and('user view an option to reschedule the appointment', () => {

    });

    and('user prompted with a confirmation message “Are you sure you want to reschedule?” with option to confirm and deny', () => {

    });

    and('user clicks on the confirm botton', () => {

    });

    and('user receive the text message regarding the rescheduled Appointment', () => {

    });

    and('user navigated to \'Appointments\' screen to see the updated details under upcoming appointments', () => {

    });
  });

  test('EPIC_EPP-45_STORY_EPP-1602 - Verify the user is able to see the "confirm and deny" option', ({ given, when, and, then }) => {
    given('user launch Patient Portal url', () => {

    });

    when('user is logged in to the application', () => {

    });

    and('user clicks to “Appointments” menu', () => {

    });

    then('user navigates to “Appointments” screen', () => {

    });

    and('user lands on \'Appointments\' screen', () => {

    });

    and('user should see list of upcoming appointment', () => {

    });

    and('user should see reschedule and cancel each of them', () => {

    });

    and('user clicks on the reschedule an appointment', () => {

    });

    and('user view the selected location and able to change', () => {

    });

    and('user view the selected Date of the appointment and able to change', () => {

    });

    and('user view the selected time-slot and able to change', () => {

    });

    and('user view the selected purpose of visit and able to change', () => {    

    });

    and('user view the selected Insurance Career and able to change', () => {    

    });

    then('user navigates to review the updated details', () => {

    });

    and('user view an option to reschedule the appointment', () => {

    });

    and('user prompted with a confirmation message “Are you sure you want to reschedule?” with an option to confirm and deny', () => {

    });
  });

  test('EPIC_EPP-45_STORY_EPP-1602 - Verify user should be able to deny and gets redirected back to the “Appointments” screen when the user reschedules the upcoming appointment list', ({ given, when, and, then }) => {
    given('user launch Patient Portal url', () => {

    });

    when('user is logged in to the application', () => {

    });

    and('user clicks to “Appointments” menu', () => {

    });

    then('user navigates to “Appointments” screen', () => {

    });

    and('user lands on \'Appointments\' screen', () => {

    });

    and('user should see list of upcoming appointment', () => {

    });

    and('user should see reschedule and cancel each of them', () => {

    });

    and('user clicks on the reschedule an appointment', () => {

    });

    and('user view the selected location and able to change', () => {

    });

    and('user view the selected Date of the appointment and able to change', () => {

    });

    and('user view the selected time-slot and able to change', () => {

    });

    and('user view the selected purpose of visit and able to change', () => {    

    });

    and('user view the selected Insurance Career and able to change', () => {    

    });

    then('user navigates to review the updated details', () => {

    });

    and('user view an option to reschedule the appointment', () => {

    });

    and('user prompted with a confirmation message “Are you sure you want to reschedule?” with option to confirm and deny', () => {

    });

    and('user clicks on the Deny button', () => {

    });

    and('user navigated to the \'Appointments\' screen to see the updated details under upcoming appointments', () => {

    });
  });

  test('EPIC_EPP-45_STORY_EPP-1602 - Verify User should not see the any errors script when user clicks F12 on the console', ({ given, when, and, then }) => {
    given('user launch Patient Portal url', () => {

    });

    when('user is logged in to the application', () => {

    });

    and('user clicks to “Appointments” menu', () => {

    });

    then('user navigates to “Appointments” screen', () => {

    });

    and('user lands on \'Appointments\' screen', () => {

    });

    and('user should see list of upcoming appointment', () => {

    });

    and('user should see reschedule and cancel each of them', () => {

    });

    and('user clicks on the reschedule an appointment', () => {

    });

    and('user view the selected location and able to change', () => {

    });

    and('user view the selected Date of the appointment and able to change', () => {

    });

    and('user view the selected time-slot and able to change', () => {

    });

    and('user view the selected purpose of visit and able to change', () => {    

    });

    and('user view the selected Insurance Career and able to change', () => {    

    });

    then('user navigates to review the updated details', () => {

    });

    and('user view an option to reschedule the appointment', () => {

    });

    and('user prompted with a confirmation message “Are you sure you want to reschedule?” with option to confirm and deny', () => {

    });

    and('user clicks on the confirm botton', () => {

    });

    and('user receive an email regarding the reschedule', () => {

    });

    and('user navigated to \'Appointments\' screen to see the updated details under upcoming appointments', () => {

    });

    when(/^user clicks on F(\d+) on the console$/, (arg0) => {

    });

    then('user should not to see any errors script', () => {

    });
  });

  test('EPIC_EPP-45_STORY_EPP-1602 - Verify user able to see “Are you sure you want to reschedule?” as a confirmation message', ({ given, when, and, then }) => {
    given('user launch Patient Portal url', () => {

    });

    when('user is logged in to the application', () => {

    });

    and('user clicks to “Appointments” menu', () => {

    });

    then('user navigates to “Appointments” screen', () => {

    });

    and('user lands on \'Appointments\' screen', () => {

    });

    and('user should see list of upcoming appointment', () => {

    });

    and('user should see reschedule and cancel each of them', () => {

    });

    and('user clicks on the reschedule an appointment', () => {

    });

    and('user view the selected location and able to change', () => {

    });

    and('user view the selected Date of the appointment and able to change', () => {

    });

    and('user view the selected time-slot and able to change', () => {

    });

    and('user view the selected purpose of visit and able to change', () => {    

    });

    and('user view the selected Insurance Career and able to change', () => {    

    });

    then('user navigates to review the updated details', () => {

    });

    and('user view an option to reschedule the appointment', () => {

    });

    and('user prompted with a confirmation message “Are you sure you want to reschedule?” with option to confirm and deny', () => {

    });

    and('user clicks on the confirm botton', () => {

    });

    and('user receive an email and text message regarding the rescheduled Appointment', () => {

    });

    when('user selected on their preferred method of communication', () => {     

    });

    and('user navigated to \'Appointments\' screen to see the updated details under upcoming appointments', () => {

    });
  });

  test('EPIC_EPP-45_STORY_EPP-1602 - Verify the user is able to see the "confirm and deny" option', ({ given, when, and, then }) => {
    given('user launch Patient Portal url', () => {

    });

    when('user is logged in to the application', () => {

    });

    and('user clicks to “Appointments” menu', () => {

    });

    then('user navigates to “Appointments” screen', () => {

    });

    and('user lands on \'Appointments\' screen', () => {

    });

    and('user should see list of upcoming appointment', () => {

    });

    and('user should see reschedule and cancel each of them', () => {

    });

    and('user clicks on the reschedule an appointment', () => {

    });

    and('user view the selected location and able to change', () => {

    });

    and('user view the selected Date of the appointment and able to change', () => {

    });

    and('user view the selected time-slot and able to change', () => {

    });

    and('user view the selected purpose of visit and able to change', () => {    

    });

    and('user view the selected Insurance Career and able to change', () => {    

    });

    then('user navigates to review the updated details', () => {

    });

    and('user view an option to reschedule the appointment', () => {

    });

    and('user prompted with a confirmation message “Are you sure you want to reschedule?” with an option to confirm and deny', () => {

    });
  });

  test('EPIC_EPP-45_STORY_EPP-1602 - Verify user should be able to deny and gets redirected back to the “Appointments” screen when the user reschedules the upcoming appointment list', ({ given, when, and, then }) => {
    given('user launch Patient Portal url', () => {

    });

    when('user is logged in to the application', () => {

    });

    and('user clicks to “Appointments” menu', () => {

    });

    then('user navigates to “Appointments” screen', () => {

    });

    and('user lands on \'Appointments\' screen', () => {

    });

    and('user should see list of upcoming appointment', () => {

    });

    and('user should see reschedule and cancel each of them', () => {

    });

    and('user clicks on the reschedule an appointment', () => {

    });

    and('user view the selected location and able to change', () => {

    });

    and('user view the selected Date of the appointment and able to change', () => {

    });

    and('user view the selected time-slot and able to change', () => {

    });

    and('user view the selected purpose of visit and able to change', () => {    

    });

    and('user view the selected Insurance Career and able to change', () => {    

    });

    then('user navigates to review the updated details', () => {

    });

    and('user view an option to reschedule the appointment', () => {

    });

    and('user prompted with a confirmation message “Are you sure you want to reschedule?” with option to confirm and deny', () => {

    });

    and('user clicks on the Deny button', () => {

    });

    and('user navigated to the \'Appointments\' screen to see the updated details under upcoming appointments', () => {

    });
  });

  test('EPIC_EPP-45_STORY_EPP-1602 - Negative Test Cases-Verify user should see the error message when the internet service is unavailable', ({ given, when, and, then }) => {
    given('user launch Patient Portal url', () => {

    });

    when('user is logged in to the application', () => {

    });

    and('user clicks to “Appointments” menu', () => {

    });

    then('user navigates to “Appointments” screen', () => {

    });

    and('user lands on \'Appointments\' screen', () => {

    });

    and('user should see list of upcoming appointment', () => {

    });

    and('user should see reschedule and cancel each of them', () => {

    });

    and('user clicks on the reschedule an appointment', () => {

    });

    and('user view the selected location and able to change', () => {

    });

    and('user view the selected Date of the appointment and able to change', () => {

    });

    and('user view the selected time-slot and able to change', () => {

    });

    and('user view the selected purpose of visit and able to change', () => {    

    });

    and('user view the selected Insurance Career and able to change', () => {    

    });

    then('user navigates to review the updated details', () => {

    });

    and('user view an option to reschedule the appointment', () => {

    });

    and('user prompted with a confirmation message “Are you sure you want to reschedule?” with option to confirm and deny', () => {

    });

    and('user clicks on the confirm botton', () => {

    });

    and('user receive an email regarding the reschedule', () => {

    });

    and('user navigated to \'Appointments\' screen to see the updated details under upcoming appointments', () => {

    });

    and('the internet service is unavailable', () => {

    });

    then('user should see the appropriate error message', () => {

    });
  });

  test('EPIC_EPP-45_STORY_EPP-1602 - Negative Test Cases-Verify  when the service is unavailable', ({ given, when, and, then }) => {
    given('user launch Patient Portal url', () => {

    });

    when('user is logged in to the application', () => {

    });

    and('user clicks to “Appointments” menu', () => {

    });

    then('user navigates to “Appointments” screen', () => {

    });

    and('user lands on \'Appointments\' screen', () => {

    });

    and('user should see list of upcoming appointment', () => {

    });

    and('user should see reschedule and cancel each of them', () => {

    });

    and('user clicks on the reschedule an appointment', () => {

    });

    and('user view the selected location and able to change', () => {

    });

    and('user view the selected Date of the appointment and able to change', () => {

    });

    and('user view the selected time-slot and able to change', () => {

    });

    and('user view the selected purpose of visit and able to change', () => {    

    });

    and('user view the selected Insurance Career and able to change', () => {    

    });

    then('user navigates to review the updated details', () => {

    });

    and('user view an option to reschedule the appointment', () => {

    });

    and('user prompted with a confirmation message “Are you sure you want to reschedule?” with option to confirm and deny', () => {

    });

    and('user clicks on the confirm botton', () => {

    });

    and('user receive an email regarding the reschedule', () => {

    });

    and('user navigated to \'Appointments\' screen to see the updated details under upcoming appointments', () => {

    });

    and('the service is unavailable', () => {

    });

    then('user should see the appropriate error message', () => {

    });
  });

  test('EPIC_EPP-45_STORY_EPP-1602 - Negative Test Cases-Verify User navigates to “Appointments” screen when user refresh the page', ({ given, when, and, then }) => {
    given('user launch Patient Portal url', () => {

    });

    when('user is logged in to the application', () => {

    });

    and('user clicks to “Appointments” menu', () => {

    });

    then('user navigates to “Appointments” screen', () => {

    });

    and('user lands on \'Appointments\' screen', () => {

    });

    and('user should see list of upcoming appointment', () => {

    });

    and('user should see reschedule and cancel each of them', () => {

    });

    and('user clicks on the reschedule an appointment', () => {

    });

    and('user view the selected location and able to change', () => {

    });

    and('user view the selected Date of the appointment and able to change', () => {

    });

    and('user view the selected time-slot and able to change', () => {

    });

    and('user view the selected purpose of visit and able to change', () => {    

    });

    and('user view the selected Insurance Career and able to change', () => {    

    });

    then('user navigates to review the updated details', () => {

    });

    and('user view an option to reschedule the appointment', () => {

    });

    and('user prompted with a confirmation message “Are you sure you want to reschedule?” with option to confirm and deny', () => {

    });

    and('user clicks on the confirm botton', () => {

    });

    and('user receive an email regarding the reschedule', () => {

    });

    and('user navigated to \'Appointments\' screen to see the updated details under upcoming appointments', () => {

    });

    when('User refresh the page', () => {

    });

    then('User navigates to “Appointments” screen', () => {

    });
  });

  test('EPIC_EPP-45_STORY_EPP-1602 - Verify User should not see the any errors script when user clicks F12 on the console', ({ given, when, and, then }) => {
    given('user launch Patient Portal url', () => {

    });

    when('user is logged in to the application', () => {

    });

    and('user clicks to “Appointments” menu', () => {

    });

    then('user navigates to “Appointments” screen', () => {

    });

    and('user lands on \'Appointments\' screen', () => {

    });

    and('user should see list of upcoming appointment', () => {

    });

    and('user should see reschedule and cancel each of them', () => {

    });

    and('user clicks on the reschedule an appointment', () => {

    });

    and('user view the selected location and able to change', () => {

    });

    and('user view the selected Date of the appointment and able to change', () => {

    });

    and('user view the selected time-slot and able to change', () => {

    });

    and('user view the selected purpose of visit and able to change', () => {    

    });

    and('user view the selected Insurance Career and able to change', () => {    

    });

    then('user navigates to review the updated details', () => {

    });

    and('user view an option to reschedule the appointment', () => {

    });

    and('user prompted with a confirmation message “Are you sure you want to reschedule?” with option to confirm and deny', () => {

    });

    and('user clicks on the confirm botton', () => {

    });

    and('user receive an email regarding the reschedule', () => {

    });

    and('user navigated to \'Appointments\' screen to see the updated details under upcoming appointments', () => {

    });

    when(/^user clicks on F(\d+) on the console$/, (arg0) => {

    });

    then('user should not to see any errors script', () => {

    });
  });
})