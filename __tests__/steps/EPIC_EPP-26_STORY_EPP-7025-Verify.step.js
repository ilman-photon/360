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

const cookies = new Cookies();

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint8/EPP-7025.feature",
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
    mock.reset();
    const domain = window.location.origin;
    const userData = JSON.parse(localStorage.getItem("userData"));
    const patientId = userData.patientId;
    mock
      .onGet(`/ecp/patient/phr/patientchart/${patientId}`)
      .reply(status, mockResponse);
    mock
      .onGet(`${domain}/ecp/patient/getPatientDocumentByCategory/${patientId}/documents?pageSize=10&pageNo=0&sortBy=updated&sortOrder=dsc&search.query=((category=eq=Medical-Record))`)
      .reply(status, medicationsRecordDocoumentMock);

    act(() => {
      container = render(HealthRecord.getLayout(<HealthRecord />, store));
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

  const isSubMenuVisible = async () => {
    const documentMenu = container.getByText(/Documents/i);
    expect(documentMenu).toBeInTheDocument();
    fireEvent.click(documentMenu);
  };

  afterEach(() => {
    cleanup();
    mock.reset();
  });

  beforeEach(() => {});

  test("EPIC_EPP-26_STORY_EPP-7025 - Verify User should be able to see the name of the medical record as same as the name of the uploaded pdf file", ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch Patient Portal url", () => {
      defaultValidation();
    });

    and("user is logged into the portal", () => {
      defaultValidation();
    });

    and("user lands on the dashboard screen", async () => {
      window.matchMedia = createMatchMedia("1500px");
      await renderHealthRecord(medicalRecordMockData, 200);
    });

    and("user should see Top Navigation Menu such as", async () => {
      await isSubMenuVisible();
    });

    when("User Click on Document menu", () => {
      defaultValidation();
    });

    then(
      "Sub menu is displayed such as Intake Forms, Insurance Forms,  Health records, Education Documents",
      () => {
        defaultValidation();
      }
    );

    when("User clicks on Health Record sub menu", () => {
      defaultValidation();
    });

    then("User should be navigated to Health Record screen", () => {
      defaultValidation();
    });

    and(
      /^User should be able to see the latest medical record chart that uploaded by ECP E(\d+)$/,
      (arg0) => {
        defaultValidation();
      }
    );

    and(
      "User should be able to see the name of the medical record as same as the name of the uploaded pdf file",
      () => {
        // const name = container.getAllByLabelText(/Medical Record -/i)[0];
        // expect(name).toBeInTheDocument();
        // fireEvent.click(name);
      }
    );
  });

  test("EPIC_EPP-26_STORY_EPP-7025 - Verify User should be able to see the latest medical record chart that uploaded by ECP E360", ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch Patient Portal url", () => {
      defaultValidation();
    });

    and("user is logged into the portal", () => {
      defaultValidation();
    });

    and("user lands on the dashboard screen", async () => {
      window.matchMedia = createMatchMedia("700px");
      await renderHealthRecord(medicalRecordMockData, 200);
    });

    and("user should see Top Navigation Menu such as", async () => {
      await isSubMenuVisible();
    });

    when("User Click on Document menu", () => {
      defaultValidation();
    });

    then(
      "Sub menu is displayed such as Intake Forms, Insurance Forms,  Health records, Education Documents",
      () => {
        defaultValidation();
      }
    );

    when("User clicks on Health Record sub menu", () => {
      defaultValidation();
    });

    then("User should be navigated to Health Record screen", () => {
      defaultValidation();
    });

    and(
      /^User should be able to see the latest medical record chart that uploaded by ECP E(\d+)$/,
      (arg0) => {
        const name = container.getAllByText(/Medical Record/i)[0];
        expect(name).toBeInTheDocument();
      }
    );
  });

  test("EPIC_EPP-26_STORY_EPP-7025 - Negative Test Cases-Verify user should see the error message when the service is unavailable - When User clicks on Health Record sub menu", ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch Patient Portal url", () => {
      defaultValidation();
    });

    and("user is logged into the portal", () => {
      defaultValidation();
    });

    and("user lands on the dashboard screen", async () => {
      window.matchMedia = createMatchMedia("1500px");
      await renderHealthRecord({}, 400);
    });

    and("user should see Top Navigation Menu such as", async () => {
      await isSubMenuVisible();
    });

    when("User Click on Document menu", () => {
      defaultValidation();
    });

    then(
      "Sub menu is displayed such as Intake Forms, Insurance Forms,  Health records, Education Documents",
      () => {
        defaultValidation();
      }
    );

    when("User clicks on Health Record sub menu", () => {
      defaultValidation();
    });

    and("the service is unavailable", () => {
      defaultValidation();
    });

    then("user should see the appropriate error message", () => {
      const name = container.getByLabelText(/no health records/i);
      expect(name).toBeInTheDocument();
    });
  });

  test("EPIC_EPP-26_STORY_EPP-7025 - Negative Test Cases-Verify user should see the error message when the internet service is unavailable - When User clicks on Health Record sub menu", ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch Patient Portal url", () => {
      defaultValidation();
    });

    and("user is logged into the portal", () => {
      defaultValidation();
    });

    and("user lands on the dashboard screen", async () => {
      window.matchMedia = createMatchMedia("1500px");
      await renderHealthRecord({}, 400);
    });

    and("user should see Top Navigation Menu such as", async () => {
      await isSubMenuVisible();
    });

    when("User Click on Document menu", () => {
      defaultValidation();
    });

    then(
      "Sub menu is displayed such as Intake Forms, Insurance Forms,  Health records, Education Documents",
      () => {
        defaultValidation();
      }
    );

    when("User clicks on Health Record sub menu", () => {
      defaultValidation();
    });

    and("the internet service is unavailable", () => {
      defaultValidation();
    });

    then("user should see the appropriate error message", () => {
      const name = container.getByLabelText(/no health records/i);
      expect(name).toBeInTheDocument();
    });
  });

  test("EPIC_EPP-26_STORY_EPP-7025 - Verify User should view the message as “No Health record available now.” in the page, if there is no medical record has been uploaded by ECP for him/her", ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch Patient Portal url", () => {
      defaultValidation();
    });

    and("user is logged into the portal", () => {
      defaultValidation();
    });

    and("user lands on the dashboard screen", async () => {
      window.matchMedia = createMatchMedia("1500px");
      await renderHealthRecord(medicalRecordMockData, 200);
    });

    and("user should see Top Navigation Menu such as", () => {
      defaultValidation();
    });

    when("User Click on Document menu", async () => {
      await isSubMenuVisible();
    });

    then(
      "Sub menu is displayed such as Intake Forms, Insurance Forms,  Health records, Education Documents",
      () => {
        defaultValidation();
      }
    );

    when("User clicks on Health Record sub menu", () => {
      defaultValidation();
    });

    then("User should be navigated to Health Record screen", () => {
      defaultValidation();
    });

    and(
      /^User should be able to see the latest medical record chart that uploaded by ECP E(\d+)+$/,
      (arg0) => {
        defaultValidation();
      }
    );

    and(
      "User should be able to see the name of the medical record as same as the name of the uploaded pdf file",
      () => {
        const name = container.getAllByText(/Medical Record -/i)[0];
        expect(name).toBeInTheDocument();
      }
    );

    and(
      "User should be able to see the date on when the medical record has been uploaded by ECP for him/her",
      () => {
        const date = container.getAllByText(/10:00AM/i)[0];
        expect(date).toBeInTheDocument();
      }
    );

    and(
      "User should be able to see the uploaded date in ‘mm/dd/yyyy’ format",
      () => {
        const date = container.getAllByText(/10\/07\/2022/i)[0];
        expect(date).toBeInTheDocument();
      }
    );

    and("User should have the provision to view the medical record", () => {
      defaultValidation();
    });

    and(
      "User should be able to see the option to print the medical record",
      () => {
        const donload = container.getAllByTestId("download-icon")[0];
        expect(donload).toBeInTheDocument();
        const print = container.getAllByTestId("print-icon")[0];
        expect(print).toBeInTheDocument();

        fireEvent.click(donload);
        fireEvent.click(print);
      }
    );

    and(
      "User should be able to view the option to share the medical record with others",
      () => {
        const shared = container.getAllByTestId("shared-icon")[0];
        expect(shared).toBeInTheDocument();

        fireEvent.click(shared);
      }
    );

    and(
      "User should view the message as “No Health record available now.” in the page, if there is no medical record has been uploaded by ECP for him/her",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-26_STORY_EPP-7025 - Verify User should be able to view the option to share the medical record with others", ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch Patient Portal url", () => {
      defaultValidation();
    });

    and("user is logged into the portal", () => {
      defaultValidation();
    });

    and("user lands on the dashboard screen", async () => {
      window.matchMedia = createMatchMedia("600px");
      await renderHealthRecord(medicalRecordMockData, 200);
    });

    and("user should see Top Navigation Menu such as", () => {
      defaultValidation();
    });

    when("User Click on Document menu", async () => {
      await isSubMenuVisible();
    });

    then(
      "Sub menu is displayed such as Intake Forms, Insurance Forms,  Health records, Education Documents",
      () => {
        defaultValidation();
      }
    );

    when("User clicks on Health Record sub menu", () => {
      defaultValidation();
    });

    then("User should be navigated to Health Record screen", () => {
      defaultValidation();
    });

    and(
      /^User should be able to see the latest medical record chart that uploaded by ECP E(\d+)+$/,
      (arg0) => {
        defaultValidation();
      }
    );

    and(
      "User should be able to see the name of the medical record as same as the name of the uploaded pdf file",
      () => {
        const name = container.getAllByText(/Medical Record -/i)[0];
        expect(name).toBeInTheDocument();
      }
    );

    and(
      "User should be able to see the date on when the medical record has been uploaded by ECP for him/her",
      () => {
        const date = container.getAllByText(/10:00AM/i)[0];
        expect(date).toBeInTheDocument();
      }
    );

    and(
      "User should be able to see the uploaded date in ‘mm/dd/yyyy’ format",
      () => {
        const date = container.getAllByText(/10\/07\/2022/i)[0];
        expect(date).toBeInTheDocument();
      }
    );

    and("User should have the provision to view the medical record", () => {
      defaultValidation();
    });

    and(
      "User should be able to see the option to print the medical record",
      () => {
        const print = container.getAllByTestId("print-icon")[0];
        expect(print).toBeInTheDocument();
      }
    );

    and(
      "User should be able to view the option to share the medical record with others",
      () => {
        const shared = container.getAllByTestId("shared-icon")[0];
        expect(shared).toBeInTheDocument();

        fireEvent.click(shared);
      }
    );
  });

  test("EPIC_EPP-26_STORY_EPP-7025 - Verify User should be able to see the option to print the medical record", ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch Patient Portal url", () => {
      defaultValidation();
    });

    and("user is logged into the portal", () => {
      defaultValidation();
    });

    and("user lands on the dashboard screen", async () => {
      window.matchMedia = createMatchMedia("1600px");
      await renderHealthRecord(medicalRecordMockData, 200);
    });

    and("user should see Top Navigation Menu such as", () => {
      defaultValidation();
    });

    when("User Click on Document menu", async () => {
      await isSubMenuVisible();
    });

    then(
      "Sub menu is displayed such as Intake Forms, Insurance Forms,  Health records, Education Documents",
      () => {
        defaultValidation();
      }
    );

    when("User clicks on Health Record sub menu", () => {
      defaultValidation();
    });

    then("User should be navigated to Health Record screen", () => {
      defaultValidation();
    });

    and(
      /^User should be able to see the latest medical record chart that uploaded by ECP E(\d+)$/,
      (arg0) => {
        defaultValidation();
      }
    );

    and(
      "User should be able to see the name of the medical record as same as the name of the uploaded pdf file",
      () => {
        const name = container.getAllByText(/Medical Record -/i)[0];
        expect(name).toBeInTheDocument();
      }
    );

    and(
      "User should be able to see the date on when the medical record has been uploaded by ECP for him/her",
      () => {
        const date = container.getAllByText(/10:00AM/i)[0];
        expect(date).toBeInTheDocument();
      }
    );

    and(
      "User should be able to see the uploaded date in ‘mm/dd/yyyy’ format",
      () => {
        const date = container.getAllByText(/10\/07\/2022/i)[0];
        expect(date).toBeInTheDocument();
      }
    );

    and("User should have the provision to view the medical record", () => {
      defaultValidation();
    });

    and(
      "User should be able to see the option to print the medical record",
      () => {
        const print = container.getAllByTestId("print-icon")[0];
        expect(print).toBeInTheDocument();
      }
    );
  });

  test("EPIC_EPP-26_STORY_EPP-7025 - Verify User should have the provision to view the medical record", ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch Patient Portal url", () => {
      defaultValidation();
    });

    and("user is logged into the portal", () => {
      defaultValidation();
    });

    and("user lands on the dashboard screen", async () => {
      window.matchMedia = createMatchMedia("1600px");
      await renderHealthRecord(medicalRecordMockData, 200);
    });

    and("user should see Top Navigation Menu such as", () => {
      defaultValidation();
    });

    when("User Click on Document menu", async () => {
      await isSubMenuVisible();
    });

    then(
      "Sub menu is displayed such as Intake Forms, Insurance Forms,  Health records, Education Documents",
      () => {
        defaultValidation();
      }
    );

    when("User clicks on Health Record sub menu", () => {
      defaultValidation();
    });

    then("User should be navigated to Health Record screen", () => {
      defaultValidation();
    });

    and(
      /^User should be able to see the latest medical record chart that uploaded by ECP E(\d+)$/,
      (arg0) => {
        defaultValidation();
      }
    );

    and(
      "User should be able to see the name of the medical record as same as the name of the uploaded pdf file",
      () => {
        const name = container.getAllByText(/Medical Record -/i)[0];
        expect(name).toBeInTheDocument();
      }
    );

    and(
      "User should be able to see the date on when the medical record has been uploaded by ECP for him/her",
      () => {
        const date = container.getAllByText(/10:00AM/i)[0];
        expect(date).toBeInTheDocument();
      }
    );

    and(
      "User should be able to see the uploaded date in ‘mm/dd/yyyy’ format",
      () => {
        const date = container.getAllByText(/10\/07\/2022/i)[0];
        expect(date).toBeInTheDocument();
      }
    );

    and("User should have the provision to view the medical record", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-7205_STORY_EPP-7025 - Verify User should have the provision to view the medical record", ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch Patient Portal url", () => {
      defaultValidation();
    });

    and("user is logged into the portal", () => {
      defaultValidation();
    });

    and("user lands on the dashboard screen", async () => {
      window.matchMedia = createMatchMedia("700px");
      await renderHealthRecord(medicalRecordMockData, 200);
    });

    and("user should see Top Navigation Menu such as", () => {
      defaultValidation();
    });

    when("User Click on Document menu", async () => {
      await isSubMenuVisible();
    });

    then(
      "Sub menu is displayed such as Intake Forms, Insurance Forms,  Health records, Education Documents",
      () => {
        defaultValidation();
      }
    );

    when("User clicks on Health Record sub menu", () => {
      defaultValidation();
    });

    then("User should be navigated to Health Record screen", () => {
      defaultValidation();
    });

    and(
      /^User should be able to see the latest medical record chart that uploaded by ECP E(\d+)$/,
      (arg0) => {
        defaultValidation();
      }
    );

    and(
      "User should be able to see the name of the medical record as same as the name of the uploaded pdf file",
      () => {
        const name = container.getAllByText(/Medical Record -/i)[0];
        expect(name).toBeInTheDocument();
      }
    );

    and(
      "User should be able to see the date on when the medical record has been uploaded by ECP for him/her",
      () => {
        const date = container.getAllByText(/10:00AM/i)[0];
        expect(date).toBeInTheDocument();
      }
    );

    and(
      "User should be able to see the uploaded date in ‘mm/dd/yyyy’ format",
      () => {
        const date = container.getAllByText(/10\/07\/2022/i)[0];
        expect(date).toBeInTheDocument();
      }
    );

    and("User should have the provision to view the medical record", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-26_STORY_EPP-7025 - Verify User should be able to see the uploaded date in ‘mm/dd/yyyy’ format", ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch Patient Portal url", () => {
      defaultValidation();
    });

    and("user is logged into the portal", () => {
      defaultValidation();
    });

    and("user lands on the dashboard screen", async () => {
      window.matchMedia = createMatchMedia("700px");
      await renderHealthRecord(medicalRecordMockData, 200);
    });

    and("user should see Top Navigation Menu such as", () => {
      defaultValidation();
    });

    when("User Click on Document menu", async () => {
      await isSubMenuVisible();
    });

    then(
      "Sub menu is displayed such as Intake Forms, Insurance Forms,  Health records, Education Documents",
      () => {
        defaultValidation();
      }
    );

    when("User clicks on Health Record sub menu", () => {
      defaultValidation();
    });

    then("User should be navigated to Health Record screen", () => {
      defaultValidation();
    });

    and(
      /^User should be able to see the latest medical record chart that uploaded by ECP E(\d+)$/,
      (arg0) => {
        defaultValidation();
      }
    );

    and(
      "User should be able to see the name of the medical record as same as the name of the uploaded pdf file",
      () => {
        const name = container.getAllByText(/Medical Record -/i)[0];
        expect(name).toBeInTheDocument();
      }
    );

    and(
      "User should be able to see the date on when the medical record has been uploaded by ECP for him/her",
      () => {
        const date = container.getAllByText(/10:00AM/i)[0];
        expect(date).toBeInTheDocument();
      }
    );

    and(
      "User should be able to see the uploaded date in ‘mm/dd/yyyy’ format",
      () => {
        const date = container.getAllByText(/10\/07\/2022/i)[0];
        expect(date).toBeInTheDocument();
      }
    );
  });

  test("EPIC_EPP-26_STORY_EPP-7025 - Verify User should be able to see the name of the medical record as same as the name of the uploaded pdf", ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch Patient Portal url", () => {
      defaultValidation();
    });

    and("user is logged into the portal", () => {
      defaultValidation();
    });

    and("user lands on the dashboard screen", async () => {
      window.matchMedia = createMatchMedia("1400px");
      await renderHealthRecord(medicalRecordMockData, 200);
    });

    and("user should see Top Navigation Menu such as", () => {
      defaultValidation();
    });

    when("User Click on Document menu", async () => {
      await isSubMenuVisible();
    });

    then(
      "Sub menu is displayed such as Intake Forms, Insurance Forms,  Health records, Education Documents",
      () => {
        defaultValidation();
      }
    );

    when("User clicks on Health Record sub menu", () => {
      defaultValidation();
    });

    then("User should be navigated to Health Record screen", () => {
      defaultValidation();
    });

    and(
      /^User should be able to see the latest medical record chart that uploaded by ECP E(\d+)$/,
      (arg0) => {
        defaultValidation();
      }
    );

    and(
      "User should be able to see the name of the medical record as same as the name of the uploaded pdf file",
      () => {
        const name = container.getAllByText(/Medical Record -/i)[0];
        expect(name).toBeInTheDocument();
      }
    );
  });
});
