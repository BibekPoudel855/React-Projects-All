import { useForm } from "react-hook-form";
import { useFirebase } from "../../context/FirebaseContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
  const { resetUserPassword } = useFirebase();
  const navigator = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    toast.loading("If user exists, sending password reset email...");
    resetUserPassword(data.email)
      .then(() => {
        navigator("/login");
        toast.dismiss();
        toast.success("Password reset email sent successfully!");
      })
      .catch((error) => {
        toast.error("Failed to send password reset email: " + error.message);
      });
  };
  return (
    <div className="flex flex-col gap-5 w-[40vw] mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center">Reset Password</h2>
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5"
      >
        <input
          type="email"
          placeholder="Email"
          className="bg-gray-200 p-2 rounded text-[#222222] outline-0"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
        <button
          type="submit"
          className="bg-[#1DCD9F] text-white py-2 px-4 rounded transition hover:bg-[#169976]"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
}
export default ResetPassword;
