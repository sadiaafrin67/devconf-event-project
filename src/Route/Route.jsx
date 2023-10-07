import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About";
import FAQ from "../Pages/FAQ";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration";
import RegisteredEvent from "../Pages/Event_reg/RegisteredEvent";
import PrivateRoute from "./PrivateRoute";
import Error from "../Error/Error";
import Service from "../Service/Service";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/public/data.json')
            },
            {
                path: "/about",
                element: <PrivateRoute><About></About></PrivateRoute>
            },
            {
                path: "/faq",
                element: <PrivateRoute><FAQ></FAQ></PrivateRoute>
            },
            {
                path: "/registered",
                element: <PrivateRoute><RegisteredEvent></RegisteredEvent></PrivateRoute>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/registration",
                element: <Registration></Registration>
            },
            {
                path: "/event/:id",
                element: <Service></Service>,
                loader: () => fetch('/public/data.json')
            }
        ]
    }
])

export default routes;