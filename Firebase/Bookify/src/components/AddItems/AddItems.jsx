import { useState } from "react";
import { useFirebase } from "../../context/FirebaseContext";
import LoginError from "../Common/LoginError";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function AddItems() {
  const { addDataToFirestore, isLoggedIn, user, addImageToCloudnary } =
    useFirebase();
  if (!user) {
    return <LoginError />;
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const inputStyle =
    "bg-gray-200 w-[100%] md:w-[50%] p-2 rounded text-[#222222] outline-0";
  const onSubmit = async (data) => {
    const profileImageUrl = await addImageToCloudnary(
      data.image[0],
      "BookPicture"
    );
    addDataToFirestore(
      user.uid,
      user.displayName,
      user.email,
      user.photoURL,
      data.isbn,
      data.name,
      data.price,
      profileImageUrl
    ).then((resp) => {
      console.log(resp);
      toast.success("Book added successfully!");
    });
  };

  return (
    <form
      className="flex flex-col items-center justify-center gap-4 pt-10 w-[90vw] mx-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col  gap-4 w-[100%]">
        <div className="flex gap-4 flex-wrap md:flex-nowrap w-[100%]">
          <input
            type="text"
            placeholder="Enter ISBN"
            className={` ${inputStyle}`}
            {...register("isbn", { required: "ISBN is required" })}
          />
          {errors.isbn && (
            <p className="text-red-500 text-sm">{errors.isbn.message}</p>
          )}
          <input
            type="text"
            placeholder="Enter Name"
            className={`${inputStyle}`}
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>
        <div className="flex flex-wrap md:flex-nowrap gap-4">
          <input
            type="text"
            placeholder="Enter Price"
            className={`${inputStyle}`}
            {...register("price", {
              required: "Price is required",
            })}
          />
          {errors.price && (
            <p className="text-red-500 text-sm">{errors.price.message}</p>
          )}
          <input
            type="file"
            accept="image/*"
            className={`${inputStyle}`}
            {...register("image", {
              required: "Image is required",
            })}
          />
          {errors.image && (
            <p className="text-red-500 text-sm">{errors.image.message}</p>
          )}
        </div>
      </div>
      <button
        type="submit"
        className="bg-[#1DCD9F] text-white p-2 rounded transition hover:bg-[#169976]"
      >
        Add Book
      </button>
    </form>
  );
}
export default AddItems;
