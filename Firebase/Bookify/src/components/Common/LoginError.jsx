import { useNavigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";

function LoginError() {
  const navigate = useNavigate();
  return (
    <div className="min-h-[90vh] w-[80vw] mx-auto flex items-center justify-center">
      <div className="flex flex-col items-center gap-2 bg-white shadow-lg rounded-2xl p-10">
        <FaRegUser className="w-20 h-20 text-gray-500 mx-auto mb-5" />
        <h1 className="text-2xl font-bold text-center mb-3">
          Please Sign In to View Your Profile
        </h1>
        <button
          className="bg-[#1DCD9F] text-white py-2 px-4 rounded-lg hover:bg-[#169976] transition duration-200"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      </div>
    </div>
  );
}
export default LoginError;
