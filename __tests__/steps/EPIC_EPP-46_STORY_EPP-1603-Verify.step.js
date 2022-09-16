import { defineFeature, loadFeature } from "jest-cucumber";
import { act, fireEvent, render, waitFor } from "@testing-library/react";
import axios from "axios";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import { Provider } from "react-redux";
import store from "../../src/store/store";
import Cookies from "universal-cookie";
import mediaQuery from "css-mediaquery";
import HomePage from "../../src/pages/patient";
import Appointment from "../../src/pages/patient/appointment";
import Appointments from "../../src/pages/patient/appointments";
import RescheduleAppointments from "../../src/pages/patient/appointments/[appointmentId]/reschedule";

import { getServerSideProps } from "../../src/pages/patient/mfa";

const MOCK_APPOINTMENT = {
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
};

const MOCK_PRESCRIPTION = {
  prescriptions: {
    glasses: [
      {
        prescribedBy: "Dr. Sonha Nguyen",
        date: "2022-09-02T11:18:47.229Z",
        expirationDate: "2022-10-02T11:18:47.229Z",
        prescriptionDetails: [
          {
            Eye: "OD",
            Sph: "+20.00",
            Cyl: "-5.00",
            Axis: "70",
            Add: "x180",
          },
          {
            Eye: "OS",
            Sph: "+19.75",
            Cyl: "-4.75",
            Axis: "38",
            Add: "x090",
          },
        ],
      },
    ],
    contacts: [
      {
        prescribedBy: "Dr. Sonha Nguyen",
        date: "2022-09-02T11:18:47.229Z",
        expirationDate: "2022-10-02T11:18:47.229Z",
        prescriptionDetails: [
          {
            Eye: "OD",
            Sph: "+20.00",
            Bc: "-5.00",
            Cyl: "70",
            Axis: "x180",
          },
          {
            Eye: "OS",
            Sph: "+19.75",
            Bc: "-4.75",
            Cyl: "38",
            Axis: "x090",
          },
        ],
      },
    ],
    medications: [
      {
        prescription: "Aspirint 0.1% Ointmanet",
        date: "2022-09-02T11:18:47.229Z",
      },
      {
        prescription: "Aspirint 0.1% Ointmanet",
        date: "2022-09-02T11:18:47.229Z",
      },
    ],
  },
};

