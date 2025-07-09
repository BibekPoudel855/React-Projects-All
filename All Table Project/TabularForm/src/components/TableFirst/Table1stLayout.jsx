import Header from "./Header/Header.jsx";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function Table1stLayout() {
  return (
    <div className="w-full lg:w-[40%] mx-auto">
      <Toaster position="top-right" reverseOrder={false} />
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Table1stLayout;
