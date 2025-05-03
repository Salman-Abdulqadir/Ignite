import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./components/layout";
import CreatorsPage from "./components/pages/creators";
import CreatorDetailsPage from "./components/pages/creatorDetails";

const routes = [
  { path: "/creators", element: <CreatorsPage /> },
  { path: "/creators/:id", element: <CreatorDetailsPage /> },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: routes,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
