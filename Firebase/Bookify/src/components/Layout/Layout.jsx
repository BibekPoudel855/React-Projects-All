import Header from "./../Header/Header";
import Footer from "./../Footer/Footer";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
function Layout() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
      <Toaster position="top-right" reverseOrder={false} />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
