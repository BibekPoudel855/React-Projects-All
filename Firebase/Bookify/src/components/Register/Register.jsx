import { useState } from "react";
import { useFirebase } from "../../context/FirebaseContext";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";

function Register() {
  const inputStyle = "bg-gray-200 p-2 rounded text-[#222222] outline-0 ";
  const navigator = useNavigate();
  const {
    signInUserEmail,
    signInWithGooglePopup,
    isLoggedIn,
    storeUserData,
    checkExtraDataExists,
    addImageToCloudnary,
    handleLogOut,
  } = useFirebase();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password", "");

  const onSubmit = async (data) => {
    console.log(data.profileImage);
    const profileImageUrl = await addImageToCloudnary(
      data.profileImage[0],
      "Profile_Images"
    );
    console.log("profileImageUrl", profileImageUrl);
    
    // creating account
    signInUserEmail(data.email, data.password)
      .then((response) => {
        const user = response.user;
        console.log(user);
        // storing user data in Firestore
        storeUserData({
          userId: user.uid,
          username: data.username,
          displayName: data.fullName,
          address: data.address,
          phone: data.phone,
          email: data.email,
          profileURL: profileImageUrl || "",
          serviceProvider: "Bookify Account",
        });
        console.log(profileImageUrl);
        navigator("/");
        toast.success("User registered successfully!");
      })
      .catch((error) => {
        toast.error("Error registering user: " + error.message);
      });
  };

  const handleSignInGoogle = () => {
    signInWithGooglePopup()
      .then((response) => {
        checkExtraDataExists(response.user.uid)
          .then((exists) => {
            if (exists.exists()) {
              navigator("/");
              toast.success("Login with Google successful!");
            } else {
              navigator("/add-remaining-data");
              toast.success("Please complete your profile information.");
            }
          })
          .catch((err) => {
            toast.error("An error occurred while checking user data.");
          });
      })
      .catch((err) => {
        console.error(err);
        toast.error("Login with Google failed. Please try again.");
      });
  };

  if (isLoggedIn) {
    return (
      <div className="flex justify-center items-center h-screen">
        <button
          className="bg-red-500 text-white py-2 px-4 rounded"
          onClick={() => {
            handleLogOut()
              .then(() => {
                navigator("/");
                toast.success("Logged out successfully!");
              })
              .catch((err) => {
                toast.error("Logout failed. Please try again.");
              });
          }}
        >
          LogOut
        </button>
      </div>
    );
  }

  return (
    <>
      <div className=" pt-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-5 w-[40vw] mx-auto">
            <input
              type="text"
              placeholder="Username"
              className={inputStyle}
              {...register("username", { required: "Username is required" })}
            />
            {errors.username && (
              <span className="text-red-500">{errors.username.message}</span>
            )}
            <input
              type="text"
              placeholder="Full Name"
              className={inputStyle}
              {...register("fullName", { required: "Full Name is required" })}
            />
            {errors.fullName && (
              <span className="text-red-500">{errors.fullName.message}</span>
            )}
            <input
              type="text"
              placeholder="Address"
              className={inputStyle}
              {...register("address", { required: "Address is required" })}
            />
            {errors.address && (
              <span className="text-red-500">{errors.address.message}</span>
            )}

            <input
              type="phone"
              placeholder="Phone Number"
              className={inputStyle}
              {...register("phone", { required: "Phone Number is required" })}
            />
            {errors.phone && (
              <span className="text-red-500">{errors.phone.message}</span>
            )}
            <input
              type="email"
              placeholder="Email"
              className={inputStyle}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
            <input
              type="password"
              placeholder="Password"
              className={inputStyle}
              {...register("password", {
                required: " Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className={inputStyle}
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
                validate: (value) => {
                  if (value !== password) {
                    return "Passwords do not match";
                  }
                },
              })}
            />

            {errors.confirmPassword && (
              <span className="text-red-500">
                {errors.confirmPassword.message}
              </span>
            )}
            <input
              type="file"
              accept="image/*"
              className={inputStyle}
              {...register("profileImage", {
                required: "Profile image is required",
              })}
            />
            {errors.profileImage && (
              <span className="text-red-500">
                {errors.profileImage.message}
              </span>
            )}
            <button
              type="submit"
              className="bg-[#1DCD9F] text-white py-2 px-4 rounded transition hover:bg-[#169976]"
            >
              Register
            </button>

            <p className="text-center text-gray-500">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500 hover:underline">
                Login
              </Link>
            </p>

            <button
              type="button"
              onClick={handleSignInGoogle}
              className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-lg shadow-sm hover:shadow-md hover:bg-gray-50 transition duration-200"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/512px-Google_%22G%22_logo.svg.png"
                alt="Google logo"
                className="w-5 h-5"
              />
              <span className="text-sm font-medium">Sign in with Google</span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
