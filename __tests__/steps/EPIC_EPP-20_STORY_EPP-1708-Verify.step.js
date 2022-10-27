import MyCareTeamPage from "../../src/pages/patient/my-care-team";
import App from "../../src/pages/_app";
import "@testing-library/jest-dom";
import { act, fireEvent, render, waitFor } from "@testing-library/react";
import store from "../../src/store/store";
import { Provider } from "react-redux";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import {
    mockAppointmentTypes,
    mockInsurance,
    submitFilter,
} from "../../__mocks__/mockResponse";
import { defineFeature, loadFeature } from "jest-cucumber";
import { defaultValidation, renderLogin } from "../../__mocks__/commonSteps";

const feature = loadFeature(
    "./__tests__/feature/Patient Portal/Sprint7/EPP-1708.feature"
);

defineFeature(feature, (test) => {
    let container;
    const mock = new MockAdapter(axios);

    const providerListMock = [
        {
            designation: "MBBS, MD",
            firstName: "Jaco",
            lastName: "David",
            nickName: "Jaco",
            employeeNumber: "755708",
            mi: "Jaco",
            dob: "02/07/1971",
            email: "eyecare@gmail.com",
            sex: {
                key: 11,
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
                        uid: "d72b0b16-99ab-4ae4-aba3-13b81930b68a",
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
                    addressLine2: "568 Allens Mill Rd",
                    city: "Yorktown",
                    state: "VA",
                    zip: "23692",
                    _id: "4cd970a0-8529-4b44-a4c5-99c9f4e8d078",
                },
                {
                    name: "Edwardsville ",
                    addressLine1: "700 12th St # A",
                    city: "Bellingham",
                    state: "WA",
                    zip: "98225",
                    _id: "cd68948d-aa9d-4100-a806-1afd2b227104",
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
        },
        {
            designation: "MBBS, MD",
            firstName: "Jaco",
            lastName: "David",
            nickName: "Jaco",
            employeeNumber: "755708",
            mi: "Jaco",
            dob: "02/07/1971",
            email: "eyecare@gmail.com",
            sex: {
                key: 11,
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
                        uid: "d72b0b16-99ab-4ae4-aba3-13b81930b68a",
                        fileName: "test",
                        assetUrl: "/v1/patient",
                        _version: "d72b0b16-99ab-4ae4-aba3-13b81930b77a",
                    },
                },
            },
            offices: [
                {
                    name: "Ballwin",
                    addressLine2: "568 Allens Mill Rd",
                    _id: "4cd970a0-8529-4b44-a4c5-99c9f4e8d078",
                },
                {
                    name: "Edwardsville ",
                    addressLine1: "700 12th St # A",
                    city: "Bellingham",
                    state: "WA",
                    zip: "98225",
                    _id: "cd68948d-aa9d-4100-a806-1afd2b227104",
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
        },
        {
            designation: "MBBS, MD",
            firstName: "Jaco",
            lastName: "David",
            nickName: "Jaco",
            employeeNumber: "755708",
            mi: "Jaco",
            dob: "02/07/1971",
            email: "eyecare@gmail.com",
            sex: {
                key: 11,
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
                    name: "Edwardsville ",
                    addressLine1: "700 12th St # A",
                    city: "Bellingham",
                    state: "WA",
                    zip: "98225",
                    _id: "cd68948d-aa9d-4100-a806-1afd2b227104",
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
        },
    ]

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

    const renderList = async (providerList, isMockImage = true, status = 200) => {
        //TODO: Remove
        const domain = window.location.origin;
        const url = `${domain}/api/dummy/appointment/biography/getProviderList?patientId=98f9404b-6ea8-4732-b14f-9c1a168d8066`;

        mock
            .onGet(
                url
            )
            .reply(status, {
                results: providerList
            });

        mock
            .onGet(
                `/ecp/appointments/getproviderlist/`
            )
            .reply(status, {
                results: providerList
            });

        isMockImage && mock
            .onGet(
                `/ecp/digital-asset/v1/asset/d72b0b16-99ab-4ae4-aba3-13b81930b68a`
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

        act(() => {
            container = render(
                <Provider store={store}>{MyCareTeamPage.getLayout(<MyCareTeamPage />)}</Provider>
            );
        });

        if (status === 200) {
            if (providerList.length > 0) {
                await waitFor(() => {
                    container.getAllByText(/View Profile/i);
                });
            } else {
                await waitFor(() => {
                    container.getByText(/There are no doctor/i);
                });
            }
        }

        return container;
    }

    afterAll(() => {
        mock.reset();
    });
    test('EPIC_EPP-20_STORY_EPP-1708 - Verify User navigates to the screen to view their care team i.e. Doctors/ Optometrists', ({ given, when, then, and }) => {
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
            container = await renderList(providerListMock)
            expect(container.getByText(/My Care Team/i)).toBeInTheDocument();
        });
    });

    test('EPIC_EPP-20_STORY_EPP-1708 - Verify User should be able to view the list of doctors/ optometrist they have consulted with the following details', ({ given, when, then, and }) => {
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
            await renderList(providerListMock)
            expect(container.getByText(/My Care Team/i)).toBeInTheDocument();
        });

        and('User should be see the list of doctors/ optometrist they have consulted with the following details', (table) => {
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

    test('EPIC_EPP-20_STORY_EPP-1708 - Verify User should be able to click on view profile CTA and navigate to doctor’s bio screen', ({ given, when, then, and }) => {
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
            container = await renderList(providerListMock)
            expect(container.getByText(/My Care Team/i)).toBeInTheDocument();
        });

        and('User should be see the list of doctors/ optometrist they have consulted with the following details', (table) => {
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

        when('User should be able to click on view profile CTA', () => {
            expect(container.getAllByText(/View Profile/i)[0]).toBeInTheDocument();
            fireEvent.click(container.getAllByText(/View Profile/i)[0]);
        });

        then('User should be navigated to doctor’s bio screen', () => {

        });
    });

    test('EPIC_EPP-20_STORY_EPP-1708 - Verify User should be able to view the message “There are no doctor/ optometrist details available for you.“ (if there is no my care team for the user)', ({ given, when, then, and }) => {
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
            container = await renderList([], false)
            expect(container.getByText(/My Care Team/i)).toBeInTheDocument();
        });

        and('User should see the message “There are no doctor/ optometrist details available for you.“ (if there is no my care team for the user)', () => {
            expect(container.getByText(/There are no doctor/i)).toBeInTheDocument();
        });
    });

    test('EPIC_EPP-14_STORY_EPP-1708-Negative Test Cases-Verify user should see the error message when the internet service is unavailable - when User selects the "Doctors/ Optometrists" menu', ({ given, when, then, and }) => {
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

        and('the service is unavailable', async () => {
            const headerText = /Clarkson Eyecare logo/i;
            act(() => {
                container = render(<App Component={MyCareTeamPage} />);
            });
            await waitFor(() => container.getByLabelText(headerText));
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

    test('EPIC_EPP-14_STORY_EPP-1708-Negative Test Cases-Verify  when the service is unavailable - when User selects the "Doctors/ Optometrists" menu', ({ given, when, then, and }) => {
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

        and('the service is unavailable', async () => {
            const headerText = /Clarkson Eyecare logo/i;
            act(() => {
                container = render(<App Component={MyCareTeamPage} />);
            });
            await waitFor(() => container.getByLabelText(headerText));
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
})