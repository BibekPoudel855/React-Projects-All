import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Table from "./components/Ref/Table";
import Tables from "./components/Table/Tables";
import TableContextProvider from "./components/context/TableContext";
import BatchTable from "./components/Ref/TableSample1";
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
