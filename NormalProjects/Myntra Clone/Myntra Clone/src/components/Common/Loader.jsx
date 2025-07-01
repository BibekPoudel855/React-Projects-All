import { useSelector } from "react-redux";

function Loader() {
  return (
    <>
      {" "}
      <div
        className="spinner-border text-danger flex justify-center items-center h-[100vh]"
        role="status"
      >
        <span className="">Loading...</span>
      </div>
    </>
  );
}

export default Loader;
