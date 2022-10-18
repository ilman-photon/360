import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../../../src/store/store";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import DownloadPage from "../../../src/pages/patient/download/[assetId]";
const useRouter = jest.spyOn(require("next/router"), "useRouter");

describe("Download Page", () => {
  let container;
  const mockImageSource = {
    uid: "6376481f-e317-4e44-a852-5e0395446140",
    fileName: "Merabu_02.jpg",
    metaInfo: {},
    _version: "40e37049-7f0e-4049-a83c-104bf7d84cb8",
  };
  const mockRouter = {
    back: jest.fn(),
    query: { assetId: "6376481f-e317-4e44-a852-5e0395446140" },
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    pathname: "/patient/download",
  };
  afterAll(() => {});
  beforeEach(() => {});

  test("renders download page no file", async () => {
    const mockResponse = { presignedUrl: "http://localhost/image.png" };
    const mock = new MockAdapter(axios);
    mock
      .onGet(`/ecp/digital-asset/v1/asset/${mockImageSource.uid}`)
      .reply(200, mockResponse);
    useRouter.mockReturnValue({ ...mockRouter, query: {} });
    container = render(<Provider store={store}>{<DownloadPage />}</Provider>);
    await waitFor(() => {
      container.getByText("File is not available or URL is wrong.");
    });
    expect(
      container.getByText("File is not available or URL is wrong.")
    ).toBeInTheDocument();
  });

  test("renders download page with response", async () => {
    const mockResponse = { presignedUrl: "http://localhost/image.png" };
    const mock = new MockAdapter(axios);
    mock
      .onGet(`/ecp/digital-asset/v1/asset/${mockImageSource.uid}`)
      .reply(200, mockResponse);
    useRouter.mockReturnValue(mockRouter);
    render(<Provider store={store}>{<DownloadPage />}</Provider>);
    global.window.location = {
      ancestorOrigins: null,
      hash: null,
      host: "dummy.com",
      port: "80",
      protocol: "http:",
      hostname: "dummy.com",
      href: "http://dummy.com?page=1&name=testing",
      origin: "http://dummy.com",
      pathname: null,
      search: null,
      assign: null,
      reload: null,
      replace: (url) => {
        expect(url).toEqual(mockResponse.presignedUrl);
      },
    };
  });

  test("renders download page without response", async () => {
    const mockResponse = null;
    const mock = new MockAdapter(axios);
    mock
      .onGet(`/ecp/digital-asset/v1/asset/${mockImageSource.uid}`)
      .reply(404, mockResponse);
    useRouter.mockReturnValue(mockRouter);
    render(<Provider store={store}>{<DownloadPage />}</Provider>);
    await waitFor(() => {
      container.getByText("File is not available or URL is wrong.");
    });
    expect(
      container.getByText("File is not available or URL is wrong.")
    ).toBeInTheDocument();
  });
});
