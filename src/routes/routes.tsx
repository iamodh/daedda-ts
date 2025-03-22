import { createBrowserRouter } from "react-router";
import Layout from "@components/layouts/Layout";
import Home from "@pages/Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <Home /> }],
  },
]);

export default router;
