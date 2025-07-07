import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Tables from "./components/TableFirst/Table/Tables";
import TableContextProvider from "./components/TableFirst/context/TableContext";
import Table2Layout from "./components/TableSecond/Table2Layout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Tables />,
      },
    ],
  },
  {
    path: "table2",
    element: <Table2Layout />
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TableContextProvider>
      <RouterProvider router={router} />
    </TableContextProvider>
  </StrictMode>
);
