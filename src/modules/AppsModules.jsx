/* eslint-disable react-hooks/exhaustive-deps */
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MODULE_APPS_ROOT } from "../data/config";
import ErrorPage from "./ErrorPage";
import AppFrame from "../components/AppFrame";
import Importations from "../components/importations";
import ProtectRoute from "../components/ProtectRoute";
import Masterplan from "../components/masterPlan/MasterPlan";
import InspectLightIndicator from "../components/importations/InspectPanelModal";

const AppsModules = () => {
  const router = createBrowserRouter([
    {
      path: `${MODULE_APPS_ROOT}/`,
      element: (
        <ProtectRoute>
          <AppFrame />
        </ProtectRoute>
      ),
      errorElement: <ErrorPage />,
      children: [
        {
          path: `${MODULE_APPS_ROOT}/`,
          element: <Importations />,
          errorElement: <ErrorPage />,
        },
        {
          path: `${MODULE_APPS_ROOT}/master-plan`,
          element: <Masterplan />,
          errorElement: <ErrorPage />,
        },
        {
          path: `${MODULE_APPS_ROOT}/shipments`,
          element: <InspectLightIndicator />,
          errorElement: <ErrorPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppsModules;
