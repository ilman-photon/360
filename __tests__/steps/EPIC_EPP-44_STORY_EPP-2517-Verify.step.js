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
  "./__tests__/feature/Patient Portal/Sprint4/EPP-2517.feature"
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
  test('EPIC_EPP-44_STORY_EPP-2517 - Verify user able to see an error message when there are no results for the searched location and selected date of appointment.', ({ given, and, then, when }) => {
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

    and('user increases the radius search locations', () => {
      expect(true).toBeTruthy();
    });

    and(/^user search the providers with distance greater than (\d+) miles$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('application not displaying any providers', () => {
      expect(true).toBeTruthy();
    });

    when(/^user increasing radius distance greater than (\d+) miles$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user views the error message \'No appointment slots based upon your request. Please try again with a different combination.\'', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2517 - Verify user should not see an error message when with distance less than 20 miles for the searched location and selected date of appointment.', ({ given, and, then }) => {
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

    and('user increases the radius search locations', () => {
      expect(true).toBeTruthy();
    });

    and(/^user search the providers with distance less than (\d+) miles$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user views the search results', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2517 - Verify user able to see an error message when there are no results for the searched location 25 miles distance of providers locations and selected date of appointment.', ({ given, and, then, when }) => {
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

    and('user increases the radius search locations', () => {
      expect(true).toBeTruthy();
    });

    and(/^user searched location (\d+) miles distance of providers locations$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('application not displaying any providers', () => {
      expect(true).toBeTruthy();
    });

    when(/^user increasing distance (\d+) miles$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user views the error message \'No appointment slots based upon your request. Please try again with a different combination.\'', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2517 - Verify user able to see an error message when user entered the invalid location and there are no results for the searched location and selected date of appointment.', ({ given, and, then }) => {
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

    and('user entered the invalid locations to search', () => {
      expect(true).toBeTruthy();
    });

    then('user views the error message \'No appointment slots based upon your request. Please try again with a different combination.\'', () => {
      expect(true).toBeTruthy();
    });
  });
});
