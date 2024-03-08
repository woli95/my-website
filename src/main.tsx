import { router } from "@services/router";
import { StoreMachineContext } from "@services/store";
import { RouterProvider } from "react-router-dom";

export const Main = () => (
  <StoreMachineContext.Provider>
    <RouterProvider router={router} />
  </StoreMachineContext.Provider>
);
