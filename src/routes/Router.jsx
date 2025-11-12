import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AllProducts from "../pages/AllProducts"
import MyExports from "../pages/MyExports"
import MyImports from "../pages/MyImports"
import AddExport from "../pages/AddExport"
import SeeDetails from "../pages/SeeDetails";
import PageNotFound from "../pages/PageNotFound";
import Register from "../pages/Register";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/allProducts",
        element: <AllProducts></AllProducts>,
      },
      {
        path: "/allProducts/:id",
        element: (
          <PrivateRoute>
            <SeeDetails></SeeDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/myExports",
        element: (
          <PrivateRoute>
            <MyExports></MyExports>
          </PrivateRoute>
        ),
      },
      {
        path: "/myImports",
        element: (
          <PrivateRoute>
            <MyImports></MyImports>
          </PrivateRoute>
        ),
      },
      {
        path: "/addExport",
        element: (
          <PrivateRoute>
            <AddExport></AddExport>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/*",
    element: <PageNotFound></PageNotFound>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);