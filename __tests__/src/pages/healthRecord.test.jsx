import "@testing-library/jest-dom";
import { act, fireEvent, render, waitFor } from "@testing-library/react";
import store from "../../../src/store/store";
import { Provider } from "react-redux";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import HealthRecord from "../../../src/pages/patient/health-record";
import {
    medicalRecordMockData
  } from "../../../__mocks__/mockResponse";
import { renderWithProviders } from "../utils/test-util";
import { createMatchMedia } from "../../../__mocks__/commonSteps";

describe("Render Health Record", () => {
  let container;
  const mock = new MockAdapter(axios);

  const renderList = async (mockResponse, status = 200) => {
    //TODO: Remove
    const patientId = "98f9404b-6ea8-4732-b14f-9c1a168d8066"
    mock.onGet(`/ecp/patient/phr/patientchart/${patientId}`).reply(status, mockResponse);
  
    act(() => {
      container = renderWithProviders(
        <HealthRecord/>
      );
    });

    if (status === 200) {
        await waitFor(() => {
          container.getAllByText(/Medical Record/i);
        });
      } else {
        await waitFor(() => {
          container.getByText(/no health records/i);
        });
      }
  };

  afterAll(() => {
    mock.reset();
  });

  test("is My Care Team page rendered", async () => {
    window.matchMedia = createMatchMedia("1500px");
    await renderList(medicalRecordMockData, 200);
    expect(container.getAllByText(/Medical Record/i).length > 0).toBeTruthy();
  });

  test("Click schedule button", async () => {
    window.matchMedia = createMatchMedia("1500px");
    await renderList({}, 400);
    expect(container.getAllByText(/no health records/i).length > 0).toBeTruthy();
  });

  test("is My Care Team page rendered", async () => {
    window.matchMedia = createMatchMedia("500px");
    await renderList(medicalRecordMockData, 200);
    expect(container.getAllByText(/Medical Record/i).length > 0).toBeTruthy();
  });

  test("Click schedule button", async () => {
    window.matchMedia = createMatchMedia("500px");
    await renderList({}, 400);
    expect(container.getAllByText(/no health records/i).length > 0).toBeTruthy();
  });

  test("Click schedule button", async () => {
    const mockCallback = jest.fn();
    window.matchMedia = createMatchMedia("500px");
    await renderList(medicalRecordMockData, 200);
    const sort = container.getByTestId("sort-button-data")
    expect(sort).toBeInTheDocument()

    const selectNode = sort.childNodes[1]
    fireEvent.change(selectNode, { target: { value: "date-asc" } });
  });
});
