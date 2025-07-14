function TableHeader() {
  return (
    <thead>
      <tr>
        <th className="p-2 w-[10%] text-center font-semibold bg-emerald-50 border-b text-emerald-800 border-emerald-300">
          S.N.
        </th>
        <th className="p-2 w-[60%] text-center font-semibold bg-emerald-50 border-b text-emerald-800 border-emerald-300">
          Products
        </th>
        <th className="p-2 w-[20%] text-center font-semibold bg-emerald-50 border-b text-emerald-800 border-emerald-300">
          Weight
        </th>
        <th className="p-2 w-[10%] text-center font-semibold bg-emerald-50 border-b text-emerald-800 border-emerald-300">
          Action
        </th>
      </tr>
    </thead>
  );
}

export default TableHeader;
