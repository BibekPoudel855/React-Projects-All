import { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { toast } from "react-hot-toast";
import { useTableContext } from "../context/TableContext";

function Tables() {
  const {
    LOCAL_STORAGE_KEY,
    DEFAULT_DATA,
    tableData,
    setTableData,
    inputAddingRowItemNameREF,
    addingNewRowData,
    setAddingNewRowData,
    currentColumnIndex,
    setCurrentColumnIndex,
    addingRowActive,
    setAddingRowActive,
    currentColumnName,
    columnNames,
  } = useTableContext();

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tableData));
  }, [tableData]);

  useEffect(() => {
    if (addingRowActive) {
      inputAddingRowItemNameREF.current.focus();
    }
  }, [addingRowActive]);

  const resetData = () => {
    if (JSON.stringify(tableData) === JSON.stringify(DEFAULT_DATA)) {
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
          toast.success("Data has been reset successfully");
        } else {
          toast.error("Reset cancelled");
        }
      })
      .catch((error) => {
        toast.error("An error occurred while resetting data");
      });
  };

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
    }
    setCurrentColumnIndex(currentColumnIndex + 1);
  };

  const handleInputChange = (rowId, e) => {
    const updatedData = tableData.map((row) => {
      if (rowId == row.id) {
        return {
          ...row,
          fValues: {
            ...row.fValues,
            [currentColumnName]: e.target.value,
          },
        };
      }
      return row;
    });
    setTableData(updatedData);
  };

  const handleAddingRowOnChange = (e) => {
    const { value } = e.target;
    if (e.target.id == "itemName") {
      setAddingNewRowData((prev) => ({ ...prev, itemName: value }));
    }
    if (e.target.id == "fValue") {
      setAddingNewRowData((prev) => ({
        ...prev,
        fValue: { ...prev.fValue, [currentColumnName]: value },
      }));
    }
  };

  const handleEnterKeyNewRow = () => {
    if (addingNewRowData.itemName.trim() === "") {
      toast.error("Please enter item name", {
        id: "item-name-warning",
        duration: 1000,
      });
      return;
    }
    const newRow = {
      id: tableData.length + 1,
      itemName: addingNewRowData.itemName,
      fValues: { ...addingNewRowData.fValue },
    };
    setTableData((prev) => [...prev, newRow]);
    setAddingNewRowData({ itemName: "", fValue: { [currentColumnName]: "" } });
    setAddingRowActive(false);
  };

  return (
    <div>
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

      <div className="p-4 rounded mt-4 w-full">
        <div className="overflow-y-auto max-h-[100vh] mb-20 lg:mb-8">
          <table>
            <thead>
              <tr className="z-10 bg-slate-100">
                <th className="border border-slate-300 px-4 py-2 w-[10%]">
                  ID
                </th>
                <th className="border border-slate-300 px-4 py-2 w-[60%]">
                  Item Name
                </th>
                <th className="border border-slate-300 px-4 py-2 w-[30%]">{`F${
                  currentColumnIndex + 1
                }`}</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row) => (
                <tr
                  key={row.id}
                  className={`${row.id % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
                >
                  <td className="border border-slate-300 px-4 py-2 w-[10%]">
                    {row.id}
                  </td>
                  <td className="border border-slate-300 px-4 py-2 w-[60%]">
                    {row.itemName}
                  </td>
                  <td className="border border-slate-300 px-4 py-2 w-[30%]">
                    <input
                      type="text"
                      className="w-full rounded px-2 py-1"
                      value={row.fValues[currentColumnName] || ""}
                      onChange={(e) => handleInputChange(row.id, e)}
                    />
                  </td>
                </tr>
              ))}
              {addingRowActive && (
                <tr className="bg-yellow-50">
                  <td className="border border-slate-300 px-4 py-2 w-[10%]">
                    {tableData.length + 1}
                  </td>
                  <td className="border border-slate-300 px-4 py-2 w-[60%]">
                    <input
                      type="text"
                      className="w-full rounded px-2 py-1"
                      placeholder="Enter Item Name"
                      id="itemName"
                      onChange={handleAddingRowOnChange}
                      ref={inputAddingRowItemNameREF}
                      onKeyDown={(e) =>
                        e.key === "Enter" && handleEnterKeyNewRow()
                      }
                    />
                  </td>
                  <td className="border border-slate-300 px-4 py-2 w-[30%]">
                    <input
                      type="text"
                      id="fValue"
                      className="w-full rounded px-2 py-1"
                      value={addingNewRowData.fValue[currentColumnName] || ""}
                      placeholder={currentColumnName}
                      onChange={handleAddingRowOnChange}
                      onKeyDown={(e) =>
                        e.key === "Enter" && handleEnterKeyNewRow()
                      }
                    />
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

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
      </div>
    </div>
  );
}
export default Tables;
