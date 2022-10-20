import "@testing-library/jest-dom/extend-expect";
import { fireEvent, cleanup, waitFor } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { defineFeature, loadFeature } from "jest-cucumber";
import {
  renderLogin,
  renderForgotPassword,
} from "../../__mocks__/commonSteps";
import ForgotPassword from "../../src/components/organisms/ForgotPassword/forgotPassword";

jest.mock("universal-cookie", () => {
  class MockCookies {
    static result = {};
    get(param) {
      if (param === "username") return "user1@photon.com";

      return MockCookies.result;
    }
    remove() {
      return jest.fn();
    }
    set() {
      return jest.fn();
    }
  }
  return MockCookies;
});

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-1579.feature"
);

defineFeature(feature, (test) => {
  let container
  const mock = new MockAdapter(axios);
  test("EPIC_EPP-44_STORY_EPP-1579 - Verify user able to view inline error message if invalid Email or Phone number to Sync eye exam is  entered", ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch the Marketing Site url", () => { });

    and("user clicks on the Schedule your Eye Exam button", () => { });

    and("user click on Continue as a Guest option", () => { });

    when("user click on Already have an appointment? Sync your appointment information button", async () => {
      container = await renderLogin()
      const syncButton = container.getByText("syncYourAppointmentInformation");
      fireEvent.click(syncButton);
    });

    then("user should see the Email or Phone number", async () => {
      cleanup()
      container = await renderForgotPassword()
      expect(container.getByLabelText(/usernamePlaceHolder/i)).toBeInTheDocument()
    });

    and(/^user provides invalid (.*)$/, (arg0) => {
      const userField = container.getByLabelText(/usernamePlaceHolder/i);
      fireEvent.change(userField, { target: { value: "wrongUser" } });
      expect(userField.value).toEqual("wrongUser");
    });

    and("user should click on submit", async () => {
      container.rerender(
        <ForgotPassword isAppointment={true} />
      );
      expect(
        await waitFor(() =>
          container.getByText(/syncButton/i)
        )
      ).toBeInTheDocument();
      const syncButton = container.getByText(/syncButton/i);
      fireEvent.click(syncButton);
    });

    then(
      "user should see error message Invalid Email or Phone number",
      () => { }
    );
  });
});
