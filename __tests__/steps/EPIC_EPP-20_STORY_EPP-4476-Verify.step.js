import App from "../../src/pages/_app";
import Bio, { getServerSideProps } from "../../src/pages/patient/bio/[bio]";
import MyCareTeamPage from "../../src/pages/patient/my-care-team";
import "@testing-library/jest-dom";
import { act, fireEvent, render, waitFor } from "@testing-library/react";
import store from "../../src/store/store";
import { Provider } from "react-redux";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import constants from "../../src/utils/constants";
import { Marker, useLoadScript } from "@react-google-maps/api";
import {
    mockAppointmentTypes,
    mockInsurance,
    submitFilter,
} from "../../__mocks__/mockResponse";
import { defineFeature, loadFeature } from "jest-cucumber";
import { defaultValidation, doLogin, renderLogin, renderResultsScreen } from "../../__mocks__/commonSteps";

const useRouter = jest.spyOn(require("next/router"), "useRouter");

jest.mock("@react-google-maps/api", () => ({
    useLoadScript: () => ({
        isLoaded: true,
        loadError: null,
    }),
    GoogleMap: () => <div></div>,
    Marker: () => <Marker />,
}));

const feature = loadFeature(
    "./__tests__/feature/Patient Portal/Sprint7/EPP-4476.feature"
);

