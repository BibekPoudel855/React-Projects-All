import { use, useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import toast from "react-hot-toast";
import { useTableContext } from "../Context/TableContextProvider";

function Table() {
  const {
    currentColumnIDX,
    setCurrentColumnIDX,
    currentColumnName,
    setCurrentColumnName,
    addingNewRow,
    setAddingNewRow,
    newRowData,
    setNewRowData,
    columnNames,
    tableData,
    setTableData,
    DEFAULT_DATA,
  } = useTableContext();
  const addingNewRowInputRef = useRef(null);

  useEffect(() => {
    if (addingNewRow) {
      addingNewRowInputRef.current.focus();
    }
  }, [addingNewRow]);
  useEffect(() => {
    localStorage.setItem("tableData2nd", JSON.stringify(tableData));
  }, [tableData]);
  useEffect(() => {
    const currentColumnName = columnNames[currentColumnIDX];
    setCurrentColumnName(currentColumnName);
  }, [columnNames, currentColumnIDX]);

  const handleNextPage = () => {
    if (currentColumnIDX < columnNames.length - 1) {
      setCurrentColumnIDX(currentColumnIDX + 1);
    }
    toast.error("You are already on the last column", {
      id: "last-column-error",
    });
  };

  const handlePreviousPage = () => {
    if (currentColumnIDX > 0) {
      setCurrentColumnIDX(currentColumnIDX - 1);
    }
    if (currentColumnIDX === 0) {
      toast.error("You are already on the first column", {
        id: "first-column-error",
      });
    }
  };

  const handleReset = () => {
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
          toast.success("Data has been reset successfully");
        } else {
          toast.error("Reset cancelled");
        }
      })
      .catch((error) => {
        toast.error("An error occurred while resetting data");
      });
  };

  const handleDynamicColumnInputChange = (e, data) => {
    const updatedData = tableData.map((item) => {
      if (item.ID === data.ID) {
        return {
          ...item,
          [currentColumnName]: e.target.value,
        };
      }
      return item;
    });
    setTableData(updatedData);
  };

  const handleRejectionInputChange = (e, data) => {
    const updatedData = tableData.map((item) => {
      if (item.ID === data.ID) {
        return {
          ...item,
          Rejection: e.target.value,
        };
      }
      return item;
    });
    setTableData(updatedData);
  };
  const handleNewRowInputChange = (columnName, e, rejection = false) => {
    const value = e.target.value;
    if (rejection) {
      setNewRowData((prev) => {
        return {
          ...prev,
          Rejection: value,
        };
      });
    } else {
      setNewRowData((prev) => {
        return {
          ...prev,
          [columnName]: value,
          ID: tableData.length + 1,
        };
      });
    }
  };

  const handleKeyDownEnter = (e) => {
    if (e.key === "Enter") {
      if (!newRowData[currentColumnName] || !newRowData.Rejection) {
        toast.error("Please fill details", {
          id: "empty-row-error",
        });
        return;
      }
      setTableData([...tableData, newRowData]);
      setAddingNewRow(false);
      setNewRowData({});
      toast.success("New row added successfully");
    }
  };
  return (
    <div className="w-[100vw] md:w-[70vw] lg:w-[40vw] p-4 pb-20">
      <div className="flex justify-between items-center mb-4 bg-emerald-100 p-4 rounded transition-all">
        {addingNewRow ? (
          <button
            className="bg-slate-400 hover:bg-slate-500 text-white px-4 py-2 rounded transition"
            onClick={() => setAddingNewRow(false)}
          >
            Cancel
          </button>
        ) : (
          <button
            className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded transition"
            onClick={() => {
              setAddingNewRow(true);
            }}
          >
            Add Row
          </button>
        )}
        <button
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th
              colSpan={3}
              className="border border-slate-300 px-4 py-2 text-center"
            >
              BOARD WEIGHT
            </th>
          </tr>
          <tr>
            <th className="border border-slate-300 px-4 py-2 w-[10%]">ID</th>
            <th className="border border-slate-300 px-4 py-2 w-[30%]">
              {currentColumnName}
            </th>
            <th className="border border-slate-300 px-4 py-2 w-[60%]">
              Reason
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data) => {
            return (
              <tr key={data.ID} className="hover:bg-slate-100">
                <td className="border border-slate-300 px-4 py-2 w-[10%]">
                  {data.ID}
                </td>
                <td className="border border-slate-300 px-4 py-2 w-[30%]">
                  <input
                    type="text"
                    className="w-full px-2 py-1"
                    value={
                      data[currentColumnName] ? data[currentColumnName] : ""
                    }
                    onChange={(e) => handleDynamicColumnInputChange(e, data)}
                  />
                </td>
                <td className="border border-slate-300 px-4 py-2 w-[60%]">
                  <input
                    type="text"
                    className="w-full px-2 py-1 "
                    value={data.Rejection ? data.Rejection : ""}
                    onChange={(e) => handleRejectionInputChange(e, data)}
                  />
                </td>
              </tr>
            );
          })}
          {addingNewRow && (
            <tr className="bg-yellow-50">
              <td className="border border-slate-300 px-4 py-2 text-center">
                {tableData.length + 1}
              </td>
              <td className="border border-slate-300 px-4 py-2 text-center">
                <input
                  type="text"
                  className="w-full py-1 px-2"
                  ref={addingNewRowInputRef}
                  placeholder={currentColumnName}
                  onChange={(e) => {
                    handleNewRowInputChange(currentColumnName, e);
                  }}
                  onKeyDown={(e) => {
                    handleKeyDownEnter(e);
                  }}
                  value={
                    newRowData[currentColumnName]
                      ? newRowData[currentColumnName]
                      : ""
                  }
                />
              </td>
              <td className="border border-slate-300 px-4 py-2 text-center">
                <input
                  type="text"
                  className="w-full py-1 px-2"
                  placeholder="Rejection"
                  onChange={(e) => {
                    handleNewRowInputChange("Rejection", e, true);
                  }}
                  onKeyDown={(e) => {
                    handleKeyDownEnter(e);
                  }}
                  value={newRowData.Rejection ? newRowData.Rejection : ""}
                />
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="fixed lg:relative bottom-0 left-0 bg-emerald-100 text-white w-full flex justify-between items-center mt-4 p-4">
        <div className="flex justify-between items-center w-full ">
          <button
            className={`${
              currentColumnIDX === 0
                ? "bg-slate-400 hover:bg-slate-500 cursor-not-allowed"
                : "bg-teal-600 hover:bg-teal-700"
            } px-4 py-2 rounded transition`}
            onClick={handlePreviousPage}
          >
            ← Prev
          </button>
          <span className="text-lg text-slate-800 font-normal">
            ({currentColumnIDX + 1} of {columnNames.length})
          </span>
          <button
            className={`${
              currentColumnIDX === columnNames.length - 1
                ? "bg-slate-400 hover:bg-slate-500 cursor-not-allowed"
                : "bg-teal-600 hover:bg-teal-700"
            } px-4 py-2 rounded transition`}
            onClick={handleNextPage}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}

export default Table;
