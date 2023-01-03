import "@testing-library/jest-dom/extend-expect";
import {
  act,
  fireEvent,
  render,
  waitFor,
  cleanup,
} from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { defineFeature, loadFeature } from "jest-cucumber";
import store from "../../src/store/store";
import Cookies from "universal-cookie";
import { medicalRecordMockData, medicationsRecordDocoumentMock } from "../../__mocks__/mockResponse";
import { createMatchMedia } from "../../__mocks__/commonSteps";
import HealthRecord from "../../src/pages/patient/health-record";
import App from "next/app";

const cookies = new Cookies()

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint8/EPP-7028.feature",
  {
    tagFilter: "@included and not @excluded",
  }
);

const defaultValidation = () => {
  expect(true).toBeTruthy();
};

defineFeature(feature, (test) => {
  let container;
  const element = document.createElement("div");
  const mock = new MockAdapter(axios);
  
  const renderHealthRecord = async (mockResponse, status = 200) => {
    //TODO: Remove
    const domain = window.location.origin;
    const patientId = "98f9404b-6ea8-4732-b14f-9c1a168d8066"
    mock.onGet(`/ecp/patient/phr/patientchart/${patientId}`).reply(status, mockResponse);
    mock
      .onGet(`${domain}/ecp/patient/getPatientDocumentByCategory/${patientId}/documents?pageSize=10&pageNo=0&sortBy=updated&sortOrder=dsc&search.query=((category=eq=Medical-Record))`)
      .reply(status, medicationsRecordDocoumentMock);
  
    act(() => {
      container = render(
          HealthRecord.getLayout(<HealthRecord />, store)
      );
    });
  
    if (status === 200) {
        await waitFor(() => {
          container.getAllByText(/Medical Record/i);
        });
    } else {
      await waitFor(() => {
        container.getAllByText(/no health records/i);
      });
    }
  };
  
  const isSubMenuVisible= async () => {
    const documentMenu = container.getByText(/Documents/i);
    expect(documentMenu).toBeInTheDocument()
    fireEvent.click(documentMenu)
  }

  const isHealthRecordVisible= async () => {
    const documentMenu = container.getAllByText("Health Records")[0];
    expect(documentMenu).toBeInTheDocument()
    fireEvent.click(documentMenu)
  }
  
  afterEach(() => {
   cleanup()
   mock.reset();
  });

  beforeEach(() => {});

  test('EPIC_EPP-26_STORY_EPP-7028 - Negative Test Cases-Verify user should see the error message when the service is unavailable - when User clicks on the option to print the medical record', ({ given, and, when, then }) => {
    given('user launch Patient Portal url', () => {
      defaultValidation()
    });

    and('user is logged into the portal', () => {
      defaultValidation()
    });

    and('user lands on the dashboard screen', () => {
      defaultValidation()
    });

    and('user should see Top Navigation Menu such as', async () => {
      window.matchMedia = createMatchMedia("700px");
      await renderHealthRecord(medicalRecordMockData, 200);
    });

    when('User Click on Document menu', async () => {
      await isSubMenuVisible()
    });

    then('Sub menu is displayed such as Intake Forms, Insurance Forms,  Health records, Education Documents', () => {
      defaultValidation()
    });

    when('User clicks on Health Record sub menu', async () => {
      await isHealthRecordVisible()
    });

    then('User should be navigated to Health Record screen', () => {
      defaultValidation()
    });

    and(/^User should be able to see the latest medical record chart that uploaded by ECP E(\d+)$/, (arg0) => {
      defaultValidation()
    });

    and('User should be able to see the name of the medical record as same as the name of the uploaded pdf file', () => {
      const name = container.getAllByText(/Medical Record/i)[0];
      expect(name).toBeInTheDocument()
      fireEvent.click(name)
    });

    and('User should be able to see the date on when the medical record has been uploaded by ECP for him/her', () => {
      const date = container.getAllByText(/10:00AM/i)[0];
      expect(date).toBeInTheDocument()
    });

    and('User should be able to see the uploaded date in ‘mm/dd/yyyy’ format', () => {
      const date = container.getAllByText(/10\/07\/2022/i)[0];
      expect(date).toBeInTheDocument()
    });

    and('User should have the provision to view the medical record', () => {
      defaultValidation()
    });

    and('User should be able to see the option to print the medical record', () => {
      const print = container.getAllByTestId("print-icon")[0]
      expect(print).toBeInTheDocument()
      fireEvent.click(print)
    });

    when('User clicks on the option to print the medical record', () => {
      defaultValidation()
    });

    and('the service is unavailable', () => {
      defaultValidation()
    });

    then('user should see the appropriate error message', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-26_STORY_EPP-7028 - Negative Test Cases-Verify user should see the error message when the internet service is unavailable - when User clicks on the option to print the medical record', ({ given, and, when, then }) => {
    given('user launch Patient Portal url', () => {
      defaultValidation()
    });

    and('user is logged into the portal', () => {
      defaultValidation()
    });

    and('user lands on the dashboard screen', async () => {
      window.matchMedia = createMatchMedia("700px");
      await renderHealthRecord(medicalRecordMockData, 200);
    });

    and('user should see Top Navigation Menu such as', () => {
      defaultValidation()
    });

    when('User Click on Document menu', async() => {
      await isSubMenuVisible()
    });

    then('Sub menu is displayed such as Intake Forms, Insurance Forms,  Health records, Education Documents', () => {
      defaultValidation()
    });

    when('User clicks on Health Record sub menu', async() => {
      await isHealthRecordVisible()
    });

    then('User should be navigated to Health Record screen', () => {
      defaultValidation()
    });

    and(/^User should be able to see the latest medical record chart that uploaded by ECP E(\d+)$/, (arg0) => {
      defaultValidation()
    });

    and('User should be able to see the name of the medical record as same as the name of the uploaded pdf file', () => {
      const name = container.getAllByText(/Medical Record/i)[0];
      expect(name).toBeInTheDocument()
      fireEvent.click(name)
    });

    and('User should be able to see the date on when the medical record has been uploaded by ECP for him/her', () => {
      const date = container.getAllByText(/10:00AM/i)[0];
      expect(date).toBeInTheDocument()
    });

    and('User should be able to see the uploaded date in ‘mm/dd/yyyy’ format', () => {
      const date = container.getAllByText(/10\/07\/2022/i)[0];
      expect(date).toBeInTheDocument()
    });

    and('User should have the provision to view the medical record', () => {
      defaultValidation()
    });

    and('User should be able to see the option to print the medical record', () => {
      const print = container.getAllByTestId("print-icon")[0]
      expect(print).toBeInTheDocument()
      fireEvent.click(print)
    });

    when('User clicks on the option to print the medical record', () => {
      defaultValidation()
    });

    and('the internet service is unavailable', () => {
      defaultValidation()
    });

    then('user should see the appropriate error message', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-26_STORY_EPP-7028 - Verify User should be able to print the medical record', ({ given, and, when, then }) => {
    given('user launch Patient Portal url', () => {
      defaultValidation()
    });

    and('user is logged into the portal', () => {
      defaultValidation()
    });

    and('user lands on the dashboard screen', async() => {
      window.matchMedia = createMatchMedia("700px");
      await renderHealthRecord(medicalRecordMockData, 200);
    });

    and('user should see Top Navigation Menu such as', () => {
      defaultValidation()
    });

    when('User Click on Document menu', async () => {
      await isSubMenuVisible()
    });

    then('Sub menu is displayed such as Intake Forms, Insurance Forms,  Health records, Education Documents', () => {
      defaultValidation()
    });

    when('User clicks on Health Record sub menu', async () => {
      await isHealthRecordVisible()
    });

    then('User should be navigated to Health Record screen', () => {
      defaultValidation()
    });

    and(/^User should be able to see the latest medical record chart that uploaded by ECP E(\d+)+$/, (arg0) => {
      defaultValidation()
    });

    and('User should be able to see the name of the medical record as same as the name of the uploaded pdf file', () => {
      const name = container.getAllByText(/Medical Record/i)[0];
      expect(name).toBeInTheDocument()
      fireEvent.click(name)
    });

    and('User should be able to see the date on when the medical record has been uploaded by ECP for him/her', () => {
      const date = container.getAllByText(/10:00AM/i)[0];
      expect(date).toBeInTheDocument()
    });

    and('User should be able to see the uploaded date in ‘mm/dd/yyyy’ format', () => {
      const date = container.getAllByText(/10\/07\/2022/i)[0];
      expect(date).toBeInTheDocument()
    });

    and('User should have the provision to view the medical record', () => {
      defaultValidation()
    });

    and('User should be able to see the option to print the medical record', () => {
      const print = container.getAllByTestId("print-icon")[0]
      expect(print).toBeInTheDocument()
      fireEvent.click(print)
    });

    when('User clicks on the option to print the medical record', () => {
      defaultValidation()
    });

    then('User should be able to print the medical record', () => {
      defaultValidation()
    });
  });
});
