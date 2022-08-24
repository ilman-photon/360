import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactInformation from "../../../../src/components/organisms/ContactInformation/contactInformation";

window.scrollTo = jest.fn();

describe("ContactInformation Components", () => {
  let container;
  const mockUserdata = {
    address: "645 Benedict Cliff",
    age: 63,
    city: "Daphneeshire",
    dob: "2022-08-18T13:08:18.012Z",
    email: "Justus4@gmail.com",
    firstName: "Karlie",
    gender: "Transgender",
    issuedCardBack: "https://loremflickr.com/275/173",
    issuedCardFront: "https://loremflickr.com/275/173",
    lastName: "Ernser",
    mobile: "(706) 509-6731",
    name: "Rupert Jerde",
    preferredCommunication: "email",
    preferredName: "---",
    profilePhoto: "https://loremflickr.com/640/480",
    ssn: 3777306119,
    state: "South Dakota",
    title: "Mrs.",
    zip: "03245",
  };

  beforeEach(async () => {
    const mockCallBack = jest.fn();
    container = render(
      <ContactInformation
        isEditing={false}
        userData={mockUserdata}
        OnEditClicked={mockCallBack}
        OnCancelEditClicked={mockCallBack}
        OnSaveClicked={mockCallBack}
      />
    );

    await waitFor(() => container.getByText("Phone Number"));
  });

  it("ContactInformation render", () => {
    expect(container).toMatchSnapshot();
  });

  it("PersonalInformation View render", () => {
    expect(container.getByText("Phone Number")).toBeInTheDocument();
    expect(container.getByText("Email ID")).toBeInTheDocument();
    expect(container.getByText("Address")).toBeInTheDocument();
    expect(container.getByText("City")).toBeInTheDocument();
    expect(container.getByText("State")).toBeInTheDocument();
    expect(container.getByText("Zip")).toBeInTheDocument();
    expect(
      container.getByText("Prefered Mode(s) of communication")
    ).toBeInTheDocument();

    expect(container.getByText("Justus4@gmail.com")).toBeInTheDocument();
    expect(container.getByText("645 Benedict Cliff")).toBeInTheDocument();
    expect(container.getByText("Daphneeshire")).toBeInTheDocument();
    expect(container.getByText("South Dakota")).toBeInTheDocument();
    expect(container.getByText("03245")).toBeInTheDocument();
  });

  test("is edit button clicked", async () => {
    container.rerender(
      <ContactInformation isEditing={true} userData={mockUserdata} />
    );

    const field1 = container.getByLabelText("Mobile Number");
    expect(field1.value).toEqual("(706) 509-6731");
    fireEvent.change(field1, { target: { value: "(123) 123-1234" } });
    expect(field1.value).toEqual("(123) 123-1234");

    const field2 = container.getByRole("textbox", { name: "Email" });
    expect(field2.value).toEqual("Justus4@gmail.com");
    fireEvent.change(field2, { target: { value: "aa@aa.aa" } });
    expect(field2.value).toEqual("aa@aa.aa");

    await waitFor(() => container.getByText("Address"));
    await waitFor(() => container.getByText("645 Benedict Cliff"));

    const field4 = container.getByLabelText("City");
    expect(field4.value).toEqual("Daphneeshire");
    fireEvent.change(field4, { target: { value: "Cities" } });
    expect(field4.value).toEqual("Cities");

    const field5 = container.getByLabelText("State");
    expect(field5.value).toEqual("South Dakota");
    fireEvent.change(field5, { target: { value: "West Dakota" } });
    expect(field5.value).toEqual("West Dakota");

    const field6 = container.getByLabelText("Zip");
    expect(field6.value).toEqual("03245");
    fireEvent.change(field6, { target: { value: "12345" } });
    expect(field6.value).toEqual("12345");

    const radioTitle = container.getByText("Preferred mode of Communication");
    expect("Preferred mode of Communication").toEqual(radioTitle.textContent);

    const communicationRadio = container.getByRole("radio", { name: /Both/i });
    fireEvent.click(communicationRadio);
    expect(communicationRadio.value).toEqual("both");

    const phoneRadio = container.getByRole("radio", { name: /Phone/i });
    fireEvent.click(phoneRadio);
    expect(phoneRadio.value).toEqual("phone");

    const emailRadio = container.getByRole("radio", { name: /Email/i });
    fireEvent.click(emailRadio);
    expect(emailRadio.value).toEqual("email");
  });

  test("is cancel button clicked", () => {
    container.rerender(
      <ContactInformation isEditing={true} userData={mockUserdata} />
    );

    const field = container.getByLabelText("Zip");
    expect(field.value).toEqual("03245");
    fireEvent.change(field, { target: { value: "12345" } });
    expect(field.value).toEqual("12345");

    const cancelButton = container.getByRole("button", { name: "Cancel" });
    fireEvent.click(cancelButton);

    expect(field.value).toEqual("03245");
  });

  test("is save button clicked", () => {
    container.rerender(
      <ContactInformation isEditing={true} userData={mockUserdata} />
    );

    const field = container.getByLabelText("Zip");
    expect(field.value).toEqual("03245");
    fireEvent.change(field, { target: { value: "12345" } });
    expect(field.value).toEqual("12345");
    const saveButton = container.getByRole("button", { name: "Save" });
    fireEvent.click(saveButton);

    expect(field.value).toEqual("12345");
  });

  test("Fill Empty String on Mandatory Field", async () => {
    container.rerender(
      <ContactInformation isEditing={true} userData={mockUserdata} />
    );
    const field1 = container.getByLabelText("Mobile Number");
    expect(field1.value).toEqual("(706) 509-6731");
    fireEvent.change(field1, { target: { value: "" } });
    expect(field1.value).toEqual("(");

    const field2 = container.getByRole("textbox", { name: "Email" });
    expect(field2.value).toEqual("Justus4@gmail.com");
    fireEvent.change(field2, { target: { value: "" } });
    expect(field2.value).toEqual("");

    const emailRadio = container.getByRole("radio", { name: /Email/i });
    fireEvent.click(emailRadio);
    expect(emailRadio.value).toEqual("email");

    const saveButton = container.getByRole("button", { name: "Save" });
    fireEvent.click(saveButton);

    await waitFor(() =>
      container.getByText("Email ID or Mobile Number is required")
    );
    expect(
      container.getByText("Email ID or Mobile Number is required")
    ).toBeInTheDocument();

    fireEvent.change(field2, { target: { value: "invalid@email" } });
    expect(field2.value).toEqual("invalid@email");

    await waitFor(() => container.getByText("Incorrect format"));
    expect(container.getByText("Incorrect format")).toBeInTheDocument();
  }, 10000);
});
