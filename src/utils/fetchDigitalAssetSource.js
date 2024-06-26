import axios from "axios";
import DigitalAssetsHandler from "./digitalAssetsHandler";
import JSZip from "jszip";
import { saveAs } from "file-saver";

async function download(url, name) {
  const response = await axios.get(url, { responseType: "blob" });
  const blob = URL.createObjectURL(response.data);
  saveAs(blob, name || `eyecare-document.pdf`);
}

function downloadOld(url, newTab = true) {
  const a = document.createElement("a");
  a.target = newTab ? "_blank" : "";
  a.href = url;
  a.download = url.split("/").pop();
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

async function print(url, name) {
  const response = await axios.get(url, { responseType: "blob" });
  const blobURL = URL.createObjectURL(response.data);
  const a = document.createElement("a");
  a.href = `javascript: var w=window.open("${blobURL}"); function printContent() {w.print(); w.focus(); }; printContent();`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

async function openNewTab(url, name) {
  const response = await axios.get(url, { responseType: "blob" });
  const fileURL = URL.createObjectURL(response.data);
  window.open(fileURL, "_blank");
}

export const fetchSource = async (
  id,
  isPrint = false,
  _newTab = true,
  isOpenPdf = false
) => {
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
        await print(response.presignedUrl, response.name);
      } else if (isOpenPdf) {
        await openNewTab(response.presignedUrl, response.name);
      } else {
        await download(response.presignedUrl, response.name);
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

  for (let attachment of attachments) {
    const element = attachment;
    const source = {
      _id: attachment.id,
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
