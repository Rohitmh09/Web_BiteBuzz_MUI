import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import PageNotFoud from "../Pages/PageNotFoud";
import Menu from "../Pages/Menu";

const router = createBrowserRouter([

    {
        path: "/",
        element: <Layout />,
        children: [
            {path:"", element:<Home />},
            {path:"contact", element:<Contact />},
            {path:"menu", element:<Menu />},
            {path:"error" , element:<PageNotFoud />}
        ],
    }
]);

export default router;