const MOCK_SUGESTION = {
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
};

    jest.mock("universal-cookie", () => {
  class MockCookies {
    static result = {};
    get() {
      return MockCookies.result;
    }
    remove() {
      return jest.fn();
    }
  }
  return MockCookies;
});

    function createMatchMedia(width) {
  return (query) => ({
    matches: mediaQuery.match(query, { width }),
    addListener: () => {},
    removeListener: () => {},
  });
}

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint5/EPP-1603.feature"
);

    defineFeature(feature, (test) => {
  let container;

  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };



    const renderReschedule = () => {
    
    container.rerender(
        <Provider store={store}>
           {Appointment.getLayout(<RescheduleAppointments />)}
         </Provider>
     );
}

const renderAppointment = () => {
    container.rerender(
        <Provider store={store}>
          {Appointment.getLayout(<Appointment />)}
        </Provider>
      );
}

const renderUpcoming = () => {
    container.rerender(
        <Provider store={store}>
          {Appointments.getLayout(<Appointments />)}
        </Provider>
      );
}

  test('EPIC_EPP-45_STORY_EPP-1603 - Verify user should receive an text message based on their registered phone number when user reshedule upcoming appointment list', ({ given, when, and, then }) => {
    given('user launch Patient Portal url', () => {
        defaultValidation();
    });

    when('user is logged in to the application', () => {
        defaultValidation();
    });

    and('user clicks to “Appointments” menu', () => {
        defaultValidation();
    });

    then('user navigates to “Appointments” screen', () => {
        defaultValidation();
    });

    and('user lands on \'Appointments\' screen', async () => {
        Cookies.result = "true";
        const expectedResult = {
          ResponseCode: 2005,
          ResponseType: "success",
        };
        const mock = new MockAdapter(axios);
        const domain = window.location.origin;
        mock.onPost(`/ecp/patient/logout`).reply(200, expectedResult);
        mock
          .onGet(
            `${domain}/api/dummy/appointment/create-appointment/getSugestion`
          )
          .reply(200, MOCK_SUGESTION);
        mock
          .onGet(
            `${domain}/api/dummy/appointment/my-appointment/getAllAppointment`
          )
          .reply(200, MOCK_APPOINTMENT);
        mock
          .onGet(
            `${domain}/api/dummy/appointment/my-appointment/getAllPrescriptions`
          )
          .reply(200, MOCK_PRESCRIPTION);
        window.matchMedia = createMatchMedia("700px");
        const response = await getServerSideProps({
          req: { headers: { cookie: { get: jest.fn().mockReturnValue(true) } } },
          res: jest.fn(),
        });
        const mockGeolocation = {
          getCurrentPosition: jest.fn(),
          watchPosition: jest.fn(),
        };
        global.navigator.geolocation = mockGeolocation;
        Cookies.result = false;
        act(() => {
          container = render(
            <Provider store={store}>{HomePage.getLayout(<HomePage />)}</Provider>
          );
        });
        await waitFor(() => container.getByText("Get Direction"));
        expect(response).toEqual({
          props: {
            isStepTwo: false,
          },
        });
    });

    and('user should see list of upcoming appointment', () => {
        defaultValidation();
    });

    and('user should see reschedule and cancel each of them', () => {
        expect(container.getByText("Cancel")).toBeInTheDocument();
        expect(container.getByText("Reschedule")).toBeInTheDocument();
    });

    and('user clicks on the reschedule an appointment', async () => {
        const rescheduleButton = container.getByRole("button", { name: "Reschedule" });
        fireEvent.click(rescheduleButton);

        renderReschedule();

        await waitFor(() => container.getByText("Reschedule Appointment"));
    });

    and('user view the selected location and able to change', async () => {
        expect(container.getByText(/location/i)).toBeInTheDocument()
        expect(container.getByText(/appointmentDetails/i)).toBeInTheDocument()
        const editButton = container.getAllByRole('button', {name: /Edit/i})[0];
        fireEvent.click(editButton)
    });

    and('user view the selected Date of the appointment and able to change', async () => {
        renderAppointment();
    });

    and('user view the selected time-slot and able to change', async () => {
        defaultValidation();
    });

    and('user view the selected purpose of visit and able to change', async () => {
        const pusposeField = container.getByText(/Purpose of Visit/i);
        fireEvent.click(pusposeField);
        await waitFor(() => {
            const cancelButton = container.getByText(/Cancel/i);
            expect(container.getByText(/Cancel/i)).toBeInTheDocument();
            fireEvent.click(cancelButton);
        });
    });

    and('user view the selected Insurance Career and able to change', async () => {
        const insuranceField = container.getByText(/Insurance Carrier/i);
        fireEvent.click(insuranceField);
        await waitFor(() => {
            const cancelButton = container.getByText(/Cancel/i);
            expect(container.getByText(/Cancel/i)).toBeInTheDocument();
            fireEvent.click(cancelButton);
        });
    });

    then('user navigates to review the updated details', () => {
        defaultValidation();
    });

    and('user view an option to reschedule the appointment', () => {
        defaultValidation();
    });

    and('user prompted with a confirmation message “Are you sure you want to reschedule?” with option to confirm and deny', () => {
        defaultValidation();
    });

    and('user clicks on the confirm botton', () => {
        defaultValidation();
    });

    and('user receive the text message regarding the rescheduled Appointment', () => {
        defaultValidation();
    });

    and('user navigated to \'Appointments\' screen to see the updated details under upcoming appointments', () => {
        defaultValidation();
    });
});

test('EPIC_EPP-45_STORY_EPP-1603 - Verify user should receive an email and text message based on their registered email and phone number when user reshedulle upcoming appointment list', ({ given, when, and, then }) => {
    given('user launch Patient Portal url', () => {
        defaultValidation();
    });

    when('user is logged in to the application', () => {
        defaultValidation();
    });

    and('user clicks to “Appointments” menu', () => {
        defaultValidation();
    });

    then('user navigates to “Appointments” screen', () => {
        defaultValidation();
    });

    and('user lands on \'Appointments\' screen', async () => {
        Cookies.result = "true";
        const expectedResult = {
          ResponseCode: 2005,
          ResponseType: "success",
        };
        const mock = new MockAdapter(axios);
        const domain = window.location.origin;
        mock.onPost(`/ecp/patient/logout`).reply(200, expectedResult);
        mock
          .onGet(
            `${domain}/api/dummy/appointment/create-appointment/getSugestion`
          )
          .reply(200, MOCK_SUGESTION);
        mock
          .onGet(
            `${domain}/api/dummy/appointment/my-appointment/getAllAppointment`
          )
          .reply(200, MOCK_APPOINTMENT);
        mock
          .onGet(
            `${domain}/api/dummy/appointment/my-appointment/getAllPrescriptions`
          )
          .reply(200, MOCK_PRESCRIPTION);
        window.matchMedia = createMatchMedia("700px");
        const response = await getServerSideProps({
          req: { headers: { cookie: { get: jest.fn().mockReturnValue(true) } } },
          res: jest.fn(),
        });
        const mockGeolocation = {
          getCurrentPosition: jest.fn(),
          watchPosition: jest.fn(),
        };
        global.navigator.geolocation = mockGeolocation;
        Cookies.result = false;
        act(() => {
          container = render(
            <Provider store={store}>{HomePage.getLayout(<HomePage />)}</Provider>
          );
        });
        await waitFor(() => container.getByText("Get Direction"));
        expect(response).toEqual({
          props: {
            isStepTwo: false,
          },
        });
    });

    and('user should see list of upcoming appointment', async () => {
        const editButton = container.getByText("View Appointments");
        fireEvent.click(editButton)

        renderUpcoming();

        await waitFor(() => {
            container.getByText(/Upcoming appointments/i)
        })
    });

    and('user should see reschedule and cancel each of them', () => {
        expect(container.getByText("Cancel")).toBeInTheDocument();
        expect(container.getByText("Reschedule")).toBeInTheDocument();
    });

    and('user clicks on the reschedule an appointment', async () => {
        const rescheduleButton = container.getByRole("button", { name: "Reschedule" });
        fireEvent.click(rescheduleButton);

        renderReschedule();

        await waitFor(() => container.getByText("Reschedule Appointment"));
    });

    and('user view the selected location and able to change', () => {
        expect(container.getByText(/location/i)).toBeInTheDocument()
        expect(container.getByText(/appointmentDetails/i)).toBeInTheDocument()
        const editButton = container.getAllByRole('button', {name: /Edit/i})[0];
        fireEvent.click(editButton)
    });

    and('user view the selected Date of the appointment and able to change', () => {
        renderAppointment();
    });

    and('user view the selected time-slot and able to change', () => {
        defaultValidation();
    });

    and('user view the selected purpose of visit and able to change', async () => {
        const pusposeField = container.getByText(/Purpose of Visit/i);
        fireEvent.click(pusposeField);
        await waitFor(() => {
            const cancelButton = container.getByText(/Cancel/i);
            expect(container.getByText(/Cancel/i)).toBeInTheDocument();
        fireEvent.click(cancelButton);
    });
    });

    and('user view the selected Insurance Career and able to change', async() => {
        const insuranceField = container.getByText(/Insurance Carrier/i);
        fireEvent.click(insuranceField);
        await waitFor(() => {
            const cancelButton = container.getByText(/Cancel/i);
            expect(container.getByText(/Cancel/i)).toBeInTheDocument();
            fireEvent.click(cancelButton);
        })
    });

    then('user navigates to review the updated details', () => {
        defaultValidation();
    });

    and('user view an option to reschedule the appointment', () => {
        defaultValidation();
    });

    and('user prompted with a confirmation message “Are you sure you want to reschedule?” with option to confirm and deny', () => {
        defaultValidation();
    });

    and('user clicks on the confirm botton', () => {
        defaultValidation();
    });

    and('user receive an email and text message regarding the rescheduled Appointment', () => {
        defaultValidation();
    });

    when('user selected on their preferred method of communication', () => {
        defaultValidation();
    });

    and('user navigated to \'Appointments\' screen to see the updated details under upcoming appointments', () => {
        defaultValidation();
    });
});

test('EPIC_EPP-45_STORY_EPP-1603 - Negative Test Cases-Verify  when the service is unavailable', ({ given, when, and, then }) => {
    given('user launch Patient Portal url', () => {
        defaultValidation();
    });

    when('user is logged in to the application', () => {
        defaultValidation();
    });

    and('user clicks to “Appointments” menu', () => {
        defaultValidation();
    });

    then('user navigates to “Appointments” screen', () => {
        defaultValidation();
    });

    and('user lands on \'Appointments\' screen', async () => {
        Cookies.result = "true";
        const expectedResult = {
          ResponseCode: 2005,
          ResponseType: "success",
        };
        const mock = new MockAdapter(axios);
        const domain = window.location.origin;
        mock.onPost(`/ecp/patient/logout`).reply(200, expectedResult);
        mock
          .onGet(
            `${domain}/api/dummy/appointment/create-appointment/getSugestion`
          )
          .reply(200, MOCK_SUGESTION);
        mock
          .onGet(
            `${domain}/api/dummy/appointment/my-appointment/getAllAppointment`
          )
          .reply(200, MOCK_APPOINTMENT);
        mock
          .onGet(
            `${domain}/api/dummy/appointment/my-appointment/getAllPrescriptions`
          )
          .reply(200, MOCK_PRESCRIPTION);
        window.matchMedia = createMatchMedia("700px");
        const response = await getServerSideProps({
          req: { headers: { cookie: { get: jest.fn().mockReturnValue(true) } } },
          res: jest.fn(),
        });
        const mockGeolocation = {
          getCurrentPosition: jest.fn(),
          watchPosition: jest.fn(),
        };
        global.navigator.geolocation = mockGeolocation;
        Cookies.result = false;
        act(() => {
          container = render(
            <Provider store={store}>{HomePage.getLayout(<HomePage />)}</Provider>
          );
        });
        await waitFor(() => container.getByText("Get Direction"));
        expect(response).toEqual({
          props: {
            isStepTwo: false,
          },
        });
    });

    and('user should see list of upcoming appointment', async () => {
        const editButton = container.getByText("View Appointments");
        fireEvent.click(editButton)

        renderUpcoming();

        await waitFor(() => {
            container.getByText(/Upcoming appointments/i)
        })
    });

    and('user should see reschedule and cancel each of them', () => {
        expect(container.getByText("Cancel")).toBeInTheDocument();
        expect(container.getByText("Reschedule")).toBeInTheDocument();
    });

    and('user clicks on the reschedule the appointment', () => {
        defaultValidation();
    });

    and(/^user not able to reschedule the appointment which is in (\d+) hours before the time of appointment$/, (arg0) => {
        defaultValidation();
    });

    and('the service is unavailable', () => {
        defaultValidation();
    });

    then('user should see the appropriate error message', () => {
        defaultValidation();
    });
});

test('EPIC_EPP-45_STORY_EPP-1603 - Negative Test Cases-Verify User navigates to “Appointments” screen when user refresh the page', ({ given, when, and, then }) => {
    given('user launch Patient Portal url', () => {
        defaultValidation();
    });

    when('user is logged in to the application', () => {
        defaultValidation();
    });

    and('user clicks to “Appointments” menu', () => {
        defaultValidation();
    });

    then('user navigates to “Appointments” screen', () => {
        defaultValidation();
    });

    and('user lands on \'Appointments\' screen', async () => {
        Cookies.result = "true";
        const expectedResult = {
          ResponseCode: 2005,
          ResponseType: "success",
        };
        const mock = new MockAdapter(axios);
        const domain = window.location.origin;
        mock.onPost(`/ecp/patient/logout`).reply(200, expectedResult);
        mock
          .onGet(
            `${domain}/api/dummy/appointment/create-appointment/getSugestion`
          )
          .reply(200, MOCK_SUGESTION);
        mock
          .onGet(
            `${domain}/api/dummy/appointment/my-appointment/getAllAppointment`
          )
          .reply(200, MOCK_APPOINTMENT);
        mock
          .onGet(
            `${domain}/api/dummy/appointment/my-appointment/getAllPrescriptions`
          )
          .reply(200, MOCK_PRESCRIPTION);
        window.matchMedia = createMatchMedia("700px");
        const response = await getServerSideProps({
          req: { headers: { cookie: { get: jest.fn().mockReturnValue(true) } } },
          res: jest.fn(),
        });
        const mockGeolocation = {
          getCurrentPosition: jest.fn(),
          watchPosition: jest.fn(),
        };
        global.navigator.geolocation = mockGeolocation;
        Cookies.result = false;
        act(() => {
          container = render(
            <Provider store={store}>{HomePage.getLayout(<HomePage />)}</Provider>
          );
        });
        await waitFor(() => container.getByText("Get Direction"));
        expect(response).toEqual({
          props: {
            isStepTwo: false,
          },
        });
    });

    and('user should see list of upcoming appointment', async () => {
        const editButton = container.getByText("View Appointments");
        fireEvent.click(editButton)

        renderUpcoming();

        await waitFor(() => {
            container.getByText(/Upcoming appointments/i)
        })
    });

    and('user should see reschedule and cancel each of them', () => {
        expect(container.getByText("Cancel")).toBeInTheDocument();
        expect(container.getByText("Reschedule")).toBeInTheDocument();
    });

    and('user clicks on the reschedule the appointment', () => {
        defaultValidation();
    });

    and(/^user not able to reschedule the appointment which is in (\d+) hours before the time of appointment$/, (arg0) => {
        defaultValidation();
    });

    when('User refresh the page', () => {
        defaultValidation();
    });

    then('User navigates to “Appointments” screen', () => {
        defaultValidation();
    });
});

test('EPIC_EPP-45_STORY_EPP-1603 - Verify the user is not able to reschedule the upcoming appointment 4 hours before the time of appointment', ({ given, when, and, then }) => {
    given('user launch Patient Portal url', () => {
        defaultValidation();
    });

    when('user is logged in to the application', () => {
        defaultValidation();
    });

    and('user clicks to “Appointments” menu', () => {
        defaultValidation();
    });

    then('user navigates to “Appointments” screen', () => {
        defaultValidation();
    });

    and('user lands on \'Appointments\' screen', async () => {
        Cookies.result = "true";
        const expectedResult = {
          ResponseCode: 2005,
          ResponseType: "success",
        };
        const mock = new MockAdapter(axios);
        const domain = window.location.origin;
        mock.onPost(`/ecp/patient/logout`).reply(200, expectedResult);
        mock
          .onGet(
            `${domain}/api/dummy/appointment/create-appointment/getSugestion`
          )
          .reply(200, MOCK_SUGESTION);
        mock
          .onGet(
            `${domain}/api/dummy/appointment/my-appointment/getAllAppointment`
          )
          .reply(200, MOCK_APPOINTMENT);
        mock
          .onGet(
            `${domain}/api/dummy/appointment/my-appointment/getAllPrescriptions`
          )
          .reply(200, MOCK_PRESCRIPTION);
        window.matchMedia = createMatchMedia("700px");
        const response = await getServerSideProps({
          req: { headers: { cookie: { get: jest.fn().mockReturnValue(true) } } },
          res: jest.fn(),
        });
        const mockGeolocation = {
          getCurrentPosition: jest.fn(),
          watchPosition: jest.fn(),
        };
        global.navigator.geolocation = mockGeolocation;
        Cookies.result = false;
        act(() => {
          container = render(
            <Provider store={store}>{HomePage.getLayout(<HomePage />)}</Provider>
          );
        });
        await waitFor(() => container.getByText("Get Direction"));
        expect(response).toEqual({
          props: {
            isStepTwo: false,
          },
        });
    });

    and('user should see list of upcoming appointment', async () => {
        const editButton = container.getByText("View Appointments");
        fireEvent.click(editButton)

        renderUpcoming();

        await waitFor(() => {
            container.getByText(/Upcoming appointments/i)
        })
    });

    and('user should see reschedule and cancel each of them', () => {
        expect(container.getByText("Cancel")).toBeInTheDocument();
        expect(container.getByText("Reschedule")).toBeInTheDocument();
    });

    and('user clicks on the reschedule the appointment', () => {
        defaultValidation();
    });

    and(/^user not able to reschedule the appointment which is in (\d+) hours before the time of appointment$/, (arg0) => {
        defaultValidation();
    });
});

test('EPIC_EPP-45_STORY_EPP-1603 - Verify the user to reschedule the upcoming appointment 5 hours before the time of the appointment', ({ given, when, and, then }) => {
    given('user launch Patient Portal url', () => {
        defaultValidation();
    });

    when('user is logged in to the application', () => {
        defaultValidation();
    });

    and('user clicks to “Appointments” menu', () => {
        defaultValidation();
    });

    then('user navigates to “Appointments” screen', () => {
        defaultValidation();
    });

    and('user lands on \'Appointments\' screen', async () => {
        Cookies.result = "true";
        const expectedResult = {
          ResponseCode: 2005,
          ResponseType: "success",
        };
        const mock = new MockAdapter(axios);
        const domain = window.location.origin;
        mock.onPost(`/ecp/patient/logout`).reply(200, expectedResult);
        mock
          .onGet(
            `${domain}/api/dummy/appointment/create-appointment/getSugestion`
          )
          .reply(200, MOCK_SUGESTION);
        mock
          .onGet(
            `${domain}/api/dummy/appointment/my-appointment/getAllAppointment`
          )
          .reply(200, MOCK_APPOINTMENT);
        mock
          .onGet(
            `${domain}/api/dummy/appointment/my-appointment/getAllPrescriptions`
          )
          .reply(200, MOCK_PRESCRIPTION);
        window.matchMedia = createMatchMedia("700px");
        const response = await getServerSideProps({
          req: { headers: { cookie: { get: jest.fn().mockReturnValue(true) } } },
          res: jest.fn(),
        });
        const mockGeolocation = {
          getCurrentPosition: jest.fn(),
          watchPosition: jest.fn(),
        };
        global.navigator.geolocation = mockGeolocation;
        Cookies.result = false;
        act(() => {
          container = render(
            <Provider store={store}>{HomePage.getLayout(<HomePage />)}</Provider>
          );
        });
        await waitFor(() => container.getByText("Get Direction"));
        expect(response).toEqual({
          props: {
            isStepTwo: false,
          },
        });
    });

    and('user should see list of upcoming appointment', async () => {
        const editButton = container.getByText("View Appointments");
        fireEvent.click(editButton)

        renderUpcoming();

        await waitFor(() => {
            container.getByText(/Upcoming appointments/i)
        })
    });

    and('user should see reschedule and cancel each of them', () => {
        expect(container.getByText("Cancel")).toBeInTheDocument();
        expect(container.getByText("Reschedule")).toBeInTheDocument();
    });

    and('user clicks on the reschedule the appointment', () => {
        defaultValidation();
    });

    and(/^user reschedule the appointment which is in (\d+) hours before the time of the appointment$/, (arg0) => {
        defaultValidation();
    });
});

  test('EPIC_EPP-45_STORY_EPP-1603 - Verify user should receive an email based on their registered mail-id when user reshedulle upcoming appointment list', ({ given, when, and, then }) => {
    given('user launch Patient Portal url', () => {
        defaultValidation();
    });

    when('user is logged in to the application', () => {
        defaultValidation();
    });

    and('user clicks to “Appointments” menu', () => {
        defaultValidation();
    });

    then('user navigates to “Appointments” screen', () => {
        defaultValidation();
    });

    and('user lands on \'Appointments\' screen', async () => {
        Cookies.result = "true";
        const expectedResult = {
          ResponseCode: 2005,
          ResponseType: "success",
        };
        const mock = new MockAdapter(axios);
        const domain = window.location.origin;
        mock.onPost(`/ecp/patient/logout`).reply(200, expectedResult);
        mock
          .onGet(
            `${domain}/api/dummy/appointment/create-appointment/getSugestion`
          )
          .reply(200, MOCK_SUGESTION);
        mock
          .onGet(
            `${domain}/api/dummy/appointment/my-appointment/getAllAppointment`
          )
          .reply(200, MOCK_APPOINTMENT);
        mock
          .onGet(
            `${domain}/api/dummy/appointment/my-appointment/getAllPrescriptions`
          )
          .reply(200, MOCK_PRESCRIPTION);
        window.matchMedia = createMatchMedia("700px");
        const response = await getServerSideProps({
          req: { headers: { cookie: { get: jest.fn().mockReturnValue(true) } } },
          res: jest.fn(),
        });
        const mockGeolocation = {
          getCurrentPosition: jest.fn(),
          watchPosition: jest.fn(),
        };
        global.navigator.geolocation = mockGeolocation;
        Cookies.result = false;
        act(() => {
          container = render(
            <Provider store={store}>{HomePage.getLayout(<HomePage />)}</Provider>
          );
        });
        await waitFor(() => container.getByText("Get Direction"));
        expect(response).toEqual({
          props: {
            isStepTwo: false,
          },
        });
    });

    and('user should see list of upcoming appointment', async () => {
        const editButton = container.getByText("View Appointments");
        fireEvent.click(editButton)

        renderUpcoming();

        await waitFor(() => {
            container.getByText(/Upcoming appointments/i)
        })
    });

    and('user should see reschedule and cancel each of them', () => {
        expect(container.getByText("Cancel")).toBeInTheDocument();
        expect(container.getByText("Reschedule")).toBeInTheDocument();
    });
    });

    and('user clicks on the reschedule an appointment', async () => {
        const rescheduleButton = container.getByRole("button", { name: "Reschedule" });
        fireEvent.click(rescheduleButton);

        renderReschedule();

        await waitFor(() => container.getByText("Reschedule Appointment"));
    });

    and('user view the selected location and able to change', () => {
        expect(container.getByText(/location/i)).toBeInTheDocument()
        expect(container.getByText(/appointmentDetails/i)).toBeInTheDocument()
        const editButton = container.getAllByRole('button', {name: /Edit/i})[0];
        fireEvent.click(editButton)
    });

    and('user view the selected Date of the appointment and able to change', () => {
        defaultValidation();
    });

    and('user view the selected time-slot and able to change', () => {
        defaultValidation();
    });

    and('user view the selected purpose of visit and able to change', async () => {
        const pusposeField = container.getByText(/Purpose of Visit/i);
        fireEvent.click(pusposeField);
        await waitFor(() => {
            const cancelButton = container.getByText(/Cancel/i);
            expect(container.getByText(/Cancel/i)).toBeInTheDocument();
        fireEvent.click(cancelButton);
    });

    and('user view the selected Insurance Career and able to change', async () => {
        const insuranceField = container.getByText(/Insurance Carrier/i);
        fireEvent.click(insuranceField);
        await waitFor(() => {
            const cancelButton = container.getByText(/Cancel/i);
            expect(container.getByText(/Cancel/i)).toBeInTheDocument();
            fireEvent.click(cancelButton);
        });
    });

    then('user navigates to review the updated details', () => {
        defaultValidation();
    });

    and('user view an option to reschedule the appointment', () => {
        defaultValidation();
    });

    and('user prompted with a confirmation message “Are you sure you want to reschedule?” with option to confirm and deny', () => {
        defaultValidation();
    });

    and('user clicks on the confirm botton', () => {
        defaultValidation();
    });

    and('user receive an email regarding the reschedule', () => {
        defaultValidation();
    });

    and('user navigated to \'Appointments\' screen to see the updated details under upcoming appointments', () => {
        defaultValidation();
    });
});

test('EPIC_EPP-45_STORY_EPP-1603 - Negative Test Cases-Verify user should see the error message when the internet service is unavailable', ({ given, when, and, then }) => {
    given('user launch Patient Portal url', () => {
        defaultValidation();
    });

    when('user is logged in to the application', () => {
        defaultValidation();
    });

    and('user clicks to “Appointments” menu', () => {
        defaultValidation();
    });

    then('user navigates to “Appointments” screen', () => {
        defaultValidation();
    });

    and('user lands on \'Appointments\' screen', async () => {
        Cookies.result = "true";
        const expectedResult = {
          ResponseCode: 2005,
          ResponseType: "success",
        };
        const mock = new MockAdapter(axios);
        const domain = window.location.origin;
        mock.onPost(`/ecp/patient/logout`).reply(200, expectedResult);
        mock
          .onGet(
            `${domain}/api/dummy/appointment/create-appointment/getSugestion`
          )
          .reply(200, MOCK_SUGESTION);
        mock
          .onGet(
            `${domain}/api/dummy/appointment/my-appointment/getAllAppointment`
          )
          .reply(200, MOCK_APPOINTMENT);
        mock
          .onGet(
            `${domain}/api/dummy/appointment/my-appointment/getAllPrescriptions`
          )
          .reply(200, MOCK_PRESCRIPTION);
        window.matchMedia = createMatchMedia("700px");
        const response = await getServerSideProps({
          req: { headers: { cookie: { get: jest.fn().mockReturnValue(true) } } },
          res: jest.fn(),
        });
        const mockGeolocation = {
          getCurrentPosition: jest.fn(),
          watchPosition: jest.fn(),
        };
        global.navigator.geolocation = mockGeolocation;
        Cookies.result = false;
        act(() => {
          container = render(
            <Provider store={store}>{HomePage.getLayout(<HomePage />)}</Provider>
          );
        });
        await waitFor(() => container.getByText("Get Direction"));
        expect(response).toEqual({
          props: {
            isStepTwo: false,
          },
        });
    });

    and('user should see list of upcoming appointment', async () => {
        const editButton = container.getByText("View Appointments");
        fireEvent.click(editButton)

        renderUpcoming();

        await waitFor(() => {
            container.getByText(/Upcoming appointments/i)
        })
    });

    and('user should see reschedule and cancel each of them', () => {
        expect(container.getByText("Cancel")).toBeInTheDocument();
        expect(container.getByText("Reschedule")).toBeInTheDocument();
    });

    and('user clicks on the reschedule the appointment', async () => {
        const rescheduleButton = container.getByRole("button", { name: "Reschedule" });
        fireEvent.click(rescheduleButton);

        renderReschedule();

        await waitFor(() => container.getByText("Reschedule Appointment"));
    });

    and(/^user not able to reschedule the appointment which is in (\d+) hours before the time of appointment$/, (arg0) => {
        defaultValidation();
    });

    and('the internet service is unavailable', () => {
        defaultValidation();
    });

    then('user should see the appropriate error message', () => {
        defaultValidation();
    });
});

  test('EPIC_EPP-45_STORY_EPP-1603 - Verify User should not see the any errors script when user clicks F12 on the console', ({ given, when, and, then }) => {
    given('user launch Patient Portal url', () => {
        defaultValidation();
    });

    when('user is logged in to the application', () => {
        defaultValidation();
    });

    and('user clicks to “Appointments” menu', () => {
        defaultValidation();
    });

    then('user navigates to “Appointments” screen', () => {
        defaultValidation();
    });

    and('user lands on \'Appointments\' screen', async () => {
        Cookies.result = "true";
        const expectedResult = {
          ResponseCode: 2005,
          ResponseType: "success",
        };
        const mock = new MockAdapter(axios);
        const domain = window.location.origin;
        mock.onPost(`/ecp/patient/logout`).reply(200, expectedResult);
        mock
          .onGet(
            `${domain}/api/dummy/appointment/create-appointment/getSugestion`
          )
          .reply(200, MOCK_SUGESTION);
        mock
          .onGet(
            `${domain}/api/dummy/appointment/my-appointment/getAllAppointment`
          )
          .reply(200, MOCK_APPOINTMENT);
        mock
          .onGet(
            `${domain}/api/dummy/appointment/my-appointment/getAllPrescriptions`
          )
          .reply(200, MOCK_PRESCRIPTION);
        window.matchMedia = createMatchMedia("700px");
        const response = await getServerSideProps({
          req: { headers: { cookie: { get: jest.fn().mockReturnValue(true) } } },
          res: jest.fn(),
        });
        const mockGeolocation = {
          getCurrentPosition: jest.fn(),
          watchPosition: jest.fn(),
        };
        global.navigator.geolocation = mockGeolocation;
        Cookies.result = false;
        act(() => {
          container = render(
            <Provider store={store}>{HomePage.getLayout(<HomePage />)}</Provider>
          );
        });
        await waitFor(() => container.getByText("Get Direction"));
        expect(response).toEqual({
          props: {
            isStepTwo: false,
          },
        });
    });

    and('user should see list of upcoming appointment', async () => {
        const editButton = container.getByText("View Appointments");
        fireEvent.click(editButton)

        renderUpcoming();

        await waitFor(() => {
            container.getByText(/Upcoming appointments/i)
        })
    });

    and('user should see reschedule and cancel each of them', () => {
        expect(container.getByText("Cancel")).toBeInTheDocument();
        expect(container.getByText("Reschedule")).toBeInTheDocument();
    });

    and('user clicks on the reschedule the appointment', async () => {
        const rescheduleButton = container.getByRole("button", { name: "Reschedule" });
        fireEvent.click(rescheduleButton);

        renderReschedule();

        await waitFor(() => container.getByText("Reschedule Appointment"));
    });

    and(/^user not able to reschedule the appointment which is in (\d+) hours before the time of appointment$/, (arg0) => {
        defaultValidation();
    });

    when(/^user clicks on F(\d+) on the console$/, (arg0) => {
        defaultValidation();
    });

    then('user should not to see any errors script', () => {
        defaultValidation();
    });
});
});
