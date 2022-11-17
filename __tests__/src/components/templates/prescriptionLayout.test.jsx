import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../../../../src/store/store";
import PrescriptionLayout from "../../../../src/components/templates/prescriptionLayout";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("Prescription Layout Component", () => {
  useRouter.mockReturnValue({
    query: {
      type: "",
    },
    prefetch: jest.fn(),
    pathname: "/medical-record",
  });
  let container;
  beforeEach(() => {
    container = render(
      <Provider store={store}>
        <PrescriptionLayout>Uni Testing Test</PrescriptionLayout>
      </Provider>
    );
  });

  it("Render Component", () => {
    useRouter.mockReturnValue({
      query: {
        type: "",
      },
      prefetch: jest.fn(),
      pathname: "/documents",
    });
    container = render(
      <Provider store={store}>
        <PrescriptionLayout title="test">Uni Testing Test</PrescriptionLayout>
      </Provider>
    );
  });

  it("Render Component", () => {
    useRouter.mockReturnValue({
      query: {
        type: "",
      },
      prefetch: jest.fn(),
      pathname: {
        includes: jest.fn(),
      },
    });
    container = render(
      <Provider store={store}>
        <PrescriptionLayout>Uni Testing Test</PrescriptionLayout>
      </Provider>
    );
  });

  it("Render Component", () => {
    useRouter.mockReturnValue({
      query: {
        type: "intake-forms",
      },
      prefetch: jest.fn(),
      pathname: {
        includes: jest.fn(),
      },
    });
    container = render(
      <Provider store={store}>
        <PrescriptionLayout>Uni Testing Test</PrescriptionLayout>
      </Provider>
    );
  });

  it("Render Component", () => {
    useRouter.mockReturnValue({
      query: {
        type: "insurance-documents",
      },
      prefetch: jest.fn(),
      pathname: {
        includes: jest.fn(),
      },
    });
    container = render(
      <Provider store={store}>
        <PrescriptionLayout>Uni Testing Test</PrescriptionLayout>
      </Provider>
    );
  });

  it("Render Component", () => {
    useRouter.mockReturnValue({
      query: {
        type: "health-record",
      },
      prefetch: jest.fn(),
      pathname: {
        includes: jest.fn(),
      },
    });
    container = render(
      <Provider store={store}>
        <PrescriptionLayout>Uni Testing Test</PrescriptionLayout>
      </Provider>
    );
  });

  it("Render Component", () => {
    useRouter.mockReturnValue({
      query: {
        type: "test-lab-result",
      },
      prefetch: jest.fn(),
      pathname: {
        includes: jest.fn(),
      },
    });
    container = render(
      <Provider store={store}>
        <PrescriptionLayout>Uni Testing Test</PrescriptionLayout>
      </Provider>
    );
  });

  it("Render Component", () => {
    useRouter.mockReturnValue({
      query: {
        type: "care-plan-overview",
      },
      prefetch: jest.fn(),
      pathname: {
        includes: jest.fn(),
      },
    });
    container = render(
      <Provider store={store}>
        <PrescriptionLayout>Uni Testing Test</PrescriptionLayout>
      </Provider>
    );
  });

  it("Render Component", () => {
    useRouter.mockReturnValue({
      query: {
        type: "prescriptions",
      },
      prefetch: jest.fn(),
      pathname: {
        includes: jest.fn(),
      },
    });
    container = render(
      <Provider store={store}>
        <PrescriptionLayout>Uni Testing Test</PrescriptionLayout>
      </Provider>
    );
  });
});
