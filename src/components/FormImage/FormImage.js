import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useCallback, useState } from "react";
import styles from "./FormImage.module.scss";
import { UploadOutlined } from "@ant-design/icons";

const uploadPreset = "h8xikpu3";

const ImageUploadForm = ({ onChange, value }) => {
  const [name, setName] = useState(null);
  const [image, setImage] = useState();
  const handleUpload = useCallback(
    (result) => {
      onChange(result.info.secure_url);
      setName(result.info.original_filename + "." + result.info.format);
      setImage(result?.info?.secure_url);
    },
    [onChange]
  );
  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset={uploadPreset}
      options={{
        maxFiles: 1,
      }}
    >
      {({ open }) => {
        return (
          <div onClick={() => open?.()} className={styles.acc}>
            {value ? (
              <div>
                {/* <p>{name}</p> */}
                <img style={{ width: "100%" }} src={image} />
              </div>
            ) : (
              <div className={styles.flex}>
                <UploadOutlined size={50} />
                <div style={{ textAlign: "center" }}>Click to upload</div>
              </div>
            )}
          </div>
        );
      }}
    </CldUploadWidget>
  );
};

export default ImageUploadForm;
