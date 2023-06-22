import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import MainLayout from "../layouts/main";
import BotHome from "../pages/bot-home";
import BotLayout from "../layouts/bot";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/bot",
                element: <BotLayout />,
                children: [
                    {
                        path: "/bot",
                        element: <BotHome />
                    }
                ]
            }
        ]
    }
])

export default router;