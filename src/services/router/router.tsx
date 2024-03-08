import { HomeModule } from "@modules/home";
import { createBrowserRouter, Navigate } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeModule />,
    index: true,
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);
