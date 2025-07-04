import { useContext, useEffect, useRef, useState } from "react";
import { createContext } from "react";
const DEFAULT_DATA = {
  id: 1,
  itemName: "Calc Carbonate",
  fValues: { F1: "", F2: "", F3: "", F4: "", F5: "" },
};

const TableDataContext = createContext(null);
// custom hook to use the context
export const useTableContext = () => {
  return useContext(TableDataContext);
};

function TableContextProvider({ children }) {
  const addRowInputRef = useRef(null);
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("tableData");
    if (savedData) {
      return JSON.parse(savedData);
    }
    return [DEFAULT_DATA];
  });

  const [currentColumnIndex, setCurrentColumnIndex] = useState(0);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    if (data && data.length > 0) {
      setColumns(Object.keys(data[0]));
    }
  }, [data]);

  // save data to local storage
  useEffect(() => {
    if (data && data.length > 0) {
      localStorage.setItem("tableData", JSON.stringify(data));
    }
  }, [data]);

  // setting columns
  const fixedColumns = ["Id", "ItemName"];
  const dynamicColumns = columns.filter((column) => {
    if (!fixedColumns.includes(column)) {
      return column;
    }
  });
  const visibleColumns = [...fixedColumns, dynamicColumns[currentColumnIndex]];

  return (
    <TableDataContext.Provider
      value={{
        DEFAULT_DATA,
        currentColumnIndex,
        setCurrentColumnIndex,
        columns,
        setColumns,
        data,
        setData,
        fixedColumns,
        dynamicColumns,
        visibleColumns,
        addRowInputRef,
      }}
    >
      {children}
    </TableDataContext.Provider>
  );
}
export default TableContextProvider;
