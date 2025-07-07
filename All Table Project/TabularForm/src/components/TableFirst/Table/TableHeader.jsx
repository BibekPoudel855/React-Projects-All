
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
            className="border border-slate-300 px-4 py-2 w-[70%] text-center"
          >
            Timing
          </th>
          <th className="border border-slate-300 px-4 py-2 text-center w-[30%]">
            {currentColumnIndex + 1}
          </th>
        </tr>

        {/* <tr>
                <th className="border border-slate-300 px-4 py-2 w-[30%]">
                  Start
                </th>
              </tr> */}

        <tr>
          <td className="border border-slate-300 px-4 py-2 w-[30%]">
            <input
              type="text"
              placeholder="Start"
              id="start"
              className="w-full rounded px-2 py-1 "
              value={timingData[currentColumnName]?.start || ""}
              onChange={handleTimingDataChange}
            />
          </td>
        </tr>
        {/* <tr>
                <th className="border border-slate-300 px-4 py-2 w-[30%]">
                  Release
                </th>
              </tr> */}
        <tr>
          <td className="border border-slate-300 px-4 py-2 w-[30%]">
            <input
              type="text"
              placeholder="Release"
              id="release"
              className="w-full rounded px-2 py-1"
              value={timingData[currentColumnName]?.release || ""}
              onChange={handleTimingDataChange}
            />
          </td>
        </tr>

        {/* main table header  */}
        <tr className="z-10 bg-slate-100">
          <th className="border border-slate-300 px-4 py-2 w-[10%]">ID</th>
          <th className="border border-slate-300 px-4 py-2 w-[60%]">
            Item Name
          </th>
          <th className="border border-slate-300 px-4 py-2 w-[30%]">{`F${
            currentColumnIndex + 1
          }`}</th>
        </tr>
      </thead>
    </>
  );
}

export default TableHeader;
