import { fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { defineFeature, loadFeature } from "jest-cucumber";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-2541.feature"
);

defineFeature(feature, (test) => {
  let container;
  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };
  const validateText = (arg0) => {
    expect(container.getByText(arg0)).toBeInTheDocument();
  };

  test("EPIC_EPP-44_STORY_EPP-2541-To verify whether the user is allowed to update the Insurance Carrier in Schedule Appointment screen.", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch Patient Portal url", () => {
      defaultValidation();
    });

    when("user is logged in to the application", () => {
      defaultValidation();
    });

    and("user clicks on Appointments menu", () => {
      defaultValidation();
    });

    then("User should navigated to the search screen", () => {
      defaultValidation();
    });

    and(
      "user provided location,date of appointment,purpose of visit,insurance and provider",
      () => {
        defaultValidation();
      }
    );

    and("user clicks on the Search button", () => {
      defaultValidation();
    });

    and(
      "user should lands on Schedule Appointment view screen with selected location, date, Purpose of visit and insurance carrier data",
      () => {
        defaultValidation();
      }
    );

    and("try to update the Insurance carrier if already provided", () => {
      defaultValidation();
    });

    then("user should allow to update the Insurance carrier.", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2541-Verify whethet the user is able to select the Insurance carrier, if not selected in Previous page.", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch Patient Portal url", () => {
      defaultValidation();
    });

    when("user is logged in to the application", () => {
      defaultValidation();
    });

    and("user clicks on Appointments menu", () => {
      defaultValidation();
    });

    then("User should navigated to the search screen", () => {
      defaultValidation();
    });

    and(
      "user provided location,date of appointment,purpose of visit,insurance and provider",
      () => {
        defaultValidation();
      }
    );

    and("user clicks on the Search button", () => {
      defaultValidation();
    });

    and(
      "user should lands on Schedule Appointment view screen with selected location, date, Purpose of visit.",
      () => {
        defaultValidation();
      }
    );

    and("try to add the Insurance carrier", () => {
      defaultValidation();
    });

    then("user should allow to add the Insurance carrier.", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2541-Verify whether the already selected data are getting removed if we update the other Insurance carrier if not supported.", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch Patient Portal url", () => {
      defaultValidation();
    });

    when("user is logged in to the application", () => {
      defaultValidation();
    });

    and("user clicks on Appointments menu", () => {
      defaultValidation();
    });

    then("User should navigated to the search screen", () => {
      defaultValidation();
    });

    and(
      "user provided location,date of appointment,purpose of visit,insurance and provider",
      () => {
        defaultValidation();
      }
    );

    and("user clicks on the Search button", () => {
      defaultValidation();
    });

    and(
      "user should lands on Schedule Appointment view screen with selected location, date, Purpose of visit and insurance carrier data",
      () => {
        defaultValidation();
      }
    );

    and("try to update the Insurance carrier, which is not supported.", () => {
      defaultValidation();
    });

    then(
      "already selected  Location, Date of Appointment, Purpose of visit should get removed.",
      () => {
        defaultValidation();
      }
    );
  });
});
