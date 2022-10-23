import "@testing-library/jest-dom";
import { addToCalendar } from "../../../src/utils/addToCalendar";

// const moment = require('moment-timezone');
// jest.doMock('moment', () => {
//   moment.tz.setDefault('America/New_York');
//   return moment;
// });
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

describe("addToCalender Util", () => {
  test("addToCalender funtionality", () => {
    const crypto = require("crypto");

    Object.defineProperty(global.self, "crypto", {
      value: {
        getRandomValues: (arr) => crypto.randomBytes(arr.length),
      },
    });
    const data = {
      name: "Robert",
      description: "lorem ipsum",
      location: "jl. Raya bogor, Kabupaten Bogor",
      date: "2022-09-09",
    };
    addToCalendar(data);
  });
});
