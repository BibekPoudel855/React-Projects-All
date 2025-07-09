import { Outlet } from "react-router-dom";
import Table3ContextProvider from "./context/Table3ContextProvider";
import Header from "./Table/Header/Header";
function Table3Layout() {
  return (
    <Table3ContextProvider>
      <Header />
      <Outlet />
    </Table3ContextProvider>
  );
}
export default Table3Layout;
