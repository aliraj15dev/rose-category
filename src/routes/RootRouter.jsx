import { createBrowserRouter } from "react-router";
import Root from "../components/Root";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import Services from "../pages/Services";
import Profile from "../pages/Profile";

const router = createBrowserRouter([
    {
        path:'/',
        Component:Root,
        children:[
            {index:true, Component:Home},
            {path:'login', Component:Login},
            {path:'logout', Component:Logout},
            {path:'services', Component:Services},
            {path:'profile', Component:Profile},
        ]
    },
    {
        path:'*',
        Component:ErrorPage
    }
])

export default router;