defineFeature(feature, (test) => {
    let container;
    const mock = new MockAdapter(axios);
    const TEST_ID = constants.TEST_ID.BIOGRAPHY_TEST_ID;
    const TEST_ID_RAW = constants.TEST_ID;
    const userData = {
        designation: "MBBS, MD",
        firstName: "Jaco",
        lastName: "David",
        nickName: "Jaco",
        employeeNumber: "755708",
        mi: "Jaco",
        dob: "02/07/1971",
        email: "eyecare@gmail.com",
        sex: {
            key: 7,
            name: "M",
            order: 1,
            notes: "",
        },
        available: true,
        note: "Test",
        age: "51",
        address: {
            addressLine1: "568 Allens Mill Rd",
            city: "Yorktown",
            state: "VA",
            zip: "23692",
        },
        homePhone: "4981261115",
        cellPhone: "2812942993",
        workPhone: "2812942993",
        inHouse: false,
        providerDetails: {
            isProvider: true,
            isExternalProvider: false,
            materialRate: "0",
            drFirstCredentialDetails: {
                drFirstCredential: false,
                username: "",
                password: "",
                signature: "",
            },
            npi: "1134296023",
            professionalEq: "1234",
            opticalEq: "12",
            surgicalEq: "344",
            contactEq: "12346",
            provider: "",
            onlineProvider: true,
            license: [],
            deaIds: [],
            taxonomyCode: "207ND0101X",
            classification: "Dermatology",
            specialization: "MOHS-Micrographic Surgery",
            rating: 9,
            language1: "Arabic",
            language2: "Chinese",
            language3: "German",
            profilePhoto: {
                digitalAsset: {
                    uid: "1ffaf737-57ac-4660-8a32-f0650e2285ae",
                    fileName: "test",
                    assetUrl: "/v1/patient",
                    _version: "d72b0b16-99ab-4ae4-aba3-13b81930b77a",
                },
            },
        },
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
        status: "UPDATED",
        managerialAdjustments: false,
        overrideExpiredPromo: false,
        sources: [],
        _links: {
            self: {
                href: "/v1/employees/b579b0d1-0c93-4db4-8ca8-294a60e718e4",
            },
        },
        _id: "b579b0d1-0c93-4db4-8ca8-294a60e718e4",
    };

    const imageMock = {
        "name": "Merabu_02.jpg",
        "originalFileName": "Merabu_02.jpg",
        "type": "jpeg",
        "subType": "image",
        "description": "Merabu_02.jpg",
        "remoteLocation": {
            "bucketName": "dgassets-bucket1",
            "region": "us-east-1",
            "locationType": "AWS"
        },
        "presignedUrl": "https://dgassets-bucket1.s3.amazonaws.com/1ffaf737-57ac-4660-8a32-f0650e2285ae?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221003T051746Z&X-Amz-SignedHeaders=host&X-Amz-Expires=900&X-Amz-Credential=AKIAQ2MAPFH4C64PCZO6%2F20221003%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=80e799bb9072758f67f3abd71e3ae8d8f8248cf8378fd7412d1e725cf4f88c96",
    }

    const map = {
        status: "OK",
        results: [{
            geometry: {
                location: {
                    lat: "31.000000",
                    lng: "-100.000000"
                }
            }
        }]
    }

    const providerListMock = [userData]

    const renderList = async () => {
        //TODO: Remove
        const domain = window.location.origin;
        const url = `${domain}/api/dummy/appointment/biography/getProviderList?patientId=98f9404b-6ea8-4732-b14f-9c1a168d8066`;

        mock
            .onGet(
                url
            )
            .reply(200, {
                results: providerListMock
            });

        mock
            .onGet(
                `/ecp/appointments/getproviderlist/`
            )
            .reply(200, {
                results: providerListMock
            });

        act(() => {
            container = render(
                <Provider store={store}>{MyCareTeamPage.getLayout(<MyCareTeamPage />)}</Provider>
            );
        });

        await waitFor(() => {
            container.getAllByText(/View Profile/i);
        });

        return container;
    }

    const renderDetail = async () => {
        mock
            .onGet(
                `/ecp/appointments/getprovider/56bafbaf-6bc6-47d2-b3ab-5cee17cf7e30`
            )
            .reply(200, userData);

        mock
            .onGet(
                `https://maps.googleapis.com/maps/api/geocode/json?address=568+Allens+Mill+Rd++Yorktown+VA+23692&key=undefined`
            )
            .reply(200, map);

        const contex = {
            query: {
                bio: "56bafbaf-6bc6-47d2-b3ab-5cee17cf7e30"
            }
        }

        const { isLoaded } = useLoadScript({
            googleMapsApiKey: "123"
        });


        await getServerSideProps(contex);
        act(() => {
            container = render(
                <Provider store={store}>{Bio.getLayout(<Bio bio="56bafbaf-6bc6-47d2-b3ab-5cee17cf7e30" googleApiKey="123" />)}</Provider>
            );
        });

        await waitFor(() => {
            container.getByTestId(TEST_ID.about);
        });

        await waitFor(() => {
            container.getByText(/Primary Address/i);
        });

        return container

    }

    beforeEach(async () => {
        useRouter.mockReturnValue({
            back: jest.fn(),
            push: jest.fn()
        });
        window.scrollTo = jest.fn();

        mock
            .onGet(
                `/ecp/digital-asset/v1/asset/1ffaf737-57ac-4660-8a32-f0650e2285ae`
            )
            .reply(200, imageMock);

        mock
            .onGet("/ecp/appointments/appointment-types", mockAppointmentTypes)
            .reply(200, mockAppointmentTypes);
        mock
            .onGet("/ecp/appointments/insurance/allpayers", mockInsurance)
            .reply(200, mockInsurance);
        mock
            .onPut("/ecp/appointments/available-slot?searchText=Yorktown")
            .reply(200, submitFilter);
    });

    afterAll(() => {
        mock.reset();
    });

    test('EPIC_EPP-20_STORY_EPP-4476 - Verify User should be able to view the list of doctors/ optometrist they have consulted with the following details', ({ given, when, then, and }) => {
        given('User launch Patient Portal url', () => {
            defaultValidation()
        });

        when('User is logged in to the application', async () => {
            container = await renderLogin()
        });

        then(/^User lands to the "(.*)" screen$/, (arg0) => {
            defaultValidation()
        });

        and(/^User should see "(.*)"  menu$/, (arg0) => {
            defaultValidation()
        });

        when(/^User selects the "(.*)" menu$/, (arg0) => {
            defaultValidation()
        });

        then('User should be navigated to the screen to view their care team i.e. Doctors/ Optometrists', async () => {
            container = await renderList()
            expect(container.getByText(/My Care Team/i)).toBeInTheDocument();
        });

        and('User should be see the list of doctors/ optometrist they have consulted with the following details', async (table) => {
            container = await renderList()
            expect(container.getAllByAltText(/Doctor Image/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/Jaco David/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/Ballwin/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/568 Allens Mill Rd/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/Specialties/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/Phone/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/Email/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/View Profile/i).length > 0).toBeTruthy();
            expect(container.getAllByTestId("schedule-btn").length > 0).toBeTruthy();
        });
    });

    test('EPIC_EPP-20_STORY_EPP-4476 - Verify User clicks on any of the doctor/ optometrist listed to view their bio', ({ given, when, then, and }) => {
        given('User launch Patient Portal url', () => {
            defaultValidation()
        });

        when('User is logged in to the application', async () => {
            container = await renderLogin()
        });

        then(/^User lands to the "(.*)" screen$/, (arg0) => {
            defaultValidation()
        });

        and(/^User should see "(.*)"  menu$/, (arg0) => {
            defaultValidation()
        });

        when(/^User selects the "(.*)" menu$/, (arg0) => {
            defaultValidation()
        });

        then('User should be navigated to the screen to view their care team i.e. Doctors/ Optometrists', async () => {
            container = await renderList()
            expect(container.getByText(/My Care Team/i)).toBeInTheDocument();
        });

        and('User should be see the list of doctors/ optometrist they have consulted with the following details', async (table) => {
            container = await renderList()
            expect(container.getAllByAltText(/Doctor Image/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/Jaco David/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/Ballwin/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/568 Allens Mill Rd/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/Specialties/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/Phone/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/Email/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/View Profile/i).length > 0).toBeTruthy();
            expect(container.getAllByTestId("schedule-btn").length > 0).toBeTruthy();
        });

        when('User clicks on any of the doctor/ optometrist listed there', async () => {
            container = await renderList()
            expect(container.getAllByText(/View Profile/i)[0]).toBeInTheDocument();
            fireEvent.click(container.getAllByText(/View Profile/i)[0]);
        });

        then('User should be able to view the following fields below:', async (table) => {
            container = await renderDetail()
            expect(container.getByText(/About Jaco/i)).toBeInTheDocument()
            expect(container.getByTestId(TEST_ID_RAW.APPOINTMENT_TEST_ID.PROVIDER_PROFILE.image)).toBeInTheDocument()
            expect(container.getAllByText(/568 Allens Mill Rd/i).length > 0).toBeTruthy()
            expect(container.getByText(/Specialties and Sub-specialties:/i)).toBeInTheDocument()
            expect(container.getByLabelText(/Doctor Rating/i)).toBeInTheDocument()
            expect(container.getByText(/Gender/i)).toBeInTheDocument()
            expect(container.getByText(/Primary Address/i)).toBeInTheDocument()
            expect(container.getByText(/Languages/i)).toBeInTheDocument()
            expect(container.getAllByText(/In-network insurances/i)[0]).toBeInTheDocument()
            expect(container.getAllByText(/Education/i)[1]).toBeInTheDocument()
            expect(container.getByText(/Memberships and Afilliations/i)).toBeInTheDocument()
        });
    });

    test('EPIC_EPP-20_STORY_EPP-4476 - Verify User clicks on the option to schedule appointment from the doctor/ optometrist bio screen', ({ given, when, then, and }) => {
        given('User launch Patient Portal url', () => {
            defaultValidation()
        });

        when('User is logged in to the application', async () => {
            container = await renderLogin()
        });

        then(/^User lands to the "(.*)" screen$/, (arg0) => {
            defaultValidation()
        });

        and(/^User should see "(.*)"  menu$/, (arg0) => {
            defaultValidation()
        });

        when(/^User selects the "(.*)" menu$/, (arg0) => {
            defaultValidation()
        });

        then('User should be navigated to the screen to view their care team i.e. Doctors/ Optometrists', async () => {
            container = await renderList()
            expect(container.getByText(/My Care Team/i)).toBeInTheDocument();
        });

        and('User should be see the list of doctors/ optometrist they have consulted with the following details', async (table) => {
            container = await renderList()
            expect(container.getAllByAltText(/Doctor Image/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/Jaco David/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/Ballwin/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/568 Allens Mill Rd/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/Specialties/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/Phone/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/Email/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/View Profile/i).length > 0).toBeTruthy();
            expect(container.getAllByTestId("schedule-btn").length > 0).toBeTruthy();
        });

        when('User clicks on any of the doctor/ optometrist listed there', async () => {
            container = await renderList()
            expect(container.getAllByText(/View Profile/i)[0]).toBeInTheDocument();
            fireEvent.click(container.getAllByText(/View Profile/i)[0]);
        });

        then('User should be able to view the following fields below:', async (table) => {
            container = await renderDetail()
            expect(container.getByText(/About Jaco/i)).toBeInTheDocument()
            expect(container.getByTestId(TEST_ID_RAW.APPOINTMENT_TEST_ID.PROVIDER_PROFILE.image)).toBeInTheDocument()
            expect(container.getAllByText(/568 Allens Mill Rd/i).length > 0).toBeTruthy()
            expect(container.getByText(/Specialties and Sub-specialties:/i)).toBeInTheDocument()
            expect(container.getByLabelText(/Doctor Rating/i)).toBeInTheDocument()
            expect(container.getByText(/Gender/i)).toBeInTheDocument()
            expect(container.getByText(/Primary Address/i)).toBeInTheDocument()
            expect(container.getByText(/Languages/i)).toBeInTheDocument()
            expect(container.getAllByText(/In-network insurances/i)[0]).toBeInTheDocument()
            expect(container.getAllByText(/Education/i)[1]).toBeInTheDocument()
            expect(container.getByText(/Memberships and Afilliations/i)).toBeInTheDocument()
        });

        when('User clicks on the option to schedule appointment from the doctor/ optometrist bio screen', async() => {
            container = await renderDetail();
            expect(container.getAllByTestId("schedule-btn")[1]).toBeInTheDocument();
            fireEvent.click(container.getAllByTestId("schedule-btn")[1]);
        });

        then('User should be redirected to schedule appointment screen', () => {
            renderResultsScreen();
        });
    });

    test('EPIC_EPP-20_STORY_EPP-4476 - Verify User should be redirected to schedule appointment screen with location of the provider pre-filled as user’s searched location', ({ given, when, then, and }) => {
        given('User launch Patient Portal url', () => {
            defaultValidation()
        });

        when('User is logged in to the application', async () => {
            container = await renderLogin()
        });

        then(/^User lands to the "(.*)" screen$/, (arg0) => {
            defaultValidation()
        });

        and(/^User should see "(.*)"  menu$/, (arg0) => {
            defaultValidation()
        });

        when(/^User selects the "(.*)" menu$/, (arg0) => {
            defaultValidation()
        });

        then('User should be navigated to the screen to view their care team i.e. Doctors/ Optometrists', async () => {
            container = await renderList()
            expect(container.getByText(/My Care Team/i)).toBeInTheDocument();
        });

        and('User should be see the list of doctors/ optometrist they have consulted with the following details', async (table) => {
            container = await renderList()
            expect(container.getAllByAltText(/Doctor Image/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/Jaco David/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/Ballwin/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/568 Allens Mill Rd/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/Specialties/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/Phone/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/Email/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/View Profile/i).length > 0).toBeTruthy();
            expect(container.getAllByTestId("schedule-btn").length > 0).toBeTruthy();
        });

        when('User clicks on any of the doctor/ optometrist listed there', async () => {
            container = await renderList()
            expect(container.getAllByText(/View Profile/i)[0]).toBeInTheDocument();
            fireEvent.click(container.getAllByText(/View Profile/i)[0]);
        });

        then('User should be able to view the following fields below:', async (table) => {
            container = await renderDetail()
            expect(container.getByText(/About Jaco/i)).toBeInTheDocument()
            expect(container.getByTestId(TEST_ID_RAW.APPOINTMENT_TEST_ID.PROVIDER_PROFILE.image)).toBeInTheDocument()
            expect(container.getAllByText(/568 Allens Mill Rd/i).length > 0).toBeTruthy()
            expect(container.getByText(/Specialties and Sub-specialties:/i)).toBeInTheDocument()
            expect(container.getByLabelText(/Doctor Rating/i)).toBeInTheDocument()
            expect(container.getByText(/Gender/i)).toBeInTheDocument()
            expect(container.getByText(/Primary Address/i)).toBeInTheDocument()
            expect(container.getByText(/Languages/i)).toBeInTheDocument()
            expect(container.getAllByText(/In-network insurances/i)[0]).toBeInTheDocument()
            expect(container.getAllByText(/Education/i)[1]).toBeInTheDocument()
            expect(container.getByText(/Memberships and Afilliations/i)).toBeInTheDocument()
        });

        when('User clicks on the option to schedule appointment from the doctor/ optometrist bio screen', async() => {
            container = await renderDetail();
            expect(container.getAllByTestId("schedule-btn")[1]).toBeInTheDocument();
            fireEvent.click(container.getAllByTestId("schedule-btn")[1]);
        });

        then('User should be redirected to schedule appointment screen with location of the provider pre-filled as user’s searched location', () => {
            renderResultsScreen();
        });
    });

    test('EPIC_EPP-20_STORY_EPP-4476 - Verify User should be able to view today’s date as the date searched', ({ given, when, then, and }) => {
        given('User launch Patient Portal url', () => {
            defaultValidation()
        });

        when('User is logged in to the application', async () => {
            container = await renderLogin()
        });

        then(/^User lands to the "(.*)" screen$/, (arg0) => {
            defaultValidation()
        });

        and(/^User should see "(.*)"  menu$/, (arg0) => {
            defaultValidation()
        });

        when(/^User selects the "(.*)" menu$/, (arg0) => {
            defaultValidation()
        });

        then('User should be navigated to the screen to view their care team i.e. Doctors/ Optometrists', async () => {
            container = await renderList()
            expect(container.getByText(/My Care Team/i)).toBeInTheDocument();
        });

        and('User should be see the list of doctors/ optometrist they have consulted with the following details', async (table) => {
            container = await renderList()
            expect(container.getAllByAltText(/Doctor Image/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/Jaco David/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/Ballwin/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/568 Allens Mill Rd/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/Specialties/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/Phone/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/Email/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/View Profile/i).length > 0).toBeTruthy();
            expect(container.getAllByTestId("schedule-btn").length > 0).toBeTruthy();
        });

        when('User clicks on any of the doctor/ optometrist listed there', async () => {
            container = await renderList()
            expect(container.getAllByText(/View Profile/i)[0]).toBeInTheDocument();
            fireEvent.click(container.getAllByText(/View Profile/i)[0]);
        });

        then('User should be able to view the following fields below:', async (table) => {
            container = await renderDetail()
            expect(container.getByText(/About Jaco/i)).toBeInTheDocument()
            expect(container.getByTestId(TEST_ID_RAW.APPOINTMENT_TEST_ID.PROVIDER_PROFILE.image)).toBeInTheDocument()
            expect(container.getAllByText(/568 Allens Mill Rd/i).length > 0).toBeTruthy()
            expect(container.getByText(/Specialties and Sub-specialties:/i)).toBeInTheDocument()
            expect(container.getByLabelText(/Doctor Rating/i)).toBeInTheDocument()
            expect(container.getByText(/Gender/i)).toBeInTheDocument()
            expect(container.getByText(/Primary Address/i)).toBeInTheDocument()
            expect(container.getByText(/Languages/i)).toBeInTheDocument()
            expect(container.getAllByText(/In-network insurances/i)[0]).toBeInTheDocument()
            expect(container.getAllByText(/Education/i)[1]).toBeInTheDocument()
            expect(container.getByText(/Memberships and Afilliations/i)).toBeInTheDocument()
        });

        when('User clicks on the option to schedule appointment from the doctor/ optometrist bio screen', async() => {
            container = await renderDetail();
            expect(container.getAllByTestId("schedule-btn")[1]).toBeInTheDocument();
            fireEvent.click(container.getAllByTestId("schedule-btn")[1]);
        });

        then('User should be redirected to schedule appointment screen with location of the provider pre-filled as user’s searched location', () => {
            renderResultsScreen();
        });

        and('User should be able to view today’s date as the date searched', () => {
            defaultValidation()
        });
    });

    test('EPIC_EPP-20_STORY_EPP-4476 - Verify User should be able to view the list of providers', ({ given, when, then, and }) => {
        given('User launch Patient Portal url', () => {
            defaultValidation()
        });

        when('User is logged in to the application', async () => {
            container = await renderLogin()
        });

        then(/^User lands to the "(.*)" screen$/, (arg0) => {
            defaultValidation()
        });

        and(/^User should see "(.*)"  menu$/, (arg0) => {
            defaultValidation()
        });

        when(/^User selects the "(.*)" menu$/, (arg0) => {
            defaultValidation()
        });

        then('User should be navigated to the screen to view their care team i.e. Doctors/ Optometrists', async () => {
            container = await renderList()
            expect(container.getByText(/My Care Team/i)).toBeInTheDocument();
        });

        and('User should be see the list of doctors/ optometrist they have consulted with the following details', async (table) => {
            container = await renderList()
            expect(container.getAllByAltText(/Doctor Image/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/Jaco David/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/Ballwin/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/568 Allens Mill Rd/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/Specialties/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/Phone/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/Email/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/View Profile/i).length > 0).toBeTruthy();
            expect(container.getAllByTestId("schedule-btn").length > 0).toBeTruthy();
        });

        when('User clicks on any of the doctor/ optometrist listed there', async () => {
            container = await renderList()
            expect(container.getAllByText(/View Profile/i)[0]).toBeInTheDocument();
            fireEvent.click(container.getAllByText(/View Profile/i)[0]);
        });

        then('User should be able to view the following fields below:', async (table) => {
            container = await renderDetail()
            expect(container.getByText(/About Jaco/i)).toBeInTheDocument()
            expect(container.getByTestId(TEST_ID_RAW.APPOINTMENT_TEST_ID.PROVIDER_PROFILE.image)).toBeInTheDocument()
            expect(container.getAllByText(/568 Allens Mill Rd/i).length > 0).toBeTruthy()
            expect(container.getByText(/Specialties and Sub-specialties:/i)).toBeInTheDocument()
            expect(container.getByLabelText(/Doctor Rating/i)).toBeInTheDocument()
            expect(container.getByText(/Gender/i)).toBeInTheDocument()
            expect(container.getByText(/Primary Address/i)).toBeInTheDocument()
            expect(container.getByText(/Languages/i)).toBeInTheDocument()
            expect(container.getAllByText(/In-network insurances/i)[0]).toBeInTheDocument()
            expect(container.getAllByText(/Education/i)[1]).toBeInTheDocument()
            expect(container.getByText(/Memberships and Afilliations/i)).toBeInTheDocument()
        });

        when('User clicks on the option to schedule appointment from the doctor/ optometrist bio screen', async() => {
            container = await renderDetail();
            expect(container.getAllByTestId("schedule-btn")[1]).toBeInTheDocument();
            fireEvent.click(container.getAllByTestId("schedule-btn")[1]);
        });

        then('User should be redirected to schedule appointment screen with location of the provider pre-filled as user’s searched location', () => {
            renderResultsScreen();
        });

        and('User should be able to view today’s date as the date searched', () => {
            defaultValidation()
        });

        when('The provider from whose bio user got redirected to schedule appointment  at top', () => {
            defaultValidation()
        });

        then('User should be able to view the list of providers on the results in schedule appointment screen', () => {
            defaultValidation()
        });
    });

    test('EPIC_EPP-20_STORY_EPP-4476 - Verify User should be able to go through the process of scheduling the appointment from patient portal with that provider', ({ given, when, then, and }) => {
        given('User launch Patient Portal url', () => {
            defaultValidation()
        });

        when('User is logged in to the application', async () => {
            container = await renderLogin()
        });

        then(/^User lands to the "(.*)" screen$/, (arg0) => {
            defaultValidation()
        });

        and(/^User should see "(.*)"  menu$/, (arg0) => {
            defaultValidation()
        });

        when(/^User selects the "(.*)" menu$/, (arg0) => {
            defaultValidation()
        });

        then('User should be navigated to the screen to view their care team i.e. Doctors/ Optometrists', async () => {
            container = await renderList()
            expect(container.getByText(/My Care Team/i)).toBeInTheDocument();
        });

        and('User should be see the list of doctors/ optometrist they have consulted with the following details', async (table) => {
            container = await renderList()
            expect(container.getAllByAltText(/Doctor Image/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/Jaco David/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/Ballwin/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/568 Allens Mill Rd/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/Specialties/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/Phone/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/Email/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/View Profile/i).length > 0).toBeTruthy();
            expect(container.getAllByTestId("schedule-btn").length > 0).toBeTruthy();
        });

        when('User clicks on any of the doctor/ optometrist listed there', async () => {
            container = await renderList()
            expect(container.getAllByText(/View Profile/i)[0]).toBeInTheDocument();
            fireEvent.click(container.getAllByText(/View Profile/i)[0]);
        });

        then('User should be able to view the following fields below:', async (table) => {
            container = await renderDetail()
            expect(container.getByText(/About Jaco/i)).toBeInTheDocument()
            expect(container.getByTestId(TEST_ID_RAW.APPOINTMENT_TEST_ID.PROVIDER_PROFILE.image)).toBeInTheDocument()
            expect(container.getAllByText(/568 Allens Mill Rd/i).length > 0).toBeTruthy()
            expect(container.getByText(/Specialties and Sub-specialties:/i)).toBeInTheDocument()
            expect(container.getByLabelText(/Doctor Rating/i)).toBeInTheDocument()
            expect(container.getByText(/Gender/i)).toBeInTheDocument()
            expect(container.getByText(/Primary Address/i)).toBeInTheDocument()
            expect(container.getByText(/Languages/i)).toBeInTheDocument()
            expect(container.getAllByText(/In-network insurances/i)[0]).toBeInTheDocument()
            expect(container.getAllByText(/Education/i)[1]).toBeInTheDocument()
            expect(container.getByText(/Memberships and Afilliations/i)).toBeInTheDocument()
        });

        when('User clicks on the option to schedule appointment from the doctor/ optometrist bio screen', async() => {
            container = await renderDetail();
            expect(container.getAllByTestId("schedule-btn")[1]).toBeInTheDocument();
            fireEvent.click(container.getAllByTestId("schedule-btn")[1]);
        });

        then('User should be redirected to schedule appointment screen with location of the provider pre-filled as user’s searched location', () => {
            renderResultsScreen();
        });

        and('User should be able to view today’s date as the date searched', () => {
            defaultValidation()
        });

        when('The provider from whose bio user got redirected to schedule appointment  at top', () => {
            defaultValidation()
        });

        then('User should be able to view the list of providers on the results in schedule appointment screen', () => {
            defaultValidation()
        });

        and('User should be able to go through the process of scheduling the appointment from patient portal with that provider', () => {
            defaultValidation()
        });
    });

    test('EPIC_EPP-20_STORY_EPP-4476 - Verify User should be able to go through the process of scheduling the appointment from patient portal with that provider - within 3 seconds', ({ given, when, then, and }) => {
        given('User launch Patient Portal url', () => {
            defaultValidation()
        });

        when('User is logged in to the application', async () => {
            container = await renderLogin()
        });

        then(/^User lands to the "(.*)" screen$/, (arg0) => {
            defaultValidation()
        });

        and(/^User should see "(.*)"  menu$/, (arg0) => {
            defaultValidation()
        });

        when(/^User selects the "(.*)" menu$/, (arg0) => {
            defaultValidation()
        });

        then('User should be navigated to the screen to view their care team i.e. Doctors/ Optometrists', async () => {
            container = await renderList()
            expect(container.getByText(/My Care Team/i)).toBeInTheDocument();
        });

        and('User should be see the list of doctors/ optometrist they have consulted with the following details', async (table) => {
            container = await renderList()
            expect(container.getAllByAltText(/Doctor Image/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/Jaco David/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/Ballwin/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/568 Allens Mill Rd/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/Specialties/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/Phone/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/Email/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/View Profile/i).length > 0).toBeTruthy();
            expect(container.getAllByTestId("schedule-btn").length > 0).toBeTruthy();
        });

        when('User clicks on any of the doctor/ optometrist listed there', async () => {
            container = await renderList()
            expect(container.getAllByText(/View Profile/i)[0]).toBeInTheDocument();
            fireEvent.click(container.getAllByText(/View Profile/i)[0]);
        });

        then('User should be able to view the following fields below:', async (table) => {
            container = await renderDetail()
            expect(container.getByText(/About Jaco/i)).toBeInTheDocument()
            expect(container.getByTestId(TEST_ID_RAW.APPOINTMENT_TEST_ID.PROVIDER_PROFILE.image)).toBeInTheDocument()
            expect(container.getAllByText(/568 Allens Mill Rd/i).length > 0).toBeTruthy()
            expect(container.getByText(/Specialties and Sub-specialties:/i)).toBeInTheDocument()
            expect(container.getByLabelText(/Doctor Rating/i)).toBeInTheDocument()
            expect(container.getByText(/Gender/i)).toBeInTheDocument()
            expect(container.getByText(/Primary Address/i)).toBeInTheDocument()
            expect(container.getByText(/Languages/i)).toBeInTheDocument()
            expect(container.getAllByText(/In-network insurances/i)[0]).toBeInTheDocument()
            expect(container.getAllByText(/Education/i)[1]).toBeInTheDocument()
            expect(container.getByText(/Memberships and Afilliations/i)).toBeInTheDocument()
        });

        when('User clicks on the option to schedule appointment from the doctor/ optometrist bio screen', async() => {
            container = await renderDetail();
            expect(container.getAllByTestId("schedule-btn")[1]).toBeInTheDocument();
            fireEvent.click(container.getAllByTestId("schedule-btn")[1]);
        });

        then('User should be redirected to schedule appointment screen with location of the provider pre-filled as user’s searched location', () => {
            renderResultsScreen();
        });

        and('User should be able to view today’s date as the date searched', () => {
            defaultValidation()
        });

        when('The provider from whose bio user got redirected to schedule appointment  at top', () => {
            defaultValidation()
        });

        then('User should be able to view the list of providers on the results in schedule appointment screen', () => {
            defaultValidation()
        });

        and('User should be able to go through the process of scheduling the appointment from patient portal with that provider', () => {
            defaultValidation()
        });

        and(/^User should see the page loads within (\d+) seconds$/, (arg0) => {
            defaultValidation()
        });
    });

    test('EPIC_EPP-20_STORY_EPP-1543 - Verify User should not see the any errors script when user clicks F12 on the console - when user got redirected to schedule appointment  at top', ({ given, when, then, and }) => {
        given('User launch Patient Portal url', () => {
            defaultValidation()
        });

        when('User is logged in to the application', async () => {
            container = await renderLogin()
        });

        then(/^User lands to the "(.*)" screen$/, (arg0) => {
            defaultValidation()
        });

        and(/^User should see "(.*)"  menu$/, (arg0) => {
            defaultValidation()
        });

        when(/^User selects the "(.*)" menu$/, (arg0) => {
            defaultValidation()
        });

        then('User should be navigated to the screen to view their care team i.e. Doctors/ Optometrists', async () => {
            container = await renderList()
            expect(container.getByText(/My Care Team/i)).toBeInTheDocument();
        });

        and('User should be see the list of doctors/ optometrist they have consulted with the following details', async (table) => {
            container = await renderList()
            expect(container.getAllByAltText(/Doctor Image/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/Jaco David/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/Ballwin/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/568 Allens Mill Rd/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/Specialties/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/Phone/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/Email/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/View Profile/i).length > 0).toBeTruthy();
            expect(container.getAllByTestId("schedule-btn").length > 0).toBeTruthy();
        });

        when('User clicks on any of the doctor/ optometrist listed there', async () => {
            container = await renderList()
            expect(container.getAllByText(/View Profile/i)[0]).toBeInTheDocument();
            fireEvent.click(container.getAllByText(/View Profile/i)[0]);
        });

        then('User should be able to view the following fields below:', async (table) => {
            container = await renderDetail()
            expect(container.getByText(/About Jaco/i)).toBeInTheDocument()
            expect(container.getByTestId(TEST_ID_RAW.APPOINTMENT_TEST_ID.PROVIDER_PROFILE.image)).toBeInTheDocument()
            expect(container.getAllByText(/568 Allens Mill Rd/i).length > 0).toBeTruthy()
            expect(container.getByText(/Specialties and Sub-specialties:/i)).toBeInTheDocument()
            expect(container.getByLabelText(/Doctor Rating/i)).toBeInTheDocument()
            expect(container.getByText(/Gender/i)).toBeInTheDocument()
            expect(container.getByText(/Primary Address/i)).toBeInTheDocument()
            expect(container.getByText(/Languages/i)).toBeInTheDocument()
            expect(container.getAllByText(/In-network insurances/i)[0]).toBeInTheDocument()
            expect(container.getAllByText(/Education/i)[1]).toBeInTheDocument()
            expect(container.getByText(/Memberships and Afilliations/i)).toBeInTheDocument()
        });

        when('User clicks on the option to schedule appointment from the doctor/ optometrist bio screen', async() => {
            container = await renderDetail();
            expect(container.getAllByTestId("schedule-btn")[1]).toBeInTheDocument();
            fireEvent.click(container.getAllByTestId("schedule-btn")[1]);
        });

        then('User should be redirected to schedule appointment screen with location of the provider pre-filled as user’s searched location', () => {
            renderResultsScreen();
        });

        and('User should be able to view today’s date as the date searched', () => {
            defaultValidation()
        });

        when('The provider from whose bio user got redirected to schedule appointment  at top', () => {
            defaultValidation()
        });

        then('User should be able to view the list of providers on the results in schedule appointment screen', () => {
            defaultValidation()
        });

        and('User should be able to go through the process of scheduling the appointment from patient portal with that provider', () => {
            defaultValidation()
        });

        and(/^User should see the page loads within (\d+) seconds$/, (arg0) => {
            defaultValidation()
        });

        when(/^user clicks on F(\d+) on the console$/, (arg0) => {
            defaultValidation()
        });

        then('user should not to see any errors script', () => {
            defaultValidation()
        });
    });

    test('EPIC_EPP-14_STORY_EPP-1543-Negative Test Cases-Verify user should see the error message when the internet service is unavailable - when user got redirected to schedule appointment  at top', ({ given, when, then, and }) => {
        given('User launch Patient Portal url', () => {
            defaultValidation()
        });

        when('User is logged in to the application', async () => {
            container = await renderLogin()
        });

        then(/^User lands to the "(.*)" screen$/, (arg0) => {
            defaultValidation()
        });

        and(/^User should see "(.*)"  menu$/, (arg0) => {
            defaultValidation()
        });

        when(/^User selects the "(.*)" menu$/, (arg0) => {
            defaultValidation()
        });

        then('User should be navigated to the screen to view their care team i.e. Doctors/ Optometrists', async () => {
            container = await renderList()
            expect(container.getByText(/My Care Team/i)).toBeInTheDocument();
        });

        and('User should be see the list of doctors/ optometrist they have consulted with the following details', async (table) => {
            container = await renderList()
            expect(container.getAllByAltText(/Doctor Image/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/Jaco David/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/Ballwin/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/568 Allens Mill Rd/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/Specialties/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/Phone/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/Email/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/View Profile/i).length > 0).toBeTruthy();
            expect(container.getAllByTestId("schedule-btn").length > 0).toBeTruthy();
        });

        when('User clicks on any of the doctor/ optometrist listed there', async () => {
            container = await renderList()
            expect(container.getAllByText(/View Profile/i)[0]).toBeInTheDocument();
            fireEvent.click(container.getAllByText(/View Profile/i)[0]);
        });

        then('User should be able to view the following fields below:', async (table) => {
            container = await renderDetail()
            expect(container.getByText(/About Jaco/i)).toBeInTheDocument()
            expect(container.getByTestId(TEST_ID_RAW.APPOINTMENT_TEST_ID.PROVIDER_PROFILE.image)).toBeInTheDocument()
            expect(container.getAllByText(/568 Allens Mill Rd/i).length > 0).toBeTruthy()
            expect(container.getByText(/Specialties and Sub-specialties:/i)).toBeInTheDocument()
            expect(container.getByLabelText(/Doctor Rating/i)).toBeInTheDocument()
            expect(container.getByText(/Gender/i)).toBeInTheDocument()
            expect(container.getByText(/Primary Address/i)).toBeInTheDocument()
            expect(container.getByText(/Languages/i)).toBeInTheDocument()
            expect(container.getAllByText(/In-network insurances/i)[0]).toBeInTheDocument()
            expect(container.getAllByText(/Education/i)[1]).toBeInTheDocument()
            expect(container.getByText(/Memberships and Afilliations/i)).toBeInTheDocument()
        });

        when('User clicks on the option to schedule appointment from the doctor/ optometrist bio screen', async() => {
            container = await renderDetail();
            expect(container.getAllByTestId("schedule-btn")[1]).toBeInTheDocument();
            fireEvent.click(container.getAllByTestId("schedule-btn")[1]);
        });

        then('User should be redirected to schedule appointment screen with location of the provider pre-filled as user’s searched location', () => {
            renderResultsScreen();
        });

        and('User should be able to view today’s date as the date searched', () => {
            defaultValidation()
        });

        when('The provider from whose bio user got redirected to schedule appointment  at top', () => {
            defaultValidation()
        });

        and('the internet service is unavailable', async() => {
            const headerText = /Clarkson Eyecare logo/i;
            act(() => {
                container = render(<App Component={Bio} pageProps={{
                    bio: "56bafbaf-6bc6-47d2-b3ab-5cee17cf7e30", googleApiKey: "123"
                }} />);
            });
            await waitFor(() => container.getAllByLabelText(headerText));
            let goOffline = new window.Event("offline");
            act(() => {
                window.dispatchEvent(goOffline);
            });
            await waitFor(() => container.getByText(/No Internet Connection/i));
        });

        then('user should see the appropriate error message', () => {
            const text = container.getByText(/No Internet Connection/i);
            expect(text).toBeInTheDocument();
        });
    });

    test('EPIC_EPP-14_STORY_EPP-1543-Negative Test Cases-Verify user should see the error message when the service is unavailable - when user got redirected to schedule appointment  at top', ({ given, when, then, and }) => {
        given('User launch Patient Portal url', () => {
            defaultValidation()
        });

        when('User is logged in to the application', async () => {
            container = await renderLogin()
        });

        then(/^User lands to the "(.*)" screen$/, (arg0) => {
            defaultValidation()
        });

        and(/^User should see "(.*)"  menu$/, (arg0) => {
            defaultValidation()
        });

        when(/^User selects the "(.*)" menu$/, (arg0) => {
            defaultValidation()
        });

        then('User should be navigated to the screen to view their care team i.e. Doctors/ Optometrists', async () => {
            container = await renderList()
            expect(container.getByText(/My Care Team/i)).toBeInTheDocument();
        });

        and('User should be see the list of doctors/ optometrist they have consulted with the following details', async (table) => {
            container = await renderList()
            expect(container.getAllByAltText(/Doctor Image/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/Jaco David/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/Ballwin/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/568 Allens Mill Rd/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/Specialties/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/Phone/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/Email/i).length > 0).toBeTruthy();
            expect(container.getAllByText(/View Profile/i).length > 0).toBeTruthy();
            expect(container.getAllByTestId("schedule-btn").length > 0).toBeTruthy();
        });

        when('User clicks on any of the doctor/ optometrist listed there', async () => {
            container = await renderList()
            expect(container.getAllByText(/View Profile/i)[0]).toBeInTheDocument();
            fireEvent.click(container.getAllByText(/View Profile/i)[0]);
        });

        then('User should be able to view the following fields below:', async (table) => {
            container = await renderDetail()
            expect(container.getByText(/About Jaco/i)).toBeInTheDocument()
            expect(container.getByTestId(TEST_ID_RAW.APPOINTMENT_TEST_ID.PROVIDER_PROFILE.image)).toBeInTheDocument()
            expect(container.getAllByText(/568 Allens Mill Rd/i).length > 0).toBeTruthy()
            expect(container.getByText(/Specialties and Sub-specialties:/i)).toBeInTheDocument()
            expect(container.getByLabelText(/Doctor Rating/i)).toBeInTheDocument()
            expect(container.getByText(/Gender/i)).toBeInTheDocument()
            expect(container.getByText(/Primary Address/i)).toBeInTheDocument()
            expect(container.getByText(/Languages/i)).toBeInTheDocument()
            expect(container.getAllByText(/In-network insurances/i)[0]).toBeInTheDocument()
            expect(container.getAllByText(/Education/i)[1]).toBeInTheDocument()
            expect(container.getByText(/Memberships and Afilliations/i)).toBeInTheDocument()
        });

        when('User clicks on the option to schedule appointment from the doctor/ optometrist bio screen', async() => {
            container = await renderDetail();
            expect(container.getAllByTestId("schedule-btn")[1]).toBeInTheDocument();
            fireEvent.click(container.getAllByTestId("schedule-btn")[1]);
        });

        then('User should be redirected to schedule appointment screen with location of the provider pre-filled as user’s searched location', () => {
            renderResultsScreen();
        });

        and('User should be able to view today’s date as the date searched', () => {
            defaultValidation()
        });

        when('The provider from whose bio user got redirected to schedule appointment  at top', () => {
            defaultValidation()
        });

        and('the service is unavailable', async() => {
            const headerText = /Clarkson Eyecare logo/i;
            act(() => {
                container = render(<App Component={Bio} pageProps={{
                    bio: "56bafbaf-6bc6-47d2-b3ab-5cee17cf7e30", googleApiKey: "123"
                }} />);
            });
            await waitFor(() => container.getAllByLabelText(headerText));
            let goOffline = new window.Event("offline");
            act(() => {
                window.dispatchEvent(goOffline);
            });
            await waitFor(() => container.getByText(/No Internet Connection/i));
        });

        then('user should see the appropriate error messager', () => {
            const text = container.getByText(/No Internet Connection/i);
            expect(text).toBeInTheDocument();
        });
    });

})