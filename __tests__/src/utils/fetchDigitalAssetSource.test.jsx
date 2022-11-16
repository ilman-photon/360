import "@testing-library/jest-dom";
import {
  downloadMultipleAsset,
  fetchSource,
} from "../../../src/utils/fetchDigitalAssetSource";
import DigitalAssetsHandler from "../../../src/utils/digitalAssetsHandler";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { cleanup, waitFor } from "@testing-library/react";

describe("fetchDigitalAssetSource Util", () => {
  const mock = new MockAdapter(axios);

  test("fetchDigitalAssetSource funtionality download with id", async () => {
    const id = "6376481f-e317-4e44-a852-5e0395446140";
    mock
      .onGet(`/ecp/digital-asset/v1/asset/${id}`)
      .reply(200, { presignedUrl: "http://localhost/image.png" });
    expect(await fetchSource(id)).toEqual({
      success: true,
      response: {
        presignedUrl: "http://localhost/image.png",
      },
      success: true,
    });
  });

  test("fetchDigitalAssetSource funtionality print with id", async () => {
    cleanup();
    const id = "6376481f-e317-4e44-a852-5e0395446140";
    const isPrint = true;
    const mock = new MockAdapter(axios);
    mock
      .onGet(`/ecp/digital-asset/v1/asset/${id}`)
      .reply(200, { presignedUrl: "http://localhost/image.png" });
    mock
      .onGet("http://localhost/image.png", { responseType: "blob" })
      .reply(200, { data: "test" });
    URL.createObjectURL = jest.fn().mockReturnValue(`blob:https://image.png`);
    expect(await fetchSource(id, isPrint)).toEqual({
      success: false,
      response: {
        presignedUrl: "http://localhost/image.png",
      },
      success: true,
    });
  });

  test("downloadMultipleAsset", async () => {
    cleanup();
    global.URL.createObjectURL = jest.fn(() => "/details.png");
    const blob = new Blob(["(⌐□_□)"]);
    const mock = new MockAdapter(axios);
    mock
      .onGet(`/ecp/digital-asset/v1/asset/682d29e5-9d85-498c-b2dc-8be8ba4b3b64`)
      .reply(200, {
        name: "Screen Shot 2022-10-20 at 3.23.08 PM.png",
        originalFileName: "Screen Shot 2022-10-20 at 3.23.08 PM.png",
        type: "png",
        subType: "image",
        description: "Screen Shot 2022-10-20 at 3.23.08 PM.png",
        remoteLocation: {
          bucketName: "dgassets-bucket1",
          region: "us-east-1",
          locationType: "AWS",
        },
        presignedUrl:
          "https://dgassets-bucket1.s3.amazonaws.com/682d29e5-9d85-498c-b2dc-8be8ba4b3b64?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221110T091247Z&X-Amz-SignedHeaders=host&X-Amz-Expires=900&X-Amz-Credential=AKIAQ2MAPFH4C64PCZO6%2F20221110%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6832d052d093621a490c5ceb6af4b52431e97f2c53445974b5698430f78b0c24",
        status: "CREATED",
        sources: [],
        _id: "682d29e5-9d85-498c-b2dc-8be8ba4b3b64",
        _version: "1d3f8ef3-de34-441e-b7e1-5ab6443ef09b",
        _created: "Oct 21, 2022, 12:26:00 PM",
        _updated: "Oct 21, 2022, 12:26:00 PM",
        _createdBy: {
          _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
          _links: {
            self: {
              href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
            },
          },
        },
      });
    mock
      .onGet(
        `https://dgassets-bucket1.s3.amazonaws.com/682d29e5-9d85-498c-b2dc-8be8ba4b3b64?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221110T091247Z&X-Amz-SignedHeaders=host&X-Amz-Expires=900&X-Amz-Credential=AKIAQ2MAPFH4C64PCZO6%2F20221110%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6832d052d093621a490c5ceb6af4b52431e97f2c53445974b5698430f78b0c24`
      )
      .reply(200, blob);
    await waitFor(() =>
      downloadMultipleAsset([
        {
          id: "682d29e5-9d85-498c-b2dc-8be8ba4b3b64",
          fileName: "PatientNotes.pdf",
          url: "https://www.africau.edu/images/default/sample.pdf",
        },
      ])
    );
    // expect(await fetchSource()).toEqual(undefined);
  });
});
