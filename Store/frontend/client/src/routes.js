import { ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./pages/consts"
import Admin from "./pages/admin"
import Auth from "./pages/auth"
import Basket from "./pages/basket"
import DevicePage from "./pages/devicePage"
import Shop from "./pages/shop"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: <Admin/>
    },
    {
        path: BASKET_ROUTE,
        Component: <Basket/>
    },
]


export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: <Shop/>
    },
    {
        path: LOGIN_ROUTE,
        Component: <Auth/>
    },
    {
        path: REGISTRATION_ROUTE,
        Component: <Auth/>
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Component: <DevicePage/>
    },
]