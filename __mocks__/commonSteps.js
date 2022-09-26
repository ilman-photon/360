import { act, cleanup, fireEvent, render, waitFor, } from "@testing-library/react";
import { Provider } from "react-redux";
import Login from "../src/pages/patient/login";
import "@testing-library/jest-dom";
import store from "../src/store/store";
import { TEST_ID } from "../src/utils/constants";
import ForgotPasswordPage from "../src/pages/patient/forgot-password";
import Appointment from "../src/pages/patient/appointment/index"
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import mediaQuery from 'css-mediaquery';
import FilterResult from "../src/components/molecules/FilterResult/filterResult";
import ScheduleAppointment from "../src/pages/patient/schedule-appointment/index";

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
]

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
}

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
}

const mock = new MockAdapter(axios);

export function createMatchMedia(width) {
  return (query) => ({
    matches: mediaQuery.match(query, { width }),
    addListener: () => { },
    removeListener: () => { },
  });
}
export async function renderLogin() {
  let container;
  act(() => {
    container = render(
      <Provider store={store}>{Login.getLayout(<Login />)}</Provider>
    );
  });
  await waitFor(() => container.getByTestId(TEST_ID.LOGIN_TEST_ID.loginBtn));
  return container;
}
export async function renderForgotPassword() {
  let container;
  act(() => {
    container = render(
      <Provider store={store}>
        {ForgotPasswordPage.getLayout(<ForgotPasswordPage />)}
      </Provider>
    );
  });
  await waitFor(() => container.getByLabelText(/usernamePlaceHolder/i));
  return container;
}
export async function clickContinueForgot(container, mock) {
  const expectedResult = {
    ResponseCode: 1000,
    ResponseType: "success",
    SecurityQuestions: [
      {
        "Where did you go the first time you flew on a plane?": "America",
        "Who is your all-time favorite movie character": "Peter",
        "In what city or town did your parents meet?": "Berlin",
      },
    ],

    PreferredComunication: "Both",
  };
  mock.onPost(`/ecp/patient/validate`).reply(200, expectedResult);
  act(() => {
    const button = container.getByTestId(TEST_ID.FORGOT_TEST_ID.continueBtn);
    fireEvent.click(button);
  });
  await waitFor(() => container.getByText("or"));
  return container;
}

export async function renderScheduleAppointment() {
  let container;
  const mockGeolocation = {
    getCurrentPosition: jest.fn(),
    watchPosition: jest.fn()
  };

  const domain = window.location.origin;
  mock.onGet(`${domain}/api/dummy/appointment/create-appointment/getSugestion`).reply(200, mockSuggestion);
  mock.onPost(`${domain}/api/dummy/appointment/create-appointment/submitFilter`).reply(200, mockSubmitFilter);
  global.navigator.geolocation = mockGeolocation;
  window.matchMedia = createMatchMedia('1920px');
  container = render(
    <Provider store={store}>{Appointment.getLayout(<Appointment />)}</Provider>
  );
  await waitFor(() => container.getByText("Purpose of Visit"));
  expect(container.getByText("Purpose of Visit")).toBeInTheDocument();
  return container;
}

export async function renderResultsScreen() {
  const rangeDate = { startDate: "2022-10-10", endDate: "2022-10-15" };
  let container
  container = render(
    <FilterResult
      isDesktop={true}
      providerList={providerList}
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
  expect(
    await waitFor(() =>
      container.getByTestId(TEST_ID.APPOINTMENT_TEST_ID.FILTER_RESULT.container)
    )
  ).toBeInTheDocument();
};

export async function renderAppointmentDetail() {
  let container
  act(() => {
    container = render(
      <Provider store={store}>
        {ScheduleAppointment.getLayout(<ScheduleAppointment />)}
      </Provider>
    );
  })
  expect(
    await waitFor(() =>
      container.getByTestId(TEST_ID.SCHEDULE_APPOINTMENT_TEST_ID.APPOINTMENT_DETAILS.editButton)
    )
  ).toBeInTheDocument();
}
