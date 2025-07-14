import { FiTrash2 } from "react-icons/fi";
import { useTable3Context } from "../context/Table3ContextProvider";
import TableHeaderTitle from "./TableHeader/TableHeaderTitle.jsx";
import TableHeader from "./TableHeader/TableHeader.jsx";
import TableSaveReset from "./TableFooter/TableSaveReset.jsx";
import TableStatistics from "./TableFooter/TableStatistics.jsx";

function Table3() {
  const {
    selectedProducts,
    tableData,
    handleDeleteProduct,
    handleAddNewRow,
    updateTableData,
  } = useTable3Context();

  return (
    <>
      {/* main table  */}
      <TableHeaderTitle />
      <div className="table-container lg:w-full px-4">
        <table className="overflow-hidden border border-gray-200 rounded-lg shadow-md lg:w-full">
          <TableHeader />
          <tbody>
            {tableData.map((data) => {
              console.log(data);

              return (
                <tr
                  key={data.id}
                  className="border-b border-gray-100 p-2 font-medium text-gray-700"
                >
                  <td className="text-center w-[10%]">{data.id}</td>
                  <td className="p-2 w-[60%]">
                    <select
                      value={data.item}
                      className="w-full p-2 border border-gray-300 rounded text-ellipsis"
                      onChange={(e) => {
                        updateTableData(data, e.target.value, "products");
                      }}
                    >
                      <option value="">Select</option>
                      {selectedProducts.length > 0 &&
                        selectedProducts.map((product) => {
                          return (
                            <option
                              key={product.label}
                              value={product.value}
                              title={product.label}
                            >
                              {product.label.length > 20
                                ? `${product.label.substring(0, 20)}...`
                                : product.label}
                            </option>
                          );
                        })}
                    </select>
                  </td>
                  <td className="p-2 w-[20%]">
                    <input
                      type="number"
                      placeholder="K.G."
                      className="w-full p-2 border border-gray-300 rounded"
                      onChange={(e) => {
                        updateTableData(data, e.target.value, "weight");
                      }}
                      value={data.weight ? data.weight : ""}
                    />
                  </td>
                  <td className="px-2 py-4 flex justify-center items-center">
                    <button
                      onClick={() => {
                        handleDeleteProduct(data.id);
                      }}
                    >
                      <FiTrash2 className="text-red-500 text-xl hover:text-red-600 transition cursor-pointer" />
                    </button>
                  </td>
                </tr>
              );
            })}

            <tr>
              <td colSpan={4} className="p-4">
                {" "}
                <button
                  className="bg-emerald-500 text-white px-4 py-2 rounded hover:bg-emerald-600 transition"
                  onClick={() => {
                    handleAddNewRow();
                  }}
                >
                  + Add Row
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <TableStatistics />

        <TableSaveReset />
      </div>
    </>
  );
}
export default Table3;
