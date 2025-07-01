import { useState } from "react";
import { useFirebase } from "../../context/FirebaseContext";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

function Login() {
  const inputStyle =
    "bg-gray-200 p-2 rounded text-black text-[#222222] outline-0";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigator = useNavigate();
  const {
    loginUserEmail,
    signInWithGooglePopup,
    isLoggedIn,
    handleLogOut,
    checkExtraDataExists,
  } = useFirebase();

  const onSubmit = (data) => {
    loginUserEmail(data.email, data.password)
      .then((response) => {
        console.log(response);
        navigator("/");
        toast.success("Login successful!");
      })
      .catch((error) => {
        toast.error("Login failed. Please check your credentials." + error);
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
        navigator("/add-remaining-data");
        toast.success("Login with Google successful!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Login with Google failed. Please try again.");
      });
  };

  if (isLoggedIn) {
    return (
      <div className="flex justify-center items-center h-screen">
        <button
          className="bg-red-500 text-white py-2 px-4 rounded"
          onClick={() => {
            handleLogOut().then(() => {
              navigator("/");
              toast.success("Logged out successfully!");
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
      <form noValidate className="pt-10" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-5 w-[40vw] mx-auto ">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className={inputStyle}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
          <input
            type="password"
            placeholder="Password"
            name="password"
            className={inputStyle}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
          />

          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
          <button
            type="submit"
            className="bg-[#1DCD9F] text-white py-2 px-4 rounded transition hover:bg-[#169976]"
          >
            Login
          </button>
          <p className="text-center text-gray-500">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
              Register
            </Link>
          </p>
          <Link to="/reset-password" className="text-center text-blue-500 hover:underline">
            Forgot Password?
          </Link>
          <button
            className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-lg shadow-sm hover:shadow-md hover:bg-gray-50 transition duration-200"
            type="button"
            onClick={() => {
              handleSignInGoogle();
            }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png"
              alt=""
              className="w-6 h-6 inline ml-2"
            />{" "}
            Sign With Google
          </button>
        </div>
      </form>
    </>
  );
}

export default Login;
