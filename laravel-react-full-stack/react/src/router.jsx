import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "./view/login";
import Signup from "./view/signup";
import NotFound from "./view/NotFound";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Dashboard from "./view/Dashboard";
import Users from "./view/users";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            { path: "/", element: <Navigate to={"/users"} /> },
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
            {
                path: "/users",
                element: <Users />,
            },
        ],
    },
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <Signup />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);
export default router;
