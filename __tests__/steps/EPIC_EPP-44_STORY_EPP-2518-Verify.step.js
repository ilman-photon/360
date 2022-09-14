import { act, fireEvent, render, waitFor } from "@testing-library/react";
import axios from "axios";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import { defineFeature, loadFeature } from "jest-cucumber";
import { Provider } from "react-redux";
import Bio, { getStaticProps } from "../../src/pages/patient/bio";
import store from "../../src/store/store";
const useRouter = jest.spyOn(require("next/router"), "useRouter");
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
  const mock = new MockAdapter(axios);
  const TEST_ID = constants.TEST_ID.BIOGRAPHY_TEST_ID;
  const userData = {
    providerId: "1",
    image: "/doctor.png",
    name: "Paul Wagner Md",
    rating: "5",
    phoneNumber: "8572999989",
    specialties: ["Opthometry", "Opthalmology", "Catarac", "Glaucoma"],
    about:
      "Dr. Esfandiari’s current areas of emphasis include primary eye care, specialty contact lenses, refractive surgery consultation, surgical co-management. Dr. Esfandiari’s knowledge and experience in ophthalmic optics has continually helped patients obtain optimal and healthy vision.show more",
    gender: "Male",
    address: {
      addressLine1: "51 West 51st Street",
      addressLine2: "Floor 3, Suite 320 Midtown",
      city: "Florida",
      state: "FR",
      zipcode: "54231",
    },
    distance: "10 mi",
    language: ["English", "Spanish"],
    networkInsurance: [
      "Blue Cross Blue Shield",
      "Cigna",
      "UnitedHeathcare",
      "Blue Cross Blue Shield 2",
      "Cigna 2",
      "UnitedHeathcare 2",
      "Blue Cross Blue Shield 3",
      "Cigna 3",
      "UnitedHeathcare 3",
    ],
    education: [
      "New England College of Optometry, Doctor of Optometry",
      "University of California, San Diego (Bachelor’s)",
    ],
    membershipsAffiliation: [
      "New England College of Optometry, Doctor of Optometry",
      "University of California, San Diego (Bachelor’s)",
    ],
  };
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
      useRouter.mockReturnValue({
        back: jest.fn(),
      });
      window.scrollTo = jest.fn();
      mock
        .onPost(
          `${window.location.origin}/api/dummy/appointment/biography/getProviderDetails`
        )
        .reply(200, userData);
      const props = await getStaticProps();
      act(() => {
        container = render(
          <Provider store={store}>{Bio.getLayout(<Bio {...props} />)}</Provider>
        );
      });

      await waitFor(() => {
        container.getByTestId(TEST_ID.viewAll);
      });
      expect(container.getByTestId(TEST_ID.viewAll)).toBeInTheDocument();
      act(() => {
        fireEvent.click(container.getByTestId(TEST_ID.viewAll));
      });
      expect(container.getByText(/Cigna 3/i)).toBeInTheDocument();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2518-Verify User should see the following sections of Provider', ({ given, when, then, and }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then('User should navigated to the search screen', () => {
      defaultValidation();
    });

    and('User should fill the location', () => {
      defaultValidation();
    });

    and('User should select the date of appointment', () => {
      defaultValidation();
    });

    and('User should select the purpose of the visit', () => {
      defaultValidation();
    });

    and('User should fill the insurance name', () => {
      defaultValidation();
    });

    when('User clicks on the Search button', () => {
      defaultValidation();
    });

    then('User should see the results on the Schedule Appointments screen', () => {
      defaultValidation();
    });

    and('User should see the selected location, date of appointment, the purpose of visit, and insurance carrier', () => {
      defaultValidation();
    });

    and('User should see the doctor’s name', () => {
      defaultValidation();
    });

    when('User clicks on the doctor’s name', () => {
      defaultValidation();
    });

    then('User should see the short bio of Provider as below:', async (table) => {
      useRouter.mockReturnValue({
        back: jest.fn(),
      });
      window.scrollTo = jest.fn();
      mock
        .onPost(
          `${window.location.origin}/api/dummy/appointment/biography/getProviderDetails`
        )
        .reply(200, userData);
      const props = await getStaticProps();
      act(() => {
        container = render(
          <Provider store={store}>{Bio.getLayout(<Bio {...props} />)}</Provider>
        );
      });

      await waitFor(() => {
        container.getByTestId(TEST_ID.viewAll);
      });
      expect(container.getByTestId(TEST_ID.about)).toBeInTheDocument();
      expect(container.getByTestId(TEST_ID.location)).toBeInTheDocument();
      expect(container.getByTestId(TEST_ID.insurance)).toBeInTheDocument();
      expect(container.getByTestId(TEST_ID.education)).toBeInTheDocument();
      act(() => {
        fireEvent.click(container.getByTestId(TEST_ID.about));
      });
      const providerName = await container.getByText(/About Paul Wagner Md/i);
      expect(providerName.textContent).toEqual("About Paul Wagner Md")

      act(() => {
        fireEvent.click(container.getByTestId(TEST_ID.location));
      });
      const providerLocation = await container.getAllByText(/Locations/i);
      expect(providerLocation[2].textContent).toEqual("Locations")

      act(() => {
        fireEvent.click(container.getByTestId(TEST_ID.insurance));
      });
      const providerInsurance = await container.getAllByText(/In-network insurances/i);
      expect(providerInsurance[0].tagName).toEqual("H3")
      expect(providerInsurance[0].textContent).toEqual("In-network insurances")

      act(() => {
        fireEvent.click(container.getByTestId(TEST_ID.education));
      });
      const providerEducation = await container.getAllByText(/Education/i);
      expect(providerEducation[2].tagName).toEqual("H3")
      expect(providerEducation[2].textContent).toEqual("Education")
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2518-Verify User should see <About> sections of Provider as "Short Bio of the provider with Name and Image" description', ({ given, when, then, and }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then('User should navigated to the search screen', () => {
      defaultValidation();
    });

    and('User should fill the location', () => {
      defaultValidation();
    });

    and('User should select the date of appointment', () => {
      defaultValidation();
    });

    and('User should select the purpose of the visit', () => {
      defaultValidation();
    });

    and('User should fill the insurance name', () => {
      defaultValidation();
    });

    when('User clicks on the Search button', () => {
      defaultValidation();
    });

    then('User should see the results on the Schedule Appointments screen', () => {
      defaultValidation();
    });

    and('User should see the selected location, date of appointment, the purpose of visit, and insurance carrier', () => {
      defaultValidation();
    });

    and('User should see the doctor’s name', () => {
      defaultValidation();
    });

    when('User clicks on the doctor’s name', () => {
      defaultValidation();
    });

    then(/^User should see (.*) sections of Provider as "(.*)" description$/, async (arg0, arg1) => {
      useRouter.mockReturnValue({
        back: jest.fn(),
      });
      window.scrollTo = jest.fn();
      mock
        .onPost(
          `${window.location.origin}/api/dummy/appointment/biography/getProviderDetails`
        )
        .reply(200, userData);
      const props = await getStaticProps();
      act(() => {
        container = render(
          <Provider store={store}>{Bio.getLayout(<Bio {...props} />)}</Provider>
        );
      });

      await waitFor(() => {
        container.getByTestId(TEST_ID.viewAll);
      });

      const providerName = await container.getByText(/About Paul Wagner Md/i);
      expect(providerName.textContent).toEqual("About Paul Wagner Md")
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2518-Verify User should see <Sub-specialities> sections of Provider as "Sub-specialities of the provider (Cataract, Glaucoma etc..)" description', ({ given, when, then, and }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then('User should navigated to the search screen', () => {
      defaultValidation();
    });

    and('User should fill the location', () => {
      defaultValidation();
    });

    and('User should select the date of appointment', () => {
      defaultValidation();
    });

    and('User should select the purpose of the visit', () => {
      defaultValidation();
    });

    and('User should fill the insurance name', () => {
      defaultValidation();
    });

    when('User clicks on the Search button', () => {
      defaultValidation();
    });

    then('User should see the results on the Schedule Appointments screen', () => {
      defaultValidation();
    });

    and('User should see the selected location, date of appointment, the purpose of visit, and insurance carrier', () => {
      defaultValidation();
    });

    and('User should see the doctor’s name', () => {
      defaultValidation();
    });

    when('User clicks on the doctor’s name', () => {
      defaultValidation();
    });

    then(/^User should see (.*) sections of Provider as "(.*)" description$/, async (arg0, arg1) => {
      useRouter.mockReturnValue({
        back: jest.fn(),
      });
      window.scrollTo = jest.fn();
      mock
        .onPost(
          `${window.location.origin}/api/dummy/appointment/biography/getProviderDetails`
        )
        .reply(200, userData);
      const props = await getStaticProps();
      act(() => {
        container = render(
          <Provider store={store}>{Bio.getLayout(<Bio {...props} />)}</Provider>
        );
      });

      await waitFor(() => {
        container.getByTestId(TEST_ID.viewAll);
      });

      const data = await container.getByText(/Specialties/i);
      expect(data.textContent).toEqual("Specialties and Sub-specialties: ")
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2518-Verify User should see <Gender> sections of Provider as "Gender of the provider" description', ({ given, when, then, and }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then('User should navigated to the search screen', () => {
      defaultValidation();
    });

    and('User should fill the location', () => {
      defaultValidation();
    });

    and('User should select the date of appointment', () => {
      defaultValidation();
    });

    and('User should select the purpose of the visit', () => {
      defaultValidation();
    });

    and('User should fill the insurance name', () => {
      defaultValidation();
    });

    when('User clicks on the Search button', () => {
      defaultValidation();
    });

    then('User should see the results on the Schedule Appointments screen', () => {
      defaultValidation();
    });

    and('User should see the selected location, date of appointment, the purpose of visit, and insurance carrier', () => {
      defaultValidation();
    });

    and('User should see the doctor’s name', () => {
      defaultValidation();
    });

    when('User clicks on the doctor’s name', () => {
      defaultValidation();
    });

    then(/^User should see (.*) sections of Provider as "(.*)" description$/, async (arg0, arg1) => {
      useRouter.mockReturnValue({
        back: jest.fn(),
      });
      window.scrollTo = jest.fn();
      mock
        .onPost(
          `${window.location.origin}/api/dummy/appointment/biography/getProviderDetails`
        )
        .reply(200, userData);
      const props = await getStaticProps();
      act(() => {
        container = render(
          <Provider store={store}>{Bio.getLayout(<Bio {...props} />)}</Provider>
        );
      });

      await waitFor(() => {
        container.getByTestId(TEST_ID.viewAll);
      });

      const data = await container.getByText(/Gender/i);
      expect(data.textContent).toEqual("Gender")
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2518-Verify User should see <Languages> sections of Provider as "Languages the provider speaks" description', ({ given, when, then, and }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then('User should navigated to the search screen', () => {
      defaultValidation();
    });

    and('User should fill the location', () => {
      defaultValidation();
    });

    and('User should select the date of appointment', () => {
      defaultValidation();
    });

    and('User should select the purpose of the visit', () => {
      defaultValidation();
    });

    and('User should fill the insurance name', () => {
      defaultValidation();
    });

    when('User clicks on the Search button', () => {
      defaultValidation();
    });

    then('User should see the results on the Schedule Appointments screen', () => {
      defaultValidation();
    });

    and('User should see the selected location, date of appointment, the purpose of visit, and insurance carrier', () => {
      defaultValidation();
    });

    and('User should see the doctor’s name', () => {
      defaultValidation();
    });

    when('User clicks on the doctor’s name', () => {
      defaultValidation();
    });

    then(/^User should see (.*) sections of Provider as "(.*)" description$/, async (arg0, arg1) => {
      useRouter.mockReturnValue({
        back: jest.fn(),
      });
      window.scrollTo = jest.fn();
      mock
        .onPost(
          `${window.location.origin}/api/dummy/appointment/biography/getProviderDetails`
        )
        .reply(200, userData);
      const props = await getStaticProps();
      act(() => {
        container = render(
          <Provider store={store}>{Bio.getLayout(<Bio {...props} />)}</Provider>
        );
      });

      await waitFor(() => {
        container.getByTestId(TEST_ID.viewAll);
      });

      const data = await container.getByText(/Languages/i);
      expect(data.textContent).toEqual("Languages")
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2518-Verify User should see <In-network Insurances> sections of Provider as "Insurances that are in their network" description', ({ given, when, then, and }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then('User should navigated to the search screen', () => {
      defaultValidation();
    });

    and('User should fill the location', () => {
      defaultValidation();
    });

    and('User should select the date of appointment', () => {
      defaultValidation();
    });

    and('User should select the purpose of the visit', () => {
      defaultValidation();
    });

    and('User should fill the insurance name', () => {
      defaultValidation();
    });

    when('User clicks on the Search button', () => {
      defaultValidation();
    });

    then('User should see the results on the Schedule Appointments screen', () => {
      defaultValidation();
    });

    and('User should see the selected location, date of appointment, the purpose of visit, and insurance carrier', () => {
      defaultValidation();
    });

    and('User should see the doctor’s name', () => {
      defaultValidation();
    });

    when('User clicks on the doctor’s name', () => {
      defaultValidation();
    });

    then(/^User should see (.*) sections of Provider as "(.*)" description$/, async (arg0, arg1) => {
      useRouter.mockReturnValue({
        back: jest.fn(),
      });
      window.scrollTo = jest.fn();
      mock
        .onPost(
          `${window.location.origin}/api/dummy/appointment/biography/getProviderDetails`
        )
        .reply(200, userData);
      const props = await getStaticProps();
      act(() => {
        container = render(
          <Provider store={store}>{Bio.getLayout(<Bio {...props} />)}</Provider>
        );
      });

      await waitFor(() => {
        container.getByTestId(TEST_ID.viewAll);
      });

      const providerInsurance = await container.getAllByText(/In-network insurances/i);
      expect(providerInsurance[0].tagName).toEqual("H3")
      expect(providerInsurance[0].textContent).toEqual("In-network insurances")
    });
  });

});
