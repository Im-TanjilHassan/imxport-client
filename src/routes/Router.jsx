import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AllProducts from "../pages/AllProducts"
import MyExports from "../pages/MyExports"
import MyImports from "../pages/MyImports"
import AddExport from "../pages/AddExport"
import SeeDetails from "../pages/SeeDetails";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true,
                element: <Home></Home>,
            },
            {
                path: '/allProducts',
                element: <AllProducts></AllProducts>
            },
            {
                path: '/allProducts/:id',
                element: <SeeDetails></SeeDetails>
            },
            {
                path: '/myExports',
                element: <MyExports></MyExports>
            },
            {
                path: '/myImports',
                element: <MyImports></MyImports>
            },
            {
                path: '/addExport',
                element: <AddExport></AddExport>
            },
        ]
    }
])