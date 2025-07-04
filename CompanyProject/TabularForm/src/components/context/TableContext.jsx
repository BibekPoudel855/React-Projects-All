import { createContext, useContext, useRef, useState } from "react";

// data and functions to be shared across components
const LOCAL_STORAGE_KEY = "tableData";
const DEFAULT_DATA = [
  { id: 1, itemName: "Calc Carbon", fValues: { F1: "" } },
  { id: 2, itemName: "PVC Powder", fValues: { F1: "" } },
];

// creating context and using it by custom hook in the component
const TableDataContext = createContext(null);
const useTableContext = () => {
  return useContext(TableDataContext);
};

// component which provides data to its children
function TableContextProvider({ children }) {
  const inputAddingRowItemNameREF = useRef();
  const [tableData, setTableData] = useState(() => {
    const savedDataLocalStorage = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedDataLocalStorage) {
      return JSON.parse(savedDataLocalStorage);
    }
    return DEFAULT_DATA;
  });

  const [addingNewRowData, setAddingNewRowData] = useState({
    itemName: "",
    fValue: {
      F1: "",
    },
  });

  const [currentColumnIndex, setCurrentColumnIndex] = useState(0);
  const [addingRowActive, setAddingRowActive] = useState(false);

  // finding column name
  const columnNames =
    tableData.length > 0 ? Object.keys(tableData[0].fValues) : "F1";
  const currentColumnName = columnNames[currentColumnIndex];

  return (
    <TableDataContext.Provider
      value={{
        LOCAL_STORAGE_KEY,
        DEFAULT_DATA,
        tableData,
        setTableData,
        inputAddingRowItemNameREF,
        addingNewRowData,
        setAddingNewRowData,
        currentColumnIndex,
        setCurrentColumnIndex,
        addingRowActive,
        setAddingRowActive,
        currentColumnName,
        columnNames,
      }}
    >
      {children}
    </TableDataContext.Provider>
  );
}
export default TableContextProvider;
export { useTableContext };
