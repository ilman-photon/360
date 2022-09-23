import { act, fireEvent, render, waitFor } from "@testing-library/react";
import axios from "axios";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import { defineFeature, loadFeature } from "jest-cucumber";
import { Provider } from "react-redux";
import Appointment from "../../src/pages/patient/appointment";
import store from "../../src/store/store";
const useRouter = jest.spyOn(require("next/router"), "useRouter");
import constants from "../../src/utils/constants";
import mediaQuery from "css-mediaquery";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-2507.feature"
);

defineFeature(feature, (test) => {
  let container;
  const element = document.createElement("div");
  const mock = new MockAdapter(axios);
  const mockSuggestion = {
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
  };

  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };

  function createMatchMedia(width) {
    return (query) => ({
      matches: mediaQuery.match(query, { width }),
      addListener: defaultValidation,
      removeListener: defaultValidation,
    });
  }

  test("EPIC_EPP-44_STORY_EPP-2507 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance.", ({
    given,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", defaultValidation);

    and("user clicks on the Schedule your Eye Exam button", defaultValidation);

    then("user navigates to the search screen", defaultValidation);

    and("user enters the location", defaultValidation);

    and("user selects the date of appointment", defaultValidation);

    and("user chooses the purpose of the visit", defaultValidation);

    and("user enters the insurance name", defaultValidation);

    and("user clicks on the Search button", defaultValidation);

    and(
      "user views the results on the Schedule Appointments screen",
      defaultValidation
    );

    and(
      "user views the selected location, date of appointment, the purpose of visit, and insurance carrier.",
      defaultValidation
    );
  });

  test("EPIC_EPP-44_STORY_EPP-2507 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance and user view the location", ({
    given,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", defaultValidation);

    and("user clicks on the Schedule your Eye Exam button", defaultValidation);

    then("user navigates to the search screen", defaultValidation);

    and("user enters the location", defaultValidation);

    and("user selects the date of appointment", defaultValidation);

    and("user chooses the purpose of the visit", defaultValidation);

    and("user enters the insurance name", defaultValidation);

    and("user clicks on the Search button", defaultValidation);

    and(
      "user views the results in the Schedule Appointments screen",
      defaultValidation
    );

    and("user views the selected location.", defaultValidation);
  });

  test("EPIC_EPP-44_STORY_EPP-2507 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user view the date of appointment", ({
    given,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", defaultValidation);

    and("user clicks on the Schedule your Eye Exam button", defaultValidation);

    then("user navigates to the search screen", defaultValidation);

    and("user enters the location", defaultValidation);

    and("user selects the date of appointment", defaultValidation);

    and("user chooses the purpose of the visit", defaultValidation);

    and("user enters the insurance name", defaultValidation);

    and("user clicks on the Search button", defaultValidation);

    and(
      "user views the results in the Schedule Appointments screen",
      defaultValidation
    );

    and("user views the date of appointment.", defaultValidation);
  });

  test("EPIC_EPP-44_STORY_EPP-2507 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user views the purpose of visit", ({
    given,
    and,
    then,
  }) => {
    given("user launch the Marketing Site URL", defaultValidation);

    and("user clicks on the Schedule your Eye Exam button", defaultValidation);

    then("user navigates to the search screen", defaultValidation);

    and("user enters the location", defaultValidation);

    and("user selects the date of appointment", defaultValidation);

    and("user chooses the purpose of the visit", defaultValidation);

    and("user enters the insurance name", defaultValidation);

    and("user clicks on the Search button", defaultValidation);

    and(
      "user views the results in the Schedule Appointments screen",
      defaultValidation
    );

    and("user views the purpose of the visit.", defaultValidation);
  });

  test("EPIC_EPP-44_STORY_EPP-2507 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user view the insurance carrier.", ({
    given,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", defaultValidation);

    and("user clicks on the Schedule your Eye Exam button", defaultValidation);

    then("user navigates to the search screen", defaultValidation);

    and("user enters the location", defaultValidation);

    and("user selects the date of appointment", defaultValidation);

    and("user chooses the purpose of the visit", defaultValidation);

    and("user enters the insurance name", defaultValidation);

    and("user clicks on the Search button", defaultValidation);

    and(
      "user views the results in the Schedule Appointments screen",
      defaultValidation
    );

    and("user views the insurance carrier.", defaultValidation);
  });

  test("EPIC_EPP-44_STORY_EPP-2507 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user views the purpose of visit as blank when the user not entered", ({
    given,
    and,
    then,
    when,
  }) => {
    given("user launch the Marketing Site URL", defaultValidation);

    and("user clicks on the Schedule your Eye Exam button", defaultValidation);

    then("user navigates to the search screen", defaultValidation);

    and("user enters the location", defaultValidation);

    and("user selects the date of appointment", defaultValidation);

    and("user chooses the purpose of the visit", defaultValidation);

    and("user enters the insurance name", defaultValidation);

    and("user clicks on the Search button", defaultValidation);

    and(
      "user views the results in the Schedule Appointments screen",
      defaultValidation
    );

    and("user views the purpose of the visit as blank", defaultValidation);

    when("the user not entered the purpose of the visit", defaultValidation);
  });

  test("EPIC_EPP-44_STORY_EPP-2507 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance and user view the location using City with the selected location", ({
    given,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", defaultValidation);

    and("user clicks on the Schedule your Eye Exam button", defaultValidation);

    then("user navigates to the search screen", defaultValidation);

    and("user enters the location", defaultValidation);

    and("user selects the date of appointment", defaultValidation);

    and("user chooses the purpose of the visit", defaultValidation);

    and("user enters the insurance name", defaultValidation);

    and("user clicks on the Search button", defaultValidation);

    and(
      "user views the results in the Schedule Appointments screen",
      defaultValidation
    );

    and("user views the selected location.", defaultValidation);

    and(
      "user views an option to search locations using City with the selected location",
      defaultValidation
    );
  });

  test("EPIC_EPP-44_STORY_EPP-2507 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance and user view the location using State with the selected location", ({
    given,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", defaultValidation);

    and("user clicks on the Schedule your Eye Exam button", defaultValidation);

    then("user navigates to the search screen", defaultValidation);

    and("user enters the location", defaultValidation);

    and("user selects the date of appointment", defaultValidation);

    and("user chooses the purpose of the visit", defaultValidation);

    and("user enters the insurance name", defaultValidation);

    and("user clicks on the Search button", defaultValidation);

    and(
      "user views the results in the Schedule Appointments screen",
      defaultValidation
    );

    and("user views the selected location.", defaultValidation);

    and(
      "user views an option to search locations using State with the selected location",
      defaultValidation
    );
  });

  test("EPIC_EPP-44_STORY_EPP-2507 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance and user view the location using  Zipcode with the selected location", ({
    given,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", defaultValidation);

    and("user clicks on the Schedule your Eye Exam button", defaultValidation);

    then("user navigates to the search screen", defaultValidation);

    and("user enters the location", defaultValidation);

    and("user selects the date of appointment", defaultValidation);

    and("user chooses the purpose of the visit", defaultValidation);

    and("user enters the insurance name", defaultValidation);

    and("user clicks on the Search button", defaultValidation);

    and(
      "user views the results in the Schedule Appointments screen",
      defaultValidation
    );

    and("user views the selected location.", defaultValidation);

    and(
      "user views an option to search locations using Zipcode with the selected location",
      defaultValidation
    );
  });

  test("EPIC_EPP-44_STORY_EPP-2507 - Verify user able to search for the location and select the date of appointment as well as the purpose of visit and insurance and user view the location using the system to detect their location", ({
    given,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", defaultValidation);

    and("user clicks on the Schedule your Eye Exam button", defaultValidation);

    then("user navigates to the search screen", defaultValidation);

    and("user enters the location", defaultValidation);

    and("user selects the date of appointment", defaultValidation);

    and("user chooses the purpose of the visit", defaultValidation);

    and("user enters the insurance name", defaultValidation);

    and("user clicks on the Search button", defaultValidation);

    and(
      "user views the results in the Schedule Appointments screen",
      defaultValidation
    );

    and("user views the selected location.", defaultValidation);

    and(
      "user views an option to search locations using City or State or Zipcode with the selected location",
      defaultValidation
    );

    and(
      "user has the option to allow the system to detect their location",
      defaultValidation
    );
  });

  test("EPIC_EPP-44_STORY_EPP-2507 - Verify user able to search for the location and select the date of appointment as well as the purpose of visit and insurance and the user views the filter options", ({
    given,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", defaultValidation);

    and("user clicks on the Schedule your Eye Exam button", defaultValidation);

    then("user navigates to the search screen", defaultValidation);

    and("user enters the location", defaultValidation);

    and("user selects the date of appointment", defaultValidation);

    and("user chooses the purpose of the visit", defaultValidation);

    and("user enters the insurance name", defaultValidation);

    and("user clicks on the Search button", defaultValidation);

    and(
      "user views the results in the Schedule Appointments screen",
      defaultValidation
    );

    and("user views the selected location.", defaultValidation);

    and(
      "user views an option to search locations using City or State or Zipcode with the selected location",
      defaultValidation
    );

    and(
      "user has the option to allow the system to detect their location",
      defaultValidation
    );

    and("user views the filter options", defaultValidation);
  });

  test("EPIC_EPP-44_STORY_EPP-2507 - Verify user able to search for the location and select the date of appointment as well as the purpose of visit and insurance and the user view options to change the appointment date", ({
    given,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", defaultValidation);

    and("user clicks on the Schedule your Eye Exam button", defaultValidation);

    then("user navigates to the search screen", defaultValidation);

    and("user enters the location", defaultValidation);

    and("user selects the date of appointment", defaultValidation);

    and("user chooses the purpose of the visit", defaultValidation);

    and("user enters the insurance name", defaultValidation);

    and("user clicks on the Search button", defaultValidation);

    and(
      "user views the results in the Schedule Appointments screen",
      defaultValidation
    );

    and("user views the selected location.", defaultValidation);

    and(
      "user views an option to search locations using City or State or Zipcode with the selected location",
      defaultValidation
    );

    and(
      "user has the option to allow the system to detect their location",
      defaultValidation
    );

    and("user views the filter options", defaultValidation);

    and("user view options to change the appointment date", defaultValidation);
  });

  test("EPIC_EPP-44_STORY_EPP-2507 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and user view options to change the Purpose of the Visit", ({
    given,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", defaultValidation);

    and("user clicks on the Schedule your Eye Exam button", defaultValidation);

    then("user navigates to the search screen", defaultValidation);

    and("user enters the location", defaultValidation);

    and("user selects the date of appointment", defaultValidation);

    and("user chooses the purpose of the visit", defaultValidation);

    and("user enters the insurance name", defaultValidation);

    and("user clicks on the Search button", defaultValidation);

    and(
      "user views the results in the Schedule Appointments screen",
      defaultValidation
    );

    and("user views the selected location.", defaultValidation);

    and(
      "user views an option to search locations using City or State or Zipcode with the selected location",
      defaultValidation
    );

    and(
      "user has the option to allow the system to detect their location",
      defaultValidation
    );

    and("user views the filter options", defaultValidation);

    and("user view options to change the appointment date", defaultValidation);

    and(
      "user view options to change the Purpose of the Visit",
      defaultValidation
    );
  });

  test("EPIC_EPP-44_STORY_EPP-2507 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and user view options to change the insurance.", ({
    given,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", defaultValidation);

    and("user clicks on the Schedule your Eye Exam button", defaultValidation);

    then("user navigates to the search screen", defaultValidation);

    and("user enters the location", defaultValidation);

    and("user selects the date of appointment", defaultValidation);

    and("user chooses the purpose of the visit", defaultValidation);

    and("user enters the insurance name", defaultValidation);

    and("user clicks on the Search button", defaultValidation);

    and(
      "user views the results in the Schedule Appointments screen",
      defaultValidation
    );

    and("user views the selected location.", defaultValidation);

    and(
      "user views an option to search locations using City or State or Zipcode with the selected location",
      defaultValidation
    );

    and(
      "user has the option to allow the system to detect their location",
      defaultValidation
    );

    and("user views the filter options", defaultValidation);

    and("user view options to change the appointment date", defaultValidation);

    and(
      "user view options to change the Purpose of the Visit",
      defaultValidation
    );

    and("user view options to change the insurance.", defaultValidation);
  });

  test("EPIC_EPP-44_STORY_EPP-2507 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user views the insurance carrier as blank when the user not entered", ({
    given,
    and,
    then,
    when,
  }) => {
    given("user launch the Marketing Site URL", defaultValidation);

    and("user clicks on the Schedule your Eye Exam button", defaultValidation);

    then("user navigates to the search screen", defaultValidation);

    and("user enters the location", defaultValidation);

    and("user selects the date of appointment", defaultValidation);

    and("user chooses the purpose of the visit", defaultValidation);

    and("user enters the insurance name", defaultValidation);

    and("user clicks on the Search button", defaultValidation);

    and(
      "user views the results in the Schedule Appointments screen",
      defaultValidation
    );

    and("user views the purpose of the visit as blank", defaultValidation);

    when("the user not entered the purpose of the visit", defaultValidation);
  });

  test("EPIC_EPP-44_STORY_EPP-2507-Verify User should be able to view the following filters", ({
    given,
    when,
    then,
    and,
  }) => {
    given("user launch the Marketing Site url", defaultValidation);

    when("user clicks on the Schedule your Eye Exam button", defaultValidation);

    then("user should navigated to the search screen", async () => {
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };

      const domain = window.location.origin;
      mock
        .onGet(
          `${domain}/api/dummy/appointment/create-appointment/getSugestion`
        )
        .reply(200, mockSuggestion);
      mock
        .onPost(
          `${domain}/api/dummy/appointment/create-appointment/submitFilter`
        )
        .reply(200, mockSubmitFilter);

      global.navigator.geolocation = mockGeolocation;
      window.matchMedia = createMatchMedia("1920px");
      act(() => {
        container = render(
          <Provider store={store}>
            {Appointment.getLayout(<Appointment />)}
          </Provider>
        );
      });
      await waitFor(() => container.getByText(/City, state, or zip/i));
      expect(container.getByText(/City, state, or zip/i)).toBeInTheDocument();
    });

    and("user should fill the location", () => {
      const locationField = container.container.querySelector("#location");
      fireEvent.change(locationField, { target: { value: "Texas" } });
    });

    and("user should select the date of appointment", defaultValidation);

    and("user should select the purpose of the visit", defaultValidation);

    and("user should fill the insurance name", defaultValidation);

    when("user clicks on the Search button", async () => {
      const searchBtn = container.getByTestId("searchbtn");
      fireEvent.click(searchBtn);

      await waitFor(() => {
        container.getByText(/Filter/i);
      });
    });

    then(
      "user should see the results on the Schedule Appointments screen",
      defaultValidation
    );

    and(
      "user should see the selected location, date of appointment, the purpose of visit, and insurance carrier",
      defaultValidation
    );

    and(
      "user should be able to view the following filters as below",
      async (table) => {
        const filterBtn = container.getByTestId("filterbtn");
        fireEvent.click(filterBtn);

        await waitFor(() => {
          container.getByText(/Filter By/i);
        });
      }
    );
  });

  test("EPIC_EPP-44_STORY_EPP-2507-Verify User should be able to apply the Language filter", ({
    given,
    when,
    then,
    and,
  }) => {
    given("user launch the Marketing Site url", defaultValidation);

    when("user clicks on the Schedule your Eye Exam button", defaultValidation);

    then("user should navigated to the search screen", async () => {
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };

      const domain = window.location.origin;
      mock
        .onGet(
          `${domain}/api/dummy/appointment/create-appointment/getSugestion`
        )
        .reply(200, mockSuggestion);
      mock
        .onPost(
          `${domain}/api/dummy/appointment/create-appointment/submitFilter`
        )
        .reply(200, mockSubmitFilter);

      global.navigator.geolocation = mockGeolocation;
      window.matchMedia = createMatchMedia("1920px");
      act(() => {
        container = render(
          <Provider store={store}>
            {Appointment.getLayout(<Appointment />)}
          </Provider>
        );
      });
      await waitFor(() => container.getByText(/City, state, or zip/i));
      expect(container.getByText(/City, state, or zip/i)).toBeInTheDocument();
    });

    and("user should fill the location", () => {
      const locationField = container.container.querySelector("#location");
      fireEvent.change(locationField, { target: { value: "Texas" } });
    });

    and("user should select the date of appointment", defaultValidation);

    and("user should select the purpose of the visit", defaultValidation);

    and("user should fill the insurance name", defaultValidation);

    when("user clicks on the Search button", async () => {
      const searchBtn = container.getByTestId("searchbtn");
      fireEvent.click(searchBtn);

      await waitFor(() => {
        container.getByText(/Filter/i);
      });
    });

    then(
      "user should see the results on the Schedule Appointments screen",
      () => {
        expect(container.getByText(/Filter/i)).toBeInTheDocument();
      }
    );

    and(
      "user should see the selected location, date of appointment, the purpose of visit, and insurance carrier",
      () => {
        expect(container.getByText(/Filter/i)).toBeInTheDocument();
      }
    );

    when("user selects Language filter", async () => {
      const filterBtn = container.getByTestId("filterbtn");
      fireEvent.click(filterBtn);

      await waitFor(() => {
        container.getByText(/Filter By/i);
      });

      const language = container.getByText("English");
      fireEvent.click(language);

      const done = container.getByRole("button", { name: "Done" });
      fireEvent.click(done);
      await waitFor(() => {
        container.getByText("English");
        expect(container.getByText("English")).toBeInTheDocument();
      });
    });

    then("user should see Filtered Language", () => {
      expect(container.getByText("English")).toBeInTheDocument();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2507-Verify User should be able to apply the Gender filter", ({
    given,
    when,
    then,
    and,
  }) => {
    given("user launch the Marketing Site url", defaultValidation);

    when("user clicks on the Schedule your Eye Exam button", defaultValidation);

    then("user should navigated to the search screen", async () => {
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };

      const domain = window.location.origin;
      mock
        .onGet(
          `${domain}/api/dummy/appointment/create-appointment/getSugestion`
        )
        .reply(200, mockSuggestion);
      mock
        .onPost(
          `${domain}/api/dummy/appointment/create-appointment/submitFilter`
        )
        .reply(200, mockSubmitFilter);

      global.navigator.geolocation = mockGeolocation;
      window.matchMedia = createMatchMedia("1920px");
      act(() => {
        container = render(
          <Provider store={store}>
            {Appointment.getLayout(<Appointment />)}
          </Provider>
        );
      });
      await waitFor(() => container.getByText(/City, state, or zip/i));
      expect(container.getByText(/City, state, or zip/i)).toBeInTheDocument();
    });

    and("user should fill the location", () => {
      const locationField = container.container.querySelector("#location");
      fireEvent.change(locationField, { target: { value: "Texas" } });
    });

    and("user should select the date of appointment", defaultValidation);

    and("user should select the purpose of the visit", defaultValidation);

    and("user should fill the insurance name", defaultValidation);

    when("user clicks on the Search button", async () => {
      const searchBtn = container.getByTestId("searchbtn");
      fireEvent.click(searchBtn);

      await waitFor(() => {
        container.getByText(/Filter/i);
      });
    });

    then(
      "user should see the results on the Schedule Appointments screen",
      defaultValidation
    );

    and(
      "user should see the selected location, date of appointment, the purpose of visit, and insurance carrier",
      defaultValidation
    );

    when("user selects Gender filter", async () => {
      const filterBtn = container.getByTestId("filterbtn");
      fireEvent.click(filterBtn);

      await waitFor(() => {
        container.getByText(/Filter By/i);
      });

      const language = container.getByText("Male");
      fireEvent.click(language);

      const done = container.getByRole("button", { name: "Done" });
      fireEvent.click(done);
      await waitFor(() => {
        container.getByText("Male");
        expect(container.getByText("Male")).toBeInTheDocument();
      });
    });

    then("user should see Filtered Gender", () => {
      expect(container.getByText("Male")).toBeInTheDocument();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2507-Verify User should be able to apply the Insurance In/Out of Network filter", ({
    given,
    when,
    then,
    and,
  }) => {
    given("user launch the Marketing Site url", defaultValidation);

    when("user clicks on the Schedule your Eye Exam button", defaultValidation);

    then("user should navigated to the search screen", async () => {
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };

      const domain = window.location.origin;
      mock
        .onGet(
          `${domain}/api/dummy/appointment/create-appointment/getSugestion`
        )
        .reply(200, mockSuggestion);
      mock
        .onPost(
          `${domain}/api/dummy/appointment/create-appointment/submitFilter`
        )
        .reply(200, mockSubmitFilter);

      global.navigator.geolocation = mockGeolocation;
      window.matchMedia = createMatchMedia("1920px");
      act(() => {
        container = render(
          <Provider store={store}>
            {Appointment.getLayout(<Appointment />)}
          </Provider>
        );
      });
      await waitFor(() => container.getByText(/City, state, or zip/i));
      expect(container.getByText(/City, state, or zip/i)).toBeInTheDocument();
    });

    and("user should fill the location", () => {
      const locationField = container.container.querySelector("#location");
      fireEvent.change(locationField, { target: { value: "Texas" } });
    });

    and("user should select the date of appointment", defaultValidation);

    and("user should select the purpose of the visit", defaultValidation);

    and("user should fill the insurance name", defaultValidation);

    when("user clicks on the Search button", async () => {
      const searchBtn = container.getByTestId("searchbtn");
      fireEvent.click(searchBtn);

      await waitFor(() => {
        container.getByText(/Filter/i);
      });
    });

    then(
      "user should see the results on the Schedule Appointments screen",
      defaultValidation
    );

    and(
      "user should see the selected location, date of appointment, the purpose of visit, and insurance carrier",
      defaultValidation
    );

    when("user selects Insurance In/Out of Network filter", async () => {
      const filterBtn = container.getByTestId("filterbtn");
      fireEvent.click(filterBtn);

      await waitFor(() => {
        container.getByText(/Filter By/i);
      });

      const insurance = container.getByText("In Network");
      fireEvent.click(insurance);

      const done = container.getByRole("button", { name: "Done" });
      fireEvent.click(done);
      await waitFor(() => {
        container.getByText("In Network");
        expect(container.getByText("In Network")).toBeInTheDocument();
      });
    });

    then('user should see Filtered Insurance In/Out of Network"', () => {
      expect(container.getByText("In Network")).toBeInTheDocument();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2507-Verify User should be able to apply the Available Today (Provider) filter", ({
    given,
    when,
    then,
    and,
  }) => {
    given("user launch the Marketing Site url", defaultValidation);

    when("user clicks on the Schedule your Eye Exam button", defaultValidation);

    then("user should navigated to the search screen", async () => {
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };

      const domain = window.location.origin;
      mock
        .onGet(
          `${domain}/api/dummy/appointment/create-appointment/getSugestion`
        )
        .reply(200, mockSuggestion);
      mock
        .onPost(
          `${domain}/api/dummy/appointment/create-appointment/submitFilter`
        )
        .reply(200, mockSubmitFilter);

      global.navigator.geolocation = mockGeolocation;
      window.matchMedia = createMatchMedia("1920px");
      act(() => {
        container = render(
          <Provider store={store}>
            {Appointment.getLayout(<Appointment />)}
          </Provider>
        );
      });
      await waitFor(() => container.getByText(/City, state, or zip/i));
      expect(container.getByText(/City, state, or zip/i)).toBeInTheDocument();
    });

    and("user should fill the location", () => {
      const locationField = container.container.querySelector("#location");
      fireEvent.change(locationField, { target: { value: "Texas" } });
    });

    and("user should select the date of appointment", defaultValidation);

    and("user should select the purpose of the visit", defaultValidation);

    and("user should fill the insurance name", defaultValidation);

    when("user clicks on the Search button", async () => {
      const searchBtn = container.getByTestId("searchbtn");
      fireEvent.click(searchBtn);

      await waitFor(() => {
        container.getByText(/Filter/i);
      });
    });

    then(
      "user should see the results on the Schedule Appointments screen",
      defaultValidation
    );

    and(
      "user should see the selected location, date of appointment, the purpose of visit, and insurance carrier",
      defaultValidation
    );

    when(
      "user selects Insurance Available Today (Provider) filter",
      async () => {
        const filterBtn = container.getByTestId("filterbtn");
        fireEvent.click(filterBtn);

        await waitFor(() => {
          container.getByText(/Filter By/i);
        });

        const filter = container.getAllByText("Available Today")[0];
        fireEvent.click(filter);

        const done = container.getByRole("button", { name: "Done" });
        fireEvent.click(done);
        await waitFor(() => {
          container.getByText("Available Today");
          expect(container.getByText("Available Today")).toBeInTheDocument();
        });
      }
    );

    then("user should see Filtered Available Today (Provider)", () => {
      expect(container.getByText("Available Today")).toBeInTheDocument();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2507-Verify User should see an option to clear those filters when applied", ({
    given,
    when,
    then,
    and,
  }) => {
    given("user launch the Marketing Site url", defaultValidation);

    when("user clicks on the Schedule your Eye Exam button", defaultValidation);

    then("user should navigated to the search screen", async () => {
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };

      const domain = window.location.origin;
      mock
        .onGet(
          `${domain}/api/dummy/appointment/create-appointment/getSugestion`
        )
        .reply(200, mockSuggestion);
      mock
        .onPost(
          `${domain}/api/dummy/appointment/create-appointment/submitFilter`
        )
        .reply(200, mockSubmitFilter);

      global.navigator.geolocation = mockGeolocation;
      window.matchMedia = createMatchMedia("1920px");
      act(() => {
        container = render(
          <Provider store={store}>
            {Appointment.getLayout(<Appointment />)}
          </Provider>
        );
      });
      await waitFor(() => container.getByText(/City, state, or zip/i));
      expect(container.getByText(/City, state, or zip/i)).toBeInTheDocument();
    });

    and("user should fill the location", () => {
      const locationField = container.container.querySelector("#location");
      fireEvent.change(locationField, { target: { value: "Texas" } });
    });

    and("user should select the date of appointment", defaultValidation);

    and("user should select the purpose of the visit", defaultValidation);

    and("user should fill the insurance name", defaultValidation);

    when("user clicks on the Search button", async () => {
      const searchBtn = container.getByTestId("searchbtn");
      fireEvent.click(searchBtn);

      await waitFor(() => {
        container.getByText(/Filter/i);
      });
    });

    then(
      "user should see the results on the Schedule Appointments screen",
      defaultValidation
    );

    and(
      "user should see the selected location, date of appointment, the purpose of visit, and insurance carrier",
      defaultValidation
    );

    when(
      "user selects Insurance Available Today (Provider) filter",
      async () => {
        const filterBtn = container.getByTestId("filterbtn");
        fireEvent.click(filterBtn);

        await waitFor(() => {
          container.getByText(/Filter By/i);
        });

        const filter = container.getAllByText("Available Today")[0];
        fireEvent.click(filter);

        const done = container.getByRole("button", { name: "Done" });
        fireEvent.click(done);
        await waitFor(() => {
          container.getByText("Available Today");
          expect(container.getByText("Available Today")).toBeInTheDocument();
        });
      }
    );

    then("user should see Filtered Available Today (Provider)", () => {
      expect(container.getByText("Available Today")).toBeInTheDocument();
    });

    and("user should see an option to clear the applied filter", () => {
      expect(container.queryAllByTestId("CloseIcon")[0]).toBeInTheDocument();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2507-Verify User should see the filter was removed when user clicks on Clear option", ({
    given,
    when,
    then,
    and,
  }) => {
    given("user launch the Marketing Site url", defaultValidation);

    when("user clicks on the Schedule your Eye Exam button", defaultValidation);

    then("user should navigated to the search screen", async () => {
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };

      const domain = window.location.origin;
      mock
        .onGet(
          `${domain}/api/dummy/appointment/create-appointment/getSugestion`
        )
        .reply(200, mockSuggestion);
      mock
        .onPost(
          `${domain}/api/dummy/appointment/create-appointment/submitFilter`
        )
        .reply(200, mockSubmitFilter);

      global.navigator.geolocation = mockGeolocation;
      window.matchMedia = createMatchMedia("1920px");
      act(() => {
        container = render(
          <Provider store={store}>
            {Appointment.getLayout(<Appointment />)}
          </Provider>
        );
      });
      await waitFor(() => container.getByText(/City, state, or zip/i));
      expect(container.getByText(/City, state, or zip/i)).toBeInTheDocument();
    });

    and("user should fill the location", () => {
      const locationField = container.container.querySelector("#location");
      fireEvent.change(locationField, { target: { value: "Texas" } });
    });

    and("user should select the date of appointment", defaultValidation);

    and("user should select the purpose of the visit", defaultValidation);

    and("user should fill the insurance name", defaultValidation);

    when("user clicks on the Search button", async () => {
      const searchBtn = container.getByTestId("searchbtn");
      fireEvent.click(searchBtn);

      await waitFor(() => {
        container.getByText(/Filter/i);
      });
    });

    then(
      "user should see the results on the Schedule Appointments screen",
      defaultValidation
    );

    and(
      "user should see the selected location, date of appointment, the purpose of visit, and insurance carrier",
      defaultValidation
    );

    when(
      "user selects Insurance Available Today (Provider) filter",
      async () => {
        const filterBtn = container.getByTestId("filterbtn");
        fireEvent.click(filterBtn);

        await waitFor(() => {
          container.getByText(/Filter By/i);
        });

        const filter = container.getAllByText("Available Today")[0];
        fireEvent.click(filter);

        const done = container.getByRole("button", { name: "Done" });
        fireEvent.click(done);
        await waitFor(() => {
          container.getByText("Available Today");
          expect(container.getByText("Available Today")).toBeInTheDocument();
        });
      }
    );

    then("user should see Filtered Available Today (Provider)", () => {
      expect(container.getByText("Available Today")).toBeInTheDocument();
    });

    and("user should see an option to clear the applied filter", () => {
      expect(container.queryAllByTestId("CloseIcon")[0]).toBeInTheDocument();
    });

    and(
      "user should see the filter was removed when user clicks on Clear option",
      async () => {
        const filterBtn = container.getByTestId("filterbtn");
        fireEvent.click(filterBtn);

        await waitFor(() => {
          container.getByText(/Filter By/i);
        });

        const reset = container.getByRole("button", { name: "Reset" });
        expect(reset).toBeInTheDocument();
        fireEvent.click(reset);

        const done = container.getByRole("button", { name: "Done" });
        fireEvent.click(done);
      }
    );
  });
});
