// import { Api } from "../pages/api/api"

function download(url) {
  const a = document.createElement("a");
  a.href = url;
  a.download = url.split("/").pop();
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

export const fetchSource = async (id) => {
  if (!id) return;
  // const api = new Api()
  // const result = await api.getURLDigitalAsset(id) // still not working, so...
  const result = "/doctor.png"; // simulate
  download(result);
};
