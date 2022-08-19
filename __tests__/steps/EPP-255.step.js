import { fireEvent, render } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import SetPasswordComponent from "../../src/components/organisms/SetPassword/setPassword";
import { Provider } from "react-redux";
import store from "../../src/store/store";
import Cookies from "universal-cookie";

jest.mock("universal-cookie", () => {
  class MockCookies {
    static result = {};
    get(param) {
      if (param === "username") return "user1@photon.com"

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
  "./__tests__/feature/Patient Portal/Sprint2/EPP-255.feature"
);

defineFeature(feature, (test) => {
  test("EPIC_EPP-2_STORY_EPP-255 - Verify if user able view the to set password screen", () => {});
  test("Verify if user able view the to set password screen", ({
    given,
    when,
    then,
    and,
  }) => {
    let container;
    given("user visited the ECP office", () => {
      expect(true).toBeTruthy();
    });
    and("user provide all details,fill forms and consulted doctor", () => {
      expect(true).toBeTruthy();
    });
    then(
      "System(E360+) has all the required details of the user to onboard him to Patient portal",
      () => {
        expect(true).toBeTruthy();
      }
    );
    and(
      "System (E360+) sends out an Invite with link (active only for 24 hrs) to the user’s preferred mode(s) of communication",
      () => {
        expect(true).toBeTruthy();
      }
    );
    and(
      "user receives an email/text message with a link to their registered email id/ mobile number",
      () => {
        expect(true).toBeTruthy();
      }
    );
    and("user click on the link", () => {
      expect(true).toBeTruthy();
    });
    then("user User lands on “Set Password” screen", () => {
      container = render(
        <Provider store={store}>
          <SetPasswordComponent username={"UserName"} />
        </Provider>
      );
    });
    //   then("User should be able to see the verbiage “Enter a password to setup your account“", () => {});

    //   and("User should view and fill the following fields", () => {
    //     const passwordField = container.getByLabelText("Password");
    //     const confirmPasswordField = container.getByLabelText("Password");
    //     fireEvent.change(passwordField, { target: { value: "password" } });
    //     fireEvent.change(confirmPasswordField, { target: { value: "password" } });
    //     expect(passwordField.value).toEqual("password");
    //     expect(confirmPasswordField.value).toEqual("password");
    //   });

    //   and("System should by default take the email-id of the user as Username", () => {
    //     expect(true).toBeTruthy()
    //   });

    //   and("System by default should mask the entered password along with an option to unmask it", () => {
    //     expect(true).toBeTruthy()
    //   });

    //   and("User should click on ‘Create Account’ CTA", () => {
    //     const login = container.getByRole("button", { name: /Create Account/i });
    //     fireEvent.click(login);
    //   });

    //   and("User should be prompted with inline validation error message “This field is required” when all the required fields are not filled", () => {
    //     expect(true).toBeTruthy()
    //   });

    //   and("Upon successful password set, user should see the message - “Password has been set”", async () => {
    //     expect(true).toBeTruthy()
    //   });

    //   and("If User provided ‘both’ email and phone number as the preferred modes of communication, link should be sent to both. If link is accessed via the 2nd mode of communication, after password being set using 1st mode, a message should be displayed - “Password has been set”", () => {});
    //   expect(true).toBeTruthy()
    // });
  });

  test("EPIC_EPP-2_STORY_EPP-255 - Verify if user able to set the password by click the link receive through Email or phone number", () => {});
  test("Verify if user able to set the password by click the link receive through Email or phone number", ({
    given,
    when,
    then,
    and,
  }) => {
    let container;
    given("user visited the ECP office", () => {
      expect(true).toBeTruthy();
    });
    and("user provide all details,fill forms and consulted doctor", () => {
      expect(true).toBeTruthy();
    });
    then(
      "System(E360+) has all the required details of the user to onboard him to Patient portal",
      () => {
        expect(true).toBeTruthy();
      }
    );
    and(
      "System (E360+) sends out an Invite with link (active only for 24 hrs) to the user’s preferred mode(s) of communication",
      () => {
        expect(true).toBeTruthy();
      }
    );
    and(
      "user receives an email/text message with a link to their registered email id/ mobile number",
      () => {
        expect(true).toBeTruthy();
      }
    );
    and("user click on the link", () => {
      expect(true).toBeTruthy();
    });
    then("user lands on “Set Password” screen", () => {
      container = render(
        <Provider store={store}>
          <SetPasswordComponent username={"UserName"} />
        </Provider>
      );
    });
    and(
      'User should see the verbiage "Enter a password to setup your account"',
      () => {
        expect(true).toBeTruthy();
      }
    );
    and("user should see Email or phone number is auto populated", () => {
      expect(true).toBeTruthy();
    });
    and(
      'user should see password field and confirm password field "Password","Confirm Password"',
      () => {
        const password = container.getByLabelText("Password");
        expect(password).toBeTruthy();

        const confirmPassword = container.getByLabelText("Confirm Password");
        expect(confirmPassword).toBeTruthy();
      }
    );
    when(
      'user provide the same password details to the field "Password","Confirm Password"',
      () => {
        const passwordField = container.getByLabelText("Password");
        const confirmPasswordField =
          container.getByLabelText("Confirm Password");
        fireEvent.change(passwordField, { target: { value: "password" } });
        fireEvent.change(confirmPasswordField, {
          target: { value: "password" },
        });
        expect(passwordField.value).toEqual("password");
        expect(confirmPasswordField.value).toEqual("password");
      }
    );
    and('user click on "Create Account" button', () => {
      const login = container.getByRole("button", { name: /Create Account/i });
      fireEvent.click(login);
    });
    then("user should see the message “Password has been set”", () => {
      setTimeout(() => {
        const passwordSet = container.getByLabelText(/Password has been set/i);
        expect(/Password has been set/i).toEqual(passwordSet.textContent);
      }, 500);
    });
  });

  test('EPIC_EPP-2_STORY_EPP-255 - Verify error message if user not filled the "Password" field', () => {});
  test('Verify error message if user not filled the "Password" field', ({
    given,
    when,
    then,
    and,
  }) => {
    let container;
    given("user visited the ECP office", () => {
      expect(true).toBeTruthy();
    });
    and("user provide all details,fill forms and consulted doctor", () => {
      expect(true).toBeTruthy();
    });
    then(
      "System(E360+) has all the required details of the user to onboard him to Patient portal",
      () => {
        expect(true).toBeTruthy();
      }
    );
    and(
      "System (E360+) sends out an Invite with link (active only for 24 hrs) to the user’s preferred mode(s) of communication",
      () => {
        expect(true).toBeTruthy();
      }
    );
    and(
      "user receives an email/text message with a link to their registered email id/ mobile number",
      () => {
        expect(true).toBeTruthy();
      }
    );
    and("user click on the link", () => {
      expect(true).toBeTruthy();
    });
    then("user lands on “Set Password” screen", () => {
      container = render(
        <Provider store={store}>
          <SetPasswordComponent username={"UserName"} />
        </Provider>
      );
    });
    and(
      'User should see the verbiage "Enter a password to setup your account"',
      () => {
        expect(true).toBeTruthy();
      }
    );
    and("user should see Email or phone number is auto populated", () => {
      expect(true).toBeTruthy();
    });
    and("user should to view and fill the following fields", () => {
      expect(true).toBeTruthy();
    });
    and('user should see the field "Password","Confirm Password"', () => {
      const passwordField = container.getByLabelText("Password");
      const confirmPasswordField = container.getByLabelText("Confirm Password");
      expect(passwordField).toBeTruthy();
      expect(confirmPasswordField).toBeTruthy();
    });
    when('user leave "Password" field blank', () => {
      const passwordField = container.getByLabelText("Password");
      fireEvent.change(passwordField, { target: { value: "" } });
    });
    then("user see the error message “This field is required”", () => {
      setTimeout(() => {
        const inputFieldError = container.getByLabelText(
          /This field is required/i
        );
        expect(inputFieldError).toBeFalsy();
        const login = container.getByRole("button", {
          name: /Create Account/i,
        });
        fireEvent.click(login);
        expect(inputFieldError).toBeTruthy();
        expect(/This field is required/i).toEqual(inputFieldError.textContent);
      }, 500);
    });
  });

  test("EPIC_EPP-2_STORY_EPP-255 - Verify the error message if user enter password mismatch in 'Password' & 'Confirm Password' field", () => {});
  test("Verify the error message if user enter password mismatch in 'Password' & 'Confirm Password' field", ({
    given,
    when,
    then,
    and,
  }) => {
    let container;
    given("user visited the ECP office", () => {
      expect(true).toBeTruthy();
    });
    and("user provide all details,fill forms and consulted doctor", () => {
      expect(true).toBeTruthy();
    });
    then(
      "System(E360+) has all the required details of the user to onboard him to Patient portal",
      () => {
        expect(true).toBeTruthy();
      }
    );
    and(
      "System (E360+) sends out an Invite with link (active only for 24 hrs) to the user’s preferred mode(s) of communication",
      () => {
        expect(true).toBeTruthy();
      }
    );
    and(
      "user receives an email/text message with a link to their registered email id/ mobile number",
      () => {
        expect(true).toBeTruthy();
      }
    );
    and("user click on the link", () => {
      expect(true).toBeTruthy();
    });
    then("user lands on “Set Password” screen", () => {
      container = render(
        <Provider store={store}>
          <SetPasswordComponent username={"UserName"} />
        </Provider>
      );
    });
    and(
      'User should see the verbiage "Enter a password to setup your account"',
      () => {
        expect(true).toBeTruthy();
      }
    );
    and("user should see Email or phone number is auto populated", () => {
      expect(true).toBeTruthy();
    });

    and('user should see "Password" and "Confirm Password" field', () => {
      expect(true).toBeTruthy();
    });

    and("user enter the value 'abcd1234' in Password field", () => {
      const passwordField = container.getByLabelText("Password");
      fireEvent.change(passwordField, { target: { value: "abcd1234" } });
      expect(passwordField.value).toEqual("abcd1234");
    });
    and("user enter the value 'abcd1235' in Confirm password field", () => {
      const confirmPasswordField = container.getByLabelText("Confirm Password");
      fireEvent.change(confirmPasswordField, { target: { value: "abcd1235" } });
      expect(confirmPasswordField.value).toEqual("abcd1235");
    });
    then("user see the error message “Password does not match”", () => {
      const login = container.getByRole("button", { name: /Create Account/i });
      fireEvent.click(login);
      setTimeout(() => {
        const passwordFieldError = container.getByLabelText(
          /Passwords do not match/i
        );
        expect(passwordFieldError).toBeTruthy();
      }, 500);
    });
  });

  test("EPIC_EPP-2_STORY_EPP-255 - Verify the error message if password field not meet password requirement length range from 8 to 20 characters", () => {});
  test("Verify the error message if password field not meet password requirement length range from 8 to 20 characters", ({
    given,
    when,
    then,
    and,
  }) => {
    let container;
    given("user visited the ECP office", () => {
      expect(true).toBeTruthy();
    });
    and("user provide all details,fill forms and consulted doctor", () => {
      expect(true).toBeTruthy();
    });
    then(
      "System(E360+) has all the required details of the user to onboard him to Patient portal",
      () => {
        expect(true).toBeTruthy();
      }
    );
    and(
      "System (E360+) sends out an Invite with link (active only for 24 hrs) to the user’s preferred mode(s) of communication",
      () => {
        expect(true).toBeTruthy();
      }
    );
    and(
      "user receives an email/text message with a link to their registered email id/ mobile number",
      () => {
        expect(true).toBeTruthy();
      }
    );
    and("user click on the link", () => {
      expect(true).toBeTruthy();
    });
    then("user lands on “Set Password” screen", () => {
      let username = "UserName";
      container = render(
        <Provider store={store}>
          <SetPasswordComponent username={username} />
        </Provider>
      );
    });
    and(
      'User should see the verbiage "Enter a password to setup your account"',
      () => {
        expect(true).toBeTruthy();
      }
    );
    and("user should see Email or phone number is auto populated", () => {
      expect(true).toBeTruthy();
    });

    and('user should see "Password" and "Confirm Password" field', () => {
      expect(true).toBeTruthy();
    });

    when("user enter the value 'abcd12#' length less than 8 characters", () => {
      const passwordField = container.getByLabelText("Password");
      fireEvent.change(passwordField, { target: { value: "abcd12#" } });
      expect(passwordField.value).toEqual("abcd12#");
    });
    then(
      'user should see the error message "Password does not meet requirements"',
      () => {
        const register = container.getByRole("button", {
          name: /Create Account/i,
        });
        fireEvent.click(register);
        setTimeout(() => {
          const passwordFieldError = container.getByLabelText(
            /Password does not meet requirements/i
          );
          expect(passwordFieldError).toBeTruthy();
        }, 500);
      }
    );

    when(
      "user enter the value 'abcdefgh1234##1234567' length greater than 20 characters",
      () => {
        const passwordField = container.getByLabelText("Password");
        fireEvent.change(passwordField, { target: { value: "abcd12#" } });
        expect(passwordField.value).toEqual("abcd12#");
      }
    );
    then(
      'user should see the error message "Password does not meet requirements"',
      () => {
        const register = container.getByRole("button", {
          name: /Create Account/i,
        });
        fireEvent.click(register);
        setTimeout(() => {
          const passwordFieldError = container.getByLabelText(
            /Password does not meet requirements/i
          );
          expect(passwordFieldError).toBeTruthy();
        }, 500);
      }
    );

    when(
      "user enter the value '1234567#' without alphabets in Password field",
      () => {
        const passwordField = container.getByLabelText("Password");
        fireEvent.change(passwordField, { target: { value: "1234567#" } });
        expect(passwordField.value).toEqual("1234567#");
      }
    );
    then(
      'user should see the error message "Password does not meet requirements"',
      () => {
        const register = container.getByRole("button", {
          name: /Create Account/i,
        });
        fireEvent.click(register);
        setTimeout(() => {
          const passwordFieldError = container.getByLabelText(
            /Password does not meet requirements/i
          );
          expect(passwordFieldError).toBeTruthy();
        }, 500);
      }
    );

    when(
      "user enter the value 'abcd5678' without special charaters in Password field",
      () => {
        const passwordField = container.getByLabelText("Password");
        fireEvent.change(passwordField, { target: { value: "abcd5678" } });
        expect(passwordField.value).toEqual("abcd5678");
      }
    );
    then(
      'user should see the error message "Password does not meet requirements"',
      () => {
        const register = container.getByRole("button", {
          name: /Create Account/i,
        });
        fireEvent.click(register);
        setTimeout(() => {
          const passwordFieldError = container.getByLabelText(
            /Password does not meet requirements/i
          );
          expect(passwordFieldError).toBeTruthy();
        }, 500);
      }
    );

    when(
      "user enter the value 'abcabcabc1#' 3 or more identical characters consecutively in Password field",
      () => {
        const passwordField = container.getByLabelText("Password");
        fireEvent.change(passwordField, { target: { value: "abcabcabc1#" } });
        expect(passwordField.value).toEqual("abcabcabc1#");
      }
    );
    then(
      'user should see the error message "Password does not meet requirements"',
      () => {
        const register = container.getByRole("button", {
          name: /Create Account/i,
        });
        fireEvent.click(register);
        setTimeout(() => {
          const passwordFieldError = container.getByLabelText(
            /Password does not meet requirements/i
          );
          expect(passwordFieldError).toBeTruthy();
        }, 500);
      }
    );

    when("user enter the value 'abc@gmail.com' in Password field", () => {
      username = "abc@gmail.com";
      const passwordField = container.getByLabelText("Password");
      fireEvent.change(passwordField, { target: { value: "abc@gmail.com" } });
      expect(passwordField.value).toEqual("abc@gmail.com");
    });
    then(
      'user should see the error message "Password does not meet requirements"',
      () => {
        const register = container.getByRole("button", {
          name: /Create Account/i,
        });
        fireEvent.click(register);
        setTimeout(() => {
          const passwordFieldError = container.getByLabelText(
            /Password does not meet requirements/i
          );
          expect(passwordFieldError).toBeTruthy();
        }, 500);
      }
    );

    when("user enter the value '5555551234' in Password field", () => {
      username = "5555551234";
      const passwordField = container.getByLabelText("Password");
      fireEvent.change(passwordField, { target: { value: "5555551234" } });
      expect(passwordField.value).toEqual("5555551234");
    });
    then(
      'user should see the error message "Password does not meet requirements"',
      () => {
        const register = container.getByRole("button", {
          name: /Create Account/i,
        });
        fireEvent.click(register);
        setTimeout(() => {
          const passwordFieldError = container.getByLabelText(
            /Password does not meet requirements/i
          );
          expect(passwordFieldError).toBeTruthy();
        }, 500);
      }
    );
  });
});
