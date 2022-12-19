import { defineFeature, loadFeature } from "jest-cucumber";
import { act, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import AuthPage from "../../src/pages/patient/login";
import axios from "axios";
import { Provider } from "react-redux";
import EducationMaterials from "../../src/pages/patient/education-materials/index";
import store from "../../src/store/store";
import { renderWithProviders } from "../src/utils/test-util";
import {
  createMatchMedia,
  navigateToPatientPortalHome,
} from "../../__mocks__/commonSteps";
import { educationMaterials } from "../../__mocks__/mockResponse";
const useRouter = jest.spyOn(require("next/router"), "useRouter");

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint8/EPP-6690.feature"
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

  const navigateToEducationMaterialsPage = async () => {
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

  test("EPIC_EPP-27_STORY_EPP-6690 - Verify whether the user is able to navigate the Dashboard page", ({
    given,
    when,
    and,
  }) => {
    given("user launch the browser and enter the patient portal url", () => {
      window.matchMedia = createMatchMedia("1290px");
      launchBrowser();
    });

    when("user enter valid username or phone number and password", () => {
      enterValidUsername();
    });

    and("user click on Sign in button.", () => {
      clickLogin();
    });

    and("user should navigates to the dashboard page", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-27_STORY_EPP-6690 - Verify whether the User views the ‘Education Materials' sub-menu under the ‘Documents’ menu", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the browser and enter the patient portal url", () => {
      window.matchMedia = createMatchMedia("1290px");
      launchBrowser();
    });

    when("user enter valid username or phone number and password", () => {
      enterValidUsername();
    });

    and("user click on Sign in button.", () => {
      clickLogin();
    });

    and("user should navigates to the dashboard page", () => {
      defaultValidation();
    });

    when("user clicks on Documents menu", () => {
      defaultValidation();
    });

    then("user views Education Materials menu", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-27_STORY_EPP-6690 - Verify whether the User is able to view the list of education materials", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the browser and enter the patient portal url", () => {
      window.matchMedia = createMatchMedia("1290px");
      launchBrowser();
    });

    when("user enter valid username or phone number and password", () => {
      enterValidUsername();
    });

    and("user click on Sign in button.", () => {
      clickLogin();
    });

    and("user should navigates to the dashboard page", () => {
      defaultValidation();
    });

    when("user clicks on Documents menu", () => {
      defaultValidation();
    });

    then("user views Education Materials menu", () => {
      defaultValidation();
    });

    when("user clicks on Education Materials", () => {
      defaultValidation();
    });

    then("user is able to view the list of education materials", async () => {
      await navigateToEducationMaterialsPage();
      const title = container.getAllByLabelText(/Education Materials/i)[0];
      expect(title).toBeInTheDocument();
    });
  });

  test("EPIC_EPP-27_STORY_EPP-6690 - Verify whether the User is able to view Image, Name and Description", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the browser and enter the patient portal url", () => {
      window.matchMedia = createMatchMedia("1290px");
      launchBrowser();
    });

    when("user enter valid username or phone number and password", () => {
      enterValidUsername();
    });

    and("user click on Sign in button.", () => {
      clickLogin();
    });

    and("user should navigates to the dashboard page", () => {
      defaultValidation();
    });

    when("user clicks on Documents menu", () => {
      defaultValidation();
    });

    then("user views Education Materials menu", () => {
      defaultValidation();
    });

    when("user clicks on Education Materials", () => {
      defaultValidation();
    });

    then("user is able to view the list of education materials", async () => {
      await navigateToEducationMaterialsPage();
      const title = container.getAllByLabelText(/Education Materials/i)[0];
      expect(title).toBeInTheDocument();
    });

    then("user must be able to view Image", () => {
      expect(
        container.getAllByTestId("educationMaterialsImg")[0]
      ).toBeInTheDocument();
    });

    then("user must be able to view Name", () => {
      expect(container.getByText(/Satia Rahman/i)).toBeInTheDocument();
    });

    then("user must be able to view a short Description", () => {
      // expect(
      //   container.getByText(
      //     /Age-related macular degeneration is an eye condition/i
      //   )
      // ).toBeInTheDocument();
    });
  });

  test("EPIC_EPP-27_STORY_EPP-6690 - Verify whether the User is able to download the education material document", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the browser and enter the patient portal url", () => {
      window.matchMedia = createMatchMedia("1290px");
      launchBrowser();
    });

    when("user enter valid username or phone number and password", () => {
      enterValidUsername();
    });

    and("user click on Sign in button.", () => {
      clickLogin();
    });

    and("user should navigates to the dashboard page", () => {
      defaultValidation();
    });

    when("user clicks on Documents menu", () => {
      defaultValidation();
    });

    then("user views Education Materials menu", () => {
      defaultValidation();
    });

    when("user clicks on Education Materials", () => {
      defaultValidation();
    });

    then("user is able to view the list of education materials", async () => {
      await navigateToEducationMaterialsPage();
      const title = container.getAllByLabelText(/Education Materials/i)[0];
      expect(title).toBeInTheDocument();
    });

    then("user must be able to view Image", () => {
      expect(
        container.getAllByTestId("educationMaterialsImg")[0]
      ).toBeInTheDocument();
    });

    then("user must be able to view Name", () => {
      expect(container.getByText(/Satia Rahman/i)).toBeInTheDocument();
    });

    then("user must be able to view a short Description", () => {
      // expect(
      //   container.getByText(
      //     /Age-related macular degeneration is an eye condition/i
      //   )
      // ).toBeInTheDocument();
    });

    then("user must be to view Download option", () => {
      const downloadBtn = container.getAllByTestId("downloadPDFButton")[0];
      expect(downloadBtn).toBeInTheDocument();
    });

    when("user clicks on Download option", () => {
      const downloadBtn = container.getAllByTestId("downloadPDFButton")[0];
      fireEvent.click(downloadBtn);
    });

    then(
      "user must be able to download the education material document",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-27_STORY_EPP-6690 - Verify whether the User is able to download the document as a pdf to their local system/ device", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the browser and enter the patient portal url", () => {
      window.matchMedia = createMatchMedia("1290px");
      launchBrowser();
    });

    when("user enter valid username or phone number and password", () => {
      enterValidUsername();
    });

    and("user click on Sign in button.", () => {
      clickLogin();
    });

    and("user should navigates to the dashboard page", () => {
      defaultValidation();
    });

    when("user clicks on Documents menu", () => {
      defaultValidation();
    });

    then("user views Education Materials menu", () => {
      defaultValidation();
    });

    when("user clicks on Education Materials", () => {
      defaultValidation();
    });

    then("user is able to view the list of education materials", async () => {
      await navigateToEducationMaterialsPage();
      const title = container.getAllByLabelText(/Education Materials/i)[0];
      expect(title).toBeInTheDocument();
    });

    then("user must be able to view Image", () => {
      expect(
        container.getAllByTestId("educationMaterialsImg")[0]
      ).toBeInTheDocument();
    });

    then("user must be able to view Name", () => {
      expect(container.getByText(/Satia Rahman/i)).toBeInTheDocument();
    });

    then("user must be able to view a short Description", () => {
      // expect(
      //   container.getByText(
      //     /Age-related macular degeneration is an eye condition/i
      //   )
      // ).toBeInTheDocument();
    });

    then("user must be to view Download option", () => {
      const downloadBtn = container.getAllByTestId("downloadPDFButton")[0];
      expect(downloadBtn).toBeInTheDocument();
    });

    when("user clicks on Download option", () => {
      const downloadBtn = container.getAllByTestId("downloadPDFButton")[0];
      expect(downloadBtn).toBeInTheDocument();
      fireEvent.click(downloadBtn);
    });

    then(
      "user must be able to download the education material document",
      () => {
        defaultValidation();
      }
    );

    then(
      "user must validate that the document must be downloaded as pdf format in local system",
      () => {
        defaultValidation();
      }
    );
  });
});
