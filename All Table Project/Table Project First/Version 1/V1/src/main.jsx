import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Table from "./components/Table/Table";
import Tables from "./components/Table/Tables";
import TableContextProvider from "./components/context/TableContext";
import BatchTable from "./components/Table/TableSample1";
import BatchTable2 from "./components/Table/TableSample2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Tables />,
      },
      {
        path: "a",
        element: <Table />,
      },
      {
        path: "b",
        element: <BatchTable />,
      },
      {
        path: "c",
        element: <BatchTable2 />,
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
