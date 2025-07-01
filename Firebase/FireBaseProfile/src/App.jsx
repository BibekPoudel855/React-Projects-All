import { Outlet } from "react-router";
import Header from "./Header";
import { firebaseApp } from "./Firebase/firebase";
function App() {
  return (
    <div className=" bg-[#290909] h-[100vh] text-white">
      <Header />
      <Outlet />
    </div>
  );
}

export default App; 
