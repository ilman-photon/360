import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../../../../src/store/store";
import MyCareTeamLayout from "../../../../src/components/templates/myCareTeam";

describe("My Care Team Layout Component", () => {
  let container;
  beforeEach(() => {
    container = render(
      <Provider store={store}>
        <MyCareTeamLayout>Uni Testing Test</MyCareTeamLayout>
      </Provider>
    );
  });

  it("Render Component", () => {
    expect(container.getByText(/My Care Team/i)).toBeInTheDocument();
  });
});
