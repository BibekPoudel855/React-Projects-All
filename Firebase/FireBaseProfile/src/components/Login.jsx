import { useState } from "react";
import { validateEmailPSW } from "./Register/validateForm";
import { useFirebase } from "../store/FirebaseContext";
function Login() {
  const { loginUserEmail, user, signOutUser, signInGoogle } = useFirebase();

  const signInUser = (email, password) => {
    console.log(email, password);

    loginUserEmail(email, password)
      .then((response) => {
        console.log(response);
        alert("Login successful!");
      })
      .catch((err) => {
        console.log(err);
        alert("Login failed: " + err);
      });
  };

  const inputStyle = "bg-gray-800 p-2 rounded";
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  return (
    <>
      {user ? (
        <>
          <p className="text-green-500 text-6xl text-center">{user.email}!</p>
          <button
            className="bg-red-500 text-white py-2 px-4 rounded"
            onClick={() => signOutUser()}
          >
            Sign out
          </button>
        </>
      ) : (
        <>
          <form
            className="flex flex-col gap-4 bg-black p-4"
            onSubmit={(e) => {
              e.preventDefault();
              if (validateEmailPSW(formData.email, formData.password)) {
                signInUser(formData.email, formData.password);
              }
            }}
          >
            <input
              type="email"
              placeholder="Email"
              name="email"
              className={inputStyle}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  email: e.target.value,
                });
              }}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              className={inputStyle}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  password: e.target.value,
                });
              }}
            />
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Login
            </button>
          </form>
          <button
            className="bg-blue-900 text-white py-2 px-4 rounded my-10 m-100"
            onClick={() => {
              signInGoogle()
                .then((resp) => {
                  console.log(resp);

                  alert("User signed in with Google successfully!");
                })
                .catch((error) => {
                  alert("Error signing in with Google: " + error);
                });
            }}
          >
            Sign With Google{" "}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png"
              alt=""
              className="w-6 h-6 inline ml-2"
            />
          </button>
        </>
      )}
    </>
  );
}

export default Login;
