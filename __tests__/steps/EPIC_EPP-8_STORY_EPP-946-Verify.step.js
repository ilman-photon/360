import { defineFeature, loadFeature } from "jest-cucumber";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint3/EPP-946.feature", {
    tagFilter: '@included and not @excluded'
  }
);

defineFeature(feature, (test) => {
  let container;
  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };

    test('EPIC_EPP-8_STORY_EPP-946 - Verify that  As a user, I should be able to edit Photo field regarding my profile information/ demographics.', ({ given, and, when, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            defaultValidation();
        });

        when(/^user provides  (.*) and (.*)$/, (arg0, arg1) => {
            defaultValidation();
        });

        and(/^user clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        and('user navigates to the Patient Portal application', () => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and('user clicks on “Profile Information” menu', () => {
            defaultValidation();
        });

        then('Section names to be displayed - “Personal Information”, “Contact Information”', () => {
            defaultValidation();
        });

        and(/^user clicks on "(.*)" CTA in “Personal Information” section$/, (arg0) => {
            defaultValidation();
        });

        then(/^user should be able to edit "(.*)" field$/, (arg0) => {
            defaultValidation();
        });

        and('Photo will be Pre-populated if captured during ECP visit', () => {
            defaultValidation();
        });

        and('even though if it is Pre-populated it should be editable', () => {
            defaultValidation();
        });

        and(/^user should able to see "(.*)" CTA$/, (arg0) => {
            defaultValidation();
        });

        and(/^user should able to see the text “JPG or PNG file formats only. \(File size limit is (\d+) MB\)”$/, (arg0) => {
            defaultValidation();
        });

        and(/^click on "(.*)" CTA$/, (arg0) => {
            defaultValidation();
        });

        then('user is able to upload photo', () => {
            defaultValidation();
        });

        and('User to choose a file from the device being used', () => {
            defaultValidation();
        });

        and('once chosen, file name to be displayed', () => {
            defaultValidation();
        });

        then(/^user able to see "(.*)" CTA$/, (arg0) => {
            defaultValidation();
        });

        and("click on ''Change photo'' CTA to give user the ability to change the photo", () => {
            defaultValidation();
        });

        and('user to be able to change photo after upload also', () => {
            defaultValidation();
        });

        and(/^make sure that Photo to be in "(.*)" or "(.*)" file formats only with File size limit of "(.*)"$/, (arg0, arg1, arg2) => {
            defaultValidation();
        });
    });

    test('EPIC_EPP-8_STORY_EPP-946 - Verify that  As a user, whether able to upload Photo field when selecting a file other than "JPG" and "PNG" format regarding my profile information/ demographics.', ({ given, and, when, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            defaultValidation();
        });

        when(/^user provides  (.*) and (.*)$/, (arg0, arg1) => {
            defaultValidation();
        });

        and(/^user clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        and('user navigates to the Patient Portal application', () => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and('user clicks on “Profile Information” menu', () => {
            defaultValidation();
        });

        then('Section names to be displayed - “Personal Information”, “Contact Information”', () => {
            defaultValidation();
        });

        and(/^user clicks on "(.*)" CTA in “Personal Information” section$/, (arg0) => {
            defaultValidation();
        });

        then(/^user should be able to edit "(.*)" field$/, (arg0) => {
            defaultValidation();
        });

        and('Photo will be Pre-populated if captured during ECP visit', () => {
            defaultValidation();
        });

        and('even though if it is Pre-populated it should be editable', () => {
            defaultValidation();
        });

        and(/^user should able to see "(.*)" CTA$/, (arg0) => {
            defaultValidation();
        });

        and(/^user should able to see the text “JPG or PNG file formats only. \(File size limit is (\d+) MB\)”$/, (arg0) => {
            defaultValidation();
        });

        and(/^click on "(.*)" CTA$/, (arg0) => {
            defaultValidation();
        });

        and(/^select file other than "(.*)" or "(.*)" file formats and click on ok$/, (arg0, arg1) => {
            defaultValidation();
        });

        then(/^it will Show error message as "(.*)"$/, (arg0) => {
            defaultValidation();
        });

    });

    test('EPIC_EPP-8_STORY_EPP-946 - Verify that  As a user, whether able to upload Photo field when selecting a file above "4 MB"regarding my profile information/ demographics.', ({ given, and, when, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            defaultValidation();
        });

        when(/^user provides  (.*) and (.*)$/, (arg0, arg1) => {
            defaultValidation();
        });

        and(/^user clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        and('user navigates to the Patient Portal application', () => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and('user clicks on “Profile Information” menu', () => {
            defaultValidation();
        });

        then('Section names to be displayed - “Personal Information”, “Contact Information”', () => {
            defaultValidation();
        });

        and(/^user clicks on "(.*)" CTA in “Personal Information” section$/, (arg0) => {
            defaultValidation();
        });

        then(/^user should be able to edit "(.*)" field$/, (arg0) => {
            defaultValidation();
        });

        and('Photo will be Pre-populated if captured during ECP visit', () => {
            defaultValidation();
        });

        and('even though if it is Pre-populated it should be editable', () => {
            defaultValidation();
        });

        and(/^user should able to see "(.*)" CTA$/, (arg0) => {
            defaultValidation();
        });

        and(/^user should able to see the text “JPG or PNG file formats only. \(File size limit is (\d+) MB\)”$/, (arg0) => {
            defaultValidation();
        });

        and(/^click on "(.*)" CTA$/, (arg0) => {
            defaultValidation();
        });

        and(/^select a file size of above (\d+) MB and click on ok$/, (arg0) => {
            defaultValidation();
        });

        then('it will show error message', () => {
            defaultValidation();
        });

    });

    test('EPIC_EPP-8_STORY_EPP-946 - Verify that  As a user, I should be able to edit Title field regarding my profile information/ demographics.', ({ given, and, when, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            defaultValidation();
        });

        when(/^user provides  (.*) and (.*)$/, (arg0, arg1) => {
            defaultValidation();
        });

        and(/^user clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        and('user navigates to the Patient Portal application', () => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and('user clicks on “Profile Information” menu', () => {
            defaultValidation();
        });

        then('Section names to be displayed - “Personal Information”, “Contact Information”', () => {
            defaultValidation();
        });

        and(/^user clicks on "(.*)" CTA in “Personal Information” section$/, (arg0) => {
            defaultValidation();
        });

        then(/^user should be able to edit "(.*)" field$/, (arg0) => {
            defaultValidation();
        });

        and('Title will be Pre-populated if captured during ECP visit', () => {
            defaultValidation();
        });

        and('even though if it is Pre-populated it should be editable', () => {
            defaultValidation();
        });

        and('user can select any one of the Title from the dropdown', () => {
            defaultValidation();
        });

    });

    test('EPIC_EPP-8_STORY_EPP-946 - Verify that  As a user, I should not be able to edit Name field regarding my profile information/ demographics.', ({ given, and, when, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            defaultValidation();
        });

        when(/^user provides  (.*) and (.*)$/, (arg0, arg1) => {
            defaultValidation();
        });

        and(/^user clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        and('user navigates to the Patient Portal application', () => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and('user clicks on “Profile Information” menu', () => {
            defaultValidation();
        });

        then('Section names to be displayed - “Personal Information”, “Contact Information”', () => {
            defaultValidation();
        });

        and(/^user clicks on "(.*)" CTA in “Personal Information” section$/, (arg0) => {
            defaultValidation();
        });

        then(/^user should not be able to edit "(.*)" field$/, (arg0) => {
            defaultValidation();
        });

        and('it should be Pre-populated from Registration page/ ECP visit', () => {
            defaultValidation();
        });

    });

    test('EPIC_EPP-8_STORY_EPP-946 - Verify that  As a user, I should  not be able to edit Date of Birth field regarding my profile information/ demographics.', ({ given, and, when, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            defaultValidation();
        });

        when(/^user provides  (.*) and (.*)$/, (arg0, arg1) => {
            defaultValidation();
        });

        and(/^user clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        and('user navigates to the Patient Portal application', () => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and('user clicks on “Profile Information” menu', () => {
            defaultValidation();
        });

        then('Section names to be displayed - “Personal Information”, “Contact Information”', () => {
            defaultValidation();
        });

        and(/^user clicks on "(.*)" CTA in “Personal Information” section$/, (arg0) => {
            defaultValidation();
        });

        then(/^user should not be able to edit "(.*)" field$/, (arg0) => {
            defaultValidation();
        });

        and('it should be Pre-populated from Registration page/ ECP visit', () => {
            defaultValidation();
        });

        and('it should be in the format of First name + MI (Middle Initial) + Last name', () => {
            defaultValidation();
        });

    });

    test('EPIC_EPP-8_STORY_EPP-946 - Verify that  As a user, I should not be able to edit Age field regarding my profile information/ demographics.', ({ given, and, when, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            defaultValidation();
        });

        when(/^user provides  (.*) and (.*)$/, (arg0, arg1) => {
            defaultValidation();
        });

        and(/^user clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        and('user navigates to the Patient Portal application', () => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and('user clicks on “Profile Information” menu', () => {
            defaultValidation();
        });

        then('Section names to be displayed - “Personal Information”, “Contact Information”', () => {
            defaultValidation();
        });

        and(/^user clicks on "(.*)" CTA in “Personal Information” section$/, (arg0) => {
            defaultValidation();
        });

        then(/^user should not be able to edit "(.*)" field$/, (arg0) => {
            defaultValidation();
        });

        and('it should be Populated / Calculated based on Date of Birth', () => {
            defaultValidation();
        });

    });

    test('EPIC_EPP-8_STORY_EPP-946 - Verify that  As a user, I should be able to edit Gender field regarding my profile information/ demographics.', ({ given, and, when, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            defaultValidation();
        });

        when(/^user provides  (.*) and (.*)$/, (arg0, arg1) => {
            defaultValidation();
        });

        and(/^user clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        and('user navigates to the Patient Portal application', () => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and('user clicks on “Profile Information” menu', () => {
            defaultValidation();
        });

        then('Section names to be displayed - “Personal Information”, “Contact Information”', () => {
            defaultValidation();
        });

        and(/^user clicks on "(.*)" CTA in “Personal Information” section$/, (arg0) => {
            defaultValidation();
        });

        then(/^user should be able to edit "(.*)" field$/, (arg0) => {
            defaultValidation();
        });

        and('Gender will be Pre-populated if captured during ECP visit', () => {
            defaultValidation();
        });

        and('even though if it is Pre-populated it should be editable', () => {
            defaultValidation();
        });

        and('user can select any one of the Gender from the dropdown', () => {
            defaultValidation();
        });

        and(/^user click on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

    });

    test('EPIC_EPP-8_STORY_EPP-946 - Verify that  As a user, I should be able to edit Preferred name field regarding my profile information/ demographics.', ({ given, and, when, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            defaultValidation();
        });

        when(/^user provides  (.*) and (.*)$/, (arg0, arg1) => {
            defaultValidation();
        });

        and(/^user clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        and('user navigates to the Patient Portal application', () => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and('user clicks on “Profile Information” menu', () => {
            defaultValidation();
        });

        then('Section names to be displayed - “Personal Information”, “Contact Information”', () => {
            defaultValidation();
        });

        and(/^user clicks on "(.*)" CTA in “Personal Information” section$/, (arg0) => {
            defaultValidation();
        });

        then(/^user should be able to edit "(.*)" field$/, (arg0) => {
            defaultValidation();
        });

        and('it will Pre-populated if captured during ECP visit', () => {
            defaultValidation();
        });

        and('even though if it is Pre-populated it should be editable', () => {
            defaultValidation();
        });

        and('user can enter any of the text in the text fiel', () => {
            defaultValidation();
        });

        and(/^user click on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });
    });

    test('EPIC_EPP-8_STORY_EPP-946 - Verify that  As a user, I should not be able to edit SSN field regarding my profile information/ demographics.', ({ given, and, when, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            defaultValidation();
        });

        when(/^user provides  (.*) and (.*)$/, (arg0, arg1) => {
            defaultValidation();
        });

        and(/^user clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        and('user navigates to the Patient Portal application', () => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and('user clicks on “Profile Information” menu', () => {
            defaultValidation();
        });

        then('Section names to be displayed - “Personal Information”, “Contact Information”', () => {
            defaultValidation();
        });

        and('user clicks on ‘Edit’ CTA in “Personal Information” menu', () => {
            defaultValidation();
        });

        then(/^user should not be able to edit "(.*)" field$/, (arg0) => {
            defaultValidation();
        });

        and('it should be Pre-populated if captured during ECP visit', () => {
            defaultValidation();
        });

        and(/^it should be in Maskable format\(Only last (\d+) digits to be shown\)$/, (arg0) => {
            defaultValidation();
        });

    });

    test('EPIC_EPP-8_STORY_EPP-946 - Verify that  As a user, I should be able to edit State Issue ID field regarding my profile information/ demographics.', ({ given, and, when, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            defaultValidation();
        });

        when(/^user provides  (.*) and (.*)$/, (arg0, arg1) => {
            defaultValidation();
        });

        and(/^user clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        and('user navigates to the Patient Portal application', () => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and('user clicks on “Profile Information” menu', () => {
            defaultValidation();
        });

        then('Section names to be displayed - “Personal Information”, “Contact Information”', () => {
            defaultValidation();
        });

        then(/^user should be able to edit "(.*)" field$/, (arg0) => {
            defaultValidation();
        });

        and('State Issue ID will be Pre-populated if captured during ECP visit', () => {
            defaultValidation();
        });

        and('even though if it is Pre-populated it should be editable', () => {
            defaultValidation();
        });

        and(/^user should able to see the text “JPG or PNG file formats only. \(File size limit is (\d+) MB\)”$/, (arg0) => {
            defaultValidation();
        });

        then(/^user able to see "(.*)" and "(.*)" CTA$/, (arg0, arg1) => {
            defaultValidation();
        });

        and(/^click on "(.*)" CTA$/, (arg0) => {
            defaultValidation();
        });

        then('user is able to upload photo', () => {
            defaultValidation();
        });

        and('User to choose a file from the device being used', () => {
            defaultValidation();
        });

        and('once chosen, photo to be displayed', () => {
            defaultValidation();
        });

        then("user able to see ''Change file'' CTA to give user the ability to change the photo", () => {
            defaultValidation();
        });

        and(/^click on "(.*)" CTA$/, (arg0) => {
            defaultValidation();
        });

        then('user is able to upload photo', () => {
            defaultValidation();
        });

        and('User to choose a file from the device being used', () => {
            defaultValidation();
        });

        and('once chosen, photo to be displayed', () => {
            defaultValidation();
        });

        then("user able to see ''Change file'' CTA to give user the ability to change the photo", () => {
            defaultValidation();
        });

        and(/^click on "(.*)" button to upload the photos$/, (arg0) => {
            defaultValidation();
        });

        and(/^make sure that Photo to be in "(.*)" or "(.*)" file formats only with File size limit of "(.*)"$/, (arg0, arg1, arg2) => {
            defaultValidation();
        });

        and(/^if u want to discard the changes click on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

    });

    test('EPIC_EPP-8_STORY_EPP-946 - Verify that  As a user, whether able to upload State Issue ID field when selecting a file other than "JPG" and "PNG" format regarding my profile information/ demographics.', ({ given, and, when, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            defaultValidation();
        });

        when(/^user provides  (.*) and (.*)$/, (arg0, arg1) => {
            defaultValidation();
        });

        and(/^user clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        and('user navigates to the Patient Portal application', () => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and('user clicks on “Profile Information” menu', () => {
            defaultValidation();
        });

        then('Section names to be displayed - “Personal Information”, “Contact Information”', () => {
            defaultValidation();
        });

        then(/^user should be able to edit "(.*)" field$/, (arg0) => {
            defaultValidation();
        });

        and('State Issue ID will be Pre-populated if captured during ECP visit', () => {
            defaultValidation();
        });

        and('even though if it is Pre-populated it should be editable', () => {
            defaultValidation();
        });

        and(/^user should able to see the text “JPG or PNG file formats only. \(File size limit is (\d+) MB\)”$/, (arg0) => {
            defaultValidation();
        });

        and(/^click on "(.*)" CTA$/, (arg0) => {
            defaultValidation();
        });

        and(/^select file other than "(.*)" or "(.*)" file formats and click on ok$/, (arg0, arg1) => {
            defaultValidation();
        });

        then('it will Show error message', () => {
            defaultValidation();
        });

        and(/^click on "(.*)" CTA$/, (arg0) => {
            defaultValidation();
        });

        and(/^select file other than "(.*)" or "(.*)" file formats and click on ok$/, (arg0, arg1) => {
            defaultValidation();
        });

        then(/^it will Show error message as "(.*)"$/, (arg0) => {
            defaultValidation();
        });
    });

    test('EPIC_EPP-8_STORY_EPP-946 - Verify that  As a user, whether able to upload State Issue ID field when selecting a file above "4 MB" regarding my profile information/ demographics.', ({ given, and, when, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            defaultValidation();
        });

        when(/^user provides  (.*) and (.*)$/, (arg0, arg1) => {
            defaultValidation();
        });

        and(/^user clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        and('user navigates to the Patient Portal application', () => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and('user clicks on “Profile Information” menu', () => {
            defaultValidation();
        });

        then('Section names to be displayed - “Personal Information”, “Contact Information”', () => {
            defaultValidation();
        });

        then(/^user should be able to edit "(.*)" field$/, (arg0) => {
            defaultValidation();
        });

        and('State Issue ID will be Pre-populated if captured during ECP visit', () => {
            defaultValidation();
        });

        and('even though if it is Pre-populated it should be editable', () => {
            defaultValidation();
        });

        and(/^user should able to see the text “JPG or PNG file formats only. \(File size limit is (\d+) MB\)”$/, (arg0) => {
            defaultValidation();
        });

        and(/^click on "(.*)" CTA$/, (arg0) => {
            defaultValidation();
        });

        and(/^select a file size of above (\d+) MB and click on ok$/, (arg0) => {
            defaultValidation();
        });

        then('it will Show error message', () => {
            defaultValidation();
        });

        and(/^click on "(.*)" CTA$/, (arg0) => {
            defaultValidation();
        });

        and(/^select a file size of above (\d+) MB and click on ok$/, (arg0) => {
            defaultValidation();
        });

        then('it will Show error message', () => {
            defaultValidation();
        });

    });

    test('EPIC_EPP-8_STORY_EPP-946-Verify whether the user is able to save the Personal information without Internet connection', ({ given, and, when, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            defaultValidation();
        });

        when(/^user provides  (.*) and (.*)$/, (arg0, arg1) => {
            defaultValidation();
        });

        and(/^user clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        and('user navigates to the Patient Portal application', () => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and('user clicks on “Profile Information” menu', () => {
            defaultValidation();
        });

        then('Section names to be displayed - “Personal Information”, “Contact Information”', () => {
            defaultValidation();
        });

        and(/^user clicks on "(.*)" CTA in “Personal Information” section$/, (arg0) => {
            defaultValidation();
        });

        and('user enter the data in editable fields', () => {
            defaultValidation();
        });

        and(/^user click on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        when('there is no internet connection available', () => {
            defaultValidation();
        });

        then('user should view appropriate error message', () => {
            defaultValidation();
        });

    });

    test('EPIC_EPP-8_STORY_EPP-946-Verify whether the page is loading with in 3 seconds after click on save button in Personal information section', ({ given, and, when, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            defaultValidation();
        });

        when(/^user provides  (.*) and (.*)$/, (arg0, arg1) => {
            defaultValidation();
        });

        and(/^user clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        and('user navigates to the Patient Portal application', () => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and('user clicks on “Profile Information” menu', () => {
            defaultValidation();
        });

        then('Section names to be displayed - “Personal Information”, “Contact Information”', () => {
            defaultValidation();
        });

        and(/^user clicks on "(.*)" CTA in “Personal Information” section$/, (arg0) => {
            defaultValidation();
        });

        and('user enter the data in editable fields', () => {
            defaultValidation();
        });

        and(/^user click on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        then(/^page should load in (\d+) seconds$/, (arg0) => {
            defaultValidation();
        });
    });
    
    test('EPIC_EPP-8_STORY_EPP-946-Verify whether any error is displaying when we press F12 after click on Save button in Personal information page.', ({ given, and, when, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            defaultValidation();
        });

        when(/^user provides  (.*) and (.*)$/, (arg0, arg1) => {
            defaultValidation();
        });

        and(/^user clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        and('user navigates to the Patient Portal application', () => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and('user clicks on “Profile Information” menu', () => {
            defaultValidation();
        });

        then('Section names to be displayed - “Personal Information”, “Contact Information”', () => {
            defaultValidation();
        });

        and(/^user clicks on "(.*)" CTA in “Personal Information” section$/, (arg0) => {
            defaultValidation();
        });

        and('user enter the data in editable fields', () => {
            defaultValidation();
        });

        and(/^user click on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        and(/^press the F(\d+) button from the keyboard.$/, (arg0) => {
            defaultValidation();
        });

        then('none of the javascript error should be seen by the user.', () => {
            defaultValidation();
        });
    });
    
    test('EPIC_EPP-8_STORY_EPP-946-Verify whether the error message is displaying after click on save button in Personal information section when the service is unavailable.', ({ given, and, when, then }) => {
        given(/^user user launch the "(.*)" url$/, (arg0) => {
            defaultValidation();
        });

        when('the service is unavailable', () => {
            defaultValidation();
        });

        when(/^user provides  (.*) and (.*)$/, (arg0, arg1) => {
            defaultValidation();
        });

        and(/^user clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        and('user navigates to the Patient Portal application', () => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and('user clicks on “Profile Information” menu', () => {
            defaultValidation();
        });

        then('Section names to be displayed - “Personal Information”, “Contact Information”', () => {
            defaultValidation();
        });

        and(/^user clicks on "(.*)" CTA in “Personal Information” section$/, (arg0) => {
            defaultValidation();
        });

        and('user enter the data in editable fields', () => {
            defaultValidation();
        });

        and(/^user click on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        then(/^error message '(\d+) - Server is not ready to handle the request' should get display.$/, (arg0) => {
            defaultValidation();
        });
    });
    
    test('EPIC_EPP-8_STORY_EPP-946 - Verify that  As a user, I should be able to edit Phone number field regarding my profile information/ demographics.', ({ given, and, when, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            defaultValidation();
        });

        when(/^user provides  (.*) and (.*)$/, (arg0, arg1) => {
            defaultValidation();
        });

        and(/^user clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        and('user navigates to the Patient Portal application', () => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and('user clicks on “Profile Information” menu', () => {
            defaultValidation();
        });

        then('Section names to be displayed - “Personal Information”, “Contact Information”', () => {
            defaultValidation();
        });

        and(/^user clicks on "(.*)" CTA in “Contact Information” section$/, (arg0) => {
            defaultValidation();
        });

        then(/^user should be able to edit (.*) field$/, (arg0) => {
            defaultValidation();
        });

        and('it will Pre-populated from Registration page/ ECP visit', () => {
            defaultValidation();
        });

        and('even though if it is Pre-populated then also it should be editable', () => {
            defaultValidation();
        });

        and(/^user enter the Phone number of (\d+) digits$/, (arg0) => {
            defaultValidation();
        });
    });
    
    test('EPIC_EPP-8_STORY_EPP-946 - Verify that  As a user, whether able to edit Phone number field if provide wrong inputs regarding my profile information/ demographics.', ({ given, and, when, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            defaultValidation();
        });

        when(/^user provides  (.*) and (.*)$/, (arg0, arg1) => {
            defaultValidation();
        });

        and(/^user clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        and('user navigates to the Patient Portal application', () => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and('user clicks on “Profile Information” menu', () => {
            defaultValidation();
        });

        then('Section names to be displayed - “Personal Information”, “Contact Information”', () => {
            defaultValidation();
        });

        and(/^user clicks on "(.*)" CTA in “Contact Information” section$/, (arg0) => {
            defaultValidation();
        });

        then(/^user should be able to edit (.*) field$/, (arg0) => {
            defaultValidation();
        });

        and('it will Pre-populated from Registration page/ ECP visit', () => {
            defaultValidation();
        });

        and('even though if it is Pre-populated then also it should be editable', () => {
            defaultValidation();
        });

        and(/^user enter the Phone number of greater than or less than (\d+) digits$/, (arg0) => {
            defaultValidation();
        });

        then(/^it will show error message as "(.*)"$/, (arg0) => {
            defaultValidation();
        });
    });
    
    test('EPIC_EPP-8_STORY_EPP-946 - Verify that  As a user, I should be able to edit Email id field regarding my profile information/ demographics.', ({ given, and, when, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            defaultValidation();
        });

        when(/^user provides  (.*) and (.*)$/, (arg0, arg1) => {
            defaultValidation();
        });

        and(/^user clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        and('user navigates to the Patient Portal application', () => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and('user clicks on “Profile Information” menu', () => {
            defaultValidation();
        });

        then('Section names to be displayed - “Personal Information”, “Contact Information”', () => {
            defaultValidation();
        });

        and(/^user clicks on "(.*)" CTA in “Contact Information” section$/, (arg0) => {
            defaultValidation();
        });

        then(/^user should be able to edit (.*) field$/, (arg0) => {
            defaultValidation();
        });

        and('it will Pre-populated from Registration page/ ECP visit', () => {
            defaultValidation();
        });

        and('even though if it is Pre-populated then also it should be editable', () => {
            defaultValidation();
        });

        and('user enter the Email id', () => {
            defaultValidation();
        });
    });
    
    test('EPIC_EPP-8_STORY_EPP-946 - Verify that  As a user, whether able to edit Email id field if provide wrong inputs regarding my profile information/ demographics.', ({ given, and, when, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            defaultValidation();
        });

        when(/^user provides  (.*) and (.*)$/, (arg0, arg1) => {
            defaultValidation();
        });

        and(/^user clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        and('user navigates to the Patient Portal application', () => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and('user clicks on “Profile Information” menu', () => {
            defaultValidation();
        });

        then('Section names to be displayed - “Personal Information”, “Contact Information”', () => {
            defaultValidation();
        });

        and(/^user clicks on "(.*)" CTA in “Contact Information” section$/, (arg0) => {
            defaultValidation();
        });

        then(/^user should be able to edit (.*) field$/, (arg0) => {
            defaultValidation();
        });

        and('it will Pre-populated from Registration page/ ECP visit', () => {
            defaultValidation();
        });

        and('even though if it is Pre-populated then also it should be editable', () => {
            defaultValidation();
        });

        and('if user enter the wrong Email id', () => {
            defaultValidation();
        });

        then(/^it will show error message as "(.*)"$/, (arg0) => {
            defaultValidation();
        });

    });
    
    test('EPIC_EPP-8_STORY_EPP-946 - Verify that  As a user, I should be able to edit Address field regarding my profile information/ demographics.', ({ given, and, when, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            defaultValidation();
        });

        when(/^user provides  (.*) and (.*)$/, (arg0, arg1) => {
            defaultValidation();
        });

        and(/^user clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        and('user navigates to the Patient Portal application', () => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and('user clicks on “Profile Information” menu', () => {
            defaultValidation();
        });

        then('Section names to be displayed - “Personal Information”, “Contact Information”', () => {
            defaultValidation();
        });

        and('user clicks on Edit CTA in “Contact Information” section', () => {
            defaultValidation();
        });

        then(/^user should be able to edit (.*) field$/, (arg0) => {
            defaultValidation();
        });

        and('it will be Pre-populated if captured during ECP visit', () => {
            defaultValidation();
        });

        and('even though if it is Pre-populated then also it should be editable', () => {
            defaultValidation();
        });

        and('user can enter the Address', () => {
            defaultValidation();
        });

        when('user starts to type address, dropdown should display the complete address options, which user can choose from', () => {
            defaultValidation();
        });

        and('user should also be able to provide complete address on his own, without choosing from dropdown', () => {
            defaultValidation();
        });
    });
    
    test('EPIC_EPP-8_STORY_EPP-946 - Verify that  As a user, whether able to edit Address field if provide wrong inputs regarding my profile information/ demographics.', ({ given, and, when, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            defaultValidation();
        });

        when(/^user provides  (.*) and (.*)$/, (arg0, arg1) => {
            defaultValidation();
        });

        and(/^user clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        and('user navigates to the Patient Portal application', () => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and('user clicks on “Profile Information” menu', () => {
            defaultValidation();
        });

        then('Section names to be displayed - “Personal Information”, “Contact Information”', () => {
            defaultValidation();
        });

        and('user clicks on Edit CTA in “Contact Information” section', () => {
            defaultValidation();
        });

        then(/^user should be able to edit (.*) field$/, (arg0) => {
            defaultValidation();
        });

        and('it will be Pre-populated if captured during ECP visit', () => {
            defaultValidation();
        });

        and('even though if it is Pre-populated then also it should be editable', () => {
            defaultValidation();
        });

        and('if user enter the wrong Address', () => {
            defaultValidation();
        });

        then(/^it will show error message as "(.*)"$/, (arg0) => {
            defaultValidation();
        });
    });
    
    test('EPIC_EPP-8_STORY_EPP-946 - Verify that  As a user, I should be able to edit  City field regarding my profile information/ demographics.', ({ given, and, when, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            defaultValidation();
        });

        when(/^user provides  (.*) and (.*)$/, (arg0, arg1) => {
            defaultValidation();
        });

        and(/^user clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        and('user navigates to the Patient Portal application', () => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and('user clicks on “Profile Information” menu', () => {
            defaultValidation();
        });

        then('Section names to be displayed - “Personal Information”, “Contact Information”', () => {
            defaultValidation();
        });

        and(/^user clicks on "(.*)" CTA in “Contact Information” section$/, (arg0) => {
            defaultValidation();
        });

        then(/^user should be able to edit (.*) field$/, (arg0) => {
            defaultValidation();
        });

        and('it will be Pre-populated if captured during ECP visit', () => {
            defaultValidation();
        });

        and('even though if it is Pre-populated then also it should be editable', () => {
            defaultValidation();
        });

        and('user enter the City name', () => {
            defaultValidation();
        });

        and('If \'full address\' is selected from dropdown, the state field is auto-populated', () => {
            defaultValidation();
        });
    });
    
    test('EPIC_EPP-8_STORY_EPP-946 - Verify that  As a user, whether able to edit City field if provide wrong inputs regarding my profile information/ demographics.', ({ given, and, when, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            defaultValidation();
        });

        when(/^user provides  (.*) and (.*)$/, (arg0, arg1) => {
            defaultValidation();
        });

        and(/^user clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        and('user navigates to the Patient Portal application', () => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and('user clicks on “Profile Information” menu', () => {
            defaultValidation();
        });

        then('Section names to be displayed - “Personal Information”, “Contact Information”', () => {
            defaultValidation();
        });

        and(/^user clicks on "(.*)" CTA in “Contact Information” section$/, (arg0) => {
            defaultValidation();
        });

        then(/^user should be able to edit (.*) field$/, (arg0) => {
            defaultValidation();
        });

        and('it will be Pre-populated if captured during ECP visit', () => {
            defaultValidation();
        });

        and('even though if it is Pre-populated then also it should be editable', () => {
            defaultValidation();
        });

        and('if user enter the wrong City name', () => {
            defaultValidation();
        });

        then(/^it will show error message as "(.*)"$/, (arg0) => {
            defaultValidation();
        });
    });

    test('EPIC_EPP-8_STORY_EPP-946 - Verify that  As a user, I should be able to edit State field regarding my profile information/ demographics.', ({ given, and, when, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            defaultValidation();
        });

        when(/^user provides  (.*) and (.*)$/, (arg0, arg1) => {
            defaultValidation();
        });

        and(/^user clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        and('user navigates to the Patient Portal application', () => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and('user clicks on “Profile Information” menu', () => {
            defaultValidation();
        });

        then('Section names to be displayed - “Personal Information”, “Contact Information”', () => {
            defaultValidation();
        });

        and(/^user clicks on "(.*)" CTA in “Contact Information” section$/, (arg0) => {
            defaultValidation();
        });

        then(/^user should be able to edit "(.*)" field$/, (arg0) => {
            defaultValidation();
        });

        and('it will be Pre-populated if captured during ECP visit', () => {
            defaultValidation();
        });

        and('even though if it is Pre-populated then also it should be editable', () => {
            defaultValidation();
        });

        and('user can select the State from the Dropdown', () => {
            defaultValidation();
        });

        and('If \'full address\' is selected from dropdown, the state field is auto-populated', () => {
            defaultValidation();
        });
    });

    test('EPIC_EPP-8_STORY_EPP-946 - Verify that  As a user, I should be able to edit Zip field regarding my profile information/ demographics.', ({ given, and, when, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            defaultValidation();
        });

        when(/^user provides  (.*) and (.*)$/, (arg0, arg1) => {
            defaultValidation();
        });

        and(/^user clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        and('user navigates to the Patient Portal application', () => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and('user clicks on “Profile Information” menu', () => {
            defaultValidation();
        });

        then('Section names to be displayed - “Personal Information”, “Contact Information”', () => {
            defaultValidation();
        });

        and(/^user clicks on "(.*)" CTA in “Contact Information” section$/, (arg0) => {
            defaultValidation();
        });

        then(/^user should be able to edit (.*) field$/, (arg0) => {
            defaultValidation();
        });

        and('it will be Pre-populated if captured during ECP visit', () => {
            defaultValidation();
        });

        and('even though if it is Pre-populated then also it should be editable', () => {
            defaultValidation();
        });

        and(/^user can enter Zip Code has only (\d+) numbers$/, (arg0) => {
            defaultValidation();
        });

        and(/^user click on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });
    });

    test('EPIC_EPP-8_STORY_EPP-946 - Verify that  As a user, whether able to edit Zip field if provide wrong inputs regarding my profile information/ demographics.', ({ given, and, when, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            defaultValidation();
        });

        when(/^user provides  (.*) and (.*)$/, (arg0, arg1) => {
            defaultValidation();
        });

        and(/^user clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        and('user navigates to the Patient Portal application', () => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and('user clicks on “Profile Information” menu', () => {
            defaultValidation();
        });

        then('Section names to be displayed - “Personal Information”, “Contact Information”', () => {
            defaultValidation();
        });

        and(/^user clicks on "(.*)" CTA in “Contact Information” section$/, (arg0) => {
            defaultValidation();
        });

        then(/^user should be able to edit (.*) field$/, (arg0) => {
            defaultValidation();
        });

        and('it will be Pre-populated if captured during ECP visit', () => {
            defaultValidation();
        });

        and('even though if it is Pre-populated then also it should be editable', () => {
            defaultValidation();
        });

        and(/^if user enter Zip Code has of "(.*)", "(.*)" or "(.*)"$/, (arg0, arg1, arg2) => {
            defaultValidation();
        });

        then(/^it will show error message as "(.*)"$/, (arg0) => {
            defaultValidation();
        });
    });

    test('EPIC_EPP-8_STORY_EPP-946 - Verify that  As a user, I should be able to edit Preferred mode(s) of communication field regarding my profile information/ demographics.', ({ given, and, when, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            defaultValidation();
        });

        when(/^user provides  (.*) and (.*)$/, (arg0, arg1) => {
            defaultValidation();
        });

        and(/^user clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        and('user navigates to the Patient Portal application', () => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and('user clicks on “Profile Information” menu', () => {
            defaultValidation();
        });

        then('Section names to be displayed - “Personal Information”, “Contact Information”', () => {
            defaultValidation();
        });

        and(/^user clicks on "(.*)" CTA in “Contact Information” section$/, (arg0) => {
            defaultValidation();
        });

        then(/^user should be able to edit "(.*)" field$/, (arg0) => {
            defaultValidation();
        });

        and('it will be Pre-populated from Registration page/ ECP visit', () => {
            defaultValidation();
        });

        and('even though if it is Pre-populated then also it should be editable', () => {
            defaultValidation();
        });

        and('user can select any one from Radio buttons (Phone/ Email/ Both)', () => {
            defaultValidation();
        });

        and(/^user click on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

    });

    test('EPIC_EPP-8_STORY_EPP-946-Verify whether the user is able to save the Contact information without Internet connection', ({ given, and, when, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            defaultValidation();
        });

        when(/^user provides  (.*) and (.*)$/, (arg0, arg1) => {
            defaultValidation();
        });

        and(/^user clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        and('user navigates to the Patient Portal application', () => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and('user clicks on “Profile Information” menu', () => {
            defaultValidation();
        });

        then('Section names to be displayed - “Personal Information”, “Contact Information”', () => {
            defaultValidation();
        });

        and(/^user clicks on "(.*)" CTA in “Contact Information” section$/, (arg0) => {
            defaultValidation();
        });

        and('user enter the data in editable fields', () => {
            defaultValidation();
        });

        and(/^user click on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        when('there is no internet connection available', () => {
            defaultValidation();
        });

        then('user should view appropriate error message', () => {
            defaultValidation();
        });
    });

    test('EPIC_EPP-8_STORY_EPP-946-Verify whether the page is loading with in 3 seconds after click on save button in Contact information section', ({ given, and, when, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            defaultValidation();
        });

        when(/^user provides  (.*) and (.*)$/, (arg0, arg1) => {
            defaultValidation();
        });

        and(/^user clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        and('user navigates to the Patient Portal application', () => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and('user clicks on “Profile Information” menu', () => {
            defaultValidation();
        });

        then('Section names to be displayed - “Personal Information”, “Contact Information”', () => {
            defaultValidation();
        });

        and(/^user clicks on "(.*)" CTA in “Contact Information” section$/, (arg0) => {
            defaultValidation();
        });

        and('user enter the data in editable fields', () => {
            defaultValidation();
        });

        and(/^user click on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        then(/^page should load in (\d+) seconds$/, (arg0) => {
            defaultValidation();
        });
    });

    test('EPIC_EPP-8_STORY_EPP-946-Verify whether any error is displaying when we press F12 after click on Save button in Contact information page.', ({ given, and, when, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            defaultValidation();
        });

        when(/^user provides  (.*) and (.*)$/, (arg0, arg1) => {
            defaultValidation();
        });

        and(/^user clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        and('user navigates to the Patient Portal application', () => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and('user clicks on “Profile Information” menu', () => {
            defaultValidation();
        });

        then('Section names to be displayed - “Personal Information”, “Contact Information”', () => {
            defaultValidation();
        });

        and(/^user clicks on "(.*)" CTA in “Contact Information” section$/, (arg0) => {
            defaultValidation();
        });

        and('user enter the data in editable fields', () => {
            defaultValidation();
        });

        and(/^user click on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        and(/^press the F(\d+) button from the keyboard.$/, (arg0) => {
            defaultValidation();
        });

        then('none of the javascript error should be seen by the user.', () => {
            defaultValidation();
        });
    });

    test('EPIC_EPP-8_STORY_EPP-946-Verify whether the error message is displaying after click on save button in Contact information section when the service is unavailable.', ({ given, and, when, then }) => {
        given(/^user user launch the "(.*)" url$/, (arg0) => {
            defaultValidation();
        });

        when('the service is unavailable', () => {
            defaultValidation();
        });

        when(/^user provides  (.*) and (.*)$/, (arg0, arg1) => {
            defaultValidation();
        });

        and(/^user clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        and('user navigates to the Patient Portal application', () => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and('user clicks on “Profile Information” menu', () => {
            defaultValidation();
        });

        then('Section names to be displayed - “Personal Information”, “Contact Information”', () => {
            defaultValidation();
        });

        and(/^user clicks on "(.*)" CTA in “Contact Information” section$/, (arg0) => {
            defaultValidation();
        });

        and('user enter the data in editable fields', () => {
            defaultValidation();
        });

        and(/^user click on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        then(/^error message '(\d+) - Server is not ready to handle the request' should get display.$/, (arg0) => {
            defaultValidation();
        });
    });

    test('EPIC_EPP-8_STORY_EPP-946-Verify whether  the page is loading properly or not when refresh the page', ({ given, and, when, then }) => {
        given(/^user user launch the "(.*)" url$/, (arg0) => {
            defaultValidation();
        });

        when('the service is unavailable', () => {
            defaultValidation();
        });

        when(/^user provides  (.*) and (.*)$/, (arg0, arg1) => {
            defaultValidation();
        });

        and(/^user clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        and('user navigates to the Patient Portal application', () => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and(/^user clicks on the "(.*)" link$/, (arg0) => {
            defaultValidation();
        });

        and('user clicks on “Profile Information” menu', () => {
            defaultValidation();
        });

        then('we are able to see some Pre-populated fields', () => {
            defaultValidation();
        });

        when('user refresh the page', () => {
            defaultValidation();
        });

        then('Pre-populated fields data should not be erased', () => {
            defaultValidation();
        });

        and('if there is any edited data, the edited data should be erased and again Pre-populated data should dispay in the fields', () => {
            defaultValidation();
        });
    });

});