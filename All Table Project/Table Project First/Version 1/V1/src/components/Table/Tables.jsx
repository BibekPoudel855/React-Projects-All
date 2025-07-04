import toast from "react-hot-toast";

import { useTableContext } from "../context/TableContext";
import NextPrevControls from "./NextPrevControls";
import AddResetControls from "./AddResetControls";
function Tables() {
  // get data from context
  const {
    columns,
    setColumns,
    data,
    setData,
    fixedColumns,
    dynamicColumns,
    visibleColumns,
    setCurrentColumnIndex,
    addRowInputRef,
  } = useTableContext();

  // handle input change function
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

  // add new row function
  const addNewRow = () => {
    if (!addRowInputRef.current.value.trim()) {
      toast.error("Please enter an item name", {
        duration: 1000,
        id: "add-row-toast",
      });
      return;
    }
    {
      const newRowID = data.length > 0 ? data.length + 1 : 1;
      const newRow = { Id: newRowID, ItemName: addRowInputRef.current.value };
      dynamicColumns.forEach((column) => {
        newRow[column] = "";
      });
      setData([...data, newRow]);
      addRowInputRef.current.value = "";
      toast.success("New row added successfully", {
        duration: 1000,
        id: "add-row-toast",
      });
    }
  };

  // add column function
  const addColumn = () => {
    setColumns([...columns, `F${dynamicColumns.length + 1}`]);
    setCurrentColumnIndex(dynamicColumns.length);
    toast.dismiss();
    toast.success("New column added successfully");
  };

  return (
    <div className="px-4 transition-all">
      <div className="h-[100vh] overflow-y-auto overflow-x-hidden pb-20">
        <div>
          <AddResetControls addNewRow={addNewRow} />
        </div>
        <div
          className={`grid grid-cols-[10%_60%_30%] font-bold bg-gray-200 border-b-2 border-gray-400 sticky top-0 z-10 mt-4`}
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
              className={`grid grid-cols-[10%_60%_30%] border hover:bg-gray-100 transition-all`}
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
                          className={`w-full border-0 p-2 `}
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
        <div className="grid grid-cols-[10%_60%_30%] border hover:bg-gray-100 transition-all">
          <div className="p-3 border-r">...</div>
          <div className="p-3 border-r">
            <input
              type="text"
              className=" w-full border-0 p-2"
              ref={addRowInputRef}
              placeholder="Add new item"
            />
          </div>
          <div className="p-3 border-r">...</div>
        </div>

        <NextPrevControls addColumn={addColumn} />
      </div>
    </div>
  );
}
export default Tables;
