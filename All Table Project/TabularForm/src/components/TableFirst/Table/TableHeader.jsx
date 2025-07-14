import { useTableContext } from "../context/TableContext.jsx";

function TableHeader() {
  // Importing context values
  const { timingData, currentColumnName, currentColumnIndex, setTimingData } =
    useTableContext();

  // Handle input change for timing data
  const handleTimingDataChange = (e) => {
    const { id, value } = e.target;
    console.log(id, value);
    setTimingData((prev) => {
      console.log(prev);
      return {
        ...prev,
        [currentColumnName]: {
          ...prev[currentColumnName],
          [id]: value,
        },
      };
    });
  };

  return (
    <>
      <thead>
        <tr>
          <th
            colSpan={2}
            rowSpan={3}
            className="border border-slate-300 px-2 py-2 w-[60%] text-center"
          >
            Timing
          </th>
          <th className="border border-slate-300 px-4 py-2 text-center w-[40%]">
            {currentColumnIndex + 1}
          </th>
        </tr>

        <tr>
          <td className="border border-slate-300 px-2 py-1 w-[40%]">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold">Start</label>
              <input
                type="time"
                placeholder="Start"
                id="start"
                className="w-full rounded px-1 py-1 border border-slate-300 text-sm"
                value={timingData[currentColumnName]?.start || ""}
                onChange={handleTimingDataChange}
              />
            </div>
          </td>
        </tr>

        <tr>
          <td className="border border-slate-300 px-2 py-1 w-[40%]">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold">Release</label>
              <input
                type="time"
                placeholder="Release"
                id="release"
                className="w-full rounded p-1 border border-slate-300 text-sm"
                value={timingData[currentColumnName]?.release || ""}
                onChange={handleTimingDataChange}
              />
            </div>
          </td>
        </tr>

        {/* main table header  */}
        <tr className="z-10 bg-slate-100 sticky top-0 ">
          <th className="border border-slate-300 px-4 py-2 w-[10%] sticky top-0 ">ID</th>
          <th className="border border-slate-300 px-4 py-2 w-[50%] sticky top-0">
            Item Name
          </th>
          <th className="border border-slate-300 px-4 py-2 w-[40%] sticky top-0">{`F${
            currentColumnIndex + 1
          }`}</th>
        </tr>
      </thead>
    </>
  );
}

export default TableHeader;
