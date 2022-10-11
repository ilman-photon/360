import { Api } from "../pages/api/api";
const api = new Api();

export default class DigitalAssetHandler {
  file;
  source;
  status;
  bufferFile;
  constructor() {
    this.file = null;
    this.source = null;
    this.status = null;
    this.bufferFile = null;
  }

  setFile = (payload) => {
    this.file = payload;
  };

  setSource = (payload) => {
    this.source = payload;
  };

  readBinaryFile = async () => {
    // Read into an array buffer, create
    this.bufferFile = await this.file.arrayBuffer();
  };

  fetchURLFromDigitalAsset = () => {
    if (!this.source._id && !this.source.uid) {
      return;
    }
    return api.getURLDigitalAsset(this.source._id || this.source.uid);
  };
  fetchSourceURL = () => {
    if (!this.source) {
      return;
    }
    return this.fetchURLFromDigitalAsset();
  };

  createDigitalAsset = () => {
    return api.createURLDigitalAsset(this.file);
  };
  upload = async () => {
    await this.readBinaryFile(this.file).catch((error) => {
      console.error(`Error reading file:`, error);
    });
    this.source = await this.createDigitalAsset();
    if (this.source) {
      const { success } = await api.uploadFile(
        this.source.presignedUrl,
        Buffer.from(this.bufferFile)
      );
      this.status = success ? "success" : "failed";
      this.source = await this.fetchSourceURL();
    }
  };
}
