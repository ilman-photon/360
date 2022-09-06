import { act, fireEvent, render, waitFor } from "@testing-library/react";
import axios from "axios";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import { defineFeature, loadFeature } from "jest-cucumber";
import { Provider } from "react-redux";
import Appointments from "../../src/pages/patient/appointments";
import store from "../../src/store/store";
const useRouter = jest.spyOn(require("next/router"), "useRouter");
import constants from "../../src/utils/constants";
import { Login } from "../../src/components/organisms/Login/login";
import FilterHeading from "../../src/components/molecules/FilterHeading/filterHeading";
import FilterResult from "../../src/components/molecules/FilterResult/filterResult";
import FilterBy from "../../src/components/molecules/FilterBy/filterBy";
import AppointmentDetails from "../../src/components/organisms/ScheduleAppointment/appointmentDetails";
import AppointmentLocation from "../../src/components/organisms/ScheduleAppointment/appointmentLocation";
import { PageContent } from "../../src/pages/patient/schedule-appointment";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-1592.feature",
);

defineFeature(feature, (test) => {
  let container;
  const element = document.createElement("div");
  const mock = new MockAdapter(axios);
  const { APPOINTMENT_TEST_ID, SCHEDULE_APPOINTMENT_TEST_ID } = constants.TEST_ID
  const mockAppointmentScheduleData = {
    providerInfo: {
      providerId: '1',
      name: 'Paul Wagner Md',
      address: {
        addressLine1: '51 West 51st Street',
        addressLine2: 'Floor 3, Suite 320 Midtown',
        city: 'Florida',
        state: 'FR',
        zipcode: '54231'
      },
      rating: '5',
      phoneNumber: '(123) 123-4567',
      distance: '10 mi',
      image: '/doctor.png',
      from: '2022-09-19',
      to: '2022-09-24',
      location: {
        latitude: 0,
        longitude: 0
      },
      availability: [
        {
          date: '2022-09-19',
          list: [
            {
              time: '11:30am',
              key: 12222
            }
          ]
        },
        {
          date: '2022-09-20',
          list: [
            {
              time: '08:00am',
              key: 12223
            },
            {
              time: '10:30am',
              key: 12224
            },
            {
              time: '11:00am',
              key: 12225
            },
            {
              time: '12:00pm',
              key: 12226
            },
            {
              time: '13:00pm',
              key: 12227
            },
            {
              time: '14:00pm',
              key: 12228
            }
          ]
        },
        {
          date: '2022-09-21',
          list: [
            {
              time: '08:30am',
              key: 12229
            },
            {
              time: '10:30am',
              key: 12230
            },
            {
              time: '11:30am',
              key: 12231
            },
            {
              time: '12:00pm',
              key: 12232
            },
            {
              time: '13:30pm',
              key: 12233
            },
            {
              time: '14:30pm',
              key: 12234
            },
            {
              time: '15:30pm',
              key: 12235
            },
            {
              time: '16:30pm',
              key: 12236
            },
            null
          ]
        },
        {
          date: '2022-09-22',
          list: [
            {
              time: '09:30am',
              key: 12237
            },
            {
              time: '11:00am',
              key: 12238
            }
          ]
        },
        {
          date: '2022-09-23',
          list: [
            {
              time: '09:30am',
              key: 12239
            }
          ]
        },
        {
          date: '2022-09-24',
          list: [
            {
              time: '09:30am',
              key: 12240
            }
          ]
        }
      ],
      coordinate: {
        latitude: 32.751204,
        longitude: -117.1641166
      }
    },
    patientInfo: {
      name: null,
      firstName: '',
      lastName: '',
      dob: null,
      phoneNumber: null,
      email: '',
      password: '',
      preferredCommunication: 'both'
    },
    appointmentInfo: {
      appointmentType: 'Eye Exam',
      date: '08:00am',
      insuranceCarrier: 'Aetna'
    }
  }

  const providerList = [
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
              time: "13:00pm",
              key: 12227,
            },
            {
              time: "14:00pm",
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
              time: "13:30pm",
              key: 12233,
            },
            {
              time: "14:30pm",
              key: 12234,
            },
            {
              time: "15:30pm",
              key: 12235,
            },
            {
              time: "16:30pm",
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
              time: "13:00pm",
              key: 12227,
            },
            {
              time: "14:00pm",
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
              time: "13:30pm",
              key: 12233,
            },
            {
              time: "14:30pm",
              key: 12234,
            },
            {
              time: "15:30pm",
              key: 12235,
            },
            {
              time: "16:30pm",
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
              time: "13:00pm",
              key: 12227,
            },
            {
              time: "14:00pm",
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
              time: "13:30pm",
              key: 12233,
            },
            {
              time: "14:30pm",
              key: 12234,
            },
            {
              time: "15:30pm",
              key: 12235,
            },
            {
              time: "16:30pm",
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
  ]

  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };

  test('EPIC_EPP-44_STORY_EPP-1592 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and user view options to change the insurance.', ({ given, when, then, and }) => {
    given('user launch the Patient Portal url', () => {
      defaultValidation()
    });

    when('user provides valid Email or Phone Number and password and click on Login button', () => {
      const mockOnLoginClicked = jest.fn((data, route, callback) => {
        callback({
          status: "success",
        });
      });
      container = render(<Login OnLoginClicked={mockOnLoginClicked} />);
      const usernameField = container.getByLabelText("emailUserLabel")
      const passwordField = container.getByLabelText("passwordLabel");
      act(() => {
        fireEvent.change(usernameField, { target: { value: "wrongUserName" } });
        fireEvent.change(passwordField, { target: { value: "validPassword" } });
      })
      expect(usernameField.value).not.toEqual("validUsername");
      expect(passwordField.value).toEqual("validPassword");
      const login = container.getByRole("button", { name: /Login/i });
      fireEvent.click(login);
    });

    then('user navigates to the Patient Portal application', () => {
      const mock = new MockAdapter(axios);
      const expectedResult = {
        ResponseCode: 2001,
        ResponseType: "failure",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    when('user  clicks on Schedule Appointment menu', () => {
      defaultValidation()
    });

    then('user navigates to the search screen', () => {
      defaultValidation()
    });

    and('user provided location,date of appointment,purpose of visit,insurance and provider', async () => {
      const mockFilterData = {
        date: null,
        location: "",
        insuranceCarrier: "",
        purposeOfVisit: "",
      }
      container.rerender(<FilterHeading 
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
      const locationInput = await waitFor(() => container.getByLabelText("City, state, or zip code"))
      const dateInput = await waitFor(() => container.getByLabelText("Date"))
      const purposeInput = await waitFor(() => container.getByTestId("select-purposes-of-visit"))

      const insuranceInput = await waitFor(() => container.getByLabelText("Insurance Carrier"))
      act(() => {
        fireEvent.change(locationInput, { target: { value: "Texas" } });
        fireEvent.change(dateInput, { target: { value: "22-09-2022" } });
        fireEvent.change(purposeInput, { target: { value: "Eye Exam" } });
        fireEvent.change(insuranceInput, { target: { value: "Aetna" } });
      });
    });

    and('user clicks on the Search button',async () => {
      const searchBtn = await waitFor(() => container.getByTestId(APPOINTMENT_TEST_ID.searchbtn))
      fireEvent.click(searchBtn)
    });

    and('user views the results in the Schedule Appointments screen', async() => {
      const rangeDate = { startDate: "2022-10-10", endDate: "2022-10-15" }
      container.rerender(
        <FilterResult isDesktop={true} 
          providerList={providerList} 
          rangeDate={rangeDate} 
          purposeOfVisitData={[]}
          insuranceCarrierData={[]}
          googleApiKey={"Test"}
          filterData = {{
            location: "",
            date: "",
            purposeOfVisit: "",
            insuranceCarrier: "",
          }}
        />
      );
      expect(await waitFor(() => container.getByTestId(APPOINTMENT_TEST_ID.FILTER_RESULT.container))).toBeInTheDocument()
    });

    and('user views the selected location.', () => {
      defaultValidation()
    });

    and('user views an option to search locations using City or State or Zipcode with the selected location', () => {
      defaultValidation()
    });

    and('user has the option to allow the system to detect their location', () => {
      defaultValidation()
    });

    and('user views the filter options', async () => {
      container.rerender(
        <FilterBy
          activedFilter={[]}
          filter={[]}
          isOpen={true}
          onClose={() => {
            jest.fn();
          }}
          onDone={() => {
            jest.fn();
          }}
        ></FilterBy>
      )
      expect(await waitFor(() => container.getByTestId(APPOINTMENT_TEST_ID.FILTER_COMPONENT.drawer)))
    });

    and('user view options to change the appointment date and Time', async () => {
      container.rerender(
        <AppointmentDetails
          appointmentData={mockAppointmentScheduleData.appointmentInfo}
          OnEditClicked={() => {
            jest.fn();
          }}
        />
      )
      
      const editButton = await waitFor(() => container.getByTestId(SCHEDULE_APPOINTMENT_TEST_ID.APPOINTMENT_DETAILS.editButton))
      fireEvent.click(editButton)
    });

    and('user view options to change the Purpose of the Visit', async () => {
      container.rerender(
        <AppointmentDetails
          appointmentData={mockAppointmentScheduleData.appointmentInfo}
          OnEditClicked={() => {
            jest.fn();
          }}
        />
      )
      
      const editButton = await waitFor(() => container.getByTestId(SCHEDULE_APPOINTMENT_TEST_ID.APPOINTMENT_DETAILS.editButton))
      fireEvent.click(editButton)
    });

    and('user view options to change the insurance.', async () => {
      container.rerender(
        <AppointmentDetails
          appointmentData={mockAppointmentScheduleData.appointmentInfo}
          OnEditClicked={() => {
            jest.fn();
          }}
        />
      )
      
      const editButton = await waitFor(() => container.getByTestId(SCHEDULE_APPOINTMENT_TEST_ID.APPOINTMENT_DETAILS.editButton))
      fireEvent.click(editButton)
    });

    and('user view options to change selected provider', async () => {
      container.rerender(
        <AppointmentLocation
          providerData={mockAppointmentScheduleData.providerInfo}
          OnEditClicked={() => {
            jest.fn();
          }}
        />
      )
      
      const editButton = await waitFor(() => container.getByTestId(SCHEDULE_APPOINTMENT_TEST_ID.APPOINTMENT_LOCATION.editButton))
      fireEvent.click(editButton)
    });

    and('user view options to change selected location', async () => {
      container.rerender(
        <AppointmentLocation
          providerData={mockAppointmentScheduleData.providerInfo}
          OnEditClicked={() => {
            jest.fn();
          }}
        />
      )
      
      const editButton = await waitFor(() => container.getByTestId(SCHEDULE_APPOINTMENT_TEST_ID.APPOINTMENT_LOCATION.editButton))
      fireEvent.click(editButton)
    });

    and('user view an option to schedule the appointment', async () => {
      container.rerender(
        <PageContent
          activeStep={1}
          isLoggedIn={true}
          dispatch={() => {
            jest.fn();
          }}
          appointmentScheduleData={mockAppointmentScheduleData}
          OnsetActiveStep={() => {
            jest.fn();
          }}
          OnEditClicked={() => {
            jest.fn();
          }}
          OnClickSchedule={() => {
            jest.fn();
          }}
        />
      )
      
      const submitButton = await waitFor(() => container.getByTestId(SCHEDULE_APPOINTMENT_TEST_ID.step2Button))
      fireEvent.click(submitButton)
    });
  });
});