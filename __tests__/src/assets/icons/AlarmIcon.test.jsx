import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import AlarmIcon from "../../../../src/assets/icons/AlarmIcon";

describe("AlarmIcon ", () => {
  test("validate success funtionality", () => {
    let container
    container = render(<AlarmIcon style={{ width: 20, height: 20 }}></AlarmIcon>)
    
  });
});
