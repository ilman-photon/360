import "@testing-library/jest-dom";
import { addToCalendar } from "../../../src/utils/addToCalendar";

const moment = require('moment-timezone');
jest.doMock('moment', () => {
  moment.tz.setDefault('America/New_York');
  return moment;
});

global.crypto = require('crypto')

describe("addToCalender Util", () => {
  test("addToCalender funtionality", () => {
    const data = { name: "Robert", description: "lorem ipsum", location: "jl. Raya bogor, Kabupaten Bogor", date: "2022-09-09" }
    addToCalendar(data)
  });
});
