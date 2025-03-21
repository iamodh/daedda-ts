import { createBrowserRouter } from "react-router";
import Home from "@/pages/Index";

const router = createBrowserRouter([
  { path: "/", children: [{ index: true, element: <Home /> }] },
]);

export default router;
