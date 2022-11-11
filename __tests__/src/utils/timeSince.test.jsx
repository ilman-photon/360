import "@testing-library/jest-dom";
import timeSince from "../../../src/utils/timeSince";

describe("Time Since Util", () => {
  beforeAll(() => {
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date("2022-12-01T00:00:01.000Z"));
  });

  afterAll(() => {
    jest.useRealTimers();
  });
  it("test implementation time years", () => {
    const date = new Date("2021-01-01T00:00:01.000Z");
    expect(timeSince(date)).toEqual("1y");
  });
  it("test implementation time month", () => {
    const date = new Date("2022-02-01T00:00:01.000Z");
    expect(timeSince(date)).toEqual("10mo");
  });
  it("test implementation time day", () => {
    const date = new Date("2022-11-25T00:00:01.000Z");
    expect(timeSince(date)).toEqual("6d");
  });
  it("test implementation time hours", () => {
    const date = new Date("2022-11-30T23:00:00.000Z");
    expect(timeSince(date)).toEqual("1h");
  });
  it("test implementation time minutes", () => {
    const date = new Date("2022-11-30T23:50:00.000Z");
    expect(timeSince(date)).toEqual("10mi");
  });
  it("test implementation time second", () => {
    const date = new Date("2022-11-30T23:59:10.000Z");
    expect(timeSince(date)).toEqual("51s");
  });
});
