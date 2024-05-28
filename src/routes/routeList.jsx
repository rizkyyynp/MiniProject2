import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";

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
];