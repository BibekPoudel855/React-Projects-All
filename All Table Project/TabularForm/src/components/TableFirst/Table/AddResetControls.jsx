import { useTableContext } from "../context/TableContext.jsx";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function AddResetControlSection() {
  const {
    addingRowActive,
    setAddingRowActive,
    tableData,
    setTableData,
    DEFAULT_DATA,
    timingData,
    setTimingData,
    DEFAULT_TIMING_DATA,
    setCurrentColumnIndex,
  } = useTableContext();

  const resetData = () => {
    if (
      JSON.stringify(tableData) === JSON.stringify(DEFAULT_DATA) &&
      JSON.stringify(timingData) === JSON.stringify(DEFAULT_TIMING_DATA)
    ) {
      toast.error("Data is already reseted", {
        id: "data-reset-warning",
        duration: 1000,
      });
      return;
    }

    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title: "Are you sure?",
      text: "This will reset all data!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#059669",
      cancelButtonColor: "#64748b",
      confirmButtonText: "Reset ",
      cancelButtonText: "No, cancel!",
    })
      .then((result) => {
        if (result.isConfirmed) {
          setTableData(DEFAULT_DATA);
          setCurrentColumnIndex(0);
          setAddingRowActive(false);
          setTimingData(DEFAULT_TIMING_DATA);
          toast.success("Data has been reset successfully");
        } else {
          toast.error("Reset cancelled");
        }
      })
      .catch((error) => {
        console.log(error);

        toast.error("An error occurred while resetting data");
      });
  };

  return (
    <div className="sticky top-0 p-4 m-4 bg-slate-100 flex justify-between items-center mb-4 rounded">
      {addingRowActive ? (
        <button
          className="px-4 py-2 border bg-slate-400 text-white hover:bg-slate-500 rounded transition"
          onClick={() => setAddingRowActive(false)}
        >
          Cancel
        </button>
      ) : (
        <button
          className="px-4 py-2 border bg-teal-600 text-white hover:bg-teal-700 rounded transition"
          onClick={() => setAddingRowActive(true)}
        >
          Add Row
        </button>
      )}
      <button
        className="bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded transition text-white"
        onClick={resetData}
      >
        Reset
      </button>
    </div>
  );
}
export default AddResetControlSection;
