import { act, fireEvent, render, waitFor } from "@testing-library/react";
import axios from "axios";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import { defineFeature, loadFeature } from "jest-cucumber";
import { Provider } from "react-redux";
import Bio, { getStaticProps } from "../../src/pages/patient/bio";
import store from "../../src/store/store";
const useRouter = jest.spyOn(require("next/router"), "useRouter");
import constants from "../../src/utils/constants";

const feature = loadFeature(
    "./__tests__/feature/Patient Portal/Sprint4/EPP-2547.feature"
);

defineFeature(feature, (test) => {
    let container;
    const element = document.createElement("div");
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

    const defaultValidation = () => {
        expect(true).toBeTruthy();
    };
    test('EPIC_EPP-44_STORY_EPP-2547 - Verify user able to view the screen with list of providers for the searched location and available time-slots for the selected date of appointment.', ({ given, when, then, and }) => {
        given('user launch the Patient Portal url', () => {

        });

        when('user provides valid Email or Phone Number and password and click on Login button', () => {

        });

        then('user navigates to the Patient Portal application', () => {

        });

        when('user  clicks on Schedule Appointment menu', () => {

        });

        then('user navigates to the search screen', () => {

        });

        and('user provided location,date of appointment,purpose of visit,insurance and provider', () => {

        });

        and('user clicks on the Search button', () => {

        });

        and('user views the results on the Schedule Appointments screen', () => {

        });

        and('user views the selected location, date of appointment, the purpose of visit, and insurance carrier.', () => {

        });
    });

    test('EPIC_EPP-44_STORY_EPP-2547 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance and user view the location using City with the selected location', ({ given, when, then, and }) => {
        given('user launch the Patient Portal url', () => {

        });

        when('user provides valid Email or Phone Number and password and click on Login button', () => {

        });

        then('user navigates to the Patient Portal application', () => {

        });

        when('user  clicks on Schedule Appointment menu', () => {

        });

        then('user navigates to the search screen', () => {

        });

        and('user provided location,date of appointment,purpose of visit,insurance and provider', () => {

        });

        and('user clicks on the Search button', () => {

        });

        and('user views the results in the Schedule Appointments screen', () => {

        });

        and('user views the selected location.', () => {

        });

        and('user views an option to search locations using City with the selected location', () => {

        });
    });

    test('EPIC_EPP-44_STORY_EPP-2547 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance and user view the location using State with the selected location', ({ given, when, then, and }) => {
        given('user launch the Patient Portal url', () => {

        });

        when('user provides valid Email or Phone Number and password and click on Login button', () => {

        });

        then('user navigates to the Patient Portal application', () => {

        });

        when('user  clicks on Schedule Appointment menu', () => {

        });

        then('user navigates to the search screen', () => {

        });

        and('user provided location,date of appointment,purpose of visit,insurance and provider', () => {

        });

        and('user clicks on the Search button', () => {

        });

        and('user views the results in the Schedule Appointments screen', () => {

        });

        and('user views the selected location.', () => {

        });

        and('user views an option to search locations using State with the selected location', () => {

        });
    });

    test('EPIC_EPP-44_STORY_EPP-2547 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance and user view the location using  Zipcode with the selected location', ({ given, when, then, and }) => {
        given('user launch the Patient Portal url', () => {

        });

        when('user provides valid Email or Phone Number and password and click on Login button', () => {

        });

        then('user navigates to the Patient Portal application', () => {

        });

        when('user  clicks on Schedule Appointment menu', () => {

        });

        then('user navigates to the search screen', () => {

        });

        and('user provided location,date of appointment,purpose of visit,insurance and provider', () => {

        });

        and('user clicks on the Search button', () => {

        });

        and('user views the results in the Schedule Appointments screen', () => {

        });

        and('user views the selected location.', () => {

        });

        and('user views an option to search locations using  Zipcode with the selected location', () => {

        });
    });

    test('EPIC_EPP-44_STORY_EPP-2547 - Verify user able to search for the location and select the date of appointment as well as the purpose of visit and insurance and user view the location using the system to detect their location', ({ given, when, then, and }) => {
        given('user launch the Patient Portal url', () => {

        });

        when('user provides valid Email or Phone Number and password and click on Login button', () => {

        });

        then('user navigates to the Patient Portal application', () => {

        });

        when('user  clicks on Schedule Appointment menu', () => {

        });

        then('user navigates to the search screen', () => {

        });

        and('user provided location,date of appointment,purpose of visit,insurance and provider', () => {

        });

        and('user clicks on the Search button', () => {

        });

        and('user views the results in the Schedule Appointments screen', () => {

        });

        and('user views the selected location.', () => {

        });

        and('user views an option to search locations using City or State or Zipcode with the selected location', () => {

        });

        and('user has the option to allow the system to detect their location', () => {

        });
    });

    test('EPIC_EPP-44_STORY_EPP-2547 - Verify user able to search for the location and select the date of appointment as well as the purpose of visit and insurance and the user views the filter options', ({ }) => {

    });

    test('EPIC_EPP-44_STORY_EPP-2547 - Verify user able to search for the location and select the date of appointment as well as the purpose of visit and insurance and the user view options to change the appointment date', ({ given, when, then, and }) => {
        given('user launch the Patient Portal url', () => {

        });

        when('user provides valid Email or Phone Number and password and click on Login button', () => {

        });

        then('user navigates to the Patient Portal application', () => {

        });

        when('user  clicks on Schedule Appointment menu', () => {

        });

        then('user navigates to the search screen', () => {

        });

        and('user provided location,date of appointment,purpose of visit,insurance and provider', () => {

        });

        and('user clicks on the Search button', () => {

        });

        and('user views the results in the Schedule Appointments screen', () => {

        });

        and('user views the selected location.', () => {

        });

        and('user views an option to search locations using City or State or Zipcode with the selected location', () => {

        });

        and('user has the option to allow the system to detect their location', () => {

        });

        and('user views the filter options', () => {

        });

        and('user view options to change the appointment date', () => {

        });
    });

    test('EPIC_EPP-44_STORY_EPP-2547 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and user view options to change the Purpose of the Visit', ({ given, when, then, and }) => {
        given('user launch the Patient Portal url', () => {

        });

        when('user provides valid Email or Phone Number and password and click on Login button', () => {

        });

        then('user navigates to the Patient Portal application', () => {

        });

        when('user  clicks on Schedule Appointment menu', () => {

        });

        then('user navigates to the search screen', () => {

        });

        and('user provided location,date of appointment,purpose of visit,insurance and provider', () => {

        });

        and('user clicks on the Search button', () => {

        });

        and('user views the results in the Schedule Appointments screen', () => {

        });

        and('user views the selected location.', () => {

        });

        and('user views an option to search locations using City or State or Zipcode with the selected location', () => {

        });

        and('user has the option to allow the system to detect their location', () => {

        });

        and('user views the filter options', () => {

        });

        and('user view options to change the appointment date', () => {

        });

        and('user view options to change the Purpose of the Visit', () => {

        });
    });

    test('EPIC_EPP-44_STORY_EPP-2547 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and user view options to change the insurance.', ({ given, when, then, and }) => {
        given('user launch the Patient Portal url', () => {

        });

        when('user provides valid Email or Phone Number and password and click on Login button', () => {

        });

        then('user navigates to the Patient Portal application', () => {

        });

        when('user  clicks on Schedule Appointment menu', () => {

        });

        then('user navigates to the search screen', () => {

        });

        and('user provided location,date of appointment,purpose of visit,insurance and provider', () => {

        });

        and('user clicks on the Search button', () => {

        });

        and('user views the results in the Schedule Appointments screen', () => {

        });

        and('user views the selected location.', () => {

        });

        and('user views an option to search locations using City or State or Zipcode with the selected location', () => {

        });

        and('user has the option to allow the system to detect their location', () => {

        });

        and('user views the filter options', () => {

        });

        and('user view options to change the appointment date', () => {

        });

        and('user view options to change the Purpose of the Visit', () => {

        });

        and('user view options to change the insurance.', () => {

        });
    });
})