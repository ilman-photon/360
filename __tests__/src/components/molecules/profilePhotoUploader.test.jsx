import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ProfilePhotoUploader } from "../../../../src/components/molecules/ProfilePhotoUploader/profilePhotoUploader";
import { faker } from "@faker-js/faker";

describe("ProfilePhotoUploader Components", () => {
  let container;
  const landscapeImage = faker.image.imageUrl(275, 173);
  const mockCallBack = jest.fn();
  beforeEach(() => {
    container = render(<ProfilePhotoUploader source={landscapeImage} OnPhotoChange={mockCallBack}
        />);
  });

  it("ProfilePhotoUploader render", () => {
    expect(container).toMatchSnapshot();
    expect(container.getAllByRole("button", { name: "change photo" })[0]).toBeVisible();
  });

});
