import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ProfilePhotoUploader } from "../../../../src/components/molecules/ProfilePhotoUploader/profilePhotoUploader";
import { faker } from "@faker-js/faker";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

describe("ProfilePhotoUploader Components", () => {
  let container;
  const landscapeImage = faker.image.imageUrl(275, 173);
  const profilePhoto = {
    name: "my-photo.jpg",
    source: landscapeImage,
  };
  const mockCallBack = jest.fn();

  it("ProfilePhotoUploader render", async () => {
    container = render(
      <ProfilePhotoUploader
        username={"John"}
        OnInputError={jest.fn()}
        source={profilePhoto}
        OnPhotoChange={mockCallBack}
      />);
    const id = "6376481f-e317-4e44-a852-5e0395446140"
    const mock = new MockAdapter(axios);
    mock
      .onGet(`/ecp/digital-asset/v1/asset/${id}`)
      .reply(200, { presignedUrl: "http://localhost/my-photo.jpg" });
    expect(container.getByTestId("loc_uploadProfileImage")).toBeInTheDocument()
  });

  it("ProfilePhotoUploader render", async () => {
    cleanup()
    const mockCallBack = jest.fn();
    container = render(<ProfilePhotoUploader />);
    const id = "6376481f-e317-4e44-a852-5e0395446140"
    const mock = new MockAdapter(axios);
    const imageMock = {
      "name": "Merabu_02.jpg",
      "originalFileName": "Merabu_02.jpg",
      "type": "jpeg",
      "subType": "image",
      "description": "Merabu_02.jpg",
      "remoteLocation": {
        "bucketName": "dgassets-bucket1",
        "region": "us-east-1",
        "locationType": "AWS"
      },
      "presignedUrl": "https://dgassets-bucket1.s3.amazonaws.com/1ffaf737-57ac-4660-8a32-f0650e2285ae?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221003T051746Z&X-Amz-SignedHeaders=host&X-Amz-Expires=900&X-Amz-Credential=AKIAQ2MAPFH4C64PCZO6%2F20221003%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=80e799bb9072758f67f3abd71e3ae8d8f8248cf8378fd7412d1e725cf4f88c96",
    }
    mock
      .onGet(`/ecp/digital-asset/v1/asset/${id}`)
      .reply(200, imageMock);
    mock
      .onGet(imageMock.presignedUrl, { responseType: "blob" })
      .reply(200, { data: "test", success: true })
    mock
      .onPut(`/ecp/digital-asset/v1/asset`)
      .reply(200, { success: true, status: "success" });
    fireEvent.click(container.getByTestId("loc_uploadProfileImage"))
    expect(container.getByTestId("loc_uploadProfileImage")).toBeInTheDocument()
  });
});
