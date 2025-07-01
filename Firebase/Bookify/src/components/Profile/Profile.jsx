import { IoSettingsOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { VscUnverified, VscVerifiedFilled } from "react-icons/vsc";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsGraphUp } from "react-icons/bs";
import { MdLockOutline } from "react-icons/md";
import { useFirebase } from "../../context/FirebaseContext";
import LoginError from "../Common/LoginError";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function Profile() {
  const { user, isLoggedIn, signOutUser, getUserDataByUserId } = useFirebase();
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    if (user && user.uid) {
      getUserDataByUserId(user.uid).then((snapShot) => {
        setUserData(snapShot.data());
      });
    }
  }, [user]);
  
  if (!user) {
    return <LoginError />;
  }
  return (
    <div className="w-[80vw] mx-auto py-5">
      <div className="flex flex-wrap gap-10 items-center bg-gray-200 rounded-2xl p-5">
        <div className="relative">
          <img
            src={
              userData && userData.profileURL
                ? userData.profileURL
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2U2akySBgSHUK-foX-9SGFmLk6zEuGYNNqw&s"
            }
            alt=""
            className="w-32 h-32 rounded-full border-4 border-gray-500 shadow-lg"
          />

          {user.emailVerified ? (
            <div
              className={`bg-green-500 absolute bottom-0 right-0 w-8 h-8 rounded-full border-4 border-white flex items-center justify-center`}
            >
              <VscVerifiedFilled className="text-white w-4 h-4" />
            </div>
          ) : (
            <div
              className={`bg-red-500 absolute bottom-0 right-0 w-8 h-8 rounded-full border-4 border-white flex items-center justify-center`}
            >
              <VscUnverified className="text-white w-4 h-4" />
            </div>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-3xl">
            {userData ? userData.username : "Not provided"}
          </h1>
          <p className="text-gray-600">
            {user.email ? `${user.email}` : "Not provided"}
          </p>
          {user.emailVerified ? (
            <div className="flex flex-wrap gap-2">
              <span className="text-xs px-3 py-1 rounded-full bg-[#1DCD9F] text-white">
                {userData ? userData.serviceProvider : "Not provided"}
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-green-500 text-white">
                Verified
              </span>
            </div>
          ) : (
            <div className="flex flex-wrap gap-2">
              <span className="text-xs px-3 py-1 rounded-full bg-red-500 text-white">
                Not Verified
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-[#1DCD9F] text-white">
                {userData ? userData.serviceProvider : "Not provided"}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* account info and settings  */}
      <div className="flex flex-wrap gap-10 md:gap-0 md:justify-between mt-10 ">
        {/* account info  */}
        <div className="w-[100%] md:w-[48%] bg-gray-100 white rounded-2xl p-5 shadow-md">
          <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <CiUser className="w-6 h-6 text-[#1DCD9F]" />
            Account Information
          </h2>

          <div>
            <div className="border-b border-gray-100 pb-3">
              <label className="text-sm font-medium text-gray-500">
                Full Name
              </label>
              <p className="text-gray-900 font-medium">
                {userData ? userData.displayName : "Not provided"}
              </p>
            </div>

            <div className="border-b border-gray-100 pb-3">
              <label className="text-sm font-medium text-gray-500">
                Email Address
              </label>
              <p className="text-gray-900 font-medium">
                {userData ? userData.email : "Not provided"}
              </p>
            </div>
            <div className="border-b border-gray-100 pb-3">
              <label className="text-sm font-medium text-gray-500">
                Phone Number
              </label>
              <p className="text-gray-900 font-medium">
                {userData ? userData.phone : "Not provided"}
              </p>
            </div>
            <div className="border-b border-gray-100 pb-3">
              <label className="text-sm font-medium text-gray-500">
                Address
              </label>
              <p className="text-gray-900 font-medium">
                {userData ? userData.address : "Not provided"}
              </p>
            </div>
            <div className="border-b border-gray-100 pb-3">
              <label className="text-sm font-medium text-gray-500">
                User ID
              </label>
              <p className="text-gray-900 font-medium">
                {user ? user.uid : "Not provided"}
              </p>
            </div>

            <div className="border-b border-gray-100 pb-3">
              <label className="text-sm font-medium text-gray-500">
                Service Provider
              </label>
              <p className="text-gray-900 font-medium">
                {userData ? userData.serviceProvider : "Not provided"}
              </p>
            </div>
            {user.emailVerified ? (
              <div className="border-b border-gray-100 pb-3">
                <label className="text-sm font-medium text-gray-500">
                  Email Verified
                </label>
                <div className="flex items-center gap-2">
                  <VscVerifiedFilled className="text-green-600 w-5 h-5" />
                  <span className="text-green-600 font-medium">Verified</span>
                </div>
              </div>
            ) : (
              <div className="border-b border-gray-100 pb-3">
                <label className="text-sm font-medium text-gray-500">
                  Email Verified
                </label>
                <div className="flex items-center gap-2">
                  <VscUnverified className="text-red-600 w-5 h-5" />
                  <span className="text-red-600 font-medium">Not Verified</span>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* account settings  */}
        <div className="w-[100%] md:w-[48%] bg-gray-100 white rounded-2xl p-5 shadow-md">
          <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <IoSettingsOutline className="w-6 h-6 text-[#1DCD9F]" />
            Account Settings
          </h2>
          <div>
            <button className="w-full flex items-center justify-between p-3 hover:bg-white rounded-lg transition duration-200 group">
              <div className="flex items-center gap-3">
                <FaRegEdit className="w-5 h-5 text-gray-500 group-hover:text-gray-700" />
                <span className="text-gray-700 group-hover:text-gray-900">
                  Edit Profile
                </span>
              </div>
              <MdKeyboardArrowRight className="w-5 h-5 text-gray-500 group-hover:text-gray-700" />
            </button>
            <button className="w-full flex items-center justify-between p-3 hover:bg-white rounded-lg transition duration-200 group">
              <div className="flex items-center gap-3">
                <MdLockOutline className="w-5 h-5 text-gray-500 group-hover:text-gray-700" />
                <span className="text-gray-700 group-hover:text-gray-900">
                  Change Password
                </span>
              </div>
              <MdKeyboardArrowRight className="w-5 h-5 text-gray-500 group-hover:text-gray-700" />
            </button>
            <button className="w-full flex items-center justify-between p-3 hover:bg-white rounded-lg transition duration-200 group">
              <div className="flex items-center gap-3">
                <IoCloudDownloadOutline className="w-5 h-5 text-gray-500 group-hover:text-gray-700" />
                <span className="text-gray-700 group-hover:text-gray-900">
                  Download Data
                </span>
              </div>
              <MdKeyboardArrowRight className="w-5 h-5 text-gray-500 group-hover:text-gray-700" />
            </button>
            <button className="w-full flex items-center justify-between p-3 hover:bg-white rounded-lg transition duration-200 group">
              <div className="flex items-center gap-3" onClick={()=>{
                signOutUser().then(()=>{
                  toast.success("Successfully signed out!");
                })
              }}>
                <IoIosLogOut className="w-5 h-5 text-red-500 group-hover:text-red-700" />
                <span className="text-red-500 group-hover:text-red-700">
                  Sign Out
                </span>
              </div>

              <MdKeyboardArrowRight className="w-5 h-5 text-gray-500 group-hover:text-gray-700" />
            </button>
          </div>
        </div>
      </div>

      <div className="w-[100%] bg-gray-100 white rounded-2xl p-5 shadow-md mt-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
          <BsGraphUp className="w-6 h-6 text-[#1DCD9F]" />
          Activity
        </h2>
        <div className="flex gap-20 justify-start lg:justify-between flex-wrap text-center">
          <div className="flex flex-col items-center bg-white py-8 px-16 rounded-lg shadow-md">
            <p className="font-bold text-2xl">0</p>
            <p>Items Added</p>
          </div>
          <div className="flex flex-col items-center bg-white py-8 px-16 rounded-lg shadow-md">
            <p className="font-bold text-2xl">
              {user
                ? new Date(user.metadata.creationTime).toLocaleDateString()
                : "N/A"}
            </p>
            <p>Created At</p>
          </div>
          <div className="flex flex-col items-center bg-white py-8 px-16 rounded-lg shadow-md">
            <p className="font-bold text-2xl">
              {user
                ? new Date(user.metadata.lastSignInTime).toLocaleDateString()
                : "N/A"}
            </p>
            <p>Last Login</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
