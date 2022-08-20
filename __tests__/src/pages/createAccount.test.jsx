import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../../../src/pages/_app";
import CreateAccountPage from "../../../src/pages/patient/auth/create-account";

describe("App", () => {
  it("renders App unchanged", () => {
    const { container } = render(<App Component={CreateAccountPage} />);
    expect(container).toMatchSnapshot();
  });
});
