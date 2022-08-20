import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ImageUploader } from "../../../../src/components/molecules/ImageUploader/imageUploader";
import { faker } from "@faker-js/faker";

describe("ImageUploader Components", () => {
  let container;
  const landscapeImage = faker.image.imageUrl(275, 173);
  const mockCallBack = jest.fn();
  beforeEach(() => {
    container = render(<ImageUploader source={landscapeImage} OnUpload={mockCallBack}
        label="Upload Front"
        width="100%"
        src="/login-bg.png"
        alt=""/>);
  });

  it("ImageUploader render", () => {
    expect(container).toMatchSnapshot();
    expect(container.getByText("*JPG or PNG file formats only. (File size limit is 4 MB)")).toBeInTheDocument();
  });
});
