import { render, fireEvent, within } from "@testing-library/react";

import "@testing-library/jest-dom";
import { AutoCompleteCreatable } from "../../../../src/components/molecules/AutoCompleteCreatable";

describe("Auto Complete Creatable Components", () => {
  let container;
  const mocFetch = jest.fn();

  beforeEach(() => {
    const options = [
      { id: "01", value: "test1" },
      { id: "02", value: "test2" },
      { id: "03", value: "test3" },
    ];
    container = render(
      <AutoCompleteCreatable
        isLoading={true}
        onFetch={mocFetch}
        options={options}
        testId={"autocomplete"}
        onChange={jest.fn}
      />
    );
  });

  it("Auto Complete Creatable test", async () => {
    const autocomplete = container.getByTestId("autocomplete");
    const input = within(autocomplete).getByRole("combobox");
    autocomplete.focus();
    fireEvent.change(input, { target: { value: "test1" } });
    fireEvent.keyDown(autocomplete, { key: "ArrowDown" });
    fireEvent.keyDown(autocomplete, { key: "Enter" });
  });

  it("Auto Complete Creatable with label test", async () => {
    const data = [
      { label: "The Shawshank Redemption", year: 1994 },
      { label: "The Godfather", year: 1972 },
    ];
    container = render(
      <AutoCompleteCreatable
        isLoading={true}
        onFetch={mocFetch}
        options={data}
        testId={"new-autocomplete"}
        onChange={jest.fn}
      />
    );
    const autocomplete = container.getByTestId("new-autocomplete");
    const input = within(autocomplete).getByRole("combobox");
    autocomplete.focus();
    fireEvent.change(input, { target: { value: "test1" } });
    fireEvent.keyDown(autocomplete, { key: "ArrowDown" });
    fireEvent.keyDown(autocomplete, { key: "Enter" });
  });


  it("Auto Complete Creatable with new label test", async () => {
    const data = ["test1", "test2"];
    container = render(
      <AutoCompleteCreatable
        isLoading={true}
        onFetch={mocFetch}
        options={data}
        testId={"new-autocomplete1"}
        onChange={jest.fn}
      />
    );
    const autocomplete = container.getByTestId("new-autocomplete1");
    const input = within(autocomplete).getByRole("combobox");
    autocomplete.focus();
    fireEvent.change(input, { target: { value: "test1" } });
    fireEvent.keyDown(autocomplete, { key: "ArrowDown" });
    fireEvent.keyDown(autocomplete, { key: "Enter" });
  });

  it("Auto Complete Loading true", async () => {
    const data = [];
    container = render(
      <AutoCompleteCreatable
        isLoading={true}
        onFetch={mocFetch}
        options={data}
        testId={"new-autocomplete"}
        onChange={jest.fn}
      />
    );
    const autocomplete = container.getByTestId("new-autocomplete");
    const input = within(autocomplete).getByRole("combobox");
    autocomplete.focus();
    fireEvent.change(input, { target: { value: "test1" } });
  });

   it("Auto Complete No Props", async () => {
     container = render(
       <AutoCompleteCreatable />
     );
     expect(container).toMatchSnapshot();
   });

   it("Auto Complete With Error", async () => {
     container = render(<AutoCompleteCreatable error={true} />);
     expect(container).toMatchSnapshot();
   });
});
