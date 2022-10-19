import { fireEvent, render } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import LoginPage from "../../src/pages/patient/login";
import RegisterPage from "../../src/pages/patient/auth/create-account";
import { Provider } from "react-redux";
import store from "../../src/store/store";
import { TRUE } from "sass";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint2/EPP-250.feature"
);

defineFeature(feature, (test) => {
  const mock = new MockAdapter(axios);
  mock.onGet(`https://api.ipify.org?format=json`).reply(200, { ip: "10.10.10.10" });
  test("EPIC_EPP-2_STORY_EPP-250 - Verify if user able to view the Registration screen", () => { });
  test("Verify if user able to view the Registration screen", ({
    given,
    when,
    then,
    and,
  }) => {
    let container;
    given("user launch the 'XXX' url", () => {
      expect(true).toBeTruthy();
    });

    and("user navigates to the Patient Portal application", () => {
      container = render(
        <Provider store={store}>
          <LoginPage />
        </Provider>
      );
    });

    when("userr lands onto “Patient Login” screen", () => {
      setTimeout(() => {
        const loginTitle = container.getByLabelText(/Patient Login/i);
        expect(/Patient Login/i).toEqual(loginTitle.textContent);
      }, 500);
    });

    and(
      "user should able to view the  Don’t have an account?” verbiage along with 'Create Account' button",
      () => {
        setTimeout(() => {
          const accountitle = container.getByLabelText(
            /Don't have an account?/i
          );
          expect(/Don't have an account?/i).toEqual(accountitle.textContent);
        }, 500);
      }
    );

    when("user clicks on the ‘Create an Account’ button", () => {
      setTimeout(() => {
        const toRegister = container.getByRole("button", {
          name: /Create Account/i,
        });
        expect(toRegister).toBeTruthy();
        fireEvent.click(toRegister);
      }, 500);
    });

    then("user lands onto “User Registration” screen", () => {
      container = render(
        <Provider store={store}>
          <RegisterPage />
        </Provider>
      );
    });

    and('user should see "Register" button', () => {
      const register = container.getByRole("button", { name: /REGISTER/i });
      expect(register).toBeTruthy();
    });

    and(
      'user should see the verbiage "By registering, you accept to our Terms & Conditions and Privacy Policy" below the "Register" CTA',
      () => {
        setTimeout(() => {
          const title = container.getByText(
            "By registering, you agree to our Terms & Conditions and Privacy Policy"
          );
          expect(
            "By registering, you agree to our Terms & Conditions and Privacy Policy"
          ).toEqual(title.textContent);
        }, 500);
      }
    );

    and(
      'user should see verbiage ”Already have an account? with "Login" link',
      () => {
        const login = container.getByRole("link", { name: /Login/i });
        expect(login).toBeTruthy();
      }
    );

    when('user click on "Login" link', () => {
      const login = container.getByRole("link", { name: /Login/i });
      expect(login).toBeTruthy();
    });

    then("user should see the ‘Patient Login’ page", () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-2_STORY_EPP-250 - Verify if user able to Register the account when the "First Name" field not filled', () => { });
  test('Verify if user able to Register the account when the "First Name" field not filled', ({
    given,
    when,
    then,
    and,
  }) => {
    let container;
    given("user launch the 'XXX' url", () => {
      expect(true).toBeTruthy();
    });

    and("user navigates to the Patient Portal application", () => {
      container = render(
        <Provider store={store}>
          <LoginPage />
        </Provider>
      );
    });

    when("userr lands onto “Patient Login” screen", () => {
      expect(true).toBeTruthy();
    });

    and(
      "user should able to view the  Don’t have an account?” verbiage along with 'Create Account' button",
      () => {
        setTimeout(() => {
          const accountitle = container.getByLabelText(
            /Don't have an account?/i
          );
          expect(/Don't have an account?/i).toEqual(accountitle.textContent);
        }, 500);
      }
    );

    when("user clicks on the ‘Create an Account’ button", () => {
      setTimeout(() => {
        const toRegister = container.getByRole("button", {
          name: /Create Account/i,
        });
        expect(toRegister).toBeTruthy();
        fireEvent.click(toRegister);
      }, 500);
    });

    then("user lands onto “User Registration” screen", () => {
      container = render(
        <Provider store={store}>
          <RegisterPage />
        </Provider>
      );
    });

    then(
      "user should see the following fields First Name, Last Name, Date Of Birth, Email, Mobile number, User Name, Password, Preferred mode(s) of communication",
      () => {
        expect(true).toBeTruthy();
      }
    );

    and("user should see ‘Register’ button", () => {
      const register = container.getByRole("button", { name: /REGISTER/i });
      expect(register).toBeTruthy();
    });

    and(
      "User should view the verbiage “By registering, you accept to our Terms & Conditions and Privacy Policy” below the ‘Register’ button",
      () => {
        setTimeout(() => {
          const title = container.getByText(
            "By registering, you agree to our Terms & Conditions and Privacy Policy"
          );
          expect(
            "By registering, you agree to our Terms & Conditions and Privacy Policy"
          ).toEqual(title.textContent);
        }, 500);
      }
    );

    and("user should see the ‘Register’ CTA", () => {
      expect(true).toBeTruthy();
    });

    and(
      'user should see verbiage ”Already have an account? with "Login" link',
      () => {
        const title = container.getByText("Already have an account?");
        expect("Already have an account? Login").toEqual(title.textContent);
      }
    );

    when(
      "user provide the details to the field Last Name, Date Of Birth, Email, Mobile number, User Name, Password, Preferred mode(s) of communication",
      () => {
        const lastnameField = container.getByLabelText(/Last Name/i);
        const emailField = container.getByRole("textbox", { name: "Email" });
        const mobileField = container.getByLabelText(/Mobile Number/i);
        const passwordField = container.getByLabelText("Password");
        const communicationRadio = container.getByRole("radio", { name: /Both/i });
        fireEvent.change(lastnameField, { target: { value: "username" } });
        fireEvent.change(emailField, { target: { value: "a@aa.aa" } });
        fireEvent.change(mobileField, { target: { value: "(123) 456-789" } });
        fireEvent.change(passwordField, { target: { value: "password" } });
        fireEvent.click(communicationRadio);
        expect(lastnameField.value).toEqual("username");
        expect(emailField.value).toEqual("a@aa.aa");
        expect(mobileField.value).toEqual("(123) 456-789");
        expect(passwordField.value).toEqual("password");
        expect(communicationRadio.value).toEqual("both");
      }
    );

    and("user click on 'Register' button", () => {
      const register = container.getByRole("button", { name: /REGISTER/i });
      fireEvent.click(register);
    });

    then(
      'user should see error message “This field is required” under "First Name" field',
      () => {
        setTimeout(() => {
          const inputFieldError = container.getByLabelText(
            /This field is required/i
          );
          expect(inputFieldError).toBeTruthy();
          expect(/This field is required/i).toEqual(
            inputFieldError.textContent
          );
        }, 500);
      }
    );
  });

  test('EPIC_EPP-2_STORY_EPP-250 - Verify if user able to Register the account when the "Last Name" field not filled', () => { });
  test('Verify if user able to Register the account when the "Last Name" field not filled', ({
    given,
    when,
    then,
    and,
  }) => {
    let container;
    given("user launch the 'XXX' url", () => {
      expect(true).toBeTruthy();
    });

    and("user navigates to the Patient Portal application", () => {
      container = render(
        <Provider store={store}>
          <LoginPage />
        </Provider>
      );
    });

    when("userr lands onto “Patient Login” screen", () => {
      expect(true).toBeTruthy();
    });

    and(
      "user should able to view the  Don’t have an account?” verbiage along with 'Create Account' button",
      () => {
        setTimeout(() => {
          const accountitle = container.getByLabelText(
            /Don't have an account?/i
          );
          expect(/Don't have an account?/i).toEqual(accountitle.textContent);
        }, 500);
      }
    );

    when("user clicks on the ‘Create an Account’ button", () => {
      setTimeout(() => {
        const toRegister = container.getByRole("button", {
          name: /Create Account/i,
        });
        expect(toRegister).toBeTruthy();
        fireEvent.click(toRegister);
      }, 500);
    });

    then("user lands onto “User Registration” screen", () => {
      container = render(
        <Provider store={store}>
          <RegisterPage />
        </Provider>
      );
    });

    then(
      "user should see the following fields First Name, Last Name, Date Of Birth, Email, Mobile number, User Name, Password, Preferred mode(s) of communication",
      () => {
        expect(true).toBeTruthy();
      }
    );

    and("user should see ‘Register’ button", () => {
      const register = container.getByRole("button", { name: /REGISTER/i });
      expect(register).toBeTruthy();
    });

    and(
      "User should view the verbiage “By registering, you accept to our Terms & Conditions and Privacy Policy” below the ‘Register’ button",
      () => {
        setTimeout(() => {
          const title = container.getByText(
            "By registering, you agree to our Terms & Conditions and Privacy Policy"
          );
          expect(
            "By registering, you agree to our Terms & Conditions and Privacy Policy"
          ).toEqual(title.textContent);
        }, 500);
      }
    );

    and("user should see the ‘Register’ CTA", () => {
      expect(true).toBeTruthy();
    });

    and(
      'user should see verbiage ”Already have an account? with "Login" link',
      () => {
        const title = container.getByText("Already have an account?");
        expect("Already have an account? Login").toEqual(title.textContent);
      }
    );

    when(
      "user provide the details to the field First Name, Date Of Birth, Email, Mobile number, User Name, Password, Preferred mode(s) of communication",
      () => {
        const firstnameField = container.getByLabelText(/Last Name/i);
        const emailField = container.getByRole("textbox", { name: "Email" });
        const mobileField = container.getByLabelText(/Mobile Number/i);
        const passwordField = container.getByLabelText("Password");
        const communicationRadio = container.getByRole("radio", { name: /Both/i });
        fireEvent.change(firstnameField, { target: { value: "username" } });
        fireEvent.change(emailField, { target: { value: "a@aa.aa" } });
        fireEvent.change(mobileField, { target: { value: "(123) 456-789" } });
        fireEvent.change(passwordField, { target: { value: "password" } });
        fireEvent.click(communicationRadio);
        expect(firstnameField.value).toEqual("username");
        expect(emailField.value).toEqual("a@aa.aa");
        expect(mobileField.value).toEqual("(123) 456-789");
        expect(passwordField.value).toEqual("password");
        expect(communicationRadio.value).toEqual("both");
      }
    );

    and("user click on 'Register' button", () => {
      const register = container.getByRole("button", { name: /REGISTER/i });
      fireEvent.click(register);
    });

    then(
      'user should see error message “This field is required” under "Last Name" field',
      () => {
        setTimeout(() => {
          const inputFieldError = container.getByLabelText(
            /This field is required/i
          );
          expect(inputFieldError).toBeTruthy();
          expect(/This field is required/i).toEqual(
            inputFieldError.textContent
          );
        }, 500);
      });
  });


  test("EPIC_EPP-2_STORY_EPP-250 - Verify if user able to see error message when incorrect format enter in \"Email\" field", () => { })
  test("Verify if user able to see error message when incorrect format enter in \"Email\" field", ({
    given,
    when,
    then,
    and,
  }) => {
    let container;
    given("user launch the 'XXX' url", () => {
      expect(true).toBeTruthy()
    });

    and("user navigates to the Patient Portal application", () => {
      container = render(
        <Provider store={store}>
          <LoginPage />
        </Provider>);
    });

    when("userr lands onto “Patient Login” screen", () => {
      expect(true).toBeTruthy()
    });

    and("user should able to view the  Don’t have an account?” verbiage along with 'Create Account' button", () => {
      setTimeout(() => {
        const accountitle = container.getByLabelText(/Don't have an account?/i)
        expect(/Don't have an account?/i).toEqual(accountitle.textContent);
      }, 500);
    });

    when("user clicks on the ‘Create an Account’ button", () => {
      setTimeout(() => {
        const toRegister = container.getByRole("button", { name: /Create Account/i });
        expect(toRegister).toBeTruthy()
        fireEvent.click(toRegister)
      }, 500);
    });

    then("user lands onto “User Registration” screen", () => {
      container = render(
        <Provider store={store}>
          <RegisterPage />
        </Provider>);
    });

    then("user should see the following fields First Name, Last Name, Date Of Birth, Email, Mobile number, User Name, Password, Preferred mode(s) of communication", () => {
      expect(true).toBeTruthy()
    });

    and("user should see ‘Register’ button", () => {
      const register = container.getByRole("button", { name: /REGISTER/i });
      expect(register).toBeTruthy()
    });

    and("User should view the verbiage “By registering, you accept to our Terms & Conditions and Privacy Policy” below the ‘Register’ button", () => {
      setTimeout(() => {
        const title = container.getByText("By registering, you agree to our Terms & Conditions and Privacy Policy");
        expect("By registering, you agree to our Terms & Conditions and Privacy Policy").toEqual(title.textContent);
      }, 500);
    });




    when("user enter invalid format in Email field", () => {
      const emailField = container.getByRole('textbox', { name: 'Email' })
      fireEvent.change(emailField, { target: { value: "invalid@email" } });
      expect(emailField.value).toEqual("invalid@email");

      const register = container.getByRole("button", { name: /REGISTER/i });
      fireEvent.click(register);
    });

    then("user should see the error message “Incorrect email format” under \"Email\" field", () => {
      setTimeout(() => {
        const emailFieldError = container.getByLabelText(/Incorrect email format/i)
        expect(emailFieldError).toBeTruthy()
        expect(/Incorrect email format/i).toEqual(emailFieldError.textContent);
      }, 500);
    });
  });
});
