import { fireEvent, render } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";

const feature = loadFeature(
  "./__tests__/features/Patient Portal/Sprint2/EPP-211.feature", {
    tagFilter: '@included and not @excluded'
  }
);

defineFeature(feature, (test) => {
  test("EPIC_EPP-4_STORY_EPP-211 - Verify if user is not able to login with valid credentials when account is locked.", ({
    given,
    when,
    then,
    and,
  }) => {
    
  });
  test("EPIC_EPP-4_STORY_EPP-211 - Verify if patient user should not be able to login with invalid credentials when my account is locked.", ({
    given,
    when,
    then,
    and,
  }) => {
    
  });
  test("EPIC_EPP-4_STORY_EPP-211 - \"Verify if user not be able to login with Invalid Email or Phone Number & valid Password when account is locked\".", ({
    given,
    when,
    then,
    and,
  }) => {
    
  });
  test("EPIC_EPP-4_STORY_EPP-211 - Verify if user not be able to login with valid Email or Phone Number & Invalid Password when account is locked.", ({
    given,
    when,
    then,
    and,
  }) => {
    
  });
});
