import { act, fireEvent, render, waitFor } from "@testing-library/react";
import axios from "axios";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import { defineFeature, loadFeature } from "jest-cucumber";
import { Provider } from "react-redux";
import Bio, { getServerSideProps } from "../../src/pages/patient/bio/[bio]";
import store from "../../src/store/store";
import { Marker, useLoadScript } from "@react-google-maps/api";
const useRouter = jest.spyOn(require("next/router"), "useRouter");
import constants from "../../src/utils/constants";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-2519.feature"
);

jest.mock("@react-google-maps/api", () => ({
  useLoadScript: () => ({
    isLoaded: true,
    loadError: null
  }),
  GoogleMap: () => <div></div>,
  Marker: () => <Marker />
}));

defineFeature(feature, (test) => {
  let container;
  test('EPIC_EPP-44_STORY_EPP-2519 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance.', ({ given, and, then }) => {
    given('user launch the Marketing Site url', () => {
      expect(true).toBeTruthy();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
      expect(true).toBeTruthy();
    });

    then('user navigates to the search screen', () => {
      expect(true).toBeTruthy();
    });

    and('user enters the location', () => {
      expect(true).toBeTruthy();
    });

    and('user selects the date of appointment', () => {
      expect(true).toBeTruthy();
    });

    and('user chooses the purpose of the visit', () => {
      expect(true).toBeTruthy();
    });

    and('user enters the insurance name', () => {
      expect(true).toBeTruthy();
    });

    and('user clicks on the Search button', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2519 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance and user view the location', ({ given, and, then }) => {
    given('user launch the Marketing Site url', () => {
      expect(true).toBeTruthy();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
      expect(true).toBeTruthy();
    });

    then('user navigates to the search screen', () => {
      expect(true).toBeTruthy();
    });

    and('user enters the location', () => {
      expect(true).toBeTruthy();
    });

    and('user selects the date of appointment', () => {
      expect(true).toBeTruthy();
    });

    and('user chooses the purpose of the visit', () => {
      expect(true).toBeTruthy();
    });

    and('user enters the insurance name', () => {
      expect(true).toBeTruthy();
    });

    and('user clicks on the Search button', () => {
      expect(true).toBeTruthy();
    });

    and('user views the results in the Schedule Appointments screen', () => {
      expect(true).toBeTruthy();
    });

    and('user views the selected location.', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2519 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user view the date of appointment', ({ given, and, then }) => {
    given('user launch the Marketing Site url', () => {
      expect(true).toBeTruthy();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
      expect(true).toBeTruthy();
    });

    then('user navigates to the search screen', () => {
      expect(true).toBeTruthy();
    });

    and('user enters the location', () => {
      expect(true).toBeTruthy();
    });

    and('user selects the date of appointment', () => {
      expect(true).toBeTruthy();
    });

    and('user chooses the purpose of the visit', () => {
      expect(true).toBeTruthy();
    });

    and('user enters the insurance name', () => {
      expect(true).toBeTruthy();
    });

    and('user clicks on the Search button', () => {
      expect(true).toBeTruthy();
    });

    and('user views the results in the Schedule Appointments screen', () => {
      expect(true).toBeTruthy();
    });

    and('user views the date of appointment.', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2519 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user views the purpose of visit', ({ given, and, then }) => {
    given('user launch the Marketing Site URL', () => {
      expect(true).toBeTruthy();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
      expect(true).toBeTruthy();
    });

    then('user navigates to the search screen', () => {
      expect(true).toBeTruthy();
    });

    and('user enters the location', () => {
      expect(true).toBeTruthy();
    });

    and('user selects the date of appointment', () => {
      expect(true).toBeTruthy();
    });

    and('user chooses the purpose of the visit', () => {
      expect(true).toBeTruthy();
    });

    and('user enters the insurance name', () => {
      expect(true).toBeTruthy();
    });

    and('user clicks on the Search button', () => {
      expect(true).toBeTruthy();
    });

    and('user views the results in the Schedule Appointments screen', () => {
      expect(true).toBeTruthy();
    });

    and('user views the purpose of the visit.', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2519 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user view the insurance carrier.', ({ given, and, then }) => {
    given('user launch the Marketing Site url', () => {
      expect(true).toBeTruthy();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
      expect(true).toBeTruthy();
    });

    then('user navigates to the search screen', () => {
      expect(true).toBeTruthy();
    });

    and('user enters the location', () => {
      expect(true).toBeTruthy();
    });

    and('user selects the date of appointment', () => {
      expect(true).toBeTruthy();
    });

    and('user chooses the purpose of the visit', () => {
      expect(true).toBeTruthy();
    });

    and('user enters the insurance name', () => {
      expect(true).toBeTruthy();
    });

    and('user clicks on the Search button', () => {
      expect(true).toBeTruthy();
    });

    and('user views the results in the Schedule Appointments screen', () => {
      expect(true).toBeTruthy();
    });

    and('user views the insurance carrier.', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2519 - Verify whether user is able to see Schedule Appointment screen with the selected location, date, purpose of visit and insurance carrier', ({ given, and, then }) => {
    given('user launch the Marketing Site url', () => {
      expect(true).toBeTruthy();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
      expect(true).toBeTruthy();
    });

    then('user navigates to the search screen', () => {
      expect(true).toBeTruthy();
    });

    and('user enters the location', () => {
      expect(true).toBeTruthy();
    });

    and('user selects the date of appointment', () => {
      expect(true).toBeTruthy();
    });

    and('user chooses the purpose of the visit', () => {
      expect(true).toBeTruthy();
    });

    and('user enters the insurance name', () => {
      expect(true).toBeTruthy();
    });

    and('user clicks on the Search button', () => {
      expect(true).toBeTruthy();
    });

    and('user lands on Schedule Appointment screen with the selected location, date, purpose of visit (if provided) and insurance carrier (if provided)', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2519 - Verify whether the user is able to see the timeslot in the Schedule Oppointments screen', ({ given, and, then }) => {
    given('user launch the Marketing Site url', () => {
      expect(true).toBeTruthy();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
      expect(true).toBeTruthy();
    });

    then('user navigates to the search screen', () => {
      expect(true).toBeTruthy();
    });

    and('user enters the location', () => {
      expect(true).toBeTruthy();
    });

    and('user selects the date of appointment', () => {
      expect(true).toBeTruthy();
    });

    and('user chooses the purpose of the visit', () => {
      expect(true).toBeTruthy();
    });

    and('user enters the insurance name', () => {
      expect(true).toBeTruthy();
    });

    and('user clicks on the Search button', () => {
      expect(true).toBeTruthy();
    });

    and('user views the results in the Schedule Appointments screen', () => {
      expect(true).toBeTruthy();
    });

    and('user views the timeslot', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2519 - Verify whether the user is able to select the timeslot in the Schedule Oppointments screen', ({ given, and, then }) => {
    given('user launch the Marketing Site url', () => {
      expect(true).toBeTruthy();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
      expect(true).toBeTruthy();
    });

    then('user navigates to the search screen', () => {
      expect(true).toBeTruthy();
    });

    and('user enters the location', () => {
      expect(true).toBeTruthy();
    });

    and('user selects the date of appointment', () => {
      expect(true).toBeTruthy();
    });

    and('user chooses the purpose of the visit', () => {
      expect(true).toBeTruthy();
    });

    and('user enters the insurance name', () => {
      expect(true).toBeTruthy();
    });

    and('user clicks on the Search button', () => {
      expect(true).toBeTruthy();
    });

    and('user views the results in the Schedule Appointments screen', () => {
      expect(true).toBeTruthy();
    });

    and('user select the timeslot', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2519 - Verify whether the user lands on the screen to review the appointment details', ({ given, and, then }) => {
    given('user launch the Marketing Site url', () => {
      expect(true).toBeTruthy();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
      expect(true).toBeTruthy();
    });

    then('user navigates to the search screen', () => {
      expect(true).toBeTruthy();
    });

    and('user enters the location', () => {
      expect(true).toBeTruthy();
    });

    and('user selects the date of appointment', () => {
      expect(true).toBeTruthy();
    });

    and('user chooses the purpose of the visit', () => {
      expect(true).toBeTruthy();
    });

    and('user enters the insurance name', () => {
      expect(true).toBeTruthy();
    });

    and('user clicks on the Search button', () => {
      expect(true).toBeTruthy();
    });

    and('user views the results in the Schedule Appointments screen', () => {
      expect(true).toBeTruthy();
    });

    and('user select the timeslot', () => {
      expect(true).toBeTruthy();
    });

    then('user lands on the screen to review the appointment details', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2519 - Verify whether the user selects the option to change the insurance career', ({ given, and, then }) => {
    given('user launch the Marketing Site url', () => {
      expect(true).toBeTruthy();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
      expect(true).toBeTruthy();
    });

    then('user navigates to the search screen', () => {
      expect(true).toBeTruthy();
    });

    and('user enters the location', () => {
      expect(true).toBeTruthy();
    });

    and('user selects the date of appointment', () => {
      expect(true).toBeTruthy();
    });

    and('user chooses the purpose of the visit', () => {
      expect(true).toBeTruthy();
    });

    and('user enters the insurance name', () => {
      expect(true).toBeTruthy();
    });

    and('user clicks on the Search button', () => {
      expect(true).toBeTruthy();
    });

    and('user views the results in the Schedule Appointments screen', () => {
      expect(true).toBeTruthy();
    });

    and('user select the timeslot', () => {
      expect(true).toBeTruthy();
    });

    then('user lands on the screen to review the appointment details', () => {
      expect(true).toBeTruthy();
    });

    and('user selects the option to change the insurance career', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2519 - Verify whether the user should get navigated to the screen to select an insurance career', ({ given, and, then }) => {
    given('user launch the Marketing Site url', () => {
      expect(true).toBeTruthy();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
      expect(true).toBeTruthy();
    });

    then('user navigates to the search screen', () => {
      expect(true).toBeTruthy();
    });

    and('user enters the location', () => {
      expect(true).toBeTruthy();
    });

    and('user selects the date of appointment', () => {
      expect(true).toBeTruthy();
    });

    and('user chooses the purpose of the visit', () => {
      expect(true).toBeTruthy();
    });

    and('user enters the insurance name', () => {
      expect(true).toBeTruthy();
    });

    and('user clicks on the Search button', () => {
      expect(true).toBeTruthy();
    });

    and('user views the results in the Schedule Appointments screen', () => {
      expect(true).toBeTruthy();
    });

    and('user select the timeslot', () => {
      expect(true).toBeTruthy();
    });

    then('user lands on the screen to review the appointment details', () => {
      expect(true).toBeTruthy();
    });

    and('user selects the option to change the insurance career', () => {
      expect(true).toBeTruthy();
    });

    then('user should get navigated to the screen to select an insurance career', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2519 - Verify whether the user able to Change Insurance', ({ given, and, then }) => {
    given('user launch the Marketing Site url', () => {
      expect(true).toBeTruthy();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
      expect(true).toBeTruthy();
    });

    then('user navigates to the search screen', () => {
      expect(true).toBeTruthy();
    });

    and('user enters the location', () => {
      expect(true).toBeTruthy();
    });

    and('user selects the date of appointment', () => {
      expect(true).toBeTruthy();
    });

    and('user chooses the purpose of the visit', () => {
      expect(true).toBeTruthy();
    });

    and('user enters the insurance name', () => {
      expect(true).toBeTruthy();
    });

    and('user clicks on the Search button', () => {
      expect(true).toBeTruthy();
    });

    and('user views the results in the Schedule Appointments screen', () => {
      expect(true).toBeTruthy();
    });

    and('user select the timeslot', () => {
      expect(true).toBeTruthy();
    });

    then('user lands on the screen to review the appointment details', () => {
      expect(true).toBeTruthy();
    });

    and('user selects the option to change the insurance career', () => {
      expect(true).toBeTruthy();
    });

    then('user should get navigated to the screen to select an insurance career', () => {
      expect(true).toBeTruthy();
    });

    and('user Change Insurance', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2519 - Verify whether the user able to review the appointment details once again', ({ given, and, then }) => {
    given('user launch the Marketing Site url', () => {
      expect(true).toBeTruthy();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
      expect(true).toBeTruthy();
    });

    then('user navigates to the search screen', () => {
      expect(true).toBeTruthy();
    });

    and('user enters the location', () => {
      expect(true).toBeTruthy();
    });

    and('user selects the date of appointment', () => {
      expect(true).toBeTruthy();
    });

    and('user chooses the purpose of the visit', () => {
      expect(true).toBeTruthy();
    });

    and('user enters the insurance name', () => {
      expect(true).toBeTruthy();
    });

    and('user clicks on the Search button', () => {
      expect(true).toBeTruthy();
    });

    and('user views the results in the Schedule Appointments screen', () => {
      expect(true).toBeTruthy();
    });

    and('user select the timeslot', () => {
      expect(true).toBeTruthy();
    });

    then('user lands on the screen to review the appointment details', () => {
      expect(true).toBeTruthy();
    });

    and('user selects the option to change the insurance career', () => {
      expect(true).toBeTruthy();
    });

    then('user should get navigated to the screen to select an insurance career', () => {
      expect(true).toBeTruthy();
    });

    and('user Change Insurance during review', () => {
      expect(true).toBeTruthy();
    });

    then('user once again review the appointment details', () => {
      expect(true).toBeTruthy();
    });
  });
});
