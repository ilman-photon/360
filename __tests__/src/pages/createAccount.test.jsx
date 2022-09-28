import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../../../src/pages/_app";
import CreateAccountPage from "../../../src/pages/patient/auth/create-account";

describe("App", () => {
  it("renders App unchanged", async () => {
    const container = render(<App Component={CreateAccountPage} />);
    await waitFor(() => container.getByText(/User Registration/i));
    const title = container.getByText(/User Registration/i);
    expect("User Registration").toEqual(title.textContent);
  });
});
