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
    } else {
      toast.error("You are already on the last column", {
        id: "last-column-error",
      });
    }
  };

  const handlePreviousPage = () => {
    if (currentColumnIDX > 0) {
      setCurrentColumnIDX(currentColumnIDX - 1);
    } else {
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
      confirmButtonColor: "#FB2C36",
      cancelButtonColor: "#1C398E",
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
    <div className="max-h-screen overflow-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-4 bg-blue-100 p-4 rounded shadow">
          {addingNewRow ? (
            <button
              className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-all duration-200 font-medium shadow"
              onClick={() => setAddingNewRow(false)}
            >
              Cancel
            </button>
          ) : (
            <button
              className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded-lg transition-all duration-200 font-medium shadow"
              onClick={() => {
                setAddingNewRow(true);
              }}
            >
              Add Row
            </button>
          )}
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition-all duration-200 font-medium shadow-sm"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-sm border overflow-hidden mb-30">
          <table className="w-full">
            <thead>
              <tr>
                <th
                  colSpan={3}
                  className="bg-blue-900 border border-blue-900 text-white px-6 py-4 text-center font-bold text-lg"
                >
                  BOARD WEIGHT
                </th>
              </tr>
              <tr>
                <th className="bg-gray-300 border-b border-gray-200 px-6 py-3 text-center font-semibold text-gray-700 w-[10%]">
                  ID
                </th>
                <th className="bg-gray-300 border-b text-center border-gray-200 px-6 py-3 font-semibold text-gray-700 w-[30%]">
                  {currentColumnName}
                </th>
                <th className="bg-gray-300 border-b border-gray-200 px-6 py-3 text-center font-semibold text-gray-700 w-[60%]">
                  Reason
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => {
                return (
                  <tr
                    key={data.ID}
                    className={`hover:bg-gray-50 ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}
                  >
                    <td className="border-b border-gray-100 px-6 py-4 text-gray-700 font-medium">
                      {data.ID}
                    </td>
                    <td className="border-b border-gray-100 px-6 py-4">
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md transition-all"
                        value={
                          data[currentColumnName] ? data[currentColumnName] : ""
                        }
                        onChange={(e) =>
                          handleDynamicColumnInputChange(e, data)
                        }
                      />
                    </td>
                    <td className="border-b border-gray-100 px-6 py-4">
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md transition-all"
                        value={data.Rejection ? data.Rejection : ""}
                        onChange={(e) => handleRejectionInputChange(e, data)}
                      />
                    </td>
                  </tr>
                );
              })}
              {addingNewRow && (
                <tr className="bg-blue-50">
                  <td className="border-b  px-6 py-4 text-center font-bold text-blue-900">
                    {tableData.length + 1}
                  </td>
                  <td className="border-b  px-6 py-4">
                    <input
                      type="text"
                      className="w-full py-2 px-3 border-1 border-blue-300 outline-0  rounded-md transition-all"
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
                  <td className="border-b border-blue-200 px-6 py-4">
                    <input
                      type="text"
                      className="w-full py-2 px-3 border-1 outline-0 border-blue-300 rounded-md transition-all"
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
        </div>

        <div className="fixed left-0 bottom-0 w-[100vw] bg-white  p-4 px-6">
          <div className="flex justify-between items-center w-full">
            <button
              className={`${
                currentColumnIDX === 0
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-blue-900 hover:bg-blue-800 text-white"
              } px-6 py-2 rounded-lg transition-all duration-200 font-medium shadow-sm`}
              onClick={handlePreviousPage}
            >
              Previous
            </button>
            <span className="text-lg text-gray-700 font-semibold bg-gray-100 px-4 py-2 rounded-lg">
              {currentColumnIDX + 1} of {columnNames.length}
            </span>
            <button
              className={`${
                currentColumnIDX === columnNames.length - 1
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-blue-900 hover:bg-blue-800 text-white"
              } px-6 py-2 rounded-lg transition-all duration-200 font-medium shadow-sm`}
              onClick={handleNextPage}
            >
              Next
            </button>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Table;
