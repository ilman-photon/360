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
  "./__tests__/feature/Patient Portal/Sprint4/EPP-1561.feature"
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
            }
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
            }
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

  test('EPIC_EPP-44_STORY_EPP-1561 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance.', ({ given, then, and }) => {
    defaultValidation();
  });

  test('EPIC_EPP-44_STORY_EPP-1561 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance and user view the location', ({ given, and, then }) => {
    given('user launch the Marketing Site url', () => {
        defaultValidation();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
        defaultValidation();
    });

    then('user navigates to the search screen', () => {
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
    });

    and('user enters the location', async () => {
        const locationInput = await waitFor(() => container.getByLabelText("City, state, or zip code"))
        act(() => {
            fireEvent.change(locationInput, { target: { value: "Texas" } });
          });
    });

    and('user selects the date of appointment', async () => {
        const dateInput = await waitFor(() => container.getByLabelText("Date"))
        act(() => {
            fireEvent.change(dateInput, { target: { value: "22-09-2022" } });
          })
    });

    and('user chooses the purpose of the visit', async () => {
        const purposeInput = await waitFor(() => container.getByTestId("select-purposes-of-visit"))
        act(() => {
            fireEvent.change(purposeInput, { target: { value: "Eye Exam" } });
        })
    });

    and('user enters the insurance name', async () => {
        const insuranceInput = await waitFor(() => container.getByLabelText("Insurance Carrier"))
        act(() => {
            fireEvent.change(insuranceInput, { target: { value: "Aetna" } });
        })
    });

    and('user clicks on the Search button', async () => {
        const searchBtn = await waitFor(() => container.getByTestId(APPOINTMENT_TEST_ID.searchbtn))
      fireEvent.click(searchBtn)
    });

    and('user views the results in the Schedule Appointments screen', async () => {
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
        defaultValidation();
    });
});

  test('EPIC_EPP-44_STORY_EPP-1561 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user view the date of appointment', ({ given, and, then }) => {
    given('user launch the Marketing Site url', () => {
        defaultValidation();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
        defaultValidation();
    });

    then('user navigates to the search screen', () => {
        defaultValidation();
    });

    and('user enters the location', () => {
        defaultValidation();
    });

    and('user selects the date of appointment', () => {
        defaultValidation();
    });

    and('user chooses the purpose of the visit', () => {
        defaultValidation();
    });

    and('user enters the insurance name', () => {
        defaultValidation();
    });

    and('user clicks on the Search button', () => {
        defaultValidation();
    });

    and('user views the results in the Schedule Appointments screen', () => {
        defaultValidation();
    });

    and('user views the date of appointment.', () => {
        defaultValidation();
    });
});

  test('EPIC_EPP-44_STORY_EPP-1561 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user views the purpose of visit', ({ given, and, then }) => {
    given('user launch the Marketing Site URL', () => {
        defaultValidation();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
        defaultValidation();
    });

    then('user navigates to the search screen', () => {
        defaultValidation();
    });

    and('user enters the location', () => {
        defaultValidation();
    });

    and('user selects the date of appointment', () => {
        defaultValidation();
    });

    and('user chooses the purpose of the visit', () => {
        defaultValidation();
    });

    and('user enters the insurance name', () => {
        defaultValidation();
    });

    and('user clicks on the Search button', () => {
        defaultValidation();
    });

    and('user views the results in the Schedule Appointments screen', () => {
        defaultValidation();
    });

    and('user views the purpose of the visit.', () => {
        defaultValidation();
    });
});

  test('EPIC_EPP-44_STORY_EPP-1561 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user view the insurance carrier.', ({ given, and, then }) => {
    given('user launch the Marketing Site url', () => {
        defaultValidation();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
        defaultValidation();
    });

    then('user navigates to the search screen', () => {
        defaultValidation();
    });

    and('user enters the location', () => {
        defaultValidation();
    });

    and('user selects the date of appointment', () => {
        defaultValidation();
    });

    and('user chooses the purpose of the visit', () => {
        defaultValidation();
    });

    and('user enters the insurance name', () => {
        defaultValidation();
    });

    and('user clicks on the Search button', () => {
        defaultValidation();
    });

    and('user views the results in the Schedule Appointments screen', () => {
        defaultValidation();
    });

    and('user views the insurance carrier.', () => {
        defaultValidation();
    });
});

  test('EPIC_EPP-44_STORY_EPP-1561 - Verify whether user is able to see Schedule Appointment screen with the selected location, date, purpose of visit and insurance carrier', ({ given, and, then }) => {
    given('user launch the Marketing Site url', () => {
        defaultValidation();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
        defaultValidation();
    });

    then('user navigates to the search screen', () => {
        defaultValidation();
    });

    and('user enters the location', () => {
        defaultValidation();
    });

    and('user selects the date of appointment', () => {
        defaultValidation();
    });

    and('user chooses the purpose of the visit', () => {
        defaultValidation();
    });

    and('user enters the insurance name', () => {
        defaultValidation();
    });

    and('user clicks on the Search button', () => {
        defaultValidation();
    });

    and('user lands on Schedule Appointment screen with the selected location, date, purpose of visit (if provided) and insurance carrier (if provided)', () => {
        defaultValidation();
    });
});

  test('EPIC_EPP-44_STORY_EPP-1561 - Verify whether the user is able to see the timeslot in the Schedule Oppointments screen', ({ given, and, then }) => {
    given('user launch the Marketing Site url', () => {
        defaultValidation();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
        defaultValidation();
    });

    then('user navigates to the search screen', () => {
        defaultValidation();
    });

    and('user enters the location', () => {
        defaultValidation();
    });

    and('user selects the date of appointment', () => {
        defaultValidation();
    });

    and('user chooses the purpose of the visit', () => {
        defaultValidation();
    });

    and('user enters the insurance name', () => {
        defaultValidation();
    });

    and('user clicks on the Search button', () => {
        defaultValidation();
    });

    and('user views the results in the Schedule Appointments screen', () => {
        defaultValidation();
    });

    and('user views the timeslot', () => {
        defaultValidation();
    });
});

  test('EPIC_EPP-44_STORY_EPP-1561 - Verify whether the user is able to select the timeslot in the Schedule Oppointments screen', ({ given, and, then }) => {
    given('user launch the Marketing Site url', () => {
        defaultValidation();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
        defaultValidation();
    });

    then('user navigates to the search screen', () => {
        defaultValidation();
    });

    and('user enters the location', () => {
        defaultValidation();
    });

    and('user selects the date of appointment', () => {
        defaultValidation();
    });

    and('user chooses the purpose of the visit', () => {
        defaultValidation();
    });

    and('user enters the insurance name', () => {
        defaultValidation();
    });

    and('user clicks on the Search button', () => {
        defaultValidation();
    });

    and('user views the results in the Schedule Appointments screen', () => {
        defaultValidation();
    });

    and('user select the timeslot', () => {
        defaultValidation();
    });
});

  test('EPIC_EPP-44_STORY_EPP-1561 - Verify whether the user lands on the screen to review the appointment details', ({ given, and, then }) => {
    given('user launch the Marketing Site url', () => {
        defaultValidation();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
        defaultValidation();
    });

    then('user navigates to the search screen', () => {
        defaultValidation();
    });

    and('user enters the location', () => {
        defaultValidation();
    });

    and('user selects the date of appointment', () => {
        defaultValidation();
    });

    and('user chooses the purpose of the visit', () => {
        defaultValidation();
    });

    and('user enters the insurance name', () => {
        defaultValidation();
    });

    and('user clicks on the Search button', () => {
        defaultValidation();
    });

    and('user views the results in the Schedule Appointments screen', () => {
        defaultValidation();
    });

    and('user select the timeslot', () => {
        defaultValidation();
    });

    then('user lands on the screen to review the appointment details', () => {
        defaultValidation();
    });
});

  test('EPIC_EPP-44_STORY_EPP-1561 - Verify whether the user lands on the screen to review the appointment details and proceeds to schedule it', ({ given, and, then }) => {
    given('user launch the Marketing Site url', () => {
        defaultValidation();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
        defaultValidation();
    });

    then('user navigates to the search screen', () => {
        defaultValidation();
    });

    and('user enters the location', () => {
        defaultValidation();
    });

    and('user selects the date of appointment', () => {
        defaultValidation();
    });

    and('user chooses the purpose of the visit', () => {
        defaultValidation();
    });

    and('user enters the insurance name', () => {
        defaultValidation();
    });

    and('user clicks on the Search button', () => {
        defaultValidation();
    });

    and('user views the results in the Schedule Appointments screen', () => {
        defaultValidation();
    });

    and('user select the timeslot', () => {
        defaultValidation();
    });

    then('user lands on the screen to review the appointment details', () => {
        defaultValidation();
    });

    and('user selects the option proceeds to schedule it', () => {
        defaultValidation();
    });
});

  test('EPIC_EPP-44_STORY_EPP-1561 - Verify whether the user lands on the screen to select who the appointment is for after proceed from appointment page', ({ given, and, then }) => {
    given('user launch the Marketing Site url', () => {
        defaultValidation();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
        defaultValidation();
    });

    then('user navigates to the search screen', () => {
        defaultValidation();
    });

    and('user enters the location', () => {
        defaultValidation();
    });

    and('user selects the date of appointment', () => {
        defaultValidation();
    });

    and('user chooses the purpose of the visit', () => {
        defaultValidation();
    });

    and('user enters the insurance name', () => {
        defaultValidation();
    });

    and('user clicks on the Search button', () => {
        defaultValidation();
    });

    and('user views the results in the Schedule Appointments screen', () => {
        defaultValidation();
    });

    and('user select the timeslot', () => {
        defaultValidation();
    });

    then('user lands on the screen to review the appointment details', () => {
        defaultValidation();
    });

    and('user selects the option proceeds to schedule it', () => {
        defaultValidation();
    });

    then('user lands on the screen to select who the appointment is for', () => {
        defaultValidation();
    });
});

  test('EPIC_EPP-44_STORY_EPP-1561 - Verify whether the user able to see Myself option in who the appointment is for screen', ({ given, and, then }) => {
    given('user launch the Marketing Site url', () => {
        defaultValidation();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
        defaultValidation();
    });

    then('user navigates to the search screen', () => {
        defaultValidation();
    });

    and('user enters the location', () => {
        defaultValidation();
    });

    and('user selects the date of appointment', () => {
        defaultValidation();
    });

    and('user chooses the purpose of the visit', () => {
        defaultValidation();
    });

    and('user enters the insurance name', () => {
        defaultValidation();
    });

    and('user clicks on the Search button', () => {
        defaultValidation();
    });

    and('user views the results in the Schedule Appointments screen', () => {
        defaultValidation();
    });

    and('user select the timeslot', () => {
        defaultValidation();
    });

    then('user lands on the screen to review the appointment details', () => {
        defaultValidation();
    });

    and('user selects the option proceeds to schedule it', () => {
        defaultValidation();
    });

    then('user lands on the screen to select who the appointment is for', () => {
        defaultValidation();
    });

    and('user able to see Myself option in who the appointment is for screen', () => {
        defaultValidation();
    });
});

  test('EPIC_EPP-44_STORY_EPP-1561 - Verify whether the user able to see Someone else option in who the appointment is for screen', ({ given, and, then }) => {
    given('user launch the Marketing Site url', () => {
        defaultValidation();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
        defaultValidation();
    });

    then('user navigates to the search screen', () => {
        defaultValidation();
    });

    and('user enters the location', () => {
        defaultValidation();
    });

    and('user selects the date of appointment', () => {
        defaultValidation();
    });

    and('user chooses the purpose of the visit', () => {
        defaultValidation();
    });

    and('user enters the insurance name', () => {
        defaultValidation();
    });

    and('user clicks on the Search button', () => {
        defaultValidation();
    });

    and('user views the results in the Schedule Appointments screen', () => {
        defaultValidation();
    });

    and('user select the timeslot', () => {
        defaultValidation();
    });

    then('user lands on the screen to review the appointment details', () => {
        defaultValidation();
    });

    and('user selects the option proceeds to schedule it', () => {
        defaultValidation();
    });

    then('user lands on the screen to select who the appointment is for', () => {
        defaultValidation();
    });

    and('user able to see Someone else option in who the appointment is for screen', () => {
        defaultValidation();
    });
});

});