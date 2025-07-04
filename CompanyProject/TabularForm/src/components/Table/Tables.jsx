import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { toast } from "react-hot-toast";

function Tables() {
  const LOCAL_STORAGE_KEY = "tableData";
  const DEFAULT_DATA = [
    { id: 1, itemName: "Calc Carbon", fValues: { F1: "" } },
    { id: 2, itemName: "PVC Powder", fValues: { F1: "" } },
  ];

  const [tableData, setTableData] = useState(() => {
    const savedDataLocalStorage = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedDataLocalStorage) {
      return JSON.parse(savedDataLocalStorage);
    }
    return DEFAULT_DATA;
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tableData));
  }, [tableData]);
  const [addingNewRowData, setAddingNewRowData] = useState({
    itemName: "",
    fValue: {
      F1: "",
    },
  });
  console.log(addingNewRowData);

  const [currentColumnIndex, setCurrentColumnIndex] = useState(0);
  const [addingRowActive, setAddingRowActive] = useState(false);

  // finding column name
  const columnNames =
    tableData.length > 0 ? Object.keys(tableData[0].fValues) : "F1";
  const currentColumnName = columnNames[currentColumnIndex];

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
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#8898aa",
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
      console.log(" new coumn");
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
    console.log(e.target.id);
    if (e.target.id == "itemName") {
      setAddingNewRowData((prev) => {
        return {
          ...prev,
          itemName: value,
        };
      });
    }
    if (e.target.id == "fValue") {
      setAddingNewRowData((prev) => {
        return {
          ...prev,
          fValue: {
            ...prev.fValue,
            [currentColumnName]: value,
          },
        };
      });
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
      fValues: {
        ...addingNewRowData.fValue,
      },
    };
    setTableData((prev) => [...prev, newRow]);
    setAddingNewRowData({
      itemName: "",
      fValue: {
        [currentColumnName]: "",
      },
    });
    setAddingRowActive(false);
  };
  return (
    <div className="p-4 bg-gray-100 rounded shadow-md mt-4">
      <table>
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2 w-[10%]">ID</th>
            <th className="border border-gray-300 px-4 py-2 w-[60%]">
              Item Name
            </th>
            <th className="border border-gray-300 px-4 py-2 w-[30%]">{`F${
              currentColumnIndex + 1
            }`}</th>
          </tr>
        </thead>

        <tbody>
          {tableData.map((row) => (
            <tr
              key={row.id}
              className={`${row.id % 2 == 0 ? "bg-white" : "bg-gray-100"}`}
            >
              <td className="border border-gray-300 px-4 py-2 w-[10%]">
                {row.id}
              </td>
              <td className="border border-gray-300 px-4 py-2 w-[60%]">
                {row.itemName}
              </td>
              <td className="border border-gray-300 px-4 py-2 w-[30%]">
                <input
                  type="text"
                  className="w-full rounded px-2 py-1"
                  value={row.fValues[currentColumnName] || ""}
                  onChange={(e) => {
                    handleInputChange(row.id, e);
                  }}
                />
              </td>
            </tr>
          ))}

          {addingRowActive && (
            <tr className="bg-yellow-50">
              <td className="border border-gray-300 px-4 py-2 w-[10%]">
                {tableData.length + 1}
              </td>
              <td className="border border-gray-300 px-4 py-2 w-[60%]">
                <input
                  type="text"
                  className="w-full rounded px-2 py-1"
                  placeholder="Enter Item Name"
                  id="itemName"
                  onChange={handleAddingRowOnChange}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      console.log("Enter key pressed itemName");
                      handleEnterKeyNewRow();
                    }
                  }}
                />
              </td>
              <td className="border border-gray-300 px-4 py-2 w-[30%]">
                <input
                  type="text"
                  id="fValue"
                  className="w-full rounded px-2 py-1"
                  value={addingNewRowData.fValue[currentColumnName] || ""}
                  placeholder={currentColumnName}
                  onChange={handleAddingRowOnChange}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      console.log("Enter key pressed fValue");
                      handleEnterKeyNewRow();
                    }
                  }}
                />
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="w-[100%] flex justify-center pt-6 pb-3">
        <button
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded transition text-white"
          onClick={resetData}
        >
          Reset
        </button>
      </div>
      <div className="fixed bottom-0 left-0 bg-gray-200 text-white w-full flex justify-between items-center mt-4 p-4">
        <div className="flex gap-6">
          <button
            className={`${
              currentColumnIndex == 0
                ? "bg-gray-400 hover:bg-gray-500 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            } px-4 py-2 rounded transition`}
            onClick={handlePrevButtonClick}
          >
            ← Prev
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded transition"
            onClick={handleNextButtonClick}
          >
            Next →
          </button>
        </div>
        {addingRowActive ? (
          <button
            className="px-4 py-2 border bg-gray-400 text-white hover:bg-gray-500 rounded transition"
            onClick={() => {
              setAddingRowActive(false);
            }}
          >
            Cancel
          </button>
        ) : (
          <button
            className="px-4 py-2 border bg-green-600 text-white hover:bg-green-700 rounded  transition"
            onClick={() => setAddingRowActive(true)}
          >
            Add Row
          </button>
        )}
      </div>
    </div>
  );
}
export default Tables;
