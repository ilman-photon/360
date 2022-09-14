import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { defineFeature, loadFeature } from "jest-cucumber";
import { Provider } from "react-redux";
import Appointment from "../../src/pages/patient/appointment";
import store from "../../src/store/store";
import { fireEvent, render, waitFor } from "@testing-library/react";
import constants from "../../src/utils/constants";
import { act } from "react-dom/test-utils";
import mediaQuery from 'css-mediaquery';

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-1588.feature",
  {
    tagFilter: "@included and not @excluded",
  }
);
const MOCK_SUGGESTION_DATA = {
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

defineFeature(feature, (test) => {
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

  test('EPIC_EPP-44_STORY_EPP-1588- Verify if the user sees an error message "No results found. Please try again with a different search criteria" when user enters an incorrect city name', ({ given, when, and, then }) => {
    let container
    given('user launch the Patient Portal URL', () => {
        defaultValidation()
    });

    when('a user provides a valid Email or Phone Number and password', () => {
        defaultValidation()
    });

    and('user clicks on the Login button', () => {
        defaultValidation()
    });

    then('user navigates to the Patient Portal home page', () => {
        defaultValidation()
    });

    when('a user  clicks on the Schedule Appointment link', () => {
        defaultValidation()
    });

    then('User lands on the Schedule Appointment screen', async () => {
        window.matchMedia = createMatchMedia('1920px');
        const mock = new MockAdapter(axios);
        const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn()
        };
        const domain = window.location.origin;
        mock.onGet(`${domain}/api/dummy/appointment/create-appointment/getSugestion`).reply(200, MOCK_SUGGESTION_DATA);
        mock.onPost(`${domain}/api/dummy/appointment/create-appointment/submitFilter`).reply(400, {});
        window = Object.assign(window, { innerWidth: 1500 });
        global.navigator.geolocation = mockGeolocation;
            container = render(
            <Provider store={store}>
                {Appointment.getLayout(<Appointment />)}
            </Provider>
            );
        await waitFor(() => {
            container.getByLabelText(/City, state/i);
        })
    });

    and('enter the incorrect city name', () => {
        const locationField = container.getByLabelText(/City, state/i);
            fireEvent.change(locationField, { target: { value: "999999" } });
        expect("999999").toEqual(locationField.value)
    });

    and('click on Search', () => {
        const searchBtn = container.getByTestId(constants.TEST_ID.APPOINTMENT_TEST_ID.searchbtn)
        expect(searchBtn).toBeTruthy()
        fireEvent.click(searchBtn)
    });

    then('user should see the error message No results found. Please try again with a different search criteria.', async () => {
        setTimeout(async () => {
            await waitFor(() => {
              container.getByText(/ No results found./i);
              expect(container.getByText(/ No results found./i)).toBeInTheDocument();
            });
        }, 1000);
    });
    });

    test('EPIC_EPP-44_STORY_EPP-1588- Verify if the user sees an error message "No results found. Please try again with a different search criteria" when user enters an incorrect zip code', ({ given, when, and, then }) => {
        let container
        given('user launch the Patient Portal URL', () => {
            defaultValidation()
        });

        when('a user provides a valid Email or Phone Number and password', () => {
            defaultValidation()
        });

        and('user clicks on the Login button', () => {
            defaultValidation()
        });

        then('user navigates to the Patient Portal home page', () => {
            defaultValidation()
        });

        when('a user  clicks on the Schedule Appointment link', () => {
            defaultValidation()
        });

        then('User lands on the Schedule Appointment screen', async () => {
            const mock = new MockAdapter(axios);
            const mockGeolocation = {
            getCurrentPosition: jest.fn(),
            watchPosition: jest.fn()
            };
            const domain = window.location.origin;
            window = Object.assign(window, { innerWidth: 1500 });
            global.navigator.geolocation = mockGeolocation;
            container = render(
            <Provider store={store}>
                {Appointment.getLayout(<Appointment />)}
            </Provider>
            );
            await waitFor(() => {
                container.getByLabelText(/City, state/i);
            })
        });

        and('enter the incorrect Zipcode', () => {
            const locationField = container.getByLabelText(/City, state/i);
            fireEvent.change(locationField, { target: { value: "999999" } });
            expect("999999").toEqual(locationField.value)
        });

        and('click on Search', () => {
            const searchBtn = container.getByTestId(constants.TEST_ID.APPOINTMENT_TEST_ID.searchbtn)
            expect(searchBtn).toBeTruthy()
            fireEvent.click(searchBtn)
        });

        then('user should see the error message No results found. Please try again with a different search criteria.', () => {
            setTimeout(async () => {
                await waitFor(() => {
                  container.getByText(/ No results found./i);
                  expect(container.getByText(/ No results found./i)).toBeInTheDocument();
                });
            }, 1000);
        });
    });

    test('EPIC_EPP-44_STORY_EPP-1588- Verify if the user sees an error message "No results found. Please try again with a different search criteria" when user enters an incorrect state name', ({ given, when, and, then }) => {
        let container
        given('user launch the Patient Portal URL', () => {
            defaultValidation()
        });

        when('a user provides a valid Email or Phone Number and password', () => {
            defaultValidation()
        });

        and('user clicks on the Login button', () => {
            defaultValidation()
        });

        then('user navigates to the Patient Portal home page', () => {
            defaultValidation()
        });

        when('a user  clicks on the Schedule Appointment link', () => {
            defaultValidation()
        });

        then('User lands on the Schedule Appointment screen', async () => {
            const mock = new MockAdapter(axios);
            const mockGeolocation = {
                getCurrentPosition: jest.fn(),
                watchPosition: jest.fn()
            };
            const domain = window.location.origin;
            window = Object.assign(window, { innerWidth: 700 });

            global.navigator.geolocation = mockGeolocation;
            act(()=>{
                container = render(
                <Provider store={store}>
                    {Appointment.getLayout(<Appointment />)}
                </Provider>
                );
            })
            waitFor(() => {
                container.getByLabelText(/Schedule an eye exam/i);
            })
        });

        and('enter the incorrect State name', async () => {
            const locationField = container.getByLabelText(/City, state/i);
            await act(()=>{
                fireEvent.click(locationField);
            })
            waitFor(function() {
                container.getByLabelText(/Cancel/i);
                const locationField = container.getByLabelText(/City, state/i);
                fireEvent.change(locationField, { target: { value: "Texas" } });
                fireEvent.submit(input);
            })
        });

        and('click on Search', () => {
            const searchBtn = container.getByTestId(constants.TEST_ID.APPOINTMENT_TEST_ID.searchbtn)
            expect(searchBtn).toBeTruthy()
            fireEvent.click(searchBtn)
        });

        then('the user should see the error message No results found. Please try again with a different search criteria.', () => {
            setTimeout(async () => {
                await waitFor(() => {
                  container.getByText(/ No results found./i);
                  expect(container.getByText(/ No results found./i)).toBeInTheDocument();
                });
            }, 1000);
        });
    });
});

