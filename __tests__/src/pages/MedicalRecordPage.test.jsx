import { act, fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import { Provider } from "react-redux";
import store from "../../../src/store/store";
import axios from "axios";
import MedicalRecordPage from "../../../src/pages/patient/account/medical-record/index";
import mediaQuery from "css-mediaquery";
import React, { useState as useStateMock } from "react";
import { carePlan, testLab } from "../../../__mocks__/mockResponse";
import { TEST_ID } from "../../../src/utils/constants";
import { renderWithProviders } from "../utils/test-util";
const useRouter = jest.spyOn(require("next/router"), "useRouter");

describe("MedicalRecordPage", () => {
  const mockRouter = {
    back: jest.fn(),
    query: { type: "" },
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    pathname: "/patient/account/medical-record",
  };
  let container;
  const mock = new MockAdapter(axios);
  function createMatchMedia(width) {
    return (query) => ({
      matches: mediaQuery.match(query, { width }),
      addListener: () => {},
      removeListener: () => {},
    });
  }
  beforeEach(() => {});

  afterEach(() => {
    mock.reset();
  });

  test("renders empty table", async () => {
    window.matchMedia = createMatchMedia("720px");
    const mock = new MockAdapter(axios);
    mock
      .onGet(
        `/ecp/patient/getPatientDocumentByCategory/98f9404b-6ea8-4732-b14f-9c1a168d8066/documents?pageSize=10&pageNo=0&sortBy=updated&sortOrder=dsc&search.query=((category=eq=Intake-Forms))`
      )
      .reply(200, {
        count: 1,
        entities: [],
        _links: {
          self: {
            href: "/patient-management?pageNo=0&pageSize=10",
          },
        },
      });

    useRouter.mockReturnValue(mockRouter);
    container = render(
      <Provider store={store}>
        <MedicalRecordPage />
      </Provider>
    );
    await waitFor(() =>
      container.getByText(/Your care plan is not yet available./i)
    );
    expect(
      container.getByText(/Your care plan is not yet available./i)
    ).toBeInTheDocument();
  });

  test("renders table and sort care plan", async () => {
    window.matchMedia = createMatchMedia("1920px");
    const mock = new MockAdapter(axios);
    mock
      .onGet(
        `/ecp/patient/getPatientDocumentByCategory/98f9404b-6ea8-4732-b14f-9c1a168d8066/documents?pageSize=10&pageNo=0&sortBy=updated&sortOrder=dsc&search.query=((category=eq=care-plan))`
      )
      .reply(200, carePlan);
    useRouter.mockReturnValue({
      ...mockRouter,
      query: { type: "care-plan-overview" },
    });
    container = render(
      <Provider store={store}>
        <MedicalRecordPage />
      </Provider>
    );
    await waitFor(() =>
      container.getAllByTestId(TEST_ID.MEDICAL_RECORD.moreMenu)
    );
    expect(
      container.getAllByTestId(TEST_ID.MEDICAL_RECORD.moreMenu)[0]
    ).toBeInTheDocument();
    fireEvent.click(
      container.getAllByTestId(TEST_ID.MEDICAL_RECORD.moreMenu)[0]
    );
  });

  // commented, move to BDD
  // test("renders table and sort Test & Lab Results", async () => {
  //   window.matchMedia = createMatchMedia("720px");
  //   global.fetch = jest.fn(() =>
  //     Promise.resolve({
  //       json: () => Promise.resolve(testLab),
  //     })
  //   );
  //   useRouter.mockReturnValue({
  //     ...mockRouter,
  //     query: { type: "test-lab-result" },
  //   });
  //   container = render(
  //     <Provider store={store}>
  //       {MedicalRecordPage.getLayout(<MedicalRecordPage />)}
  //     </Provider>
  //   );
  //   const tableSort = await waitFor(() => container.getAllByTestId("table-header-sort"));
  //   expect(tableSort).toBe("test")
  //   // expect(
  //   //   container.getAllByTestId("table-header-sort")[0]
  //   // ).toBeInTheDocument();
  //   // fireEvent.click(container.getAllByTestId("table-header-sort")[0]);
  // });
});
