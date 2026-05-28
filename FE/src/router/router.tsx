import React from "react";
import { Route } from "react-router-dom";
import HomeTemplate from "../layouts/HomeTemplate.tsx";
import AdminTemplate from "../layouts/AdminTemplate.tsx";
import HomePage from "../pages/User/Home/Home.tsx";
import Login from "../pages/User/Login/Login.tsx";
import Register from "../pages/User/Register/Register.tsx";

export type AppRoute = {
  path: string;
  element: React.ReactElement;
  nested?: AppRoute[];
};

export const routes: AppRoute[] = [
  {
    path: "",
    element: <HomeTemplate />,
    nested: [
      {
        path: "",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "dangnhap",
    element: <Login />,
    nested: [],
  },
  {
    path: "dangky",
    element: <Register />,
    nested: [],
  },
  {
    path: "admin",
    element: <AdminTemplate />,
    nested: [],
  },
];

export const generateRoutes = (routes: AppRoute[]) => {
  return routes.map((route) => {
    if (route.nested && route.nested.length > 0) {
      return (
        <Route path={route.path} element={route.element} key={route.path}>
          {route.nested.map((nestedRoute) => (
            <Route
              path={nestedRoute.path}
              element={nestedRoute.element}
              key={nestedRoute.path}
            />
          ))}
        </Route>
      );
    }
    return <Route path={route.path} element={route.element} key={route.path} />;
  });
};