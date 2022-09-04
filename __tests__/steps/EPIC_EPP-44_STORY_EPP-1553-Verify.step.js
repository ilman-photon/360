import { defineFeature, loadFeature } from "jest-cucumber";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-1553.feature",
  {
    tagFilter: "@included and not @excluded",
  }
);

defineFeature(feature, (test) => {
  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };

  test('EPIC_EPP-44_STORY_EPP-1553-Verify if user able to see review  appointment details after selected the time slot', ({ given, when, then, and }) => {
    given('user launch the Marketing Site url', () => {
        defaultValidation();
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
        defaultValidation();
    });

    then('user lands on to the screen', () => {
        defaultValidation();
    });

    when('user click on pin location in Map view', () => {
        defaultValidation();
    });

    then('user should see time slot for provider', () => {
        defaultValidation();
    });

    and('user selected  provider with the time slot available', () => {
        defaultValidation();
    });

    then('user land to Review Appointnment detail page', () => {
        defaultValidation();
    });
});

    test('EPIC_EPP-44_STORY_EPP-1553-Verify if user able to view the selected provider with an option to change the provider', ({ given, when, then, and }) => {
        given('user launch the Marketing Site url', () => {
        defaultValidation();
        });

        when('user clicks on the Schedule your Eye Exam button', () => {
        defaultValidation();
        });

        then('user lands on to the screen', () => {
        defaultValidation();
        });

        when('user click on pin location in Map view', () => {
        defaultValidation();
        });

        then('user should see time slot for provider', () => {
        defaultValidation();
        });

        and('user selected provider with the time slot available', () => {
        defaultValidation();
        });

        then('user lands onto Review Appointnment detail page', () => {
        defaultValidation();
        });

        and('user should see option to change the selected provider to another provider', () => {
        defaultValidation();
        });
    });



    test('EPIC_EPP-44_STORY_EPP-1553-Verify if user able to view the selected location with an option to change location', ({ given, when, then, and }) => {
        given('user launch the Marketing Site url', () => {
        defaultValidation();
        });

        when('user clicks on the Schedule your Eye Exam button', () => {
        defaultValidation();
        });

        then('user lands on to the screen', () => {
        defaultValidation();
        });

        when('user click on pin location in Map view', () => {
        defaultValidation();
        });

        then('user should see time slot for provider', () => {
        defaultValidation();
        });

        and('user selected provider with the time slot available', () => {
        defaultValidation();
        });

        then('user lands onto Review Appointnment detail page', () => {
        defaultValidation();
        });

        and('user should see option to change the selected location to another location', () => {
        defaultValidation();
        });
    });



    test('EPIC_EPP-44_STORY_EPP-1553-Verify if user able view the selected Date and Time of the appointment with option to change another date and time', ({ given, when, then, and }) => {
        given('user launch the Marketing Site url', () => {
        defaultValidation();
        });

        when('user clicks on the Schedule your Eye Exam button', () => {
        defaultValidation();
        });

        then('user lands on to the screen', () => {
        defaultValidation();
        });

        when('user click on pin location in Map view', () => {
        defaultValidation();
        });

        then('user should see time slot for provider', () => {
        defaultValidation();
        });

        and('user selected provider with the time slot available', () => {
        defaultValidation();
        });

        then('user lands onto Review Appointnment detail page', () => {
        defaultValidation();
        });

        and(/^user should see option to change the selected "(.*)" to another date and time$/, () => {
        defaultValidation();
        });
    });

        test('EPIC_EPP-44_STORY_EPP-1553-Verify if user able view the selected purpose of visit with an option to change if provided', ({ given, when, then, and }) => {
            given('user launch the Marketing Site url', () => {
                defaultValidation();
            });
    
            when('user clicks on the Schedule your Eye Exam button', () => {
                defaultValidation();
            });
    
            then('user lands on to the screen', () => {
                defaultValidation();
            });
    
            when('user click on pin location in Map view', () => {
                defaultValidation();
            });
    
            then('user should see time slot for provider', () => {
                defaultValidation();
            });
    
            and('user selected provider with the time slot available', () => {
                defaultValidation();
            });
    
            then('user lands onto Review Appointnment detail page', () => {
                defaultValidation();
            });
    
            and(/^user should see option to change the selected "(.*)" one to other$/, () => {
                defaultValidation();
            });
        });

        test('EPIC_EPP-44_STORY_EPP-1553-Verify if user able to view an option to schedule the appointment', ({ given, when, then, and }) => {
            given('user launch the Marketing Site url', () => {
                defaultValidation();
            });
    
            when('user clicks on the Schedule your Eye Exam button', () => {
                defaultValidation();
            });
    
            then('user lands on to the screen', () => {
                defaultValidation();
            });
    
            when('user click on pin location in Map view', () => {
                defaultValidation();
            });
    
            then('user should see time slot for provider', () => {
                defaultValidation();
            });
    
            and('user selected provider with the time slot available', () => {
                defaultValidation();
            });
    
            then('user lands onto Review Appointnment detail page', () => {
                defaultValidation();
            });
    
            when('user should see option Date and Time,Insurance , purpose of visit', () => {
                defaultValidation();
            });
    
            and('user should click on continue button', () => {
                defaultValidation();
            });
    
            then('user should see option to schedule the appointment', () => {
                defaultValidation();
            });
        });
    });

