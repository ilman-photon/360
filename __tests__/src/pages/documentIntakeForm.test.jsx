import { act, fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { renderWithProviders } from "../utils/test-util";
import DocumentPage, { getServerSideProps } from "../../../src/pages/patient/document";
import { mockStoreAdmin } from "../../../__mocks__/component-mock";

describe("Document Page", () => {
  let container;
  const mock = new MockAdapter(axios);
  const renderDocumentPage = async (titlePage = "", ) => {
    const contex = {
      query: titlePage
        ? {
            title: titlePage,
          }
        : {},
    };
    const serverProps = await getServerSideProps(contex);
    container = renderWithProviders(
      DocumentPage.getLayout(<DocumentPage {...serverProps.props} />)
    );
    await waitFor(() => container.getByText(/Back to Intake Forms/i));
  };
  
  afterAll(() => {
    jest.resetAllMocks();
  });

  test("Navigate to Consent to Treat document", async () => {
    await renderDocumentPage("Consent to Treat • Patient Financial Responsibility • Assignment of Benefits")
    const constentToTreat = container.getAllByText(/Consent to Treat/i)[0]
    expect(constentToTreat).toBeInTheDocument()

    const save = container.getByTestId("document-save-btn")
    const back = container.getByTestId("document-back-btn")

    fireEvent.click(save)
    fireEvent.click(back)
  });

  test("Navigate to Insurance Communication document", async () => {
    await renderDocumentPage("Insurance Communication")
    const text = container.getByText(/Insurance Communication/i)
    expect(text).toBeInTheDocument()

    const save = container.getByTestId("document-save-btn")
    const back = container.getByTestId("document-back-btn")

    fireEvent.click(save)
    fireEvent.click(back)
  });

  test("Navigate to Contact Lens Prescription Release document", async () => {
    await renderDocumentPage("Contact Lens Prescription Release")
    const text = container.getByText(/Contact Lens/i)
    expect(text).toBeInTheDocument()

    const save = container.getByTestId("document-save-btn")
    const back = container.getByTestId("document-back-btn")

    fireEvent.click(save)
    fireEvent.click(back)
  });

  test("Navigate to Consent to Use and Disclosure Release document", async () => {
    await renderDocumentPage("Consent to Use and Disclosure")
    const text = container.getByText(/Consent to Use/i)
    expect(text).toBeInTheDocument()

    const save = container.getByTestId("document-save-btn")
    const back = container.getByTestId("document-back-btn")

    fireEvent.click(save)
    fireEvent.click(back)
  });

  test("Navigate to Authorization to Disclose Information to Those Involved in My Care document", async () => {
    await renderDocumentPage("Authorization to Disclose Information to Those Involved in My Care")
    const text = container.getByText(/Authorization to Disclose/i)
    expect(text).toBeInTheDocument()

    const save = container.getByTestId("document-save-btn")
    const back = container.getByTestId("document-back-btn")

    fireEvent.click(save)
    fireEvent.click(back)
  });

  test("Navigate to Consent to Treatment of a Minor document", async () => {
    await renderDocumentPage("Consent to Treatment of a Minor When Parent/Guardiansare Temporarily Unavailable")
    const text = container.getByText(/Consent to Treatment of a Minor When/i)
    expect(text).toBeInTheDocument()

    const save = container.getByTestId("document-save-btn")
    const back = container.getByTestId("document-back-btn")

    fireEvent.click(save)
    fireEvent.click(back)
  });

  test("Navigate to MEDICAL/ VISION EXAMS • REFRACTIONS • PRESCRIPTION RELEASE document", async () => {
    await renderDocumentPage("MEDICAL/ VISION EXAMS • REFRACTIONS • PRESCRIPTION RELEASE")
    const text = container.getByText(/VISION EXAMS/i)
    expect(text).toBeInTheDocument()

    const save = container.getByTestId("document-save-btn")
    const back = container.getByTestId("document-back-btn")

    fireEvent.click(save)
    fireEvent.click(back)
  });

  test("Navigate to Notice of Privacy Policies document", async () => {
    await renderDocumentPage("Notice of Privacy Policies")
    const text = container.getAllByText(/Notice of Privacy/i)[0]
    expect(text).toBeInTheDocument()
  });

  test("Navigate to Consent to Treat document Admin user", async () => {
    localStorage.getItem = jest.fn(mockStoreAdmin)
    await renderDocumentPage("Consent to Treat • Patient Financial Responsibility • Assignment of Benefits")
    const constentToTreat = container.getAllByText(/Consent to Treat/i)[0]
    expect(constentToTreat).toBeInTheDocument()

    const edit = container.getByTestId("edit-document-btn")
    fireEvent.click(edit)

    const cancel = container.getByTestId("edit-cancel-btn")
    fireEvent.click(cancel)
    fireEvent.click(edit)
  });

  test("Navigate to Consent to Treat document Admin user", async () => {
    localStorage.getItem = jest.fn(mockStoreAdmin)
    await renderDocumentPage("Insurance Communication")
    const text = container.getByText(/Insurance Communication/i)
    expect(text).toBeInTheDocument()

    const edit = container.getByTestId("edit-document-btn")
    fireEvent.click(edit)

    const save = container.getByTestId("edit-save-btn")
    fireEvent.click(save)
  });

  test("Navigate to Contact Lens Prescription Release document Admin user", async () => {
    localStorage.getItem = jest.fn(mockStoreAdmin)
    await renderDocumentPage("Contact Lens Prescription Release")
    const text = container.getByText(/Contact Lens/i)
    expect(text).toBeInTheDocument()
  });

  test("Navigate to Consent to Use and Disclosure Release document Admin user", async () => {
    localStorage.getItem = jest.fn(mockStoreAdmin)
    await renderDocumentPage("Consent to Use and Disclosure")
    const text = container.getByText(/Consent to Use/i)
    expect(text).toBeInTheDocument()
  });

  test("Navigate to Authorization to Disclose Information to Those Involved in My Care document Admin user", async () => {
    localStorage.getItem = jest.fn(mockStoreAdmin)
    await renderDocumentPage("Authorization to Disclose Information to Those Involved in My Care")
    const text = container.getByText(/Authorization to Disclose/i)
    expect(text).toBeInTheDocument()
  });

  test("Navigate to Consent to Treatment of a Minor document Admin user", async () => {
    localStorage.getItem = jest.fn(mockStoreAdmin)
    await renderDocumentPage("Consent to Treatment of a Minor When Parent/Guardiansare Temporarily Unavailable")
    const text = container.getByText(/Consent to Treatment of a Minor When/i)
    expect(text).toBeInTheDocument()
  });

  test("Navigate to MEDICAL/ VISION EXAMS • REFRACTIONS • PRESCRIPTION RELEASE document Admin user", async () => {
    localStorage.getItem = jest.fn(mockStoreAdmin)
    localStorage.getItem = jest.fn().mockReturnValue('{"communicationMethod":{"email":"patient1@photoninfotech.net","phone":"(977) 623-4567"},"patientId":"98f9404b-6ea8-4732-b14f-9c1a168d8066","userType":"admin"}');
    await renderDocumentPage("MEDICAL/ VISION EXAMS • REFRACTIONS • PRESCRIPTION RELEASE")
    const text = container.getByText(/VISION EXAMS/i)
    expect(text).toBeInTheDocument()
  });
});
