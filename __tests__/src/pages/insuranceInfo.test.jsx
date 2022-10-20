import { act, cleanup, render, waitFor, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import InsuranceInformationPage from "../../../src/pages/patient/account/insurance-info";

import { Provider } from "react-redux";
import store from "../../../src/store/store";
import constants, { TEST_ID } from "../../../src/utils/constants";
import { fireEvent } from "@storybook/testing-library";
import * as util from "../../../__mocks__/util";
import { resetUserInsuranceData, setStatus } from "../../../src/store/user";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import {
  mockExistingInsurance,
  mockInsurance,
  mockPlanInsurance,
  mockSubmitInsurance,
} from "../../../__mocks__/mockResponse";

describe("InsuranceInformationPage Components", () => {
  let container;
  const testAutoCreate = async (id, value) => {
    const provider = container.getByTestId(id);
    const input = within(provider).queryByRole("combobox");
    provider.focus();
    fireEvent.change(input, { target: { value: value } });
    await util.sleep(100);
    fireEvent.keyDown(provider, { key: "ArrowDown" });
    await util.sleep(100);
    fireEvent.keyDown(provider, { key: "Enter" });
    await util.sleep(100);
  };

  beforeEach(async () => {
    const mock = new MockAdapter(axios);
    mock
      .onGet(`/ecp/appointments/insurance/allpayers`)
      .reply(200, mockInsurance);

    mock
      .onGet(
        `/ecp/insurance/beneficiaries/98f9404b-6ea8-4732-b14f-9c1a168d8066/coverages`
      )
      .reply(200, {
        count: 0,
        entities: [],
        _links: { self: { href: "/api?pageNo=0&pageSize=100" } },
      });
    mock
      .onGet(
        `ecp/appointments/insurancepayers/2a7601c4-f9e7-4698-ae56-bbe44dee0c9a/plans?pageNo=0&pageSize=500`
      )
      .reply(200, mockPlanInsurance);

    mock
      .onPost(
        `/ecp/insurance/beneficiaries/f352a9fe-53a4-4be8-866f-851ce45331ff/coverages/`
      )
      .reply(200, mockSubmitInsurance);

    container = render(
      <Provider store={store}>
        {InsuranceInformationPage.getLayout(<InsuranceInformationPage />)}
      </Provider>
    );
    // await jest.setTimeout(10000);
    // await store.dispatch(setStatus("success"));
    // await store.dispatch(resetUserInsuranceData());
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("InsuranceInformationPage render", async () => {
    await waitFor(() => container.getByText("You have no insurance on file"));
    expect(
      container.getByText("You have no insurance on file")
    ).toBeInTheDocument();
  });

  const inputProviderSubsId = async (providerValue) => {
    await testAutoCreate(
      constants.TEST_ID.INSURANCE_TEST_ID.provider,
      providerValue
    );
    await waitFor(() =>
      container.getByTestId(constants.TEST_ID.INSURANCE_TEST_ID.provider)
    );
    expect(
      within(
        container.getByTestId(constants.TEST_ID.INSURANCE_TEST_ID.provider)
      ).queryByRole("combobox")
    ).toHaveValue(providerValue);
    const subscriberId = container.getByTestId(
      constants.TEST_ID.INSURANCE_TEST_ID.subscriberId
    );
    fireEvent.change(
      within(subscriberId).queryByLabelText("Subscriber ID/ Member ID"),
      {
        target: { value: "1" },
      }
    );
  };
  it("InsuranceInformationPage Input Test provider & subscriber", async () => {
    await inputProviderSubsId("EyeMed");
  }, 50000);

  const inputPlanGroup = async (plan = "Eye Care") => {
    await inputProviderSubsId("EyeMed");

    await testAutoCreate(constants.TEST_ID.INSURANCE_TEST_ID.planName, plan);
    expect(
      within(
        container.getByTestId(constants.TEST_ID.INSURANCE_TEST_ID.planName)
      ).queryByRole("combobox")
    ).toHaveValue(plan);
    const group = container.getByTestId(
      constants.TEST_ID.INSURANCE_TEST_ID.group
    );
    fireEvent.change(within(group).queryByLabelText("Group #"), {
      target: { value: "group 1" },
    });
  };

  it(
    "InsuranceInformationPage Input Test plan name  & group",
    inputPlanGroup,
    50000
  );

  it("InsuranceInformationPage Add insurance cancel button", async () => {
    const cancelButton = container.getByTestId(
      constants.TEST_ID.INSURANCE_TEST_ID.cancel
    );
    fireEvent.click(cancelButton);
  });

  it("InsuranceInformationPage Add insurance save button", async () => {
    await inputProviderSubsId("EyeMed");
    await inputPlanGroup();

    await waitFor(() => container.getByLabelText("Yes"));
    fireEvent.click(container.getByLabelText("Yes"));
    const addButton = await waitFor(() =>
      container.getByTestId(constants.TEST_ID.INSURANCE_TEST_ID.save)
    );
    act(() => {
      fireEvent.click(addButton);
    });
    await waitFor(() => container.getByText(/Primary/i));
    expect(container.getByText(/Primary/i)).toBeInTheDocument();
  }, 50000);

  it("InsuranceInformationPage existing data", async () => {
    const mock = new MockAdapter(axios);
    mock
      .onGet(`/ecp/appointments/insurance/allpayers`)
      .reply(200, mockInsurance);

    mock
      .onGet(
        `/ecp/insurance/beneficiaries/98f9404b-6ea8-4732-b14f-9c1a168d8066/coverages`
      )
      .reply(200, mockExistingInsurance);
    mock
      .onGet(
        `ecp/appointments/insurancepayers/2a7601c4-f9e7-4698-ae56-bbe44dee0c9a/plans?pageNo=0&pageSize=500`
      )
      .reply(200, mockPlanInsurance);

    mock
      .onPost(
        `/ecp/insurance/beneficiaries/f352a9fe-53a4-4be8-866f-851ce45331ff/coverages/`
      )
      .reply(200, mockSubmitInsurance);

    container = render(
      <Provider store={store}>
        {InsuranceInformationPage.getLayout(<InsuranceInformationPage />)}
      </Provider>
    );
    await waitFor(() => container.getAllByText(/primary/i));
    expect(container.getAllByText(/primary/i)[0]).toBeInTheDocument();
    fireEvent.click(container.getAllByText(/primary/i)[0]);
  });

  it("InsuranceInformationPage upload back foto", async () => {
    global.URL.createObjectURL = jest.fn(() => "/details.png");
    const file = new File(["(⌐□_□)"], "chucknorris.png", { type: "image/png" });
    const button = container.getByTestId(
      constants.TEST_ID.INSURANCE_TEST_ID.uploadBackImage
    );
    act(() => {
      fireEvent.click(button);
    });
    fireEvent.change(container.getAllByTestId("loc_uploadImage")[0], {
      target: { files: [file] },
    });
  }, 10000);
});
