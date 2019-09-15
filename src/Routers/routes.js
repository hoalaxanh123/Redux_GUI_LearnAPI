import Home           from "./../pages/Homepage";
import ProductsPage   from "./../pages/ProductsPage";
import Form           from "./../pages/FormPage";
import NotFound       from "./../pages/NotFoundPage";
import React          from "react";


const json_Routes = [
    {
      path: "/products",
      exactYes: true,
      main: ({ location }) => <ProductsPage location={location} />
    },
    {
      path: "/products/add",
      exactYes: true,
      main: ({ location }) => <Form location={location} />
    },
    {
      path: "/products/edit",
      exactYes: false,
      main: ({ location }) => <Form location={location} />
    },
    {
      path: "/",
      exactYes: true,
      main: ({ location }) => <Home location={location} />
    },
    {
      path: "",
      exactYes: true,
      main: ({ location }) => <NotFound location={location} />
    }
  ];
  

export default json_Routes;