const uploadImage = async (image) => {
  let url = "";
  const formData = new FormData();
  formData.append("file", image);
  formData.append("upload_preset", "default_preset");
  formData.append("api_key", "694943416247943");

  const result = await fetch(
    "https://api.cloudinary.com/v1_1/dps777fih/image/upload",
    {
      method: "POST",
      body: formData,
    }
  ).then((r) => r.json());
  url = result.url;

  return url;
};

export default uploadImage;
