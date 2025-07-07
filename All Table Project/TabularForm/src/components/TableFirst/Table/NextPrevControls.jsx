import { toast } from "react-hot-toast";
import { useTableContext } from "../context/TableContext";

function NextPrevControls() {
  // Importing context values
  const { currentColumnIndex, setCurrentColumnIndex, columnNames, tableData, setTableData, setTimingData } =
    useTableContext();

  // Function to handle previous button click
  const handlePrevButtonClick = () => {
    if (currentColumnIndex > 0) {
      setCurrentColumnIndex(currentColumnIndex - 1);
    }
    if (currentColumnIndex == 0) {
      toast.error("You are in first column", {
        id: "first-column-warning",
        duration: 1000,
      });
    }
  };

  // Function to handle next button click
  const handleNextButtonClick = () => {
    if (currentColumnIndex + 1 == columnNames.length) {
      const newColumnName = `F${columnNames.length + 1}`;
      const updatedData = tableData.map((row) => {
        return {
          ...row,
          fValues: {
            ...row.fValues,
            [newColumnName]: "",
          },
        };
      });
      setTableData(updatedData);
      setTimingData((prev) => {
        return {
          ...prev,
          [newColumnName]: {
            start: "",
            release: "",
          },
        };
      });
    }

    setCurrentColumnIndex(currentColumnIndex + 1);
  };

  return (
    <div className="fixed lg:relative bottom-0 left-0 bg-emerald-100 text-white w-full flex justify-between items-center mt-4 p-4">
      <div className="flex justify-between items-center w-full ">
        <button
          className={`${
            currentColumnIndex == 0
              ? "bg-slate-400 hover:bg-slate-500 cursor-not-allowed"
              : "bg-teal-600 hover:bg-teal-700"
          } px-4 py-2 rounded transition`}
          onClick={handlePrevButtonClick}
        >
          ← Prev
        </button>
        <span className="text-lg text-slate-800 font-normal">
          ({currentColumnIndex + 1} of {columnNames.length})
        </span>
        <button
          className="bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded transition"
          onClick={handleNextButtonClick}
        >
          Next →
        </button>
      </div>
    </div>
  );
}

export default NextPrevControls;
