import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ImageUploader } from "../../../../src/components/molecules/ImageUploader/imageUploader";
import { faker } from "@faker-js/faker";

describe("ImageUploader Components", () => {
  let container;
  const mockImageSource = {
    uid:"6376481f-e317-4e44-a852-5e0395446140",
    fileName:"Merabu_02.jpg",
    metaInfo: {},
    _version:"40e37049-7f0e-4049-a83c-104bf7d84cb8"
  }
  const mockCallBack = jest.fn();
  it("ImageUploader render", async () => {
    container = render(
      <ImageUploader
        source={null}
        OnUpload={mockCallBack}
        label="Upload Front"
        width="100%"
        alt=""
      />
    );

    await waitFor(() => container.getByText("Upload Front"));
    expect(container.getByText("Upload Front")).toBeInTheDocument();
  });

  it("ImageUploader render with image", async () => {
    container = render(
      <ImageUploader
        source={mockImageSource}
        OnUpload={mockCallBack}
        label="Upload Front"
        width="100%"
        alt=""
      />
    );

    await waitFor(() => container.getByText("Change file"));
    expect(container.getByText("Change file")).toBeInTheDocument();
  });
});
