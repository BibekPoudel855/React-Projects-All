import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFirebase } from "../../context/FirebaseContext";
import toast from "react-hot-toast";
function AddRemainingData() {
  const { storeUserData, user } = useFirebase();
  const navigator = useNavigate();
  console.log(user);

  const inputStyle =
    "bg-gray-200 p-2 rounded text-black text-[#222222] outline-0";
  const [formData, setFormData] = useState({
    username: "",
    displayName: "",
    address: "",
    phone: "",
    email: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    storeUserData({
      userId: user.uid,
      username: formData.username,
      displayName: user.displayName,
      address: formData.address,
      phone: formData.phone,
      email: user.email,
      profileURL: user.photoURL || "",
      serviceProvider: "Google Account",
    }).then((response) => {
      console.log(response);
      toast.success("User data stored successfully!");
      navigator("/");
    });
  };
  return (
    <>
      <form
        className="pt-10"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="flex flex-col gap-5 w-[40vw] mx-auto ">
          <input
            type="text"
            placeholder="Username"
            name="username"
            className={inputStyle}
            onChange={(e) => {
              setFormData({
                ...formData,
                username: e.target.value,
              });
            }}
          />
          <input
            type="text"
            placeholder="Address"
            name="address"
            className={inputStyle}
            onChange={(e) => {
              setFormData({
                ...formData,
                address: e.target.value,
              });
            }}
          />
          <input
            type="phone"
            placeholder="Phone Number"
            name="phone"
            className={inputStyle}
            onChange={(e) => {
              setFormData({
                ...formData,
                phone: e.target.value,
              });
            }}
          />
          <button
            type="submit"
            className="bg-[#1DCD9F] text-white py-2 px-4 rounded transition hover:bg-[#169976]"
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
}

export default AddRemainingData;
