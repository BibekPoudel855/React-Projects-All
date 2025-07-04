import { useTableContext } from "../context/TableContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { toast } from "react-hot-toast";

function AddResetControls({ addNewRow }) {
  const { DEFAULT_DATA, setData, setColumns, addRowInputRef } =
    useTableContext();

  // reset data function
  const resetData = () => {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title: "Are you sure?",
      text: "This will reset all data!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#8898aa",
      confirmButtonText: "Reset ",
      cancelButtonText: "No, cancel!",
    })
      .then((result) => {
        if (result.isConfirmed) {
          setData([DEFAULT_DATA]);
          setColumns(Object.keys(DEFAULT_DATA));
          toast.success("Data has been reset successfully");
        } else {
          toast.error("Reset cancelled");
        }
      })
      .catch((error) => {
        toast.error("An error occurred while resetting data");
      });
  };
  return (
    <div className=" flex items-center justify-evenly w-full p-4 bg-gray-200 rounded mt-4">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => {
          addNewRow()
          toast.success("New row added successfully", {
            duration: 1000,
            id: "add-row-toast",
          });
        }}
      >
        Add Row
      </button>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded"
        onClick={resetData}
      >
        Reset
      </button>
    </div>
  );
}
export default AddResetControls;
