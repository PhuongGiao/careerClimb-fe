import { openNotification } from "@/components/Notification";
import { uploadFile } from "@uploadcare/upload-client";
import { Uploader } from "uploader";

// fileData must be `Blob`, `File`, `Buffer`, UUID, CDN URL or Remote URL

export const uploadImage = async (fileData) => {
  const result = await uploadFile(fileData, {
    publicKey: "590ae9e2ddd441353b9c",
    store: "auto",
    metadata: {
      subsystem: "uploader",
      pet: "cat",
    },
  });
  return result;
};

export const uploader = Uploader({
  apiKey: "public_kW15bH1rPRgyUWUWZqpUTMng6LoR",
});
