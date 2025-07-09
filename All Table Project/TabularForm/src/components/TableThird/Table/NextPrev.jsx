function NextPrev() {
  return (
    <div className="fixed lg:relative bottom-0 left-0 bg-emerald-100 text-white w-full flex justify-between items-center mt-4 p-4">
      <div className="flex justify-between items-center w-full ">
        <button
          className={`${
            true == 0
              ? "bg-slate-400 hover:bg-slate-500 cursor-not-allowed"
              : "bg-teal-600 hover:bg-teal-700"
          } px-4 py-2 rounded transition`}
          onClick={() => {}}
        >
          ← Prev
        </button>
        <span className="text-lg text-slate-800 font-normal">
          (0 of 10)
        </span>
        <button
          className="bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded transition"
          onClick={() => {}}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
export default NextPrev;
