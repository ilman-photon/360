import axios from "axios";
import DigitalAssetsHandler from "./digitalAssetsHandler";
import JSZip from "jszip";
import { saveAs } from "file-saver";

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
  a.href = `javascript: var w=window.open("${blobURL}"); function printContent() {w.print(); w.focus()}; printContent(); `;
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

export const downloadMultipleAsset = async (attachments) => {
  let promises = [];
  for (let i = 0; i < attachments.length; i++) {
    const element = attachments[i];
    const source = {
      _id: element.id,
    };
    const digitalAsset = new DigitalAssetsHandler();
    digitalAsset.setSource(source);

    try {
      const response = await digitalAsset.fetchSourceURL();
      if (response) {
        const blobURL = await digitalAsset.fetchBlob(response.presignedUrl);
        const file = { fileName: element.fileName, content: blobURL };
        promises.push(file);
      }
    } catch (error) {
      console.error({ error });
    }
  }

  Promise.all(promises).then(() => {
    const zip = new JSZip();
    const folder = zip.folder("attachments");
    promises.forEach((item) => folder.file(item.fileName, item.content));
    zip
      .generateAsync({ type: "blob" })
      .then((blob) => saveAs(blob, "attachments.zip"));
  });
};
