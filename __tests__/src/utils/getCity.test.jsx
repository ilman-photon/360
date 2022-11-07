import "@testing-library/jest-dom";
import { getCity, getCoords, getDistanceMatrix } from "../../../src/utils/getCity";
import { mockGoogleWindow } from "../../../__mocks__/component-mock";

describe("Get City Util", () => {
  test("getCoords validate success funtionality", async () => {
    const result = {
      lat: -6.3590351,
      lng: 106.9684472,
    }
    const address = {
      addressLine1: "Deepwood",
      addressLine2: "Whiterun",
      city: "Tamriel",
      state: "Frozen Throne",
      zip: "1234",
    }
    expect(await getCoords(123, address)).toEqual(result)
  });

  test("getDistanceMatrix validate success funtionality", async () => {
    mockGoogleWindow()
    const currentCoordinate = {
      lat: -6.3590351,
      lng: 106.9684472,
    }
    const result = "1207 mi"
    expect(await getDistanceMatrix()).toEqual(result)
  });

  test("getCoords validate success funtionality", async () => {
    let data
    const setCity = (test) => {
      data = test
    }
    const coordinate = {
      lat: -6.3590351,
      lng: 106.9684472,
    }
    const result = "Kabupaten Bogor"
    await getCity(123, coordinate, setCity)
    expect(data).toEqual(result)
  })
});
