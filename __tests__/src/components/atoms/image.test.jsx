import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Image from "../../../../src/components/atoms/Image/image";

jest.mock(
  "next/image",
  () =>
    function Image({ src, alt, onLoadingComplete, onError }) {
      onLoadingComplete({
        naturalWidth: 0,
      });
      onError();
      // eslint-disable-next-line @next/next/no-img-element
      return <img src={src} alt={alt} />;
    }
);
describe("Image Components", () => {
  let container;
  beforeEach(() => {
    container = render(
      <Image
        source="https://picsum.photos/200/300"
        width={10}
        height={20}
        alt="test"
      />
    );
  });
  it("is button render", () => {
    expect(container).toBeTruthy();
  });
});
