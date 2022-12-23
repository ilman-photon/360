import { act, fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { defineFeature, loadFeature } from "jest-cucumber";
const useRouter = jest.spyOn(require("next/router"), "useRouter");
import constants from "../../src/utils/constants";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint9/EPP-7619.feature"
);

defineFeature(feature, (test) => {
  let container;
  const { APPOINTMENT_TEST_ID, SEARCH_PROVIDER_TEST_ID } = constants.TEST_ID;
  const mock = new MockAdapter(axios);
  test("EPIC_EPP-40_STORY_EPP-7619 - Verify External user should not be able open the shared prescriptions when link is expired", ({
    given,
    then,
    and,
    when,
  }) => {
    given(
      "external user click on URL on the email that sent by system",
      () => {}
    );

    then(
      "external user should navigated to Access Code to view shared prescriptions",
      () => {}
    );

    and("external user received email containing OTP code", () => {});

    when("external user enter valid OTP code", () => {});

    and("click on Submit button", () => {});

    then("external navigated windows that contains link are expired", () => {});
  });

  test("EPIC_EPP-40_STORY_EPP-7619 - Verify External user should not be able open the shared health record when link is expired", ({
    given,
    then,
    and,
    when,
  }) => {
    given(
      "external user click on URL on the email that sent by system",
      () => {}
    );

    then(
      "external user should navigated to Access Code to view  health record prescriptions",
      () => {}
    );

    and("external user received email containing OTP code", () => {});

    when("external user enter valid OTP code", () => {});

    and("click on Submit button", () => {});

    then("external navigated windows that contains link are expired", () => {});
  });

  test("EPIC_EPP-40_STORY_EPP-7619 - Verify External user should not be able open the shared care plan when link is expired", ({
    given,
    then,
    and,
    when,
  }) => {
    given(
      "external user click on URL on the email that sent by system",
      () => {}
    );

    then(
      "external user should navigated to Access Code to view shared care plan",
      () => {}
    );

    and("external user received email containing OTP code", () => {});

    when("external user enter valid OTP code", () => {});

    and("click on Submit button", () => {});

    then("external navigated windows that contains link are expired", () => {});
  });
});
