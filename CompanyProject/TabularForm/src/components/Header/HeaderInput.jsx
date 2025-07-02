import { useForm } from "react-hook-form";
import DatePicker from "react-multi-date-picker";
import indian from "react-date-object/calendars/indian";
import indian_hi from "react-date-object/locales/indian_hi";
import React from "react";

function HeaderInput() {
  const [value, setValue] = React.useState(new Date());

  const inputTextStyles = "border-b-1 outline-0 w-[50%]";
  const { register, handleSubmit } = useForm();
  return (
    <div className="w-[100%] py-2 lg:p-0">
      <form
        noValidate
        className="flex flex-wrap gap-2 md:justify-center lg:gap-0 lg:justify-between"
      >
        <label>
          <span>DATE: </span>
          <DatePicker
            value={value}
            onChange={setValue}
            calendar={indian}
            locale={indian_hi}
            inputClass="w-[100px] text-center outline-0"
          />
        </label>

        <div className="flex items-center gap-2 border">
          <select className="" {...register("shift")}>
            <option value="">Select Shift</option>
            <option value="day">Day</option>
            <option value="night">Night</option>
          </select>
        </div>

        <div>
          <label>
            <span>THICKNESS: </span>
            <input
              type="text"
              className={inputTextStyles}
              {...register("thickness")}
            />
            MM
          </label>
        </div>

        <div>
          <label>
            <span>OPERATOR: </span>
            <input
              type="text"
              className={inputTextStyles}
              {...register("operator")}
            />
          </label>
        </div>

        <div>
          <label>
            <span>MIXTURE OPERATOR: </span>
            <input
              type="text"
              className={inputTextStyles}
              {...register("mixtureOperator")}
            />
          </label>
        </div>
      </form>
    </div>
  );
}
export default HeaderInput;
