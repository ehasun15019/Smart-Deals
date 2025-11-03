import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home/Home";
import AllCardsLayout from "../Layouts/AllCardsLayout";
import AllCards from "../Pages/AllCards/AllCards";
import CardDetailsLayout from "../Layouts/CardDetailsLayout";
import CardDetails from "../Pages/CardDetails/CardDetails";
import CreateProductsLayout from "../Layouts/CreateProductsLayout";
import CreateProducts from "../Pages/Create-Products/CreateProducts";
import Register from "../Components/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        path: '/',
        element: <Home></Home>,
      }
    ],
  },
  {
    path: "cards",
    element: <AllCardsLayout></AllCardsLayout>,
    children: [
      {
        path: '/cards/all-cards',
        element: <AllCards></AllCards>
      }
    ]
  },
  {
    path: "details",
    element: <CardDetailsLayout></CardDetailsLayout>,
    children: [
      {
        path: "/details/card-details/:id",
        element: <CardDetails></CardDetails>
      }
    ]
  },
  {
    path: "products",
    element: <CreateProductsLayout></CreateProductsLayout>,
    children: [
      {
        path: "/products/create-products",
        element: <CreateProducts></CreateProducts>
      }
    ]
  },
  {
    path: "register",
    Component: Register
  }
]);