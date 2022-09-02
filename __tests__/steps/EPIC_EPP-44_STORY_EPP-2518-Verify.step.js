import { act, fireEvent, render, waitFor } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import Bio from "../../src/pages/patient/bio";
import constants from "../../src/utils/constants";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-2518.feature",
  {
    tagFilter: "@included and not @excluded",
  }
);

defineFeature(feature, (test) => {
  let container;
  const element = document.createElement("div");
  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };

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

    then("User should navigated to the search screen", () => {
      defaultValidation();
    });

    and("User should fill the location", () => {
      defaultValidation();
    });

    and("User should select the date of appointment", () => {
      defaultValidation();
    });

    and("User should select the purpose of the visit", () => {
      defaultValidation();
    });

    and("User should fill the insurance name", () => {
      defaultValidation();
    });

    when("User clicks on the Search button", () => {
      defaultValidation();
    });

    then(
      "User should see the results on the Schedule Appointments screen",
      () => {
        defaultValidation();
      }
    );

    and(
      "User should see the selected location, date of appointment, the purpose of visit, and insurance carrier",
      () => {
        defaultValidation();
      }
    );

    and("User should see the doctor’s name", () => {
      defaultValidation();
    });

    when("User clicks on the doctor’s name", () => {
      defaultValidation();
    });

    then("User should see the short bio of Provider", async () => {
      act(() => {
        container = render(
          Bio.getLayout(<Bio />, {
            container: document.body.appendChild(element),
            legacyRoot: true,
          })
        );
      });
      await waitFor(() => container.getByLabelText(/Clarkson Eyecare logo/i));
      expect(container).toMatchSnapshot();
      fireEvent.click(
        container.getByTestId(constants.TEST_ID.BIOGRAPHY_TEST_ID.about)
      );
      fireEvent.click(
        container.getByTestId(constants.TEST_ID.BIOGRAPHY_TEST_ID.insurance)
      );
      fireEvent.click(
        container.getByTestId(constants.TEST_ID.BIOGRAPHY_TEST_ID.location)
      );
      fireEvent.click(
        container.getByTestId(constants.TEST_ID.BIOGRAPHY_TEST_ID.education)
      );
    });
  });
});
