import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import BookPage from "./pages/BookPage"
import Shop from "./pages/Shop"
import Home from "./pages/Home"

import {
    ADMIN_ROUTE,
    BOOK_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    SEARCHOME_ROUTE,
    SHOP_ROUTE
} from "./utils/consts"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
]

export const publicRoutes = [
    {
        path: SEARCHOME_ROUTE,
        Component: Home
    },
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: BOOK_ROUTE + '/:id',
        Component: BookPage
    }
]