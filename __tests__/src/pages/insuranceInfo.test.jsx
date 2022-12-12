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
import user from "@testing-library/user-event";
import InsuranceInformationPage from "../../../src/pages/patient/account/insurance-info";

import { Provider } from "react-redux";
import store from "../../../src/store/store";
import constants, { TEST_ID } from "../../../src/utils/constants";
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
import { createMatchMedia } from "../../../__mocks__/commonSteps";

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
    Object.defineProperty(document, "cookie", {
      writable: true,
      value: "authorized=true;accessToken=1234",
    });
    window.matchMedia = createMatchMedia("800px");
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
      within(subscriberId).queryByLabelText("Subscriber ID/ Member ID *"),
      {
        target: { value: "1" },
      }
    );
  };

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

  it("InsuranceInformationPage render", async () => {
    await waitFor(() => container.getByText(/You have no insurance on file/i));
    expect(
      container.getByText(/You have no insurance on file/i)
    ).toBeInTheDocument();
  });

  it("InsuranceInformationPage Input Test provider & subscriber", async () => {
    await inputProviderSubsId("EyeMed");
  }, 50000);

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

  it("InsuranceInformationPage existing data 2 items", async () => {
    mock
      .onGet(`/ecp/appointments/insurance/allpayers`)
      .reply(200, mockInsurance);

    mock
      .onGet(
        `/ecp/insurance/beneficiaries/98f9404b-6ea8-4732-b14f-9c1a168d8066/coverages`
      )
      .reply(200, {
        count: 0,
        entities: [
          mockExistingInsurance.entities[0],
          mockExistingInsurance.entities[0],
        ],
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
    await waitFor(() => container.getAllByText(/primary/i));
    expect(container.getAllByText(/primary/i)[0]).toBeInTheDocument();
    fireEvent.click(container.getAllByText(/primary/i)[0]);
    await waitFor(() =>
      container.getAllByTestId(TEST_ID.INSURANCE_TEST_ID.addButton)
    );
    fireEvent.click(
      container.getAllByTestId(TEST_ID.INSURANCE_TEST_ID.addButton)[0]
    );
  });

  it("InsuranceInformationPage existing data 5 items", async () => {
    mock
      .onGet(`/ecp/appointments/insurance/allpayers`)
      .reply(200, mockInsurance);

    mock
      .onGet(
        `/ecp/insurance/beneficiaries/98f9404b-6ea8-4732-b14f-9c1a168d8066/coverages`
      )
      .reply(200, {
        count: 0,
        entities: [
          mockExistingInsurance.entities[0],
          mockExistingInsurance.entities[0],
          mockExistingInsurance.entities[0],
          mockExistingInsurance.entities[0],
          mockExistingInsurance.entities[0],
        ],
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
    await waitFor(() => container.getAllByText(/primary/i));
    expect(container.getAllByText(/primary/i)[0]).toBeInTheDocument();
    fireEvent.click(container.getAllByText(/primary/i)[0]);
    await waitFor(() =>
      container.getAllByTestId(TEST_ID.INSURANCE_TEST_ID.addButton)
    );
    fireEvent.click(
      container.getAllByTestId(TEST_ID.INSURANCE_TEST_ID.addButton)[0]
    );
    await waitFor(() =>
      container.getAllByText(
        /Maximum number of insurances has been reached./i
      )
    );
  });

  it("InsuranceInformationPage upload back foto", async () => {
    global.URL.createObjectURL = jest.fn(() => "/details.png");
    const file = new File(["(⌐□_□)"], "chucknorris.png", { type: "image/png" });
    screen.debug(container.getAllByTestId("loc_uploadImage"), 300000);
    fireEvent.change(container.getAllByTestId("loc_uploadImage")[1], {
      target: { files: [file] },
    });
  }, 10000);

  it("Add insurance with success response", async () => {
    await addInsuranceInfo();
    await waitFor(() => container.getAllByText(/primary/i));
    expect(container.getAllByText(/primary/i)[0]).toBeInTheDocument();
    fireEvent.click(container.getAllByText(/primary/i)[0]);
  }, 50000);

  it("Remove Insurance", async () => {
    mock
      .onPatch(
        `/ecp/insurance/beneficiaries/98f9404b-6ea8-4732-b14f-9c1a168d8066/coverages`
      )
      .reply(200, mockDeleteInsurance);

    mock
      .onGet(
        `/ecp/insurance/beneficiaries/98f9404b-6ea8-4732-b14f-9c1a168d8066/coverages`
      )
      .reply(200, {
        count: 3,
        entities: [
          {
            beneficiary: {
              _links: {
                self: {
                  href: "/v1/patients/677c737d-7fad-4ab2-9515-4cebd7d8b6bb",
                },
              },
              _id: "677c737d-7fad-4ab2-9515-4cebd7d8b6bb",
              _version: "c0de7897-3088-4021-a91e-2b70cd7f8e89",
              _created: "Oct 24, 2022, 9:21:08 AM",
              _updated: "Nov 1, 2022, 7:06:08 PM",
              status: "UPDATED",
              _createdBy: {
                _id: "981ad89e-7fee-42d8-92ec-c34324d862a0",
                _links: {
                  self: {
                    href: "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0",
                  },
                },
              },
              _updatedBy: {
                _id: "981ad89e-7fee-42d8-92ec-c34324d862a0",
                _links: {
                  self: {
                    href: "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0",
                  },
                },
              },
            },
            insuranceType: "VISION",
            group: "",
            priority: "PRIMARY",
            subscriberRelation: 1,
            archive: false,
            active: false,
            selected: false,
            status: "CREATED",
            planAddress: "17795 W 106th ST., STE 202",
            planCity: "OLATHE",
            planName: "Eye Care",
            planPhone: "9367284736",
            planState: "KS",
            planZip: "66061",
            payer: {
              name: "EyeMed",
              absentDigitalId: true,
              _id: "2a7601c4-f9e7-4698-ae56-bbe44dee0c9a",
              _links: {
                self: {
                  href: "/v1/payers/2a7601c4-f9e7-4698-ae56-bbe44dee0c9a",
                },
              },
            },
            plan: {
              name: "Eye Care",
              _id: "b4a0e67e-a038-4726-a5c1-a019c6fdd6f8",
              _links: {
                self: {
                  href: "/v1/payers/2a7601c4-f9e7-4698-ae56-bbe44dee0c9a/plans/b4a0e67e-a038-4726-a5c1-a019c6fdd6f8",
                },
              },
            },
            isPatientSubscriber: true,
            subscriber: {
              firstName: "Fajar",
              lastName: "dev",
              dob: "01/01/1990",
              contactInformation: {
                preferredContactMethod: 0,
                phone: [{ type: 3, number: "(123) 123-1231" }],
                email: [{ type: 1, email: "fajar.dev4@photon.com" }],
              },
              title: 1,
              gender: 1,
              _id: "677c737d-7fad-4ab2-9515-4cebd7d8b6bb",
            },
            _links: {
              self: {
                href: "/insurance/v1/beneficiaries/677c737d-7fad-4ab2-9515-4cebd7d8b6bb/coverages/52555af2-348d-4db9-bc6a-0ec1e17babfa",
              },
            },
            digitalAssets: {
              master_front: {
                uid: "860a5b23-cbe9-41b7-a922-04e3043979ad",
                fileName: "pngrandom.png",
                metaInfo: {},
                _version: "0f6bc9e3-fb12-41ad-b40e-b8932a4fdbbd",
              },
              master_back: {
                uid: "4349475d-9c2d-4cdc-af1d-4a66f1a1dfbb",
                fileName: "doctor.png",
                metaInfo: {},
                _version: "0a80a079-cbd8-422a-bd6a-8c59ebdf4223",
              },
              thumbnail_front: {
                uid: "860a5b23-cbe9-41b7-a922-04e3043979ad",
                fileName: "pngrandom.png",
                metaInfo: {},
                _version: "befa501a-1213-49b3-aa17-11964cab3b94",
              },
              thumbnail_back: {
                uid: "4349475d-9c2d-4cdc-af1d-4a66f1a1dfbb",
                fileName: "doctor.png",
                metaInfo: {},
                _version: "c70c9d3a-53da-4bec-8ee3-5a61bf744d79",
              },
              view_front: {
                uid: "860a5b23-cbe9-41b7-a922-04e3043979ad",
                fileName: "pngrandom.png",
                metaInfo: {},
                _version: "581f6a15-ed74-43cf-acef-d76b330ebdbc",
              },
              view_back: {
                uid: "4349475d-9c2d-4cdc-af1d-4a66f1a1dfbb",
                fileName: "doctor.png",
                metaInfo: {},
                _version: "6817305e-c27d-492f-9ec6-49b1037dd31a",
              },
            },
            _id: "52555af2-348d-4db9-bc6a-0ec1e17babfa",
            _version: "60e5db8c-9d9a-462e-8c56-06273c64be27",
            _created: "Nov 2, 2022, 8:15:18 AM",
            _updated: "Nov 2, 2022, 8:15:18 AM",
            _createdBy: {
              _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
              _links: {
                self: {
                  href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                },
              },
            },
          },
          {
            beneficiary: {
              _links: {
                self: {
                  href: "/v1/patients/677c737d-7fad-4ab2-9515-4cebd7d8b6bb",
                },
              },
              _id: "677c737d-7fad-4ab2-9515-4cebd7d8b6bb",
              _version: "c0de7897-3088-4021-a91e-2b70cd7f8e89",
              _created: "Oct 24, 2022, 9:21:08 AM",
              _updated: "Nov 1, 2022, 7:06:08 PM",
              status: "UPDATED",
              _createdBy: {
                _id: "981ad89e-7fee-42d8-92ec-c34324d862a0",
                _links: {
                  self: {
                    href: "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0",
                  },
                },
              },
              _updatedBy: {
                _id: "981ad89e-7fee-42d8-92ec-c34324d862a0",
                _links: {
                  self: {
                    href: "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0",
                  },
                },
              },
            },
            insuranceType: "VISION",
            group: "",
            priority: "PRIMARY",
            subscriberRelation: 1,
            archive: true,
            active: false,
            selected: false,
            status: "CREATED",
            planAddress: "17795 W 106th ST., STE 202",
            planCity: "OLATHE",
            planName: "Eye Care",
            planPhone: "9367284736",
            planState: "KS",
            planZip: "66061",
            payer: {
              name: "EyeMed",
              absentDigitalId: true,
              _id: "2a7601c4-f9e7-4698-ae56-bbe44dee0c9a",
              _links: {
                self: {
                  href: "/v1/payers/2a7601c4-f9e7-4698-ae56-bbe44dee0c9a",
                },
              },
            },
            plan: {
              name: "Eye Care",
              _id: "b4a0e67e-a038-4726-a5c1-a019c6fdd6f8",
              _links: {
                self: {
                  href: "/v1/payers/2a7601c4-f9e7-4698-ae56-bbe44dee0c9a/plans/b4a0e67e-a038-4726-a5c1-a019c6fdd6f8",
                },
              },
            },
            isPatientSubscriber: true,
            subscriber: {
              firstName: "Fajar",
              lastName: "dev",
              dob: "01/01/1990",
              contactInformation: {
                preferredContactMethod: 0,
                phone: [{ type: 3, number: "(123) 123-1231" }],
                email: [{ type: 1, email: "fajar.dev4@photon.com" }],
              },
              title: 1,
              gender: 1,
              _id: "677c737d-7fad-4ab2-9515-4cebd7d8b6bb",
            },
            _links: {
              self: {
                href: "/insurance/v1/beneficiaries/677c737d-7fad-4ab2-9515-4cebd7d8b6bb/coverages/45c459bd-97da-4915-bdac-53543bdb152c",
              },
            },
            digitalAssets: {
              master_front: {
                uid: "25050add-a3c0-4cb7-9ea8-636ac95444dd",
                fileName: "pngrandom.png",
                metaInfo: {},
                _version: "d6d175d9-903c-40e1-8a8e-4c266ded30cc",
              },
              thumbnail_front: {
                uid: "25050add-a3c0-4cb7-9ea8-636ac95444dd",
                fileName: "pngrandom.png",
                metaInfo: {},
                _version: "f03a88ec-7917-4783-931d-cd469766f5c7",
              },
              view_front: {
                uid: "25050add-a3c0-4cb7-9ea8-636ac95444dd",
                fileName: "pngrandom.png",
                metaInfo: {},
                _version: "55d181bc-a5a1-49ad-af7a-dca0fd414f92",
              },
            },
            _id: "45c459bd-97da-4915-bdac-53543bdb152c",
            _version: "61ab3f96-8adc-4a4a-b631-2d76a08572d2",
            _created: "Nov 2, 2022, 8:10:25 AM",
            _updated: "Nov 2, 2022, 8:10:37 AM",
            _createdBy: {
              _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
              _links: {
                self: {
                  href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                },
              },
            },
            _updatedBy: {
              _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
              _links: {
                self: {
                  href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                },
              },
            },
          },
          {
            beneficiary: {
              _links: {
                self: {
                  href: "/v1/patients/677c737d-7fad-4ab2-9515-4cebd7d8b6bb",
                },
              },
              _id: "677c737d-7fad-4ab2-9515-4cebd7d8b6bb",
              _version: "c0de7897-3088-4021-a91e-2b70cd7f8e89",
              _created: "Oct 24, 2022, 9:21:08 AM",
              _updated: "Nov 1, 2022, 7:06:08 PM",
              status: "UPDATED",
              _createdBy: {
                _id: "981ad89e-7fee-42d8-92ec-c34324d862a0",
                _links: {
                  self: {
                    href: "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0",
                  },
                },
              },
              _updatedBy: {
                _id: "981ad89e-7fee-42d8-92ec-c34324d862a0",
                _links: {
                  self: {
                    href: "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0",
                  },
                },
              },
            },
            insuranceType: "VISION",
            group: "",
            priority: "PRIMARY",
            subscriberRelation: 1,
            archive: true,
            active: false,
            selected: false,
            status: "CREATED",
            planAddress: "17795 W 106th ST., STE 202",
            planCity: "OLATHE",
            planName: "Eye Care",
            planPhone: "9367284736",
            planState: "KS",
            planZip: "66061",
            payer: {
              name: "EyeMed",
              absentDigitalId: true,
              _id: "2a7601c4-f9e7-4698-ae56-bbe44dee0c9a",
              _links: {
                self: {
                  href: "/v1/payers/2a7601c4-f9e7-4698-ae56-bbe44dee0c9a",
                },
              },
            },
            plan: {
              name: "Eye Care",
              _id: "b4a0e67e-a038-4726-a5c1-a019c6fdd6f8",
              _links: {
                self: {
                  href: "/v1/payers/2a7601c4-f9e7-4698-ae56-bbe44dee0c9a/plans/b4a0e67e-a038-4726-a5c1-a019c6fdd6f8",
                },
              },
            },
            isPatientSubscriber: true,
            subscriber: {
              firstName: "Fajar",
              lastName: "dev",
              dob: "01/01/1990",
              contactInformation: {
                preferredContactMethod: 0,
                phone: [{ type: 3, number: "(123) 123-1231" }],
                email: [{ type: 1, email: "fajar.dev4@photon.com" }],
              },
              title: 1,
              gender: 1,
              _id: "677c737d-7fad-4ab2-9515-4cebd7d8b6bb",
            },
            _links: {
              self: {
                href: "/insurance/v1/beneficiaries/677c737d-7fad-4ab2-9515-4cebd7d8b6bb/coverages/b0cb1feb-9294-4974-95a8-326a822cd67c",
              },
            },
            digitalAssets: {},
            _id: "b0cb1feb-9294-4974-95a8-326a822cd67c",
            _version: "b2c6138c-d8bd-4786-8d49-15bba02368b6",
            _created: "Nov 2, 2022, 8:10:53 AM",
            _updated: "Nov 2, 2022, 8:10:58 AM",
            _createdBy: {
              _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
              _links: {
                self: {
                  href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                },
              },
            },
            _updatedBy: {
              _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
              _links: {
                self: {
                  href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                },
              },
            },
          },
        ],
        _links: { self: { href: "/api?pageNo=0&pageSize=100" } },
      });

    renderPage();
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
    mock
      .onGet(
        `/ecp/insurance/beneficiaries/98f9404b-6ea8-4732-b14f-9c1a168d8066/coverages`
      )
      .reply(200, {
        count: 3,
        entities: [
          {
            beneficiary: {
              _links: {
                self: {
                  href: "/v1/patients/677c737d-7fad-4ab2-9515-4cebd7d8b6bb",
                },
              },
              _id: "677c737d-7fad-4ab2-9515-4cebd7d8b6bb",
              _version: "c0de7897-3088-4021-a91e-2b70cd7f8e89",
              _created: "Oct 24, 2022, 9:21:08 AM",
              _updated: "Nov 1, 2022, 7:06:08 PM",
              status: "UPDATED",
              _createdBy: {
                _id: "981ad89e-7fee-42d8-92ec-c34324d862a0",
                _links: {
                  self: {
                    href: "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0",
                  },
                },
              },
              _updatedBy: {
                _id: "981ad89e-7fee-42d8-92ec-c34324d862a0",
                _links: {
                  self: {
                    href: "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0",
                  },
                },
              },
            },
            insuranceType: "VISION",
            group: "",
            priority: "PRIMARY",
            subscriberRelation: 1,
            archive: false,
            active: false,
            selected: false,
            status: "CREATED",
            planAddress: "17795 W 106th ST., STE 202",
            planCity: "OLATHE",
            planName: "Eye Care",
            planPhone: "9367284736",
            planState: "KS",
            planZip: "66061",
            payer: {
              name: "EyeMed",
              absentDigitalId: true,
              _id: "2a7601c4-f9e7-4698-ae56-bbe44dee0c9a",
              _links: {
                self: {
                  href: "/v1/payers/2a7601c4-f9e7-4698-ae56-bbe44dee0c9a",
                },
              },
            },
            plan: {
              name: "Eye Care",
              _id: "b4a0e67e-a038-4726-a5c1-a019c6fdd6f8",
              _links: {
                self: {
                  href: "/v1/payers/2a7601c4-f9e7-4698-ae56-bbe44dee0c9a/plans/b4a0e67e-a038-4726-a5c1-a019c6fdd6f8",
                },
              },
            },
            isPatientSubscriber: true,
            subscriber: {
              firstName: "Fajar",
              lastName: "dev",
              dob: "01/01/1990",
              contactInformation: {
                preferredContactMethod: 0,
                phone: [{ type: 3, number: "(123) 123-1231" }],
                email: [{ type: 1, email: "fajar.dev4@photon.com" }],
              },
              title: 1,
              gender: 1,
              _id: "677c737d-7fad-4ab2-9515-4cebd7d8b6bb",
            },
            _links: {
              self: {
                href: "/insurance/v1/beneficiaries/677c737d-7fad-4ab2-9515-4cebd7d8b6bb/coverages/52555af2-348d-4db9-bc6a-0ec1e17babfa",
              },
            },
            digitalAssets: {
              master_front: {
                uid: "860a5b23-cbe9-41b7-a922-04e3043979ad",
                fileName: "pngrandom.png",
                metaInfo: {},
                _version: "0f6bc9e3-fb12-41ad-b40e-b8932a4fdbbd",
              },
              master_back: {
                uid: "4349475d-9c2d-4cdc-af1d-4a66f1a1dfbb",
                fileName: "doctor.png",
                metaInfo: {},
                _version: "0a80a079-cbd8-422a-bd6a-8c59ebdf4223",
              },
              thumbnail_front: {
                uid: "860a5b23-cbe9-41b7-a922-04e3043979ad",
                fileName: "pngrandom.png",
                metaInfo: {},
                _version: "befa501a-1213-49b3-aa17-11964cab3b94",
              },
              thumbnail_back: {
                uid: "4349475d-9c2d-4cdc-af1d-4a66f1a1dfbb",
                fileName: "doctor.png",
                metaInfo: {},
                _version: "c70c9d3a-53da-4bec-8ee3-5a61bf744d79",
              },
              view_front: {
                uid: "860a5b23-cbe9-41b7-a922-04e3043979ad",
                fileName: "pngrandom.png",
                metaInfo: {},
                _version: "581f6a15-ed74-43cf-acef-d76b330ebdbc",
              },
              view_back: {
                uid: "4349475d-9c2d-4cdc-af1d-4a66f1a1dfbb",
                fileName: "doctor.png",
                metaInfo: {},
                _version: "6817305e-c27d-492f-9ec6-49b1037dd31a",
              },
            },
            _id: "52555af2-348d-4db9-bc6a-0ec1e17babfa",
            _version: "60e5db8c-9d9a-462e-8c56-06273c64be27",
            _created: "Nov 2, 2022, 8:15:18 AM",
            _updated: "Nov 2, 2022, 8:15:18 AM",
            _createdBy: {
              _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
              _links: {
                self: {
                  href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                },
              },
            },
          },
          {
            beneficiary: {
              _links: {
                self: {
                  href: "/v1/patients/677c737d-7fad-4ab2-9515-4cebd7d8b6bb",
                },
              },
              _id: "677c737d-7fad-4ab2-9515-4cebd7d8b6bb",
              _version: "c0de7897-3088-4021-a91e-2b70cd7f8e89",
              _created: "Oct 24, 2022, 9:21:08 AM",
              _updated: "Nov 1, 2022, 7:06:08 PM",
              status: "UPDATED",
              _createdBy: {
                _id: "981ad89e-7fee-42d8-92ec-c34324d862a0",
                _links: {
                  self: {
                    href: "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0",
                  },
                },
              },
              _updatedBy: {
                _id: "981ad89e-7fee-42d8-92ec-c34324d862a0",
                _links: {
                  self: {
                    href: "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0",
                  },
                },
              },
            },
            insuranceType: "VISION",
            group: "",
            priority: "PRIMARY",
            subscriberRelation: 1,
            archive: true,
            active: false,
            selected: false,
            status: "CREATED",
            planAddress: "17795 W 106th ST., STE 202",
            planCity: "OLATHE",
            planName: "Eye Care",
            planPhone: "9367284736",
            planState: "KS",
            planZip: "66061",
            payer: {
              name: "EyeMed",
              absentDigitalId: true,
              _id: "2a7601c4-f9e7-4698-ae56-bbe44dee0c9a",
              _links: {
                self: {
                  href: "/v1/payers/2a7601c4-f9e7-4698-ae56-bbe44dee0c9a",
                },
              },
            },
            plan: {
              name: "Eye Care",
              _id: "b4a0e67e-a038-4726-a5c1-a019c6fdd6f8",
              _links: {
                self: {
                  href: "/v1/payers/2a7601c4-f9e7-4698-ae56-bbe44dee0c9a/plans/b4a0e67e-a038-4726-a5c1-a019c6fdd6f8",
                },
              },
            },
            isPatientSubscriber: true,
            subscriber: {
              firstName: "Fajar",
              lastName: "dev",
              dob: "01/01/1990",
              contactInformation: {
                preferredContactMethod: 0,
                phone: [{ type: 3, number: "(123) 123-1231" }],
                email: [{ type: 1, email: "fajar.dev4@photon.com" }],
              },
              title: 1,
              gender: 1,
              _id: "677c737d-7fad-4ab2-9515-4cebd7d8b6bb",
            },
            _links: {
              self: {
                href: "/insurance/v1/beneficiaries/677c737d-7fad-4ab2-9515-4cebd7d8b6bb/coverages/45c459bd-97da-4915-bdac-53543bdb152c",
              },
            },
            digitalAssets: {
              master_front: {
                uid: "25050add-a3c0-4cb7-9ea8-636ac95444dd",
                fileName: "pngrandom.png",
                metaInfo: {},
                _version: "d6d175d9-903c-40e1-8a8e-4c266ded30cc",
              },
              thumbnail_front: {
                uid: "25050add-a3c0-4cb7-9ea8-636ac95444dd",
                fileName: "pngrandom.png",
                metaInfo: {},
                _version: "f03a88ec-7917-4783-931d-cd469766f5c7",
              },
              view_front: {
                uid: "25050add-a3c0-4cb7-9ea8-636ac95444dd",
                fileName: "pngrandom.png",
                metaInfo: {},
                _version: "55d181bc-a5a1-49ad-af7a-dca0fd414f92",
              },
            },
            _id: "45c459bd-97da-4915-bdac-53543bdb152c",
            _version: "61ab3f96-8adc-4a4a-b631-2d76a08572d2",
            _created: "Nov 2, 2022, 8:10:25 AM",
            _updated: "Nov 2, 2022, 8:10:37 AM",
            _createdBy: {
              _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
              _links: {
                self: {
                  href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                },
              },
            },
            _updatedBy: {
              _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
              _links: {
                self: {
                  href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                },
              },
            },
          },
          {
            beneficiary: {
              _links: {
                self: {
                  href: "/v1/patients/677c737d-7fad-4ab2-9515-4cebd7d8b6bb",
                },
              },
              _id: "677c737d-7fad-4ab2-9515-4cebd7d8b6bb",
              _version: "c0de7897-3088-4021-a91e-2b70cd7f8e89",
              _created: "Oct 24, 2022, 9:21:08 AM",
              _updated: "Nov 1, 2022, 7:06:08 PM",
              status: "UPDATED",
              _createdBy: {
                _id: "981ad89e-7fee-42d8-92ec-c34324d862a0",
                _links: {
                  self: {
                    href: "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0",
                  },
                },
              },
              _updatedBy: {
                _id: "981ad89e-7fee-42d8-92ec-c34324d862a0",
                _links: {
                  self: {
                    href: "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0",
                  },
                },
              },
            },
            insuranceType: "VISION",
            group: "",
            priority: "PRIMARY",
            subscriberRelation: 1,
            archive: true,
            active: false,
            selected: false,
            status: "CREATED",
            planAddress: "17795 W 106th ST., STE 202",
            planCity: "OLATHE",
            planName: "Eye Care",
            planPhone: "9367284736",
            planState: "KS",
            planZip: "66061",
            payer: {
              name: "EyeMed",
              absentDigitalId: true,
              _id: "2a7601c4-f9e7-4698-ae56-bbe44dee0c9a",
              _links: {
                self: {
                  href: "/v1/payers/2a7601c4-f9e7-4698-ae56-bbe44dee0c9a",
                },
              },
            },
            plan: {
              name: "Eye Care",
              _id: "b4a0e67e-a038-4726-a5c1-a019c6fdd6f8",
              _links: {
                self: {
                  href: "/v1/payers/2a7601c4-f9e7-4698-ae56-bbe44dee0c9a/plans/b4a0e67e-a038-4726-a5c1-a019c6fdd6f8",
                },
              },
            },
            isPatientSubscriber: true,
            subscriber: {
              firstName: "Fajar",
              lastName: "dev",
              dob: "01/01/1990",
              contactInformation: {
                preferredContactMethod: 0,
                phone: [{ type: 3, number: "(123) 123-1231" }],
                email: [{ type: 1, email: "fajar.dev4@photon.com" }],
              },
              title: 1,
              gender: 1,
              _id: "677c737d-7fad-4ab2-9515-4cebd7d8b6bb",
            },
            _links: {
              self: {
                href: "/insurance/v1/beneficiaries/677c737d-7fad-4ab2-9515-4cebd7d8b6bb/coverages/b0cb1feb-9294-4974-95a8-326a822cd67c",
              },
            },
            digitalAssets: {},
            _id: "b0cb1feb-9294-4974-95a8-326a822cd67c",
            _version: "b2c6138c-d8bd-4786-8d49-15bba02368b6",
            _created: "Nov 2, 2022, 8:10:53 AM",
            _updated: "Nov 2, 2022, 8:10:58 AM",
            _createdBy: {
              _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
              _links: {
                self: {
                  href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                },
              },
            },
            _updatedBy: {
              _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
              _links: {
                self: {
                  href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                },
              },
            },
          },
        ],
        _links: { self: { href: "/api?pageNo=0&pageSize=100" } },
      });

    renderPage();

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
  }, 30000);

  it("Add more insurance", async () => {
    mock
      .onGet(
        `/ecp/insurance/beneficiaries/98f9404b-6ea8-4732-b14f-9c1a168d8066/coverages`
      )
      .reply(200, {
        count: 3,
        entities: [
          {
            beneficiary: {
              _links: {
                self: {
                  href: "/v1/patients/677c737d-7fad-4ab2-9515-4cebd7d8b6bb",
                },
              },
              _id: "677c737d-7fad-4ab2-9515-4cebd7d8b6bb",
              _version: "c0de7897-3088-4021-a91e-2b70cd7f8e89",
              _created: "Oct 24, 2022, 9:21:08 AM",
              _updated: "Nov 1, 2022, 7:06:08 PM",
              status: "UPDATED",
              _createdBy: {
                _id: "981ad89e-7fee-42d8-92ec-c34324d862a0",
                _links: {
                  self: {
                    href: "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0",
                  },
                },
              },
              _updatedBy: {
                _id: "981ad89e-7fee-42d8-92ec-c34324d862a0",
                _links: {
                  self: {
                    href: "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0",
                  },
                },
              },
            },
            insuranceType: "VISION",
            group: "",
            priority: "PRIMARY",
            subscriberRelation: 1,
            archive: false,
            active: false,
            selected: false,
            status: "CREATED",
            planAddress: "17795 W 106th ST., STE 202",
            planCity: "OLATHE",
            planName: "Eye Care",
            planPhone: "9367284736",
            planState: "KS",
            planZip: "66061",
            payer: {
              name: "EyeMed",
              absentDigitalId: true,
              _id: "2a7601c4-f9e7-4698-ae56-bbe44dee0c9a",
              _links: {
                self: {
                  href: "/v1/payers/2a7601c4-f9e7-4698-ae56-bbe44dee0c9a",
                },
              },
            },
            plan: {
              name: "Eye Care",
              _id: "b4a0e67e-a038-4726-a5c1-a019c6fdd6f8",
              _links: {
                self: {
                  href: "/v1/payers/2a7601c4-f9e7-4698-ae56-bbe44dee0c9a/plans/b4a0e67e-a038-4726-a5c1-a019c6fdd6f8",
                },
              },
            },
            isPatientSubscriber: true,
            subscriber: {
              firstName: "Fajar",
              lastName: "dev",
              dob: "01/01/1990",
              contactInformation: {
                preferredContactMethod: 0,
                phone: [{ type: 3, number: "(123) 123-1231" }],
                email: [{ type: 1, email: "fajar.dev4@photon.com" }],
              },
              title: 1,
              gender: 1,
              _id: "677c737d-7fad-4ab2-9515-4cebd7d8b6bb",
            },
            _links: {
              self: {
                href: "/insurance/v1/beneficiaries/677c737d-7fad-4ab2-9515-4cebd7d8b6bb/coverages/52555af2-348d-4db9-bc6a-0ec1e17babfa",
              },
            },
            digitalAssets: {
              master_front: {
                uid: "860a5b23-cbe9-41b7-a922-04e3043979ad",
                fileName: "pngrandom.png",
                metaInfo: {},
                _version: "0f6bc9e3-fb12-41ad-b40e-b8932a4fdbbd",
              },
              master_back: {
                uid: "4349475d-9c2d-4cdc-af1d-4a66f1a1dfbb",
                fileName: "doctor.png",
                metaInfo: {},
                _version: "0a80a079-cbd8-422a-bd6a-8c59ebdf4223",
              },
              thumbnail_front: {
                uid: "860a5b23-cbe9-41b7-a922-04e3043979ad",
                fileName: "pngrandom.png",
                metaInfo: {},
                _version: "befa501a-1213-49b3-aa17-11964cab3b94",
              },
              thumbnail_back: {
                uid: "4349475d-9c2d-4cdc-af1d-4a66f1a1dfbb",
                fileName: "doctor.png",
                metaInfo: {},
                _version: "c70c9d3a-53da-4bec-8ee3-5a61bf744d79",
              },
              view_front: {
                uid: "860a5b23-cbe9-41b7-a922-04e3043979ad",
                fileName: "pngrandom.png",
                metaInfo: {},
                _version: "581f6a15-ed74-43cf-acef-d76b330ebdbc",
              },
              view_back: {
                uid: "4349475d-9c2d-4cdc-af1d-4a66f1a1dfbb",
                fileName: "doctor.png",
                metaInfo: {},
                _version: "6817305e-c27d-492f-9ec6-49b1037dd31a",
              },
            },
            _id: "52555af2-348d-4db9-bc6a-0ec1e17babfa",
            _version: "60e5db8c-9d9a-462e-8c56-06273c64be27",
            _created: "Nov 2, 2022, 8:15:18 AM",
            _updated: "Nov 2, 2022, 8:15:18 AM",
            _createdBy: {
              _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
              _links: {
                self: {
                  href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                },
              },
            },
          },
          {
            beneficiary: {
              _links: {
                self: {
                  href: "/v1/patients/677c737d-7fad-4ab2-9515-4cebd7d8b6bb",
                },
              },
              _id: "677c737d-7fad-4ab2-9515-4cebd7d8b6bb",
              _version: "c0de7897-3088-4021-a91e-2b70cd7f8e89",
              _created: "Oct 24, 2022, 9:21:08 AM",
              _updated: "Nov 1, 2022, 7:06:08 PM",
              status: "UPDATED",
              _createdBy: {
                _id: "981ad89e-7fee-42d8-92ec-c34324d862a0",
                _links: {
                  self: {
                    href: "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0",
                  },
                },
              },
              _updatedBy: {
                _id: "981ad89e-7fee-42d8-92ec-c34324d862a0",
                _links: {
                  self: {
                    href: "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0",
                  },
                },
              },
            },
            insuranceType: "VISION",
            group: "",
            priority: "PRIMARY",
            subscriberRelation: 1,
            archive: true,
            active: false,
            selected: false,
            status: "CREATED",
            planAddress: "17795 W 106th ST., STE 202",
            planCity: "OLATHE",
            planName: "Eye Care",
            planPhone: "9367284736",
            planState: "KS",
            planZip: "66061",
            payer: {
              name: "EyeMed",
              absentDigitalId: true,
              _id: "2a7601c4-f9e7-4698-ae56-bbe44dee0c9a",
              _links: {
                self: {
                  href: "/v1/payers/2a7601c4-f9e7-4698-ae56-bbe44dee0c9a",
                },
              },
            },
            plan: {
              name: "Eye Care",
              _id: "b4a0e67e-a038-4726-a5c1-a019c6fdd6f8",
              _links: {
                self: {
                  href: "/v1/payers/2a7601c4-f9e7-4698-ae56-bbe44dee0c9a/plans/b4a0e67e-a038-4726-a5c1-a019c6fdd6f8",
                },
              },
            },
            isPatientSubscriber: true,
            subscriber: {
              firstName: "Fajar",
              lastName: "dev",
              dob: "01/01/1990",
              contactInformation: {
                preferredContactMethod: 0,
                phone: [{ type: 3, number: "(123) 123-1231" }],
                email: [{ type: 1, email: "fajar.dev4@photon.com" }],
              },
              title: 1,
              gender: 1,
              _id: "677c737d-7fad-4ab2-9515-4cebd7d8b6bb",
            },
            _links: {
              self: {
                href: "/insurance/v1/beneficiaries/677c737d-7fad-4ab2-9515-4cebd7d8b6bb/coverages/45c459bd-97da-4915-bdac-53543bdb152c",
              },
            },
            digitalAssets: {
              master_front: {
                uid: "25050add-a3c0-4cb7-9ea8-636ac95444dd",
                fileName: "pngrandom.png",
                metaInfo: {},
                _version: "d6d175d9-903c-40e1-8a8e-4c266ded30cc",
              },
              thumbnail_front: {
                uid: "25050add-a3c0-4cb7-9ea8-636ac95444dd",
                fileName: "pngrandom.png",
                metaInfo: {},
                _version: "f03a88ec-7917-4783-931d-cd469766f5c7",
              },
              view_front: {
                uid: "25050add-a3c0-4cb7-9ea8-636ac95444dd",
                fileName: "pngrandom.png",
                metaInfo: {},
                _version: "55d181bc-a5a1-49ad-af7a-dca0fd414f92",
              },
            },
            _id: "45c459bd-97da-4915-bdac-53543bdb152c",
            _version: "61ab3f96-8adc-4a4a-b631-2d76a08572d2",
            _created: "Nov 2, 2022, 8:10:25 AM",
            _updated: "Nov 2, 2022, 8:10:37 AM",
            _createdBy: {
              _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
              _links: {
                self: {
                  href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                },
              },
            },
            _updatedBy: {
              _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
              _links: {
                self: {
                  href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                },
              },
            },
          },
          {
            beneficiary: {
              _links: {
                self: {
                  href: "/v1/patients/677c737d-7fad-4ab2-9515-4cebd7d8b6bb",
                },
              },
              _id: "677c737d-7fad-4ab2-9515-4cebd7d8b6bb",
              _version: "c0de7897-3088-4021-a91e-2b70cd7f8e89",
              _created: "Oct 24, 2022, 9:21:08 AM",
              _updated: "Nov 1, 2022, 7:06:08 PM",
              status: "UPDATED",
              _createdBy: {
                _id: "981ad89e-7fee-42d8-92ec-c34324d862a0",
                _links: {
                  self: {
                    href: "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0",
                  },
                },
              },
              _updatedBy: {
                _id: "981ad89e-7fee-42d8-92ec-c34324d862a0",
                _links: {
                  self: {
                    href: "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0",
                  },
                },
              },
            },
            insuranceType: "VISION",
            group: "",
            priority: "PRIMARY",
            subscriberRelation: 1,
            archive: true,
            active: false,
            selected: false,
            status: "CREATED",
            planAddress: "17795 W 106th ST., STE 202",
            planCity: "OLATHE",
            planName: "Eye Care",
            planPhone: "9367284736",
            planState: "KS",
            planZip: "66061",
            payer: {
              name: "EyeMed",
              absentDigitalId: true,
              _id: "2a7601c4-f9e7-4698-ae56-bbe44dee0c9a",
              _links: {
                self: {
                  href: "/v1/payers/2a7601c4-f9e7-4698-ae56-bbe44dee0c9a",
                },
              },
            },
            plan: {
              name: "Eye Care",
              _id: "b4a0e67e-a038-4726-a5c1-a019c6fdd6f8",
              _links: {
                self: {
                  href: "/v1/payers/2a7601c4-f9e7-4698-ae56-bbe44dee0c9a/plans/b4a0e67e-a038-4726-a5c1-a019c6fdd6f8",
                },
              },
            },
            isPatientSubscriber: true,
            subscriber: {
              firstName: "Fajar",
              lastName: "dev",
              dob: "01/01/1990",
              contactInformation: {
                preferredContactMethod: 0,
                phone: [{ type: 3, number: "(123) 123-1231" }],
                email: [{ type: 1, email: "fajar.dev4@photon.com" }],
              },
              title: 1,
              gender: 1,
              _id: "677c737d-7fad-4ab2-9515-4cebd7d8b6bb",
            },
            _links: {
              self: {
                href: "/insurance/v1/beneficiaries/677c737d-7fad-4ab2-9515-4cebd7d8b6bb/coverages/b0cb1feb-9294-4974-95a8-326a822cd67c",
              },
            },
            digitalAssets: {},
            _id: "b0cb1feb-9294-4974-95a8-326a822cd67c",
            _version: "b2c6138c-d8bd-4786-8d49-15bba02368b6",
            _created: "Nov 2, 2022, 8:10:53 AM",
            _updated: "Nov 2, 2022, 8:10:58 AM",
            _createdBy: {
              _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
              _links: {
                self: {
                  href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                },
              },
            },
            _updatedBy: {
              _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
              _links: {
                self: {
                  href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                },
              },
            },
          },
        ],
        _links: { self: { href: "/api?pageNo=0&pageSize=100" } },
      });

    await renderPage();

    const addMoreBtn = await waitFor(() =>
      container.getAllByTestId(constants.TEST_ID.INSURANCE_TEST_ID.addButton)
    );
    fireEvent.click(addMoreBtn[0]);
  }, 30000);
});
