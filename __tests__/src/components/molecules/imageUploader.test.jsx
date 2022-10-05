import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ImageUploader } from "../../../../src/components/molecules/ImageUploader/imageUploader";
import { faker } from "@faker-js/faker";

describe("ImageUploader Components", () => {
  let container;
  const landscapeImage = faker.image.imageUrl(275, 173);
  const mockCallBack = jest.fn();
  beforeEach(() => {
    container = render(
      <ImageUploader
        source={landscapeImage}
        OnUpload={mockCallBack}
        label="Upload Front"
        width="100%"
        src="/login-bg.png"
        alt=""
      />
    );
  });

  it("ImageUploader render", async () => {
    await waitFor(() => container.getByText("Change file"));
    expect(container.getByText("Change file")).toBeInTheDocument();

    container.rerender(
      <ImageUploader
        source={""}
        OnUpload={mockCallBack}
        label="Upload Front"
        width="100%"
        src=""
        alt=""
      />
    );

    expect(container.getByText("Upload Front")).toBeInTheDocument();
  });
});
