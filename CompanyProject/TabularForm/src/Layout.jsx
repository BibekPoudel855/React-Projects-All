import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import  { Toaster } from "react-hot-toast";

function Layout() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
