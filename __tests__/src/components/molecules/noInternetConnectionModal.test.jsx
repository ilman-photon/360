
import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import NoInternetConnectionModal from "../../../../src/components/organisms/NoInternetConnectionModal/noInternetConnectionModal";

describe("NoInternetConnectionModal Components", () => {
let container;
  beforeEach(() => {
    container = render(<NoInternetConnectionModal isOnline={true} setOnline={()=>{}}/>);
  });

  it("NoInternetConnectionModal", () => {
    waitFor(() => expect(container.getByText("No Internet Connection")).toBeInTheDocument());
  });
});
