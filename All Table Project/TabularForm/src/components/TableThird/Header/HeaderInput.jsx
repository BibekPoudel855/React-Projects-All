import { MdKeyboardArrowDown } from "react-icons/md";
import { LuDot } from "react-icons/lu";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTable3Context } from "../context/Table3ContextProvider.jsx";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import "nepali-datepicker-reactjs/dist/index.css";

function HeaderInput() {
  const {
    allProducts,
    shift,
    setShift,
    date,
    setDate,
    changeProductSelection,
    selectedProducts,
  } = useTable3Context();
  const [isExpanded, setIsExpanded] = useState(false);
  const { register, handleSubmit } = useForm();

  const labelStyles = "text-sm font-semibold text-slate-700 mb-2";
  const setupSummaryDetals = [
    {
      id: 1,
      title: "Date",
      value: date ? date : "N/A",
      icon: <LuDot className="text-emerald-500 text-4xl animate-pulse" />,
    },
    {
      id: 2,
      title: "Shift",
      value: shift ? shift.toUpperCase() : "N/A",
      icon: <LuDot className="text-emerald-500 text-4xl animate-pulse" />,
    },
  ];

  const onSubmit = (data) => {
    console.log(data);
    setIsExpanded(false);
  };

  return (
    <>
      <div className="p-4 m-4 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-lg shadow-sm ">
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mb-4">
          {setupSummaryDetals.map((item) => {
            return (
              <div
                key={item.id}
                className="flex items-center bg-white rounded-md shadow-md py-2"
              >
                {item.icon}
                <div className="flex flex-col">
                  <span className="text-xs font-medium text-emerald-600">
                    {item.title}
                  </span>
                  <span className="text-sm font-bold text-slate-800">
                    {item.value}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="lg:flex lg:justify-end lg:items-center ">
          <button
            className="flex justify-center items-center w-full lg:w-[190px] gap-2 bg-gradient-to-r from-teal-500 to-emerald-400 hover:from-teal-700 hover:to-emerald-700 text-white px-4 py-2 rounded-lg transition-all shadow-md hover:shadow-lg"
            onClick={() => {
              setIsExpanded(!isExpanded);
            }}
          >
            {isExpanded ? "Hide Configurations" : "Show Configurations"}
            <MdKeyboardArrowDown
              className={`text-white text-[19px]  transition-transform duration-300 ${
                isExpanded ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
        </div>
      </div>
      {isExpanded && (
        <div className=" flex flex-col gap-4 p-4 m-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg shadow-sm">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col">
              <label className={labelStyles}>DATE</label>

              <NepaliDatePicker
                inputClassName="form-control outline-0"
                className="border border-gray-300 rounded-md p-2 outline-0"
                value={date}
                onChange={(value) => setDate(value)}
                options={{ calenderLocale: "ne", valueLocale: "en" }}
              />
            </div>
            <div className="flex flex-col">
              <label className={`${labelStyles} mt-2`}>SHIFT</label>
              <select
                className="border border-gray-300 rounded-md p-2"
                {...register("shift", { required: true })}
                value={shift}
                onChange={(e) => {
                  setShift(e.target.value);
                }}
              >
                <option value="">Select Shift</option>
                <option value="day">Day</option>
                <option value="night">Night</option>
              </select>
            </div>
            <div className="flex flex-col ">
              <label className={`${labelStyles} mt-2`}>PRODUCTS</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-4 bg-white rounded border-2 border-emerald-200 shadow-lg ">
                {allProducts.map((product) => (
                  <label
                    key={product.value}
                    className="flex items-center gap-2"
                  >
                    <input
                      type="checkbox"
                      value={product.value}
                      checked={selectedProducts.some((p) => {
                        return p.value === product.value;
                      })}
                      className="w-4 h-4 text-emerald-600 rounded focus:ring-emerald-400"
                      onChange={(e) => {
                        changeProductSelection(product, e);
                      }}
                    />
                    <span className="text-sm font-medium text-slate-700">
                      {product.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center gap-4 mt-4">
              {/* <button
                type="submit"
                className="bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white px-4 py-2 rounded-lg shadow-md transition-all duration-200"
              >
                Save Configurations
              </button> */}
              <button
                type="button"
                className="bg-slate-300 hover:bg-slate-400 text-slate-700 px-4 py-2 rounded-lg shadow-md transition-all duration-200"
                onClick={() => {
                  setIsExpanded(false);
                }}
              >
                Hide
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
export default HeaderInput;
