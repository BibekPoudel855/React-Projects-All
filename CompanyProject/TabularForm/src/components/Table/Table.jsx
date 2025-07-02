import { useEffect, useState } from "react";

function Tables() {
  const [columns, setColumns] = useState([]);
  const [currentColumnIndex, setCurrentColumnIndex] = useState(0);
  const [data, setData] = useState([
    {
      Id: 1,
      ItemName: "CALCIUM CARBONATE",
      F1: "Value A1",
      F2: "Value A2",
    },
    {
      Id: 2,
      ItemName: "PVC POWDER",
      F1: "Value B1",
      F2: "Value B2",
    },
  ]);

  const fixedColumns = ["Id", "ItemName"];

  // Set columns dynamically from data
  useEffect(() => {
    if (data.length > 0) {
      setColumns(Object.keys(data[0]));
    }
  }, [data]);

  const dynamicColumns = columns.filter((col) => !fixedColumns.includes(col));
  const visibleColumns = [...fixedColumns, dynamicColumns[currentColumnIndex]];

  // ✅ Handle input value change
  const handleInputChange = (rowId, key, value) => {
    const updatedData = data.map((row) =>
      row.Id === rowId ? { ...row, [key]: value } : row
    );
    setData(updatedData);
  };

  // ✅ Add a new dynamic column
  const addNewColumn = () => {
    const nextIndex = dynamicColumns.length + 1;
    const newColKey = `F${nextIndex}`;

    const updatedData = data.map((row) => ({
      ...row,
      [newColKey]: "",
    }));

    setData(updatedData);
  };

  return (
    <div className="px-4 transition-all">
      <div className="h-[100vh] overflow-y-auto overflow-x-hidden pb-20">
        {/* Table Header */}
        <div
          className={`grid grid-cols-[10%_40%_50%] font-bold bg-gray-200 border-b-2 border-gray-400 sticky top-0 z-10`}
        >
          {visibleColumns.map((column, idx) => (
            <div key={idx} className="p-3 border-r">
              {column}
            </div>
          ))}
        </div>

        {/* Table Rows */}
        {data.map((row) => (
          <div
            key={row.Id}
            className={`grid grid-cols-[10%_40%_50%] border hover:bg-gray-100 transition-all`}
          >
            {visibleColumns.map((col, idx) => (
              <div key={idx} className="p-3 border-r">
                {fixedColumns.includes(col) ? (
                  row[col]
                ) : (
                  <input
                    type="text"
                    value={row[col] || ""}
                    onChange={(e) =>
                      handleInputChange(row.Id, col, e.target.value)
                    }
                    className="w-full border px-2 py-1 rounded"
                  />
                )}
              </div>
            ))}
          </div>
        ))}

        {/* Controls */}
        <div className="flex items-center justify-between w-full p-4 bg-gray-200 rounded fixed left-0 bottom-0">
          <button
            className={`${
              currentColumnIndex === 0 ? "bg-gray-400" : "bg-blue-500"
            } text-white px-4 py-2 rounded`}
            onClick={() => {
              if (currentColumnIndex > 0) {
                setCurrentColumnIndex((prev) => prev - 1);
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
              currentColumnIndex === dynamicColumns.length - 1
                ? "bg-gray-400"
                : "bg-blue-500"
            } text-white px-4 py-2 rounded`}
            onClick={() => {
              if (currentColumnIndex < dynamicColumns.length - 1) {
                setCurrentColumnIndex((prev) => prev + 1);
              }
            }}
          >
            Next →
          </button>

          <button
            onClick={addNewColumn}
            className="ml-4 bg-green-500 text-white px-4 py-2 rounded"
          >
            + Add Column
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tables;
