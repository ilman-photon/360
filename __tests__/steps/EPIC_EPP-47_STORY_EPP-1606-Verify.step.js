import { act, fireEvent, render, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import axios from "axios";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import { defineFeature, loadFeature } from "jest-cucumber";
import { Provider } from "react-redux";
import Appointments from "../../src/pages/patient/appointments";
import store from "../../src/store/store";
const useRouter = jest.spyOn(require("next/router"), "useRouter");
import constants from "../../src/utils/constants";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint5/EPP-1606.feature",
);

defineFeature(feature, (test) => {
  let container;
  const mock = new MockAdapter(axios);
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
      }
    ],
  }

  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };

  test('EPIC_EPP-3_STORY_EPP-1606-Verify User should see the following details under each upcoming appointment', ({  }) => {

  });

  test('"EPIC_EPP-3_STORY_EPP-1606-Verify User should see the following details under each upcoming appointment"', ({ given, and, when, then }) => {
    given('user launch the  Patient Portal url', () => {

    });

    and('User is logged in to the application', () => {

    });

    when('User clicks to “Appointments” menu', () => {

    });

    then('User navigates to “Appointments” screen', () => {

    });

    and('User lands on “Appointments” screen', async () => {
      useRouter.mockReturnValue({
        back: jest.fn(),
      });
      mock
        .onGet(`${window.location.origin}/api/dummy/appointment/my-appointment/getAllAppointment`)
        .reply(200, userData);
      act(() => {
        container = render(
          <Provider store={store}>
            {Appointments.getLayout(<Appointments />)}
          </Provider>
        );
      });
      await waitFor(() => {
        container.getAllByText(userData.appointmentList[0].patientInfo.name);
      })

      expect(container.getByText(/Upcoming appointments/i).textContent).toEqual("Upcoming Appointments")
    });

    and('User should be able to view the following details under each upcoming appointment as belows:', (table) => {
      expect(container.getByText(/Paul Wagner Md/i)).toBeInTheDocument()
      expect(container.getByText(/Rebecca Chan/i)).toBeInTheDocument()
      expect(container.getByText(/Location/i)).toBeInTheDocument()
      expect(container.getByText(/Insurance/i)).toBeInTheDocument()
      expect(container.getByText(/Get directions/i)).toBeInTheDocument()
      expect(container.getByText(/Cancel/i)).toBeInTheDocument()
      expect(container.getByText(/Reschedule/i)).toBeInTheDocument()
    });
  });

  test('EPIC_EPP-3_STORY_EPP-1606-Verify User should navigated to maps screen  when clicks on "Directions" button', ({  }) => {

  });

  test('"EPIC_EPP-3_STORY_EPP-1606-Verify User should navigated to maps screen  when clicks on "Directions" button"', ({ given, when, and, then }) => {
    given('user launch the  Patient Portal url', () => {

    });

    when('User is logged in to the application', () => {

    });

    and('User clicks to “Appointments” menu', () => {

    });

    then('User navigates to “Appointments” screen', () => {

    });

    and('User lands on “Appointments” screen', async () => {
      useRouter.mockReturnValue({
        back: jest.fn(),
      });
      mock
        .onGet(`${window.location.origin}/api/dummy/appointment/my-appointment/getAllAppointment`)
        .reply(200, userData);
      act(() => {
        container = render(
          <Provider store={store}>
            {Appointments.getLayout(<Appointments />)}
          </Provider>
        );
      });
      await waitFor(() => {
        container.getAllByText(userData.appointmentList[0].patientInfo.name);
      })

      expect(container.getByText(/Upcoming appointments/i).textContent).toEqual("Upcoming Appointments")
    });

    and('User should be able to view the following details under each upcoming appointment as belows:', (table) => {
      expect(container.getByText(/Paul Wagner Md/i)).toBeInTheDocument()
      expect(container.getByText(/Rebecca Chan/i)).toBeInTheDocument()
      expect(container.getByText(/Location/i)).toBeInTheDocument()
      expect(container.getByText(/Insurance/i)).toBeInTheDocument()
      expect(container.getByText(/Get directions/i)).toBeInTheDocument()
      expect(container.getByText(/Cancel/i)).toBeInTheDocument()
      expect(container.getByText(/Reschedule/i)).toBeInTheDocument()
    });

    when(/^User clicks on "(.*)" button$/, (arg0) => {
      const getDirection = container.getByText(/Get directions/i)
      fireEvent.click(getDirection)
    });

    then('User should navigated to maps screen', () => {

    });
  });

  test('EPIC_EPP-3_STORY_EPP-1606-Verify User should see Upcoming Appointments with an option to reschedule and cancel each of them', ({  }) => {

  });

  test('"EPIC_EPP-3_STORY_EPP-1606-Verify User should see Upcoming Appointments with an option to reschedule and cancel each of them"', ({ given, when, and, then }) => {
    given('user launch the  Patient Portal url', () => {

    });

    when('User is logged in to the application', () => {

    });

    and('User clicks to “Appointments” menu', () => {

    });

    then('User navigates to “Appointments” screen', () => {

    });

    and('User lands on “Appointments” screen', async () => {
      useRouter.mockReturnValue({
        back: jest.fn(),
      });
      mock
        .onGet(`${window.location.origin}/api/dummy/appointment/my-appointment/getAllAppointment`)
        .reply(200, userData);
      act(() => {
        container = render(
          <Provider store={store}>
            {Appointments.getLayout(<Appointments />)}
          </Provider>
        );
      });
      await waitFor(() => {
        container.getAllByText(userData.appointmentList[0].patientInfo.name);
      })

      expect(container.getByText(/Upcoming appointments/i).textContent).toEqual("Upcoming Appointments")
    });

    and('User should be able to view the following details under each upcoming appointment as belows:', (table) => {
      expect(container.getByText(/Paul Wagner Md/i)).toBeInTheDocument()
      expect(container.getByText(/Rebecca Chan/i)).toBeInTheDocument()
      expect(container.getByText(/Location/i)).toBeInTheDocument()
      expect(container.getByText(/Insurance/i)).toBeInTheDocument()
      expect(container.getByText(/Get directions/i)).toBeInTheDocument()
      expect(container.getByText(/Cancel/i)).toBeInTheDocument()
      expect(container.getByText(/Reschedule/i)).toBeInTheDocument()
    });

    and('User should see an option to schedule new appointments', () => {

    });

    and('User should see Upcoming Appointments with an option to reschedule and cancel each of them', () => {
      expect(container.getByText(/Cancel/i)).toBeInTheDocument()
      expect(container.getByText(/Reschedule/i)).toBeInTheDocument()
    });
  });

  test('EPIC_EPP-3_STORY_EPP-1606-Verify User should see the following message "You have no upcoming appointments" (if there are no upcoming appointments)', ({  }) => {

  });

  test('"EPIC_EPP-3_STORY_EPP-1606-Verify User should see the following message "You have no upcoming appointments" (if there are no upcoming appointments)"', ({ given, when, and, then }) => {
    given('user launch the  Patient Portal url', () => {

    });

    when('User is logged in to the application', () => {

    });

    and('User clicks to “Appointments” menu', () => {

    });

    then('User navigates to “Appointments” screen', () => {

    });

    and('User lands on “Appointments” screen', async () => {
      useRouter.mockReturnValue({
        back: jest.fn(),
      });
      mock
        .onGet(`${window.location.origin}/api/dummy/appointment/my-appointment/getAllAppointment`)
        .reply(200, userData);
      act(() => {
        container = render(
          <Provider store={store}>
            {Appointments.getLayout(<Appointments />)}
          </Provider>
        );
      });
      await waitFor(() => {
        container.getAllByText(userData.appointmentList[0].patientInfo.name);
      })

      expect(container.getByText(/Upcoming appointments/i).textContent).toEqual("Upcoming Appointments")
    });

    and('User should be able to view the following details under each upcoming appointment as belows:', (table) => {
      expect(container.getByText(/Paul Wagner Md/i)).toBeInTheDocument()
      expect(container.getByText(/Rebecca Chan/i)).toBeInTheDocument()
      expect(container.getByText(/Location/i)).toBeInTheDocument()
      expect(container.getByText(/Insurance/i)).toBeInTheDocument()
      expect(container.getByText(/Get directions/i)).toBeInTheDocument()
      expect(container.getByText(/Cancel/i)).toBeInTheDocument()
      expect(container.getByText(/Reschedule/i)).toBeInTheDocument()
    });

    and('User should see an option to schedule new appointments', () => {

    });

    and('User should see Upcoming Appointments with an option to reschedule and cancel each of them', () => {
      expect(container.getByText(/Cancel/i)).toBeInTheDocument()
      expect(container.getByText(/Reschedule/i)).toBeInTheDocument()
    });

    when('User clicks on the option to cancel an appointment', async () => {
      const cancel = container.getByText(/Cancel/i)
      fireEvent.click(cancel)
      expect(container).toMatchSnapshot()
      await waitFor(() => {
        container.getByText(/cancelTitle/i)
      })
    });

    then(/^User should see "(.*)" as confirmation message$/, (arg0) => {
      expect(container.getByText(/cancelTitle/i)).toBeInTheDocument()
    });

    and(/^User should see "(.*)" option$/, (arg0) => {
      expect(container.getByText(/btnCancel/i)).toBeInTheDocument()
      expect(container.getByText(/btnKeep/i)).toBeInTheDocument()
    });

    when(/^User selects on "(.*)" option$/, async (arg0) => {
      const select = container.getAllByLabelText(/Homebound/i)
      fireEvent.change(select[0])
      const cancel = container.getByTestId(/loc_btnCancel/i)
      fireEvent.click(cancel)
      // await waitForElementToBeRemoved(() => {
      //   container.queryAllByText(/cancelTitle/i)
      // })
    });

    then(/^User should see the following message "(.*)" \(if there are no upcoming appointments\)"$/, (arg0) => {

    });
  });

  test('EPIC_EPP-3_STORY_EPP-1606-Verify User should see the following message "You have no upcoming appointments" (if there are no upcoming appointments) within 3 seconds', ({  }) => {

  });


  test('"EPIC_EPP-3_STORY_EPP-1606-Verify User should see the following message "You have no upcoming appointments" (if there are no upcoming appointments) within 3 seconds"', ({ given, when, and, then }) => {
    given('user launch the  Patient Portal url', () => {

    });

    when('User is logged in to the application', () => {

    });

    and('User clicks to “Appointments” menu', () => {

    });

    then('User navigates to “Appointments” screen', () => {
      
    });

    and('User lands on “Appointments” screen', async () => {
      useRouter.mockReturnValue({
        back: jest.fn(),
        push: jest.fn()
      });
      mock
        .onGet(`${window.location.origin}/api/dummy/appointment/my-appointment/getAllAppointment`)
        .reply(200, userData);
      act(() => {
        container = render(
          <Provider store={store}>
            {Appointments.getLayout(<Appointments />)}
          </Provider>
        );
      });
      await waitFor(() => {
        container.getAllByText(userData.appointmentList[0].patientInfo.name);
      })

      expect(container.getByText(/Upcoming appointments/i).textContent).toEqual("Upcoming Appointments")
    });

    and('User should be able to view the following details under each upcoming appointment as belows:', (table) => {
      expect(container.getByText(/Paul Wagner Md/i)).toBeInTheDocument()
      expect(container.getByText(/Rebecca Chan/i)).toBeInTheDocument()
      expect(container.getByText(/Location/i)).toBeInTheDocument()
      expect(container.getByText(/Insurance/i)).toBeInTheDocument()
      expect(container.getByText(/Get directions/i)).toBeInTheDocument()
      expect(container.getByText(/Cancel/i)).toBeInTheDocument()
      expect(container.getByText(/Reschedule/i)).toBeInTheDocument()
    });

    and('User should see an option to schedule new appointments', () => {
      expect(container.getByText(/Cancel/i)).toBeInTheDocument()
      expect(container.getByText(/Reschedule/i)).toBeInTheDocument()
    });

    and('User should see Upcoming Appointments with an option to reschedule and cancel each of them', () => {
      expect(container.getByText(/Cancel/i)).toBeInTheDocument()
      expect(container.getByText(/Reschedule/i)).toBeInTheDocument()
      const reschedule = container.getByText(/Reschedule/i)
      fireEvent.click(reschedule)
    });

    when('User clicks on the option to cancel an appointment', async () => {
      const cancel = container.getByText(/Cancel/i)
      fireEvent.click(cancel)
      expect(container).toMatchSnapshot()
      await waitFor(() => {
        container.getByText(/cancelTitle/i)
      })
    });

    then(/^User should see "(.*)" as confirmation message$/, (arg0) => {

    });

    and(/^User should see "(.*)" option$/, (arg0) => {

    });

    when(/^User selects on "(.*)" option$/, (arg0) => {

    });

    and(/^User should see the page loads within "(.*)"$/, (arg0) => {

    });

    then(/^User should see the following message "(.*)" \(if there are no upcoming appointments\)"$/, (arg0) => {

    });
  });

  test('EPIC_EPP-3_STORY_EPP-1606-Verify User should not see the any errors script when user clicks F12 on the console', ({  }) => {

  });

  test('"EPIC_EPP-3_STORY_EPP-1606-Verify User should not see the any errors script when user clicks F12 on the console"', ({ given, when, and, then }) => {
    given('user launch the  Patient Portal url', () => {

    });

    when('User is logged in to the application', () => {

    });

    and('User clicks to “Appointments” menu', () => {

    });

    then('User navigates to “Appointments” screen', () => {

    });

    and('User lands on “Appointments” screen', () => {

    });

    and('User should be able to view the following details under each upcoming appointment as belows:', (table) => {

    });

    and('User should see an option to schedule new appointments', () => {

    });

    and('User should see Upcoming Appointments with an option to reschedule and cancel each of them', () => {

    });

    when('User clicks on the option to cancel an appointment', () => {

    });

    then(/^User should see "(.*)" as confirmation message$/, (arg0) => {

    });

    and(/^User should see "(.*)" option$/, (arg0) => {

    });

    when(/^User selects on "(.*)" option$/, (arg0) => {

    });

    and(/^User should see the page loads within "(.*)"$/, (arg0) => {

    });

    then(/^User should see the following message "(.*)" \(if there are no upcoming appointments\)"$/, (arg0) => {

    });

    when(/^user clicks on F(\d+) on the console$/, (arg0) => {

    });

    then('user should not to see any errors script', () => {

    });
  });

  test('EPIC_EPP-3_STORY_EPP-1606-Negative Test Cases-Verify user should see the error message when the internet service is unavailable', ({  }) => {

  });

  test('"EPIC_EPP-3_STORY_EPP-1606-Negative Test Cases-Verify user should see the error message when the internet service is unavailable"', ({ given, when, and, then }) => {
    given('user launch the  Patient Portal url', () => {

    });

    when('User is logged in to the application', () => {

    });

    and('User clicks to “Appointments” menu', () => {

    });

    then('User navigates to “Appointments” screen', () => {

    });

    and('User lands on “Appointments” screen', () => {

    });

    and('User should be able to view the following details under each upcoming appointment as belows:', (table) => {

    });

    and('User should see an option to schedule new appointments', () => {

    });

    and('User should see Upcoming Appointments with an option to reschedule and cancel each of them', () => {

    });

    when('User clicks on the option to cancel an appointment', () => {

    });

    then(/^User should see "(.*)" as confirmation message$/, (arg0) => {

    });

    and(/^User should see "(.*)" option$/, (arg0) => {

    });

    when(/^User selects on "(.*)" option$/, (arg0) => {

    });

    and('the Internet service is unavailable', () => {

    });

    then('user should see the appropriate error message', () => {

    });
  });

  test('EPIC_EPP-3_STORY_EPP-1606-Negative Test Cases-Verify  when the service is unavailable', ({  }) => {

  });

  test('"EPIC_EPP-3_STORY_EPP-1606-Negative Test Cases-Verify  when the service is unavailable"', ({ given, when, and, then }) => {
    given('user launch the  Patient Portal url', () => {

    });

    when('User is logged in to the application', () => {

    });

    and('User clicks to “Appointments” menu', () => {

    });

    then('User navigates to “Appointments” screen', () => {

    });

    and('User lands on “Appointments” screen', async () => {
      useRouter.mockReturnValue({
        back: jest.fn(),
        push: jest.fn()
      });
      mock
        .onGet(`${window.location.origin}/api/dummy/appointment/my-appointment/getAllAppointment`)
        .reply(400,{});
      act(() => {
        container = render(
          <Provider store={store}>
            {Appointments.getLayout(<Appointments />)}
          </Provider>
        );
      });
      // await waitFor(() => {
      //   container.getByText("Something Went Wrong");
      // })

      // expect(container.getByText("Something Went Wrong")).toBeInTheDocument()
    });

    and('User should be able to view the following details under each upcoming appointment as belows:', (table) => {

    });

    and('User should see an option to schedule new appointments', () => {

    });

    and('User should see Upcoming Appointments with an option to reschedule and cancel each of them', () => {

    });

    when('User clicks on the option to cancel an appointment', () => {

    });

    then(/^User should see "(.*)" as confirmation message$/, (arg0) => {

    });

    and(/^User should see "(.*)" option$/, (arg0) => {

    });

    when(/^User selects on "(.*)" option$/, (arg0) => {

    });

    and('the service is unavailable', () => {

    });

    then('user should see the appropriate error message', () => {
      // expect(container.getByText("Something Went Wrong")).toBeInTheDocument()
    });
  });
});