import {
  render,
  fireEvent,
  within,
  cleanup,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import MessagingTabContentHeader from "../../../../src/components/molecules/Messaging/MessagingTabContentHeader";
import { createMatchMedia } from "../../../../__mocks__/commonSteps";

describe("container Components", () => {
  let container;

  beforeEach(() => {
    window.matchMedia = createMatchMedia("1900px");
    container = render(
      <MessagingTabContentHeader
        inboxValue={1}
        activeTabs={0}
        onChangeTabs={jest.fn()}
      />
    );
  });

  it("container render and click download", async () => {
    window.matchMedia = createMatchMedia("600px");
    container = render(
      <MessagingTabContentHeader
        inboxValue={1}
        activeTabs={0}
        onChangeTabs={jest.fn()}
      />
    );
    const buttonTab = container.getAllByTestId(/sent-tab/i);
    expect(buttonTab[0]).toBeInTheDocument();
    await waitFor(() => fireEvent.click(buttonTab[0]));
  });

  it("container render and click download", async () => {
    container = render(
      <MessagingTabContentHeader activeTabs={0} onChangeTabs={jest.fn()} />
    );
    const buttonTab = container.getAllByTestId(/sent-tab/i);
    expect(buttonTab[0]).toBeInTheDocument();
    await waitFor(() => fireEvent.click(buttonTab[0]));
  });
});
