import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import Profile from "./components/Profile.jsx";
import { RouterProvider } from "react-router-dom";
import Login from "./components/Login.jsx";
import Register from "./components/Register/Register.jsx";
import FirebaseContextProvider from "./store/FirebaseContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <h1 className="text-5xl font-bold text-center my-50">Home</h1>,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FirebaseContextProvider>
      <RouterProvider router={router} />
    </FirebaseContextProvider>
  </StrictMode>
);
