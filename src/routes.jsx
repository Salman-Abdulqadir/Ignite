import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./components/layout";
import CreatorsPage from "./components/pages/creators";
import CreatorDetailsPage from "./components/pages/creator-details";
import DevelopersPage from "./components/pages/developers";
import GamesPage from "./components/pages/games";

const routes = [
  { path: "/", element: <GamesPage /> },
  { path: "/creators", element: <CreatorsPage /> },
  { path: "/creators/:id", element: <CreatorDetailsPage /> },
  { path: "/developers", element: <DevelopersPage /> },
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
