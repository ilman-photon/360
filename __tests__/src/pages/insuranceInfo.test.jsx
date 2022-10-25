import {
  act,
  cleanup,
  render,
  waitFor,
  within,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import InsuranceInformationPage from "../../../src/pages/patient/account/insurance-info";

import { Provider } from "react-redux";
import store from "../../../src/store/store";
import constants from "../../../src/utils/constants";
import { fireEvent } from "@storybook/testing-library";
import * as util from "../../../__mocks__/util";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import {
  mockDeleteInsurance,
  mockExistingInsurance,
  mockInsurance,
  mockPlanInsurance,
  mockSubmitInsurance,
  mockUpdateInsurance,
} from "../../../__mocks__/mockResponse";

describe("InsuranceInformationPage Components", () => {
  let container;
  const mock = new MockAdapter(axios);
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

  const renderPage = () => {
    act(() => {
      container = render(
        <Provider store={store}>
          {InsuranceInformationPage.getLayout(<InsuranceInformationPage />)}
        </Provider>
      );
    });
  };

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
    screen.debug(container.getAllByTestId("loc_uploadImage"), 300000);
    fireEvent.change(container.getAllByTestId("loc_uploadImage")[1], {
      target: { files: [file] },
    });
  }, 10000);

  const addInsuranceInfo = async () => {
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

    mock
      .onPost(
        `/ecp/insurance/beneficiaries/98f9404b-6ea8-4732-b14f-9c1a168d8066/coverages/`
      )
      .reply(200, mockSubmitInsurance);

    renderPage();
  };

  it("Add insurance with success response", async () => {
    await addInsuranceInfo();
    await waitFor(() => container.getAllByText(/primary/i));
    expect(container.getAllByText(/primary/i)[0]).toBeInTheDocument();
    fireEvent.click(container.getAllByText(/primary/i)[0]);
  }, 10000);

  it("Remove Insurance", async () => {
    mock
      .onPatch(
        `/ecp/insurance/beneficiaries/98f9404b-6ea8-4732-b14f-9c1a168d8066/coverages`
      )
      .reply(200, mockDeleteInsurance);

    await addInsuranceInfo();
    await waitFor(() => container.getAllByText(/primary/i));
    await waitFor(() => container.getAllByTestId(/ExpandMoreIcon/i));
    fireEvent.click(container.getAllByTestId(/ExpandMoreIcon/i)[0]);

    const editButton = await waitFor(() =>
      container.getAllByText(/Remove Insurance/i)
    );
    act(() => {
      fireEvent.click(editButton[0]);
    });
    await waitFor(() =>
      container.getAllByText(/Are you sure you want to remove insurance?/i)
    );
    const removeButton = await waitFor(() =>
      container.getByTestId(/remove-insurance/i)
    );
    act(() => {
      fireEvent.click(removeButton);
    });
    await waitFor(() =>
      container.getAllByText(/Insurance successfully removed/i)
    );
  }, 30000);

  it("Edit Insurance", async () => {
    const coverageId = "24bea5f6-146c-430d-9578-e024f4790afb";
    const patientId = "98f9404b-6ea8-4732-b14f-9c1a168d8066";
    mock
      .onPut(
        `/ecp/insurance/beneficiaries/${patientId}/coverages/${coverageId}`
      )
      .reply(200, mockUpdateInsurance);
    await addInsuranceInfo();
    await waitFor(() => container.getAllByText(/primary/i));
    await waitFor(() => container.getAllByTestId(/ExpandMoreIcon/i));
    fireEvent.click(container.getAllByTestId(/ExpandMoreIcon/i)[0]);

    const editButton = await waitFor(() => container.getAllByText(/Edit/i));
    act(() => {
      fireEvent.click(editButton[0]);
    });
    await waitFor(() => container.getAllByText(/Save/i));
    const editButtonSave = await waitFor(
      () =>
        container.getAllByTestId(constants.TEST_ID.INSURANCE_TEST_ID.save)[0]
    );
    act(() => {
      fireEvent.click(editButtonSave);
    });
    // await waitFor(() =>
    //   container.getAllByText(/Insurance successfully removed/i)
    // );
  }, 30000);
});
