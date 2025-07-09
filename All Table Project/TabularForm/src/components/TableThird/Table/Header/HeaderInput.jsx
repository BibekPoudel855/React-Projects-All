import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
function HeaderInput() {
  const [date, setDate] = useState(new Date());
  const inputTextStyles = "border border-emerald-300 rounded p-2 w-full";

  const [expanded, setExpanded] = useState(false);
  const { register, handleSubmit } = useForm();
  const labelStyles = "text-sm font-semibold text-slate-700 mb-2";

  const exportData = (data) => {
    console.log(data);
    
  };
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            <label className="flex flex-col">
              <span className={labelStyles}>DATE: </span>
              <input
                type="date"
                className="border border-emerald-300 rounded p-2 w-full"
                {...register("date")}
              />
            </label>

            <div>
              <label className={labelStyles}>
                <span>REFERENCE NUMBER: </span>
                <input
                  type="text"
                  className={inputTextStyles}
                  {...register("referenceNumber")}
                />
              </label>
            </div>
            <button
              type="submit"
              className="bg-teal-600 text-white px-4 py-2 rounded"
            >
              Export to JSON
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
