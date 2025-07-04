import { useTableContext } from "../context/TableContext";

function NextPrevControls({ addColumn }) {
  const { currentColumnIndex, setCurrentColumnIndex, dynamicColumns } =
    useTableContext();

  return (
    <div className="flex items-center justify-between w-[100%] p-4 bg-gray-200 rounded fixed left-0 bottom-0">
      <button
        className={`${
          currentColumnIndex == 0
            ? "bg-gray-400 hover:bg-gray-500"
            : "bg-blue-500"
        } text-white px-4 py-2 rounded hover:bg-blue-600 transition-all`}
        onClick={() => {
          if (currentColumnIndex > 0) {
            setCurrentColumnIndex(currentColumnIndex - 1);
          }
        }}
      >
        ← Prev
      </button>
      <span>
        Column: ({currentColumnIndex + 1} of {dynamicColumns.length})
      </span>
      <button
        className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded`}
        onClick={() => {
          if (currentColumnIndex < dynamicColumns.length - 1) {
            setCurrentColumnIndex(currentColumnIndex + 1);
          }
          if (currentColumnIndex == dynamicColumns.length - 1) {
            addColumn();
          }
        }}
      >
        Next →
      </button>
    </div>
  );
}

export default NextPrevControls;
