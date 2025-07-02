import { useEffect, useState } from "react";
function Tables() {
  const [columns, setColumns] = useState([]);
  const [currentColumnIndex, setCurrentColumnIndex] = useState(0);
  const [data, setData] = useState([
    {
      Id: 1,
      ItemName: "CALCIUM CARBONATE (CaCO3)",
      F1: "Value A1",
      F2: "Value A2",
      F3: "Value A3",
      F4: "Value A4",
    },

  ]);

  useEffect(() => {
    if (data && data.length > 0) {
      setColumns(Object.keys(data[0]));
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

  return (
    <div className="px-4 transition-all">
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
