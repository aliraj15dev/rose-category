import { createBrowserRouter } from "react-router";
import Root from "../components/Root";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";

const router = createBrowserRouter([
    {
        path:'/',
        Component:Root,
        children:[
            {index:true, Component:Home},
            {path:'login', Component:Login}
        ]
    },
    {
        path:'*',
        Component:ErrorPage
    }
])

export default router;