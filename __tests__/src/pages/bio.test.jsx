import Bio, { getStaticProps } from "../../../src/pages/patient/bio";
import "@testing-library/jest-dom";
import { act, fireEvent, render, waitFor } from "@testing-library/react";
import store from "../../../src/store/store";
import { Provider } from "react-redux";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import constants from "../../../src/utils/constants";
const useRouter = jest.spyOn(require("next/router"), "useRouter");

describe("Render Bio", () => {
  let container;
  const mock = new MockAdapter(axios);
  const TEST_ID = constants.TEST_ID.BIOGRAPHY_TEST_ID;
  const userData = {
    providerId: "1",
    image: "/doctor.png",
    name: "Paul Wagner Md",
    rating: "5",
    phoneNumber: "8572999989",
    specialties: ["Opthometry", "Opthalmology", "Catarac", "Glaucoma"],
    about:
      "Dr. Esfandiari’s current areas of emphasis include primary eye care, specialty contact lenses, refractive surgery consultation, surgical co-management. Dr. Esfandiari’s knowledge and experience in ophthalmic optics has continually helped patients obtain optimal and healthy vision.show more",
    gender: "Male",
    address: {
      addressLine1: "51 West 51st Street",
      addressLine2: "Floor 3, Suite 320 Midtown",
      city: "Florida",
      state: "FR",
      zipcode: "54231",
    },
    distance: "10 mi",
    language: ["English", "Spanish"],
    networkInsurance: [
      "Blue Cross Blue Shield",
      "Cigna",
      "UnitedHeathcare",
      "Blue Cross Blue Shield 2",
      "Cigna 2",
      "UnitedHeathcare 2",
      "Blue Cross Blue Shield 3",
      "Cigna 3",
      "UnitedHeathcare 3",
    ],
    education: [
      "New England College of Optometry, Doctor of Optometry",
      "University of California, San Diego (Bachelor’s)",
    ],
    membershipsAffiliation: [
      "New England College of Optometry, Doctor of Optometry",
      "University of California, San Diego (Bachelor’s)",
    ],
  };
  beforeEach(async () => {
    useRouter.mockReturnValue({
      back: jest.fn(),
    });
    window.scrollTo = jest.fn();
    mock
      .onPost(
        `${window.location.origin}/api/dummy/appointment/biography/getProviderDetails`
      )
      .reply(200, userData);
    const props = await getStaticProps();
    act(() => {
      container = render(
        <Provider store={store}>{Bio.getLayout(<Bio {...props} />)}</Provider>
      );
    });

    await waitFor(() => {
      container.getByTestId(TEST_ID.viewAll);
    });
  });

  afterAll(() => {
    mock.reset();
  });

  test("is Bio page render", () => {
    expect(container.getByTestId(TEST_ID.viewAll)).toBeInTheDocument();
    act(() => {
      fireEvent.click(container.getByTestId(TEST_ID.viewAll));
    });
    expect(container.getByText(/Cigna 3/i)).toBeInTheDocument();
  });

  test("Bio Click About", () => {
    expect(container.getByTestId(TEST_ID.about)).toBeInTheDocument();
    fireEvent.click(container.getByTestId(TEST_ID.about));
  });

  test("Bio Click Location", () => {
    expect(container.getByTestId(TEST_ID.location)).toBeInTheDocument();
    fireEvent.click(container.getByTestId(TEST_ID.location));
  });

  test("Bio Click Insurance", () => {
    expect(container.getByTestId(TEST_ID.insurance)).toBeInTheDocument();
    fireEvent.click(container.getByTestId(TEST_ID.insurance));
  });

  test("Bio Click Education", () => {
    expect(container.getByTestId(TEST_ID.education)).toBeInTheDocument();
    fireEvent.click(container.getByTestId(TEST_ID.education));
  });

  test("Bio Click SubNav", () => {
    expect(
      container.getByTestId(constants.TEST_ID.SUBNAVIGATION)
    ).toBeInTheDocument();
    fireEvent.click(container.getByTestId(constants.TEST_ID.SUBNAVIGATION));
  });
});
