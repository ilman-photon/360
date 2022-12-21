import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../../../src/store/store";
import IntakeFormPage from "../../../src/pages/patient/intake-form";
import { mockStoreAdmin } from "../../../__mocks__/component-mock";
import mediaQuery from "css-mediaquery";
import { dummyFormDocument } from "../../../__mocks__/mockResponse";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

describe("Insurance Communication", () => {
  let container;
  const mock = new MockAdapter(axios);
  beforeEach(async () => {
    mock
      .onGet(`/ecp/patients/forms/getformContent`)
      .reply(200, dummyFormDocument);

    container = render(
      <Provider store={store}>
        {IntakeFormPage.getLayout(<IntakeFormPage />)}
      </Provider>
    );
    await waitFor(() => container.getByText(/Insurance Communication/i));
  });

  function createMatchMedia(width) {
    return (query) => ({
      matches: mediaQuery.match(query, { width }),
      addListener: () => {},
      removeListener: () => {},
    });
  }

  afterAll(() => {
    jest.resetAllMocks();
  });

  test("Navigate to Consent to Treat document", () => {
    const constentToTreat = container.getByText(/Consent to Treat • Patient Financial Responsibility • Assignment of Benefits/i)
    fireEvent.click(constentToTreat)
  });

  test("Navigate to MEDICAL/ VISION EXAMS", () => {
    const medicationVisionExam = container.getByText(/VISION EXAMS/i)
    fireEvent.click(medicationVisionExam)
  });

  test("Navigate to Insurance Communication", () => {
    const insuranceCommunication = container.getByText(/Insurance Communication/i)
    fireEvent.click(insuranceCommunication)
  });
  
  test("Navigate to Contact Lens Prescription", () => {
    const insuranceCommunication = container.getByText(/Contact Lens Prescription/i)
    fireEvent.click(insuranceCommunication)
  });

  test("Navigate to Authorization to Disclose", () => {
    const authorizationDisclose = container.getByText(/Authorization to Disclose/i)
    fireEvent.click(authorizationDisclose)
  });

  test("Navigate to Consent to Use and Disclosure", () => {
    const consentToUse = container.getByText(/Consent to Use and Disclosure/i)
    fireEvent.click(consentToUse)
  });

  test("Navigate to Consent to Treatment of a Minor", () => {
    const consentToTreatment = container.getByText(/Consent to Treatment of a Minor/i)
    fireEvent.click(consentToTreatment)
  });

  test("Navigate to Notice of Privacy Policies document", async () => {
    const consentToTreatment = container.getByText(/Notice of Privacy/i)
    fireEvent.click(consentToTreatment)
  });

  test("Navigate to Consent to Treatment of a Minor", () => {
    window.matchMedia = createMatchMedia("600px");
    localStorage.getItem = jest.fn(mockStoreAdmin)
    const consentToTreatment = container.getByText(/Consent to Use and Disclosure/i)
    fireEvent.click(consentToTreatment)
  });

  test("Navigate to Consent to Treatment of a Minor", () => {
    window.matchMedia = createMatchMedia("600px");
    localStorage.getItem = jest.fn(mockStoreAdmin)
    const consentToTreatment = container.getByText(/Notice of Privacy/i)
    fireEvent.click(consentToTreatment)
  });
});
