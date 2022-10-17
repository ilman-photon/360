import DigitalAssetsHandler from "./digitalAssetsHandler";

function download(url) {
  const a = document.createElement("a");
  a.target = "_blank";
  a.href = url;
  a.download = url.split("/").pop();
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

export const fetchSource = async (id) => {
  if (!id) {
    return;
  }

  const source = {
    _id: id,
  };
  const digitalAsset = new DigitalAssetsHandler();
  digitalAsset.setSource(source);
  const response = await digitalAsset.fetchSourceURL();
  if (response) {
    download(response.presignedUrl);
  }
};
