import CustomDocuments from "../../../src/pages/_document";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Document from "next/document";

jest.mock("next/document");

describe("App", () => {
  let props, container;
  beforeEach(() => {});
  it("renders CustomDocuments unchanged", async () => {
    Document.getInitialProps = (ctx) => {
      ctx.renderPage();
    };
    props = await CustomDocuments.getInitialProps({
      renderPage: ({ enhanceApp, enhanceComponent }) => {
        enhanceApp(<></>);
        enhanceComponent(<></>);
      },
      defaultGetInitialProps: jest.fn(),
    });
    container = render(<CustomDocuments {...props} />);
    
  });
});
