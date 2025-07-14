import { createContext, use, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const allProducts = [
  { value: "calc_carbonate", label: "Calcium Carbonate", waste: true },
  { value: "calc_sulphate", label: "Calcium Sulphate", waste: true },
  { value: "calc_phosphate", label: "Calcium Phosphate", waste: true },
  { value: "calc_citrate", label: "Calcium Citrate", waste: true },
  { value: "calc_gluconate", label: "Calcium Gluconate", waste: true },
  { value: "calc_lactate", label: "Calcium Lactate", waste: true },
  { value: "calc_aspartate", label: "Calcium Aspartate" },
  { value: "calc_oxalate", label: "Calcium Oxalate" },
  { value: "calc_borate", label: "Calcium Borate" },
  { value: "calc_silicate", label: "Calcium Silicate" },
  { value: "calc_citrate_malate", label: "Calcium Citrate Malate" },
  { value: "calc_citrate_gluconate", label: "Calcium Citrate Gluconate" },
];

const DEFAULT_TABLE_DATA = [
  {
    id: 1,
    item: "",
    weight: "",
  },
];

const Table3Context = createContext();

// custom hook to use the context
function useTable3Context() {
  return useContext(Table3Context);
}
// context provider component
function Table3ContextProvider({ children }) {
  const [selectedProducts, setSelectedProducts] = useState(() => {
    const savedProducts = localStorage.getItem("selectedProducts");
    return savedProducts ? JSON.parse(savedProducts) : [];
  });
  const [tableData, setTableData] = useState(() => {
    const savedData = localStorage.getItem("table3Data");
    return savedData ? JSON.parse(savedData) : DEFAULT_TABLE_DATA;
  });

  const [shift, setShift] = useState(() => {
    const savedHeaderData = localStorage.getItem("headerData");
    return savedHeaderData ? JSON.parse(savedHeaderData).shift : "N/A";
  });
  const [date, setDate] = useState(() => {
    const savedHeaderData = localStorage.getItem("headerData");
    return savedHeaderData ? JSON.parse(savedHeaderData).date : "N/A";
  });

  useEffect(() => {
    localStorage.setItem("table3Data", JSON.stringify(tableData));
  }, [tableData]);

  useEffect(() => {
    localStorage.setItem("selectedProducts", JSON.stringify(selectedProducts));
  }, [selectedProducts]);

  useEffect(() => {
    localStorage.setItem("headerData", JSON.stringify({ shift }));
  }, [shift]);

  const handleDeleteProduct = (id) => {
    setTableData((prevData) => prevData.filter((data) => data.id !== id));
    toast.success("Product deleted successfully!");
  };

  const changeProductSelection = (product, e) => {
    setSelectedProducts((prev) => {
      if (e.target.checked) {
        return [...prev, product];
      } else {
        return prev.filter((p) => {
          return p.value !== product.value;
        });
      }
    });
  };

  const handleAddNewRow = () => {
    let isAddRowAllowed = true;
    tableData.forEach((data) => {
      if (!data.item || !data.weight) {
        isAddRowAllowed = false;
      }
    });
    if (!isAddRowAllowed) {
      toast.error("Please fill all fields before adding a new row.", {
        duration: 1500,
        id: "add-row-error",
      });
      return;
    }
    setTableData((prevData) => [
      ...prevData,
      {
        id: prevData.length + 1,
        item: "",
        weight: "",
      },
    ]);
    toast.success("New row added successfully!");
  };

  const updateTableData = (data, value, columnName) => {
    setTableData((prevData) => {
      if (columnName === "products") {
        return prevData.map((row) => {
          if (row.id === data.id) {
            return {
              ...row,
              item: value,
            };
          }
          return row;
        });
      }
      if (columnName === "weight") {
        return prevData.map((row) => {
          if (row.id === data.id) {
            return {
              ...row,
              weight: value,
            };
          }
          return row;
        });
      }
    });
  };

  const getStatisticsData = () => {
    let totalWeight = 0;
    const totalItems = tableData.length;
    tableData.forEach((item) => {
      if (item.weight) {
        totalWeight += parseFloat(item.weight);
      }
    });
    return {
      totalWeight,
      totalItems,
    };
  };

  const handleSaveAllData = () => {
    if (shift == "N/A" || date == "N/A") {
      toast.error("Please select shift and date before saving.", {
        duration: 1500,
        id: "save-error",
      });
      return;
    }
    if (tableData.length === 0) {
      toast.error("No data to save!", {
        duration: 1500,
        id: "save-error",
      });
      return;
    }
    const data = {
      savedDate: new Date(),
      headerData: {
        shift,
        date,
      },
      tableData,
    };

    const jsonData = JSON.stringify(data);
    // making downloadable
    const blob = new Blob([jsonData], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `table_data_${new Date().toLocaleDateString()}.json`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Data saved successfully!", {
      duration: 1500,
      id: "save-success",
    });
  };

  return (
    <Table3Context.Provider
      value={{
        DEFAULT_TABLE_DATA,
        allProducts,
        tableData,
        setTableData,
        shift,
        setShift,
        date,
        setDate,
        changeProductSelection,
        selectedProducts,
        setSelectedProducts,
        handleDeleteProduct,
        handleAddNewRow,
        updateTableData,
        getStatisticsData,
        handleSaveAllData,
      }}
    >
      {children}
    </Table3Context.Provider>
  );
}

export default Table3ContextProvider;
export { Table3Context, useTable3Context };
