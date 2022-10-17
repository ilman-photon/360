import { act, fireEvent, render, waitFor } from "@testing-library/react";
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
} from "../../__mocks__/commonSteps";
import {
  mockAppointmentTypes,
  submitFilter,
} from "../../__mocks__/mockResponse";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-1572.feature"
);

defineFeature(feature, (test) => {
  let container;
  const { APPOINTMENT_TEST_ID, SEARCH_PROVIDER_TEST_ID } = constants.TEST_ID;
  const mock = new MockAdapter(axios);
  beforeEach(() => {
    const mockGeolocation = {
      getCurrentPosition: jest.fn(),
      watchPosition: jest.fn(),
    };

    mock
      .onGet(`/ecp/appointments/appointment-types`)
      .reply(200, mockAppointmentTypes);
    mock
      .onPut(`/ecp/appointments/available-slot?searchText=Texas`)
      .reply(200, submitFilter);
    global.navigator.geolocation = mockGeolocation;
    window.matchMedia = createMatchMedia("1920px");
  });

  test("EPIC_EPP-44_STORY_EPP-1572-Verify if user able to view and select continue as guest option", ({
    given,
    when,
    then,
    and,
  }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to the search screen", () => {
      defaultValidation();
    });

    and("User should fill the location", () => {
      defaultValidation();
    });

    and("User should select the Date & Time with provider", () => {
      defaultValidation();
    });

    and("User should select the purpose of the visit", () => {
      defaultValidation();
    });

    and("User has reviewed the appointment details", () => {
      defaultValidation();
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then("User should navigated to the Patient Portal application", () => {
      defaultValidation();
    });

    and("User should see option as Continue as a Guest button", () => {
      defaultValidation();
    });

    and("User to click & select Continue as a Guest button", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1572- Verify if user able to navigate to basic detail page after select Continue as a Guest", ({
    when,
    then,
    and,
  }) => {
    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to the search screen", () => {
      defaultValidation();
    });

    and("User should fill the location", () => {
      defaultValidation();
    });

    and("User should select the Date & Time with provider", () => {
      defaultValidation();
    });

    and("User should select the purpose of the visit", () => {
      defaultValidation();
    });

    and("User has reviewed the appointment details", () => {
      defaultValidation();
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then("User should navigated to the Patient Portal application", () => {
      defaultValidation();
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then("User should navigated to the Patient Portal application", () => {
      defaultValidation();
    });

    and("User should see option as Continue as a Guest button", () => {
      defaultValidation();
    });

    when("User to click & select Continue as a Guest button", () => {
      defaultValidation();
    });

    then("User should lands onto Page to enter basic details", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1572-Verify if user able to view basic details fields", ({
    given,
    when,
    then,
    and,
  }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to the search screen", () => {
      defaultValidation();
    });

    and("User should fill the location", () => {
      defaultValidation();
    });

    and("User should select the Date & Time with provider", () => {
      defaultValidation();
    });

    and("User should select the purpose of the visit", () => {
      defaultValidation();
    });

    and("User has reviewed the appointment details", () => {
      defaultValidation();
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then("User should navigated to the Patient Portal application", () => {
      defaultValidation();
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then("User should navigated to the Patient Portal application", () => {
      defaultValidation();
    });

    and("User should see option as Continue as a Guest button", () => {
      defaultValidation();
    });

    when("User to click & select Continue as a Guest button", () => {
      defaultValidation();
    });

    then("User should lands onto Page to enter basic details", () => {
      defaultValidation();
    });

    and(
      "User should see fields First Name, Last Name, Date Of Birth, Email, Mobile Number, Preferred mode(s) of communication",
      () => {}
    );
  });

  test("EPIC_EPP-44_STORY_EPP-1572- Verify if user able to view First Name, Last Name, Date of Birth, Preferred mode(s) of communication as mandatory field", ({
    given,
    when,
    then,
    and,
  }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to the search screen", () => {
      defaultValidation();
    });

    and("User should fill the location", () => {
      defaultValidation();
    });

    and("User should select the Date & Time with provider", () => {
      defaultValidation();
    });

    and("User should select the purpose of the visit", () => {
      defaultValidation();
    });

    and("User has reviewed the appointment details", () => {
      defaultValidation();
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then("User should navigated to the Patient Portal application", () => {
      defaultValidation();
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then("User should navigated to the Patient Portal application", () => {
      defaultValidation();
    });

    and("User should see option as Continue as a Guest button", () => {
      defaultValidation();
    });

    when("User to click & select Continue as a Guest button", () => {
      defaultValidation();
    });

    then("User should lands onto Page to enter basic details", () => {
      defaultValidation();
    });

    and(
      "User should see First Name, Last Name, Date of Birth, Preferred mode(s) of communication field as mandatory",
      () => {}
    );
  });

  test("EPIC_EPP-44_STORY_EPP-1572-Verify if user to able to enter charater min2 & Max 50 in First Name field", ({
    given,
    when,
    then,
    and,
  }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to the search screen", () => {
      defaultValidation();
    });

    and("User should fill the location", () => {
      defaultValidation();
    });

    and("User should select the Date & Time with provider", () => {
      defaultValidation();
    });

    and("User should select the purpose of the visit", () => {
      defaultValidation();
    });

    and("User has reviewed the appointment details", () => {
      defaultValidation();
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then("User should navigated to the Patient Portal application", () => {
      defaultValidation();
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then("User should navigated to the Patient Portal application", () => {
      defaultValidation();
    });

    and("User should see option as Continue as a Guest button", () => {
      defaultValidation();
    });

    when("User to click & select Continue as a Guest button", () => {
      defaultValidation();
    });

    then("User should lands onto Page to enter basic details", () => {
      defaultValidation();
    });

    and(
      "User should see fields First Name, Last Name, Date Of Birth, Email, Mobile Number, Preferred mode(s) of communication",
      () => {}
    );

    when(
      /^user enter first name field with mimium (\d+) to maximum (\d+) characters$/,
      (arg0, arg1) => {}
    );

    then(
      "user should see the enter character length accepted in First name field",
      () => {}
    );
  });

  test("EPIC_EPP-44_STORY_EPP-1572-Verify if user to able to enter charater min2 & Max 50 in Last Name field", ({
    given,
    when,
    then,
    and,
  }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to the search screen", () => {
      defaultValidation();
    });

    and("User should fill the location", () => {
      defaultValidation();
    });

    and("User should select the Date & Time with provider", () => {
      defaultValidation();
    });

    and("User should select the purpose of the visit", () => {
      defaultValidation();
    });

    and("User has reviewed the appointment details", () => {
      defaultValidation();
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then("User should navigated to the Patient Portal application", () => {
      defaultValidation();
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then("User should navigated to the Patient Portal application", () => {
      defaultValidation();
    });

    and("User should see option as Continue as a Guest button", () => {
      defaultValidation();
    });

    when("User to click & select Continue as a Guest button", () => {
      defaultValidation();
    });

    then("User should lands onto Page to enter basic details", () => {
      defaultValidation();
    });

    and(
      "User should see fields First Name, Last Name, Date Of Birth, Email, Mobile Number, Preferred mode(s) of communication",
      () => {}
    );

    when(
      /^user enter Last name field with mimium (\d+) to maximum (\d+) characters$/,
      (arg0, arg1) => {}
    );

    then(
      "user should see the enter character length accepted in Last name field",
      () => {}
    );
  });

  test("EPIC_EPP-44_STORY_EPP-1572-Verify if user able to enter Date of Birth in MM/DD/YYYY format", ({
    given,
    when,
    then,
    and,
  }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to the search screen", () => {
      defaultValidation();
    });

    and("User should fill the location", () => {
      defaultValidation();
    });

    and("User should select the Date & Time with provider", () => {
      defaultValidation();
    });

    and("User should select the purpose of the visit", () => {
      defaultValidation();
    });

    and("User has reviewed the appointment details", () => {
      defaultValidation();
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then("User should navigated to the Patient Portal application", () => {
      defaultValidation();
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then("User should navigated to the Patient Portal application", () => {
      defaultValidation();
    });

    and("User should see option as Continue as a Guest button", () => {
      defaultValidation();
    });

    when("User to click & select Continue as a Guest button", () => {
      defaultValidation();
    });

    then("User should lands onto Page to enter basic details", () => {
      defaultValidation();
    });

    and(
      "User should see fields First Name, Last Name, Date Of Birth, Email, Mobile Number, Preferred mode(s) of communication",
      () => {}
    );

    when("user enter Date of Birth field in MM/DD/YYYY format", () => {
      defaultValidation();
    });

    then("user should see Date entered in the field", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1572-Verify if user able to enter email id with correct format in Email field", ({
    given,
    when,
    then,
    and,
  }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to the search screen", () => {
      defaultValidation();
    });

    and("User should fill the location", () => {
      defaultValidation();
    });

    and("User should select the Date & Time with provider", () => {
      defaultValidation();
    });

    and("User should select the purpose of the visit", () => {
      defaultValidation();
    });

    and("User has reviewed the appointment details", () => {
      defaultValidation();
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then("User should navigated to the Patient Portal application", () => {
      defaultValidation();
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then("User should navigated to the Patient Portal application", () => {
      defaultValidation();
    });

    and("User should see option as Continue as a Guest button", () => {
      defaultValidation();
    });

    when("User to click & select Continue as a Guest button", () => {
      defaultValidation();
    });

    then("User should lands onto Page to enter basic details", () => {
      defaultValidation();
    });

    and(
      "User should see fields First Name, Last Name, Date Of Birth, Email, Mobile Number, Preferred mode(s) of communication",
      () => {}
    );

    when("User enter email id with correct format in Email field", () => {
      defaultValidation();
    });

    then("user should see email entered in the field", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1572-Verify if user able to Mobile number with correct format in Mobile number field", ({
    given,
    when,
    then,
    and,
  }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to the search screen", () => {
      defaultValidation();
    });

    and("User should fill the location", () => {
      defaultValidation();
    });

    and("User should select the Date & Time with provider", () => {
      defaultValidation();
    });

    and("User should select the purpose of the visit", () => {
      defaultValidation();
    });

    and("User has reviewed the appointment details", () => {
      defaultValidation();
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then("User should navigated to the Patient Portal application", () => {
      defaultValidation();
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then("User should navigated to the Patient Portal application", () => {
      defaultValidation();
    });

    and("User should see option as Continue as a Guest button", () => {
      defaultValidation();
    });

    when("User to click & select Continue as a Guest button", () => {
      defaultValidation();
    });

    then("User should lands onto Page to enter basic details", () => {
      defaultValidation();
    });

    and(
      "User should see fields First Name, Last Name, Date Of Birth, Email, Mobile Number, Preferred mode(s) of communication",
      () => {}
    );

    when(
      "User enter number with correct format in Mobile number field",
      () => {}
    );

    then("user should see Mobile number entered in the field", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1572-Verify if user able to see either Email or Mobile number field mandatory if both field leaves blank", ({
    given,
    when,
    then,
    and,
  }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to the search screen", () => {
      defaultValidation();
    });

    and("User should fill the location", () => {
      defaultValidation();
    });

    and("User should select the Date & Time with provider", () => {
      defaultValidation();
    });

    and("User should select the purpose of the visit", () => {
      defaultValidation();
    });

    and("User has reviewed the appointment details", () => {
      defaultValidation();
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then("User should navigated to the Patient Portal application", () => {
      defaultValidation();
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then("User should navigated to the Patient Portal application", () => {
      defaultValidation();
    });

    and("User should see option as Continue as a Guest button", () => {
      defaultValidation();
    });

    when("User to click & select Continue as a Guest button", () => {
      defaultValidation();
    });

    then("User should lands onto Page to enter basic details", () => {
      defaultValidation();
    });

    and(
      "User should see fields First Name, Last Name, Date Of Birth, Email, Mobile Number, Preferred mode(s) of communication",
      () => {}
    );

    when(
      "User leave both field(Email & Mobile number) blank and enter",
      () => {}
    );

    then(
      'user should see error message "Email ID or Mobile Number is required”',
      () => {}
    );
  });

  test("EPIC_EPP-44_STORY_EPP-1572- Verify if user able to see error message when mandatory field leaves blank", ({
    given,
    when,
    then,
    and,
  }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to the search screen", () => {
      defaultValidation();
    });

    and("User should fill the location", () => {
      defaultValidation();
    });

    and("User should select the Date & Time with provider", () => {
      defaultValidation();
    });

    and("User should select the purpose of the visit", () => {
      defaultValidation();
    });

    and("User has reviewed the appointment details", () => {
      defaultValidation();
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then("User should navigated to the Patient Portal application", () => {
      defaultValidation();
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then("User should navigated to the Patient Portal application", () => {
      defaultValidation();
    });

    and("User should see option as Continue as a Guest button", () => {
      defaultValidation();
    });

    when("User to click & select Continue as a Guest button", () => {
      defaultValidation();
    });

    then("User should lands onto Page to enter basic details", () => {
      defaultValidation();
    });

    when(
      "user leave mandatory field ( First Name, Last Name, Date of Birth, Preferred mode(s) of communication) blank",
      () => {}
    );

    and("User should error message “This field is required”", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1572- Verify if user able to see submit option after enter all details in the field", ({
    when,
    then,
    and,
  }) => {
    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to the search screen", () => {
      defaultValidation();
    });

    and("User should fill the location", () => {
      defaultValidation();
    });

    and("User should select the Date & Time with provider", () => {
      defaultValidation();
    });

    and("User should select the purpose of the visit", () => {
      defaultValidation();
    });

    and("User has reviewed the appointment details", () => {
      defaultValidation();
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then("User should navigated to the Patient Portal application", () => {
      defaultValidation();
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then("User should navigated to the Patient Portal application", () => {
      defaultValidation();
    });

    and("User should see option as Continue as a Guest button", () => {
      defaultValidation();
    });

    when("User to click & select Continue as a Guest button", () => {
      defaultValidation();
    });

    then("User should lands onto Page to enter basic details", () => {
      defaultValidation();
    });

    when(
      "User enter details in the field First Name, Last Name, Date Of Birth, Email, Mobile Number, Preferred mode(s) of communication",
      () => {}
    );

    and("user to click on submit button", () => {
      defaultValidation();
    });

    then("user should see details submitted", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1572- Verify if user able to view the field Preferred mode of communication preselected with option Both", ({
    when,
    then,
    and,
  }) => {
    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to the search screen", () => {
      defaultValidation();
    });

    and("User should fill the location", () => {
      defaultValidation();
    });

    and("User should select the Date & Time with provider", () => {
      defaultValidation();
    });

    and("User should select the purpose of the visit", () => {
      defaultValidation();
    });

    and("User has reviewed the appointment details", () => {
      defaultValidation();
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then("User should navigated to the Patient Portal application", () => {
      defaultValidation();
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then("User should navigated to the Patient Portal application", () => {
      defaultValidation();
    });

    and("User should see option as Continue as a Guest button", () => {
      defaultValidation();
    });

    when("User to click & select Continue as a Guest button", () => {
      defaultValidation();
    });

    then("User should lands onto Page to enter basic details", () => {
      defaultValidation();
    });

    when(
      "user mouse over to field Preferred mode(s) of communication",
      () => {}
    );

    then(
      "user should see the field Preferred mode(s) of communication preselected the option Both",
      () => {}
    );
  });

  test("EPIC_EPP-44_STORY_EPP-1572- Verify if user able to change Preferred mode of communication to Mobile Number or Both when Email is provided", ({
    when,
    then,
    and,
  }) => {
    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to the search screen", () => {
      defaultValidation();
    });

    and("User should fill the location", () => {
      defaultValidation();
    });

    and("User should select the Date & Time with provider", () => {
      defaultValidation();
    });

    and("User should select the purpose of the visit", () => {
      defaultValidation();
    });

    and("User has reviewed the appointment details", () => {
      defaultValidation();
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then("User should navigated to the Patient Portal application", () => {
      defaultValidation();
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then("User should navigated to the Patient Portal application", () => {
      defaultValidation();
    });

    and("User should see option as Continue as a Guest button", () => {
      defaultValidation();
    });

    when("User to click & select Continue as a Guest button", () => {
      defaultValidation();
    });

    then("User should lands onto Page to enter basic details", () => {
      defaultValidation();
    });

    when(
      /^user provide the details to the field (.*),(.*),(.*),(.*)$/,
      (arg0, arg1, arg2, arg3) => {}
    );

    then(
      "user should see the field “Preferred mode(s) of communication” selected with option 'Email'",
      () => {}
    );

    and(
      "user change the preferred mode to either Mobile number or Both",
      () => {}
    );

    then(
      "user should see field “Preferred mode(s) of communication” selected with either 'Mobile number' or 'Both'",
      () => {}
    );
  });

  test('EPIC_EPP-44_STORY_EPP-1572- Verify if user able to change "Preferred mode of communication" to Email or Both when Mobile number is provided', ({
    when,
    then,
    and,
  }) => {
    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to the search screen", () => {
      defaultValidation();
    });

    and("User should fill the location", () => {
      defaultValidation();
    });

    and("User should select the Date & Time with provider", () => {
      defaultValidation();
    });

    and("User should select the purpose of the visit", () => {
      defaultValidation();
    });

    and("User has reviewed the appointment details", () => {
      defaultValidation();
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then("User should navigated to the Patient Portal application", () => {
      defaultValidation();
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then("User should navigated to the Patient Portal application", () => {
      defaultValidation();
    });

    and("User should see option as Continue as a Guest button", () => {
      defaultValidation();
    });

    when("User to click & select Continue as a Guest button", () => {
      defaultValidation();
    });

    then("User should lands onto Page to enter basic details", () => {
      defaultValidation();
    });

    when(
      /^user provide the details to the field (.*),(.*),(.*),(.*)$/,
      (arg0, arg1, arg2, arg3) => {}
    );

    then(
      "user should see the field “Preferred mode(s) of communication” selected with option 'Mobile number'",
      () => {}
    );

    and("user change the preferred mode to either Email or Both", () => {
      defaultValidation();
    });

    then(
      "user should see field “Preferred mode(s) of communication” selected with either 'Email' or 'Both'",
      () => {}
    );
  });

  test("EPIC_EPP-44_STORY_EPP-1572- Verify if user able to change \"Preferred mode of communication\" to 'Email' or 'Mobile number' when Both Mobile number & Email provided", ({
    when,
    then,
    and,
  }) => {
    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to the search screen", () => {
      defaultValidation();
    });

    and("User should fill the location", () => {
      defaultValidation();
    });

    and("User should select the Date & Time with provider", () => {
      defaultValidation();
    });

    and("User should select the purpose of the visit", () => {
      defaultValidation();
    });

    and("User has reviewed the appointment details", () => {
      defaultValidation();
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then("User should navigated to the Patient Portal application", () => {
      defaultValidation();
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then("User should navigated to the Patient Portal application", () => {
      defaultValidation();
    });

    and("User should see option as Continue as a Guest button", () => {
      defaultValidation();
    });

    when("User to click & select Continue as a Guest button", () => {
      defaultValidation();
    });

    then("User should lands onto Page to enter basic details", () => {
      defaultValidation();
    });

    when(
      /^user provide the details to the field (.*),(.*),(.*),(.*),(.*)$/,
      (arg0, arg1, arg2, arg3, arg4) => {}
    );

    then(
      "user should see the field “Preferred mode(s) of communication” selected with option 'Both'",
      () => {}
    );

    and(
      "user change the preferred mode to either Email or Mobile number",
      () => {}
    );

    then(
      "user should see field “Preferred mode(s) of communication” selected with either 'Email' or 'Mobile number'",
      () => {}
    );
  });
});
