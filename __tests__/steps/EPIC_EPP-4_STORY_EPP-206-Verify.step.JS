import { fireEvent, render } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import LoginPage from "../../src/pages/patient/login";

const feature = loadFeature(
  "./__tests__/features/Patient Portal/Sprint2/EPP-207.feature"
);

defineFeature(feature, (test) => {
    //EPP-913
  test("EPIC_EPP-4_STORY_EPP-206-Verify whether the user/admin user is able to see the Patient Login page with Email or phone number & Password fields", ({
    given,
    when,
    then,
    and,
  }) => {
    let container;
    given("user/admin user launch the 'XXX' url", () => {
      container = render(<LoginPage />);
    });

    and("user/ admin user navigates to the Patient Portal application", () => {});

    when("user/ admin user lands onto “Patient Login” screen", () => {
      const title = container.getByText("Patient Login");
      expect("Patient Login").toEqual(title.textContent);
    });
    then("user/ admin user should be able to view Email or phone number & Password fields", () => {
      // expect(props.OnLoginClicked).toBeCalledTimes(1);
    });
  });
  //EPP-914
  test("EPIC_EPP-4_STORY_EPP-206-Verify whether the Password is getting mask when user/admin user typing the Password.", ({
    given,
    when,
    then,
    and,
  }) => {
    let container;
    given("user/admin user launch the 'XXX' url	", () => {
      container = render(<LoginPage />);
    });

    and("user/ admin user navigates to the Patient Portal application", () => {});

    when("user/ admin user lands onto “Patient Login” screen", () => {
      const title = container.getByText("Patient Login");
      expect("Patient Login").toEqual(title.textContent);
    });
    and(
        'user/admin user provides "<Email or Phone Number>" and "<password>"',
        () => {
          const usernameField = container.getByLabelText("Username");
          const passwordField = container.getByLabelText("Password");
          fireEvent.change(usernameField, { target: { value: "username" } });
          fireEvent.change(passwordField, { target: { value: "password" } });
          expect(usernameField.value).toEqual("username");
          expect(passwordField.value).toEqual("password");
        }
      );
    then("entered password should be masked.", () => {
      // expect(props.OnLoginClicked).toBeCalledTimes(1);
    });
  });
  //EPP-915
    test("EPIC_EPP-4_STORY_EPP-206-Verify whether the Password has the unmask option when user/admin user  typing the Password.", ({
        given,
        when,
        then,
        and,
    }) => {
        let container;
        given("user/admin user launch the 'XXX' url		", () => {
        container = render(<LoginPage />);
        });

        and("user/ admin user navigates to the Patient Portal application", () => {});

        when("user/ admin user lands onto “Patient Login” screen", () => {
        const title = container.getByText("Patient Login");
        and(" user/admin user provides username and password", () => {});
        
        then("entered password should be masked.", () => {
            // expect(props.OnLoginClicked).toBeCalledTimes(1);
            });
        and(" user/admin user should view unmask option", () => {});
        when(' user/admin user click the Unmask icon', () => {
            accessGranted = passwordValidator.validatePassword('1234');
          });
        then('enterered password should get visible to the user/admin user', () => {
        expect(accessGranted).toBe(true);
        });
        expect("Patient Login").toEqual(title.textContent);
        });
        then("entered password should be masked.", () => {
        // expect(props.OnLoginClicked).toBeCalledTimes(1);
        });
    });
    //EPP-916
    test("EPIC_EPP-4_STORY_EPP-206-Verify whether the user is able to see the Patient Login page with Login button, Continue as  a guest button, Don’t have an account?” verbiage along with ‘Create Account button and Forgot password link.", ({
        given,
        when,
        then,
        and,
    }) => {
        let container;
        given("user user launch the 'XXX' url", () => {
        container = render(<LoginPage />);
        });

        and("user navigates to the Patient Portal application", () => {});

        when("user lands onto “Patient Login” screen", () => {
            then("entered password should be masked.", () => {
                // expect(props.OnLoginClicked).toBeCalledTimes(1);
                });
        const title = container.getByText("Patient Login");
        and(" user/admin user provides username and password", () => {});
        then("entered password should be masked.", () => {
            // expect(props.OnLoginClicked).toBeCalledTimes(1);
            });
        expect("Patient Login").toEqual(title.textContent);
        });
        then("entered password should be masked.", () => {
        // expect(props.OnLoginClicked).toBeCalledTimes(1);
        });
    });
     //EPP-918
  test("EPIC_EPP-4_STORY_EPP-206-Verify whether the user/admin user is able to see the Patient Login page with Email or phone number & Password fields", ({
    given,
    when,
    then,
    and,
  }) => {
    let container;
    given("user/admin user launch the 'XXX' url", () => {
      container = render(<LoginPage />);
    });

    and("user/ admin user navigates to the Patient Portal application", () => {});

    when("user/ admin user lands onto “Patient Login” screen", () => {
      const title = container.getByText("Patient Login");
      expect("Patient Login").toEqual(title.textContent);
    });
    then("user/ admin user should be able to view Email or phone number & Password fields", () => {
      // expect(props.OnLoginClicked).toBeCalledTimes(1);
    });
  });
   //EPP-913
   test("EPIC_EPP-4_STORY_EPP-206-Verify whether the user/admin user is able to see the Patient Login page with Email or phone number & Password fields", ({
    given,
    when,
    then,
    and,
  }) => {
    let container;
    given("user/admin user launch the 'XXX' url", () => {
      container = render(<LoginPage />);
    });

    and("user/ admin user navigates to the Patient Portal application", () => {});

    when("user/ admin user lands onto “Patient Login” screen", () => {
      const title = container.getByText("Patient Login");
      expect("Patient Login").toEqual(title.textContent);
    });
    then("user/ admin user should be able to view Email or phone number & Password fields", () => {
      // expect(props.OnLoginClicked).toBeCalledTimes(1);
    });
  });
   //EPP-919
   test("EPIC_EPP-4_STORY_EPP-206-Verify whether the user/admin user is able to see the Patient Login page with Email or phone number & Password fields", ({
    given,
    when,
    then,
    and,
  }) => {
    let container;
    given("user/admin user launch the 'XXX' url", () => {
      container = render(<LoginPage />);
    });

    and("user/ admin user navigates to the Patient Portal application", () => {});

    when("user/ admin user lands onto “Patient Login” screen", () => {
      const title = container.getByText("Patient Login");
      expect("Patient Login").toEqual(title.textContent);
    });
    then("user/ admin user should be able to view Email or phone number & Password fields", () => {
      // expect(props.OnLoginClicked).toBeCalledTimes(1);
    });
  });
   //EPP-920
   test("EPIC_EPP-4_STORY_EPP-206-Verify whether the user/admin user is able to see the Patient Login page with Email or phone number & Password fields", ({
    given,
    when,
    then,
    and,
  }) => {
    let container;
    given("user/admin user launch the 'XXX' url", () => {
      container = render(<LoginPage />);
    });

    and("user/ admin user navigates to the Patient Portal application", () => {});

    when("user/ admin user lands onto “Patient Login” screen", () => {
      const title = container.getByText("Patient Login");
      expect("Patient Login").toEqual(title.textContent);
    });
    then("user/ admin user should be able to view Email or phone number & Password fields", () => {
      // expect(props.OnLoginClicked).toBeCalledTimes(1);
    });
  });
   //EPP-921
   test("EPIC_EPP-4_STORY_EPP-206-Verify whether the user/admin user is able to see the Patient Login page with Email or phone number & Password fields", ({
    given,
    when,
    then,
    and,
  }) => {
    let container;
    given("user/admin user launch the 'XXX' url", () => {
      container = render(<LoginPage />);
    });

    and("user/ admin user navigates to the Patient Portal application", () => {});

    when("user/ admin user lands onto “Patient Login” screen", () => {
      const title = container.getByText("Patient Login");
      expect("Patient Login").toEqual(title.textContent);
    });
    then("user/ admin user should be able to view Email or phone number & Password fields", () => {
      // expect(props.OnLoginClicked).toBeCalledTimes(1);
    });
  });
   //EPP-923
   test("EPIC_EPP-4_STORY_EPP-206-Verify whether the user/admin user is able to see the Patient Login page with Email or phone number & Password fields", ({
    given,
    when,
    then,
    and,
  }) => {
    let container;
    given("user/admin user launch the 'XXX' url", () => {
      container = render(<LoginPage />);
    });

    and("user/ admin user navigates to the Patient Portal application", () => {});

    when("user/ admin user lands onto “Patient Login” screen", () => {
      const title = container.getByText("Patient Login");
      expect("Patient Login").toEqual(title.textContent);
    });
    then("user/ admin user should be able to view Email or phone number & Password fields", () => {
      // expect(props.OnLoginClicked).toBeCalledTimes(1);
    });
  });
   //EPP-EPP-927
   test("EPIC_EPP-4_STORY_EPP-206-Verify whether the user/admin user is able to see the Patient Login page with Email or phone number & Password fields", ({
    given,
    when,
    then,
    and,
  }) => {
    let container;
    given("user/admin user launch the 'XXX' url", () => {
      container = render(<LoginPage />);
    });

    and("user/ admin user navigates to the Patient Portal application", () => {});

    when("user/ admin user lands onto “Patient Login” screen", () => {
      const title = container.getByText("Patient Login");
      expect("Patient Login").toEqual(title.textContent);
    });
    then("user/ admin user should be able to view Email or phone number & Password fields", () => {
      // expect(props.OnLoginClicked).toBeCalledTimes(1);
    });
  });
   //EPP-1119
   test("EPIC_EPP-4_STORY_EPP-206-Verify whether the user/admin user is able to see the Patient Login page with Email or phone number & Password fields", ({
    given,
    when,
    then,
    and,
  }) => {
    let container;
    given("user/admin user launch the 'XXX' url", () => {
      container = render(<LoginPage />);
    });

    and("user/ admin user navigates to the Patient Portal application", () => {});

    when("user/ admin user lands onto “Patient Login” screen", () => {
      const title = container.getByText("Patient Login");
      expect("Patient Login").toEqual(title.textContent);
    });
    then("user/ admin user should be able to view Email or phone number & Password fields", () => {
      // expect(props.OnLoginClicked).toBeCalledTimes(1);
    });
  });
   //EPP-1120
   test("EPIC_EPP-4_STORY_EPP-206-Verify whether the user/admin user is able to see the Patient Login page with Email or phone number & Password fields", ({
    given,
    when,
    then,
    and,
  }) => {
    let container;
    given("user/admin user launch the 'XXX' url", () => {
      container = render(<LoginPage />);
    });

    and("user/ admin user navigates to the Patient Portal application", () => {});

    when("user/ admin user lands onto “Patient Login” screen", () => {
      const title = container.getByText("Patient Login");
      expect("Patient Login").toEqual(title.textContent);
    });
    then("user/ admin user should be able to view Email or phone number & Password fields", () => {
      // expect(props.OnLoginClicked).toBeCalledTimes(1);
    });
  });
   //EPP-1121
   test("EPIC_EPP-4_STORY_EPP-206-Verify whether the user/admin user is able to see the Patient Login page with Email or phone number & Password fields", ({
    given,
    when,
    then,
    and,
  }) => {
    let container;
    given("user/admin user launch the 'XXX' url", () => {
      container = render(<LoginPage />);
    });

    and("user/ admin user navigates to the Patient Portal application", () => {});

    when("user/ admin user lands onto “Patient Login” screen", () => {
      const title = container.getByText("Patient Login");
      expect("Patient Login").toEqual(title.textContent);
    });
    then("user/ admin user should be able to view Email or phone number & Password fields", () => {
      // expect(props.OnLoginClicked).toBeCalledTimes(1);
    });
  });
   //EPP-1141
   test("EPIC_EPP-4_STORY_EPP-206-Verify whether the user/admin user is able to see the Patient Login page with Email or phone number & Password fields", ({
    given,
    when,
    then,
    and,
  }) => {
    let container;
    given("user/admin user launch the 'XXX' url	", () => {
      container = render(<LoginPage />);
    });

    when("user/ admin user navigates to the Patient Portal application", () => {
      const title = container.getByText("Patient Login");
    });
    then("user/ admin user should view appropriate error message", () => {
      // expect(props.OnLoginClicked).toBeCalledTimes(1);
    });
  });
});
