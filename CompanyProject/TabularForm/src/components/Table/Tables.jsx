import { useEffect, useRef, useState } from "react";
import Footer from "../Footer/Footer";
import toast, { Toaster } from "react-hot-toast";
function Tables() {
  const DEFAULT_DATA = {
    Id: 1,
    ItemName: "CALCIUM CARBONATE (CaCO3)",
    F1: "",
    F2: "",
    F3: "",
    F4: "",
  };
  const [columns, setColumns] = useState([]);
  const addItemInputRef = useRef(null);
  const [currentColumnIndex, setCurrentColumnIndex] = useState(0);
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("tableData");
    if (savedData) {
      return JSON.parse(savedData);
    }
    return [DEFAULT_DATA];
  });

  useEffect(() => {
    if (data && data.length > 0) {
      setColumns(Object.keys(data[0]));
    }
  }, [data]);

  useEffect(() => {
    if (data && data.length > 0) {
      localStorage.setItem("tableData", JSON.stringify(data));
    }
  }, [data]);

  const fixedColumns = ["Id", "ItemName"];
  const dynamicColumns = columns.filter((column) => {
    if (!fixedColumns.includes(column)) {
      return column;
    }
  });
  const visibleColumns = [...fixedColumns, dynamicColumns[currentColumnIndex]];

  const handleInputChange = (e, rowId, column) => {
    const updatedData = data.map((item) => {
      if (item.Id == rowId) {
        return {
          ...item,
          [column]: e.target.value,
        };
      }
      return item;
    });
    setData(updatedData);
  };

  const addNewRow = () => {
    if (!addItemInputRef.current.value.trim()) {
      toast.error("Please enter an item name");
      return;
    }
    const newRowID = data.length > 0 ? data.length + 1 : 1;
    const newRow = { Id: newRowID, ItemName: addItemInputRef.current.value };
    dynamicColumns.forEach((column) => {
      newRow[column] = "";
    });
    setData([...data, newRow]);
    addItemInputRef.current.value = "";
    toast.success("New row added successfully");
  };
  const addColumn = () => {
    if (!addItemInputRef.current.value.trim()) {
      toast.error("Please enter a column name");
      return;
    }
    setColumns([...columns, addItemInputRef.current.value]);
    addItemInputRef.current.value = "";
    toast.success("New column added successfully");
  };

  const resetData = () => {
    setData([DEFAULT_DATA]);
    addItemInputRef.current.value = "";
    toast.success("Data reset successfully");
  };
  return (
    <div className="px-4 transition-all">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="flex items-center justify-between w-full p-4 bg-gray-200 rounded mb-4">
        <input
          type="text"
          className="w-[40%] px-3 py-1 rounded border outline-0"
          placeholder="Enter item name"
          ref={addItemInputRef}
        />
        <button
          className="bg-blue-500 text-white  px-4 py-2 rounded"
          onClick={() => {
            addNewRow();
          }}
        >
          Row
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => {
            addColumn();
          }}
        >
          {" "}
          Column
        </button>
      </div>

      <div className="h-[100vh] overflow-y-auto overflow-x-hidden pb-20">
        <div
          className={`grid grid-cols-[10%_40%_50%] font-bold bg-gray-200 border-b-2 border-gray-400 sticky top-0 z-10`}
        >
          {visibleColumns.map((column, idx) => (
            <div key={idx} className="p-3 border-r">
              {column}
            </div>
          ))}
        </div>

        {data.map((row) => {
          return (
            <div
              key={row.Id}
              className={`grid grid-cols-[10%_40%_50%] border hover:bg-gray-100 transition-all`}
            >
              {visibleColumns.map((currentColumn, idx) => {
                return (
                  <div key={idx} className="p-3 border-r">
                    {fixedColumns.includes(currentColumn) ? (
                      <span>{row[currentColumn]}</span>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <input
                          type="text"
                          value={row[currentColumn] ?? ""}
                          className="w-full border px-2 py-2 rounded"
                          onChange={(e) => {
                            handleInputChange(e, row.Id, currentColumn);
                          }}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
        <div className="flex items-center justify-center w-full p-4 bg-gray-200 rounded mt-4">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={resetData}
          >
            Reset
          </button>
        </div>
        <div className="flex items-center justify-between w-[100%] p-4 bg-gray-200 rounded fixed left-0 bottom-0">
          <button
            className={`${
              currentColumnIndex == 0
                ? "bg-gray-400 hover:bg-gray-500"
                : "bg-blue-500"
            } text-white px-4 py-2 rounded hover:bg-blue-600 transition-all`}
            onClick={() => {
              if (currentColumnIndex > 0) {
                setCurrentColumnIndex(currentColumnIndex - 1);
              }
            }}
          >
            ← Prev
          </button>
          <span>
            Column: ({currentColumnIndex + 1} of {dynamicColumns.length})
          </span>
          <button
            className={`${
              currentColumnIndex == dynamicColumns.length - 1
                ? "bg-gray-400 hover:bg-gray-500"
                : "bg-blue-500 hover:bg-blue-600"
            } text-white px-4 py-2 rounded`}
            onClick={() => {
              if (currentColumnIndex < dynamicColumns.length - 1) {
                setCurrentColumnIndex(currentColumnIndex + 1);
              }
            }}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
export default Tables;