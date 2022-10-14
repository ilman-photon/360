import "@testing-library/jest-dom";
import { getCity } from "../../../src/utils/getCity";

describe("Get City Util", () => {
  test("validate success funtionality", () => {
    getCity("googleApiKey", { lat: 123, long: 234 }, (response) => {
      expect(response).toEqual("Kabupaten Bogor");
    });
  });
});
