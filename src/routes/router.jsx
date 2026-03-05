import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Faq from "../pages/Faq/Faq";
import Changelog from "../pages/Changelog/Changelog";
import Blog from "../pages/Blog/Blog";
import Download from "../pages/Download/Download";
import Contact from "../pages/Contact/Contact";
import NewTicket from "../pages/NewTicket/NewTicket";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "faq",
                element: <Faq />
            },
            {
                path: "changelog",
                element: <Changelog />
            },
            {
                path: "blog",
                element: <Blog />
            },
            {
                path: "download",
                element: <Download />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "new",
                element: <NewTicket />
            }
        ]
    }
]);

export default router;