import { defineFeature, loadFeature } from "jest-cucumber";
import { fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import PersonalInformation from "../../src/components/organisms/PersonalInformation/personalInformation";
import ProfileInformationPage from "../../src/pages/patient/account/profile-info";
import AccountSidebar from "../../src/components/molecules/AccountSidebar/accountSidebar";

import { Provider } from "react-redux";
import store from "../../src/store/store";
import constants from "../../src/utils/constants";

window.scrollTo = jest.fn();

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint3/EPP-945.feature",
  {
    tagFilter: "@included and not @excluded",
  }
);

defineFeature(feature, (test) => {
  let container, screen, sidebar;
  const mockUserdata = {
    address: "645 Benedict Cliff",
    age: 63,
    city: "Daphneeshire",
    dob: "2022-08-18T13:08:18.012Z",
    email: "Justus4@gmail.com",
    firstName: "Karlie",
    gender: "Transgender",
    issuedCardBack: "https://loremflickr.com/275/173",
    issuedCardFront: "https://loremflickr.com/275/173",
    lastName: "Ernser",
    mobile: "(706) 509-6731",
    name: "Rupert Jerde",
    preferredCommunication: "email",
    preferredName: "---",
    profilePhoto: "https://loremflickr.com/640/480",
    ssn: 3777306119,
    state: "South Dakota",
    title: "Mrs.",
    zip: "03245",
  };
  beforeEach(() => {
    const mockCallBack = jest.fn();
    container = render(
      <PersonalInformation
        isEditing={false}
        userData={mockUserdata}
        OnEditClicked={mockCallBack}
        OnCancelEditClicked={mockCallBack}
        OnSaveClicked={mockCallBack}
        testIds={constants.TEST_ID.PERSONAL_INFO_TEST_ID}
      />
    );
    screen = render(
      <Provider store={store}>
        <ProfileInformationPage />
      </Provider>
    );

    sidebar = render(<AccountSidebar />);
  });
  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };

  test("EPIC_EPP-8_STORY_EPP-945 - Verify that  User should be able to view my profile information/ demographic details in Android or IOS", ({
    given,
    and,
    when,
    then,
  }) => {
    given('user launch the "XXX" url', () => {
      defaultValidation();
    });

    when('user provides  "<Email or Phone Number>" and "<password>"', () => {
      defaultValidation();
    });

    and('user clicks on "Login" button', () => {
      defaultValidation();
    });

    then("user navigates to the Patient Portal application", () => {
      defaultValidation();
    });

    and('user clicks on the "Account" link', () => {
      defaultValidation();
    });

    and('user clicks on the "My account" link', () => {
      defaultValidation();
    });

    and("user clicks on “Profile Information” menu", async () => {
      defaultValidation();
    });

    then(
      'user able to view "Personal information" section in top and "Contact information" section in bottom',
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-8_STORY_EPP-945 - Verify that  User should be able to view my profile information/ demographic details in Desktop", ({
    given,
    and,
    when,
    then,
  }) => {
    given('user launch the "XXX" url', () => {
      defaultValidation();
    });

    when('user provides  "<Email or Phone Number>" and "<password>"', () => {
      defaultValidation();
    });

    and('user clicks on "Login" button', () => {
      defaultValidation();
    });

    then("user navigates to the Patient Portal application", () => {
      defaultValidation();
    });

    and('user clicks on the "Account" link', () => {
      defaultValidation();
    });

    and('user clicks on the "My account" link', () => {
      defaultValidation();
    });

    and("user clicks on “Profile Information” menu", () => {
      defaultValidation();
    });

    then(
      'user able to view "Personal information" section in left side and "Contact information" section in right side',
      async () => {
        await waitFor(() => screen.getByText("Profile"));
        await waitFor(() => screen.getByText("Contact"));
      }
    );
  });

  test("EPIC_EPP-8_STORY_EPP-945 - Verify that  User should be able to view my profile information/ demographic details1", ({
    given,
    and,
    when,
    then,
  }) => {
    given('user launch the "XXX" url', () => {
      defaultValidation();
    });

    when('user provides  "<Email or Phone Number>" and "<password>"', () => {
      defaultValidation();
    });

    and('user clicks on "Login" button', () => {
      defaultValidation();
    });

    then("user navigates to the Patient Portal application", () => {
      defaultValidation();
    });

    and('user clicks on the "Account" link', () => {
      defaultValidation();
    });

    and('user clicks on the "My account" link', () => {
      defaultValidation();
    });

    and("user clicks on “Profile Information” menu", () => {
      defaultValidation();
    });

    then('user able to view "Personal information" section', async () => {
      await waitFor(() => container.getByText("Profile"));
    });

    then('user able to view "Contact information" section', async () => {
      await waitFor(() => screen.getAllByText("Contact")[0]);
      const contactButton = await waitFor(
        () => screen.getAllByText("Contact")[0]
      );
      fireEvent.click(contactButton);

      await waitFor(() =>
        expect(screen.getAllByText("Phone Number")[0]).toBeInTheDocument()
      );
      await waitFor(() =>
        expect(screen.getAllByText("Email ID")[0]).toBeInTheDocument()
      );
      await waitFor(() =>
        expect(screen.getAllByText("Address")[0]).toBeInTheDocument()
      );
      await waitFor(() =>
        expect(screen.getAllByText("City")[0]).toBeInTheDocument()
      );
      await waitFor(() =>
        expect(screen.getAllByText("State")[0]).toBeInTheDocument()
      );
      await waitFor(() =>
        expect(screen.getAllByText("Zip")[0]).toBeInTheDocument()
      );
      await waitFor(() =>
        expect(
          screen.getAllByText("Prefered Mode(s) of communication")[0]
        ).toBeInTheDocument()
      );
    });

    then(
      'user able to view the "Name", "Prefered Name", "Title", "Date of Birth", "Photo", "Age", "Gender", "SSN" and "State Issued ID" fields under "Personal information" section',
      async () => {
        await waitFor(() =>
          expect(screen.getAllByText("Name")[0]).toBeInTheDocument()
        );
        await waitFor(() =>
          expect(screen.getAllByText("Preferred Name")[0]).toBeInTheDocument()
        );
        await waitFor(() =>
          expect(screen.getAllByText("Title")[0]).toBeInTheDocument()
        );
        await waitFor(() =>
          expect(screen.getAllByText("Date of Birth")[0]).toBeInTheDocument()
        );
        await waitFor(() =>
          expect(screen.getAllByText("Photo")[0]).toBeInTheDocument()
        );
        await waitFor(() =>
          expect(screen.getAllByText("Age")[0]).toBeInTheDocument()
        );
        await waitFor(() =>
          expect(screen.getAllByText("Gender")[0]).toBeInTheDocument()
        );
        await waitFor(() =>
          expect(screen.getAllByText("SSN")[0]).toBeInTheDocument()
        );
        await waitFor(() =>
          expect(screen.getAllByText("State Issued ID")[0]).toBeInTheDocument()
        );
      }
    );
  });

  test("EPIC_EPP-8_STORY_EPP-945 - Verify that  User should be able to view my profile information/ demographic details2", ({
    given,
    and,
    when,
    then,
  }) => {
    given('user launch the "XXX" url', () => {
      defaultValidation();
    });

    when('user provides  "<Email or Phone Number>" and "<password>"', () => {
      defaultValidation();
    });

    and('user clicks on "Login" button', () => {
      defaultValidation();
    });

    then("user navigates to the Patient Portal application", () => {
      defaultValidation();
    });

    and('user clicks on the "Account" link', () => {
      defaultValidation();
    });

    and('user clicks on the "My account" link', () => {
      defaultValidation();
    });

    and("user clicks on “Profile Information” menu", () => {
      defaultValidation();
    });

    then('user able to view "Personal information" section', async () => {
      await waitFor(() => screen.getByText("Profile"));
    });

    then('user able to view "Contact information" section', async () => {
      await waitFor(() => screen.getByText("Contact"));
    });

    then(
      'user able to view the "Phone Number", "Email ID", "Address", "City", "State", "Zip", "Prefered mode of communication" fields under "Contact information" section',
      async () => {
        await waitFor(() => screen.getAllByText("Contact")[0]);
        const contactButton = await waitFor(
          () => screen.getAllByText("Contact")[0]
        );
        fireEvent.click(contactButton);

        await waitFor(() =>
          expect(screen.getAllByText("Phone Number")[0]).toBeInTheDocument()
        );
        await waitFor(() =>
          expect(screen.getAllByText("Email ID")[0]).toBeInTheDocument()
        );
        await waitFor(() =>
          expect(screen.getAllByText("Address")[0]).toBeInTheDocument()
        );
        await waitFor(() =>
          expect(screen.getAllByText("City")[0]).toBeInTheDocument()
        );
        await waitFor(() =>
          expect(screen.getAllByText("State")[0]).toBeInTheDocument()
        );
        await waitFor(() =>
          expect(screen.getAllByText("Zip")[0]).toBeInTheDocument()
        );
        await waitFor(() =>
          expect(
            screen.getAllByText("Prefered Mode(s) of communication")[0]
          ).toBeInTheDocument()
        );
      }
    );
  });

  test("EPIC_EPP-8_STORY_EPP-945-Verify whether the user is able to view my profile information without Internet connection", ({
    given,
    and,
    when,
    then,
  }) => {
    given('user launch the "XXX" url', () => {
      defaultValidation();
    });

    when('user provides  "<Email or Phone Number>" and "<password>"', () => {
      defaultValidation();
    });

    and('user clicks on "Login" button', () => {
      defaultValidation();
    });

    then("user navigates to the Patient Portal application", () => {
      defaultValidation();
    });

    and('user clicks on the "Account" link', () => {
      defaultValidation();
    });

    and('user clicks on the "My account" link', () => {
      defaultValidation();
    });

    and("user clicks on “Profile Information” section", () => {
      defaultValidation();
    });

    when("there is no internet connection available", () => {
      defaultValidation();
    });

    then("user should view appropriate error message", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-8_STORY_EPP-945-Verify whether the page is loading with in 3 seconds", ({
    given,
    and,
    when,
    then,
  }) => {
    given('user launch the "XXX" url', () => {
      defaultValidation();
    });

    when('user provides  "<Email or Phone Number>" and "<password>"', () => {
      defaultValidation();
    });

    and('user clicks on "Login" button', () => {
      defaultValidation();
    });

    then("user navigates to the Patient Portal application", () => {
      defaultValidation();
    });

    and('user clicks on the "Account" link', () => {
      defaultValidation();
    });

    and('user clicks on the "My account" link', () => {
      defaultValidation();
    });

    and("user clicks on “Profile Information” section", () => {
      defaultValidation();
    });

    then("page should load in 3 seconds", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-8_STORY_EPP-945-Verify whether any error is displaying when we press F12 after navigating to the Profile information page.", ({
    given,
    and,
    when,
    then,
  }) => {
    given('user launch the "XXX" url', () => {
      defaultValidation();
    });

    when('user provides  "<Email or Phone Number>" and "<password>"', () => {
      defaultValidation();
    });

    and('user clicks on "Login" button', () => {
      defaultValidation();
    });

    then("user navigates to the Patient Portal application", () => {
      defaultValidation();
    });

    and('user clicks on the "Account" link', () => {
      defaultValidation();
    });

    and('user clicks on the "My account" link', () => {
      defaultValidation();
    });

    and("user clicks on “Profile Information” section", () => {
      defaultValidation();
    });

    and("press the F12 button from the keyboard.", () => {
      defaultValidation();
    });

    then("none of the javascript error should be seen by the user.", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-8_STORY_EPP-945-Verify whether the error message is displaying when the service is unavailable.", ({
    given,
    and,
    when,
    then,
  }) => {
    given('user launch the "XXX" url', () => {
      defaultValidation();
    });

    when('user provides  "<Email or Phone Number>" and "<password>"', () => {
      defaultValidation();
    });

    and('user clicks on "Login" button', () => {
      defaultValidation();
    });

    then("user navigates to the Patient Portal application", () => {
      defaultValidation();
    });

    and('user clicks on the "Account" link', () => {
      defaultValidation();
    });

    and('user clicks on the "My account" link', () => {
      defaultValidation();
    });

    and("user clicks on “Profile Information” section", () => {
      expect(sidebar.getByText("Profile Information")).toBeInTheDocument();
      const sidebarButton = sidebar.getByText("Profile Information");
      fireEvent.click(sidebarButton);
    });

    then(
      "error message '503 - Server is not ready to handle the request' should get display.",
      () => {
        defaultValidation();
      }
    );
  });
});
