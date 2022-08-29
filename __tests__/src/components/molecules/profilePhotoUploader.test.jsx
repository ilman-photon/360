import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ProfilePhotoUploader } from "../../../../src/components/molecules/ProfilePhotoUploader/profilePhotoUploader";
import { faker } from "@faker-js/faker";

describe("ProfilePhotoUploader Components", () => {
  let container;
  const landscapeImage = faker.image.imageUrl(275, 173);
  const profilePhoto = {
    name: "my-photo.jpg",
    source: landscapeImage,
  };
  const mockCallBack = jest.fn();
  beforeEach(() => {
    container = render(
      <ProfilePhotoUploader
        source={profilePhoto}
        OnPhotoChange={mockCallBack}
      />
    );
  });

  it("ProfilePhotoUploader render", () => {
    expect(container).toMatchSnapshot();
    expect(
      container.getAllByRole("button", { name: "Change photo" })[0]
    ).toBeVisible();
  });
});
