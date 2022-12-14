// import store from "../../../src/store/index";
import reducer, {
  closePageMessage,
  increment,
  resetFormMessage,
  resetPageMessage,
  setFormMessage,
  setGenericErrorMessage,
  setLoading,
  setPageMessage,
  fetchToken,
} from "../../../src/store/index";
import store from "../../../src/store/store";

const DEFAULT_FORM_MESSAGE = { success: null, title: null, content: null };
const DEFAULT_PAGE_MESSAGE = {
  isShow: false,
  success: null,
  title: null,
  content: null,
};
import { Api } from "../../../src/pages/api/api";

const NEW_FORM_MESSAGE = { success: true, title: "test", content: "test" };
const NEW_PAGE_MESSAGE = {
  isShow: false,
  success: true,
  title: "test",
  content: "test",
};

const INITIAL_STATE = {
  loading: true,
  counter: 0,
  formMessage: DEFAULT_FORM_MESSAGE,
  pageMessage: DEFAULT_PAGE_MESSAGE,
  isBackToLogin: false,
  genericErrorMessage: null,
  accessToken: null,
  isShowModalError: false,
  mfaPageTitle: "Multi-Factor Authentication",
  loginMessage: null,
};

describe("Store Index", () => {
  it("should return the initial state'", () => {
    const result = reducer(undefined, { type: undefined });
    expect(result).toEqual(INITIAL_STATE);
  });

  it("should handle setReducer'", () => {
    let result = reducer(INITIAL_STATE, setLoading(false));
    expect(result?.loading).toEqual(false);
    result = reducer(INITIAL_STATE, increment());
    expect(result?.counter).toEqual(1);
    result = reducer(INITIAL_STATE, setFormMessage(NEW_FORM_MESSAGE));
    expect(result?.formMessage).toEqual(NEW_FORM_MESSAGE);

    result = reducer(INITIAL_STATE, resetFormMessage());
    expect(result?.formMessage).toEqual(DEFAULT_FORM_MESSAGE);

    result = reducer(INITIAL_STATE, setPageMessage(NEW_PAGE_MESSAGE));
    expect(result?.pageMessage).toEqual(NEW_PAGE_MESSAGE);

    result = reducer(INITIAL_STATE, closePageMessage());
    expect(result?.pageMessage).toEqual({
      ...DEFAULT_PAGE_MESSAGE,
      isShow: false,
    });

    result = reducer(INITIAL_STATE, resetPageMessage());
    expect(result?.pageMessage).toEqual(DEFAULT_PAGE_MESSAGE);

    result = reducer(INITIAL_STATE, setGenericErrorMessage({ success: true }));
    expect(result?.genericErrorMessage).toEqual({ success: true });
  });

  it("Should handle extra reducer", async () => {
    let action = { type: fetchToken.pending.type };
    let result = reducer(INITIAL_STATE, action);
    expect(result).toEqual({ ...INITIAL_STATE, status: "loading" });

    action = {
      type: fetchToken.fulfilled.type,
      payload: { access_token: "01" },
    };
    result = reducer(INITIAL_STATE, action);
    expect(result).toEqual({
      ...INITIAL_STATE,
      status: "success",
      accessToken: "01",
    });

    action = {
      type: fetchToken.rejected.type,
    };
    result = reducer(INITIAL_STATE, action);
    expect(result).toEqual({
      ...INITIAL_STATE,
      status: "failed",
    });
  });

  it("should access token fulfilled", async () => {
    const result = await store.dispatch(fetchToken({ access_token: "001" }));
    expect(result?.payload).toEqual(undefined);
  });
});
