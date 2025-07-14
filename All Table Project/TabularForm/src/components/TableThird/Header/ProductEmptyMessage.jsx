import { FiPackage } from "react-icons/fi";

function ProductEmptyMessage() {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 m-4 flex items-center gap-2">
      <div className="bg-amber-200 p-2 rounded-full">
        <FiPackage className="text-amber-600 text-lg" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-amber-800">
          No Products Selected
        </h3>
        <p className="text-sm text-amber-600">
          Please go to the configuration section to select products for data
          entry.
        </p>
      </div>
    </div>
  );
}

export default ProductEmptyMessage;
