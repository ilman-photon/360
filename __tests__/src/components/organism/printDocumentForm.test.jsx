import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import PrintDocumentForm from "../../../../src/components/organisms/Document/printDocumentForm";

describe("ShareModal", () => {
  let container;
  beforeEach(() => {
    container = render(<PrintDocumentForm title={""} defaultDataValue={{}} />);
  });

  it("Consent to Treat Patient Financial Responsibility Assignment of Benefits",  () => {
    const defaultDataValue = {
      dob: "10/10/2000",
      patientName: "Test Patient",
      signDate: "10/10/2000",
      textInfo: "text"
    }
    const titleText = "Consent to Treat Patient Financial Responsibility Assignment of Benefits"
    container.rerender(<PrintDocumentForm title={titleText} defaultDataValue={defaultDataValue} />);
    expect(container.getAllByText(/Test Patient/i)[0]).toBeInTheDocument()
  });

  it("Consent to Treat Patient Financial Responsibility Assignment of Benefits No Data", () => {
    const defaultDataValue = {}
    const titleText = "Consent to Treat Patient Financial Responsibility Assignment of Benefits"
    container.rerender(<PrintDocumentForm title={titleText} defaultDataValue={defaultDataValue} />);
  });

  it("Medical vs Vision Refractions Prescription Release",  () => {
    const defaultDataValue = {
      textInfo: "Text info",
      sign: false,
      signDate: "10/10/2000",
    }
    const titleText = "Medical vs Vision Refractions Prescription Release"
    container.rerender(<PrintDocumentForm title={titleText} defaultDataValue={defaultDataValue} />);
    expect(container.getAllByText(/Text info/i)[0]).toBeInTheDocument()
  });

  it("Medical vs Vision Refractions Prescription Release No Data",  () => {
    const defaultDataValue = {}
    const titleText = "Medical vs Vision Refractions Prescription Release"
    container.rerender(<PrintDocumentForm title={titleText} defaultDataValue={defaultDataValue} />);
  });

  it("Insurance Communication",  () => {
    const defaultDataValue = {
      textInfo: "Test info",
      sign: true,
      textInfo2: "Test info 2",
      signPrivatePay: true,
    }
    const titleText = "Insurance Communication"
    container.rerender(<PrintDocumentForm title={titleText} defaultDataValue={defaultDataValue} />);
    expect(container.getAllByText(/Test info 2/i)[0]).toBeInTheDocument()
  });

  it("Insurance Communication No Data",  () => {
    const defaultDataValue = {}
    const titleText = "Insurance Communication"
    container.rerender(<PrintDocumentForm title={titleText} defaultDataValue={defaultDataValue} />);
  });

  it("Contact Lens Prescription Release", async () => {
    const defaultDataValue = {
      sign: false,
      signDate: "10/10/2000",
      textInfo: "Text Info",
    }
    const titleText = "Contact Lens Prescription Release"
    container.rerender(<PrintDocumentForm title={titleText} defaultDataValue={defaultDataValue} />);
    expect(container.getAllByText(/Text Info/i)[0]).toBeInTheDocument()
  });

  it("Contact Lens Prescription Release No Data", async () => {
    const defaultDataValue = {}
    const titleText = "Contact Lens Prescription Release"
    container.rerender(<PrintDocumentForm title={titleText} defaultDataValue={defaultDataValue} />);
  });

  it("Authorization to Disclose Information to Those Involved in My Care", () => {
    const defaultDataValue = {
      textInfo: "Text Info",
      textInfo2: "Text Info 2",
      patient1:{
        name: "Test 1",
        relationship: "Mama",
        phoneNumber: "21345678"
      },
      patient2:{
        name: "Test 2",
        relationship: "Papa",
        phoneNumber: "23456789"
      },
      patient3:{
        name: "Test 3",
        relationship: "Aunt",
        phoneNumber: "12345678"
      },
      protectionHealth: "Test Health",
      sign: false,
      signDate: "10/10/2000",
    }
    const titleText = "Authorization to Disclose Information to Those Involved in My Care"
    container.rerender(<PrintDocumentForm title={titleText} defaultDataValue={defaultDataValue} />);
    expect(container.getAllByText(/Mama/i)[0]).toBeInTheDocument()
    expect(container.getAllByText(/Papa/i)[0]).toBeInTheDocument()
    expect(container.getAllByText(/Aunt/i)[0]).toBeInTheDocument()
  });

  it("Authorization to Disclose Information to Those Involved in My Care No Data", () => {
    const defaultDataValue = { }
    const titleText = "Authorization to Disclose Information to Those Involved in My Care"
    container.rerender(<PrintDocumentForm title={titleText} defaultDataValue={defaultDataValue} />);
  });

  it("Consent to Use and Disclosure", () => {
    const defaultDataValue = {
      textInfo: "Test info",
      sign: false,
      signRelationship: "papa",
      signDate: null,
      textInfo2: "Test info 2",
      signCommunication: false,
      signCommunicationRelationship: "aunt",
      signCommunicationDate: null,
      textInfo3: "Test info 3",
      textInfo4: "Test info 4",
      textInfo5: "Test info 5",
      agentName: "Test agent",
      patientName: "Test Name",
      patientDOB: "10/10/2000",
      signOptional: false,
      signOptionalRelationship: "Mama",
      signOptionalDate: null,
      textInfo6: "Test info 6",
    }
    const titleText = "Consent to Use and Disclosure"
    container.rerender(<PrintDocumentForm title={titleText} defaultDataValue={defaultDataValue} />);
    expect(container.getAllByText(/Test info/i)[0]).toBeInTheDocument()
    expect(container.getAllByText(/Test info 2/i)[0]).toBeInTheDocument()
    expect(container.getAllByText(/Test info 3/i)[0]).toBeInTheDocument()
    expect(container.getAllByText(/Test info 4/i)[0]).toBeInTheDocument()
  });

  it("Consent to Use and Disclosure No Data", () => {
    const defaultDataValue = {}
    const titleText = "Consent to Use and Disclosure"
    container.rerender(<PrintDocumentForm title={titleText} defaultDataValue={defaultDataValue} />);
  });

  it("Consent to Treatment of a Minor When Parent/Guardians are Temporarily Unavailable", () => {
    const defaultDataValue = {
      patientName: "patient Name",
      patientName2: "patient Name2",
      guardian: "guradian",
      phoneNumber: "phoneNumber",
      contactEmergency1: "contactEmergency1",
      contactEmergency2: "contactEmergency2",
      emergency1: "emergency1",
      emergency2: "emergency2",
      medicalConcern: "medicalConcern",
      knownAlergies: "knownAlergies",
      insurancePlan: "insurancePlan",
      faterName: "faterName",
      motherName: "motherName",
      fatherBusinessPhone: "fatherBusinessPhone",
      motherBusinessPhone: "motherBusinessPhone",
      fatherHomePhone: "fatherHomePhone",
      motherHomePhone: "motherHomePhone",
      fatherAddress: "fatherAddress",
      motherAddress: "motherAddress",
      fatherCity: "fatherCity",
      motherCity: "motherCity",
      sign: "sign",
      signDate: "signDate",
    }
    const titleText = "Consent to Treatment of a Minor When Parent/Guardians are Temporarily Unavailable"
    container.rerender(<PrintDocumentForm title={titleText} defaultDataValue={defaultDataValue} />);
    expect(container.getAllByText(/faterName/i)[0]).toBeInTheDocument()
    expect(container.getAllByText(/motherName/i)[0]).toBeInTheDocument()
  });

  it("Consent to Treatment of a Minor When Parent/Guardians are Temporarily Unavailable No Data", () => {
    const defaultDataValue = {}
    const titleText = "Consent to Treatment of a Minor When Parent/Guardians are Temporarily Unavailable"
    container.rerender(<PrintDocumentForm title={titleText} defaultDataValue={defaultDataValue} />);
  });
});
