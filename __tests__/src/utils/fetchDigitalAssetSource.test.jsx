import "@testing-library/jest-dom";
import { fetchSource } from "../../../src/utils/fetchDigitalAssetSource";
import DigitalAssetsHandler from "../../../src/utils/digitalAssetsHandler"
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { cleanup } from "@testing-library/react";

describe("fetchDigitalAssetSource Util", () => {
  test("fetchDigitalAssetSource funtionality download with id", async () => {
    const id = "6376481f-e317-4e44-a852-5e0395446140"
    const mock = new MockAdapter(axios);
    mock
      .onGet(`/ecp/digital-asset/v1/asset/${id}`)
      .reply(200, { presignedUrl: "http://localhost/image.png" });
    expect(await fetchSource(id)).toEqual({
      success: true,
      response: {
        "presignedUrl": "http://localhost/image.png",
      },
      "success": true,
    });
  });

  test("fetchDigitalAssetSource funtionality print with id", async () => {
    cleanup()
    const id = "6376481f-e317-4e44-a852-5e0395446140"
    const isPrint = true
    const mock = new MockAdapter(axios);
    mock
      .onGet(`/ecp/digital-asset/v1/asset/${id}`)
      .reply(200, { presignedUrl: "http://localhost/image.png" });
    mock
      .onGet("http://localhost/image.png", { responseType: "blob" })
      .reply(200, { data: "test" })
    URL.createObjectURL = jest.fn().mockReturnValue(`blob:https://image.png`)
    expect(await fetchSource(id, isPrint)).toEqual({
      success: false,
      response: {
        "presignedUrl": "http://localhost/image.png",
      },
      "success": true,
    });
  });

  test("fetchDigitalAssetSource funtionality without id", async () => {
    expect(await fetchSource()).toEqual(undefined);
  });
});
