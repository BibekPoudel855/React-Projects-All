import NextPrev from "./NextPrev";
function Table3() {
  return (
    <div className="p-4">
      <table className="w-full text-1xl ">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-1">SN</th>
            <th className="p-1">ITEM NAME</th>
            <th className="p-1">DAY SHIFT</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Item 1</td>
            <td>Shift 1</td>
          </tr>
        </tbody>
      </table>

      <NextPrev />
    </div>
  );
}

export default Table3;
