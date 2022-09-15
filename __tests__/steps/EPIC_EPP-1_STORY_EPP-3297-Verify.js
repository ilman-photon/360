import { act, cleanup, fireEvent, render, waitFor } from "@testing-library/react";
import axios from "axios";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import { defineFeature, loadFeature } from "jest-cucumber";
import { Provider } from "react-redux";
import Appointment from "../../src/pages/patient/appointment";
import store from "../../src/store/store";
import Cookies from "universal-cookie";
import constants from "../../src/utils/constants";
import mediaQuery from 'css-mediaquery';
import HomePage from "../../src/pages/patient";
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
}

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
}

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
}

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
	return query => ({
	  matches: mediaQuery.match(query, { width }),
	  addListener: () => { },
	  removeListener: () => { },
	});
  }

const feature = loadFeature(
	"./__tests__/feature/Patient Portal/Sprint5/EPP-3297.feature"
);

defineFeature(feature, (test) => {
	let container;
  
	const defaultValidation = () => {
	  expect(true).toBeTruthy();
	};
  
	afterEach(cleanup);

	test('EPIC_EPP-1_STORY_EPP-3297 - Verify User should see the following details as part of each upcoming appointment', ({ given, when, then, and }) => {
        given('User launch Patient Portal url', () => {
			defaultValidation();
        });

        when('User is logged in to the application', () => {
			defaultValidation();
        });

        then(/^User lands to the "(.*)" screen$/, (arg0) => {
			defaultValidation();
        });

        and(/^User should see the "(.*)" option$/, (arg0) => {
			defaultValidation();
        });

        when(/^User selects the "(.*)" option$/, (arg0) => {
			defaultValidation();
        });

        then(/^User should navigated to "(.*)" screen$/, (arg0) => {
			defaultValidation();
        });

        and(/^User should see on "(.*)" button$/, (arg0) => {
			defaultValidation();
        });

        when(/^User clicks on "(.*)" button$/, (arg0) => {
			defaultValidation();
        });

        then(/^User should navigated to "(.*)" screen$/, (arg0) => {
			defaultValidation();
        });

        and('User should see the widget with upcoming appointments', () => {
			defaultValidation();
        });

        when('User click on the widget with with upcoming appointments', () => {
			defaultValidation();
        });

        then(/^User should navigated "(.*)" screen$/, (arg0) => {
			defaultValidation();
        });

        and('User should see the following details as part of each upcoming appointment as below:', (table) => {
			defaultValidation();
        });
    });

    test('EPIC_EPP-1_STORY_EPP-3297 - Verify User should see the latest list of appointments that are scheduled in the widget', ({ given, when, then, and }) => {
        given('User launch Patient Portal url', () => {
			defaultValidation();
        });

        when('User is logged in to the application', () => {
			defaultValidation();
        });

        then(/^User lands to the "(.*)" screen$/, (arg0) => {
			defaultValidation();
        });

        and(/^User should see the "(.*)" option$/, (arg0) => {
			defaultValidation();
        });

        when(/^User selects the "(.*)" option$/, (arg0) => {
			defaultValidation();
        });

        then(/^User should navigated to "(.*)" screen$/, (arg0) => {
			defaultValidation();
        });

        and(/^User should see on "(.*)" button$/, (arg0) => {
			defaultValidation();
        });

        when(/^User clicks on "(.*)" button$/, (arg0) => {
			defaultValidation();
        });

        then(/^User should navigated to "(.*)" screen$/, (arg0) => {
			defaultValidation();
        });

        and('User should see the widget with upcoming appointments', () => {
			defaultValidation();
        });

        when('User click on the widget with with upcoming appointments', () => {
			defaultValidation();
        });

        then(/^User should navigated "(.*)" screen$/, (arg0) => {
			defaultValidation();
        });

        and('User should see the latest list of appointments that are scheduled in the widget', () => {
			defaultValidation();
        });
    });

	test('EPIC_EPP-1_STORY_EPP-3297 - Verify User on clicking the widget will get navigated to the screen with upcoming appointments', ({ given, when, then, and }) => {
        given('User launch Patient Portal url', () => {
			defaultValidation();
        });

        when('User is logged in to the application', () => {
			defaultValidation();
        });

        then(/^User lands to the "(.*)" screen$/, (arg0) => {
			defaultValidation();
        });

        and(/^User should see the "(.*)" option$/, (arg0) => {
			defaultValidation();
        });

        when(/^User selects the "(.*)" option$/, (arg0) => {
			defaultValidation();
        });

        then(/^User should navigated to "(.*)" screen$/, (arg0) => {
			defaultValidation();
        });

        and(/^User should see on "(.*)" button$/, (arg0) => {
			defaultValidation();
        });

        when(/^User clicks on "(.*)" button$/, (arg0) => {
			defaultValidation();
        });

        then(/^User should navigated to "(.*)" screen$/, (arg0) => {
			defaultValidation();
        });

        and('User should see the widget with upcoming appointments', () => {
			defaultValidation();
        });

        when('User click on the widget with with upcoming appointments', () => {
			defaultValidation();
        });

        then(/^User should navigated "(.*)" screen$/, (arg0) => {
			defaultValidation();
        });
    });

	test('EPIC_EPP-1_STORY_EPP-3297 - Verify User on clicking any particular appointment will get navigated to that particular appointment in the screen with upcoming appointments', ({ given, when, then, and }) => {
        given('User launch Patient Portal url', () => {
			defaultValidation();
        });

        when('User is logged in to the application', () => {
			defaultValidation();
        });

        then(/^User lands to the "(.*)" screen$/, (arg0) => {
			defaultValidation();
        });

        and(/^User should see the "(.*)" option$/, (arg0) => {
			defaultValidation();
        });

        when(/^User selects the "(.*)" option$/, (arg0) => {
			defaultValidation();
        });

        then(/^User should navigated to "(.*)" screen$/, (arg0) => {
			defaultValidation();
        });

        and(/^User should see on "(.*)" button$/, (arg0) => {
			defaultValidation();
        });

        when(/^User clicks on "(.*)" button$/, (arg0) => {
			defaultValidation();
        });

        then(/^User should navigated to "(.*)" screen$/, (arg0) => {
			defaultValidation();
        });

        and('User should see the widget with upcoming appointments', () => {
			defaultValidation();
        });

        when('User on clicking any particular appointment', () => {
			defaultValidation();
        });

        then('User should navigated particular appointment in the screen with upcoming appointments', () => {
			defaultValidation();
        });
    });

	test('EPIC_EPP-1_STORY_EPP-3297 - Verify User should be able to swipe through to view other upcoming appointments', ({ given, when, then, and }) => {
        given('User launch Patient Portal url', () => {
			defaultValidation();
        });

        when('User is logged in to the application', () => {
			defaultValidation();
        });

        then(/^User lands to the "(.*)" screen$/, (arg0) => {
			defaultValidation();
        });

        and(/^User should see the "(.*)" option$/, (arg0) => {
			defaultValidation();
        });

        when(/^User selects the "(.*)" option$/, (arg0) => {
			defaultValidation();
        });

        then(/^User should navigated to "(.*)" screen$/, (arg0) => {
			defaultValidation();
        });

        and(/^User should see on "(.*)" button$/, (arg0) => {
			defaultValidation();
        });

        when(/^User clicks on "(.*)" button$/, (arg0) => {
			defaultValidation();
        });

        then(/^User should navigated to "(.*)" screen$/, (arg0) => {
			defaultValidation();
        });

        and('User should see the widget with upcoming appointments', () => {
			defaultValidation();
        });

        when('User click on the widget with with upcoming appointments', () => {
			defaultValidation();
        });

        then(/^User should navigated "(.*)" screen$/, (arg0) => {
			defaultValidation();
        });

        and('User should be able to swipe through to view other upcoming appointments', () => {
			defaultValidation();
        });
    });
})