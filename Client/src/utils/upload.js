import axios from "axios";

const upload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "gigtastic");

  try {
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dmlumezz6/image/upload",
      data
    );

    const { url } = res.data;
    return url;
  } catch (err) {
    return err;
  }
};

export default upload;
