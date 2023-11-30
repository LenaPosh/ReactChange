import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { MenuPage } from "./pages/MenuPage";
import { TradePage } from "./pages/TradePage";
import { WalletPage } from "./pages/WalletPage";
import { BuyCryptoPage } from "./pages/BuyCryptoPage";
import { Navigate } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/home" />,
    },
    {
        path: "/menu",
        element: <MenuPage />,
    },
    {
        path: "/home",
        element: <HomePage />,
    },
    {
        path: "/trade",
        element: <TradePage />,
    },
    {
        path: "/wallet",
        element: <WalletPage />,
    },
    {
        path: "/buyCrypto",
        element: <BuyCryptoPage />,
    },
]);
