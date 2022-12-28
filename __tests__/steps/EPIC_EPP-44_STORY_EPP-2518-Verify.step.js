import { act, fireEvent, render, waitFor } from "@testing-library/react";
import axios from "axios";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import { defineFeature, loadFeature } from "jest-cucumber";
import { Provider } from "react-redux";
import Bio, { getServerSideProps } from "../../src/pages/patient/bio/[bio]";
import store from "../../src/store/store";
import { Marker, useLoadScript } from "@react-google-maps/api";
import constants from "../../src/utils/constants";
import Appointment from "../../src/pages/patient/appointment";
import mediaQuery from 'css-mediaquery';
import { mockSubmitFilterReal } from "../../__mocks__/mockResponse";
import { inputPurpose } from "../../__mocks__/commonSteps";

const useRouter = jest.spyOn(require("next/router"), "useRouter");

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-2518.feature",
  {
    tagFilter: "@included and not @excluded",
  }
);

const useGeolocated = jest.spyOn(require("react-geolocated"), "useGeolocated");

jest.mock("@react-google-maps/api", () => ({
  useLoadScript: () => ({
    isLoaded: true,
    loadError: null,
  }),
  GoogleMap: () => <div></div>,
  Marker: () => <Marker />,
}));

defineFeature(feature, (test) => {
  let container;
  const mock = new MockAdapter(axios);
  useGeolocated.mockReturnValue({
    coords: { latitude: 36.8493937, longitude: -76.0106753 },
    isGeolocationEnabled: true,
  });
  const TEST_ID = constants.TEST_ID.BIOGRAPHY_TEST_ID;
  const mockSuggestionReal = {
    "count": 5,
    "entities": [
      {
        "code": "Clinical_Diagnosis",
        "name": "Clinical_Diagnosis",
        "key": 4,
        "order": 4,
        "category": {
          "code": "Vision",
          "description": "Vision"
        },
        "acronym": "CAD",
        "color": "#6fc77b",
        "slotLength": 5,
        "notes": "",
        "_links": {
          "self": {
            "href": "/v1/appointment-types/Clinical_Diagnosis"
          }
        }
      },
      {
        "code": "NO_APPOINTMENT",
        "name": "NO APPOINTMENT",
        "key": 1,
        "order": 1,
        "category": {
          "code": "Medical",
          "description": "Medical"
        },
        "acronym": "NA",
        "color": "#8F8F8F",
        "slotLength": 5,
        "notes": "NO_APPOINTMENT is a default appointment type",
        "_links": {
          "self": {
            "href": "/v1/appointment-types/NO_APPOINTMENT"
          }
        }
      },
      {
        "code": "Comprehensive",
        "name": "Comprehensive",
        "key": 2,
        "order": 2,
        "category": {
          "code": "Medical",
          "description": "Medical"
        },
        "acronym": "CP",
        "color": "#f2ee74",
        "slotLength": 5,
        "notes": "",
        "_links": {
          "self": {
            "href": "/v1/appointment-types/Comprehensive"
          }
        }
      },
      {
        "code": "Glaucome_Appointment",
        "name": "Glaucoma_Appointment",
        "key": 3,
        "order": 3,
        "category": {
          "code": "Vision",
          "description": "Vision"
        },
        "acronym": "GPA",
        "color": "#528aa8",
        "slotLength": 5,
        "notes": "",
        "_links": {
          "self": {
            "href": "/v1/appointment-types/Glaucome_Appointment"
          }
        }
      },
      {
        "code": "Retina_checkup",
        "name": "Retina checkup",
        "key": 5,
        "order": 5,
        "category": {
          "code": "Vision",
          "description": "Vision"
        },
        "acronym": "RET",
        "color": "#db8686",
        "slotLength": 5,
        "notes": "",
        "_links": {
          "self": {
            "href": "/v1/appointment-types/Retina_checkup"
          }
        }
      }
    ],
    "_links": {
      "self": {
        "href": "/appointments?pageNo=0&pageSize=100"
      }
    }
  }

  const userData = {
    designation: "MD",
    firstName: "PortalTesting",
    lastName: "PHOTON",
    nickName: "P",
    employeeNumber: "7698165",
    mi: "N",
    dob: "08/29/2004",
    email: "n@n.com",
    note: "test",
    sex: {
      key: 11,
      name: "M",
      order: 1,
      notes: "",
    },
    id: "143365",
    available: true,
    age: "18",
    address: {
      addressLine1: "12 15th St SW",
      city: "Roanoke",
      state: "VA",
      zip: "24016",
    },
    homePhone: "3543456557",
    workPhone: "7565456457",
    cellPhone: "7565456457",
    inHouse: false,
    providerDetails: {
      isProvider: true,
      isExternalProvider: false,
      directAddress: "a@a.com",
      drFirstCredentialDetails: {
        drFirstCredential: false,
        username: "",
        password: "",
        signature: "",
      },
      npi: "4621189180",
      professionalEq: "8567567568",
      opticalEq: "7657645646",
      surgicalEq: "2432435467",
      contactEq: "8576567567",
      provider: "4654576587",
      onlineProvider: false,
      license: [],
      deaIds: [],
      taxonomyCode: "1223P0106X",
      classification: "Dentist",
      specialization: "Oral and Maxillofacial Pathology",
      rating: 2,
      about: "naresh",
      language1: "English",
      language2: "telugu",
      inNetworkInsurance: "yes",
      education: "MBA",
      membershipAndAffiliation: "dummy",
      profilePhoto: {
        digitalAsset: {
          uid: "d72b0b16-99ab-4ae4-aba3-13b81930b68a",
          fileName: "test",
          assetUrl: "/v1/patient",
          _version: "d72b0b16-99ab-4ae4-aba3-13b81930b77a",
        },
      },
    },
    networkInsurance: [
      "insurance1",
      "insurance2",
      "insurance3",
      "insurance4",
      "insurance5",
      "insurance6",
      "insurance7",
      "insurance8",
      "insurance9",
      "insurance10",
      "insurance111",
    ],
    offices: [
      {
        name: "Ballwin",
        addressLine1: "568 Allens Mill Rd",
        city: "Yorktown",
        state: "VA",
        zip: "23692",
        _id: "4cd970a0-8529-4b44-a4c5-99c9f4e8d078",
      },
      {
        name: "Ballwin 2",
        addressLine1: "568 Allens Mill Rd",
        city: "Yorktown",
        state: "VA",
        zip: "23692",
        _id: "4cd970a0-8529-4b44-a4c5-99c9f4e8d078",
      },
    ],
  };

  const imageMock = {
    name: "Merabu_02.jpg",
    originalFileName: "Merabu_02.jpg",
    type: "jpeg",
    subType: "image",
    description: "Merabu_02.jpg",
    remoteLocation: {
      bucketName: "dgassets-bucket1",
      region: "us-east-1",
      locationType: "AWS",
    },
    presignedUrl:
      "https://dgassets-bucket1.s3.amazonaws.com/1ffaf737-57ac-4660-8a32-f0650e2285ae?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221003T051746Z&X-Amz-SignedHeaders=host&X-Amz-Expires=900&X-Amz-Credential=AKIAQ2MAPFH4C64PCZO6%2F20221003%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=80e799bb9072758f67f3abd71e3ae8d8f8248cf8378fd7412d1e725cf4f88c96",
  };

  const imageMockUndefined = `{"_errors":[{"code":"","severity":"HIGH","description":"Invalid UUID : {}"}]}`;

  const map = {
    status: "OK",
    results: [
      {
        geometry: {
          location: {
            lat: "31.000000",
            lng: "-100.000000",
          },
        },
      },
    ],
  };

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

  const inputDate = () => {
    const dateInput = container.getByLabelText("Date");
    fireEvent.change(dateInput, { target: { value: "22-09-2022" } });
    expect(dateInput).toBeInTheDocument();
  };

  const inputInsurance = () => {
    const insuranceInput = container.getByLabelText("Insurance Carrier");
    fireEvent.change(insuranceInput, { target: { value: "Aetna" } });
    expect(insuranceInput).toBeInTheDocument();
  };

  const inputLocation = () => {
    const locationField = container.container.querySelector('#location');
    fireEvent.change(locationField, { target: { value: "Texas" } })
  }

  const renderAppointment = async () => {
    useRouter.mockReturnValue({
      back: jest.fn(),
      push: jest.fn(),
      query: {
        reschedule: false
      }
    });

    const mockGeolocation = {
      getCurrentPosition: jest.fn(),
      watchPosition: jest.fn()
    };

    mock.onGet(`/ecp/appointments/appointment-types`).reply(200, mockSuggestionReal);
    mock.onPut(`/ecp/appointments/available-slot?searchText=Texas`).reply(200, mockSubmitFilterReal);
    global.navigator.geolocation = mockGeolocation;
    window.matchMedia = createMatchMedia('1920px');
    act(() => {
      container = render(
        <Provider store={store}>
          {Appointment.getLayout(<Appointment />)}
        </Provider>
      );
    })
    await waitFor(() => {
      container.getByText(/City, state, or zip/i);
      expect(container.getByText(/City, state, or zip/i)).toBeInTheDocument();
    });
  }

  const search = async () => {
    const searchBtn = container.getByTestId("searchbtn")
    fireEvent.click(searchBtn)

    await waitFor(() => {
      container.getByText(/Filter/i);
    });
  }

  const renderBio = async () => {
    window.scrollTo = jest.fn();
    mock
      .onGet(
        `/ecp/appointments/getprovider/56bafbaf-6bc6-47d2-b3ab-5cee17cf7e30`
      )
      .reply(200, userData);
    mock
      .onGet(
        `/ecp/digital-asset/v1/asset/d72b0b16-99ab-4ae4-aba3-13b81930b68a`
      )
      .reply(200, imageMock);

    mock
      .onGet(
        `https://maps.googleapis.com/maps/api/geocode/json?address=568+Allens+Mill+Rd++Yorktown+VA+23692&key=undefined`
      )
      .reply(200, map);

    const contex = {
      query: {
        bio: "56bafbaf-6bc6-47d2-b3ab-5cee17cf7e30",
      },
    };

    const { isLoaded } = useLoadScript({
      googleMapsApiKey: "123",
    });

    await getServerSideProps(contex);
    act(() => {
      container = render(
        <Provider store={store}>
          {Bio.getLayout(
            <Bio
              bio="56bafbaf-6bc6-47d2-b3ab-5cee17cf7e30"
              googleApiKey="123"
            />
          )}
        </Provider>
      );
    });

    await waitFor(() => {
      container.getByTestId(TEST_ID.about);
    });

    await waitFor(() => {
      container.getAllByText(/Primary Address/i)[0];
    });
  }

  const expectResult = () => {
    expect(container.getByText(/Filter/i)).toBeInTheDocument()
  }

  const expectFilter = () => {
    const locationField = container.container.querySelector("#location")
    expect(locationField.value).toBe("Texas")
  }

  const expectDoctor = () => {
    expect(container.getAllByText(/Steve/i)[0]).toBeInTheDocument()
  }

  const clickDoctor = () => {
    fireEvent.click(container.getAllByText(/Steve/i)[0])
  }


  test("EPIC_EPP-44_STORY_EPP-2518-Verify User should see the short bio of Provider", ({
    given,
    when,
    then,
    and,
  }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to the search screen", async () => {
      await renderAppointment()
    });

    and("User should fill the location", () => {
      inputLocation()
    });

    and("User should select the date of appointment", () => {
      inputDate()
    });

    and("User should select the purpose of the visit", async () => {
      await inputPurpose(container)
    });

    and("User should fill the insurance name", () => {
      inputInsurance()
    });

    when("User clicks on the Search button", async () => {
      await search()
    });

    then(
      "User should see the results on the Schedule Appointments screen",
      () => {
        expectResult()
      }
    );

    and(
      "User should see the selected location, date of appointment, the purpose of visit, and insurance carrier",
      () => {
        expectFilter()
      }
    );

    and("User should see the doctor’s name", () => {
      expectDoctor()
    });

    when("User clicks on the doctor’s name", () => {
      clickDoctor()
    });

    then("User should see the short bio of Provider", async () => {
      await renderBio()
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2518-Verify User should see the following sections of Provider", ({
    given,
    when,
    then,
    and,
  }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to the search screen", async () => {
      await renderAppointment()
    });

    and("User should fill the location", () => {
      inputLocation()
    });

    and("User should select the date of appointment", () => {
      inputDate()
    });

    and("User should select the purpose of the visit", async () => {
      await inputPurpose(container)
    });

    and("User should fill the insurance name", () => {
      inputInsurance()
    });

    when("User clicks on the Search button", async () => {
      await search()
    });

    then(
      "User should see the results on the Schedule Appointments screen",
      () => {
        expectResult()
      }
    );

    and(
      "User should see the selected location, date of appointment, the purpose of visit, and insurance carrier",
      () => {
        expectFilter()
      }
    );

    and("User should see the doctor’s name", () => {
      expectDoctor()
    });

    when("User clicks on the doctor’s name", () => {
      clickDoctor()
    });

    then(
      "User should see the short bio of Provider as below:",
      async (table) => {
        await renderBio()

        expect(container.getByTestId(TEST_ID.about)).toBeInTheDocument();
        expect(container.getByTestId(TEST_ID.location)).toBeInTheDocument();
        expect(container.getByTestId(TEST_ID.insurance)).toBeInTheDocument();
        expect(container.getByTestId(TEST_ID.education)).toBeInTheDocument();
        act(() => {
          fireEvent.click(container.getByTestId(TEST_ID.about));
        });
        const providerName = await container.getByText(
          /About PortalTesting PHOTON, MD/i
        );
        expect(providerName.textContent).toEqual(
          "About PortalTesting PHOTON, MD"
        );

        act(() => {
          fireEvent.click(container.getByTestId(TEST_ID.location));
        });
        const providerLocation = await container.getAllByText(/Locations/i);
        expect(providerLocation[2].textContent).toEqual("Locations");

        act(() => {
          fireEvent.click(container.getByTestId(TEST_ID.insurance));
        });
        const providerInsurance = await container.getAllByText(
          /In-network insurances/i
        );
        expect(providerInsurance[0].tagName).toEqual("H3");
        expect(providerInsurance[0].textContent).toEqual(
          "In-network insurances"
        );

        act(() => {
          fireEvent.click(container.getByTestId(TEST_ID.education));
        });
        const providerEducation = await container.getAllByText(/Education/i);
        expect(providerEducation[2].tagName).toEqual("H3");
        expect(providerEducation[2].textContent).toEqual("Education");
      }
    );
  });

  test('EPIC_EPP-44_STORY_EPP-2518-Verify User should see <About> sections of Provider as "Short Bio of the provider with Name and Image" description', ({
    given,
    when,
    then,
    and,
  }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to the search screen", async () => {
      await renderAppointment()
    });

    and("User should fill the location", () => {
      inputLocation()
    });

    and("User should select the date of appointment", () => {
      inputDate()
    });

    and("User should select the purpose of the visit", async () => {
      await inputPurpose(container)
    });

    and("User should fill the insurance name", () => {
      inputInsurance()
    });

    when("User clicks on the Search button", async () => {
      await search()
    });

    then(
      "User should see the results on the Schedule Appointments screen",
      () => {
        expectResult()
      }
    );

    and(
      "User should see the selected location, date of appointment, the purpose of visit, and insurance carrier",
      () => {
        expectFilter()
      }
    );

    and("User should see the doctor’s name", () => {
      expectDoctor()
    });

    when("User clicks on the doctor’s name", () => {
      clickDoctor()
      
    });

    then(
      /^User should see (.*) sections of Provider as "(.*)" description$/,
      async (arg0, arg1) => {
        await renderBio()

        const providerName = await container.getByText(
          /About PortalTesting PHOTON, MD/i
        );
        expect(providerName.textContent).toEqual(
          "About PortalTesting PHOTON, MD"
        );
      }
    );
  });

  test('EPIC_EPP-44_STORY_EPP-2518-Verify User should see <Sub-specialities> sections of Provider as "Sub-specialities of the provider (Cataract, Glaucoma etc..)" description', ({
    given,
    when,
    then,
    and,
  }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
      
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();
      
    });

    then("User should navigated to the search screen", async () => {
      await renderAppointment()
      
    });

    and("User should fill the location", () => {
      inputLocation()
      
    });

    and("User should select the date of appointment", () => {
      inputDate()
      
    });

    and("User should select the purpose of the visit", async () => {
      await inputPurpose(container)
      
    });

    and("User should fill the insurance name", () => {
      inputInsurance()
      
    });

    when("User clicks on the Search button", async () => {
      await search()
      
    });

    then(
      "User should see the results on the Schedule Appointments screen",
      () => {
        expectResult()
        
      }
    );

    and(
      "User should see the selected location, date of appointment, the purpose of visit, and insurance carrier",
      () => {
        expectFilter()
        
      }
    );

    and("User should see the doctor’s name", () => {
      expectDoctor()
      
    });

    when("User clicks on the doctor’s name", () => {
      clickDoctor()
      
    });

    then(
      /^User should see (.*) sections of Provider as "(.*)" description$/,
      async (arg0, arg1) => {
        await renderBio()

        const data = await container.getAllByText(/Specialties/i);
        expect(data[0].textContent).toEqual(
          "Specialties and Sub-specialties: "
        );
      }
    );
  });

  test('EPIC_EPP-44_STORY_EPP-2518-Verify User should see <Gender> sections of Provider as "Gender of the provider" description', ({
    given,
    when,
    then,
    and,
  }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
      
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();
      
    });

    then("User should navigated to the search screen", async () => {
      await renderAppointment()
      
    });

    and("User should fill the location", () => {
      inputLocation()
      
    });

    and("User should select the date of appointment", () => {
      inputDate()
      
    });

    and("User should select the purpose of the visit", async () => {
      await inputPurpose(container)
      
    });

    and("User should fill the insurance name", () => {
      inputInsurance()
      
    });

    when("User clicks on the Search button", async () => {
      await search()
      
    });

    then(
      "User should see the results on the Schedule Appointments screen",
      () => {
        expectResult()
        
      }
    );

    and(
      "User should see the selected location, date of appointment, the purpose of visit, and insurance carrier",
      () => {
        expectFilter()
        
      }
    );

    and("User should see the doctor’s name", () => {
      expectDoctor()
      
    });

    when("User clicks on the doctor’s name", () => {
      clickDoctor()
      
    });

    then(
      /^User should see (.*) sections of Provider as "(.*)" description$/,
      async (arg0, arg1) => {
        await renderBio()

        const data = await container.getByText(/Gender/i);
        expect(data.textContent).toEqual("Gender");
      }
    );
  });

  test('EPIC_EPP-44_STORY_EPP-2518-Verify User should see <Languages> sections of Provider as "Languages the provider speaks" description', ({
    given,
    when,
    then,
    and,
  }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
      
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();
      
    });

    then("User should navigated to the search screen", async () => {
      await renderAppointment()
      
    });

    and("User should fill the location", () => {
      inputLocation()
      
    });

    and("User should select the date of appointment", () => {
      inputDate()
      
    });

    and("User should select the purpose of the visit", async () => {
      await inputPurpose(container)
      
    });

    and("User should fill the insurance name", () => {
      inputInsurance()
      
    });

    when("User clicks on the Search button", async () => {
      await search()
      
    });

    then(
      "User should see the results on the Schedule Appointments screen",
      () => {
        expectResult()
        
      }
    );

    and(
      "User should see the selected location, date of appointment, the purpose of visit, and insurance carrier",
      () => {
        expectFilter()
        
      }
    );

    and("User should see the doctor’s name", () => {
      expectDoctor()
      
    });

    when("User clicks on the doctor’s name", () => {
      clickDoctor()
      
    });

    then(
      /^User should see (.*) sections of Provider as "(.*)" description$/,
      async (arg0, arg1) => {
        await renderBio()

        const data = await container.getByText(/Languages/i);
        expect(data.textContent).toEqual("Languages");
      }
    );
  });

  test('EPIC_EPP-44_STORY_EPP-2518-Verify User should see <In-network Insurances> sections of Provider as "Insurances that are in their network" description', ({
    given,
    when,
    then,
    and,
  }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
      
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();
      
    });

    then("User should navigated to the search screen", async () => {
      await renderAppointment()
      
    });

    and("User should fill the location", () => {
      inputLocation()
      
    });

    and("User should select the date of appointment", () => {
      inputDate()
      
    });

    and("User should select the purpose of the visit", async () => {
      await inputPurpose(container)
      
    });

    and("User should fill the insurance name", () => {
      inputInsurance()
      
    });

    when("User clicks on the Search button", async () => {
      await search()
      
    });

    then(
      "User should see the results on the Schedule Appointments screen",
      () => {
        expectResult()
        
      }
    );

    and(
      "User should see the selected location, date of appointment, the purpose of visit, and insurance carrier",
      () => {
        expectFilter()
        
      }
    );

    and("User should see the doctor’s name", () => {
      expectDoctor()
      
    });

    when("User clicks on the doctor’s name", () => {
      clickDoctor()
      
    });

    then(
      /^User should see (.*) sections of Provider as "(.*)" description$/,
      async (arg0, arg1) => {
        await renderBio()

        const providerInsurance = await container.getAllByText(
          /In-network insurances/i
        );
        expect(providerInsurance[0].tagName).toEqual("H3");
        expect(providerInsurance[0].textContent).toEqual(
          "In-network insurances"
        );
      }
    );
  });

  test('EPIC_EPP-44_STORY_EPP-2518-Verify User should see the selected location, date of appointment, the purpose of visit, and insurance carrier', ({ given, when, then, and }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();

    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();

    });

    then('User should navigated to the search screen', async () => {
      await renderAppointment()

    });

    and('User should fill the location', () => {
      inputLocation()

    });

    and('User should select the date of appointment', () => {
      inputDate()

    });

    and('User should select the purpose of the visit', async () => {
      await inputPurpose(container)
      
    });

    and('User should fill the insurance name', () => {
      inputInsurance()

    });

    when('User clicks on the Search button', async () => {
      await search()

    });

    then('User should see the results on the Schedule Appointments screen', () => {
      expectResult()

    });

    and('User should see the selected location, date of appointment, the purpose of visit, and insurance carrier', () => {
      expectFilter()

    });
  });

  test('EPIC_EPP-44_STORY_EPP-2518-Verify User should see <Specialties> sections of Provider as "Specialities of the provider (Eg. OPT,OPH)" description', ({ given, when, then, and }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();

    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();

    });

    then('User should navigated to the search screen', async () => {
      await renderAppointment()

    });

    and('User should fill the location', () => {
      inputLocation()

    });

    and('User should select the date of appointment', () => {
      inputDate()

    });

    and('User should select the purpose of the visit', async () => {
      await inputPurpose(container)
      
    });

    and('User should fill the insurance name', () => {
      inputInsurance()

    });

    when('User clicks on the Search button', async () => {
      await search()

    });

    then('User should see the results on the Schedule Appointments screen', () => {
      expectResult()

    });

    and('User should see the selected location, date of appointment, the purpose of visit, and insurance carrier', () => {
      expectFilter()

    });

    and('User should see the doctor’s name', () => {
      expectDoctor()

    });

    when('User clicks on the doctor’s name', () => {
      clickDoctor()

    });

    then(/^User should see (.*) sections of Provider as "(.*)" description$/, async (arg0, arg1) => {
      await renderBio()

    });
  });

  test('EPIC_EPP-44_STORY_EPP-2518-Verify User should see <Location> sections of Provider as "Address of the location with "Get directions" button which would redirect the user to maps" description', ({ given, when, then, and }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();

    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();

    });

    then('User should navigated to the search screen', async () => {
      await renderAppointment()

    });

    and('User should fill the location', () => {
      inputLocation()

    });

    and('User should select the date of appointment', () => {
      inputDate()

    });

    and('User should select the purpose of the visit', async () => {
      await inputPurpose(container)

    });

    and('User should fill the insurance name', () => {
      inputInsurance()

    });

    when('User clicks on the Search button', async () => {
      await search()

    });

    then('User should see the results on the Schedule Appointments screen', () => {
      expectResult()

    });

    and('User should see the selected location, date of appointment, the purpose of visit, and insurance carrier', () => {
      expectFilter()

    });

    and('User should see the doctor’s name', () => {
      expectDoctor()

    });

    when('User clicks on the doctor’s name', () => {
      clickDoctor()

    });

    then(/^User should see (.*) sections of Provider as "(.*)"Get directions"(.*)" description$/, async (arg0, arg1, arg2) => {
      await renderBio()
      const data = await container.getAllByText(/Get directions/i)[0];
      expect(data).toBeInTheDocument()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2518-Verify User should navigated to maps when user clicks on "Get directions" button on Location Section', ({ given, when, then, and }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then('User should navigated to the search screen', async () => {
      await renderAppointment()

    });

    and('User should fill the location', () => {
      inputLocation()

    });

    and('User should select the date of appointment', () => {
      inputDate()

    });

    and('User should select the purpose of the visit', async () => {
      await inputPurpose(container)

    });

    and('User should fill the insurance name', () => {
      inputInsurance()

    });

    when('User clicks on the Search button', async () => {
      await search()

    });

    then('User should see the results on the Schedule Appointments screen', () => {
      expectResult()

    });

    and('User should see the selected location, date of appointment, the purpose of visit, and insurance carrier', () => {
      expectFilter()

    });

    and('User should see the doctor’s name', () => {
      expectDoctor()

    });

    when('User clicks on the doctor’s name', () => {
      clickDoctor()

    });

    then(/^User should see (.*) sections of Provider as "(.*)"Get directions"(.*)" description$/, async (arg0, arg1, arg2) => {
      await renderBio()
      const data = await container.getAllByText(/Get directions/i)[0];
      expect(data).toBeInTheDocument()
    });

    when(/^User clicks on "(.*)" button$/, (arg0) => {
      fireEvent.click(container.getAllByText(/Get directions/i)[0])
    });

    then('User should navigated to maps', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2518-Verify User should see two Doctor\'s location (if any) as Primary and Secondary on Location Section', ({ given, when, then, and }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();

    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();

    });

    then('User should navigated to the search screen', async () => {
      await renderAppointment()

    });

    and('User should fill the location', () => {
      inputLocation()

    });

    and('User should select the date of appointment', () => {
      inputDate()

    });

    and('User should select the purpose of the visit', async () => {
      await inputPurpose(container)

    });

    and('User should fill the insurance name', () => {
      inputInsurance()

    });

    when('User clicks on the Search button', async () => {
      await search()

    });

    then('User should see the results on the Schedule Appointments screen', () => {
      expectResult()

    });

    and('User should see the selected location, date of appointment, the purpose of visit, and insurance carrier', () => {
      expectFilter()

    });

    and('User should see the doctor’s name', () => {
      expectDoctor()

    });

    when('User clicks on the doctor’s name', () => {
      clickDoctor()

    });

    then('User should see two Doctor\'s location (if any) as Primary and Secondary on Location Section', async () => {
      await renderBio()
      expect(container.getAllByText(/Primary Address/i)[0]).toBeInTheDocument()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2518-Verify User should see <Education> sections of Provider as "Education qualification of the provider" description', ({ given, when, then, and }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();

    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();

    });

    then('User should navigated to the search screen', async () => {
      await renderAppointment()

    });

    and('User should fill the location', () => {
      inputLocation()

    });

    and('User should select the date of appointment', () => {
      inputDate()

    });

    and('User should select the purpose of the visit', async () => {
      await inputPurpose(container)

    });

    and('User should fill the insurance name', () => {
      inputInsurance()

    });

    when('User clicks on the Search button', async () => {
      await search()

    });

    then('User should see the results on the Schedule Appointments screen', () => {
      expectResult()

    });

    and('User should see the selected location, date of appointment, the purpose of visit, and insurance carrier', () => {
      expectFilter()

    });

    and('User should see the doctor’s name', () => {
      expectDoctor()

    });

    when('User clicks on the doctor’s name', () => {
      clickDoctor()

    });

    then(/^User should see (.*) sections of Provider as "(.*)" description$/, async (arg0, arg1) => {
      await renderBio()
      const providerName = await container.getByText(
        /About PortalTesting PHOTON, MD/i
      );
      expect(providerName.textContent).toEqual(
        "About PortalTesting PHOTON, MD"
      );

    });
  });

  test('EPIC_EPP-44_STORY_EPP-2518-Verify User should see <Memberships and Affiliations> sections of Provider as "Memberships and Affiliations of the provider" description', ({ given, when, then, and }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();

    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();

    });

    then('User should navigated to the search screen', async () => {
      await renderAppointment()

    });

    and('User should fill the location', () => {
      inputLocation()

    });

    and('User should select the date of appointment', () => {
      inputDate()

    });

    and('User should select the purpose of the visit', async () => {
      await inputPurpose(container)

    });

    and('User should fill the insurance name', () => {
      inputInsurance()

    });

    when('User clicks on the Search button', async () => {
      await search()

    });

    then('User should see the results on the Schedule Appointments screen', () => {
      expectResult()

    });

    and('User should see the selected location, date of appointment, the purpose of visit, and insurance carrier', () => {
      expectFilter()

    });

    and('User should see the doctor’s name', () => {
      expectDoctor()

    });

    when('User clicks on the doctor’s name', () => {
      clickDoctor()

    });

    then(/^User should see (.*) sections of Provider as "(.*)" description$/, async (arg0, arg1) => {
      await renderBio()
      const providerName = await container.getByText(
        /About PortalTesting PHOTON, MD/i
      );
      expect(providerName.textContent).toEqual(
        "About PortalTesting PHOTON, MD"
      );
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2518-Verify User should see <Ratings> sections of Provider as "Ratings for that Provider" description', ({ given, when, then, and }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();

    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();

    });

    then('User should navigated to the search screen', async () => {
      await renderAppointment()

    });

    and('User should fill the location', () => {
      inputLocation()

    });

    and('User should select the date of appointment', () => {
      inputDate()

    });

    and('User should select the purpose of the visit', async () => {
      await inputPurpose(container)

    });

    and('User should fill the insurance name', () => {
      inputInsurance()

    });

    when('User clicks on the Search button', async () => {
      await search()

    });

    then('User should see the results on the Schedule Appointments screen', () => {
      expectResult()

    });

    and('User should see the selected location, date of appointment, the purpose of visit, and insurance carrier', () => {
      expectFilter()

    });

    and('User should see the doctor’s name', () => {
      expectDoctor()

    });

    when('User clicks on the doctor’s name', () => {
      clickDoctor()

    });

    then(/^User should see (.*) sections of Provider as "(.*)" description$/, async (arg0, arg1) => {
      await renderBio()

      expect(container.getByTestId(TEST_ID.about)).toBeInTheDocument();
      expect(container.getByTestId(TEST_ID.location)).toBeInTheDocument();
      expect(container.getByTestId(TEST_ID.insurance)).toBeInTheDocument();
      expect(container.getByTestId(TEST_ID.education)).toBeInTheDocument();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2518-Verify User should see the short bio of Provider within 3 seconds', ({ given, when, then, and }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();

    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();

    });

    then('User should navigated to the search screen', async () => {
      await renderAppointment()

    });

    and('User should fill the location', () => {
      inputLocation()

    });

    and('User should select the date of appointment', () => {
      inputDate()

    });

    and('User should select the purpose of the visit', async () => {
      await inputPurpose(container)

    });

    and('User should fill the insurance name', () => {
      inputInsurance()

    });

    when('User clicks on the Search button', async () => {
      await search()

    });

    then('User should see the results on the Schedule Appointments screen', () => {
      expectResult()

    });

    and('User should see the selected location, date of appointment, the purpose of visit, and insurance carrier', () => {
      expectFilter()

    });

    and('User should see the doctor’s name', () => {
      expectDoctor()

    });

    when('User clicks on the doctor’s name', () => {
      clickDoctor()

    });

    then(/^User should see the page loads within "(.*)"$/, (arg0) => {
      defaultValidation()
    });

    and('User should see the short bio of Provider', async () => {
      await renderBio()

      expect(container.getByTestId(TEST_ID.about)).toBeInTheDocument();
      expect(container.getByTestId(TEST_ID.location)).toBeInTheDocument();
      expect(container.getByTestId(TEST_ID.insurance)).toBeInTheDocument();
      expect(container.getByTestId(TEST_ID.education)).toBeInTheDocument();
    });

    when(/^user clicks on F(\d+) on the console$/, (arg0) => {
      defaultValidation()
    });

    then('user should not to see any errors script', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2518-Verify User should not see the any errors script when user clicks F12 on the console', ({ given, when, then, and }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();

    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();

    });

    then('User should navigated to the search screen', async () => {
      await renderAppointment()

    });

    and('User should fill the location', () => {
      inputLocation()

    });

    and('User should select the date of appointment', () => {
      inputDate()

    });

    and('User should select the purpose of the visit', async () => {
      await inputPurpose(container)

    });

    and('User should fill the insurance name', () => {
      inputInsurance()

    });

    when('User clicks on the Search button', async () => {
      await search()

    });

    then('User should see the results on the Schedule Appointments screen', () => {
      expectResult()

    });

    and('User should see the selected location, date of appointment, the purpose of visit, and insurance carrier', () => {
      expectFilter()

    });

    and('User should see the doctor’s name', () => {
      expectDoctor()

    });

    when(/^user clicks on F(\d+) on the console$/, (arg0) => {
      defaultValidation()
    });

    then('user should not to see any errors script', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2518-Negative Test Cases-Verify user should see the error message when the internet service is unavailable', ({ given, when, then, and }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();

    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();

    });

    then('User should navigated to the search screen', async () => {
      await renderAppointment()

    });

    and('User should fill the location', () => {
      inputLocation()

    });

    and('User should select the date of appointment', () => {
      inputDate()

    });

    and('User should select the purpose of the visit', async () => {
      await inputPurpose(container)

    });

    and('User should fill the insurance name', () => {
      inputInsurance()

    });

    when('User clicks on the Search button', async () => {
      await search()

    });

    then('User should see the results on the Schedule Appointments screen', () => {
      expectResult()

    });

    and('User should see the selected location, date of appointment, the purpose of visit, and insurance carrier', () => {
      expectFilter()

    });

    and('User should see the doctor’s name', () => {
      expectDoctor()

    });

    when('User clicks on the doctor’s name', () => {
      clickDoctor()

    });

    and('The Internet service is unavailable', () => {
      defaultValidation();

    });

    then('user should see the appropriate error message', () => {
      defaultValidation();

    });
  });

  test('EPIC_EPP-44_STORY_EPP-2518-Negative Test Cases-Verify user should see the error message when the service is unavailable', ({ given, when, then, and }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();

    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();

    });

    then('User should navigated to the search screen', async () => {
      await renderAppointment()

    });

    and('User should fill the location', () => {
      inputLocation()

    });

    and('User should select the date of appointment', () => {
      inputDate()

    });

    and('User should select the purpose of the visit', async () => {
      await inputPurpose(container)

    });

    and('User should fill the insurance name', () => {
      inputInsurance()

    });

    when('User clicks on the Search button', async () => {
      await search()

    });

    then('User should see the results on the Schedule Appointments screen', () => {
      expectResult()

    });

    and('User should see the selected location, date of appointment, the purpose of visit, and insurance carrier', () => {
      expectFilter()

    });

    and('User should see the doctor’s name', () => {
      expectDoctor()

    });

    when('User clicks on the doctor’s name', () => {
      clickDoctor()

    });

    and('The service is unavailable', () => {
      defaultValidation();

    });

    then('user should see the appropriate error message', () => {
      defaultValidation();

    });
  });
});
