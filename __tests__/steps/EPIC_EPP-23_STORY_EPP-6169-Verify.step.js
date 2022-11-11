import { fireEvent } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { doLogin, navigateToPatientPortalHome, renderLogin, createMatchMedia } from "../../__mocks__/commonSteps";
import {
    mockAppointmentTypes,
    mockInsurance,
    submitFilter,
  } from "../../__mocks__/mockResponse";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint8/EPP-6169.feature"
);

defineFeature(feature, (test) => {
    let container;
    const defaultValidation = () => {
      expect(true).toBeTruthy();
    };

    const mock = new MockAdapter(axios);
  afterEach(() => {
    mock.reset();
  });

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

    test('EPIC_EPP-23_STORY_EPP-6169-Verify User should be able to navigate to the Messaging center', ({ given, and }) => {
        given('User logged in to the patient portal', async () => {
            container = await renderLogin();
            await doLogin(mock, container);
        });

        and('User lands on the dashboard screen', async () => {
            container = await navigateToPatientPortalHome();
        });

        and('User views the \'Message Center\' menu present as part of the global header', () => {
            expect(container.getAllByText('Messaging')[0]).toBeInTheDocument();
        });

        and('User Clicks on Message Center Option', async () => {
            await fireEvent.click(container.getAllByText('Messaging')[0])
        });
    });

    test('EPIC_EPP-23_STORY_EPP-6169-Verify User should be able to click on Message Center Option', ({ given, and }) => {
        given('User logged in to the patient portal', async () => {
            container = await renderLogin();
            await doLogin(mock, container);
        });

        and('User lands on the dashboard screen', async () => {
            container = await navigateToPatientPortalHome();
        });

        and('User views the \'Message Center\' menu present as part of the global header', async () => {
            expect(container.getAllByText('Messaging')[0]).toBeInTheDocument();
        });
    });
});
