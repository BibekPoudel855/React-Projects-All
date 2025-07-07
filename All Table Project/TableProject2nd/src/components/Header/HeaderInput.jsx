import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useForm } from "react-hook-form";
import { useTableContext } from "./../Context/TableContextProvider";
import toast from "react-hot-toast";

function HeaderInput() {
  const { tableData } = useTableContext();
  const inputTextStyles = "border border-emerald-300 rounded p-2 w-full";
  const [expanded, setExpanded] = useState(false);
  const { register, handleSubmit } = useForm();

  const exportData = (data) => {
    const allData = {
      headerData: data,
      tableData: {
        ...tableData,
      },
    };
    console.log(allData);
    toast.success("Data exported successfully!", {
      id: "export-success",
    });
  };
  const labelStyles = "text-sm font-semibold text-slate-700 mb-2";
  return (
    <div className="p-4 w-[100%]">
      <div className="flex items-center justify-between bg-emerald-100 py-4 px-4 rounded">
        <h1 className="text-center text-[18px] font-semibold">Information</h1>
        <button
          className={`bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded`}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show Less" : "Export Data"}
          <MdKeyboardArrowDown
            className={`text-[20px] inline-block ml-1 transition ${
              expanded ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>
      {expanded && (
        <div className="w-[100%] bg-emerald-50 p-4 rounded shadow-inner lg:p-0">
          <form
            onSubmit={handleSubmit(exportData)}
            noValidate
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-0 lg:p-4"
          >
            <label className="flex flex-col">
              <span className={labelStyles}>DATE: </span>
              <input
                type="date"
                {...register("date")}
                className={inputTextStyles}
              />
            </label>

            <div className="flex flex-col">
              <label className={labelStyles}>Shift :</label>
              <select
                className="border border-emerald-300 rounded p-2 w-full"
                {...register("shift")}
              >
                <option value="">Select Shift</option>
                <option value="day">Day</option>
                <option value="night">Night</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className={labelStyles}>Size:</label>
              <input
                type="text"
                className={inputTextStyles}
                {...register("size")}
              />
            </div>
            <div className="flex flex-col">
              <label className={labelStyles}>Density:</label>
              <input
                type="text"
                className={inputTextStyles}
                {...register("density")}
              />
            </div>
            <div className="flex flex-col">
              <label className={labelStyles}>Min WT. :</label>
              <input
                type="text"
                className={inputTextStyles}
                {...register("minWeight")}
              />
            </div>
            <div className="flex flex-col">
              <label className={labelStyles}>Max. WT. :</label>
              <input
                type="text"
                className={inputTextStyles}
                {...register("maxWeight")}
              />
            </div>

            <div>
              <label className={labelStyles}>
                <span>Standard Weight: </span>
                <input
                  type="text"
                  className={inputTextStyles}
                  {...register("standardWeight")}
                />
              </label>
            </div>

            <div>
              <label className={labelStyles}>
                <span>Standard Thickness: </span>
                <input
                  type="text"
                  className={inputTextStyles}
                  {...register("standardThickness")}
                />
              </label>
            </div>

            <div>
              <label className={labelStyles}>
                <span>Product Type: </span>
                <select
                  {...register("productType")}
                  className="border border-emerald-300 rounded p-2 w-full"
                >
                  <option value="">D/G/S</option>
                  <option value="type1">Color</option>
                  <option value="type2">W/O</option>
                </select>
              </label>
            </div>
            <button
              type="submit"
              className="bg-teal-600 text-white px-4 py-2 rounded"
            >
              Export All Data
            </button>
            <button
              type="button"
              className="bg-slate-300 text-slate-700 px-4 py-2 rounded"
              onClick={() => setExpanded(false)}
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
export default HeaderInput;
