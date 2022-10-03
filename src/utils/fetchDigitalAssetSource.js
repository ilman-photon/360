function download(url) {
  const a = document.createElement("a");
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
  const result = "/doctor.png"; // simulate
  download(result);
};
