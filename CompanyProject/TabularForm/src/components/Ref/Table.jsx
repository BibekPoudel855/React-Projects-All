import React, { useState, useEffect } from "react";

const STORAGE_KEY = "myTableData";

const initialData = [
  { id: 1, itemName: "Calc Carbon", fValues: { F1: "", F2: "", F3: "", F4: "", F5: "" } },
  { id: 2, itemName: "PVC Powder", fValues: { F1: "", F2: "", F3: "", F4: "", F5: "" } },
];

export default function App() {
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : initialData;
  });

  const [batchCount, setBatchCount] = useState(() => {
    if (data.length === 0) return 5;
    const maxBatches = Math.max(
      ...data.map((row) => Object.keys(row.fValues).length)
    );
    return maxBatches || 5;
  });

  const [currentBatchIndex, setCurrentBatchIndex] = useState(0);

  const [addingRow, setAddingRow] = useState(false);
  const [newRow, setNewRow] = useState({ itemName: "", fValue: "" });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [data]);

  const currentBatchKey = `F${currentBatchIndex + 1}`;

  function handleNext() {
    if (currentBatchIndex + 1 >= batchCount) {
      setBatchCount(batchCount + 1);
      setData((prev) =>
        prev.map((row) => ({
          ...row,
          fValues: { ...row.fValues, [`F${batchCount + 1}`]: "" },
        }))
      );
    }
    setCurrentBatchIndex((idx) => Math.min(idx + 1, batchCount - 1));
  }

  function handlePrev() {
    setCurrentBatchIndex((idx) => Math.max(idx - 1, 0));
  }

  function handleInputChange(rowId, value) {
    setData((prev) =>
      prev.map((row) =>
        row.id === rowId
          ? {
              ...row,
              fValues: { ...row.fValues, [currentBatchKey]: value },
            }
          : row
      )
    );
  }

  function handleNewRowChange(e) {
    const { name, value } = e.target;
    setNewRow((prev) => ({ ...prev, [name]: value }));
  }

  function handleAddRow() {
    if (!newRow.itemName.trim()) {
      alert("Item Name is required");
      return;
    }
    const newId = data.length > 0 ? data[data.length - 1].id + 1 : 1;
    const newFValues = {};
    for (let i = 1; i <= batchCount; i++) {
      const key = `F${i}`;
      newFValues[key] = key === currentBatchKey ? newRow.fValue : "";
    }

    setData((prev) => [...prev, { id: newId, itemName: newRow.itemName, fValues: newFValues }]);
    setNewRow({ itemName: "", fValue: "" });
    setAddingRow(false);
  }

  return (
    <div className="max-w-5xl mx-auto p-4 font-sans">

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full border border-gray-300 text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2 w-16">SN</th>
              <th className="border border-gray-300 px-4 py-2 min-w-[150px]">Item Name</th>
              <th className="border border-gray-300 px-4 py-2 min-w-[150px]">
                Batch {currentBatchIndex + 1} ({currentBatchKey})
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map(({ id, itemName, fValues }, i) => (
              <tr
                key={id}
                className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="border border-gray-300 px-4 py-2 text-center">{i + 1}</td>
                <td className="border border-gray-300 px-4 py-2">{itemName}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <input
                    type="text"
                    value={fValues[currentBatchKey] || ""}
                    onChange={(e) => handleInputChange(id, e.target.value)}
                    className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </td>
              </tr>
            ))}

            {addingRow && (
              <tr className="bg-yellow-50">
                <td className="border border-gray-300 px-4 py-2 text-center">{data.length + 1}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <input
                    type="text"
                    name="itemName"
                    value={newRow.itemName}
                    onChange={handleNewRowChange}
                    placeholder="Item Name"
                    className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <input
                    type="text"
                    name="fValue"
                    value={newRow.fValue}
                    onChange={handleNewRowChange}
                    placeholder={currentBatchKey}
                    className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Bottom Controls */}
      <div className="flex justify-between items-center mt-4">
        <div>
          <button
            onClick={handlePrev}
            disabled={currentBatchIndex === 0}
            className={`px-4 py-2 rounded border ${
              currentBatchIndex === 0
                ? "bg-gray-200 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            className="ml-3 px-4 py-2 rounded border bg-blue-500 text-white hover:bg-blue-600"
          >
            Next
          </button>
        </div>

        <div>
          {addingRow ? (
            <>
              <button
                onClick={handleAddRow}
                className="px-4 py-2 rounded border bg-green-500 text-white hover:bg-green-600"
              >
                Save
              </button>
              <button
                onClick={() => setAddingRow(false)}
                className="ml-3 px-4 py-2 rounded border bg-gray-300 hover:bg-gray-400"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={() => setAddingRow(true)}
              className="px-4 py-2 rounded border bg-green-500 text-white hover:bg-green-600"
            >
              Add Row
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
