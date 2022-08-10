import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import SessionExpiredModal from "../../../../src/components/organisms/SessionExpiredModal/sessionExpiredModal";

describe("SessionExpiredModal Components", () => {
  let container;
  beforeEach(() => {
    container = render(<SessionExpiredModal showModal={true}/>);
  });
  it("render component", () => {
    expect(container).toMatchSnapshot();
  });
});
