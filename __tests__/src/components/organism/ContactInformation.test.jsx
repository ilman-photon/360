import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactInformation from "../../../../src/components/organisms/ContactInformation/contactInformation";

window.scrollTo = jest.fn();

describe("ContactInformation Components", () => {
  let container;
  const mockUserdata = {
    address: "100 River Road",
    age: 63,
    city: "Banora Point",
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
    profilePhoto: {
      name: "my-photo.jpg",
      source: "https://loremflickr.com/640/480",
    },
    ssn: 3777306119,
    state: "FL",
    title: "Mrs.",
    zip: "24861",
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
    expect(container.getByText("100 River Road")).toBeInTheDocument();
    expect(container.getByText("Banora Point")).toBeInTheDocument();
    expect(container.getByText("FL")).toBeInTheDocument();
    expect(container.getByText("24861")).toBeInTheDocument();
  });

  test("is edit button clicked", async () => {
    container.rerender(
      <ContactInformation isEditing={true} userData={mockUserdata} />
    );

    const field1 = container.getByLabelText("Phone Number field");
    expect(field1.value).toEqual("(706) 509-6731");
    fireEvent.change(field1, { target: { value: "(123) 123-1234" } });
    expect(field1.value).toEqual("(123) 123-1234");

    const field2 = container.getByRole("textbox", { name: "Email ID field" });
    expect(field2.value).toEqual("Justus4@gmail.com");
    fireEvent.change(field2, { target: { value: "aa@aa.aa" } });
    expect(field2.value).toEqual("aa@aa.aa");

    const addressField =  await waitFor(() => container.getByLabelText("Address"));
    expect(addressField).toHaveValue("100 River Road")

    const field4 = container.getByLabelText("City field");
    expect(field4.value).toEqual("Banora Point");
    fireEvent.change(field4, { target: { value: "Cities" } });
    expect(field4.value).toEqual("Cities");

    const field5 = await waitFor(() =>
      container.getByTestId("styled-select-state")
    );
    expect(field5).toBeTruthy();

    const field6 = container.getByLabelText("Zip field");
    expect(field6.value).toEqual("24861");
    fireEvent.change(field6, { target: { value: "12345" } });
    expect(field6.value).toEqual("12345");

    const radioTitle = container.getByText(
      "Preferred mode(s) of Communication"
    );
    expect("Preferred mode(s) of Communication").toEqual(
      radioTitle.textContent
    );

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

    const field = container.container.querySelector("#zip");
    //expect(field.value).toEqual("24861");
    fireEvent.change(field, { target: { value: "12345" } });
    expect(field.value).toEqual("12345");

    const cancelButton = container.getByRole("button", { name: "Cancel" });
    fireEvent.click(cancelButton);

    expect(field.value).toEqual("24861");
  });

  test("is save button clicked", () => {
    container.rerender(
      <ContactInformation isEditing={true} userData={mockUserdata} />
    );

    const field = container.container.querySelector("#zip");
    console.log(field.value);
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
    const field1 = container.getByLabelText("Phone Number field");
    expect(field1.value).toEqual("(706) 509-6731");
    fireEvent.change(field1, { target: { value: "" } });
    expect(field1.value).toEqual("(");

    const field2 = container.getByRole("textbox", { name: "Email ID field" });
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
