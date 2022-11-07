import "@testing-library/jest-dom";
import { stringAvatar } from "../../../src/utils/avatar";

describe("getLanguage", () => {
  const spyMathFloor = jest.spyOn(Math, "floor");
  spyMathFloor.mockImplementation(jest.fn()).mockReturnValue("12345");
  test("getLanguage success funtionality", () => {
    const result = {
      sx: {
        bgcolor: "12345"
      },
      children: "EU",
    }
    expect(stringAvatar()).toEqual(result)
  });
});
