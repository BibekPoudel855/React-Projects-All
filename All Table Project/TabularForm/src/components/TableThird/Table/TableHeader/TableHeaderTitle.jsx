import { FiPackage } from "react-icons/fi";

function TableHeaderTitle() {
  return (
    <div className="text-[20px] font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-400 p-4 mx-4 rounded-tl-2xl rounded-tr-2xl">
      <h1 className="flex items-center gap-2 ">
        <FiPackage className="text-xl md:text-2xl flex-shrink-0" />
        Product Entry Table
      </h1>
    </div>
  );
}

export default TableHeaderTitle;
