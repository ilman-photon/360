import "@testing-library/jest-dom";
import { addToCalendar } from "../../../src/utils/addToCalendar";
jest.mock("moment", () => {
  const originalModule = jest.requireActual("moment");
  const moment = {
    __esModule: true,
    ...originalModule,
    default: jest.fn((date) => {
      const objNew = new originalModule(date);
      objNew.tz = jest.fn().mockReturnValue(objNew);
      return {
        ...objNew,
      };
    }),
    tz: { setDefault: jest.fn() },
  };
  return moment;
});

jest.mock("add-to-calendar-button", () => ({
  atcb_action: jest.fn(),
}));

describe("addToCalender Util", () => {
  test("addToCalender funtionality", () => {
    const data = {
      name: "Robert",
      description: "lorem ipsum",
      location: "jl. Raya bogor, Kabupaten Bogor",
      date: "2022-09-09",
    };
    addToCalendar(data);
  });
});
