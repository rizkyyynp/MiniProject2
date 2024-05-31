import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import ProtectedRoute from "./ProtectedRoutes";
import Details from "../pages/Details";

export const routeList = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/details/:id",
        element: (
            <ProtectedRoute>
                <Details />
            </ProtectedRoute>
        )
    },
];