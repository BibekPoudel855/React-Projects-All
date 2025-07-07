import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div className="w-[100vw] md:w-[70vw] lg:w-[40vw] md:mx-auto lg:mx-auto lg:py-5">
      <header>
        <Toaster position="top-right" reverseOrder={false} />
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
export default App;
