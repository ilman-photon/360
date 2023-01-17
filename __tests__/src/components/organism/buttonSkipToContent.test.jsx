import { fireEvent, render, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SkipToMainContent from "../../../../src/components/organisms/SkipToMainContent";

describe("App", () => {
  let container;
  beforeEach(() => {
    document.body.innerHTML = `
      <div>
        <input id="newTodoInput" name="main-content" />
      </div>
  `;
    container = render(<SkipToMainContent />);
  });

  it("ButtonSkipToContent render", async () => {
    const button = container.getByTestId("skip-main-content");
    await waitFor(() => fireEvent.click(button));
  });
});
