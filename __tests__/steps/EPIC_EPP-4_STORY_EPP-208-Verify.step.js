import { fireEvent, render } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import LoginPage from "../../src/pages/patient/login";
import Login from "../../src/components/organisms/Login/login";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint2/EPP-208.feature", {
    tagFilter: '@included and not @excluded'
  }
);

defineFeature(feature, (test) => {
  test('EPIC_EPP-4_STORY_EPP-208-Verify whether the "Invalid Username or Password" error message is displaying when user provides Invalid Email or Phone Number and Valid Password', ({
    given,
    when,
    then,
    and,
  }) => {
    let container;
    given("user launch the 'XXX' url", () => {
      const mockOnLoginClicked = jest.fn((data, route, callback) => {
        callback(({
          status: "failed",
          message: {
            title: "",
            description: "Invalid Username or Password"
          }
        }))
      })
      container = render(<Login OnLoginClicked={mockOnLoginClicked} />);
    });

    and("user navigates to the Patient Portal application", () => {});

    when("user lands onto “Patient Login” screen", () => {
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });

    and(
      'user provides invalid  "<Email or Phone Number>" and valid "<password>"',
      () => {
        const usernameField = container.getByLabelText("emailUserLabel");
        const passwordField = container.getByLabelText("passwordLabel");
        fireEvent.change(usernameField, { target: { value: "wrongUserName" } });
        fireEvent.change(passwordField, { target: { value: "validPassword" } });
        expect(usernameField.value).not.toEqual("validUsername");
        expect(passwordField.value).toEqual("validPassword");
      }
    );

    and('user clicks on "Login" Button', () => {
      const login = container.getByRole("button", { name: /Login/i });
      fireEvent.click(login);
    });

    then(
      'user should see the error message "Invalid Username or Password"',
      () => {
        // const error = container.getByText("Invalid Username or Password");
        // expect("Invalid Username or Password").toEqual(error.textContent);
      }
    );
  });

  // test('EPIC_EPP-4_STORY_EPP-208-Verify whether the "Invalid Username or Password" error message is displaying when user  provides Valid Email or Phone Number and Invalid Password', ({
  //   given,
  //   when,
  //   then,
  //   and,
  // }) => {
  //   let container;
  //   given("user launch the 'XXX' url", () => {
  //     container = render(<LoginPage />);
  //   });

  //   and("user navigates to the Patient Portal application", () => {});

  //   when("user lands onto “Patient Login” screen", () => {
  //     const title = container.getByText("Patient Login");
  //     expect("Patient Login").toEqual(title.textContent);
  //   });

  //   and(
  //     'user provides valid  "<Email or Phone Number>" and Invalid "<password>"',
  //     () => {
  //       const usernameField = container.getByLabelText("Username");
  //       const passwordField = container.getByLabelText("Password");
  //       fireEvent.change(usernameField, { target: { value: "validUsername" } });
  //       fireEvent.change(passwordField, { target: { value: "wrongPassword" } });
  //       expect(usernameField.value).toEqual("validUsername");
  //       expect(passwordField.value).not.toEqual("validPassword");
  //     }
  //   );

  //   and("user click 'Login' button.", () => {
  //     const login = container.getByRole("button", { name: /Login/i });
  //     fireEvent.click(login);
  //   });

  //   then(
  //     'user should see the error message "Invalid Username or Password"',
  //     () => {
  //       const error = container.getByText("Invalid Username or Password");
  //       expect("Invalid Username or Password").toEqual(error.textContent);
  //     }
  //   );
  // });

  // test('EPIC_EPP-4_STORY_EPP-208-Verify whether the  the "Invalid Username or Password" error message is displaying when user  provides Invalid Email or Phone Number and Invalid Password', ({
  //   given,
  //   when,
  //   then,
  //   and,
  // }) => {
  //   let container;
  //   given("user/admin user launch the 'XXX' url", () => {
  //     container = render(<LoginPage />);
  //   });

  //   and(
  //     "user/ admin user navigates to the Patient Portal application",
  //     () => {}
  //   );

  //   when("user/ admin user lands onto “Patient Login” screen", () => {
  //     const title = container.getByText("Patient Login");
  //     expect("Patient Login").toEqual(title.textContent);
  //   });

  //   and(
  //     'user provides Invalid  "<Email or Phone Number>" and Invalid "<password>"',
  //     () => {
  //       const usernameField = container.getByLabelText("Username");
  //       const passwordField = container.getByLabelText("Password");
  //       fireEvent.change(usernameField, { target: { value: "wrongUsername" } });
  //       fireEvent.change(passwordField, { target: { value: "wrongPassword" } });
  //       expect(usernameField.value).not.toEqual("validUsername");
  //       expect(passwordField.value).not.toEqual("validPassword");
  //     }
  //   );

  //   and("user click 'Login' button.", () => {
  //     const login = container.getByRole("button", { name: /Login/i });
  //     fireEvent.click(login);
  //   });

  //   then(
  //     'user should see the error message "Invalid Username or Password"',
  //     () => {
  //       const error = container.getByText("Invalid Username or Password");
  //       expect("Invalid Username or Password").toEqual(error.textContent);
  //     }
  //   );
  // });

  // test('EPIC_EPP-4_STORY_EPP-208-Verify whether the "Invalid Username or Password" error message is displaying when Admin user provides Valid Email or Phone Number and Invalid Password', ({
  //   given,
  //   when,
  //   then,
  //   and,
  // }) => {
  //   let container;
  //   given("admin user launch the 'XXX' url", () => {
  //     container = render(<LoginPage />);
  //   });

  //   and("admin user navigates to the Patient Portal application", () => {});

  //   when("admin user lands onto “Patient Login” screen", () => {
  //     const title = container.getByText("Patient Login");
  //     expect("Patient Login").toEqual(title.textContent);
  //   });

  //   and(
  //     'admin provides Invalid  "<Email or Phone Number>" and valid "<password>"',
  //     () => {
  //       const usernameField = container.getByLabelText("Username");
  //       const passwordField = container.getByLabelText("Password");
  //       fireEvent.change(usernameField, { target: { value: "wrongUsername" } });
  //       fireEvent.change(passwordField, { target: { value: "validPassword" } });
  //       expect(usernameField.value).not.toEqual("validUsername");
  //       expect(passwordField.value).toEqual("validPassword");
  //     }
  //   );

  //   and('admin user clicks on "Login" Button', () => {
  //     const login = container.getByRole("button", { name: /Login/i });
  //     fireEvent.click(login);
  //   });

  //   then(
  //     'admin user should see the error message "Invalid Username or Password"',
  //     () => {
  //       const error = container.getByText("Invalid Username or Password");
  //       expect("Invalid Username or Password").toEqual(error.textContent);
  //     }
  //   );
  // });

  // test('EPIC_EPP-4_STORY_EPP-208-Verify whether the "Invalid Username or Password" error message is displaying when Admin provides Valid User name and Invalid Password', ({
  //   given,
  //   when,
  //   then,
  //   and,
  // }) => {
  //   let container;
  //   given("admin user launch the 'XXX' url", () => {
  //     container = render(<LoginPage />);
  //   });

  //   and("admin user navigates to the Patient Portal application", () => {});

  //   when("admin user lands onto “Patient Login” screen", () => {
  //     const title = container.getByText("Patient Login");
  //     expect("Patient Login").toEqual(title.textContent);
  //   });

  //   and(
  //     'admin provides E360+ Registered valid  "<Email or Phone Number>" and Invalid "<password>"',
  //     () => {
  //       const usernameField = container.getByLabelText("Username");
  //       const passwordField = container.getByLabelText("Password");
  //       fireEvent.change(usernameField, { target: { value: "validUsername" } });
  //       fireEvent.change(passwordField, { target: { value: "wrongPassword" } });
  //       expect(usernameField.value).toEqual("validUsername");
  //       expect(passwordField.value).not.toEqual("validPassword");
  //     }
  //   );

  //   and('admin user clicks on "Login" Button', () => {
  //     const login = container.getByRole("button", { name: /Login/i });
  //     fireEvent.click(login);
  //   });

  //   then(
  //     'admin user should see the error message "Invalid Username or Password"',
  //     () => {
  //       const error = container.getByText("Invalid Username or Password");
  //       expect("Invalid Username or Password").toEqual(error.textContent);
  //     }
  //   );
  // });

  // test('EPIC_EPP-4_STORY_EPP-208-Verify whether the "Invalid Username or Password" error message is displaying when Admin user  provides Invalid Email or Phone Number and Invalid Password', ({
  //   given,
  //   when,
  //   then,
  //   and,
  // }) => {
  //   let container;
  //   given("admin user launch the 'XXX' url", () => {
  //     container = render(<LoginPage />);
  //   });

  //   and("admin user navigates to the Patient Portal application", () => {});

  //   when("admin user lands onto “Patient Login” screen", () => {
  //     const title = container.getByText("Patient Login");
  //     expect("Patient Login").toEqual(title.textContent);
  //   });

  //   and(
  //     'admin provides E360+ Registered Invalid  "<Email or Phone Number>" and Invalid "<password>"',
  //     () => {
  //       const usernameField = container.getByLabelText("Username");
  //       const passwordField = container.getByLabelText("Password");
  //       fireEvent.change(usernameField, { target: { value: "wrongUsername" } });
  //       fireEvent.change(passwordField, { target: { value: "wrongPassword" } });
  //       expect(usernameField.value).not.toEqual("validUsername");
  //       expect(passwordField.value).not.toEqual("validPassword");
  //     }
  //   );

  //   and('admin user clicks on "Login" Button', () => {
  //     const login = container.getByRole("button", { name: /Login/i });
  //     fireEvent.click(login);
  //   });

  //   then(
  //     'admin user should see the error message "Invalid Username or Password"',
  //     () => {
  //       const error = container.getByText("Invalid Username or Password");
  //       expect("Invalid Username or Password").toEqual(error.textContent);
  //     }
  //   );
  // });
});
