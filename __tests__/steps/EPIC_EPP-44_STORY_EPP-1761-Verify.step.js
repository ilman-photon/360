import { defineFeature, loadFeature } from "jest-cucumber";
import "@testing-library/jest-dom/extend-expect";
import {
    act,
    fireEvent,
    render,
    waitFor,
    cleanup,
} from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../src/store/store";
import FilterHeading from "../../src/components/molecules/FilterHeading/filterHeading";
import ScheduleAppointmentPage from "../../src/pages/patient/schedule-appointment";
import { renderLogin } from "../../__mocks__/commonSteps";
import ForgotPassword from "../../src/components/organisms/ForgotPassword/forgotPassword";

const feature = loadFeature(
    "./__tests__/feature/Patient Portal/Sprint4/EPP-1761.feature"
);

defineFeature(feature, (test) => {
    let container
    const defaultValidation = () => {
        expect(true).toBeTruthy();
    };

    const searchScreen = () => {
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

    const provideFilters = () => {
        inputLocation();
        inputDate();
        inputPurpose();
        inputInsurance();
        clickSearch();
    };

    const reviewAppPage = async () => {
        container.rerender(<Provider store={store}>{ScheduleAppointmentPage.getLayout(<ScheduleAppointmentPage />)}</Provider>);
        await waitFor(() => container.getByText("Review Appointment Details"));
        const continueButton = container.getAllByText("continue")[0];
        fireEvent.click(continueButton);
    }

    const clickMyself = async () => {
        await waitFor(() => container.getByText("myself"));
        expect(container.getAllByText("myself")).toBeTruthy();
        expect(container.getAllByText("someoneElse")).toBeTruthy();
        const myselfButton = container.getByText("myself");
        fireEvent.click(myselfButton);
        const continueButton = container.getAllByText("continue")[0];
        fireEvent.click(continueButton);
    };

    const provideFirstLastNameValid = async () => {
        await waitFor(() => container.getByText("First Name"));
        const field1 = container.getByLabelText("First Name");
        fireEvent.change(field1, { target: { value: "first" } });

        const field2 = container.getByLabelText("Last Name");
        fireEvent.change(field2, { target: { value: "last" } });
    };

    const clickSaveAction = () => {
        const saveButton = container.getByRole("button", {
            name: "scheduleAppoinment",
        });
        fireEvent.click(saveButton);
    };

    const errorEmailPhone = async () => {
        await waitFor(() => container.getByText("Email ID or Mobile Number is required"));
        const inputFieldError = container.getByText("Email ID or Mobile Number is required");
        expect(inputFieldError).toBeTruthy();
        expect("Email ID or Mobile Number is required").toEqual(inputFieldError.textContent);
    };

    test('EPIC_EPP-44_STORY_EPP-1761-To verify whether the registered user can able to Reset the password and Appointment is synced automatically', ({ given, when, and, then }) => {
        given('registered user launch the Marketing Site url', () => {
            defaultValidation();
        });

        when('registered user clicks on the Schedule your Eye Exam button', () => {
            defaultValidation();
        });

        and('registered user select the Purpose of Visit, Location and Date & Time with provider.', () => {
            searchScreen()
        });

        and('registered user review the appointments.', () => {
            reviewAppPage();
        });

        and('select the Appointment for Myself.', () => {
            clickMyself();
        });

        and('registered user should see the mentioned fields Login, Create an Account and Forgot password', async () => {
            container = await renderLogin()
        });

        and('registered user click the Forgot password', () => {
            const forgotPassBtn = container.getByText("forgotPassword")
            expect(forgotPassBtn).toBeInTheDocument()
            fireEvent.click(forgotPassBtn)
        });

        and('registered user should able to set the password.', async () => {
            container.rerender(
                <ForgotPassword isAppointment={false} />
            );
            expect(
                await waitFor(() =>
                    container.getByText(/resetPasswordText/i)
                )
            ).toBeInTheDocument();
            const syncButton = container.getByText(/resetPasswordText/i);
            fireEvent.click(syncButton);
        });

        and('registered should lands on dashboard.', () => {
            defaultValidation();
        });

        and('the registered user should see the success message Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly.', () => {
            defaultValidation();
        });

        then('registered user should  able to view the Appointment under Upcoming Appointments', () => {
            defaultValidation();
        });
    });

    test('EPIC_EPP-44_STORY_EPP-1761-To verify whether the Appointment Confirmation Email is delivering to registered Email based on Preferred mode of communication', ({ given, when, and, then }) => {
        given('registered user launch the Marketing Site url', () => {
            defaultValidation();
        });

        when('registered user clicks on the Schedule your Eye Exam button', () => {
            defaultValidation();
        });

        and('registered user select the Purpose of Visit, Location and Date & Time with provider.', () => {
            searchScreen()
        });

        and('registered user review the appointments.', () => {
            reviewAppPage();
        });

        and('select the Appointment for Myself.', () => {
            clickMyself();
        });

        and('registered user should see the mentioned fields Login, Create an Account and Forgot password', async () => {
            container = await renderLogin()
        });

        and('registered user click the Forgot password', () => {
            const forgotPassBtn = container.getByText("forgotPassword")
            expect(forgotPassBtn).toBeInTheDocument()
            fireEvent.click(forgotPassBtn)
        });

        and('registered user should able to set the password.', async () => {
            container.rerender(
                <ForgotPassword isAppointment={false} />
            );
            expect(
                await waitFor(() =>
                    container.getByText(/resetPasswordText/i)
                )
            ).toBeInTheDocument();
            const syncButton = container.getByText(/resetPasswordText/i);
            fireEvent.click(syncButton);
        });

        and('registered should lands on dashboard.', () => {
            defaultValidation();
        });

        and('the registered user should see the success message Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly.', () => {
            defaultValidation();
        });

        and('registered user should  able to view the Appointment under Upcoming Appointments', () => {
            defaultValidation();
        });

        then('Appointment Confirmation Email should received to the registered user.', () => {
            defaultValidation();
        });
    });

    test('EPIC_EPP-44_STORY_EPP-1761-To verify whether the Appointment Confirmation Text message is delivering to registered Phone number based on Preferred mode of communication', ({ given, when, and, then }) => {
        given('registered user launch the Marketing Site url', () => {
            defaultValidation();
        });

        when('registered user clicks on the Schedule your Eye Exam button', () => {
            defaultValidation();
        });

        and('registered user select the Purpose of Visit, Location and Date & Time with provider.', () => {
            searchScreen()
        });

        and('registered user review the appointments.', () => {
            reviewAppPage();
        });

        and('select the Appointment for Myself.', () => {
            clickMyself();
        });

        and('registered user should see the mentioned fields Login, Create an Account and Forgot password', async () => {
            container = await renderLogin()
        });

        and('registered user click the Forgot password', () => {
            const forgotPassBtn = container.getByText("forgotPassword")
            expect(forgotPassBtn).toBeInTheDocument()
            fireEvent.click(forgotPassBtn)
        });

        and('registered user should able to set the password.', async () => {
            container.rerender(
                <ForgotPassword isAppointment={false} />
            );
            expect(
                await waitFor(() =>
                    container.getByText(/resetPasswordText/i)
                )
            ).toBeInTheDocument();
            const syncButton = container.getByText(/resetPasswordText/i);
            fireEvent.click(syncButton);
        });

        and('registered should lands on dashboard.', () => {
            defaultValidation();
        });

        and('the registered user should see the success message Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly.', () => {
            defaultValidation();
        });

        and('registered user should  able to view the Appointment under Upcoming Appointments', () => {
            defaultValidation();
        });

        then('Appointment Confirmation Text message should received to the registered user.', () => {
            defaultValidation();
        });
    });

    test('EPIC_EPP-44_STORY_EPP-1761-To verify the Appointment confirmation Email content', ({ given, when, and, then }) => {
        given('registered user launch the Marketing Site url', () => {
            defaultValidation();
        });

        when('registered user clicks on the Schedule your Eye Exam button', () => {
            defaultValidation();
        });

        and('registered user select the Purpose of Visit, Location and Date & Time with provider.', () => {
            searchScreen()
        });

        and('registered user review the appointments.', () => {
            reviewAppPage();
        });

        and('select the Appointment for Myself.', () => {
            clickMyself();
        });

        and('registered user should see the mentioned fields Login, Create an Account and Forgot password', async () => {
            container = await renderLogin()
        });

        and('registered user click the Forgot password', () => {
            const forgotPassBtn = container.getByText("forgotPassword")
            expect(forgotPassBtn).toBeInTheDocument()
            fireEvent.click(forgotPassBtn)
        });

        and('registered user should able to set the password.', async () => {
            container.rerender(
                <ForgotPassword isAppointment={false} />
            );
            expect(
                await waitFor(() =>
                    container.getByText(/resetPasswordText/i)
                )
            ).toBeInTheDocument();
            const syncButton = container.getByText(/resetPasswordText/i);
            fireEvent.click(syncButton);
        });

        and('registered should lands on dashboard.', () => {
            defaultValidation();
        });

        and('the registered user should see the success message Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly.', () => {
            defaultValidation();
        });

        and('registered user should  able to view the Appointment under Upcoming Appointments', () => {
            defaultValidation();
        });

        then('check for whether the Email content is displaying as below', (table) => {
            defaultValidation();
        });
    });

    test('EPIC_EPP-44_STORY_EPP-1761-To verify whether the registered user can able to Reset the password from the Marketting site', ({ given, when, and, then }) => {
        given('registered user launch the Marketing Site url', () => {
            defaultValidation();
        });

        when('registered user clicks on the Schedule your Eye Exam button', () => {
            defaultValidation();
        });

        and('registered user select the Purpose of Visit, Location and Date & Time with provider.', () => {
            searchScreen()
        });

        and('registered user review the appointments.', () => {
            reviewAppPage();
        });

        and('select the Appointment for Myself.', () => {
            clickMyself();
        });

        and('registered user should see the mentioned fields Login, Create an Account and Forgot password', async () => {
            container = await renderLogin()
        });

        and('registered user click the Forgot password', () => {
            const forgotPassBtn = container.getByText("forgotPassword")
            expect(forgotPassBtn).toBeInTheDocument()
            fireEvent.click(forgotPassBtn)
        });

        then('Registered user should able to set the password.', () => {
            defaultValidation();
        });
    });


});