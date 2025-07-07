import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import { Toaster } from "react-hot-toast";
import Table from "./Table/Table";
import TableContextProvider from "./Context/TableContextProvider";

function Table2Layout() {
  return (
    <TableContextProvider>
      <div className="w-[100vw] md:w-[70vw] lg:w-[40vw] md:mx-auto lg:mx-auto lg:py-5">
        <header>
          <Toaster position="top-right" reverseOrder={false} />
          <Header />
        </header>
        <main>
          <Table />
        </main>
      </div>
    </TableContextProvider>
  );
}
export default Table2Layout;
