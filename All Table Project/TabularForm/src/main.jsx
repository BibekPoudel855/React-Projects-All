import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Table1stLayout from "./components/TableFirst/Table1stLayout.jsx";
import Tables from "./components/TableFirst/Table/Tables";
import TableContextProvider from "./components/TableFirst/context/TableContext";
import Table2Layout from "./components/TableSecond/Table2Layout";
import Table3Layout from "./components/TableThird/Table3Layout.jsx";
import Table3 from "./components/TableThird/Table/Table3.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Table1stLayout />,
    children: [
      {
        index: true,
        element: <Tables />,
      },
    ],
  },
  {
    path: "table2",
    element: <Table2Layout />,
  },
  {
    path: "table3",
    element: <Table3Layout />,
    children: [
      {
        index: true,
        element: <Table3 />,
      },
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
