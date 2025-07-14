import { FiPackage } from "react-icons/fi";
import { GiWeight } from "react-icons/gi";
import { useTable3Context } from "../../context/Table3ContextProvider";

function TableStatistics() {
  const {  getStatisticsData } = useTable3Context();
  const { totalWeight, totalItems } = getStatisticsData();
  return (
    <div className="flex gap-4 my-4">
      <div className=" flex justify-between items-center w-[50%] p-4 bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200 rounded-lg">
        <div className="flex flex-col gap-2">
          <span className="text-xs font-medium text-emerald-600 mb-1">
            Total Items:
          </span>
          <span className="text-lg font-semibold text-emerald-800">
            {totalItems}
          </span>
        </div>
        <div className="rounded-full p-2 bg-emerald-500 flex-shrink-0">
          <FiPackage className="text-white text-lg" />
        </div>
      </div>

      <div className=" flex justify-between items-center w-[50%] p-4 bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200 rounded-lg">
        <div className="flex flex-col gap-2">
          <span className="text-xs font-medium text-emerald-600 mb-1">
            Total Weight:
          </span>
          <span className="text-lg font-semibold text-emerald-800">
            {totalWeight} KG
          </span>
        </div>
        <div className="rounded-full p-2 bg-emerald-500 flex-shrink-0">
          <GiWeight className="text-white text-lg" />
        </div>
      </div>
    </div>
  );
}

export default TableStatistics;
