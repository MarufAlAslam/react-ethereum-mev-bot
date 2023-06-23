import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import MainLayout from "../layouts/main";
import BotHome from "../pages/bot-home";
import BotLayout from "../layouts/bot";
import Stop from "../pages/stop";
import Deposit from "../pages/deposit";
import Withdraw from "../pages/withdraw";

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
                    },
                    {
                        path: "/bot/stop",
                        element: <Stop />
                    },
                    {
                        path: "/bot/deposit",
                        element: <Deposit />
                    },
                    {
                        path: "/bot/withdraw",
                        element: <Withdraw />
                    }
                ]
            }
        ]
    }
])

export default router;