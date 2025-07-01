import { useState } from "react";
import validateForm from "./validateForm";
import { useFirebase } from "../../store/FirebaseContext";
function Register() {
  const { signUpUserEmail, signInGoogle, addUserData, user, signOutUser } = useFirebase();

  const inputStyle = "bg-gray-800 p-2 rounded";
  const [formData, setFormData] = useState({
    username: "",
    fullName: "",
    address: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  return (
    <>
      {user ? (<>
        <p className="text-green-500 text-6xl text-center"> {user.email}</p>
        <button onClick={() => signOutUser()}>Log out</button>
      </>
        
      ) : (
        <div className="bg-black">
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              if (
                validateForm(
                  formData.username,
                  formData.fullName,
                  formData.email,
                  formData.password,
                  formData.confirmPassword
                )
              ) {
                signUpUserEmail(formData.email, formData.password)
                  .then((response) => {
                    console.log(response);
                    alert("User registered successfully!");
                  })
                  .catch((error) => {
                    alert(error);
                  });
              }
            }}
          >
            <input
              type="text"
              placeholder="Username"
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
              placeholder="Full Name"
              className={inputStyle}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  fullName: e.target.value,
                });
              }}
            />
            <input
              type="text"
              placeholder="Address"
              className={inputStyle}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  address: e.target.value,
                });
              }}
            />
            <input
              type="email"
              placeholder="Email"
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
              className={inputStyle}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  password: e.target.value,
                });
              }}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className={inputStyle}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  confirmPassword: e.target.value,
                });
              }}
            />
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Register
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
        </div>
      )}
    </>
  );
}

export default Register;
