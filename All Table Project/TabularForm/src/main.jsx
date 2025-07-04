import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Tables from "./components/Table/Tables";
import TableContextProvider from "./components/context/TableContext";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Tables />,
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TableContextProvider>
      <RouterProvider router={router} />
    </TableContextProvider>
  </StrictMode>
);
