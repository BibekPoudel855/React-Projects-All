import { useForm } from "react-hook-form";
import DatePicker from "react-multi-date-picker";
import indian from "react-date-object/calendars/indian";
import indian_hi from "react-date-object/locales/indian_hi";
import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useTableContext } from "../context/TableContext";

function HeaderInput() {
  const { tableData, timingData } = useTableContext();
  const [value, setValue] = React.useState(new Date());
  const inputTextStyles = "border border-emerald-300 rounded p-2 w-full";

  const [expanded, setExpanded] = useState(false);
  const { register, handleSubmit } = useForm();

  const exportData = (data) => {
    const allData = {
      headerData: data,
      tableData,
      timingData,
    };
    console.log(allData);

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
          {expanded ? "Show Less" : "Show More"}
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
              <DatePicker
                value={value}
                onChange={setValue}
                calendar={indian}
                locale={indian_hi}
                inputClass="border border-emerald-300 rounded p-2 w-full"
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
              <label className={labelStyles}>THICKNESS: (MM)</label>
              <input
                type="text"
                className={inputTextStyles}
                {...register("thickness")}
              />
            </div>

            <div>
              <label className={labelStyles}>
                <span>OPERATOR: </span>
                <input
                  type="text"
                  className={inputTextStyles}
                  {...register("operator")}
                />
              </label>
            </div>

            <div>
              <label className={labelStyles}>
                <span>MIXTURE OPERATOR: </span>
                <input
                  type="text"
                  className={inputTextStyles}
                  {...register("mixtureOperator")}
                />
              </label>
            </div>
            <button
              type="submit"
              className="bg-teal-600 text-white px-4 py-2 rounded"
            >
              Submit
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
