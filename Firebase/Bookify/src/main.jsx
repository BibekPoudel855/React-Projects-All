import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import App from "./App.jsx";
import { FirebaseProvider } from "./context/FirebaseContext.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./components/Common/NotFound.jsx";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import Layout from "./components/Layout/Layout.jsx";
import AddItems from "./components/AddItems/AddItems.jsx";
import Profile from "./components/Profile/Profile.jsx";
import AddRemainingData from "./components/Login/AddRemainingData.jsx";
import ResetPassword from "./components/Login/ResetPassword.jsx";
import Bag from "./components/Bag/Bag.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "add-items",
        element: <AddItems />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "add-remaining-data",
        element: <AddRemainingData />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
      {
        path: "bag",
        element: <Bag />,
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FirebaseProvider>
      <RouterProvider router={router} />
    </FirebaseProvider>
  </StrictMode>
);
