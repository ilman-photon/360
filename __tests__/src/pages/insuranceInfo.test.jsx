import { act, render, waitFor, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import InsuranceInformationPage from "../../../src/pages/patient/account/insurance-info";

import { Provider } from "react-redux";
import store from "../../../src/store/store";
import constants from "../../../src/utils/constants";
import { fireEvent } from "@storybook/testing-library";
import * as util from "../../../__mocks__/util";
import { resetUserInsuranceData, setStatus } from "../../../src/store/user";

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
    container = render(
      <Provider store={store}>
        {InsuranceInformationPage.getLayout(<InsuranceInformationPage />)}
      </Provider>
    );
    await jest.setTimeout(10000);
    await store.dispatch(setStatus("success"))
    await store.dispatch(resetUserInsuranceData())
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("InsuranceInformationPage render", async () => {
    expect(container).toMatchSnapshot();
    await waitFor(() => container.getByText("You have no insurance on file"));
  });

  const inputProviderSubsId = async (providerValue) => {
    await testAutoCreate(
      constants.TEST_ID.INSURANCE_TEST_ID.provider,
      "Provider"
    );
    expect(
      within(
        await waitFor(() => container.getByTestId(constants.TEST_ID.INSURANCE_TEST_ID.provider))
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
  
  // it(
  //   "InsuranceInformationPage Input Test provider & subscriber",
  //   () => inputProviderSubsId("Provider 1"),
  //   10000
  // );

  const inputPlanGroup = async () => {
    jest.setTimeout(10000);
    
    await testAutoCreate(
      constants.TEST_ID.INSURANCE_TEST_ID.planName,
      "Plan 1"
    );
    expect(
      within(
        container.getByTestId(constants.TEST_ID.INSURANCE_TEST_ID.planName)
      ).queryByRole("combobox")
    ).toHaveValue("Plan 1");
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
    20000
  );

  it("InsuranceInformationPage Add insurance cancel button", async () => {
    const cancelButton = container.getByTestId(
      constants.TEST_ID.INSURANCE_TEST_ID.cancel
    );
    fireEvent.click(cancelButton);
  });

  it("InsuranceInformationPage Add insurance save button", async () => {
    // TODO 2 of this @Dewo, helep wkkwkwk
    // await inputProviderSubsId("Provider");
    // await inputPlanGroup();
    const addButton = await waitFor(() => container.getByTestId(
      constants.TEST_ID.INSURANCE_TEST_ID.save
    ))
    act(() => {
      fireEvent.click(addButton);
    });
    await waitFor(() => container.getByText(/Primary/i));
    expect(container.getByText(/Primary/i)).toBeInTheDocument();
  }, 50000);

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
