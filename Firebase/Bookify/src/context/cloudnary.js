import toast from "react-hot-toast";

async function addImageToCloudnary(formData, uploadPreset) {
  console.log(formData, uploadPreset);
  
  const imageData = new FormData();
  imageData.append("file", formData);
  imageData.append("upload_preset", uploadPreset);
  let data = null;
  try {
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dw99tfvch/image/upload",
      {
        method: "POST",
        body: imageData,
      }
    );
    data = await res.json();
  } catch (error) {
    toast.error("Error uploading image to Cloudinary: " + error.message);
    console.log(error.message);
    
  }
  toast.success("Image uploaded successfully!");
  return data.secure_url || "";
}

export default addImageToCloudnary;
