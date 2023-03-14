import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Checkout from './views/Checkout';
import Landing from './views/Landing';
import Product from './views/Product';
import Search from './views/Search';
import Cart from './views/Cart';
import Test from './views/Test';

import './App.css';

const router = createBrowserRouter([
  {
    path: "",
    element: <Landing />,
  },
  {
    path: "search",
    element: <Search />
  },
  {
    path: "product",
    element: <Product />
  },
  {
    path: "cart",
    element: <Cart />
  },
  {
    path: "checkout",
    element: <Checkout />
  }
  ,
  {
    path: "test",
    element: <Test />
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
