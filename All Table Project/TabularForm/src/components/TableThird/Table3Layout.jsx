import { Outlet } from "react-router-dom";
import Table3ContextProvider from "./context/Table3ContextProvider";
import Header from "./Header/Header";
import { Toaster } from "react-hot-toast";

function Table3Layout() {
  return (
    <div className="lg:w-[50%] lg:mx-auto">
      <Table3ContextProvider>
        <Toaster position="top-right" reverseOrder={false} />
        <Header />
        <Outlet />
      </Table3ContextProvider>
    </div>
  );
}
export default Table3Layout;
