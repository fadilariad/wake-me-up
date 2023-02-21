import { Home } from "./pages/Home";
import AlarmDetails from "./pages/alarm-details";

const AppRoutes = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: '/alarm/:id',
    element: <AlarmDetails />
  }
];

export default AppRoutes;
