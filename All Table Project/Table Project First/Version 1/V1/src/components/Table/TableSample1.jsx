import React, { useState, useEffect } from "react";

const STORAGE_KEY = "batchTableData";

export default function BatchTable() {
  // Header inputs state
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [shift, setShift] = useState("day");
  const [thickness, setThickness] = useState("");
  const [operator, setOperator] = useState("");
  const [mixtureOperator, setMixtureOperator] = useState("");

  // Table data state
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
    return [
      {
        id: 1,
        itemName: "Calc Carbon",
        fValues: { F1: "", F2: "", F3: "", F4: "", F5: "" },
      },
      {
        id: 2,
        itemName: "PVC Powder",
        fValues: { F1: "", F2: "", F3: "", F4: "", F5: "" },
      },
    ];
  });

  const [batchCount, setBatchCount] = useState(() => {
    if (data.length === 0) return 5;
    return Math.max(...data.map((r) => Object.keys(r.fValues).length));
  });

  const [currentBatchIndex, setCurrentBatchIndex] = useState(0);

  const [newItemName, setNewItemName] = useState("");
  const [newFValue, setNewFValue] = useState("");

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

  function handleAddRow() {
    if (!newItemName.trim()) {
      alert("Please enter an item name");
      return;
    }
    const newId = data.length > 0 ? data[data.length - 1].id + 1 : 1;
    const newFValues = {};
    for (let i = 1; i <= batchCount; i++) {
      newFValues[`F${i}`] = i === currentBatchIndex + 1 ? newFValue : "";
    }
    setData((prev) => [
      ...prev,
      { id: newId, itemName: newItemName, fValues: newFValues },
    ]);
    setNewItemName("");
    setNewFValue("");
  }

  return (
    <div className="max-w-5xl mx-auto p-4 font-sans">
      {/* Header */}
      <h1 className="text-center text-3xl font-bold mb-6">Batch Input Table</h1>

      {/* Header Inputs */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border rounded px-3 py-1"
        />
        <select
          value={shift}
          onChange={(e) => setShift(e.target.value)}
          className="border rounded px-3 py-1"
        >
          <option value="day">Day</option>
          <option value="night">Night</option>
        </select>
        <input
          type="text"
          placeholder="Thickness (mm)"
          value={thickness}
          onChange={(e) => setThickness(e.target.value)}
          className="border rounded px-3 py-1 w-28"
        />
        <input
          type="text"
          placeholder="Operator"
          value={operator}
          onChange={(e) => setOperator(e.target.value)}
          className="border rounded px-3 py-1 w-32"
        />
        <input
          type="text"
          placeholder="Mixture Operator"
          value={mixtureOperator}
          onChange={(e) => setMixtureOperator(e.target.value)}
          className="border rounded px-3 py-1 w-36"
        />
      </div>

      {/* Main Table */}
      <div className="overflow-x-auto">
        <table className="table-auto border border-gray-300 w-full text-left">
          <thead className="bg-gray-100 font-semibold">
            <tr>
              <th className="border border-gray-300 px-4 py-2 w-16 text-center">
                SN
              </th>
              <th className="border border-gray-300 px-4 py-2 min-w-[150px]">
                Item Name
              </th>
              <th className="border border-gray-300 px-4 py-2 min-w-[150px]">
                Batch {currentBatchIndex + 1} (F{currentBatchIndex + 1})
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
                    className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </td>
              </tr>
            ))}

            {/* Add new row inputs */}
            <tr className="bg-yellow-50">
              <td className="border border-gray-300 px-4 py-2 text-center">
                {data.length + 1}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  type="text"
                  placeholder="New Item Name"
                  value={newItemName}
                  onChange={(e) => setNewItemName(e.target.value)}
                  className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  type="text"
                  placeholder={currentBatchKey}
                  value={newFValue}
                  onChange={(e) => setNewFValue(e.target.value)}
                  className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Timing Section Under Table */}
      <div className="mt-8 max-w-md mx-auto">
        <h2 className="font-semibold mb-2 text-center">
          Timing - Batch {currentBatchIndex + 1}
        </h2>
        <table className="table-fixed w-full border border-gray-300 text-center text-sm">
          <tbody>
            <tr className="bg-gray-100 font-semibold">
              <td className="border border-gray-300 px-2 py-1">Timing</td>
              <td className="border border-gray-300 px-2 py-1">Start</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-2 py-1">Input</td>
              <td className="border border-gray-300 px-2 py-1"></td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-2 py-1">Release</td>
              <td className="border border-gray-300 px-2 py-1"></td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-2 py-1">Input</td>
              <td className="border border-gray-300 px-2 py-1"></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Controls */}
      <div className="flex justify-between items-center mt-6 max-w-md mx-auto">
        <button
          onClick={handlePrev}
          disabled={currentBatchIndex === 0}
          className={`px-4 py-2 rounded border ${
            currentBatchIndex === 0
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          ← Prev
        </button>

        <button
          onClick={handleAddRow}
          className="px-4 py-2 rounded border bg-green-600 text-white hover:bg-green-700"
        >
          Add Row
        </button>

        <button
          onClick={handleNext}
          className="px-4 py-2 rounded border bg-blue-600 text-white hover:bg-blue-700"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
