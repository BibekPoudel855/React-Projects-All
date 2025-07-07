import { useEffect } from "react";
import { useTableContext } from "../context/TableContext";
import NextPrevControls from "./NextPrevControls";
import AddResetControlSection from "./AddResetControls";
import AddingNewRow from "./AddingNewRow";
import TableHeader from "./TableHeader";

function Tables() {
  // Importing context values
  const {
    timingData,
    LOCAL_STORAGE_TIMING_KEY,
    LOCAL_STORAGE_KEY,
    tableData,
    setTableData,
    currentColumnName,
  } = useTableContext();

  // Effect to set  data  localStorage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tableData));
  }, [tableData]);

  // Effect to set timing data  localStorage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_TIMING_KEY, JSON.stringify(timingData));
  }, [timingData]);

  // Handle input change for table data
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

  // Handle input change for item name
  const handleItemNameInputChange = (rowId, e) => {
    const updatedData = tableData.map((item) => {
      if (item.id === rowId) {
        return {
          ...item,
          itemName: e.target.value,
        };
      }
      return item;
    });
    setTableData(updatedData);
  };
  // Render  table
  return (
    <div>
      <AddResetControlSection />
      <div className="p-4 rounded mt-4 w-full">
        <div className="overflow-y-auto   max-h-[100vh] mb-20 lg:mb-8">
          <table>
            {/* timing  */}
            <TableHeader />

            <tbody>
              {tableData.map((row) => (
                <tr
                  key={row.id}
                  className={`${row.id % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
                >
                  <td className="border border-slate-300 px-4 py-2 w-[10%]">
                    {row.id}
                  </td>
                  <td className="border border-slate-300 px-4 py-2 w-[60%]">
                    <input
                      type="text"
                      className="w-full rounded px-2 py-1"
                      value={row.itemName}
                      onChange={(e) => handleItemNameInputChange(row.id, e)}
                    />
                  </td>
                  <td className="border border-slate-300 px-4 py-2 w-[30%]">
                    <input
                      type="text"
                      className="w-full rounded px-2 py-1"
                      value={row.fValues[currentColumnName] || ""}
                      onChange={(e) => handleInputChange(row.id, e)}
                    />
                  </td>
                </tr>
              ))}
              {/* Adding new row section */}
              <AddingNewRow />
            </tbody>
          </table>
        </div>
        <NextPrevControls />
      </div>
    </div>
  );
}
export default Tables;
