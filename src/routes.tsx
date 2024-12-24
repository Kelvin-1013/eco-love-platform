import { RouteObject } from "react-router-dom";
import Index from "./pages/Index";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Index />,
  }
];

export default routes;