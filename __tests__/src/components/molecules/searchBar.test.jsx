import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchBar from "../../../../src/components/molecules/ManagePatientAccount/SearchBar";

let container;

describe("SearchBar", () => {
  it("renders SearchBar with title", async () => {
    container = render(
      <SearchBar title="Search bar component" />
    );
  })
})