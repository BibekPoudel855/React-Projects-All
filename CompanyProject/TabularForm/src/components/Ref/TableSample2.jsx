import React, { useState, useEffect } from "react";

const STORAGE_KEY = "batchDynamicTable";

export default function App() {
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved
      ? JSON.parse(saved)
      : [
          { id: 1, itemName: "Calc Carbon", fValues: { F1: "" } },
          { id: 2, itemName: "PVC Powder", fValues: { F1: "" } },
        ];
  });

  const [currentBatchIndex, setCurrentBatchIndex] = useState(0);
  const [newRow, setNewRow] = useState({ itemName: "", fValue: "" });
  const [addingRow, setAddingRow] = useState(false);

  // Derive batch keys like ["F1", "F2", ...]
  const batchKeys = data.length > 0 ? Object.keys(data[0].fValues) : ["F1"];
  const currentBatchKey = batchKeys[currentBatchIndex];

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [data]);

  const handleInputChange = (rowId, value) => {
    const updated = data.map((row) =>
      row.id === rowId
        ? { ...row, fValues: { ...row.fValues, [currentBatchKey]: value } }
        : row
    );
    setData(updated);
  };

  const handleNext = () => {
    if (currentBatchIndex + 1 >= batchKeys.length) {
      const nextKey = `F${batchKeys.length + 1}`;
      const newData = data.map((row) => ({
        ...row,
        fValues: { ...row.fValues, [nextKey]: "" },
      }));
      setData(newData);
    }
    setCurrentBatchIndex((i) => i + 1);
  };

  const handlePrev = () => {
    if (currentBatchIndex > 0) setCurrentBatchIndex((i) => i - 1);
  };

  const handleNewRowChange = (e) => {
    const { name, value } = e.target;
    setNewRow((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddRow = () => {
    if (!newRow.itemName.trim()) {
      alert("Please enter item name");
      return;
    }

    const id = data.length + 1;
    const newFValues = {};
    batchKeys.forEach((key) => {
      newFValues[key] = key === currentBatchKey ? newRow.fValue : "";
    });

    setData([...data, { id, itemName: newRow.itemName, fValues: newFValues }]);
    setNewRow({ itemName: "", fValue: "" });
    setAddingRow(false);
  };

  return (
    <div className="max-w-5xl mx-auto p-4 font-sans">
      <h1 className="text-2xl font-bold text-center mb-6">Batch Input Table</h1>

      {/* Optional Controls */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <input type="date" className="border rounded px-3 py-1" />
        <select className="border rounded px-3 py-1">
          <option>Day</option>
          <option>Night</option>
        </select>
        <input placeholder="Operator" className="border rounded px-3 py-1" />
        <input placeholder="Mixture Operator" className="border rounded px-3 py-1" />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full border border-gray-300 text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2 w-16">SN</th>
              <th className="border border-gray-300 px-4 py-2 min-w-[150px]">
                Item Name
              </th>
              <th className="border border-gray-300 px-4 py-2 min-w-[150px]">
                Batch {currentBatchIndex + 1} ({currentBatchKey})
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map(({ id, itemName, fValues }, i) => (
              <tr key={id} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {i + 1}
                </td>
                <td className="border border-gray-300 px-4 py-2">{itemName}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <input
                    type="text"
                    value={fValues[currentBatchKey] || ""}
                    onChange={(e) => handleInputChange(id, e.target.value)}
                    className="w-full border border-gray-300 rounded px-2 py-1"
                  />
                </td>
              </tr>
            ))}

            {/* Add New Row */}
            {addingRow && (
              <tr className="bg-yellow-50">
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {data.length + 1}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <input
                    name="itemName"
                    value={newRow.itemName}
                    onChange={handleNewRowChange}
                    placeholder="Item Name"
                    className="w-full border border-gray-300 rounded px-2 py-1"
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <input
                    name="fValue"
                    value={newRow.fValue}
                    onChange={handleNewRowChange}
                    placeholder={currentBatchKey}
                    className="w-full border border-gray-300 rounded px-2 py-1"
                  />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Timing Section Below Table */}
      <div className="mt-8 max-w-md mx-auto border border-gray-300 rounded shadow-sm overflow-hidden">
        <h2 className="text-center bg-gray-200 py-2 font-semibold">
          Timing - Batch {currentBatchIndex + 1}
        </h2>
        <table className="table-fixed w-full text-center text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-2 py-1">Timing</th>
              <th className="border border-gray-300 px-2 py-1">Start</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-gray-300 px-2 py-1">Input</td><td className="border border-gray-300 px-2 py-1"></td></tr>
            <tr><td className="border border-gray-300 px-2 py-1">Release</td><td className="border border-gray-300 px-2 py-1"></td></tr>
            <tr><td className="border border-gray-300 px-2 py-1">Input</td><td className="border border-gray-300 px-2 py-1"></td></tr>
          </tbody>
        </table>
      </div>

      {/* Controls */}
      <div className="flex justify-between items-center mt-6 max-w-md mx-auto">
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
            ← Prev
          </button>

          <button
            onClick={handleNext}
            className="ml-2 px-4 py-2 rounded border bg-blue-500 text-white hover:bg-blue-600"
          >
            Next →
          </button>
        </div>

        <div>
          {addingRow ? (
            <>
              <button
                onClick={handleAddRow}
                className="px-4 py-2 rounded border bg-green-600 text-white hover:bg-green-700"
              >
                Save
              </button>
              <button
                onClick={() => setAddingRow(false)}
                className="ml-2 px-4 py-2 rounded border bg-gray-300 hover:bg-gray-400"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={() => setAddingRow(true)}
              className="px-4 py-2 rounded border bg-green-600 text-white hover:bg-green-700"
            >
              Add Row
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
