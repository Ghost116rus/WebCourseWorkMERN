import Admin from "./pages/Admin"
import LibrariyanPage from "./pages/LibrariyanPage";
import Auth from "./pages/Auth"
import BookPage from "./pages/BookPage"
import Shop from "./pages/Shop"
import Home from "./pages/Home"
import SearchPage from "./pages/SearchPage";
import UserCabinet from "./pages/UserCabinet";

import {
    ADMIN_ROUTE,
    LIBRARIAN_ROUTE,
    BOOK_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    SEARCHOME_ROUTE,
    SHOP_ROUTE,
    SEARCH_ROUTE,
    USER_ROUTE
} from "./utils/consts"



export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: LIBRARIAN_ROUTE,
        Component: LibrariyanPage
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
    },
    {
        path: SEARCH_ROUTE + '/:SearchType' + '/:searchString',
        Component: SearchPage
    },
    {
        path: USER_ROUTE,
        Component: UserCabinet
    }
]