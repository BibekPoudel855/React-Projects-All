import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import FetchItems from "../components/HomeMainBody/FetchItems";
import Loader from "../components/Common/Loader";
import { use } from "react";
import { useSelector } from "react-redux";
function App() {
  const fetchStatus = useSelector((state) => {
    
    return state.fetchStatus;
  });
  return (
    <div className="overflow-x-hidden">
      <Header />
      <FetchItems />
      <Outlet />
      <Footer />
    </div>
  );
}
export default App;
