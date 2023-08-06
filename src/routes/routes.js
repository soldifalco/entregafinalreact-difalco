import Dashboard from "../components/page/dashboard/Dashboard";
import CartContainer from "../components/page/cart/CartContainer";
import CheckoutContainer from "../components/page/checkout/CheckoutContainer";
import ItemDetail from "../components/page/itemDetail/ItemDetail";
import ItemListContainer from "../components/page/itemList/ItemListContainer";

export const routes = [
  {
    id: "home",
    path: "/",
    Element: ItemListContainer,
  },
  {
    id: "categorias",
    path: "/categoría/:categoryName",
    Element: ItemListContainer,
  },
  {
    id: "detalle",
    path: "/itemDetail/:id",
    Element: ItemDetail,
  },
  {
    id: "cart",
    path: "/cart",
    Element: CartContainer,
  },
  {
    id: "checkout",
    path: "/checkout",
    Element: CheckoutContainer,
  },

  {
    id: "dashboard",
    path: "/dashboard",
    Element: Dashboard,
  },
];
