import axios from "axios";
import DigitalAssetsHandler from "./digitalAssetsHandler";

function download(url, newTab = true) {
  const a = document.createElement("a");
  a.target = newTab ? "_blank" : "";

  a.href = url;
  a.download = url.split("/").pop();
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

async function print(url) {
  const response = await axios.get(url, { responseType: "blob" });
  const blobURL = URL.createObjectURL(response.data);

  const a = document.createElement("a");
  a.href = `javascript: var w=window.open("${blobURL}"); function printContent() {w.print(); w.focus();}; printContent(); `;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

export const fetchSource = async (id, isPrint = false, newTab = true) => {
  if (!id) {
    return;
  }

  const source = {
    _id: id,
  };
  const digitalAsset = new DigitalAssetsHandler();
  digitalAsset.setSource(source);
  try {
    const response = await digitalAsset.fetchSourceURL();
    if (response) {
      if (isPrint) {
        print(response.presignedUrl);
      } else {
        download(response.presignedUrl, newTab);
      }
      return {
        success: true,
        response,
      };
    } else {
      return {
        success: false,
        response,
      };
    }
  } catch (error) {
    console.error({ error });
  }
};
