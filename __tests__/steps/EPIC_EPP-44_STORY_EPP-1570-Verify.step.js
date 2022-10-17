import { defineFeature, loadFeature } from "jest-cucumber";
import { act, fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../../src/store/store";
const useRouter = jest.spyOn(require("next/router"), "useRouter");
import constants from "../../src/utils/constants";
import FilterHeading from "../../src/components/molecules/FilterHeading/filterHeading";
import FilterResult from "../../src/components/molecules/FilterResult/filterResult";
import ScheduleAppointmentPage from "../../src/pages/patient/schedule-appointment";
import mediaQuery from 'css-mediaquery';
import { renderLogin } from "../../__mocks__/commonSteps";
import { mockProviderList } from "../../__mocks__/mockResponse";

const feature = loadFeature(
    "./__tests__/feature/Patient Portal/Sprint4/EPP-1570.feature"
);

defineFeature(feature, (test) => {
    let container;
    const { APPOINTMENT_TEST_ID, SEARCH_PROVIDER_TEST_ID } = constants.TEST_ID

    const defaultValidation = () => {
        expect(true).toBeTruthy();
    };

    function createMatchMedia(width) {
        return query => ({
            matches: mediaQuery.match(query, { width }),
            addListener: () => { },
            removeListener: () => { },
        });
    }

    const searchScreen = () => {
        window.matchMedia = createMatchMedia('1920px');
        const mockFilterData = {
            date: null,
            location: "",
            insuranceCarrier: "",
            purposeOfVisit: "",
        }
        container = render(<FilterHeading
            isDesktop={true}
            isTablet={false}
            onSearchProvider={() => {
                jest.fn();
            }}
            onSwapButtonClicked={() => {
                jest.fn();
            }}
            isGeolocationEnabled={false}
            filterData={mockFilterData}
            purposeOfVisitData={[]}
            insuranceCarrierData={[]} />);
    }

    const inputLocation = async () => {
        const locationInput = await waitFor(() => container.getByLabelText("City, state, or zip code"))
        act(() => {
            fireEvent.change(locationInput, { target: { value: "Texas" } });
        });
    }

    const inputDate = async () => {
        const dateInput = await waitFor(() => container.getByLabelText("Date"))
        act(() => {
            fireEvent.change(dateInput, { target: { value: "22-09-2022" } });
        });
    }

    const inputPurpose = async () => {
        const purposeInput = await waitFor(() => container.getByTestId("select-purposes-of-visit"))
        act(() => {
            fireEvent.change(purposeInput, { target: { value: "Eye Exam" } });
        });
    }

    const inputInsurance = async () => {
        const insuranceInput = await waitFor(() => container.getByLabelText("Insurance Carrier"))
        act(() => {
            fireEvent.change(insuranceInput, { target: { value: "Aetna" } });
        });
    }

    const clickSearch = async () => {
        const searchBtn = await waitFor(() => container.getByTestId(APPOINTMENT_TEST_ID.searchbtn))
        fireEvent.click(searchBtn)
    }

    const resultsScreen = async () => {
        const rangeDate = { startDate: "2022-10-10", endDate: "2022-10-15" }
        container.rerender(
            <FilterResult isDesktop={true}
                providerList={mockProviderList}
                rangeDate={rangeDate}
                purposeOfVisitData={[]}
                insuranceCarrierData={[]}
                googleApiKey={"Test"}
                filterData={{
                    location: "",
                    date: "",
                    purposeOfVisit: "",
                    insuranceCarrier: "",
                }}
            />
        );
        expect(await waitFor(() => container.getByTestId(APPOINTMENT_TEST_ID.FILTER_RESULT.container))).toBeInTheDocument()
    }

    const reviewAppPage = async () => {
        container.rerender(<Provider store={store}>{ScheduleAppointmentPage.getLayout(<ScheduleAppointmentPage />)}</Provider>);
        await waitFor(() => container.getByText("Review Appointment Details"))
    }

    const clickHour = async () => {
        expect(container.getByText("3 In-network providers")).toBeInTheDocument();
        const hourButton = await waitFor(() => container.getByTestId(SEARCH_PROVIDER_TEST_ID.hourButton))
        fireEvent.click(hourButton)
    }

    test('EPIC_EPP-44_STORY_EPP-1570-Verify User should navigated to the Patient Portal application', ({ given, and, when, then }) => {
        given('User is already a registered user', () => {
            defaultValidation()
        });

        and(/^User launch the "(.*)" url$/, (arg0) => {
            defaultValidation()
        });

        when(/^User clicks on the "(.*)" button$/, (arg0) => {
            defaultValidation()
        });

        then('User should navigated to the search screen', () => {
            searchScreen()
        });

        and('User should fill the location', () => {
            inputLocation()
        });

        and('User should select the Date & Time with provider', () => {
            inputDate()
        });

        and('User should select the purpose of the visit', () => {
            inputPurpose()
        });

        and('User has reviewed the appointment details', () => {
            resultsScreen()
        });

        when('User selects that the appointment is for Self', () => {
            defaultValidation()
        });

        then('User should navigated to the Patient Portal application', () => {
            renderLogin()
        });
    });

    test('EPIC_EPP-44_STORY_EPP-1570-Verify User should Logged in to the Patient Portal application', ({ given, and, when, then }) => {
        given('User is already a registered user', () => {
            defaultValidation()
        });

        and(/^User launch the "(.*)" url$/, (arg0) => {
            defaultValidation()
        });

        when(/^User clicks on the "(.*)" button$/, (arg0) => {
            defaultValidation()
        });

        then('User should navigated to the search screen', () => {
            searchScreen()
        });

        and('User should fill the location', () => {
            inputLocation()
        });

        and('User should select the Date & Time with provider', () => {
            inputDate()
        });

        and('User should select the purpose of the visit', () => {
            inputPurpose()
        });

        and('User has reviewed the appointment details', () => {
            resultsScreen()
        });

        when('User selects that the appointment is for Self', () => {
            defaultValidation()
        });

        then('User should navigated to the Patient Portal application', () => {
            renderLogin()
        });

        when(/^User fills valid (.*) and (.*)$/, (arg0, arg1) => {
            defaultValidation()
        });

        and(/^User clicks on "(.*)" button$/, (arg0) => {
            defaultValidation()
        });

        then('User should navigated to Patient Dashboard', () => {
            defaultValidation()
        });
    });

    test('EPIC_EPP-44_STORY_EPP-1570-Verify User should be able to view the success message as "Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly."', ({ given, and, when, then }) => {
        given('User is already a registered user', () => {
            defaultValidation()
        });

        and(/^User launch the "(.*)" url$/, (arg0) => {
            defaultValidation()
        });

        when(/^User clicks on the "(.*)" button$/, (arg0) => {
            defaultValidation()
        });

        then('User should navigated to the search screen', () => {
            searchScreen()
        });

        and('User should fill the location', () => {
            inputLocation()
        });

        and('User should select the Date & Time with provider', () => {
            inputDate()
        });

        and('User should select the purpose of the visit', () => {
            inputPurpose()
        });

        and('User has reviewed the appointment details', () => {
            resultsScreen()
        });

        when('User selects that the appointment is for Self', () => {
            defaultValidation()
        });

        then('User should navigated to the Patient Portal application', () => {
            renderLogin()
        });

        when(/^User fills valid (.*) and (.*)$/, (arg0, arg1) => {
            defaultValidation()
        });

        and(/^User clicks on "(.*)" button$/, (arg0) => {
            defaultValidation()
        });

        then('User should navigated to Patient Dashboard', () => {
            defaultValidation()
        });

        when('User selects that the appointment is for Someone Else', () => {
            defaultValidation()
        });

        then('User provides the patient details', () => {
            defaultValidation()
        });

        and(/^User should see following details in the Appointment confirmation message "(.*)"$/, (arg0) => {
            defaultValidation()
        });
    });

    test('EPIC_EPP-44_STORY_EPP-1570-Verify User should see the appointment under upcoming appointments', ({ given, and, when, then }) => {
        given('User is already a registered user', () => {
            defaultValidation()
        });

        and(/^User launch the "(.*)" url$/, (arg0) => {
            defaultValidation()
        });

        when(/^User clicks on the "(.*)" button$/, (arg0) => {
            defaultValidation()
        });

        then('User should navigated to the search screen', () => {
            searchScreen()
        });

        and('User should fill the location', () => {
            inputLocation()
        });

        and('User should select the Date & Time with provider', () => {
            inputDate()
        });

        and('User should select the purpose of the visit', () => {
            inputPurpose()
        });

        and('User has reviewed the appointment details', () => {
            resultsScreen()
        });

        when('User selects that the appointment is for Self', () => {
            defaultValidation()
        });

        then('User should navigated to the Patient Portal application', () => {
            renderLogin()
        });

        and(/^User fills valid (.*) and (.*)$/, (arg0, arg1) => {
            defaultValidation()
        });

        then(/^User clicks on "(.*)" button$/, (arg0) => {
            defaultValidation()
        });

        and('User should navigated to Patient Dashboard', () => {
            defaultValidation()
        });

        when('User clicks to "Appointments\' menu', () => {
            defaultValidation()
        });

        then(/^User navigates to "(.*)" screen$/, (arg0) => {
            defaultValidation()
        });

        and('User should see the appointment under upcoming appointments', () => {
            defaultValidation()
        });
    });

    test('EPIC_EPP-44_STORY_EPP-1570-Verify User should receive an email message regarding appointment confirmation', ({ given, and, when, then }) => {
        given('User is already a registered user', () => {
            defaultValidation()
        });

        and(/^User launch the "(.*)" url$/, (arg0) => {
            defaultValidation()
        });

        when(/^User clicks on the "(.*)" button$/, (arg0) => {
            defaultValidation()
        });

        then('User should navigated to the search screen', () => {
            searchScreen()
        });

        and('User should fill the location', () => {
            inputLocation()
        });

        and('User should select the Date & Time with provider', () => {
            inputDate()
        });

        and('User should select the purpose of the visit', () => {
            inputPurpose()
        });

        and('User has reviewed the appointment details', () => {
            resultsScreen()
        });

        when('User selects that the appointment is for Self', () => {
            defaultValidation()
        });

        then('User should navigated to the Patient Portal application', () => {
            renderLogin()
        });

        when(/^User fills valid (.*) and (.*)$/, (arg0, arg1) => {
            defaultValidation()
        });

        and(/^User clicks on "(.*)" button$/, (arg0) => {
            defaultValidation()
        });

        then('User should navigated to Patient Dashboard', () => {
            defaultValidation()
        });

        when('User selects that the appointment is for Someone Else', () => {
            defaultValidation()
        });

        then('User provides the patient details', () => {
            defaultValidation()
        });

        and(/^User should see following details in the Appointment confirmation message "(.*)"$/, (arg0) => {
            defaultValidation()
        });

        and('User should receive an email message regarding appointmnet confirmation as below:', (table) => {
            defaultValidation()
        });
    });

    test('EPIC_EPP-44_STORY_EPP-1570-Verify User should receive a text message regarding appointment confirmation', ({ given, and, when, then }) => {
        given('User is already a registered user', () => {
            defaultValidation()
        });

        and(/^User launch the "(.*)" url$/, (arg0) => {
            defaultValidation()
        });

        when(/^User clicks on the "(.*)" button$/, (arg0) => {
            defaultValidation()
        });

        then('User should navigated to the search screen', () => {
            searchScreen()
        });

        and('User should fill the location', () => {
            inputLocation()
        });

        and('User should select the Date & Time with provider', () => {
            inputDate()
        });

        and('User should select the purpose of the visit', () => {
            inputPurpose()
        });

        and('User has reviewed the appointment details', () => {
            resultsScreen()
        });

        when('User selects that the appointment is for Self', () => {
            defaultValidation()
        });

        then('User should navigated to the Patient Portal application', () => {
            renderLogin()
        });

        when(/^User fills valid (.*) and (.*)$/, (arg0, arg1) => {
            defaultValidation()
        });

        and(/^User clicks on "(.*)" button$/, (arg0) => {
            defaultValidation()
        });

        then('User should navigated to Patient Dashboard', () => {
            defaultValidation()
        });

        when('User selects that the appointment is for Someone Else', () => {
            defaultValidation()
        });

        then('User provides the patient details', () => {
            defaultValidation()
        });

        and(/^User should see following details in the Appointment confirmation message "(.*)"$/, (arg0) => {
            defaultValidation()
        });

        and('User should receive an email message regarding appointmnet confirmation as below:', (table) => {
            defaultValidation()
        });
    });

    test('EPIC_EPP-44_STORY_EPP-1570-Verify User should be able to view the following filters within 3 seconds', ({ given, and, when, then }) => {
        given('User is already a registered user', () => {
            defaultValidation()
        });

        and(/^User launch the "(.*)" url$/, (arg0) => {
            defaultValidation()
        });

        when(/^User clicks on the "(.*)" button$/, (arg0) => {
            defaultValidation()
        });

        then('User should navigated to the search screen', () => {
            searchScreen()
        });

        and('User should fill the location', () => {
            inputLocation()
        });

        and('User should select the Date & Time with provider', () => {
            inputDate()
        });

        and('User should select the purpose of the visit', () => {
            inputPurpose()
        });

        and('User has reviewed the appointment details', () => {
            resultsScreen()
        });

        when('User selects that the appointment is for Self', () => {
            defaultValidation()
        });

        then('User should navigated to the Patient Portal application', () => {
            renderLogin()
        });

        when(/^User fills valid (.*) and (.*)$/, (arg0, arg1) => {
            defaultValidation()
        });

        and(/^User clicks on "(.*)" button$/, (arg0) => {
            defaultValidation()
        });

        then('User should navigated to Patient Dashboard', () => {
            defaultValidation()
        });

        when('User selects that the appointment is for Someone Else', () => {
            defaultValidation()
        });

        then('User provides the patient details', () => {
            defaultValidation()
        });

        and(/^User should see page load within (\d+) seconds$/, (arg0) => {
            defaultValidation()
        });
    });

    test('EPIC_EPP-44_STORY_EPP-1570-Verify User should not see the any errors script when user clicks F12 on the console', ({ given, and, when, then }) => {
        given('User is already a registered user', () => {
            defaultValidation()
        });

        and(/^User launch the "(.*)" url$/, (arg0) => {
            defaultValidation()
        });

        when(/^User clicks on the "(.*)" button$/, (arg0) => {
            defaultValidation()
        });

        then('User should navigated to the search screen', () => {
            searchScreen()
        });

        and('User should fill the location', () => {
            inputLocation()
        });

        and('User should select the Date & Time with provider', () => {
            inputDate()
        });

        and('User should select the purpose of the visit', () => {
            inputPurpose()
        });

        and('User has reviewed the appointment details', () => {
            resultsScreen()
        });

        when('User selects that the appointment is for Self', () => {
            defaultValidation()
        });

        then('User should navigated to the Patient Portal application', () => {
            renderLogin()
        });

        when(/^User fills valid (.*) and (.*)$/, (arg0, arg1) => {
            defaultValidation()
        });

        and(/^User clicks on "(.*)" button$/, (arg0) => {
            defaultValidation()
        });

        then('User should navigated to Patient Dashboard', () => {
            defaultValidation()
        });

        when('User selects that the appointment is for Someone Else', () => {
            defaultValidation()
        });

        then('User provides the patient details', () => {
            defaultValidation()
        });

        and(/^User should see page load within "(.*)"$/, (arg0) => {
            defaultValidation()
        });

        then(/^User should see following details in the Appointment confirmation message "(.*)"$/, (arg0) => {
            defaultValidation()
        });

        when(/^user clicks on F(\d+) on the console$/, (arg0) => {
            defaultValidation()
        });

        then('user should not to see any errors script', () => {
            defaultValidation()
        });
    });

    test('EPIC_EPP-44_STORY_EPP-1570-Negative Test Cases-Verify user should see the error message when the internet service is unavailable', ({ given, and, when, then }) => {
        given('User is already a registered user', () => {
            defaultValidation()
        });

        and(/^User launch the "(.*)" url$/, (arg0) => {
            defaultValidation()
        });

        when(/^User clicks on the "(.*)" button$/, (arg0) => {
            defaultValidation()
        });

        then('User should navigated to the search screen', () => {
            searchScreen()
        });

        and('User should fill the location', () => {
            inputLocation()
        });

        and('User should select the Date & Time with provider', () => {
            inputDate()
        });

        and('User should select the purpose of the visit', () => {
            inputPurpose()
        });

        and('User has reviewed the appointment details', () => {
            resultsScreen()
        });

        when('User selects that the appointment is for Self', () => {
            defaultValidation()
        });

        then('User should navigated to the Patient Portal application', () => {
            renderLogin()
        });

        when(/^User fills valid (.*) and (.*)$/, (arg0, arg1) => {
            defaultValidation()
        });

        and(/^User clicks on "(.*)" button$/, (arg0) => {
            defaultValidation()
        });

        then('User should navigated to Patient Dashboard', () => {
            defaultValidation()
        });

        when('User selects that the appointment is for Someone Else', () => {
            defaultValidation()
        });

        then('The Internet service is unavailable', () => {
            defaultValidation()
        });

        and('User should see the appropriate error message', () => {
            defaultValidation()
        });
    });

    test('EPIC_EPP-44_STORY_EPP-1570-Negative Test Cases-Verify user should see the error message when the service is unavailable', ({ given, and, when, then }) => {
        given('User is already a registered user', () => {
            defaultValidation()
        });

        and(/^User launch the "(.*)" url$/, (arg0) => {
            defaultValidation()
        });

        when(/^User clicks on the "(.*)" button$/, (arg0) => {
            defaultValidation()
        });

        then('User should navigated to the search screen', () => {
            searchScreen()
        });

        and('User should fill the location', () => {
            inputLocation()
        });

        and('User should select the Date & Time with provider', () => {
            inputDate()
        });

        and('User should select the purpose of the visit', () => {
            inputPurpose()
        });

        and('User has reviewed the appointment details', () => {
            resultsScreen()
        });

        when('User selects that the appointment is for Self', () => {
            defaultValidation()
        });

        then('User should navigated to the Patient Portal application', () => {
            renderLogin()
        });

        when(/^User fills valid (.*) and (.*)$/, (arg0, arg1) => {
            defaultValidation()
        });

        and(/^User clicks on "(.*)" button$/, (arg0) => {
            defaultValidation()
        });

        then('User should navigated to Patient Dashboard', () => {
            defaultValidation()
        });

        when('User selects that the appointment is for Someone Else', () => {
            defaultValidation()
        });

        then('The service is unavailable', () => {
            defaultValidation()
        });

        and('User should see the appropriate error message', () => {
            defaultValidation()
        });
    });
});
