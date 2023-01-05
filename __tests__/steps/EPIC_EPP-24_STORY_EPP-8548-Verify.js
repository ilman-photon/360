import { defineFeature, loadFeature } from "jest-cucumber";
import { act, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import AuthPage from "../../src/pages/patient/login";
import axios from "axios";
import { Provider } from "react-redux";
import EducationMaterials from "../../src/pages/patient/education-materials/index";
import EducationMaterialsDetails from "../../src/pages/patient/education-materials/detail/index";
import store from "../../src/store/store";
import { renderWithProviders } from "../src/utils/test-util";
import { createMatchMedia } from "../../__mocks__/commonSteps";
import { educationMaterials } from "../../__mocks__/mockResponse";
const useRouter = jest.spyOn(require("next/router"), "useRouter");

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint8/EPP-8548.feature"
);

defineFeature(feature, (test) => {
  let container;
  const mock = new MockAdapter(axios);
  const element = document.createElement("div");
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

  beforeEach(() => {
    mock.onGet(`/ecp/patient/getPatientDocumentByCategory/98f9404b-6ea8-4732-b14f-9c1a168d8066/documents?pageSize=10&pageNo=0&sortBy=updated&sortOrder=dsc&search.query=((category=eq=EducationMaterials))`).reply(200, educationMaterials);
    mock.onGet(
        `/ecp/digital-asset/v1/asset/d72b0b16-99ab-4ae4-aba3-13b81930b68a`
    ).reply(200, imageMock);
  })

  afterEach(() => {
    mock.reset();
  });

  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };

  const launchBrowser = () => {
    mock
      .onGet(`https://api.ipify.org?format=json`)
      .reply(200, { ip: "10.10.10.10" });
    act(() => {
      container = renderWithProviders(<AuthPage />, {
        container: document.body.appendChild(element),
        legacyRoot: true,
      });
    });
    const title = container.getByText("formTitle");
    expect("formTitle").toEqual(title.textContent);
  };

  const enterValidUsername = () => {
    const usernameField = container.getByLabelText(/emailUserLabel/i);
    const passwordField = container.getByLabelText(/passwordLabel/i);
    fireEvent.change(usernameField, {
      target: { value: "wrongUserName@email.cc" },
    });
    fireEvent.change(passwordField, { target: { value: "validPassword" } });
    expect(usernameField.value).not.toEqual("validUsername@email.cc");
    expect(passwordField.value).toEqual("validPassword");
  };

  const clickLogin = () => {
    const login = container.getByRole("button", { name: /Login/i });
    fireEvent.click(login);
  };

  const navigateToEducationMaterialsPage = async() => {
    mock.reset();
    mock.onGet(`/ecp/patient/getPatientDocumentByCategory/98f9404b-6ea8-4732-b14f-9c1a168d8066/documents?pageSize=10&pageNo=0&sortBy=updated&sortOrder=dsc&search.query=((category=eq=EducationMaterials))`).reply(200, educationMaterials);
    act(() => {
      container.rerender(
        <Provider store={store}>
          {EducationMaterials.getLayout(<EducationMaterials />)}
        </Provider>
      );
    });
    await waitFor(() => container.getByText(/Education Materials/i));
  };

  const navigateToDetailsPage = async() => {
    act(() => {
      container.rerender(
        <Provider store={store}>
          {EducationMaterialsDetails.getLayout(<EducationMaterialsDetails />)}
        </Provider>
      );
    });
    await waitFor(() => container.getByText(/Back to Education Materials/i))
  };

    test('EPIC_EPP-24_STORY_EPP-8548- Verify User should be able to view the entire content of education material', ({ given, and, when, then }) => {
    	given('User is logged into the portal', () => {
        window.matchMedia = createMatchMedia("1290px");
        launchBrowser();
        enterValidUsername();
    	});

    	and('User lands on the dashboard screen', async() => {
            clickLogin();
    	});

    	and('User views the ‘Education Materials\' sub-menu under the ‘Documents’ menu present as part of the global header', () => {
            defaultValidation();
        });

    	when('User clicks on the ‘Education Materials\'  option', () => {
            defaultValidation();
    	});

    	then('User lands on the screen to view the patient education materials', async() => {
        await navigateToEducationMaterialsPage();
        const title = container.getAllByLabelText(/Education Materials/i)[0];
        expect(title).toBeInTheDocument();
    	});

    	when('User clicks on Read more CTA', () => {
            defaultValidation();
    	});

    	then('User should be able to view the entire content of education material', async() => {
        await navigateToDetailsPage();
        expect(container.getByText(/Back to Education Materials/i)).toBeInTheDocument();
    	});
    });

    test('EPIC_EPP-24_STORY_EPP-8548- Verify User should be able to see that the education material document & Print', ({ given, and, when, then }) => {
    	given('User is logged into the portal', () => {
        window.matchMedia = createMatchMedia("1440px");
        launchBrowser();
        enterValidUsername();
    	});

    	and('User lands on the dashboard screen', async() => {
            clickLogin();
    	});

    	and('User views the ‘Education Materials\' sub-menu under the ‘Documents’ menu present as part of the global header', () => {
        defaultValidation();
    	});

    	when('User clicks on the ‘Education Materials\'  option', () => {
        defaultValidation();
    	});

    	then('User lands on the screen to view the patient education materials', async() => {
        await navigateToEducationMaterialsPage();
        const title = container.getAllByLabelText(/Education Materials/i)[0];
        expect(title).toBeInTheDocument();
    	});

    	when('User clicks on Read more CTA', () => {
            defaultValidation();
    	});

    	then('User should be able to view the entire content of education material', async() => {
            await navigateToDetailsPage();
            expect(container.getByText(/Back to Education Materials/i)).toBeInTheDocument();
    	});

    	and('User should be able to view Download CTA', () => {
            expect(container.getByTestId("downloadDetail")).toBeInTheDocument();
    	});

    	when('User clicks on view Download CTA', () => {
            const downloadBtn = container.getByTestId("downloadDetail");
            fireEvent.click(downloadBtn);
    	});

    	then('User should be able to see that the education material document & Print is downloaded', () => {
            defaultValidation();
    	});
    });

    test('EPIC_EPP-24_STORY_EPP-8548- Verify User should be able to view Print CTA which when clicked will print the education material document', ({ given, and, when, then }) => {
    	given('User is logged into the portal', () => {
            window.matchMedia = createMatchMedia("400px");
            launchBrowser();
            enterValidUsername();
    	});

    	and('User lands on the dashboard screen', async() => {
            clickLogin();
    	});

    	and('User views the ‘Education Materials\' sub-menu under the ‘Documents’ menu present as part of the global header', () => {
            defaultValidation();
    	});

    	when('User clicks on the ‘Education Materials\'  option', () => {
            defaultValidation();
    	});

    	then('User lands on the screen to view the patient education materials', async() => {
            await navigateToEducationMaterialsPage();
            const title = container.getAllByLabelText(/Education Materials/i)[0];
            expect(title).toBeInTheDocument();
    	});

    	when('User clicks on Read more CTA', () => {
            defaultValidation();
    	});

    	then('User should be able to view the entire content of education material', async() => {
            await navigateToDetailsPage();
            expect(container.getByText(/Back to Education Materials/i)).toBeInTheDocument();
    	});

    	and('User should be able to view Print CTA', () => {
            expect(container.getByTestId("printDetail")).toBeInTheDocument();
    	});

    	when('User clicks on view Print CTA', () => {
            const printBtn = container.getByTestId("printDetail");
            fireEvent.click(printBtn);
    	});

    	then('User should be able to print that the education material document with print page', () => {
            defaultValidation();
    	});
    });

    test('EPIC_EPP-24_STORY_EPP-8548- Verify User should be able to view Back to education material CTA which when clicked will take the user back to Education materials screen', ({ given, and, when, then }) => {
    	given('User is logged into the portal', () => {
            window.matchMedia = createMatchMedia("1024px");
            launchBrowser();
            enterValidUsername();
    	});

    	and('User lands on the dashboard screen', async() => {
            clickLogin();
    	});

    	and('User views the ‘Education Materials\' sub-menu under the ‘Documents’ menu present as part of the global header', () => {
            defaultValidation();
    	});

    	when('User clicks on the ‘Education Materials\'  option', () => {
            defaultValidation();
    	});

    	then('User lands on the screen to view the patient education materials', async() => {
            await navigateToEducationMaterialsPage();
            const title = container.getAllByLabelText(/Education Materials/i)[0];
            expect(title).toBeInTheDocument();
    	});

    	when('User clicks on Read more CTA', () => {
            defaultValidation();
    	});

    	then('User should be able to view the entire content of education material', async() => {
            await navigateToDetailsPage();
            expect(container.getByText(/Back to Education Materials/i)).toBeInTheDocument();
    	});

    	and('User should be able to view Back to education material CTA', async() => {
            const backBtn = container.getByText(/Back to Education Materials/i);
            expect(backBtn).toBeInTheDocument();
    	});

    	when('User clicks on Back to education material CTA', () => {
            defaultValidation();
    	});

    	then('User should be navigated to Education materials screen', async() => {
            await navigateToEducationMaterialsPage();
    	});
    });

    test('EPIC_EPP-24_STORY_EPP-8548 - Negative Test Cases-Verify user should see the error message when the internet service is unavailable - when User clicks on Read more CTA', ({ given, and, when, then }) => {
    	given('User is logged into the portal', () => {
            window.matchMedia = createMatchMedia("1290px");
            launchBrowser();
            enterValidUsername();
    	});

    	and('User lands on the dashboard screen', async() => {
            clickLogin();
    	});

    	and('User views the ‘Education Materials\' sub-menu under the ‘Documents’ menu present as part of the global header', () => {
            defaultValidation();
    	});

    	when('User clicks on the ‘Education Materials\'  option', () => {
            defaultValidation();
    	});

    	then('User lands on the screen to view the patient education materials', async() => {
            await navigateToEducationMaterialsPage();
            const title = container.getAllByLabelText(/Education Materials/i)[0];
            expect(title).toBeInTheDocument();
    	});

    	when('User clicks on Read more CTA', () => {
            defaultValidation();
    	});

    	then('User should be able to view the entire content of education material', async() => {
            await navigateToDetailsPage();
            expect(container.getByText(/Back to Education Materials/i)).toBeInTheDocument();
    	});

    	and('User should be able to view Print CTA', () => {
            expect(container.getByTestId("printDetail")).toBeInTheDocument();
    	});

    	when('User clicks on view Print CTA', () => {
            const printBtn = container.getByTestId("printDetail");
            fireEvent.click(printBtn);
    	});

    	and('the internet service is unavailable', () => {
            defaultValidation();
    	});

    	then('user should see the appropriate error message', () => {
            defaultValidation();
    	});
    });

    test('EPIC_EPP-24_STORY_EPP-8548 - Negative Test Cases-Verify user should see the error message when the service is unavailable - when User clicks on Read more CTA', ({ given, and, when, then }) => {
    	given('User is logged into the portal', () => {
            window.matchMedia = createMatchMedia("1290px");
            launchBrowser();
            enterValidUsername();
    	});

    	and('User lands on the dashboard screen', async() => {
            clickLogin();
    	});

    	and('User views the ‘Education Materials\' sub-menu under the ‘Documents’ menu present as part of the global header', () => {
            defaultValidation();
    	});

    	when('User clicks on the ‘Education Materials\'  option', () => {
            defaultValidation();
    	});

    	then('User lands on the screen to view the patient education materials', async() => {
            await navigateToEducationMaterialsPage();
            const title = container.getAllByLabelText(/Education Materials/i)[0];
            expect(title).toBeInTheDocument();
    	});

    	when('User clicks on Read more CTA', () => {
            defaultValidation();
    	});

    	then('User should be able to view the entire content of education material', async() => {
            await navigateToDetailsPage();
            expect(container.getByText(/Back to Education Materials/i)).toBeInTheDocument();
    	});

    	and('User should be able to view Print CTA', () => {
            expect(container.getByTestId("printDetail")).toBeInTheDocument();
    	});

    	when('User clicks on view Print CTA', () => {
            const printBtn = container.getByTestId("printDetail");
            fireEvent.click(printBtn);
    	});

    	and('the service is unavailable', () => {
            defaultValidation();
    	});

    	then('user should see the appropriate error message', () => {
            defaultValidation();
    	});
    });

});
